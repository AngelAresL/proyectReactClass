// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 añadir una prop className a cada div y aplicar el nombre de clase adecuado
// basado en el texto que aparece
// 💰 Estos son los nombres de clase disponibles: box, box--large, box--medium, box--small
// 💰 cada elemento debe de tener además la clase "box"

// 🐨 añadir una prop style a cada div para cambier el color de fondo
// de manera que encaje en lo que el texto dice que debería de ser
// 🐨 usar también la prop style para poner la fuente en italic
// 💰 Usar estos atributos de style: backgroundColor, fontStyle

// 🐨 Crear un componente genérico que "mezcle" ambas props y aplique esos estilos
// Debería de poder usarse así:
// <Box className="box--small" style={{ backgroundColor: "lightblue" }}>
//   small lightblue box
// </Box>;

// 🐨 Ahora no queremos que los usuarios de nuestro componente sepan que clase usa por dentro
// Queremos un componente que reciba una prop "size" cuyos valores pueden ser "small", "medium" o "large"
// Se debería de poder usar así:
// <Box size="small" style={{ backgroundColor: "lightblue" }}>
  // small lightblue box
// </Box>;


const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App