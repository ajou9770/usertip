const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. //
localStorage.setItem("김설호", "우체국 1234567812345");
localStorage.setItem("고제상", "우체국택배6865238198075");
localStorage.setItem("권경수", "우체국택배6865238198076");
localStorage.setItem("길민주", "우체국택배6865238198077");
localStorage.setItem("김경덕", "우체국택배6865238198078");
localStorage.setItem("김경태", "우체국택배6865238198079");
localStorage.setItem("김경희", "우체국택배6865238198080");
localStorage.setItem("김남훈", "우체국택배6865238198081");
localStorage.setItem("김동민", "우체국택배6865238198082");
localStorage.setItem("김미옥", "우체국택배6865238198083");
localStorage.setItem("김성구", "우체국택배6865238198084");
localStorage.setItem("김의섭", "우체국택배6865238198085");
localStorage.setItem("김재호", "우체국택배6865238198086");
localStorage.setItem("김종화", "우체국택배6865238198087");
localStorage.setItem("박관수", "우체국택배6865238198088");
localStorage.setItem("박상현", "우체국택배6865238198089");
localStorage.setItem("박안태", "우체국택배6865238198090");
localStorage.setItem("박인호", "우체국택배6865238198091");
localStorage.setItem("박정수", "우체국택배6865238198092");
localStorage.setItem("박정옥", "우체국택배6865238198093");
localStorage.setItem("박정웅", "우체국택배6865238198094");
localStorage.setItem("배우현", "우체국택배6865238198095");
localStorage.setItem("백설경", "우체국택배6865238198096");
localStorage.setItem("서은정", "우체국택배6865238198097");
localStorage.setItem("소지은", "우체국택배6865238198098");
localStorage.setItem("손현숙", "우체국택배6865238198099");
localStorage.setItem("송석규", "우체국택배6865238198100");
localStorage.setItem("송수곤", "우체국택배6865238198101");
localStorage.setItem("신미정", "우체국택배6865238198102");
localStorage.setItem("우정희", "우체국택배6865238198103");
localStorage.setItem("유경화", "우체국택배6865238198104");
localStorage.setItem("유재중", "우체국택배6865238198105");
localStorage.setItem("이광철", "우체국택배6865238198106");
localStorage.setItem("이대갑", "우체국택배6865238198107");
localStorage.setItem("이동규", "우체국택배6865238198108");
localStorage.setItem("이미영", "우체국택배6865238198109");
localStorage.setItem("이미정", "우체국택배6865238198110");
localStorage.setItem("이병대", "우체국택배6865238198111");
localStorage.setItem("이상진", "우체국택배6865238198112");
localStorage.setItem("이영희", "우체국택배6865238198113");
localStorage.setItem("이재권", "우체국택배6865238198114");
localStorage.setItem("이지현", "우체국택배6865238198115");
localStorage.setItem("이필오", "우체국택배6865238198116");
localStorage.setItem("이학봉", "우체국택배6865238198117");
localStorage.setItem("임문채", "우체국택배6865238198118");
localStorage.setItem("임지영", "우체국택배6865238198119");
localStorage.setItem("정서진", "우체국택배6865238198120");
localStorage.setItem("정석관", "우체국택배6865238198121");
localStorage.setItem("조철우", "우체국택배6865238198122");
localStorage.setItem("최성우", "우체국택배6865238198123");
localStorage.setItem("한경화", "우체국택배6865238198124");
localStorage.setItem("한제희", "우체국택배6865238198125");
localStorage.setItem("한호봉", "우체국택배6865238198126");
localStorage.setItem("함정화", "우체국택배6865238198127");
localStorage.setItem("허문희", "우체국택배6865238198128");
localStorage.setItem("현석무", "우체국택배6865238198129");


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
      h3.innerText = `[택배사&송장번호는 ${show} 입니다]`;
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
  