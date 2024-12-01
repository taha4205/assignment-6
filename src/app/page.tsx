import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (

<>


    <div className="w-full">
      <div className="w-full  h-[54px] flex items-center justify-between px-6 sm:px-10 bg-[#F7F7F7]">
        <span className="text-[14px] font-normal leading-[21px] sm:block hidden">
          Phone Number: 956 742 455 678 | Email: info@ddsgnr.com
        </span>
        <div className="hidden sm:flex gap-4">
          
          <img src="/images/facebook.png" alt="Facebook" className="w-2 h-3 cursor-pointer" />
          <img src="/images/Vector.png" alt="Instagram" className="w-3 h-3 cursor-pointer" />
          <img src="/images/x.png" alt="Twitter" className="w-3 h-3 cursor-pointer" />
          <img src="/images/link.png" alt="LinkedIn" className="w-3 h-3 cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[1px] bg-black sm:block hidden"></div>

      <div className="w-full h-[72px] bg-[#F7F7F7] flex items-center justify-center px-4 sm:px-10">
      <Image
  src="/images/logo.png" 
  alt="Logo" 
  width={100} 
  height={30} 
  className="w-[80px] sm:w-[100px] h-[30px] mr-36"
/>
        <div className="sm:hidden flex items-center">
          <button  className="text-black">
          
          </button>
        </div>
       
        <div className="hidden sm:flex sm:items-center gap-6">
          <div className="flex-none flex-row sm:flex items-start gap-10">
        <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
  Home
</div>
<div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
  Courses
</div>
<div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
 Services
</div>
<div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
  Achievements
</div>
<div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
About Us
</div>
<div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
  Testimonial
</div>
</div>



          <button className="border border-black bg-white text-black py-2 px-5 rounded-md text-[14px] hover:bg-gray-100 ml-4">Login</button>
          <button className="bg-black border-black text-white py-2.5 px-5 rounded-md text-[14px] hover:bg-gray-800 ">Sign Up</button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black"></div>
      
    </div>
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-10 md:py-10">
        <div className="flex flex-col justify-center max-w-xl md:max-w-2xl text-center md:text-left">
          <h1 className="font-roboto text-3xl md:text-5xl font-bold leading-tight md:leading-[67.2px]">
            Learn new skill online with ease
          </h1>
          <p className="text-sm md:text-base font-normal mt-4">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-black text-white py-1 px-3 rounded cursor-pointer mb-4 md:mb-0 text-sm md:text-base">
              Start learning now
            </button>
            <button className="bg-white text-black py-1 px-3 border border-black rounded cursor-pointer text-sm md:text-base">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-[640px]">
          <Image
            src="/images/banner.png"
            alt="Banner Image"
            width={720}
            height={900}
            layout="responsive"
          />
        </div>
      </div>
    </div>
    <div className=" w-full mx-auto h-auto bg-[#F7F7F7] flex flex-col md:flex-row items-center  px-6 md:px-8 py-6 md:py-12">
      <h5 className="font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center md:text-left">
        Trusted by 2000+ companies<br /> worldwide.
      </h5>
      <div className="flex flex-wrap justify-center md:justify-between space-x-6 space-y-4 md:space-y-0">
        <Image 
          src="/images/logos.png" 
          alt="Logo 1" 
          width={850} 
          height={80} 
          className="w-[850px] h-auto " 
        />
       
      </div>
    </div>
    <div className=" bg-white pt-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <h2 className="font-roboto text-[32px] sm:text-[48px] font-bold leading-[57.6px] mb-6">
        Explore Courses By Category
      </h2>

      <p className="font-roboto text-[14px] sm:text-[18px] font-normal leading-[27px] mt-4 mb-12">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 p-6 w-full max-w-screen-xl mx-auto">

        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat1.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Design & Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
       
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat2.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Marketing</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">60+ Courses Available</p>
          </div>

        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat3.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        </div>
        <div className=" flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat4.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Communication</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat5.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Digital Marketing</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat6.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Self Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat7.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Business</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
         
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat8.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Finance</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/cat9.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Health & Fitness</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
      </div>
          <button className="text-black bg-white p-2 px-6 rounded-md text-sm border border-black">
          View All Courses
        </button>
    </div>
    <div className="text-center py-32 px-4 sm:px-8 bg-white">
      <h2 className="font-roboto text-[32px] sm:text-[48px] font-bold leading-[40px] sm:leading-[57.6px] text-center">
        Our Achievements
      </h2>
      <p className="font-roboto text-[14px] sm:text-[18px] font-normal leading-[22px] sm:leading-[27px] text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+200</h3>
          <p className="text-[14px] sm:text-[16px]">Courses</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">50K</h3>
          <p className="text-[14px] sm:text-[16px]">Mentors</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+370K</h3>
          <p className="text-[14px] sm:text-[16px]">Students</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+100</h3>
          <p className="text-[14px] sm:text-[16px]">Recognition</p>
        </div>
      </div>
    </div>
    <div className='h-auto w-full flex flex-col items-center justify-center py-10 bg-white'>
      <h1 className="font-roboto font-bold text-[32px] sm:text-[56px] leading-[40px] sm:leading-[67.2px] text-center">
        Courses
      </h1>
      <p className="font-roboto font-normal text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-center mt-4">
        Your Ultimate Guide to learning
      </p>

      <div className="flex space-x-4 mt-6">
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Popular
        </button>
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Recommended
        </button>
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Best Price
        </button>
      </div>
      <div className="pt-10 w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course1.jpeg" alt="course1" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Design</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">UX/UI Design 201</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course2.jpeg" alt="course2" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Programming</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Introduction to Python</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course3.jpeg" alt="course3" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Business</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Data Analysis for Beginners</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course4.jpeg" alt="course4" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Art</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Art Specialization</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course5.jpeg" alt="course5" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Law</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>

            <h2 className="font-semibold text-xl mt-2">Rule of Law</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course6.jpeg" alt="course6" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Tech</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Introduction to Webflow</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="text-black bg-white p-2 px-6 rounded-md text-sm border border-black">
          View All Courses
        </button>
      </div>
    </div>
    <div className=' w-full flex flex-col items-center justify-center my-10 bg-[#F7F7F7]'>

<h1 className='font-roboto text-[48px] font-bold leading-[57.6px] text-center mb-4'>
  Our Team
</h1>
<p className='text-center mb-8'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>

  <div className='flex flex-col items-center'>
    <img
      src='/images/team1.png'
      alt='Team Member 1'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>James Nduku</h1>
    <p>Marketing Coordinator</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>
  <div className='flex flex-col items-center'>
    <img
      src='/images/team2.png'
      alt='Team Member 2'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>Joseph Munyambu</h1>
    <p>Nursing Assistant</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>
  <div className='flex flex-col items-center'>
    <img
      src='/images/team3.png'
      alt='Team Member 3'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>Joseph Ngumbau</h1>
    <p>Medical Assistant</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>
  <div className='flex flex-col items-center sm:block hidden'>
    <img
      src='/images/team4.png'
      alt='Team Member 4'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>Erick Kipkemboi</h1>
    <p>Web Designer</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>
  <div className='flex flex-col items-center sm:block hidden'>
    <img
      src='/images/team5.png'
      alt='Team Member 5'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>Stephen Kerubo</h1>
    <p>President of Sales</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>
  <div className='flex flex-col items-center sm:block hidden'>
    <img
      src='/images/team6.png'
      alt='Team Member 6'
      className='w-[80px] h-[80px] object-cover'
    />
    <h1>John Leboo</h1>
    <p>Dog Trainer</p>
    <div className='flex gap-2 mt-2'>
      <img
        src='/images/link.png'
        alt='LinkedIn'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/x.png'
        alt='Twitter'
        className='w-4 h-4 cursor-pointer'
      />
      <img
        src='/images/icon.svg'
        alt='Other'
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  </div>

</div>
<div className="mt-8 flex justify-center sm:block lg:hidden">
<button className="text-black bg-white p-2 px-6 rounded-md text-sm border border-black">
View All
</button>
</div>

</div>
<div className='w-full bg-[#F7F7F7] py-8 px-4'>
      <h1 className='text-[32px] md:text-[48px] font-bold text-black sm:block hidden'>
        Customer Testimonials
      </h1>
      <h1 className='text-[24px] md:hidden font-bold text-black mt-4'>
      What Our Student Say
      </h1>

      <p className='text-[18px] mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex overflow-x-scroll sm:overflow-hidden gap-8 py-4">
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team3.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">James Nduku</h1>
              <p className="text-black text-[16px]">Software Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team1.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">Erick Kipkemboi</h1>
              <p className="text-black text-[16px]">Scrum Master</p>
            </div>
          </div>
        </div>
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team6.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">Stephen Kerubo</h1>
              <p className="text-black text-[16px]">UI/UX Designer</p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex gap-2 justify-start w-full">
          <div className="w-2 h-2 rounded-full bg-black" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>

        <button className="w-8 h-8 rounded-full bg-[#F7F7F7] text-black border border-black flex items-center justify-center mt-2 sm:block">
          <span className="text-xl">←</span>
        </button>

        <button className="w-8 h-8 rounded-full bg-[#F7F7F7] text-black border border-black flex items-center justify-center mt-2 sm:block">
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
    <footer className="bg-primary">
      <div className="max-w-7xl pt-3 px-4 space-y-8 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="font-bold text-xl text-center sm:text-left text-black">
              Subscribe to our newsletter
            </h1>
            <p className="text-center sm:text-left text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 w-full md:space-y-0 md:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 px-7 rounded-md border border-black tracking-widest text-left text-gray-800 w-full sm:w-auto"
              />
              <button className="border border-black hover:text-primary hover:bg-text p-1 px-4 rounded-md text-lg">
                Subscribe
              </button>
            </div>

            <p className="text-[13px] mt-3 text-center md:text-left text-black">
              By subscribing you agree to our{" "}
              <Link href="#" className="underline underline-offset-4 text-black">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex justify-center md:items-start md:justify-start">
            <Image src={"/images/logo.png"} alt="footerLogo" width={136} height={40} />
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Courses</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Business</Link>
              <Link href={"#"} className="text-black">Development</Link>
              <Link href={"#"} className="text-black">Technology</Link>
              <Link href={"#"} className="text-black">Design</Link>
              <Link href={"#"} className="text-black">Programming</Link>
            </div>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">Resources</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Career</Link>
              <Link href={"#"} className="text-black">Resume</Link>
              <Link href={"#"} className="text-black">Learning</Link>
              <Link href={"#"} className="text-black">Interview Preparation</Link>
              <Link href={"#"} className="text-black">Jobs</Link>
            </div>
          </div>
          <div>
            <h3 className="text-black text-xl font-bold mb-2">About Us</h3>
            <div className="flex flex-col space-y-4">
              <Link href={"#"} className="text-black">Contact</Link>
              <Link href={"#"} className="text-black">Help/Support</Link>
              <Link href={"#"} className="text-black">FAQs</Link>
              <Link href={"#"} className="text-black">Terms and Conditions</Link>
              <Link href={"#"} className="text-black">Partner</Link>
            </div>
          </div>
        </div>
        <div className="border-t py-12 border-black pt-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-5 text-center md:text-left text-black">
            <p>2023 Ddsgnr. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-black underline underline-offset-3">
                Privacy Policy
              </Link>
              <Link href="#" className="text-black underline underline-offset-3">
                Terms of Services
              </Link>
              <Link href="#" className="text-black underline underline-offset-3">
                Cookies Settings
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-full max-w-[736px] h-6 flex justify-end gap-4">
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/facebook.png"} alt="facebook" width={10} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/Vector.png"} alt="instagram" width={18} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/x.png"} alt="twitter" width={18} height={18} />
              </Link>
              <Link href={"#"} className="h-6 w-6">
                <Image src={"/images/link.png"} alt="linkedin" width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>    
  );
}
