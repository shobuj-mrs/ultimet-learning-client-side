
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='bg-pink-100	'>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                        <div className="carousel h-64 w-full rounded-2xl shadow-2xl mb-4">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                                    className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle"> ❮ </a>

                                    <a href="#slide2" className="btn btn-circle"> ❯ </a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SZi0tHqCW_caI3HbE4uamZdcLwJ_iRuWzg&usqp=CAU" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.pinimg.com/originals/0d/61/91/0d619154a2579f595726eeadd6bab2b8.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8H0SMFTm3Ht7rZsxq3y_SjAkv88K7OXd1mg&usqp=CAU" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Let us handle
                                <br className="hidden md:block" />
                                your next{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    destination
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                The first reference to cricket being played as an adult sport was in 1611. * Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. * Unrivalled series of football management simulation video games. Take charge of the world's greatest football teams and manage your way. * Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.
                            </p>
                        </div>
                        <div>
                            <a className='bg-pink-500 hover:bg-pink-800 text-2xl font-bold px-4 py-2 rounded-lg text-white'>
                                <Link
                                    to={'/course'}
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Go To Course
                                </Link>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover hover:px-4 hover:py-2 hover:rounded-lg mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-full sm:w-48 xl:w-56"
                                src="https://www.taylordailypress.net/wp-content/uploads/2021/09/Football-discussion-Lommel-defeats-Lierse-Belgian-Wolfsburg-draw-with.7.jpeg"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 hover:px-4 hover:py-2 hover:rounded-lg rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopO2mbN2yRMV6uJrf45EVZCqTvVh5yoam-g&usqp=CAU"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover hover:px-4 hover:py-2 hover:rounded-lg w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKcP12nMam8blD8MTZPTJ-aHHfr-DIbFsCA&usqp=CAU"
                                alt=""
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;