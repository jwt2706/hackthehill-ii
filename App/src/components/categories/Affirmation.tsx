interface AffirmationProps {
    affirmation: string;
}

/*
* handle the category animations within this component
* use GASP
*/

const Affirmation = (props: AffirmationProps) => {
    return (
        <div className="flex justify-center items-center h-full bg-white">
            {props.affirmation}
        </div>
    );
}

export default Affirmation;