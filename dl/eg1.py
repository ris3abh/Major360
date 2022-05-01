from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
bot=ChatBot('chatterbot',storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer=ChatterBotCorpusTrainer(bot)
trainer.train('chatterbot.corpus.english')
while True:
  txt=str(input()).strip()
  print(bot.get_response(txt))
  
  