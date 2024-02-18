import React from 'react';
import pizzaHut from "../Assets/pizzahut.jpg";

const Suggestion = ({ selectedmooddata }) => {
    // if (!selectedmooddata || !selectedmooddata.foundmoodmeals) {
    //     return <div>Select Your Mood... </div>; // Render a loading indicator if data is not available yet
    // }

    const moodMeals = selectedmooddata.foundmoodmeals;
    console.log("moodMeals", moodMeals);

    if (!moodMeals || moodMeals.meals.length === 0) {
        return <div className='gap-5 border border-neutral-800 p-5 bg-neutral-900 rounded-2xl'>No meals found.</div>; // Render "No meals found" if the meals array is empty or not present
    }

    const meals = moodMeals.meals;

    return (
        <div className='flex gap-5 border border-neutral-800 p-5 bg-neutral-900 rounded-2xl transform transition duration-500'>
            {meals.map((meal, index) => (
                <div key={index} className='border border-neutral-800 rounded-2xl w-[15rem] cursor-pointer flex flex-col justify-between'>
                    <div className='inset-0 bg-black opacity-70 rounded-2xl'>
                        <img alt='' className='object-cover h-[12rem] w-full rounded-2xl' src={meal.imageurl} />
                    </div>
                    <div className='p-3 flex flex-col gap-2 h-full bg-black rounded-b-2xl '>
                        <h1 className='text-2xl font-bold'>{meal.mealname}</h1>
                        {/* Adjust your content based on meal properties */}
                        <h2>{meal.restos?.length || 0} places</h2>
                        <p className='text-green-600 font-semibold text-lg'>₹ {meal.mealprice}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Suggestion;
