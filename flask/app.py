from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "RunxBuild Flask service running "}

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 8000))
    debug = os.environ.get("DEBUG", "true").lower() == "true"
    app.run(host="0.0.0.0", port=port, debug=debug)