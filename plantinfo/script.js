function searchPlant() {
    var input, filter, plants, plant, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    plants = document.getElementsByClassName('plant');
    for (i = 0; i < plants.length; i++) {
      plant = plants[i];
      txtValue = plant.innerText || plant.textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        plant.style.display = '';
      } else {
        plant.style.display = 'none';
      }
    }
  }
  