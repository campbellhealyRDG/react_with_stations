# models.py

import os
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Setup connection to the database
class Config:
    SECRET_KEY = os.urandom(24)
    SQLALCHEMY_DATABASE_URI = 'mysql://isaminv:Asdred2312@10.16.3.66/isaminv'  # Replace with your database URI
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class TOCs(db.Model):
    __tablename__ = 'tocs'

    IdTOC = db.Column(db.Integer, primary_key=True)
    TOCName = db.Column(db.String(50))
    TOCOIDStaging = db.Column(db.String(255))
    TOCOIDProduction = db.Column(db.String(255))

class Environments(db.Model):
    __tablename__ = 'environments'

    IdEnvironment= db.Column(db.Integer, primary_key=True)
    EnvironmentName = db.Column(db.String(20))


def __repr__(self):
    return f"<TOCs(TOCName='{self.TOCName}', TOCOIDStaging='{self.TOCOIDStaging}', TOCOIDProduction='{self.TOCOIDProduction}')>"

    
# _________________ End ________________
