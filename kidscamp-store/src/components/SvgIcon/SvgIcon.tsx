import React from 'react';

interface ImageColorProps extends React.SVGAttributes<SVGElement> {
  width?: string;
  color?: string;
  height?: string;
  className?: string;
}

interface CurvedTextIconProps extends ImageColorProps {
  id?: string;
  text?: string;
}

interface ShoppingCartProps extends ImageColorProps {
  color?: string;
  backgroundColor?: string;
}

// Basic Icons
const CartIcon = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...rest}>
    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6924 15.5583C21.0581 15.264 21.3085 14.8504 21.4 14.39L23 6H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WishlistIcon = ({ className, width, height, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...rest}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmptyHeart = ({ className, width, height, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...rest}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FilledHeart = ({ className, width, height, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const MenuIcon = ({ className, width, height, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...rest}>
    <path d="M3 12H21M3 6H21M3 18H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = ({ className, width, height, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} {...rest}>
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Arrow Icons
const LeftArrow = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '17'} height={height ?? '17'} viewBox="0 0 17 17" fill="none" className={className} aria-label={rest['aria-label']} xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M5.69 7.697h7.34c.367 0 .667.3.667.667s-.3.667-.667.667H5.69v1.193c0 .3-.36.447-.567.234L3.27 8.597a.333.333 0 010-.473l1.853-1.86c.207-.213.567-.06.567.233v1.2z" fill={color ?? 'currentColor'} />
  </svg>
);

const RightArrow = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '17'} height={height ?? '17'} viewBox="0 0 17 17" fill="none" className={className} aria-label={rest['aria-label']} xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M10.764 7.697H3.424c-.367 0-.667.3-.667.667s.3.667.667.667h7.34v1.193c0 .3.36.447.567.234l1.854-1.86a.333.333 0 000-.473l-1.854-1.86c-.207-.213-.567-.06-.567.233v1.2z" fill={color ?? 'currentColor'} />
  </svg>
);

// Carousel Arrow Icons
const CarouselLeftArrow = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <path d="M15 18L9 12L15 6" stroke={color ?? 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CarouselRightArrow = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <path d="M9 18L15 12L9 6" stroke={color ?? 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeftCircle = ({ width, height }: ImageColorProps) => (
  <svg width={width ?? '8'} height={height ?? '8'} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4.00024" cy="4" r="4" fill="#2C2C2C" />
  </svg>
);

const RightCircle = ({ width, height }: ImageColorProps) => (
  <svg width={width ?? '6'} height={height ?? '6'} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3.00024" cy="3" r="3" fill="white" />
  </svg>
);

// Action Icons
const CheckedIcon = ({ className, width, height }: ImageColorProps) => (
  <svg fill="none" viewBox="0 0 19 14" width={width ?? '19'} height={height ?? '14'} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.45324 13.725L0.278237 7.62349C-0.0927457 7.25692 -0.0927457 6.66257 0.278237 6.29596L1.62171 4.96843C1.99269 4.60182 2.59424 4.60182 2.96522 4.96843L7.125 9.07869L16.0348 0.274927C16.4058 -0.0916425 17.0073 -0.0916425 17.3783 0.274927L18.7218 1.60246C19.0927 1.96903 19.0927 2.56338 18.7218 2.92998L7.79675 13.7251C7.42573 14.0916 6.82423 14.0916 6.45324 13.725Z" fill="url(#paint0_linear_1_21320)" />
    <defs>
      <linearGradient x1="0" y1="0" x2="13.3716" y2="18.1472" id="paint0_linear_1_21320" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B7B05" />
        <stop offset="1" stopColor="#089900" />
      </linearGradient>
    </defs>
  </svg>
);

const Delete = ({ className, width, height }: ImageColorProps) => (
  <svg fill="none" viewBox="0 0 20 24" width={width ?? '20'} className={className} height={height ?? '24'} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1544 23.0771H3.84675C3.23472 23.0771 2.64775 22.8339 2.21497 22.4012C1.78219 21.9684 1.53906 21.3814 1.53906 20.7694V6.154C1.53906 5.94998 1.62011 5.75433 1.76437 5.61007C1.90862 5.46581 2.10428 5.38477 2.30829 5.38477C2.51231 5.38477 2.70796 5.46581 2.85222 5.61007C2.99648 5.75433 3.07752 5.94998 3.07752 6.154V20.7694C3.07752 20.9734 3.15857 21.1691 3.30283 21.3133C3.44709 21.4576 3.64274 21.5386 3.84675 21.5386H16.1544C16.3585 21.5386 16.5541 21.4576 16.6984 21.3133C16.8426 21.1691 16.9237 20.9734 16.9237 20.7694V6.154C16.9237 5.94998 17.0047 5.75433 17.149 5.61007C17.2932 5.46581 17.4889 5.38477 17.6929 5.38477C17.8969 5.38477 18.0926 5.46581 18.2368 5.61007C18.3811 5.75433 18.4621 5.94998 18.4621 6.154V20.7694C18.4621 21.3814 18.219 21.9684 17.7862 22.4012C17.3535 22.8339 16.7665 23.0771 16.1544 23.0771Z" fill="#923B00" />
    <path d="M19.2308 4.61463H0.769231C0.565218 4.61463 0.369561 4.53359 0.225302 4.38933C0.0810437 4.24507 0 4.04942 0 3.8454C0 3.64139 0.0810437 3.44573 0.225302 3.30147C0.369561 3.15722 0.565218 3.07617 0.769231 3.07617H19.2308C19.4348 3.07617 19.6304 3.15722 19.7747 3.30147C19.919 3.44573 20 3.64139 20 3.8454C20 4.04942 19.919 4.24507 19.7747 4.38933C19.6304 4.53359 19.4348 4.61463 19.2308 4.61463Z" fill="#923B00" />
    <path d="M13.0793 4.61538C12.8753 4.61538 12.6797 4.53434 12.5354 4.39008C12.3911 4.24582 12.3101 4.05017 12.3101 3.84615V1.53846H7.69471V3.84615C7.69471 4.05017 7.61367 4.24582 7.46941 4.39008C7.32515 4.53434 7.12949 4.61538 6.92548 4.61538C6.72147 4.61538 6.52581 4.53434 6.38155 4.39008C6.23729 4.24582 6.15625 4.05017 6.15625 3.84615V0.769231C6.15625 0.565218 6.23729 0.369561 6.38155 0.225302C6.52581 0.0810437 6.72147 0 6.92548 0H13.0793C13.2833 0 13.479 0.0810437 13.6233 0.225302C13.7675 0.369561 13.8486 0.565218 13.8486 0.769231V3.84615C13.8486 4.05017 13.7675 4.24582 13.6233 4.39008C13.479 4.53434 13.2833 4.61538 13.0793 4.61538Z" fill="#923B00" />
    <path d="M10.0036 19.2315C9.79959 19.2315 9.60394 19.1505 9.45968 19.0062C9.31542 18.862 9.23438 18.6663 9.23438 18.4623V7.69306C9.23438 7.48905 9.31542 7.29339 9.45968 7.14913C9.60394 7.00487 9.79959 6.92383 10.0036 6.92383C10.2076 6.92383 10.4033 7.00487 10.5475 7.14913C10.6918 7.29339 10.7728 7.48905 10.7728 7.69306V18.4623C10.7728 18.6663 10.6918 18.862 10.5475 19.0062C10.4033 19.1505 10.2076 19.2315 10.0036 19.2315Z" fill="#923B00" />
    <path d="M13.8474 17.6917C13.6433 17.6917 13.4477 17.6107 13.3034 17.4664C13.1592 17.3221 13.0781 17.1265 13.0781 16.9225V9.23017C13.0781 9.02616 13.1592 8.8305 13.3034 8.68624C13.4477 8.54198 13.6433 8.46094 13.8474 8.46094C14.0514 8.46094 14.247 8.54198 14.3913 8.68624C14.5355 8.8305 14.6166 9.02616 14.6166 9.23017V16.9225C14.6166 17.1265 14.5355 17.3221 14.3913 17.4664C14.247 17.6107 14.0514 17.6917 13.8474 17.6917Z" fill="#923B00" />
    <path d="M6.15204 17.6917C5.94803 17.6917 5.75237 17.6107 5.60812 17.4664C5.46386 17.3221 5.38281 17.1265 5.38281 16.9225V9.23017C5.38281 9.02616 5.46386 8.8305 5.60812 8.68624C5.75237 8.54198 5.94803 8.46094 6.15204 8.46094C6.35606 8.46094 6.55171 8.54198 6.69597 8.68624C6.84023 8.8305 6.92127 9.02616 6.92127 9.23017V16.9225C6.92127 17.1265 6.84023 17.3221 6.69597 17.4664C6.55171 17.6107 6.35606 17.6917 6.15204 17.6917Z" fill="#923B00" />
  </svg>
);

const CrossButton = ({ className, width, height }: ImageColorProps) => (
  <svg width={width ?? '24'} height={height ?? '24'} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="white" fillOpacity="0.8" />
    <path d="M8.79688 15.6008L15.5969 8.80078L8.79688 15.6008Z" fill="#492A2A" />
    <path d="M8.79688 15.6008L15.5969 8.80078" stroke="#492A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.79688 8.80078L15.5969 15.6008L8.79688 8.80078Z" fill="#492A2A" />
    <path d="M8.79688 8.80078L15.5969 15.6008" stroke="#492A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Payment Icons
const VisaCard = ({ className, width, height }: ImageColorProps) => (
  <svg fill="none" viewBox="0 0 27 9" className={className} width={width ?? '27'} height={height ?? '9'} xmlns="http://www.w3.org/2000/svg">
    <path fill="#172B85" fillRule="evenodd" clipRule="evenodd" d="M6.74225 8.13569H4.40835L2.65821 1.7733C2.57514 1.48063 2.39876 1.22189 2.13931 1.09995C1.49183 0.793491 0.778346 0.549599 0 0.426593V0.181641H3.75973C4.27863 0.181641 4.6678 0.549599 4.73266 0.97694L5.64073 5.56635L7.97349 0.181641H10.2425L6.74225 8.13569ZM11.5382 8.13569H9.33398L11.149 0.181641H13.3532L11.5382 8.13569ZM16.2018 2.38696C16.2666 1.95856 16.6558 1.7136 17.1098 1.7136C17.8233 1.6521 18.6005 1.77511 19.2492 2.0805L19.6383 0.367958C18.9897 0.123006 18.2762 0 17.6287 0C15.4894 0 13.9327 1.10175 13.9327 2.63085C13.9327 3.79411 15.0354 4.4049 15.8137 4.77286C16.6558 5.13975 16.9801 5.38471 16.9153 5.7516C16.9153 6.30195 16.2666 6.5469 15.6191 6.5469C14.8408 6.5469 14.0625 6.36345 13.3501 6.057L12.9609 7.7706C13.7393 8.076 14.5814 8.19901 15.3597 8.19901C17.7585 8.25945 19.2492 7.15875 19.2492 5.50665C19.2492 3.42615 16.2018 3.3042 16.2018 2.38696ZM26.9664 8.13569L25.2163 0.181641H23.3364C22.9472 0.181641 22.5581 0.426593 22.4283 0.793491L19.1875 8.13569H21.4565L21.9094 6.9735H24.6974L24.9568 8.13569H26.9664ZM23.6656 2.32617L24.313 5.32392H22.498L23.6656 2.32617Z" />
  </svg>
);

const MasterCard = ({ className, width, height }: ImageColorProps) => (
  <svg fill="none" viewBox="0 0 23 14" className={className} width={width ?? '23'} height={height ?? '14'} xmlns="http://www.w3.org/2000/svg">
    <path fill="#ED0006" d="M16.0215 0C19.8736 0 22.9971 2.92693 22.9971 6.53711C22.9969 10.1471 19.8735 13.0732 16.0215 13.0732C14.2948 13.0732 12.716 12.4838 11.498 11.5098C10.28 12.4837 8.7012 13.0732 6.97461 13.0732C3.12272 13.0731 0.000178726 10.147 0 6.53711C0 2.92704 3.12261 0.000166401 6.97461 0C8.70089 0 10.2801 0.58889 11.498 1.5625C12.716 0.58876 14.2951 7.4792e-05 16.0215 0Z" />
    <path fill="#F9A000" d="M16.0312 0C19.8834 0 23.0068 2.92693 23.0068 6.53711C23.0067 10.1471 19.8833 13.0732 16.0312 13.0732C14.3046 13.0732 12.7258 12.4838 11.5078 11.5098C13.0072 10.3109 13.9599 8.52903 13.96 6.53711C13.96 4.54478 13.0077 2.76147 11.5078 1.5625C12.7257 0.58876 14.3049 7.4792e-05 16.0312 0Z" />
    <path fill="#FF5E00" d="M11.498 1.5625C12.9979 2.76147 13.9502 4.54478 13.9502 6.53711C13.9501 8.52903 12.9974 10.3109 11.498 11.5098C9.99888 10.3109 9.04697 8.52885 9.04688 6.53711C9.04688 4.54496 9.99843 2.76147 11.498 1.5625Z" />
  </svg>
);

// Shopping Cart Icon
const ShoppingCart = ({ color, backgroundColor, className, width, height }: ShoppingCartProps) => (
  <svg width={width ?? '45'} height={height ?? '45'} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g id="shopping cart">
      <rect id="Rectangle 28" x="0.5" y="0.5" width="44" height="44" rx="22" fill={backgroundColor} stroke="#492A2A" />
      <path id="Vector" d="M22.125 13.1989C24.5733 13.1989 26.5536 15.1718 26.5537 17.5992V19.3248H29.5176C29.9217 19.3248 30.2499 19.6546 30.25 20.0494V27.401C30.2498 29.8173 28.2584 31.8014 25.8213 31.8014H18.4287C15.9916 31.8014 14.0002 29.8173 14 27.401V20.0494C14.0001 19.6546 14.3283 19.3248 14.7324 19.3248H17.6963V17.5992C17.6964 15.1718 19.6767 13.1989 22.125 13.1989ZM15.4639 27.401C15.4641 29.031 16.7964 30.3512 18.4287 30.3512H25.8213C27.4529 30.3512 28.7859 29.031 28.7861 27.401V20.775H26.5537V22.4996C26.5537 22.8971 26.228 23.2252 25.8213 23.2252C25.4147 23.2251 25.0889 22.897 25.0889 22.4996V20.775H19.1611V22.4996C19.1611 22.897 18.8353 23.2251 18.4287 23.2252C18.022 23.2252 17.6963 22.8971 17.6963 22.4996V20.775H15.4639V27.401ZM22.125 14.649C20.4907 14.649 19.1612 15.9673 19.1611 17.5992V19.3248H25.0889V17.5992C25.0888 15.9673 23.7593 14.649 22.125 14.649Z" fill={color} stroke="#492A2A" />
    </g>
  </svg>
);

// Utility Icons
const DropDown = ({ width, height }: ImageColorProps) => (
  <svg width={width ?? '7'} height={height ?? '5'} viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 3.70703L1 1.00018" stroke="#4D2727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 3.70703L6 1.00018" stroke="#4D2727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareBtn = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.909 13.3381C14.2871 13.3381 13.7308 13.5836 13.3053 13.9681L7.47168 10.5727C7.51259 10.3845 7.54532 10.1963 7.54532 9.99993C7.54532 9.80357 7.51259 9.61539 7.47168 9.42721L13.2399 6.06448C13.6817 6.47357 14.2626 6.72721 14.909 6.72721C16.2671 6.72721 17.3635 5.63084 17.3635 4.27266C17.3635 2.91448 16.2671 1.81812 14.909 1.81812C13.5508 1.81812 12.4544 2.91448 12.4544 4.27266C12.4544 4.46902 12.4871 4.65721 12.528 4.84539L6.75987 8.20812C6.31805 7.79903 5.73714 7.54539 5.09078 7.54539C3.73259 7.54539 2.63623 8.64175 2.63623 9.99993C2.63623 11.3581 3.73259 12.4545 5.09078 12.4545C5.73714 12.4545 6.31805 12.2008 6.75987 11.7918L12.5853 15.1954C12.5444 15.3672 12.5199 15.5472 12.5199 15.7272C12.5199 17.0445 13.5917 18.1163 14.909 18.1163C16.2262 18.1163 17.298 17.0445 17.298 15.7272C17.298 14.4099 16.2262 13.3381 14.909 13.3381Z" fill="#1F0E0E" />
  </svg>
);

// Arrow Icons
const RightArrowSmall = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '16'} height={height ?? '16'} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color ?? 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// App Store Icon
const AppStoreIcon = ({ className, width, height, color, ...rest }: ImageColorProps) => (
  <svg width={width ?? '20'} height={height ?? '24'} viewBox="0 0 24 24" fill={color ?? 'currentColor'} className={className} {...rest}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Icons object for easy access
const icons = {
  cart: CartIcon,
  wishlist: WishlistIcon,
  heartEmpty: EmptyHeart,
  heartFilled: FilledHeart,
  menu: MenuIcon,
  user: UserIcon,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  rightArrowSmall: RightArrowSmall,
  carouselLeftArrow: CarouselLeftArrow,
  carouselRightArrow: CarouselRightArrow,
  leftCircle: LeftCircle,
  rightCircle: RightCircle,
  checked: CheckedIcon,
  delete: Delete,
  crossBtn: CrossButton,
  visa: VisaCard,
  master: MasterCard,
  shoppingCart: ShoppingCart,
  dropDown: DropDown,
  shareBtn: ShareBtn,
  appStore: AppStoreIcon,
};

// Main SvgIcon component interface
export interface SvgIconProps extends React.SVGAttributes<SVGElement> {
  width?: string;
  height?: string;
  className?: string;
  name?: keyof typeof icons;
  color?: string;
  backgroundColor?: string;
  testId?: string;
  role?: string;
  ariaLabel?: 'true' | 'false';
}

// Main SvgIcon component
const SvgIcon = ({
  name = 'cart',
  className,
  height,
  width,
  color,
  backgroundColor,
  testId,
  ...rest
}: SvgIconProps) => {
  const Icon = icons[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in SvgIcon component`);
    return null;
  }

  return (
    <Icon
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      data-testid={testId}
      className={className}
      {...rest}
    />
  );
};

export default SvgIcon; 