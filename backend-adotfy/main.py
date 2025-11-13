from flask import Flask, make_response, jsonify
from consultas import buscar_animais, buscar_animais_perdidos

app = Flask(__name__)
app.json.sort_keys = False

@app.route('/pets', methods=['GET'])
def listar_pets():
   pets = buscar_animais()
   return make_response(
      jsonify(pets)
   )

@app.route('/pets-perdidos', methods=['GET'])
def listar_pets_perdidos():
   pets = buscar_animais_perdidos()
   return make_response(
      jsonify(pets)
   )


if __name__ == '__main__':
   app.run(debug = True)
