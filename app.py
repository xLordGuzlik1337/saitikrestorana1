from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# Создаем соединение с базой данных SQLite
conn = sqlite3.connect('reviews.db')
c = conn.cursor()

# Создаем таблицу для отзывов, если она еще не существует
c.execute('''CREATE TABLE IF NOT EXISTS reviews 
             (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, review_text TEXT, emoji TEXT)''')
conn.commit()
conn.close()

# Главная страница с HTML
@app.route('/')
def index():
    return render_template('otzivi.html')

# API для сохранения нового отзыва
@app.route('/api/add_review', methods=['POST'])
def add_review():
    data = request.get_json()
    username = data.get('username', 'Аноним')
    review_text = data['reviewText']
    emoji = data['selectedEmoji']

    conn = sqlite3.connect('reviews.db')
    c = conn.cursor()
    c.execute("INSERT INTO reviews (username, review_text, emoji) VALUES (?, ?, ?)", (username, review_text, emoji))
    conn.commit()
    conn.close()

    return jsonify({'success': True})

# API для получения списка отзывов
@app.route('/api/get_reviews', methods=['GET'])
def get_reviews():
    conn = sqlite3.connect('reviews.db')
    c = conn.cursor()
    c.execute("SELECT username, review_text, emoji FROM reviews")
    reviews = [{'username': row[0], 'reviewText': row[1], 'selectedEmoji': row[2]} for row in c.fetchall()]
    conn.close()

    return jsonify(reviews)

if __name__ == '__main__':
    app.run(debug=True)
