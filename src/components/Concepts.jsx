import {CORE_CONCEPTS} from '../data.js'

function Concept(props) {
    return (
        <div
            className="flex flex-col items-center justify-center gap-6 p-6 bg-very-dark-blue text-white rounded-xl shadow-xl">
            <div className="-mt-4 w-32 h-32">
                <img src={props.image} alt={props.title} className="w-full h-full object-contain"/>
            </div>
            <h3 className="text-xl font-bold text-center">
                {props.title}
            </h3>
            <p className="text-center text-gray-400 max-w-sm">
                {props.description}
            </p>
        </div>

    )
}

function Concepts() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CORE_CONCEPTS.map((item) => {
                return <Concept {...item} />
            })}
        </div>
    )
}

export default Concepts;