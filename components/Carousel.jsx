import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        appenDots: (dots) => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        customPaging:(i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
        ) 
      };
  return (
    <div className="h-screen w-full mx-auto -mt-[88px]">
        <div className="">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative h-full w-full">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </div>
        <Slider {...settings}>
            
                <div className="sm:ml-[5rem] text-white mt-48 !flex flex-col items-start gap-y-10 sm:w-full">
                    <Title className="text-[3.5rem]">Fast Food Restaurant</Title>
                    <p className="text-xl sm:w-96 w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dignissimos!
                    </p>
                    <button className="btn-primary">Order Now!</button>
                </div>
                <div className="relative sm:ml-[5rem] text-white top-48 !flex flex-col items-start gap-y-10 sm:w-full">
                    <Title className="text-[3.5rem]">Fast Food Restaurant</Title>
                    <p className="text-xl sm:w-96 w-full">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet blanditiis dicta dolores accusamus. Consectetur.
                    </p>
                    <button className="btn-primary">Order Now!</button>
                </div>
            
        </Slider>
    </div>
  );
};

export default Carousel;
