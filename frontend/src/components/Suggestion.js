import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Suggestion = ({ selectedmooddata }) => {
    // if (!selectedmooddata || !selectedmooddata.foundmoodmeals) {
    //     return <div>Select Your Mood... </div>; // Render a loading indicator if data is not available yet
    // }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, 
        slidesToScroll: 1
      };

    const moodMeals = selectedmooddata.foundmoodmeals;
    console.log("moodMeals", moodMeals);

    if (!moodMeals || moodMeals.meals.length === 0) {
        return <div className='gap-5 border border-neutral-800 p-5 bg-neutral-900 rounded-2xl'>No meals found.</div>; // Render "No meals found" if the meals array is empty or not present
    }

    const meals = moodMeals.meals;

    return (
        <Slider {...settings} className='flex justify-center items-center gap-5 w-[20rem] h-[20rem] sm:w-[35rem] sm:h-[25rem] bg-neutral-900 rounded-2xl transform transition duration-500'>
        {meals.map((meal, index) => (
          <div key={index} className=''>
            <div className='border border-neutral-800 cursor-pointer rounded-t-2xl w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] m-3'>
              <div className='w-full h-full'>
                <img alt='' className='object-cover h-full rounded-t-2xl w-full bg-black opacity-50' src={meal.imageurl} />
                <div className='bg-black p-2'>
                    <h1 className='text-2xl font-bold text-white'>{meal.mealname}</h1>
                    <h2 className='text-white'>{meal.restos?.length || 0} places</h2>
                    <p className='text-green-600 font-semibold text-lg'>₹ {meal.mealprice}</p>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    );
};

export default Suggestion;
