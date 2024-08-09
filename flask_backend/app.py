from flask import Flask, jsonify
from flask_cors import CORS
from models import db, Config, Environments, TOCs

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# # Database configuration
# class Config:
#     SECRET_KEY = 'your_secret_key'
#     SQLALCHEMY_DATABASE_URI = 'mysql://username:password@10.16.3.66/isaminv'  # Replace with your database URI
#     SQLALCHEMY_TRACK_MODIFICATIONS = False

app.config.from_object(Config)
db.init_app(app)

# Route to fetch data from the 'tocs' table
# This is ALL Stations
@app.route('/api/tocs', methods=['GET'])
def get_tocs():
    tocs_data = TOCs.query.all()
    tocs_list = [
        {
            'IdTOC': toc.IdTOC,
            'TOCName': toc.TOCName,
            'TOCOIDStaging': toc.TOCOIDStaging,
            'TOCOIDProduction': toc.TOCOIDProduction
        }
        for toc in tocs_data
    ]
    return jsonify(tocs_list)


# This represents TOC 1 stations and their devices
@app.route('/api/environments', methods=['GET'])
def get_environments():
    environments_data = Environments.query.all()
    environments_list = [
        {
            'IdEnvironment': env.IdEnvironment,
            'EnvironmentName': env.EnvironmentName,
        }
        for env in environments_data
    ]
    return jsonify(environments_list)



if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables if they don't exist
    app.run(debug=True)
