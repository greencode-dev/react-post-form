# Esercizio di oggi: `react-post-form`

**Obiettivo:**  
Creare un’app React con un form per gestire l’inserimento di un nuovo post all’interno di un ipotetico blog.

## Dati richiesti dal form

- **author** _(string)_ – L’autore del post
- **title** _(string)_ – Il titolo del post
- **body** _(string)_ – Il testo del post
- **public** _(boolean)_ – Se il post deve essere pubblico (`true`) o una bozza (`false`)

---

## Passaggi consigliati

1. Creiamo una nuova app React.
2. Dichiariamo una serie di `state` per salvare i dati.
3. Mostriamo i `{dati}` in pagina.
4. Creiamo una serie di input per gestire i dati.
5. Colleghiamo le input ai dati con binding bidirezionale.
6. Verifichiamo che i dati vengano aggiornati (anche con l’aiuto di React DevTools).

---

### Bonus

- Per gestire il campo **`public`** usiamo una checkbox, invece di digitare “true”/“false”.  
  Possiamo distinguere il campo controllando il suo `.name` (o il suo `.type`) con un `if`.
- A cose fatte, proviamo a usare un unico stato (un oggetto) che contenga tutti i dati.

---

> **Nota:** fate riferimento al codice dei live coding, ma soprattutto:
> _ispezionate, debuggate, ragionate e trovate la vostra strada!_

---

**Buon lavoro a tutti!** ✅
