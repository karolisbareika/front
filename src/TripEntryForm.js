import React from 'react';

const TripEntryForm = () => {
    return (
        <form className='tripentryform'>
            <label for='title'>Pavadinimas</label>
            <input name='title' required/>            
            <label for='comments'>komentarai</label>
            <textarea name='comments' rows={3}></textarea>
            <label for='descr'>aprasymas</label>
            <textarea name='descr' rows={3}></textarea>  
            <label for='image'>Foto</label>
            <input name='image'/>
            <button>Sukurti naują kelionę</button>
        </form>
     );
    };

export default TripEntryForm;