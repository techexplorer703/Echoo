from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.database.database import Base, engine
from app.models.user import User

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Echooo API",
    version="1.0.0",
    description="Backend API for Echooo AI Second Brain"
)

app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Echooo API 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "Backend Running",
        "database": "Connected"
    }