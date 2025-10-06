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

    return(
        <main>
            <div className="container-form">

                {/* FORM */}
                <form onSubmit={GestioneinvioForm}>

                    {/* Autore Post*/}
                    <div>
                        <label htmlFor="author"> Autore </label>
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
                    <div>
                        <label htmlFor="title"> Titolo </label>
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
                    <div>
                        <label htmlFor="body"> Testo </label>
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
                    <div>
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
                    <button type="submit"> Crea Post </button>

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
            .then(risInvioForm => console.log("dati inviati", risInvioForm.data))
            .catch(error => console.log(error))
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