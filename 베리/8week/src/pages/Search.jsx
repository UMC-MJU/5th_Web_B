import React, { useState } from 'react'
import axios from "axios";

function Search() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  async function searchWeather() { //비동기 함수 선언
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8c7f1b3740e198af450448b7cc62393`

    try {
      const api = await axios.get(url); //axios를 사용하여 생성한 URL로 GET요청을 보내고,
                                        // 응답을 받아 api 변수에 저장
      setWeatherInfo(api.data);         // await => 비동기 함수인 axios.get()의 실행이 완료될때까지 대기하라는 의미
      console.log(api.data);            // 받아온 응답 데이터를 weatherInfo 상태 변수에 저장
    } catch (err) {
      console.error(`error: ${err}`);
      setWeatherInfo(null);
    }
  } 

  
  const onChange = (e) => {             // onChange라는 이벤트 핸들러 함수 선언
                                        // 입력 필드의 값이 변경될 때마다 호출
    setCity(e.target.value);  
    console.log(city);          // 입력 필드 값(e.target.value) 사용 -> city 상태 변수 업데이트
  }

  const search = async (e) => {         // search 라는 이벤트 핸들러 함수 선언
    if (e.key === "Enter") {            // 엔터 키가 눌렸을 때 호출
      await searchWeather();            // searchWeather 함수 호출 -> 완료할때까지 대기
    }
  };

  return (
    <div className='app-container'>
      <form className='input-form'>
        <input
          id='city-name'
          type='text'
          onChange={onChange}  // 값 변경 -> onChange 이벤트 핸들러 호출
          onKeyDown={search}   // 키 눌림 -> search 이벤트 핸들러 호출
          placeholder='도시를 입력하세요'
        />
        {weatherInfo && (      // weatherInfo 상태 변수 존재하는 경우, 아래 요소 렌더링
          <div className="weather-form">
            <div className="city">
              {weatherInfo.name}
            </div>      
            <div className="temperature">
              {Math.floor(weatherInfo.main.temp - 273.15)}℃  
            </div>
            <img
              className="weather-img"
              src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
              alt="weather-img"
            />
            <div className="weather-info">
              {weatherInfo.weather[0].description}
            </div>
          </div>
        )}
      </form>
    </div>
  );  
}

export default Search;
