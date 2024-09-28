interface FoodProps {
    food: string;
}

/*
* handle the category animations within this component
*/

const Food = (props: FoodProps) => {
    return (
        <div className="flex justify-center items-center h-full bg-orange-200">
            {props.food}
        </div>
    );
}

export default Food;