import { useParams } from "react-router-dom";

export default function User() {
	const { userId } = useParams();
	return (
		<>
			<p className="bg-gray-500 text-center text-3xl p-4 text-white">
				User: {userId}
			</p>
		</>
	);
}
