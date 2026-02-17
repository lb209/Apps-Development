#string 
str="My Name is Python \n and Whate is your name"
outpuy=str
print("string is",outpuy)
print("#****************#")

#concatenate two string
str="hello"
strd="world"
print("concatnation is",str+strd)
print("#****************#")
#length

coen="Python"
prei="Java"
pri=coen+" "+prei
print("lenget is",len(pri))
print("#****************#")



#index

stri="Github"
print("index is",stri[3])
print("#****************#")
#slicing
stri="Githubclone"
print("slicing is",stri[3:7])
print("#****************#")

get="apple"
print("slicing is",get[-3:-1])
print("#****************#")



#string function


#check endswith string
bef="i am a good person"
print("when your string or wrod is end son than your output is true other false :",bef.endswith("son"))
print(bef.endswith("gon"))
print("#****************#")

#capitalize string
bef="i am a good person"
print("your fist word is capital:",bef.capitalize())
print("#****************#")
#replace string
bef="i am a good person"
print(bef.replace("o","z"))
print("#****************#")


#find string

pyt="hy how are you"
print("find index of number :",pyt.find("a"))

print("#****************#")

#count string

pyt="hy how are you"
print("Repete your char is:",pyt.count("h"))
print("#****************#")

#solve the question 1
#wrie a program input user fist name & print its length
#solution
check =input("what your name:")
print("Your name length is :",len(check))
print("#****************#")


#solve the question 2
#write a program  to find occurrence  of '$' in a stting
check= "one $ equal is 350pk how one $ price in india "
print("$ count is :",check.count("$"))