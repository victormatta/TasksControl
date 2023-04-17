import "./About.css";

export function About() {
  return (
    <div className="aboutStyle">
      <div className="content">
        <header>
          <h1>About:</h1>
          <button>
            <a href="./">Back</a>
          </button>
        </header>

        <div className="box">
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}
