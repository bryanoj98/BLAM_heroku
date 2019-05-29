import socket
import Rpi.GPIO as IO
while(1):
    r=requests.post("https://blam-official-page.herokuapp.com/banda",json={'datos':'raspberry'})
    print(r.json())
