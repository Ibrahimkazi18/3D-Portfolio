
const Button = ({text, className, id, imgPath, targ}) => {
  return (
    <a 
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById(targ)

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({top, behavior: 'smooth'});
        }
      }} 
      className={`${className ?? ''} cta-wrapper`} 
      id={id}
    >
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src={imgPath} alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button