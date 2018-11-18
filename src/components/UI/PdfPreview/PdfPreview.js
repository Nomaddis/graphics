import React, {Component} from 'react';

import PDFViewer  from 'mgr-pdf-viewer-react'



const pdfPreview = props => (
    <div>
      {/*<PDFViewer document={{*/}
      {/*url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'*/}
      {/*}} />*/}
      <div className='pdf-view-wrapper'>
        <div className='col-md-12'>
          <h1 className='pdf-view-title'>{props.title}</h1>
          <p className='pdf-view-desc'>{props.desc}</p>
          <iframe src={props.src} width="100%" height="800" />
        </div>
      </div>
    </div>
);

export default pdfPreview;