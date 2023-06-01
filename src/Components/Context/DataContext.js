import React, { createContext, useState } from "react";

// Crear el contexto
export const MyContext = createContext();

// Crear el componente proveedor
export const MyContextProvider = (props) => {
  const [cartCount, setcartCount] = useState(0);
  const [arrayProducts, setArrayProducts] = useState([])
  //const [totalCarrito, setTotalCarrito] = useState(0)
  
  const addproduct = (product) => {
    const productoExistente = arrayProducts.find((p) => p.name === product.name);

    if (productoExistente) {
      // Si el producto ya existe en el carrito, incrementa la cantidad
      const nuevosProductos = arrayProducts.map((p) => {
        if (p.name === product.name) {
          return { ...p, cantidad: p.cantidad + 1 };
        }
        return p;
      });
      setArrayProducts(nuevosProductos);
    } else {
      // Si el producto no existe en el carrito, agrega uno nuevo
      const nuevosProductos = [...arrayProducts, { ...product, cantidad: 1 }];
      setArrayProducts(nuevosProductos);
    }
  };

  const calcularTotal = () => {
    let total = 0;
    arrayProducts.forEach((product) => {
      total += product.precio * product.cantidad;
    });
    return (
      total
    );
  };

  const contarCarrito = () => {
    let nuevocartCount = arrayProducts.length +1
    setcartCount(nuevocartCount)
  }


  return (
    <MyContext.Provider value={{ cartCount, addproduct, setArrayProducts, arrayProducts, calcularTotal, contarCarrito }}>
      {props.children}
    </MyContext.Provider>
  );
};