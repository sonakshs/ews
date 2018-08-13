from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from locker.views import UploadDigiLockerView, RetrieveDigiLockerView

urlpatterns = [

    url(r'^ewsupload/$',csrf_exempt(UploadDigiLockerView.as_view())),
    url(r'^ewsdownload/$',csrf_exempt(RetrieveDigiLockerView.as_view())),

]