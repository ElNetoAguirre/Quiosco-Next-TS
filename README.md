<div style="display: flex; justify-content: space-between; align-items:center;">
  <p align="center">
    <a href="https://react.dev/" target="blank"><img src="public/react.svg" width="200" alt="React Logo"/></a>
  </p>
  
  <p align="center">
    <a href="https://vitejs.dev/" target="blank"><img src="public/next.svg" width="200" alt="Next Logo"/></a>
  </p>

  <p align="center">
    <a href="https://www.typescriptlang.org/" target="blank"><img src="public/typescript.svg" width="200" alt="TypeScript Logo"/></a>
  </p>
</div>

# Quiosco APP

Aplicación creada en [React](https://react.dev/) con [Next.js](https://nextjs.org/), Server Actions, App Router, [TypeScript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), [Zod](https://zod.dev/) y [Zustand](https://github.com/pmndrs/zustand).

La aplicación simula un Quiosco de Comida, el cual incluye cuatro secciones, una sección para el cliente, una para administrar los productos, una para la cocina y una para mostrar las ordenes listas.

La sección para el cliente esta dividida en tres áreas, el área de la izquierda muestra las categorías de los productos ofrecidos, el área central muestra las cards de cada uno de los productos de la categoría seleccionada (foto del producto, nombre, precio y un botón para agregar al pedido), y el área derecha muestra el pedido que se va generando al agregar los productos a dicho pedido en pequeñas cards (nombre, precio unitario, subtotal y eliminar), el total a pagar, un espacio para el nombre del cliente y el botón de confirmar pedido.

La sección correspondiente a administración de los productos permite buscar, crear, editar y/o eliminar. Para crear un producto nuevo es necesario llenar un formulario con el nombre, precio, categoría e imagen del producto (los productos nuevos se almacenan Cloudinary). Al editar algún producto, el formulario se llena con la información actual del producto seleccionado (incluyendo una pequeña imagen del mismo), solo es necesario actualizar dicha información. Al eliminar alguno de los productos, ya sabes que hace, jejejeje...

La sección correspondiente a la cocina (ordenes o pedidos) muestra cards de cada uno de los pedidos (incluye el nombre del cliente, fecha y hora del pedido, los productos solicitados, total a pagar y un botón para marcar la orden como completada una vez que la cocina la tenga lista). Para fines de ahorro de datos, esta sección se actualiza manualmente, pero puede funcionar en tiempo real fácilmente mediante [swr](https://swr.vercel.app/) (claro esto consumiría una mayor cantidad de datos en Cloudinary).

La sección correspondiente para mostrar las ordenes listas puede ser usada para el área de caja y/o para mostrarla a los clientes que esperan sus productos ya que muestra pequeñas cards con el nombre del cliente, el pedido y el monto a pagar. Al igual que la sección de la cocina, se actualiza manual mente  para fines de ahorro en el consumo de datos de Cloudinary.

Algunos de los conceptos utilizados para la generación del FrontEnd de ésta App, son:

1. [Next.js](https://nextjs.org/).
2. Server Actions.
3. App Router
4. [TypeScript](https://www.typescriptlang.org/).
5. [TailwindCSS](https://tailwindcss.com/).
6. [Prisma](https://www.prisma.io/).
7. [Zod](https://zod.dev/).
8. [Zustand](https://github.com/pmndrs/zustand).
9. [Hero Icons](https://github.com/tailwindlabs/heroicons#readme).
10. [React Tostify](https://github.com/fkhadra/react-toastify#readme).
11. [next-cloudinary](https://next.cloudinary.dev/).
12. [react-icons](https://github.com/react-icons/react-icons#readme).
13. [swr](https://swr.vercel.app/).
14. Y más.
