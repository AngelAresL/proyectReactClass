import Person from "../components/Person/";
import people from "../assets/people.json";
import { Link, useParams } from "react-router-dom";

const PersonPage = () => {
  const { personId } = useParams();
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <Link to={`/personas/${Number(personId) - 1}`}>Anterior</Link>
      <Link to={`/personas/${Number(personId) + 1}`}>Sig</Link>

      <Person persona={people[personId]} />
    </div>
  );
};
export default PersonPage;
