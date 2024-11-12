const TypewriterHeader = () => {
  return(
    <>
      <h1 className="typed-heading">
        &gt;&nbsp;<span className="typed-text"></span><span className="cursor blink">&nbsp;</span>
      </h1>
      <script defer type="text/javascript" src="./assets/scripts/typewriter.js"></script>
      {/* Script needs to be under heading so classnames are properly parsed */}
    </>
  );
}

export default TypewriterHeader;