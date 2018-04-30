

var pizzastuffs = [{pizzaName: "The Main Event",description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", price: 39.99},{pizzaName: "My Subways",description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",price: 21.99},{pizzaName: "Panda Express",description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",price: 16.88},
{pizzaName: "Tex Mex",description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",price: 21.21}];

/*
0 main event
1 subways
2 panda
3 tex
*/

var findthespecial = document.getElementById("specialname");
var randomNum = Math.floor(Math.random() * 4); 
findthespecial.innerHTML = pizzastuffs[randomNum].pizzaName;

/*

5 items

class = pizzaName
class = description
class = price

*/

for (i = 0; i<pizzastuffs.length; i++){
var updateMenu = document.getElementsByClassName("pizzaName");
updateMenu[i].innerHTML = pizzastuffs[i].pizzaName;

var updateMenu2 = document.getElementsByClassName("description");
updateMenu2[i].innerHTML = pizzastuffs[i].description;

var updateMenu3 = document.getElementsByClassName("price");
updateMenu3[i].innerHTML = pizzastuffs[i].price;
}


/*
	var houseBox = document.createElement("div");
	houseBox.className = "GOThouse";
	houseBox.innerHTML = "House: " + kingdoms[i].house;
	main.appendChild(houseBox);
*/


