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
import { Resizable } from 're-resizable'

function App() {
   const theme = useStore(state => state.theme)
   const padding = useStore(state => state.padding)
   const fontStyle = useStore(state => state.fontStyle)
   const showBackground = useStore(state => state.showBackground)

   const editorRef = useRef(null)
   return (
    <main className='dark min-h-screen flex justify-center items-center bg-neutral-950 text-white'>
      
      <link rel='stylesheet' href={themes[theme].theme} crossOrigin='anonymous'/>
      <link rel='stylesheet' href={fonts[fontStyle].src} crossOrigin='anonymous'/>

      <Resizable
           enable={{ left: true, right: true }}
           minWidth={padding * 2 + 400}
      >
      <div className={cn(
          "overflow-hidden mb-2 transition-all ease-out rounded-xl",
          showBackground ? themes[theme].background: "ring ring-neutral-900"
          )} 
          style={{padding}}
          ref={editorRef}
          >
          <CodeEditor />
      </div> 
      </Resizable>
      <Card className="fixed bottom-8 py-4 px-6 mx-6  bg-neutral-900/90 backdrop-blur">
          <CardContent className="flex flex-wrap gap-6 p-0">
             <ThemeSelect />
             <LanguageSelect />
             <FontSelect />
             <FontSizeInput />
             <PaddingSlider />
             <BackgroundSwitch />
             <DarkModeSwitch />
             <div className="w-px bg-neutral-800" />
             <div className="place-self-center">
                <ExportOptions targetRef={editorRef} />
             </div>
          </CardContent>
      </Card> 
    </main>
  )
}

export default App
