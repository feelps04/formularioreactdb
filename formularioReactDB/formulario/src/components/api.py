from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Configurações do banco de dados
conexao = mysql.connector.connect(
    host="localhost",
    user="",
    password="",
    database="cadastro1"
)

@app.route('/inserir_dados', methods=['POST'])
def inserir_dados():
    try:
        data = request.get_json()

        # Extraia os dados do JSON enviado pela solicitação
        empresa = data.get("empresa")
        email = data.get("email")
        cnpj = data.get("cnpj")
        fone = data.get("fone")
        nome_solicitante = data.get("nomeSolicitante")

        cursor = conexao.cursor()

        # Inserir dados na tabela "cadastro1"
        inserir_dados = """
            INSERT INTO cadastro1 (titulo, descrição, requisitos_comportamentais, requisitos_técnicos, responsabilidades, benefícios)
            VALUES (%s, %s, %s, %s, %s, %s)
        """

        # Executar a inserção de dados
        cursor.execute(inserir_dados, (empresa, email, cnpj, fone, nome_solicitante))

        # Confirmar a inserção dos dados no banco de dados
        conexao.commit()

        # Fechar o cursor
        cursor.close()

        return jsonify({"message": "Dados inseridos com sucesso!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
