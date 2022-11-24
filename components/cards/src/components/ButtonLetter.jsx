import "./ButtonLetter.css";

export const ButtonLetter = () => {
  return (
    <div className="container">
      <button data-text="Awesome" className="button">
        <span className="actual-text">&nbsp;NZAVALETAC&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;NZAVALETAC&nbsp;
        </span>
      </button>
    </div>
  );
};
