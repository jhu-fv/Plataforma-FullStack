import os
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

CSV_PATH = os.path.join(os.path.dirname(__file__), "api.csv")
app = Flask(__name__)
CORS(app)

def carregar_acomodacoes():
    try:
        df = pd.read_csv(CSV_PATH)
        df["id"] = df["id"].astype(int)
        return df
    except Exception as e:
        print(f"Erro ao carregar CSV: {e}")
        return pd.DataFrame()

def formatar_preco(preco):
    return f"R$ {preco:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

@app.route("/acomodacoes", methods=["GET"])
def listar_acomodacoes():
    localizacao = request.args.get("localizacao")
    acomodacoes = carregar_acomodacoes()
    if acomodacoes.empty:
        return jsonify({"erro": "Erro ao carregar acomodações"}), 500
    if localizacao:
        acomodacoes = acomodacoes[acomodacoes["localizacao"].str.contains(localizacao, case=False, na=False)]
    
    if 'preco' in acomodacoes.columns:
        acomodacoes['preco'] = acomodacoes['preco'].apply(formatar_preco)

    return jsonify(acomodacoes.to_dict(orient="records"))

@app.route("/acomodacoes/<int:id>", methods=["GET"])
def listar_acomodacoes_id(id):
    acomodacoes = carregar_acomodacoes()
    if acomodacoes.empty:
        return jsonify({"erro": "Erro ao carregar acomodações"}), 500
    acomodacao = acomodacoes[acomodacoes["id"] == id]
    if acomodacao.empty:
        return jsonify({"erro": "Acomodação não encontrada"}), 404

    if 'preco' in acomodacao.columns:
        acomodacao['preco'] = acomodacao['preco'].apply(formatar_preco)

    return jsonify(acomodacao.to_dict(orient="records")[0])

if __name__ == "__main__":
    app.run(debug=True, port=5000)