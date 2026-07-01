from fastapi import FastAPI

app = FastAPI(
    title="Echooo API",
    version="1.0.0",
    description="Backend API for Echooo AI Second Brain"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to Echooo API 🚀"
    }