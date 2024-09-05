* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.menu-item {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  width: 30%;
  text-align: center;
}

.menu-item h3 {
  margin-bottom: 10px;
}

.cart {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .menu-item {
    width: 100%;
    margin-bottom: 10px;
  }
}
