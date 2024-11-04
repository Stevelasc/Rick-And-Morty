const Character = ({ name, status, species, image, location, episode }) => {
  return (
      <div className="col">
        <div className="card h-100 character-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={image} className="card-img" alt={name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <span className={`status ${status === 'Alive' ? 'text-success' : 'text-danger'}`}>● {status}</span> - {species}
                </p>
                <p className="card-text">
                  <strong>Last known location:</strong><br />
                  {location}
                </p>
                <p className="card-text">
                  <strong>First seen in:</strong><br />
                  {episode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Character;
