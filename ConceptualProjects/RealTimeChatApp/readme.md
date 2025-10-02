# Project understanding:

## 1. Real-Time communication kya hota hai.
 - Real time communication ka matlab hai data instantly exchange hona,bina page reload hue.
 - browser me ye websockets ya socket.io ke through possible hai.
 - tradittional http me browser request bhejta hai-> server response deta hai -> fir next request.
   - **Limitaion**->slow aur page reload chahiye update ke liye.
- Socket.io/WebSocket -> connection ek baar establish -> server aur client dono continuously data bhej sakte hain.


## Backend Role:
 - Server sab connected clients ka manage karta hai.
 - messages ko receive karta hai aur broadcast karta hai sab clients ko.

## Frontend Role :
 - User interface : HTML+CSS
 - javascript : handle input,send message to server ,display messages received from server.

 