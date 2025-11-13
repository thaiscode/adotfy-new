import sqlite3

conn = sqlite3.connect('adocao.db', check_same_thread=False)
cur = conn.cursor()

def buscar_animais():
    lista = []

    cur.execute('SELECT a.id_animal, a.nome, a.idade, a.sexo, a.raca, o.endereco FROM animal a INNER JOIN ong o ON a.id_ong = o.id_ong;')
    for row in cur.fetchall(): #row = (id_animal, nome, idade, sexo, raca, endereco)
        animal = {
            'id': row[0],
            'nome': row[1],
            'idade': row[2],
            'sexo': row[3],
            'raca': row[4],
            'localizacao': row[5]
        }
        lista.append(animal)
    
    return lista

def buscar_animais_perdidos():
    lista = []

    cur.execute('SELECT * FROM animal_perdido;')
    for row in cur.fetchall(): #row = (id_animalPerdido, nome, sexo, localizacao, contato)
        animal = {
            'id': row[0],
            'nome': row[1],
            'sexo': row[2],
            'localizacao': row[3],
            'contato': row[4]
        }
        lista.append(animal)
    
    return lista

#conn.close()
