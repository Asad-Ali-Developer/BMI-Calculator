import { useState, FormEvent, ChangeEvent } from "react";

const BMICalculator = () => {
    const [status, setStatus] = useState<string>("");
    const [bmi, setBmi] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const calculateBMI = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (weight === 0 || height === 0) {
            alert("Please enter valid values");
            return;
        }

        setLoading(true);

        const heightInMeters = height * 0.0254;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async calculation
        setBmi(bmiValue);

        if (parseFloat(bmiValue) < 18.5) {
            setStatus("Underweight");
            setColor('text-red-500');
        } else if (parseFloat(bmiValue) < 24.9) {
            setStatus("Normal weight");
            setColor('text-green-500');
        } else if (parseFloat(bmiValue) < 29.9) {
            setStatus("Overweight");
            setColor('text-red-500');
        } else {
            setStatus("Severe Obesity");
            setColor('text-purple-600');
        }

        setLoading(false);
    };

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        setHeight(parseFloat(e.target.value));
    };

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWeight(parseFloat(e.target.value));
    };

    const handleReset = () => {
        setHeight(0);
        setWeight(0);
        setBmi("");
        setStatus("");
    };

    return (
        <div className="BMI w-48 border-[1px] font-sans border-zinc-600 rounded-lg p-5 h-auto">
            <h1 className="text-center text-blue-500 font-semibold text-[1.5rem] my-6">Calculate your BMI</h1>
            <form onSubmit={calculateBMI}>
                <div className="form flex flex-col">
                    <label htmlFor="height" className="mb-2">Height (inches):</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        required
                        value={height || ""}
                        onChange={handleHeightChange}
                        className="bg-zinc-800 py-3 px-3 text-white w-full rounded-md mb-6 outline-none font-medium"
                    />

                    <label htmlFor="weight" className="mb-2">Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        required
                        value={weight || ""}
                        onChange={handleWeightChange}
                        className="bg-zinc-800 py-3 px-3 text-white w-full rounded-md outline-none font-medium"
                    />

                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 py-2 px-3 w-full mt-8 rounded-md">
                        Calculate BMI
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="border-[1px] text-blue-600 border-blue-600 hover:border-blue-700 hover:text-blue-700 py-2 px-3 w-full rounded-md my-3"
                        >
                        Reset
                    </button>
                </div>
            </form>

            {loading && (
                <div className="loader-container absolute w-full h-screen inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
                    <div className="loader"></div>
                </div>
            )}

            <div className="Show-BMI font-sans mt-[1rem]">
                <h4 className="text-center font-bold text-lg text-green-500">Your BMI</h4>

                <div className="ml-[2rem] mt-7">                    
                    {bmi && <p>Your BMI is <span className="text-yellow-600 font-semibold">{bmi}</span></p>}
                    {status && <p  className="text-lg mb-[1rem]">You are <span className={`${color} font-medium`}>{status}</span></p>}
                </div>

            </div>
        </div>
    );
};

export default BMICalculator;
