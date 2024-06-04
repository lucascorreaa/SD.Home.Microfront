import React, { useState } from 'react';
import { FlutterView } from './FluterView/FlutterView';

export default function Root() {
  const [classNames, setClassNames] = useState('');
  const [screen, setScreen] = useState('counter');
  const [clicks, setClicks] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className={classNames}>
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
  );
}

