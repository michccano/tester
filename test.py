from requests.auth import HTTPBasicAuth
import requests
from flask import Flask, render_template,request
from flask_json import FlaskJSON, JsonError, json_response, as_json
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__, static_url_path='/static')
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True


CORS(app)



@app.route('/<path>')
def index(path):

    now = datetime.now()


    asd = requests.get('https://clippingmagic.com/api/v1/images/'+path, auth=HTTPBasicAuth('9461', 'l9d9drhgc66s7j11spem2m47tlc2cfai7j0dm9qbmqm02hpfodnj')).content

    tmp = now.strftime("%d%m%Y%H%M%S")
    with open('./static/'+tmp+'.jpg', 'wb') as handler:
        handler.write(asd)

    return tmp


@app.route('/get/<path:path>')
def get(path):
    app.send_static_file(path+'.jpg')




if __name__ == '__main__':
   app.run()