import homeIcon from "./assets/home-icon.png";
import moviesIcon from "./assets/movies-icon.png";
import seriesIcon from "./assets/series-icon.png";
import logoIcon from "./assets/logo.png";
import profileIcon from "./assets/user-icon.png";
import searchIcon from "./assets/search-icon.png";
import favoriteIcon from "./assets/favorite-icon.png";

function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row">
          <div className="nav-box ">
            <img src={logoIcon} width={40} className="ml-5 absolute left-0" />

            <button className="nav-button nav-rounded-left">
              <img src={homeIcon} width={32} />
              <h1 className="nav-text">Главная</h1>
            </button>

            <div className="nav-line"></div>

            <button className="nav-button">
              <img src={moviesIcon} width={32} className="moviesIcon" />
              <h1 className="nav-text text-borders">Фильмы</h1>
            </button>

            <div className="nav-line"></div>

            <button className="nav-button nav-rounded-right">
              <img src={seriesIcon} width={32} />
              <h1 className="nav-text ">Сериалы</h1>
            </button>
          </div>
          <div className="second-nav-box">
            <button className="flex flex-row justify-center items-center ">
              <img src={searchIcon} width={32} />
            </button>

            <button className="flex flex-row justify-center items-center ">
              <img src={favoriteIcon} width={32} />
            </button>

            <button className="flex flex-row justify-center items-center ">
              <img src={profileIcon} width={32} />
              <h1 className="nav-text">Войти</h1>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
