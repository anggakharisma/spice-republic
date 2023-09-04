import { Food } from "@/type"
import FoodCard from "../FoodCard"
import { Fade } from "react-awesome-reveal";

type FoodsProps = {
	isLoading: boolean,
	data: Food[],
	setCurrent: (food: Food) => void
}
export default function Foods({ isLoading, data, setCurrent }: FoodsProps) {
	return (
		!isLoading ?
			<div className="grid grid-cols-3 gap-12 mt-8">
				<Fade cascade delay={4} damping={0.2}>
					{
						data.map((food: Food) => <FoodCard setCurrent={setCurrent} food={food} key={food.ID}></FoodCard>)
					}
				</Fade>
			</div>
			: <h1>Loading...</h1>
	)
}
