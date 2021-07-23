import psycopg2
from sqlalchemy import create_engine
import pandas as pd
from flask import Flask, jsonify
from config import db_user, db_password, db_host, db_port, db_name

engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

app = Flask(__name__)

@app.route('/')
def index():
    welcome_msg = 'Welcome to your Flask App. Be sure to navigate to an endpoint.'
    return(welcome_msg)

@app.route("/medianPcoor.csv")
def medianCoor():
    conn = engine.connect()
    results_df = pd.read_sql('SELECT * FROM MedianPrice', conn)
    results_json = results_df.to_json(orient='records')
    print(results_json)
    conn.close()
    return results_json

if __name__ == '__main__':
    app.run(debug=True)

