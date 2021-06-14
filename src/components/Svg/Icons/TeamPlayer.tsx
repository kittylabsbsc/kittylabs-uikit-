import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 0 128 128" {...props}>
    <defs>
      <clipPath id="clip-path" transform="translate(-3.08 -7.7)">
        <rect width="128" height="128" fill="none"/>
      </clipPath>
    </defs>
    <title>kitty-teamplayer</title>
    <g clip-path="url(#clip-path)">
      <g>
        <g>
          <path d="M57.66,21.83a.53.53,0,0,1,0,.12c0,.05,0,.11,0,.15a.26.26,0,0,0,0,.09.57.57,0,0,0,0,.13s0,.07,0,.1,0,.1,0,.13a.17.17,0,0,1,0,.08c0,.07,0,.15,0,.22l0,0c0,.07,0,.12,0,.17v.07h0a1.42,1.42,0,0,1-.05.16l0,.08c0,.06,0,.12-.08.2s0,0,0,.05a.75.75,0,0,1-.12.21l-.14.25,0,0v0c-.05.05-.08.13-.13.18l0,.05-.4.44,0,0,0,0-.09.08-.05.05-.09.07a2.31,2.31,0,0,0-.19.14l-.07.06a1.32,1.32,0,0,1-.2.12l0,0-.08.05a1.88,1.88,0,0,0-.24.14l-.07,0a3.64,3.64,0,0,1-.36.16,6.25,6.25,0,0,1-1.65.5,6.39,6.39,0,0,1-1.26.14c-2.38.06-3.88-1.13-4.37-2.51a1.89,1.89,0,0,0-.06-.18v0a13.17,13.17,0,0,1-.35-1.84c0-.38-.1-.78-.14-1.2v-.07c0-.1,0-.17,0-.27A38.57,38.57,0,0,1,47,16a25,25,0,0,1,.44-4.54c.46-2.32,1.24-3.55,2.37-3.76,2.16-.4,4.28,3.46,5.67,6.79a40.91,40.91,0,0,1,1.5,4.2A21,21,0,0,1,57.66,21.83Z" transform="translate(-3.08 -7.7)" fill="#017178"/>
          <path d="M62.91,21.81S63.09,11.67,67.08,11s9.45,12.5,9.81,15.85C76.91,26.8,70.87,28.29,62.91,21.81Z" transform="translate(-3.08 -7.7)" fill="#1fc7d4"/>
          <path d="M73.32,23.14a.76.76,0,0,1-.61.88,2,2,0,0,1-.45,0c-1,0-3.43-.25-6.56-3.15a.71.71,0,0,1-.24-.52c-.07-1.34-.13-5.69,2.13-6,.73-.08,1.9.21,3.76,3.74A22,22,0,0,1,73.32,23.14Z" transform="translate(-3.08 -7.7)" fill="#017178"/>
          <path d="M41.61,25.84s-3.87-9.39-7.83-8.58-4.23,15.09-3.36,18.33C30.42,35.59,36.56,34.76,41.61,25.84Z" transform="translate(-3.08 -7.7)" fill="#1fc7d4"/>
          <path d="M38.87,26.14c-2.54,4.88-5.68,5.41-5.81,5.44s-.08,0-.11,0a.75.75,0,0,1-.76-.58c-.37-1.57-.28-7.25,1-9.33a2,2,0,0,1,1.2-1c2.38-.55,4.15,3.92,4.49,4.83A.79.79,0,0,1,38.87,26.14Z" transform="translate(-3.08 -7.7)" fill="#017178"/>
        </g>
        <path d="M85.72,39.54c1.91,13.34-9.66,24.33-25.55,26.6s-30.06-5-32-18.4,9.67-24.32,25.56-26.59S83.82,26.2,85.72,39.54Z" transform="translate(-3.08 -7.7)" fill="#1fc7d4"/>
        <path d="M35.06,60.11c6,5.14,15.24,7.43,25.11,6,14.24-2,25-11.07,25.72-22.53-3,8.41-12,15.53-23.81,18.69C51.87,65,42,64.15,35.06,60.11Z" transform="translate(-3.08 -7.7)" fill="#0098a1" fill-rule="evenodd"/>
        <path d="M54.44,44c.87,3.63-.42,5.39-2.41,5.87s-3.94-.51-4.81-4.14.42-5.38,2.41-5.86S53.57,40.36,54.44,44Z" transform="translate(-3.08 -7.7)" fill="#017178"/>
        <path d="M71.89,42c.13,3.73-1.48,5.2-3.53,5.27s-3.77-1.28-3.9-5S66,37.07,68,37,71.76,38.29,71.89,42Z" transform="translate(-3.08 -7.7)" fill="#017178"/>
        <path d="M60.65,49a1.31,1.31,0,0,0-1.12,1.47,4.66,4.66,0,0,0,5.34,3.83A5,5,0,0,0,68,52.7,1.3,1.3,0,1,0,66,51a2.43,2.43,0,0,1-1.48.76,2.05,2.05,0,0,1-2.42-1.58A1.31,1.31,0,0,0,60.65,49Z" transform="translate(-3.08 -7.7)" fill="#017178" fill-rule="evenodd"/>
        <path d="M60.65,49a1.31,1.31,0,0,0-1.12,1.47,2.06,2.06,0,0,1-1.94,2.14,2.38,2.38,0,0,1-1.65-.37,1.3,1.3,0,1,0-1.47,2.15,4.9,4.9,0,0,0,3.46.81,4.67,4.67,0,0,0,4.19-5.07A1.31,1.31,0,0,0,60.65,49Z" transform="translate(-3.08 -7.7)" fill="#017178" fill-rule="evenodd"/>
        <g>
          <path d="M28,75.06s0,.09,0,.12,0,.1.05.15,0,0,0,.07a.4.4,0,0,0,0,.13s0,.07,0,.1a.69.69,0,0,1,0,.13.12.12,0,0,1,0,.08,1.64,1.64,0,0,1,0,.22s0,0,0,.06a.76.76,0,0,0,0,.16v.08h0c0,.06,0,.11,0,.17v.09c0,.06,0,.13,0,.21s0,0,0,0a1.14,1.14,0,0,1,0,.24l-.07.28,0,0v0c0,.07,0,.15-.07.21l0,0a5.36,5.36,0,0,1-.26.54l0,0,0,0-.07.1s0,0,0,.06l-.07.1-.13.18-.06.09a1.14,1.14,0,0,1-.15.17l0,0-.06.07c-.06.08-.12.12-.18.2a.13.13,0,0,1-.06.05l-.3.26a7.05,7.05,0,0,1-1.44,1A7.13,7.13,0,0,1,24,81.1c-2.27.73-4.05,0-4.9-1.17,0-.05-.08-.09-.11-.15v0a14.1,14.1,0,0,1-.86-1.67L17.6,77l0-.08c0-.08-.06-.16-.1-.24a41.59,41.59,0,0,1-1.34-4.13,24.69,24.69,0,0,1-.86-4.48c-.22-2.35.17-3.75,1.2-4.27,2-1,5.09,2.1,7.37,4.89a41.72,41.72,0,0,1,2.63,3.61A21.17,21.17,0,0,1,28,75.06Z" transform="translate(-3.08 -7.7)" fill="#452a7a"/>
          <path d="M33.78,73.6s-2.71-9.78.91-11.59,12.62,9.3,13.91,12.41C48.62,74.41,43.26,77.55,33.78,73.6Z" transform="translate(-3.08 -7.7)" fill="#9a6aff"/>
          <path d="M44.14,71.92a.75.75,0,0,1-.34,1,1.91,1.91,0,0,1-.41.17c-.91.29-3.36.74-7.2-1.16a.75.75,0,0,1-.37-.43c-.45-1.26-1.74-5.42.35-6.32.67-.28,1.88-.33,4.66,2.52A22.12,22.12,0,0,1,44.14,71.92Z" transform="translate(-3.08 -7.7)" fill="#452a7a"/>
          <path d="M14.5,83.51s-6.38-7.9-9.94-6,.22,15.67,2,18.53C6.54,96,12.2,93.5,14.5,83.51Z" transform="translate(-3.08 -7.7)" fill="#9a6aff"/>
          <path d="M12,84.59c-1.05,5.39-3.91,6.79-4,6.86s-.08,0-.12,0a.76.76,0,0,1-.89-.34c-.8-1.4-2.32-6.87-1.67-9.24a2,2,0,0,1,.88-1.25c2.14-1.21,5.1,2.57,5.68,3.35A.81.81,0,0,1,12,84.59Z" transform="translate(-3.08 -7.7)" fill="#452a7a"/>
        </g>
        <path d="M60.8,83.68c5.76,12.18-2,26.1-16.55,32.95s-30.21,4.06-36-8.12,2-26.1,16.55-33S55,71.49,60.8,83.68Z" transform="translate(-3.08 -7.7)" fill="#9a6aff"/>
        <path d="M61.67,98.48c-3.09,5.7-8.58,10.74-15.67,14.09-14.5,6.86-30.21,4.06-36-8.12a19.76,19.76,0,0,1-.87-14.81c-3.23,6-3.83,12.64-.88,18.87,5.76,12.18,21.46,15,36,8.12C53,112.5,59.29,105.81,61.67,98.48Z" transform="translate(-3.08 -7.7)" fill="#7645d9" fill-rule="evenodd"/>
        <path d="M41.59,90.84a1.3,1.3,0,0,1,1.82.31,6,6,0,0,1-1.74,8.29,1.31,1.31,0,0,1-1.51-2.13,3.4,3.4,0,0,0,1.12-4.65A1.3,1.3,0,0,1,41.59,90.84Z" transform="translate(-3.08 -7.7)" fill="#452a7a" fill-rule="evenodd"/>
        <path d="M41.59,90.84a1.3,1.3,0,0,1,1.82.31,3.39,3.39,0,0,0,4.75.49,1.31,1.31,0,1,1,1.51,2.13,6,6,0,0,1-8.39-1.11A1.3,1.3,0,0,1,41.59,90.84Z" transform="translate(-3.08 -7.7)" fill="#452a7a" fill-rule="evenodd"/>
        <path d="M33.62,90.33c2.6,2.68,2.4,4.85.93,6.28s-3.65,1.57-6.25-1.1-2.39-4.84-.92-6.28S31,87.66,33.62,90.33Z" transform="translate(-3.08 -7.7)" fill="#452a7a"/>
        <path d="M48.36,80.55c2.13,3.06,1.58,5.17-.1,6.34s-3.86,1-6-2.09-1.58-5.16.1-6.34S46.22,77.49,48.36,80.55Z" transform="translate(-3.08 -7.7)" fill="#452a7a"/>
        <g>
          <path d="M105.51,65a.83.83,0,0,1,0,.12s0,.1,0,.14a.41.41,0,0,1,0,.08.5.5,0,0,0,0,.13s0,.06,0,.08l-.07.12s0,0,0,.07-.08.13-.12.18,0,0,0,0l-.1.14,0,.06h0l-.11.12-.05.07a2.11,2.11,0,0,0-.15.15l0,0c0,.05-.13.1-.19.15l-.23.17,0,0,0,0c-.07,0-.12.09-.19.12l0,0a5.2,5.2,0,0,1-.53.26h-.08l-.12,0-.07,0-.11,0-.22.06-.1,0-.23,0h0l-.1,0-.26,0h-.47a6.66,6.66,0,0,1-1.73-.18,6.11,6.11,0,0,1-1.21-.36c-2.22-.86-3.15-2.54-3.06-4,0-.06,0-.12,0-.18v0a13,13,0,0,1,.39-1.83c.1-.37.21-.76.33-1.16l0-.07a2.41,2.41,0,0,0,.08-.25,41.43,41.43,0,0,1,1.57-4,25.76,25.76,0,0,1,2.16-4c1.32-2,2.51-2.8,3.63-2.55,2.16.46,2.62,4.84,2.62,8.45a42.38,42.38,0,0,1-.24,4.45A20.52,20.52,0,0,1,105.51,65Z" transform="translate(-3.08 -7.7)" fill="#ae5714"/>
          <path d="M110.74,66.11s4.09-9.29,8-8.4,3.9,15.17,2.94,18.4C121.73,76.11,115.59,75.16,110.74,66.11Z" transform="translate(-3.08 -7.7)" fill="#ffc700"/>
          <path d="M119.84,71.35a.75.75,0,0,1-.9.57,1.38,1.38,0,0,1-.43-.13c-.89-.34-3.07-1.55-4.85-5.44a.71.71,0,0,1,0-.57c.45-1.27,2.07-5.3,4.26-4.68.7.21,1.67.93,2,4.9A22,22,0,0,1,119.84,71.35Z" transform="translate(-3.08 -7.7)" fill="#ae5714"/>
          <path d="M89.55,61.61s0-10.16-3.92-10.94S75.9,63,75.45,66.28C75.45,66.28,81.44,67.89,89.55,61.61Z" transform="translate(-3.08 -7.7)" fill="#ffc700"/>
          <path d="M86.89,60.83c-4.22,3.52-7.32,2.8-7.45,2.78a.3.3,0,0,0-.1-.07.75.75,0,0,1-.47-.83c.26-1.58,2.54-6.79,4.54-8.21a2,2,0,0,1,1.48-.42c2.41.42,2.32,5.22,2.28,6.19A.76.76,0,0,1,86.89,60.83Z" transform="translate(-3.08 -7.7)" fill="#ae5714"/>
        </g>
        <path d="M67.6,77.66c-2.82,13.18,8,24.94,23.66,28.29s30.34-3,33.16-16.14-8-24.93-23.66-28.29S70.42,64.48,67.6,77.66Z" transform="translate(-3.08 -7.7)" fill="#ffc700"/>
        <path d="M95,83.33a1.31,1.31,0,0,0-1.62.89,6,6,0,0,0,4.35,7.27A1.31,1.31,0,0,0,98.43,89a3.38,3.38,0,0,1-2.57-4A1.31,1.31,0,0,0,95,83.33Z" transform="translate(-3.08 -7.7)" fill="#ae5714" fill-rule="evenodd"/>
        <path d="M95,83.33a1.31,1.31,0,0,0-1.62.89,3.4,3.4,0,0,1-4.34,2,1.31,1.31,0,0,0-.73,2.51A6,6,0,0,0,95.86,85,1.31,1.31,0,0,0,95,83.33Z" transform="translate(-3.08 -7.7)" fill="#ae5714" fill-rule="evenodd"/>
        <path d="M89.7,77.42C88.92,81.06,87,82.1,85,81.67s-3.34-2.16-2.56-5.81,2.71-4.68,4.71-4.25S90.48,73.77,89.7,77.42Z" transform="translate(-3.08 -7.7)" fill="#ae5714"/>
        <path d="M108.71,83.38c-1.34,3.48-3.4,4.2-5.31,3.47s-3-2.65-1.63-6.13,3.39-4.21,5.31-3.48S110,79.89,108.71,83.38Z" transform="translate(-3.08 -7.7)" fill="#ae5714"/>
        <path d="M69.34,90.91c4.09,5.12,10.45,9.15,18.1,11.2,15.65,4.19,30.77-1.47,34.31-14.69A20.11,20.11,0,0,0,120,72.49c4.28,5.35,6.07,11.91,4.26,18.67-3.54,13.22-18.65,18.88-34.31,14.68C80.49,103.32,73,97.79,69.34,90.91Z" transform="translate(-3.08 -7.7)" fill="#eb8c00" fill-rule="evenodd"/>
      </g>
    </g>
    </Svg>
  );
};

export default Icon;