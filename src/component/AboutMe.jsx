import './AboutMe.css';

export default function AboutMe () {
  return (
    <>
      <div id="AboutMe" className="container-md mx-4 mt-5">
        <div className="row">
          <div className="col-lg-5">
              <img src={require('./myPhoto.jpg')} alt="My photo" className='image my-image'></img>
          </div>
          <div className="col-lg-7">
            <h1 className='color-font-white'><b>O mnie</b></h1>
            <p>Lorem ipsu</p>
          </div>
        </div>
      </div>
    </>
  );
}

