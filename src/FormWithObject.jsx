import { useState } from 'react';

// componente alternativo che utilizza un unico state oggetto per tutti i campi
export default function FormWithObject() {
    // state singolo che contiene i quattro valori del form
    const [post, setPost] = useState({
        author: '',
        title: '',
        body: '',
        isPublic: false,
    });

    // handler generico per gli input testuali
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPost((newPost) => ({
            ...newPost,
            // se è checkbox usiamo checked, altrimenti value
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <>
            <h2>Form con oggetto unico</h2>

            <div>
                <p>
                    <strong>Author:</strong> {post.author}
                </p>
                <p>
                    <strong>Title:</strong> {post.title}
                </p>
                <p>
                    <strong>Body:</strong> {post.body}
                </p>
                <p>
                    <strong>Public:</strong> {post.isPublic ? 'true' : 'false'}
                </p>
            </div>

            <form>
                <div>
                    <label htmlFor="author-obj">Author:</label>
                    <input
                        id="author-obj"
                        name="author"
                        type="text"
                        value={post.author}
                        onChange={handleChange}
                        placeholder="Inserisci l'autore"
                    />
                </div>

                <div>
                    <label htmlFor="title-obj">Title:</label>
                    <input
                        id="title-obj"
                        name="title"
                        type="text"
                        value={post.title}
                        onChange={handleChange}
                        placeholder="Inserisci il titolo"
                    />
                </div>

                <div>
                    <label htmlFor="body-obj">Body:</label>
                    <textarea
                        id="body-obj"
                        name="body"
                        value={post.body}
                        onChange={handleChange}
                        placeholder="Inserisci il testo del post"
                        rows="4"
                    />
                </div>

                <div>
                    <label htmlFor="public-obj">Public:</label>
                    <input
                        id="public-obj"
                        name="isPublic"
                        type="checkbox"
                        checked={post.isPublic}
                        onChange={handleChange}
                    />
                    <span>{post.isPublic ? 'Pubblico' : 'Bozza'}</span>
                </div>
            </form>
        </>
    );
}
