from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

chatbot=ChatBot('corona bot')
trainer = ChatterBotCorpusTrainer(chatbot.storage)
trainer.train("chatterbot.corpus.english" )
  
# while True:
#   txt=str(input()).strip()
#   response = chatbot.get_response(txt)
#   print(response)
def getResponse(msg):
    return str(chatbot.get_response(msg))
