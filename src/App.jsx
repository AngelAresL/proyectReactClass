import Person from "./components/Person";
import "./App.css";

const App = () => {
  const pupita = {
    id: 1,
    title: "Chiquito de la Calzada",
    subtitle: "El auténtico pecador de la pradera",
    image: "https://picsum.photos/id/337/360/200",
    image_id: 337,
    created_at: "2023-12-20T13:33:49+0000",
    updated_at: "2023-12-20T13:33:49+0000",
    tags: ["divertido", "raro"],
    body: "Lorem fistrum condemor condemor a gramenawer a gramenawer torpedo amatomaa no puedor está la cosa muy malar. Ahorarr a peich ese hombree de la pradera torpedo. No puedor te voy a borrar el cerito sexuarl tiene musho peligro. Ese que llega jarl al ataquerl de la pradera. No puedor tiene musho peligro caballo blanco caballo negroorl ese pedazo de diodenoo fistro condemor. Ese pedazo de se calle ustée se calle ustée ese hombree de la pradera fistro benemeritaar no te digo trigo por no llamarte Rodrigor pecador. Quietooor a wan diodeno ese pedazo de amatomaa al ataquerl pupita a wan.",
  };
  return (
    <div className="app">
      <Person persona={pupita} />
    </div>
  );
};

export default App;
