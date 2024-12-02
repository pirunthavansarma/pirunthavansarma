import Project1 from "../img/proj1.png";
import Project2 from "../img/proj2.png";
import Project3 from "../img/proj3.png";
import Project4 from "../img/proj4.png";
import Project5 from "../img/proj5.png";
import Project6 from "../img/proj6.png";
import Project7 from "../img/proj7.png";

export default function Pro() {
    return (
        <section className="bg-white dark:bg-gray-900 py-12">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white bg-gradient-to-r from-green-500 to-blue-500 text-center rounded-lg shadow-xl px-6 py-4 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 transition-all">
                        My Projects
                    </h1>
                    <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-400 text-lg">
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
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project1} 
                                    alt="Event Photo Management System" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                        Event Photo Management System
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">
                                    Revolutionize Your Event Photo Experience - Upload, recognize, and share event photos effortlessly with AI-powered face recognition.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Project 2 */}
                    <a 
                        href="https://pirunthavansarma.github.io/Quiz-App/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                    >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project7} 
                                    alt="Quiz App Project" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                        QuizApp
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">
                                    A simple and interactive quiz application built using HTML, CSS, and JavaScript. Features multiple-choice questions, dynamic scoring, and a user-friendly interface.
                                </p>
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
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project3} 
                                    alt="Login Page with Animated Background" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                        Login Page with Animated Background
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">
                                    A visually appealing login page with a dynamic animated background, showcasing smooth animations and creative design.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Project 4 */}
                    <a 
                        href="https://pirunthavansarma.github.io/FoodIn/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                    >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col">
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
                                <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">
                                    Order your favorite meals from local restaurants with our app! Browse, customize, and track your order in real-time.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/* Project 5 */}
                    <a 
                        href="https://pirunthavansarma.github.io/404Game/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                    >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 flex flex-col">
                            <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                                <img 
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                                    src={Project5} 
                                    alt="404 Dinosaur Game" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 rounded-t-lg">
                                    <h2 className="text-xl font-semibold text-white">
                                        404 Dinosaur Game
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                <p className="mt-2 text-gray-500 dark:text-gray-400 text-base">
                                    A fun browser game inspired by the offline dinosaur game from Google Chrome. Players control a dinosaur and jump over obstacles.
                                </p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}
