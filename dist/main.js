/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const main = document.querySelector("main")
const searchBar = document.querySelector('input[type="search"]')
searchBar.onchange = async (e) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=imperial&APPID=c89727cb3ec443b0b983e77a392b5095`,
      { mode: "cors" }
    )
    const data = await response.json()
    console.log(data)
    const name = document.createElement("p")
    const temp = document.createElement("p")
    const feelsLike = document.createElement("p")
    const wind = document.createElement("p")
    const description = document.createElement("p")
    name.textContent = data.name
    temp.textContent = data.main.temp + "°F"
    feelsLike.textContent = data.main.feels_like + "°F"
    wind.textContent = data.wind.speed + "mph"
    description.textContent = data.weather[0].description
    main.innerHTML = ""
    main.appendChild(name)
    main.appendChild(temp)
    main.appendChild(feelsLike)
    main.appendChild(wind)
    main.appendChild(description)
  } catch (error) {
    const errorMsg = document.createElement(p)
    errorMsg.textContent = "Error"
    main.appendChild(errorMsg)
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZUFBZTtBQUMxRSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInNlYXJjaFwiXScpXG5zZWFyY2hCYXIub25jaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2UudGFyZ2V0LnZhbHVlfSZ1bml0cz1pbXBlcmlhbCZBUFBJRD1jODk3MjdjYjNlYzQ0M2IwYjk4M2U3N2EzOTJiNTA5NWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZVxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLm1haW4udGVtcCArIFwiwrBGXCJcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBkYXRhLm1haW4uZmVlbHNfbGlrZSArIFwiwrBGXCJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gZGF0YS53aW5kLnNwZWVkICsgXCJtcGhcIlxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYW1lKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluLmFwcGVuZENoaWxkKGZlZWxzTGlrZSlcbiAgICBtYWluLmFwcGVuZENoaWxkKHdpbmQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocClcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IFwiRXJyb3JcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZXJyb3JNc2cpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==