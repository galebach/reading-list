import { useState } from "react"

function BookCreate({ onSubmit }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Call the onSubmit from the parent component
        onSubmit(title);

        // Clear the search bar
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Submit</button> 
            </form>
        </div>
    )
}

export default BookCreate;