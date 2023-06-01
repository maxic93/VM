import React, { createContext } from "react";

// Crear el contexto
export const ProductContext = createContext();

// Crear el componente proveedor
export const ProductContextProvider = (props) => {

    const products = [
        {
            id: 1,
            categoria: "Almohadas",
            name: "Rayada",
            precio: 2500,
            img: "https://i.postimg.cc/Hn8TCNCb/Whats-App-Image-2023-03-30-at-14-10-06.jpg"
        },
        {
            id: 2,
            categoria: "Cuadros",
            name: "Home Sweet Home",
            precio: 2200,
            img: "https://i.postimg.cc/SxCbd8yN/Whats-App-Image-2023-05-12-at-16-49-02-2.jpg"
        },
        {
            id: 3,
            categoria: "Almohadas",
            name: "Vive Rie Ama",
            precio: 1250,
            img: "https://i.postimg.cc/nLXRTfKK/Whats-App-Image-2023-03-30-at-14-10-04.jpg"
        },
        {
            id: 4,
            categoria: "Almohadas",
            name: "5 Minutos",
            precio: 2500,
            img: "https://i.postimg.cc/c4Vr6Q9s/Whats-App-Image-2023-03-30-at-14-10-05.jpg"
        },
        {
            id: 5,
            categoria: "Cuadros",
            name: "Harry Potter",
            precio: 2200,
            img: "https://i.postimg.cc/k5HN5VbK/Whats-App-Image-2023-05-11-at-10-23-43-1.jpg"
        },
        {
            id: 6,
            categoria: "Cuadros",
            name: "Costanera Corrientes",
            precio: 2200,
            img: "https://i.postimg.cc/mgv22Brh/Whats-App-Image-2023-05-10-at-17-40-02.jpg"
        },
        {
            id: 7,
            categoria: "Cuadros",
            name: "AM PM",
            precio: 2200,
            img: "https://i.postimg.cc/CxFpcXXz/Whats-App-Image-2023-05-10-at-18-50-05.jpg"
        },
        {
            id: 8,
            categoria: "Almohadas",
            name: "Love",
            precio: 1250,
            img: "https://i.postimg.cc/tTgdq3JX/Whats-App-Image-2023-04-24-at-21-10-33-1.jpg"
        },
        {
            id: 9,
            categoria: "Almohadas",
            name: "Geometria",
            precio: 2500,
            img: "https://i.postimg.cc/fRDVQY8k/Whats-App-Image-2023-05-03-at-20-21-53.jpg"
        }
      ]
  return (
    <ProductContext.Provider value={{products}}>
      {props.children}
    </ProductContext.Provider>
  );
};