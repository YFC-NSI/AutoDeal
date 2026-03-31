#Écrire la fonction maximum_tableau, prenant en paramètre un tableau non vide de nombres tab (de type list) et renvoyant le plus grand élément de ce tableau.
#Exemples :
#>>> maximum_tableau([98, 12, 104, 23, 131, 9])
#131
#>>> maximum_tableau([-27, 24, -3, 15])
#24

def max_tableau(tab):
    v_max = tab[0]
    for i in range(len(tab)):
        if v_max < tab[i+1]:
            v_max = tab[i+1]
        else:
    return(print(v_max))

l1 = [98, 12, 104, 23, 131, 9]

max_tableau(l1)