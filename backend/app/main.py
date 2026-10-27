from fastapi import FastAPI

app = FastAPI(title="LearnPath")

@app.get("/health")
def verificar_estado():
    return {"status": "ok"}

@app.get("/api/v1/cursos")
def obtener_cursos():
    return {
        "items": [],
        "total": 0,
        "page": 1,
        "page_size": 20
    }
