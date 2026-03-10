import { useState } from 'react';

function App() {
    // Passo 2: Dichiariamo una serie di state per salvare i dati
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    return (
        <>
            <h1>React Post Form</h1>

            {/* Passo 3: Mostriamo i {dati} in pagina */}
            <div>
                <h2>Dati inseriti:</h2>
                <p>
                    <strong>Author:</strong> {author}
                </p>
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong>Body:</strong> {body}
                </p>
                <p>
                    <strong>Public:</strong> {isPublic ? 'true' : 'false'}
                </p>
            </div>

            {/* Passo 4-5: Creiamo una serie di input per gestire i dati con binding bidirezionale */}
            <form>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Inserisci l'autore"
                    />
                </div>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Inserisci il titolo"
                    />
                </div>

                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Inserisci il testo del post"
                        rows="4"
                    />
                </div>

                {/* Bonus: Per gestire il campo "public" proviamo a usare una checkbox */}
                <div>
                    <label htmlFor="public">Public:</label>
                    <input
                        type="checkbox"
                        id="public"
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
                    />
                    <span>{isPublic ? 'Pubblico' : 'Bozza'}</span>
                </div>
            </form>
        </>
    );
}

export default App;
