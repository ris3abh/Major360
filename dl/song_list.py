import random
def get_shuffled_song(lst):
    random.shuffle(lst)
    songs_list=[]
    cnt=0
    for i in lst:
        songs_list.append(i)
        cnt+=1
        if cnt==10:
            break
    return songs_list
    
def get_songs(mood):
    
    sad=["Abhi Mujh Mein Kahin","Mujh Mein Tu","Aankh Hai Bhari Bhari","Aaoge Jab Tum","Koi Fariyaad","Main Jahan Rahoon","Oye Raju Pyar Na Kariyo","Mein Duniya Bhuladunga","Tadap Tadap","Tu Hi Re","Chithi Aai Hai","Kisi Nazar Ko Tera Intezar","Koi Yeh Kaise Bataye","Tu Is Tarah Se Meri Zindagi Mein","Jab Bhi Jee Chahe","Khush Rahe Tu Sada","Chahunga Main Tujhe","Dono Ne Kiya Tha Pyar Magar","Yaad Na Jaaye Dil Yeh Pakheru","Hue Hum Jinke Liye Barbad"]
    happy=["Abhi Mujh Mein Kahin","Mujh Mein Tu","Aankh Hai Bhari Bhari","Aaoge Jab Tum","Koi Fariyaad","Main Jahan Rahoon","Oye Raju Pyar Na Kariyo","Mein Duniya Bhuladunga","Tadap Tadap","Tu Hi Re","Chithi Aai Hai","Kisi Nazar Ko Tera Intezar","Koi Yeh Kaise Bataye","Tu Is Tarah Se Meri Zindagi Mein","Jab Bhi Jee Chahe","Khush Rahe Tu Sada","Chahunga Main Tujhe","Dono Ne Kiya Tha Pyar Magar","Yaad Na Jaaye Dil Yeh Pakheru","Hue Hum Jinke Liye Barbad"]
    neutral=["Abhi Mujh Mein Kahin","Mujh Mein Tu","Aankh Hai Bhari Bhari","Aaoge Jab Tum","Koi Fariyaad","Main Jahan Rahoon","Oye Raju Pyar Na Kariyo","Mein Duniya Bhuladunga","Tadap Tadap","Tu Hi Re","Chithi Aai Hai","Kisi Nazar Ko Tera Intezar","Koi Yeh Kaise Bataye","Tu Is Tarah Se Meri Zindagi Mein","Jab Bhi Jee Chahe","Khush Rahe Tu Sada","Chahunga Main Tujhe","Dono Ne Kiya Tha Pyar Magar","Yaad Na Jaaye Dil Yeh Pakheru","Hue Hum Jinke Liye Barbad"]
    sad_lst=get_shuffled_song(sad)
    neutral_lst=get_shuffled_song(neutral)
    happy_lst=get_shuffled_song(happy)
        
    lst={'happy':happy_lst,'sad':sad_lst,'neutral':neutral_lst}
    if mood=='sad':
        return lst[mood]
        print(len(lst[mood]))
    if mood=='happy':
        return lst[mood]
    if mood=='neutral':
        return lst[mood]



        
