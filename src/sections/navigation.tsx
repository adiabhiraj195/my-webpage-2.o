import { BiHome } from 'react-icons/bi';
import { VscPerson } from 'react-icons/vsc';
import { HiOutlineDocumentText, HiOutlineMailOpen } from 'react-icons/hi';
import { TiDocumentText } from 'react-icons/ti';
import { BsGear } from 'react-icons/bs';

const Navigation = () => {
    return (
        <div className=' mr-7'>
            
            <div className='border border-gray-400 rounded-3xl text-white pt-7 pb-7 pr-4 pl-4 text-xl'>
                <a href='#home' className='navBar-link'>
                    <span className='hidden'>Home</span>
                    <BiHome className='mb-6 hover:text-[#28e98c] transition-colors' />
                </a>

                <a href='#about' className='navBar-link'>
                    <span className='nav-span hidden'>About</span>
                    <VscPerson className='mb-6 hover:text-[#28e98c] transition-colors' />
                </a>

                <a href="https://drive.google.com/file/d/17UtCUA4sarevmJuezY2DdINs8ZqVgr9N/view?usp=drive_link" download target='_blank' className='navBar-link'>
                    <span className='nav-span hidden'>Resume</span>
                    <HiOutlineDocumentText className='mb-6 hover:text-[#28e98c] transition-colors' />
                </a>

                <a href='#projects' className='navBar-link'>
                    <span className='nav-span hidden'>Portfolio</span>
                    <TiDocumentText className='mb-6 hover:text-[#28e98c] transition-colors' />
                </a>
                
                <a href='#skill' className='navBar-link'>
                    <span className='nav-span hidden'>Skills</span>
                    <BsGear className='mb-6 hover:text-[#28e98c] transition-colors' />
                </a>

                <a href='#contact' className='navBar-link'>
                    <span className='nav-span hidden'>Contact</span>
                    <HiOutlineMailOpen className='nav-icon hover:text-[#28e98c] transition-colors' />
                </a>
            </div>

        </div>
    )
}

export default Navigation;