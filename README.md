# CustomForm Salesforce LWC

Um componente Lightning Web Component (LWC) que permite atualizar a **prioridade de um registro Case** diretamente na interface do Salesforce. Ele utiliza um serviço Apex para persistir a alteração e fornece feedback visual ao usuário.

---

## 📦 Estrutura do Projeto

- **Apex Class**
  - `CustomService.cls` – Classe Apex que expõe o método `saveRecord` para atualizar um Case.
  
- **LWC**
  - `customForm.html` – Template do formulário e resultado.
  - `customForm.js` – Lógica do componente (captura input, chama Apex e exibe mensagens).
  - `customForm.css` – Estilos customizados do componente.
  - `customForm.js-meta.xml` – Metadata do LWC para disponibilizar em App, Record e Home Pages.

---

## ⚡ Funcionalidades

1. Exibe um formulário para selecionar a **prioridade** de um Case.
2. Permite salvar a alteração chamando o método Apex `CustomService.saveRecord`.
3. Mostra uma mensagem de **sucesso** ou **erro** após a tentativa de atualização.
4. Pode ser usado em:
   - App Page
   - Record Page
   - Home Page

---

## 🛠️ Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/customform-salesforce.git
cd customform-salesforce
