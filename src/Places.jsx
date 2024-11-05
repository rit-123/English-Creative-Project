import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import deskImage from './desk.jpg'
import roomImage from './room.jpg'
import classroom from './classroom.jpg'
import gymImage from './gym.jpg'

const ImageGallery = () => {
    const spaces = [
        {
            title: "My Desk",
            image: deskImage,
            description: `My desk is what I like to call my "fortress of solitude." I often find myself lost here in some random math or physics concept that I found interesting, for hours, completely forgetting about the to-do list taped to the wall. I always have this urge to understand things deeply and to connect new ideas with what I already know because only then does it feel real to me. That’s why I love math and physics so much. It's not just about solving problems; it's about really getting into why things work the way they do. Essentially, science is understanding—understanding our world, and that’s what makes it so compelling to me. This is also where I spend countless hours coding, building things piece by piece, using this same drive to bring my ideas to life. I love seeing the different ways these understandings, along with human ingenuity, are used in countless ways to solve so many problems. Although the physical desk which I work at has constantly changed over the years, what it represents to me has always remained the same—my love for math, science, and coding.`
        },
        {
            title: "My Room",
            image: roomImage,
            description: `What my room represents to me has changed since I’ve come to college. Back home, it was just my space – where I'd relax, watch YouTube, listen to music, or kick around the football. But coming to college changed that. It’s now a space I share with others. It's where my roommate and I have late-night talks. Where friends from across the hall drop by just to hang out. Where we order late-night food and play FIFA or Minecraft. It's not just my space anymore – it's become this place where I’ve made some amazing new friends, all through small, everyday moments we share.`
        },
        {
            title: "The Gym and Soccer Field",
            image: gymImage,
            description: `The gym and soccer field are different. These are places I go to not because I have to but because I want to. They’re things I do just for myself deliberately. They give me a sense of control over my life even when things aren’t going my way. I come here to get motivated when I need a boost and to calm down when I'm feeling overwhelmed. These places help me find the right balance and peace of mind.`
        },
        {
            title: "The Classroom",
            image: classroom,
            description: `The way I view the classroom has also really changed after coming to college. In school, classrooms were where I saw the same people every day for years – 8 years to be exact and where I made my closest friends. It was almost as if I had a whole separate life inside of a classroom with those same people every day. But coming to college this changed. People come and go, faces change with each class, and there's less time to just talk and get to know each other. It’s different but I’ve learned to get used to this and make an effort to connect with people in other places.`
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % spaces.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + spaces.length) % spaces.length);
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="h-screen w-full flex flex-col bg-gray-50">
            {/* Header */}
            <div className="text-center py-6" style={{ marginBottom: "30px" }}>
                <h1 className="text-3xl font-bold text-gray-800">My Spaces</h1>
                <p className="text-gray-600 mt-2">A reflection on the meaning of the spaces in my daily life </p>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                {/* Image section */}
                <div className="relative lg:w-1/2 h-96 lg:h-full">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <img
                            src={spaces[currentIndex].image}
                            alt={spaces[currentIndex].title}
                            className="w-full h-full object-cover"

                        />
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Content section */}
                <div className="lg:w-1/2 p-8 overflow-y-auto">
                    <h2 style={{marginBottom:"10px", fontSize:40, textDecoration:"underline"}} className="text-2xl font-bold mb-4">{spaces[currentIndex].title}</h2>
                    <p className="text-gray-900 leading-relaxed whitespace-pre-line">
                        {spaces[currentIndex].description}
                    </p>

                    {/* Dots navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {spaces.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToIndex(index)}
                                className="focus:outline-none"
                            >
                                {index === currentIndex ? (
                                    <CircleDot size={20} className="text-blue-600" />
                                ) : (
                                    <Circle size={20} className="text-gray-400" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;