# Escolhe uma imagem base oficial do Python
FROM python:3.9@sha256:c17c71e1f5f258803a6b7c391f8013adbf84285af54c2a811de4a5a1ac5a8676
 
# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app
 
# Instala as dependências do sistema necessárias
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/* 
 
# Instala Jupyter, Scikit-learn e Keras
RUN pip install --no-cache-dir \
    jupyter \
    keras \
    matplotlib \
    numpy \
    pandas \
    scikit-learn \
    scipy \
    seaborn \
    tensorflow

# Exponha a porta usada pelo Jupyter Notebook
EXPOSE 8888
 
# Define o comando padrão para rodar o Jupyter Notebook
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
