## 🌩️ AWS S3 File Manager

Um projeto Node.js + Express para gerenciar arquivos no Amazon S3! Permite upload, listagem, download e exclusão de arquivos diretamente de um bucket S3. 🚀

## 📋 Funcionalidades

🖼️ Upload: Envie arquivos para o S3 diretamente.
📜 Listagem: Veja todos os arquivos dentro do seu bucket.
📥 Download: Baixe arquivos de qualquer lugar.
🗑️ Exclusão: Remova arquivos do bucket facilmente.

## 🚀 Tecnologias

- [Node.js]
- [Express📦]
- [AwsSDK🔧] para integração com o S3 🔧
- [Multer-S3] para gerenciamento de uploads na AWS 🌐

## 📂 Estrutura do Projeto

```bash
Copy code
.
├── config
│   └── s3service.ts     # Configuração do cliente S3
├── controllers
│   └── postController.ts # Lógica de upload, listagem, download e exclusão
├── middlewares
│   └── multer           # Rotas de acesso aos arquivos
├── .env                 # Configurações do ambiente
└── index.ts             # Inicialização do servidor Express
└── routes.ts            # Rotas para executar funcoes
```

## 🛠️ Pré-requisitos

Node.js
AWS S3: Uma conta AWS com um bucket S3 configurado
Configuração de Credenciais: Defina suas credenciais AWS no .env

## ⚙️ Configuração

```bash

$   Clone este repositório:
git clone https://github.com/seu-usuario/AWS-S3-File-Manager.git
$   Instale as dependências:
npm install
```

Configure o arquivo .env com suas credenciais AWS e o nome do bucket S3
```bash
REGION=us-east-1
ACCESS_KEY=your-access-key
ACCESS_SECRET=your-secret-key
BUCKET_NAME=your-bucket-name
```

## Inicie o servidor:

```bash
Copy code
npm run start
```

## 🖥️ Endpoints

1. Upload de Arquivo
   POST /upload
   Descrição: Envia um arquivo para o bucket S3.
1. Listagem de Arquivos
   GET /list
   Descrição: Lista todos os arquivos dentro do bucket.
2. Download de Arquivo
   GET /download/:filename
   Descrição: Baixa o arquivo especificado do bucket.
   Parâmetro: filename - Nome do arquivo a ser baixado.
3. Exclusão de Arquivo
   DELETE /delete/:filename
   Descrição: Remove o arquivo do bucket.
   Parâmetro: filename - Nome do arquivo a ser excluído.
   
## 🛡️ Segurança
   
⚠️ Nota: Nunca compartilhe suas credenciais da AWS publicamente! Este projeto usa um .env para mantê-las seguras, mas é essencial seguir as melhores práticas de segurança em produção.

Divirta-se desenvolvendo! 😄
