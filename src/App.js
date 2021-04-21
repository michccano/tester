import React from 'react';
import Toolbar from 'polotno/toolbar/toolbar';
import ZoomButtons from 'polotno/toolbar/zoom-buttons';
import SidePanel from 'polotno/side-panel/side-panel';
import Workspace from 'polotno/canvas/workspace';

import { observer } from 'mobx-react-lite';
import { TextSection, UploadSection, PhotosSection, ElementsSection, BackgroundSection } from "polotno/side-panel/side-panel";
import { SectionTab } from "polotno/side-panel/tab-button";
import templates from './assets/templatessvg@2x.svg'
import styles from './assets/stylessvg@2x.svg'
import qoutes from './assets/quotessvg@2x.svg'
import removeBG from './assets/removebgsvg@2x.svg'
import folders from './assets/folderssvg@2x.svg'

import Topbar from './topbar';
import { getSuggestedQuery } from '@testing-library/dom';

const App = ({ store }) => {
  const Templates = {
    name: "Templates",
    Tab: (props) => (
      <SectionTab name="Templates" {...props}>
        <img src={templates} />
      </SectionTab>
    ),
    Panel: observer(() => {
      return (
        <div>
          <h1>Templates</h1>
        </div>
      );
    })
  };
  const Styles = {
    name: "Styles",
    Tab: (props) => (
      <SectionTab name="Styles" {...props}>
         <img src={styles} />
      </SectionTab>
    ),
    Panel: observer(() => {
      return (
        <div>
          <h1>Styles</h1>
        </div>
      );
    })
  };
  const Quotes = {
    name: "Quotes",
    Tab: (props) => (
      <SectionTab name="Quotes" {...props}>
         <img src={qoutes} />
      </SectionTab>
    ),
    Panel: observer(() => {
      return (
        <div>
          <h1>Quotes</h1>
        </div>
      );
    })
  };
function go() {
    alert('asdasd');
  }
  const RemoveBG = {
    name: "RemoveBG",
    Tab: (props) => (
      <SectionTab onClick={() => {
        alert('asdasd');
         }} name="RemoveBG" {...props}>
         <img src={removeBG} />
      </SectionTab>
    ),
    Panel: observer(() => {
      return (
        <div>
          <h1>RemoveBG</h1>
          <button  onClick={() => {
     
        window.h();

      }}>Browse</button>
        </div>
      );
    })
  };
  const Folders = {
    name: "Folders",
    Tab: (props) => (
      <SectionTab name="Custom" {...props}>
         <img src={folders} />
      </SectionTab>
    ),
    Panel: observer(() => {
      return (
        <div>
          <h1>Folders</h1>
        </div>
      );
    })
  };
  const sections = [Templates, TextSection, PhotosSection, ElementsSection, BackgroundSection, Styles, Quotes, RemoveBG, UploadSection, Folders];
  return (
    <React.Fragment>
      <Topbar store={store} />
      <div
        style={{
          display: 'flex',
          height: 'calc(100% - 50px)',
          width: '100%',
          backgroundColor: '#30404d',
        }}
      >
        <div style={{ width: '400px', height: '100%', display: 'flex' }}>
          <SidePanel store={store} sections={sections} defaultSection="Templates"/>
        </div>
        <div
          style={{
            display: 'flex',
            height: '100%',
            margin: 'auto',
            flex: 1,
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Toolbar store={store} />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
