import React from 'react'
import { FlutterView } from './FluterView/FlutterView'

export default function Root() {
  const [screen, setScreen] = React.useState('counter')
  const [clicks, setClicks] = React.useState(0)
  const [text, setText] = React.useState('')

  return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FlutterView
            assetBase="https://conecta-microfronts-qas.telemedicinaeinstein.com.br/flutter-main-web/"
            src="https://conecta-microfronts-qas.telemedicinaeinstein.com.br/flutter-main-web/main.dart.js"
            onClicksChange={setClicks}
            onScreenChange={setScreen}
            onTextChange={setText}
            text={text}
            clicks={clicks}
            screen={screen}
          />
        </div>
  )
}
