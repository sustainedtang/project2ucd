
    
import psycopg2
from sqlalchemy import create_engine
import pandas as pd
from flask import Flask, jsonify, render_template
from config import db_user, db_password, db_host, db_port, db_name

engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/medianPcoor")
def medianCoor():
    conn = engine.connect()
    results_df = pd.read_sql('SELECT * FROM medianPcoor', conn)
    results_json = results_df.to_json(orient='records')
    print(results_json)
    conn.close()
    return results_json


@app.route("/percentChgCoor")
def percentCoor():
    conn = engine.connect()
    results_df = pd.read_sql('SELECT * FROM percentChgCoor', conn)
    results_json = results_df.to_json(orient='records')
    print(results_json)
    conn.close()
    return results_json    

@app.route("/population")
def population():
    conn = engine.connect()
    results_df = pd.read_sql('SELECT * FROM countycoor', conn)
    results_json = results_df.to_json(orient='records')
    print(results_json)
    conn.close()
    return results_json 


if __name__ == '__main__':
    app.run(debug=True)