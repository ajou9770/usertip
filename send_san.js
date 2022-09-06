const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. //
localStorage.setItem("김설호", "1234567812345");
localStorage.setItem("이소라", "6865238198130");
localStorage.setItem("엄유미", "6865238198131");
localStorage.setItem("정정화", "6865238198132");
localStorage.setItem("김지양", "6865238198133");
localStorage.setItem("인수경", "6865238198134");
localStorage.setItem("고미화", "6865238198135");
localStorage.setItem("박은경", "6865238198136");
localStorage.setItem("윤용희", "6865238198137");
localStorage.setItem("고승희", "6865238198138");
localStorage.setItem("이강훈", "6865238198139");
localStorage.setItem("최문정", "6865238198140");
localStorage.setItem("이재훈", "6865238198141");
localStorage.setItem("김태진", "6865238198142");
localStorage.setItem("김지혜", "6865238198143");
localStorage.setItem("안은혜", "6865238198144");
localStorage.setItem("서희영", "6865238198145");
localStorage.setItem("김석영", "6865238198146");
localStorage.setItem("김지연", "6865238198147");
localStorage.setItem("이지민", "6865238198148");
localStorage.setItem("조은애", "6865238198149");
localStorage.setItem("염선형", "6865238198150");
localStorage.setItem("김정회", "6865238198151");
localStorage.setItem("동수련", "6865238198152");
localStorage.setItem("배현지", "6865238198153");
localStorage.setItem("김지수", "6865238198154");
localStorage.setItem("송지은", "6865238198155");
localStorage.setItem("서근역", "6865238198156");
localStorage.setItem("최슬아", "6865238198157");
localStorage.setItem("박예령", "6865238198158");


function handleSumbit(event) {
    event.preventDefault();
    value = formInput.value;
    const show = localStorage.getItem(value);
  
    if (value === "") {
      alert("이름을 입력 후 조회 바랍니다 😃");
      h3.innerText = "";
    } else if (show === null) {
      h3.innerText = `["${value}"(은)는 찾을수가 없네요😢. 조회가 안될 경우 신협으로 문의 바랍니다.👌]`;
    } else {
      h3.innerText = `[송장번호는 ${show} 입니다]`;
    }
    formInput.value = "";
  }
  form.addEventListener("submit", handleSumbit);
  
  /*document.addEventListener("contextmenu", (event) => event.preventDefault());*/
  
  const submitInput = document.querySelector(".form-input-two");
  const Input_value = form - input - one.value;
  
  function handleClick() {
    alert(
      `${Input_value}로 입력하셨습니다. 2022년 6월 30일기준 가입 조합원 기준으로 조회 가능합니다. 조회가 되지 않을 경우 신협(☏4939)로 문의 주세요`
    );
  }
  
  submitInput.addEventListener("click", handleClick);
  