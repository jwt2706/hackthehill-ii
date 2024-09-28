<<<<<<< HEAD
import { LuGlassWater } from "react-icons/lu";

interface WaterProps {
    water: string;
=======
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Drink from "../icons/Drink";

interface FoodProps {
    drink: string;
>>>>>>> main
}

const Water = (props: FoodProps) => {
    const waterRef = useRef<HTMLDivElement>(null);
    const drinkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const waterElement = waterRef.current;
        const drinkElement = drinkRef.current;

        if (waterElement && drinkElement) {
            gsap.fromTo(waterElement, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
            gsap.fromTo(drinkElement, { rotation: -10 }, { rotation: 10, duration: 0.5, yoyo: true, repeat: -1 });
        }
    }, []);

    return (
<<<<<<< HEAD
        <div className="flex justify-center items-center h-[90vh]">
            {props.water}
            <LuGlassWater />
=======
        <div className="flex justify-center items-center h-full bg-blue-200">
            <div>
                <div ref={waterRef} className="pb-8">{props.drink}</div>
                <div ref={drinkRef}>
                    <Drink />
                </div>
            </div>
>>>>>>> main
        </div>
    );
}

export default Water;