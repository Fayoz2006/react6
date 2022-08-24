import React from "react";

const SVGicons = ({ icon }) => {
  switch (icon) {
    case "user":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99998 6.99978C8.93297 6.99978 10.5 5.43283 10.5 3.49989C10.5 1.56696 8.93297 0 6.99998 0C5.067 0 3.5 1.56696 3.5 3.49989C3.5 5.43283 5.067 6.99978 6.99998 6.99978Z"
            fill="white"
          />
          <path
            d="M7 8.75C4.68125 8.75 0 9.93122 0 12.2499V13.9999H14V12.2499C14 9.93122 9.31875 8.75 7 8.75Z"
            fill="white"
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_47_33)">
            <circle
              cx="21.5"
              cy="17.5"
              r="16.5"
              stroke="#5FB2FF"
              strokeWidth="2"
            />
          </g>
          <path
            d="M27.25 13.6667H26.375V12.0476C26.375 9.82143 24.4062 8 22 8C19.5938 8 17.625 9.82143 17.625 12.0476V13.6667H16.75C15.7875 13.6667 15 14.3952 15 15.2857V23.381C15 24.2714 15.7875 25 16.75 25H27.25C28.2125 25 29 24.2714 29 23.381V15.2857C29 14.3952 28.2125 13.6667 27.25 13.6667ZM22 20.9524C21.0375 20.9524 20.25 20.2238 20.25 19.3333C20.25 18.4429 21.0375 17.7143 22 17.7143C22.9625 17.7143 23.75 18.4429 23.75 19.3333C23.75 20.2238 22.9625 20.9524 22 20.9524ZM24.7125 13.6667H19.2875V12.0476C19.2875 10.6714 20.5125 9.5381 22 9.5381C23.4875 9.5381 24.7125 10.6714 24.7125 12.0476V13.6667Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_47_33"
              x="0"
              y="0"
              width="39"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_47_33"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_47_33"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "type_password":
      return (
        <svg
          width="25"
          height="21"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 4.43272C15.625 4.43272 18.1818 6.92612 18.1818 9.97361C18.1818 10.6939 18.0114 11.3588 17.7841 11.9683L21.0795 15.2375C22.7841 13.8522 24.1477 12.0237 25 9.97361C23.0114 5.09762 18.1818 1.66227 12.5 1.66227C10.9091 1.66227 9.375 1.93931 7.95455 2.43799L10.3977 4.82058C11.0795 4.59894 11.7614 4.43272 12.5 4.43272ZM1.13636 1.44063L3.75 3.98945L4.26136 4.43272C2.38636 5.87335 0.909091 7.75726 0 9.97361C1.98864 14.8496 6.81818 18.285 12.5 18.285C14.2614 18.285 15.9659 17.9525 17.5 17.343L17.9545 17.7863L21.25 21L22.6705 19.6148L2.61364 0L1.13636 1.44063ZM7.44318 7.53562L9.20455 9.2533C9.14773 9.47493 9.09091 9.69657 9.09091 9.97361C9.09091 11.8021 10.625 13.2982 12.5 13.2982C12.7841 13.2982 13.0114 13.2427 13.2386 13.2427L15 14.9604C14.2614 15.2929 13.4091 15.5145 12.5 15.5145C9.375 15.5145 6.81818 13.0211 6.81818 9.97361C6.81818 9.08707 7.04545 8.25594 7.44318 7.53562ZM12.3295 6.64908L15.9091 10.1398V9.97361C15.9091 8.14512 14.375 6.64908 12.5 6.64908H12.3295Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.501 11H11.701L11.401 10.75C12.401 9.6 12.951 8.15 12.951 6.5C12.951 2.9 10.051 0 6.45097 0C2.85097 0 0.000976562 2.9 0.000976562 6.5C0.000976562 10.1 2.90097 13 6.50097 13C8.10097 13 9.60097 12.4 10.701 11.45L11.001 11.7V12.5L16.001 17.5L17.501 16L12.501 11ZM6.50097 11C4.00097 11 2.00097 9 2.00097 6.5C2.00097 4 4.00097 2 6.50097 2C9.00097 2 11.001 4 11.001 6.5C11.001 9 9.00097 11 6.50097 11Z"
            fill="white"
          />
        </svg>
      );
    case "e-mail":
      return (
        <svg
          width="40"
          height="34"
          viewBox="0 0 40 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.3335 10.666H16.6668C15.3835 10.666 14.3335 11.716 14.3335 12.9993V26.9993C14.3335 28.2827 15.3835 29.3327 16.6668 29.3327H35.3335C36.6168 29.3327 37.6668 28.2827 37.6668 26.9993V12.9993C37.6668 11.716 36.6168 10.666 35.3335 10.666ZM35.3335 26.9993H16.6668V15.3327L26.0002 21.166L35.3335 15.3327V26.9993ZM26.0002 18.8327L16.6668 12.9993H35.3335L26.0002 18.8327Z"
            fill="#54669C"
          />
          <g filter="url(#filter0_d_62_18)">
            <circle cx="12" cy="10" r="8" fill="#0097E8" />
            <path
              d="M12.5703 14H11.1934V8.46875C11.1934 7.80859 11.209 7.28516 11.2402 6.89844C11.1504 6.99219 11.0391 7.0957 10.9062 7.20898C10.7773 7.32227 10.3398 7.68164 9.59375 8.28711L8.90234 7.41406L11.4219 5.43359H12.5703V14Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_62_18"
              x="0"
              y="0"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.333333 0 0 0 0 0.137255 0 0 0 0 0.866667 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_62_18"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_62_18"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "bell":
      return (
        <svg
          width="64"
          height="68"
          viewBox="0 0 64 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_62_6)">
            <path
              d="M40.1765 34.6V35.0167L40.4723 35.3101L42.9832 37.8H21.0168L23.5277 35.3101L23.8235 35.0167V34.6V26.9C23.8235 23.1087 26.524 19.8648 30.103 19.0554L30.8824 18.8791V18.08V17.1C30.8824 16.4702 31.3444 16 32 16C32.6556 16 33.1176 16.4702 33.1176 17.1V18.08V18.8791L33.897 19.0554C37.476 19.8648 40.1765 23.1087 40.1765 26.9V34.6ZM33.5126 41.2C33.1852 41.6796 32.6304 42 32 42C31.3696 42 30.8148 41.6796 30.4874 41.2H33.5126Z"
              stroke="#54669C"
              strokeWidth="2"
            />
          </g>
          <g filter="url(#filter1_d_62_6)">
            <circle cx="22" cy="18" r="8" fill="#0097E8" />
            <path
              d="M21.4219 13.3223C22.2344 13.3223 22.877 13.5098 23.3496 13.8848C23.8223 14.2559 24.0586 14.7539 24.0586 15.3789C24.0586 16.2578 23.5312 16.957 22.4766 17.4766C23.1484 17.8125 23.625 18.166 23.9062 18.5371C24.1914 18.9082 24.334 19.3223 24.334 19.7793C24.334 20.4863 24.0742 21.0527 23.5547 21.4785C23.0352 21.9043 22.332 22.1172 21.4453 22.1172C20.5156 22.1172 19.7949 21.918 19.2832 21.5195C18.7715 21.1211 18.5156 20.5566 18.5156 19.8262C18.5156 19.3496 18.6484 18.9219 18.9141 18.543C19.1836 18.1602 19.623 17.8203 20.2324 17.5234C19.709 17.2109 19.3359 16.8809 19.1133 16.5332C18.8906 16.1855 18.7793 15.7949 18.7793 15.3613C18.7793 14.7402 19.0234 14.2461 19.5117 13.8789C20 13.5078 20.6367 13.3223 21.4219 13.3223ZM19.834 19.7793C19.834 20.1855 19.9766 20.502 20.2617 20.7285C20.5469 20.9512 20.9336 21.0625 21.4219 21.0625C21.9258 21.0625 22.3164 20.9473 22.5938 20.7168C22.875 20.4824 23.0156 20.166 23.0156 19.7676C23.0156 19.4512 22.8867 19.1621 22.6289 18.9004C22.3711 18.6387 21.9805 18.3965 21.457 18.1738L21.2871 18.0977C20.7715 18.3242 20.4004 18.5742 20.1738 18.8477C19.9473 19.1172 19.834 19.4277 19.834 19.7793ZM21.4102 14.3828C21.0195 14.3828 20.7051 14.4805 20.4668 14.6758C20.2285 14.8672 20.1094 15.1289 20.1094 15.4609C20.1094 15.6641 20.1523 15.8457 20.2383 16.0059C20.3242 16.166 20.4492 16.3125 20.6133 16.4453C20.7773 16.5742 21.0547 16.7305 21.4453 16.9141C21.9141 16.707 22.2441 16.4902 22.4355 16.2637C22.6309 16.0332 22.7285 15.7656 22.7285 15.4609C22.7285 15.1289 22.6074 14.8672 22.3652 14.6758C22.127 14.4805 21.8086 14.3828 21.4102 14.3828Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_62_6"
              x="0"
              y="0"
              width="64"
              height="68"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.592157 0 0 0 0 0.909804 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_62_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_62_6"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_62_6"
              x="10"
              y="8"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.333333 0 0 0 0 0.137255 0 0 0 0 0.866667 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_62_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_62_6"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "overview":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 3.10457 0.895431 4 2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2ZM6 14C6 15.1046 6.89543 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14ZM0 14C0 15.1046 0.895431 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 0 12.8954 0 14ZM0 8C0 9.10457 0.895431 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 0 6.89543 0 8ZM6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8ZM14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0ZM6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2C10 0.895431 9.10457 0 8 0C6.89543 0 6 0.895431 6 2ZM12 8C12 9.10457 12.8954 10 14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8ZM12 14C12 15.1046 12.8954 16 14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "wallets":
      return (
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5455 0H1.45455C0.654545 0 0 0.65 0 1.44444V11.5556C0 12.35 0.654545 13 1.45455 13H14.5455C15.3455 13 16 12.35 16 11.5556V1.44444C16 0.65 15.3455 0 14.5455 0ZM8 5.77778H1.45455V4.33333H8V5.77778ZM8 2.88889H1.45455V1.44444H8V2.88889Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "transictions":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.6 5.15L1.4 0L0 1.4L5.15 6.55L6.6 5.15ZM10.5 0L12.55 2.05L0 14.6L1.4 16L13.95 3.45L16 5.5V0H10.5ZM10.85 9.4L9.45 10.8L12.6 13.95L10.5 16H16V10.5L13.95 12.55L10.85 9.4Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "exchange":
      return (
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 10.517L9.59999 11.5956L13.12 15.1552L0.746701 15.1552L0.746702 16.6653H13.12L9.59999 20.2249L10.6667 21.3035L16 15.9102L10.6667 10.517Z"
            fill="white"
          />
          <path
            d="M5.33335 13.4831L6.40001 12.4044L2.88003 8.84484L15.2533 8.84484L15.2533 7.33473L2.88002 7.33473L6.40001 3.77517L5.33335 2.69651L3.90791e-05 8.08978L5.33335 13.4831Z"
            fill="white"
          />
        </svg>
      );
    case "market":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0ZM5.33333 12.4444H3.55556V6.22222H5.33333V12.4444ZM8.88889 12.4444H7.11111V3.55556H8.88889V12.4444ZM12.4444 12.4444H10.6667V8.88889H12.4444V12.4444Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "logOut":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.31111 11.2L7.55556 12.4444L12 8L7.55556 3.55556L6.31111 4.8L8.62222 7.11111H0V8.88889H8.57778L6.31111 11.2ZM14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V5.33333H1.77778V1.77778H14.2222V14.2222H1.77778V10.6667H0V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z"
            fill="#616A8B"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          width="161"
          height="32"
          viewBox="0 0 161 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_55_211)">
            <path
              d="M152.707 10.7071C153.098 10.3166 153.098 9.68342 152.707 9.29289L146.343 2.92893C145.953 2.53841 145.319 2.53841 144.929 2.92893C144.538 3.31946 144.538 3.95262 144.929 4.34315L150.586 10L144.929 15.6569C144.538 16.0474 144.538 16.6805 144.929 17.0711C145.319 17.4616 145.953 17.4616 146.343 17.0711L152.707 10.7071ZM8 11H152V9H8V11Z"
              fill="#018FFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_55_211"
              x="0"
              y="0.635742"
              width="161"
              height="30.7285"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_55_211"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_55_211"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    default:
      break;
  }
};

export default SVGicons;
