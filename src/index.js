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
