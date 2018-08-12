## Ethereum Web Services (EWS)
                             ....Security At every Step
## Description

Our platform is named as EWS which serves as a web portal for the government to maintain record of centrally recognised       
certificates such as High school certificate,National Id etc.The government officials can upload files to ipfs through our     
portal and all those certificates get linked to the user's/citizen's public address through our smart contract built on       
solidity.A user can any time view his credentials when logged in through metamask.Also our platform user NuCypher's encryption 
and decryption algorithm,Umbral, to main additional security for private documents like National Id.Those encrypted documents 
can only be viewed by the user who has the encryption key and the capsule,thus enhancing security.
      
## Running EWS
        
        . git clone https://github.com/sonakshs/ews.git
        
        . npm install
        
        . Make sure metamask is installed in browser
        
        . Log in into metamask
        
        . npm start then see the app running at http://localhost:3000/
        
        . Choose file to upload to IPFS server
        
        . See your files on View section
        
## Encrypting your private files (running our backend)
 Follows these steps to get NuCypher up and running in backend
 
    . pipenv install --dev --three --skip-lock
    
    . pipenv shell
    
    . pip3 install -e .
    
    . pip install virtualenv
    
    . virtualenv yourenv -p python3.6 ##Make sure version is not 3.7 (edited)

    . pip install django==1.9
        
