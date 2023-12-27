import PersonPages from "./PersonPages";
import people from "../assets/people.json";
import Person from "../components/Person/";

const PeoplePage = () => {
  return people.map((men) => {
    return <Person key={men.id} persona={men} />;
  });
};
export default PeoplePage;
