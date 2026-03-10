# React Post Form

Un'applicazione React per la gestione di un form di creazione di post per un ipotetico blog.

## 📋 Descrizione

**React Post Form** è un'app educativa che implementa un form interattivo per l'inserimento di nuovi post. Il progetto dimostra l'uso di React Hooks (useState) per la gestione dello stato, il binding bidirezionale (two-way binding) tra input e state, e la gestione di diversi tipi di input (testo, textarea, checkbox).

### Obiettivo

Creare un'applicazione React completa che:

- Gestisca l'inserimento di dati attraverso un form strutturato
- Mantenga lo stato dei dati in tempo reale
- Visualizzi i dati inseriti immediatamente in pagina
- Utilizzi un unico oggetto di stato per gestire tutti i campi del form

## 🎯 Funzionalità

Il form consente di inserire i seguenti dati per un post:

- **Author** (string) – L'autore del post
- **Title** (string) – Il titolo del post
- **Body** (string) – Il testo/contenuto del post
- **Public** (boolean) – Flag per indicare se il post è pubblico o una bozza

I dati vengono visualizzati in tempo reale mentre vengono compilati nel form grazie al binding bidirezionale.
