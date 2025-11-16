export function MainBody(props) {
  return (
    <main className="main-body">
      <div className="image-div">
          <img src= {props.img.src} alt={props.img.alt} className="main-body-img" />
      </div>
        
        <span className="text-body">
            <div className="box-head">
                <img src="../images/locate.png" alt="locate-icon" className="icon"/>
                <p>{props.country}</p>
                <p className="view-onmap"><a href={props.googlemaps}>View on Google Maps</a></p>
            </div>
            <h1 className="Head-travel">{props.title}</h1>

            <p className="body-date">{props.dates}</p>
            <p className="body-para">{props.text}</p>
        </span>
    </main>
  );
}