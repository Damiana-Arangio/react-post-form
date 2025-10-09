import { useState } from "react";

function MainPostForm() {

    /* Dichiarazione variabile di stato contenente l’oggetto con tutte le proprietà del form */
    const [formData, setFormData] = useState(
        {
            author: "",
            title: "",
            body: "",
            public: false   // indica se il post deve essere pubblico oppure no
        }
    )

    /***************
        RENDERING
    ****************/ 
    return(
        <main className="container">
            <div className="container-form">

                {/* FORM */}
                <form onSubmit={GestioneinvioForm} className="form-flex">

                    {/* Autore Post*/}
                    <div className="margin-bottom-20">
                        <label htmlFor="author"> Autore </label>
                        <br/>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            id="author"
                            placeholder="Inserisci l'autore del post"
                            required
                            onChange={GestioneInputForm}
                        />
                    </div>

                    {/* Titolo Post */}
                    <div className="margin-bottom-20">
                        <label htmlFor="title"> Titolo </label>
                        <br/>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            id="title"
                            placeholder="Inserisci il titolo del post"
                            required
                            onChange={GestioneInputForm}
                        />
                    </div>

                    {/* Testo Post */}
                    <div className="margin-bottom-20">
                        <label htmlFor="body"> Testo </label>
                        <br/>
                        <textarea
                            name="body"
                            value={formData.body}
                            id="body"
                            placeholder="Inserisci testo..."
                            required
                            onChange={GestioneInputForm}
                        />
                    </div>

                    {/* Checkbox pubblicazione Post */}
                    <div className="pubblica-testo">
                        <label htmlFor="public"> Pubblica testo </label>
                        <input
                            type="checkbox"
                            name="public"
                            checked={formData.public}
                            id="public"
                            onChange={GestioneInputForm}
                        />
                    </div>

                    {/* Bottone invio */}
                    <button type="submit"> INVIO </button>

                </form>
            </div>

        </main>
    )

    /****************
        FUNZIONI
    *****************/
    
    // funzione per l'invio del form
    function GestioneinvioForm(e) {
        e.preventDefault();

        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then ( risInvioForm => {

                // Mostra un messaggio di conferma
                alert("Post inviato con successo!");

                 // Reset dei campi del form dopo l’invio
                setFormData( {
                    author: "",
                    title: "",
                    body: "",
                    public: false
                })
            })

            .catch(error => {
                // Messaggio in caso di errore
                alert("Si è verificato un errore durante l'invio del post!");
            })

    }

    // funzione per la gestione dei campi input
    function GestioneInputForm(e) {

        if (e.target.type === "checkbox") {
            setFormData(
                { ...formData, [e.target.name]: e.target.checked}
            )}
        else {
            setFormData(
                { ...formData, [e.target.name]: e.target.value }
            )}
    }
}

export default MainPostForm