import Project1 from "../img/proj1.png";
import Project2 from "../img/proj2.png";
import Project3 from "../img/proj3.png";
import Project4 from "../img/proj4.png";
import Project5 from "../img/proj5.png";
import Project6 from "../img/proj6.png";
import Project7 from "../img/proj7.png";


export default function Pro() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container py-12 mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white bg-gray-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center hover:bg-[rgb(76,177,50)] transition-colors">
                        My Projects
                    </h1>
                    <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
                        Designing with users in mind, every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 xl:grid-cols-3">
                    {/* Project 1 */}
                                            <a 
                        href="https://picreco.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                        >
                        <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                            <img 
                                className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                src={Project1} 
                                alt="PICRECO" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-t-lg">
                                <h2 className="text-xl font-semibold text-white">
                                Event Photo Management System
                                </h2>
                            </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Revolutionize Your Event Photo Experience - Upload, recognize, and share event photos effortlessly with AI-powered face recognition.                            </p>
                            </div>
                        </div>
                        </a>


                            {/* Project 2 */}
                        <a href="https://pirunthavansarma.github.io/Quiz-App/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block"
                            >
                            <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                                <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project7} 
                                    alt="Movie Download App Project" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                    QuizApp
                                    </h2>
                                </div>
                                </div>
                                <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                A simple and interactive quiz application built using HTML, CSS, and JavaScript. Features multiple-choice questions, dynamic scoring, and a user-friendly interface. Designed to enhance learning and test knowledge in an engaging way.                                </p>
                                </div>
                            </div>
                            </a>



                                            {/* Project 3 */}
                            <a 
                            href="https://pirunthavansarma.github.io/login/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block"
                            >
                            <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                                <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project3} 
                                    alt="Skill Development Project" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                    Login Page with Animated Background
                                    </h2>
                                </div>
                                </div>
                                <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                A visually appealing login page created using HTML and CSS, featuring a dynamic animated background. Showcases creative design and smooth animations to enhance the user experience.                                </p>
                                </div>
                            </div>
                            </a>


                                            {/* Project 2 */}
                        <a 
                        href="https://pirunthavansarma.github.io/FoodIn/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                        >
                        <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                            <img 
                                className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                src={Project2} 
                                alt="Food Delivery Project" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                <h2 className="text-xl font-semibold text-white">
                                Food Delivery
                                </h2>
                            </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Food Delivery app Landingpage -
                            Order your favorite meals from local restaurants with our app! Browse, customize, and track in real-time with a few taps. Enjoy fast, convenient, and delicious food delivery straight to your doorstep.
                            </p>
                            </div>
                        </div>
                        </a>


                    {/* Project 4 */}
                        <a 
                        href="https://pirunthavansarma.github.io/Random-user/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                        >
                        <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                            <img 
                                className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                src={Project4} 
                                alt="Car Rental Project" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                <h2 className="text-xl font-semibold text-white">
                                Random User Generator
                                </h2>
                            </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                            A web application that fetches and displays random user profiles using an external API. Built with HTML, CSS, and JavaScript, it dynamically generates user details such as name, email, and location, showcasing API integration and responsive design.

</p>
                            </div>
                        </div>
                        </a>


                    {/* Project 5 */}
                            {/* <a 
                            href="https://www.figma.com/proto/Wwkp5HwU1KX68ZMKxhvumK/Untitled?node-id=0-1&t=uUeXpIqqNUMoxNRe-1" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block"
                            >
                            <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                                <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project5} 
                                    alt="X-eat Project" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                    X-eat
                                    </h2>
                                </div>
                                </div>
                                <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Craving something delicious? Our app connects you to the best local restaurants, letting you order and track your meal with ease. Get your food delivered fast, fresh, and right to your door!
                                </p>
                                </div>
                            </div>
                            </a> */}

                    {/* Project 6 */}
                    {/* <div className="bg-gray-300 p-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg flex flex-col hover:bg-[rgb(96,207,64)] transition-colors">
                        <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                            <img 
                                className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                src={Project6 } 
                                alt="Train Tickets Bookings Project" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                <h2 className="text-xl font-semibold text-white">
                                    Train Tickets Bookings
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Book train tickets effortlessly with our app! Search routes, choose seats, and track your journey in real-time with just a few taps. Enjoy a fast, convenient, and seamless ticket booking experience today!
                            </p>
                        </div>
                    </div> */}

                    
                </div>
            </div>
        </section>
    );
}
