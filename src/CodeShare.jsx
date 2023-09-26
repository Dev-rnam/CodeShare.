import useStore from './store'
import CodeEditor from './components/CodeEditor'
import { fonts, themes } from './options'
import { cn } from './lib/utils'
import { useState, useRef } from 'react';
import ExportOptions from './components/controls/ExportOptions'
import ExportShare from './components/controls/ExportShare'
import ThemeSelected from './components/controls/ThemeSelect'
import LanguageSelect from './components/controls/LanguageSelect'
import FontSelect from './components/controls/FontSelect'
import FontSizeInput from './components/controls/FontSizeInput'
import PaddingSlider from './components/controls/PaddingSlider'
import BackgroundSwitch from './components/controls/BackgroundSwitch'
import DarkModeSwitch from './components/controls/DarkModeSwitch'
import '../src/style.css'
import { BsArrowsAngleExpand } from "react-icons/bs";
import { Resizable } from 're-resizable'

const CodeShare = () => {
  const theme = useStore(state => state.theme)
  const padding = useStore(state => state.padding)
  const fontStyle = useStore(state => state.fontStyle)
  const showBackground = useStore(state => state.showBackground)

  const [showCard, setShowCard] = useState(false);
  const [show, setShow] = useState(false);
  const editorRef = useRef(null)



  const toggleCard = () => {
    setShowCard(!showCard);
    setShow(!showCard)
  };


  return (
    <main className='main min-h-screen relative flex justify-center items-center  text-white gap-6 grid-cols-3'>

      <link rel='stylesheet' href={themes[theme].theme} crossOrigin='anonymous' />
      <link rel='stylesheet' href={fonts[fontStyle].src} crossOrigin='anonymous' />



      <div className="place-self-center absolute bottom-0 z-30 w-[200px] box-author py-4 mb-10 flex justify-center items-center gap-4">
        <ExportOptions targetRef={editorRef} />
        <ExportShare targetRef={editorRef} />
      </div>


      <div className=' w-auto h-auto box-container p-8 vx relative'>
        <div className='m-0 mb-4 flex justify-between w-full z-30'>
          <div className='flex justify-center items-center gap-4'>
            <button className='box-author p-4 bg-[#ffffff1a] box-container' onClick={toggleCard}>
              <BsArrowsAngleExpand className='text-2xl font-bold' />
            </button>

            <img src='/vfs.svg' className='w-[150px]' />
          </div>


          <div className=" flex flex-wrap gap-4 p-0">
            <LanguageSelect />
          </div>

        </div>
        <Resizable
          enable={{ left: true, right: true }}
          minWidth={padding * 2 + 20}
        >
          <div className={cn(
            "overflow-hidden mb-2 transition-all ease-out rounded-xl ",
            showBackground ? themes[theme].background : "ring ring-neutral-900",

          )}
            style={{ padding }}
            ref={editorRef}
          >
            <CodeEditor />
          </div>
        </Resizable>
      </div>

      {showCard && (
        <div 
           className={show ? 'animeBox' : 'anime' } 
           style={{display : 'flex' , flexDirection: 'column', width: '25%'}} >

          <div className="box-md py-4 px-6 w-72 mx-6 my-4">
            <div className=" flex flex-wrap gap-4 p-0">
              <div className="flex   gap-2 p-0">
                <FontSelect />
                <div className="w-px bg-neutral-800" />
                <FontSizeInput />
              </div>
            </div>
          </div>

          <div className=" py-4 px-6 mx-6  box-md">
            <div className="flex flex-wrap gap-6 p-0 flex-col">

              <ThemeSelected />

              <div className="flex flex-wrap gap-14 p-0">
                <BackgroundSwitch />
                <div className="w-px bg-neutral-800" />
                <DarkModeSwitch />
              </div>
              <PaddingSlider />
            </div>
          </div>


        </div>
      )}

    </main>
  )
}

export default CodeShare
