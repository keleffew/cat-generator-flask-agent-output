import os
from flask import Flask, render_template, url_for
import urllib.parse

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "a secret key"

@app.route('/')
def index():
    css_url = url_for('static', filename='css/styles.css', v=os.path.getmtime('static/css/styles.css'))
    return render_template('index.html', css_url=css_url)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
