import sys
sys.path.insert(0, "C:\majorProject\major\dl")
from chat_bott import getResponse
#from main1 import get_response
from song_list import get_songs
from flask import Flask,jsonify,request
import random
app=Flask(__name__)


@app.route('/')
def index():
    return "welcome to the course API"

@app.route('/sendMessage',methods=['Post'])
def get_text():
    jsony=request.json
    msg=jsony['message']
    botMessage=getResponse(str(msg).strip())
    
    mood=random.choice(['happy','sad','neutral'])
    ls=get_songs(mood)    
    e={'botMessage':botMessage,'mood':mood,'songs':ls}
    
    return e



if __name__=="__main__":
    app.run(host='0.0.0.0', port=5050)
    