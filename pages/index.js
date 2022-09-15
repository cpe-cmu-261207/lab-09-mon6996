import Navbar from "../components/Navbar";
import Hobby from "../components/Hobby";
import Introduce from "../components/Introduce";
import Skill from "../components/Skill";

export default function Home()
{
	return (
		<div>
			<Navbar />
			<Introduce />
			<Hobby />
			<Skill />
		</div>
	);
}
