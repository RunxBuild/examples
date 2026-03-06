from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "RunxBuild Fast Api service running"}

