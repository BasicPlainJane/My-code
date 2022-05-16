from tkinter import *


def raise_frame(frame):
    frame.tkraise()


root = Tk()
root.geometry("700x350")


f1 = Frame(root)
f2 = Frame(root)
f3 = Frame(root)
f4 = Frame(root)
f5 = Frame(root)
f6 = Frame(root)
f7 = Frame(root)
f8 = Frame(root)
f9 = Frame(root)
f10 = Frame(root)
f11 = Frame(root)
f12 = Frame(root)
f13 = Frame(root)
f14 = Frame(root)
f15 = Frame(root)
f16 = Frame(root)
f17 = Frame(root)
f18 = Frame(root)
f19 = Frame(root)
f20 = Frame(root)
f21 = Frame(root)
f22 = Frame(root)
f23 = Frame(root)
f24 = Frame(root)
f25 = Frame(root)
f26 = Frame(root)
f27 = Frame(root)
f28 = Frame(root)

for frame in (f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23,
              f24, f25, f26, f27, f28):
    root.grid_rowconfigure(0, weight=1)
    root.grid_columnconfigure(0, weight=1)
    frame.grid(row=0, column=0, sticky="nsew")


Label(f1, text='Hello to start the game click the start button.').pack()
Button(f1, text='Start', command=lambda: raise_frame(f2)).pack()


Label(f2, text='You find yourself dreaming and come across this place, '
               '\n clouds cover all around you there is only two things that you can make out.'
               '\n There is a bench and a staircase, which one will you choose? ').pack()
Button(f2, text='Staircase', command=lambda: raise_frame(f3)).pack()
Button(f2, text='Bench', command=lambda: raise_frame(f4)).pack()

Label(f3, text='You step on to the staircase and it looks like glass under your feet. '
               '\n When you reach the top, the stairs seem to fade away a hallway of doors come into view'
               '\n there is a door on the right and a door on the left '
               '\nwhich door will you pick?').pack()
Button(f3, text='Open the first door on the right?', command=lambda: raise_frame(f5)).pack()
Button(f3, text='Open the first door on the left?', command=lambda: raise_frame(f6)).pack()


Label(f4, text='You chose to sit on the bench but this is supposed to be an adventure want to try again?').pack()
Button(f4, text='Restart?', command=lambda: raise_frame(f1)).pack()


Label(f5, text='As you step threw the door you are hit in the face with the sounds and smell of the sea.'
               '\n Your eyes adjust and you see a woman the only other person here besides yourself talk to her?').pack()
Button(f5, text='walk along the beach.', command=lambda: raise_frame(f7)).pack()
Button(f5, text='Talk to the woman?', command=lambda: raise_frame(f8)).pack()
Button(f5, text='Take a swim in the ocean.', command=lambda: raise_frame(f9)).pack(),

Label(f6, text='As you walk threw the door you enter a building'
               '\n you can see the outside from here due to windows all along the wall '
               '\n then you see a door that looks out of place and opposite of it is a door'
               '\n to the outside as it is see through. ').pack()
Button(f6, text='Go out the door to the outside? ', command=lambda: raise_frame(f14)).pack()
Button(f6, text='choose the door that is probably inside?', command=lambda: raise_frame(f13)).pack()


Label(f7, text='As you walk along the beach you see a structure under the pier '
               '\nas you stride towards it you can make out its a cute little house '
               '\nyou walk up to it and knock but no answer what will you do? ').pack()
Button(f7, text='Open the door as it seems unlocked', command=lambda: raise_frame(f10)).pack()
Button(f7, text='Wait for whoever lives here, to come home', command=lambda: raise_frame(f11)).pack()


Label(f8, text='You say hello to the woman because you do not know what time of day it is and she smiles back.'
               '\nShe then tells you she will answer any question you may want to ask her. '
               '\nYou feel warm and safe with this woman although unsure why.').pack()
Button(f8, text='How did I get here ', command=lambda: raise_frame(f12)).pack()
Button(f8, text='How do I get home.', command=lambda: raise_frame(f12)).pack()

Label(f9, text='You cant swim in a dream so you drown, restart.').pack()
Button(f9, text='Restart', command=lambda: raise_frame(f1)).pack()

Label(f10, text='You step through the door and what you see before you is a small cottage and a little lake'
                '\n trees and flowers in full bloom all round and the sent along with it,'
                '\n you decide this is a very cheerful place '
                '\neven though its not at all like you thought it would be.').pack()
Button(f10, text='Walk over to look upon the pond?', command=lambda: raise_frame(f23)).pack()
Button(f10, text='Head toward the cottage?', command=lambda: raise_frame(f24)).pack()

Label(f11, text='You wait all day it seems for someone to come home and you get hungry '
                '\nso you go to the pier and grab some food and then come back '
                '\nbut a person doesnt actually come home till sunset and when they do and you see'
                '\n that it is a turtle and he is kind enough to offer you to come inside but before he does'
                '\n he gives you a small silver key with a smile.').pack()
Button(f11, text='Thank him and walk in.', command=lambda: raise_frame(f10)).pack()


Label(f12, text='It doesnt matter how you came to be here or how to leave it only matters about'
                '\n the journey that came and went. Her voice so melodious as she spoke.'
                '\n She gives you only one piece of advice and that is to go to the turtles house under the pier.'
                '\nWalking up to the charming little house will you open the door or wait?').pack()
Button(f12, text='Open the door as it is unlocked?', command=lambda: raise_frame(f10)).pack()
Button(f12, text='Wait for the turtle to return?', command=lambda: raise_frame(f11)).pack()

