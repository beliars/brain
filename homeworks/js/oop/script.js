function Product(_brand, _name, _price, _category, _quantity, _color) {
	this.brand = _brand;  
	this.name = _name;  
	this.price = _price;  
	this.category = _category;  
	this.quantity = _quantity;  
	this.color = _color;

	var self = this;
	var ordered = false;

	this.availability = function() {
		if (this.quantity > 0) alert('Товар есть на складе.');
		else alert('Товара нет на складе.');
	}  
	this.order = function() {
		if (this.quantity <= 0) {
			alert('Товара нет на складе.');
			return;
		}
		if (ordered === false) {
			alert('Товар ' + this.name + ' успешно заказан.');
			ordered = true;
			return;
		}
		else {
			alert('Товар ' + this.name + ' уже заказан.');
			return;
		}  
	}
	this.cancelOrder = function() {
		if (ordered === false) 
			return alert('Товар ' + this.name + ' не заказан.');
		ordered === false;
		alert('Заказ товара ' + this.name + ' отменен.');
	}
}

var product = new Product('LG', 'G3S', 300, 'телефоны', 2, "серый");
product.availability();
product.cancelOrder();
product.order();
product.order();
product.cancelOrder();