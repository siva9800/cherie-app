from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/products')
def get_products():
    return jsonify([
        {"id": 1, "name": "Designer Jeans", "price": 89.99, "category": "Clothing"},
        {"id": 2, "name": "Organic Tea Set", "price": 24.99, "category": "Food"},
        {"id": 3, "name": "Wireless Headphones", "price": 149.99, "category": "Electronics"}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
