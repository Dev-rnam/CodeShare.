import useStore from './store'
import CodeEditor from './components/CodeEditor'
import { fonts, themes } from './options'
import { cn } from './lib/utils'
import { useRef } from 'react'
import { Card, CardContent } from './components/ui/card'
import ExportOptions from './components/controls/ExportOptions'
import ThemeSelect from './components/controls/ThemeSelect'
import LanguageSelect from './components/controls/LanguageSelect'
import FontSelect from './components/controls/FontSelect'
import FontSizeInput from './components/controls/FontSizeInput'
import PaddingSlider from './components/controls/PaddingSlider'
import BackgroundSwitch from './components/controls/BackgroundSwitch'
import DarkModeSwitch from './components/controls/DarkModeSwitch'
import ColorPicker from './components/controls/PickColor'

import { Resizable } from 're-resizable'

const CodeShare = () => {
   const theme = useStore(state => state.theme)
   const padding = useStore(state => state.padding)
   const fontStyle = useStore(state => state.fontStyle)
   const showBackground = useStore(state => state.showBackground)
   const background = useStore((state) => state.background);

   

   const editorRef = useRef(null)
   return (
    <main className='dark min-h-screen flex justify-center items-center bg-neutral-950 text-white gap-6 grid-cols-3'>
      
      <link rel='stylesheet' href={themes[theme].theme} crossOrigin='anonymous'/>
      <link rel='stylesheet' href={fonts[fontStyle].src} crossOrigin='anonymous'/>

      <Card className="bg-neutral-900/90 backdrop-blur py-4 px-6 w-1/4">
        <CardContent>
           <LanguageSelect />
           <div className="place-self-center">
                <ExportOptions targetRef={editorRef} />
         </div>
         
        </CardContent>
      </Card>
      <div className='w-2/4'>
      <Resizable
           enable={{ left: true, right: true }}
           minWidth={padding * 2 + 400}
      >
      <div className={cn(
          "overflow-hidden mb-2 transition-all ease-out rounded-xl ",
          showBackground ? themes[theme].background: "ring ring-neutral-900",

          )} 
          style={{padding}}
          ref={editorRef}
          >
          <CodeEditor />
      </div> 
      </Resizable>
      </div>

      <div className='flex flex-col w-1/4'>
       <Card className=" py-4 px-6 mx-6  bg-neutral-900/90 backdrop-blur">
          <CardContent className="flex flex-wrap gap-6 p-0 flex-col">
             <ThemeSelect />
             <ColorPicker />
            <div className="flex flex-wrap gap-14 p-0">
             <BackgroundSwitch />
             <div className="w-px bg-neutral-800" />
             <DarkModeSwitch />
            </div> 
             <PaddingSlider />
          </CardContent>
      </Card> 

      <Card className="bg-neutral-900/90 backdrop-blur py-4 px-6 w-72 mx-6 my-4">
        <CardContent className=" flex flex-wrap gap-4 p-0">
        <div className="flex   gap-2 p-0">
           <FontSelect />
           <div className="w-px bg-neutral-800" />
           <FontSizeInput />
           </div> 
        </CardContent>
      </Card>

      </div>
    </main>
  )
}

export default CodeShare
