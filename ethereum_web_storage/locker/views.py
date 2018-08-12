from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.core import serializers


# from pyDes import * 
import random
from umbral import pre, keys, config, signing
import json,ipfsapi
from django.http import QueryDict
from wsgiref.util import FileWrapper
from .constants import *


# Create your views here.

global mapper


mapper = {}

class UploadDigiLockerView(View):

    def __init__(self):
        self.output_response = {}
        # config.set_default_curve()

    def _send_to_ipsd(self, file):
        # import pdb;pdb.set_trace()
        api = ipfsapi.connect('ipfs.infura.io', 5001)
        # const ipfs = new IPFS({ host: "ipfs.infura.io", port: 5001, protocol: "https" });
        res = api.add(file)
        print(res)
        # {'Hash': 'QmWxS5aNTFEc9XbMX1ASvLET1zrqEaTssqt33rVZQCQb22', 'Name': 'test.txt'}
        return api.cat(res['Hash'])
        # 'fdsafkljdskafjaksdjf\n'

    def initialize_map(self, priv_key, ciphertext, capsule):
        mapper[PREV_KEY] = alices_private_key.to_bytes()
        mapper[CIPHER] = ciphertext
        mapper[CAPSULE] = capsule


    def post(self, request, *args, **kwargs):
        data = QueryDict(request.body)
        # import pdb;pdb.set_trace()
        global alices_private_key, alices_public_key, plaintext
        plaintext = request.FILES.get('file',[])
        plaintext = plaintext.read()
        alices_private_key = keys.UmbralPrivateKey.gen_key()
        alices_public_key = alices_private_key.get_pubkey()

        alices_signing_key = keys.UmbralPrivateKey.gen_key()
        alices_verifying_key = alices_signing_key.get_pubkey()
        alices_signer = signing.Signer(private_key=alices_signing_key)
        global capsule, ciphertext
        ciphertext, capsule = pre.encrypt(alices_public_key, plaintext)
        # print(alices_private_key.to_bytes())
        # print(alices_public_key.to_bytes())
        print('CAPSULE:'+str(capsule.to_bytes()))
        print('CIPHERTEXT: '+str(ciphertext))
        tem = {}
        self.initialize_map(alices_private_key.to_bytes(),ciphertext,capsule)
        tem['ciphertext'] = CIPHER
        tem['capsule'] = CAPSULE
        return HttpResponse(json.dumps(tem),status = 201)
        # self.output_response['res_data'] = self._send_to_ipsd(plaintext)


    def get(self, request, *args, **kwargs):
        data = request.GET
        # import pdb;pdb.set_trace()
        ciphertext = data.get('ciphertext')
        print(ciphertext)
        # ciphertext = data.get('file_hash')
        cleartext = pre.decrypt(ciphertext=ciphertext, 
                                    capsule=capsule, 
                                    decrypting_key=alices_private_key)
        print(cleartext)
        self.output_response['res_data'] = tem
        return HttpResponse(json.dumps(self.output_response['res_data']),status = 201)

    def put(self, request, *args, **kwargs):
        # import pdb;pdb.set_trace()
        data = QueryDict(request.body)
        # ciphertext = request.FILES.get('file',[])
        # ciphertext = ciphertext.read()
        capsule = mapper.get(data.get('capsule'))
        ciphertext = mapper.get(data.get('ciphertext'))
        print('CIPHERTEXT: '+ciphertext)
        print(alices_private_key)
        print('CAPSULE:'+capsule)
        cleartext = pre.decrypt(ciphertext=ciphertext, 
                                capsule=capsule, 
                                decrypting_key=mapper[PREV_KEY])
        print(cleartext)
        tem = str(cleartext).split("'")[1]
        test_file = open('geek.txt', 'w+')
        test_file.write(tem)
        response = HttpResponse(content=test_file,content_type='application/pdf')
        # response['Content-Type'] = 'application/pdf'
        response['Content-Disposition'] = 'attachment; filename="%s.txt"' \
                                          % 'whatever'
        return response

class RetrieveDigiLockerView(View):

    def post(self, request, *args, **kwargs):
        # import pdb;pdb.set_trace()
        data = QueryDict(request.body)
        try:
            capsule = mapper.get(data.get('capsule'))
            ciphertext = mapper.get(data.get('ciphertext'))
            print('CIPHERTEXT: '+str(ciphertext))
            print(alices_private_key)
            print('CAPSULE:'+str(capsule.to_bytes()))
            cleartext = pre.decrypt(ciphertext=ciphertext, 
                                    capsule=capsule, 
                                    decrypting_key=alices_private_key)
            print(cleartext)
            tem = str(cleartext).split("'")[1]
            test_file = open('geek.txt', 'w+')
            test_file.write(tem)
            response = HttpResponse(content=test_file,content_type='application/pdf')
            # response['Content-Type'] = 'application/pdf'
            response['Content-Disposition'] = 'attachment; filename="%s.txt"' \
                                              % 'decrypted'
            return response
        except Exception:
            return HttpResponse('Your capsule or ciphertext is incorrect...Please check',status = 400)

