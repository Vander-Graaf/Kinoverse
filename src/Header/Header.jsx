import logoIcon from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import favoriteIcon from "../assets/favorite-icon.png";
import wave1 from "../assets/wave1.png";
import wave2 from "../assets/wave2.png";

function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row">
          <div className="nav-box ">
            <img src={logoIcon} width={40} className=" " />

            <button className="nav-button nav-main-button">
              <h1 className="nav-text">Главная</h1>
            </button>

            <button className="nav-button nav-second-button">
              <h1 className="nav-text text-borders">Фильмы</h1>
            </button>

            <button className="nav-button nav-second-button">
              <h1 className="nav-text ">Сериалы</h1>
            </button>
          </div>

          <div className="second-nav-box">
            <button className="nav-button search-btn ">
              <img src={searchIcon} width={24} />
            </button>

            <div className="nav-line"></div>

            <button className="nav-button favorite-btn">
              <img src={favoriteIcon} width={24} />
            </button>
            <button className="nav-button nav-half-rounded">
              <h1 className="nav-text">Войти</h1>
            </button>
          </div>
        </nav>

        <div className="header-wave">
          <img src={wave1} alt="" className="wave-image" />
          <img src={wave2} alt="" className="wave-image2" />
        </div>
      </header>
    </>
  );
}

export default Header;
