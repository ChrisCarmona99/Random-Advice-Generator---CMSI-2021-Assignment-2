export default function Nav({ action }) {
    function handleClick(event) {
      action(document.querySelector("#word").value);
    }
    return (
      <div id="getAdviceInput">
        <input id="word" placeholder="Enter a word" />
        <button id="getAdvice" onClick={handleClick} type="button">
          Get Advice!
        </button>
      </div>
    );
  }
  