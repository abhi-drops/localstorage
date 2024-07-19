function store() {
  if (carBrand.value == "" || price.value == "" || keyStore.value == "") {
      alert("Please fill all the empty fields")
  }
  else if(keyStore.value in localStorage) {
      alert("key already in use ")
  }
  else{
      car = {
          CarBrand: carBrand.value,
          Price: price.value,
          KeyStore: keyStore.value
      }
      console.log(car);
      localStorage.setItem(keyStore.value,JSON.stringify(car))
      alert("Car data successfully stored")
      carBrand.value = ""
      price.value = ""
      keyStore.value = ""
  }
}

function retrieve() {
  if (keyRetrieve.value in localStorage) {
      car = JSON.parse(localStorage.getItem(keyRetrieve.value))
      result.innerHTML = `
      <div class=" col card p-3 mt-3">

          <p class="mt-3">Car brand : ${car.CarBrand}</p>

          <p class="mt-3">price : ${car.Price}</p>

          <p class="mt-3">key : ${car.KeyStore}</p>

      </div>`
      keyRetrieve.value = ""
  }
  else{
      alert("Key not found")
      result.innerHTML = ``
  }
}

function REMOVE() {
  if (keyDelete.value in localStorage) {
      localStorage.removeItem(keyDelete.value)
      alert("Data Removed Successfully")
      result.innerHTML = ``
      keyDelete.value = ""
  }
  else{
      alert("Key not found")
  }
}

function Clear() {
  localStorage.clear()
  alert("All Records Cleared Successfully")
  result.innerHTML = ``
}