Label(f13, text='So the door that you hope to be inside actually opens up to a hallway. You walk down the hallway'
                '\n but there nothing out of the ordinary. You see a room full of books on bookcases'
                '\n and at the end of the hall you see another glass door looking out to the forest outside. .').pack()
Button(f13, text='Enter the room of books', command=lambda: raise_frame(f20)).pack()
Button(f13, text='The door to the outside ', command=lambda: raise_frame(f14)).pack()

Label(f14, text='You step out side and breath in the fresh air and it smells of sweet pine but what now?.').pack()
Button(f14, text='Walk around the forest', command=lambda: raise_frame(f15)).pack()
Button(f14, text='Walk around to the back side of this place?', command=lambda: raise_frame(f17)).pack()
Button(f14, text='Go back to the door to go back in?', command=lambda: raise_frame(f16)).pack()

Label(f15, text='You walk around the forest but you go to far and get lost.').pack()
Button(f15, text='Restart', command=lambda: raise_frame(f1)).pack()


Label(f16, text='You try to open the door but its locked and you cant get back in.').pack()
Button(f16, text='Walk around the forest?', command=lambda: raise_frame(f15)).pack()
Button(f16, text='Walk around to the back?', command=lambda: raise_frame(f17)).pack()

Label(f17, text='As you walk around from the back you see another door and it is also see through.'
                '\nYou pull to open it and when you see its unlocked you walk in but there is two sets of stairs'
                '\n one that goes up and one that goes down.').pack()
Button(f17, text='Go upstairs', command=lambda: raise_frame(f18)).pack()
Button(f17, text='Go downstairs', command=lambda: raise_frame(f19)).pack()

Label(f18, text='Once up the stairs you can see a door to the outside and another door '
                '\n both doors from when you first came here but now '
                '\n you are pulled to this other door.').pack()
Button(f18, text='Open the door', command=lambda: raise_frame(f13)).pack()

Label(f19, text='You step downstairs even though you can barely see but there is a small window and light from outside'
                '\nglistens inside you now can tell you are in a basement there is nothing down here exept'
                '\n as you follow the light from the window it highlight a small golden key on the ground.').pack()
Button(f19, text='Pick up the key then go up stairs?', command=lambda: raise_frame(f18)).pack()
Button(f19, text='Leave the key and go upstairs?', command=lambda: raise_frame(f18)).pack()

Label(f20, text='You step into the room, it smells like old book pages and its a very nice smell. '
                '\n You walk around the room with your fingers tapping the bindings of all the books when something '
                '\nseems out of place. A book is not pushed in all the way').pack()
Button(f20, text='Push the book back in?', command=lambda: raise_frame(f21)).pack()
Button(f20, text='Pick the book up to look at it?', command=lambda: raise_frame(f22)).pack()

Label(f21, text='When you push the book in a secret door opens.').pack()
Button(f21, text='Go through the secret door.', command=lambda: raise_frame(f10)).pack()
Button(f21, text='Look at the book', command=lambda: raise_frame(f22)).pack()

Label(f22, text='When you pick up the book to look at it the book has a title of '
                '\n"When one door closes another opens" after reading the book you notice a secret door.').pack()
Button(f22, text='Go through the secret door.', command=lambda: raise_frame(f10)).pack()

Label(f23, text='You walk over to the pond and as you peer into it you become dazed and fall into the pond.'
                '\nWhile you are falling further and further away from the surface you hear a voice in your head'
                '\n"You must be more careful how many times is this?"'
                '\n and because you cant swim in a dream you drown restart .').pack()
Button(f23, text='Try again and be more careful?', command=lambda: raise_frame(f1)).pack()


Label(f24, text='You walk up to the little cottage and politely knock on the door that is '
                '\n exactly your height but fits the cottage perfectly. After a short time '
                '\na small man opens the door, not a small man but a dwarf. He gives you a kind smile and says'
                '\n "Hello stranger my name is Wilbur would you like to come in for a cup of tea?').pack()
Button(f24, text='Accept his offer for tea', command=lambda: raise_frame(f25)).pack()
Button(f24, text='Decline and go to the pond', command=lambda: raise_frame(f23)).pack()

Label(f25, text='You step through the door and into the cottage. He offers a tiny chair '
                '\nand you both conduct small conversation as he gets the tea ready. Once the tea is ready '
                '\nyou take a sip and suddenly you have new found consciousness you understand'
                '\n you can create doors of your own to pass through from one place to another or even '
                '\nwake up at this point. ').pack()
Button(f25, text='Will you create a door?', command=lambda: raise_frame(f27)).pack()
Button(f25, text='Are you ready to wake up?', command=lambda: raise_frame(f26)).pack()

Label(f26, text='You woke up! I hope you had a great adventure and thank you for playing my game.').pack()


Label(f27, text='You once again step through the door only this time you created the door. '
                '\nYou find yourself back in the hallway that which you started only'
                '\nthe first two doors are gone. '
                '\nThe next two doors on the left and right say that it requires keys... ').pack()
Button(f27, text='Open the door on the left if you have the silver key?', command=lambda: raise_frame(f28)).pack()
Button(f27, text='Open the door on the right if you have the gold key?', command=lambda: raise_frame(f28)).pack()
Button(f27, text='Create your own door with no key needed?', command=lambda: raise_frame(f28)).pack()

Label(f28, text='Unfortunately the game ends here but I commend you for wanting to continue '
                '\nand thank you for playing perhaps sometime in the future you will be able to continue '
                '\ntill that day comes keep dreaming.').pack()
Button(f28, text='Would you like to play again?', command=lambda: raise_frame(f1)).pack()

raise_frame(f1)
root.mainloop()