import "./App.css"

export default function LandmarkCard({id, name, country, photo_url, edit}) {
    return (
        <div className="card">
            <button className='top-left'>x</button>
            <h4>{name}</h4>
            <p>{country}</p>
            <img src={photo_url} className='photo' />
            <button className='bottom-right' onClick={() => edit(id)}>Edit</button>
        </div>
    )
}