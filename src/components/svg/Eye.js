import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Eye() {
  const svgMarkup = `
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.998 16.3549C14.806 16.3549 18.289 13.6169 20.25 9.05289C18.289 4.48888 14.806 1.75089 10.998 1.75089H11.002C7.194 1.75089 3.711 4.48888 1.75 9.05289C3.711 13.6169 7.194 16.3549 11.002 16.3549H10.998Z" stroke="#9FA5C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  

  
    `;
  const SvgImg = () => (
    <SvgXml
      xml={svgMarkup}
      width="18px"
      height="18px"
      style={{ marginLeft: 20 }}
    />
  );
  return <SvgImg />;
}
