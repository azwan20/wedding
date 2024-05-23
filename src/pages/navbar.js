import Link from "next/link";
import Homes from "./home";
import Quran from "./quran";

export default function Navbar({ setActiveIndex, navbar }) {
    const svgItems =
        [
            <Link href="" key="1">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 32.5V22.75H22.75V32.5H30.875V19.5H35.75L19.5 4.875L3.25 19.5H8.125V32.5H16.25Z" fill="#581D35" />
                </svg>
            </Link>,
            <Link href="" key="2">
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_44)">
                        <path d="M27 21V1.5C27 0.5625 26.4214 0 25.4571 0H5.78571C2.50714 0 0 2.4375 0 5.625V24.375C0 27.5625 2.50714 30 5.78571 30H25.4571C26.2286 30 27 29.4375 27 28.5V27.5625C27 27.1875 26.8071 26.8125 26.4214 26.4375C26.2286 25.5 26.2286 22.875 26.4214 22.125C26.8071 21.9375 27 21.5625 27 21ZM18.1454 8.54414C18.1816 8.47324 18.2515 8.4375 18.3214 8.4375C18.3913 8.4375 18.4613 8.47324 18.4974 8.54414L19.1712 9.87129L20.6779 10.084C20.8388 10.1068 20.9033 10.299 20.787 10.4098L19.6967 11.4428L19.9541 12.9012C19.9758 13.0248 19.8751 13.125 19.7606 13.125C19.7305 13.125 19.6992 13.118 19.669 13.1027L18.3214 12.4143L16.9738 13.1027C16.9437 13.118 16.9124 13.125 16.8822 13.125C16.7677 13.125 16.6671 13.0248 16.6888 12.9012L16.9461 11.4428L15.8559 10.4098C15.739 10.299 15.8034 10.1068 15.965 10.084L17.4711 9.87129L18.1454 8.54414ZM14.6565 4.50059C15.4804 4.50059 16.2994 4.64648 17.0902 4.93477C17.1499 4.93481 17.209 4.9476 17.2631 4.97225C17.3172 4.99691 17.3651 5.03281 17.4034 5.07743C17.4417 5.12204 17.4694 5.17429 17.4847 5.23048C17.4999 5.28666 17.5023 5.34542 17.4916 5.40259C17.481 5.45977 17.4575 5.51397 17.4229 5.56137C17.3884 5.60877 17.3435 5.64821 17.2915 5.67691C17.2396 5.70561 17.1817 5.72287 17.1222 5.72747C17.0626 5.73206 17.0027 5.72389 16.9467 5.70352C16.9063 5.70352 16.7605 5.69121 16.6978 5.69121C13.5452 5.69121 10.9808 8.18437 10.9808 11.2494C10.9808 14.3139 13.5452 16.8076 16.6978 16.8076C16.7599 16.8076 16.9075 16.7953 16.9467 16.7953C17.1836 16.7953 17.3565 16.9793 17.3565 17.1926C17.3565 17.3672 17.2396 17.5154 17.0781 17.5688C16.2904 17.8541 15.4756 17.9988 14.6559 17.9988C10.8283 17.9994 7.71429 14.9713 7.71429 11.25C7.71429 7.52812 10.8283 4.50059 14.6565 4.50059ZM22.95 26.25H5.78571C4.62857 26.25 3.85714 25.5 3.85714 24.375C3.85714 23.25 4.82143 22.5 5.78571 22.5H22.95V26.25Z" fill="#581D35" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_44">
                            <rect width="27" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>,
            <Link href="" key="4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5781 9.85313C13.9969 9.3 12.8372 8.4375 11.25 8.4375C8.90625 8.4375 7.5 10.3125 7.5 13.125C7.5 16.875 13.5938 21.5625 15 21.5625C16.4062 21.5625 22.5 16.875 22.5 13.125C22.5 10.3125 21.0938 8.4375 18.75 8.4375C17.1619 8.4375 16.0031 9.29906 15.4219 9.85313C15.3059 9.9569 15.1557 10.0143 15 10.0143C14.8443 10.0143 14.6941 9.9569 14.5781 9.85313Z" fill="#581D35" />
                    <path d="M0.9375 7.5C0.9375 6.75408 1.23382 6.03871 1.76126 5.51126C2.28871 4.98382 3.00408 4.6875 3.75 4.6875H26.25C26.9959 4.6875 27.7113 4.98382 28.2387 5.51126C28.7662 6.03871 29.0625 6.75408 29.0625 7.5V22.5C29.0625 23.2459 28.7662 23.9613 28.2387 24.4887C27.7113 25.0162 26.9959 25.3125 26.25 25.3125H3.75C3.00408 25.3125 2.28871 25.0162 1.76126 24.4887C1.23382 23.9613 0.9375 23.2459 0.9375 22.5V7.5ZM3.75 6.5625C3.60022 6.56232 3.45258 6.59807 3.31947 6.66675C3.18636 6.73542 3.07166 6.83502 2.985 6.95719L7.30688 9.83813C7.00278 10.4141 6.79293 11.0351 6.68531 11.6775L2.8125 9.09562V20.9625L8.31937 17.4581C8.69994 17.9623 9.11003 18.4434 9.5475 18.8991L3.00187 23.0644C3.08916 23.1803 3.20217 23.2743 3.33199 23.339C3.46182 23.4038 3.60492 23.4375 3.75 23.4375H26.25C26.3951 23.4375 26.5382 23.4038 26.668 23.339C26.7978 23.2743 26.9108 23.1803 26.9981 23.0644L20.4516 18.8991C20.8856 18.4462 21.3028 17.9616 21.6806 17.4581L27.1875 20.9625V9.09562L23.3156 11.6775C23.2077 11.0351 22.9975 10.4141 22.6931 9.83813L27.015 6.95719C26.9283 6.83502 26.8136 6.73542 26.6805 6.66675C26.5474 6.59807 26.3998 6.56232 26.25 6.5625H3.75Z" fill="#581D35" />
                </svg>
            </Link>,
            <Link href="" key="5">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.25 14.5459C26.8359 14.9463 27.3584 15.4004 27.8174 15.9082C28.2764 16.416 28.6719 16.9727 29.0039 17.5781C29.3359 18.1836 29.5801 18.8232 29.7363 19.4971C29.8926 20.1709 29.9805 20.8594 30 21.5625C30 22.7246 29.7803 23.8184 29.3408 24.8438C28.9014 25.8691 28.2959 26.7627 27.5244 27.5244C26.7529 28.2861 25.8594 28.8867 24.8438 29.3262C23.8281 29.7656 22.7344 29.9902 21.5625 30C20.6738 30 19.8145 29.8682 18.9844 29.6045C18.1543 29.3408 17.3926 28.96 16.6992 28.4619C16.0059 27.9639 15.3906 27.3682 14.8535 26.6748C14.3164 25.9814 13.9014 25.2148 13.6084 24.375H1.875V1.875H5.625V0H7.5V1.875H20.625V0H22.5V1.875H26.25V14.5459ZM3.75 3.75V7.5H24.375V3.75H22.5V5.625H20.625V3.75H7.5V5.625H5.625V3.75H3.75ZM13.1689 22.5C13.1396 22.1973 13.125 21.8848 13.125 21.5625C13.125 20.7227 13.2422 19.9072 13.4766 19.1162C13.7109 18.3252 14.0674 17.5781 14.5459 16.875H13.125V15H15V16.2598C15.4004 15.7617 15.8447 15.3223 16.333 14.9414C16.8213 14.5605 17.3486 14.2334 17.915 13.96C18.4814 13.6865 19.0723 13.4814 19.6875 13.3447C20.3027 13.208 20.9277 13.1348 21.5625 13.125C22.5391 13.125 23.4766 13.2861 24.375 13.6084V9.375H3.75V22.5H13.1689ZM21.5625 28.125C22.4707 28.125 23.3203 27.9541 24.1113 27.6123C24.9023 27.2705 25.5957 26.8018 26.1914 26.2061C26.7871 25.6104 27.2559 24.917 27.5977 24.126C27.9395 23.335 28.1152 22.4805 28.125 21.5625C28.125 20.6543 27.9541 19.8047 27.6123 19.0137C27.2705 18.2227 26.8018 17.5293 26.2061 16.9336C25.6104 16.3379 24.917 15.8691 24.126 15.5273C23.335 15.1855 22.4805 15.0098 21.5625 15C20.6543 15 19.8047 15.1709 19.0137 15.5127C18.2227 15.8545 17.5293 16.3232 16.9336 16.9189C16.3379 17.5146 15.8691 18.208 15.5273 18.999C15.1855 19.79 15.0098 20.6445 15 21.5625C15 22.4707 15.1709 23.3203 15.5127 24.1113C15.8545 24.9023 16.3232 25.5957 16.9189 26.1914C17.5146 26.7871 18.208 27.2559 18.999 27.5977C19.79 27.9395 20.6445 28.1152 21.5625 28.125ZM22.5 20.625H25.3125V22.5H20.625V16.875H22.5V20.625ZM5.625 15H7.5V16.875H5.625V15ZM9.375 15H11.25V16.875H9.375V15ZM9.375 11.25H11.25V13.125H9.375V11.25ZM5.625 18.75H7.5V20.625H5.625V18.75ZM9.375 18.75H11.25V20.625H9.375V18.75ZM15 13.125H13.125V11.25H15V13.125ZM18.75 13.125H16.875V11.25H18.75V13.125ZM22.5 13.125H20.625V11.25H22.5V13.125Z" fill="#581D35" />
                </svg>
            </Link>,
            <svg key="6" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3398 11.84C17.3398 13.1661 16.8131 14.4379 15.8754 15.3756C14.9377 16.3132 13.6659 16.84 12.3398 16.84C11.0138 16.84 9.74199 16.3132 8.80431 15.3756C7.86663 14.4379 7.33984 13.1661 7.33984 11.84C7.33984 10.5139 7.86663 9.24218 8.80431 8.30449C9.74199 7.36681 11.0138 6.84003 12.3398 6.84003C13.6659 6.84003 14.9377 7.36681 15.8754 8.30449C16.8131 9.24218 17.3398 10.5139 17.3398 11.84ZM14.8398 11.84C14.8398 12.5031 14.5764 13.139 14.1076 13.6078C13.6388 14.0766 13.0029 14.34 12.3398 14.34C11.6768 14.34 11.0409 14.0766 10.5721 13.6078C10.1032 13.139 9.83984 12.5031 9.83984 11.84C9.83984 11.177 10.1032 10.5411 10.5721 10.0723C11.0409 9.60342 11.6768 9.34003 12.3398 9.34003C13.0029 9.34003 13.6388 9.60342 14.1076 10.0723C14.5764 10.5411 14.8398 11.177 14.8398 11.84Z" fill="#581D35" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24251 19.6475C2.63105 18.1132 1.51076 16.1355 1.0233 13.9645C0.535837 11.7935 0.703098 9.52674 1.50393 7.45081C2.30477 5.37487 3.7032 3.58303 5.5224 2.30188C7.3416 1.02073 9.49985 0.307803 11.7242 0.25326C13.9486 0.198717 16.1392 0.805006 18.019 1.99546C19.8988 3.18591 21.3834 4.90705 22.285 6.94124C23.1866 8.97543 23.4648 11.2313 23.0843 13.4236C22.7038 15.6159 21.6818 17.6461 20.1475 19.2575L12.39 27.405L4.24251 19.6475ZM18.3375 17.5338L12.3038 23.8713L5.96626 17.8375C4.71296 16.6442 3.84167 15.106 3.46256 13.4175C3.08345 11.729 3.21355 9.96594 3.8364 8.35136C4.45925 6.73679 5.54688 5.34316 6.96176 4.3467C8.37664 3.35025 10.0552 2.79572 11.7852 2.75325C13.5153 2.71077 15.219 3.18225 16.6811 4.10806C18.1432 5.03388 19.2979 6.37245 19.9993 7.95452C20.7006 9.53658 20.917 11.2911 20.6213 12.9962C20.3255 14.7013 19.5307 16.2803 18.3375 17.5338Z" fill="#581D35" />
            </svg>,
            <svg key="7" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7.25H18M8 12.25H15.5M20.5 1C21.4946 1 22.4484 1.39509 23.1517 2.09835C23.8549 2.80161 24.25 3.75544 24.25 4.75V14.75C24.25 15.7446 23.8549 16.6984 23.1517 17.4016C22.4484 18.1049 21.4946 18.5 20.5 18.5H14.25L8 22.25V18.5H5.5C4.50544 18.5 3.55161 18.1049 2.84835 17.4016C2.14509 16.6984 1.75 15.7446 1.75 14.75V4.75C1.75 3.75544 2.14509 2.80161 2.84835 2.09835C3.55161 1.39509 4.50544 1 5.5 1H20.5Z" stroke="#581D35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            <svg key="8" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3125 7.43749H19.2016C19.2473 7.39882 19.2941 7.36132 19.3387 7.3203C19.6946 7.0041 19.9814 6.61787 20.1812 6.18575C20.3811 5.75364 20.4896 5.28494 20.5 4.80897C20.5154 4.28828 20.4242 3.76993 20.232 3.28575C20.0398 2.80158 19.7507 2.36179 19.3824 1.99339C19.0141 1.62498 18.5744 1.33574 18.0903 1.14342C17.6062 0.951095 17.0879 0.859749 16.5672 0.874988C16.091 0.885244 15.6221 0.993681 15.1898 1.19351C14.7574 1.39334 14.371 1.68026 14.0547 2.03632C13.6171 2.54368 13.2612 3.11618 13 3.73319C12.7388 3.11618 12.3829 2.54368 11.9453 2.03632C11.629 1.68026 11.2426 1.39334 10.8102 1.19351C10.3779 0.993681 9.90898 0.885244 9.43281 0.874988C8.91211 0.859749 8.39379 0.951095 7.90967 1.14342C7.42555 1.33574 6.98585 1.62498 6.61756 1.99339C6.24926 2.36179 5.96015 2.80158 5.76798 3.28575C5.5758 3.76993 5.48461 4.28828 5.5 4.80897C5.51042 5.28494 5.61893 5.75364 5.81876 6.18575C6.01858 6.61787 6.30542 7.0041 6.66133 7.3203C6.70586 7.35897 6.75273 7.39647 6.79844 7.43749H2.6875C2.19022 7.43749 1.71331 7.63503 1.36167 7.98666C1.01004 8.33829 0.8125 8.81521 0.8125 9.31249V13.0625C0.8125 13.5598 1.01004 14.0367 1.36167 14.3883C1.71331 14.7399 2.19022 14.9375 2.6875 14.9375V22.4375C2.6875 22.9348 2.88504 23.4117 3.23667 23.7633C3.58831 24.1149 4.06522 24.3125 4.5625 24.3125H21.4375C21.9348 24.3125 22.4117 24.1149 22.7633 23.7633C23.115 23.4117 23.3125 22.9348 23.3125 22.4375V14.9375C23.8098 14.9375 24.2867 14.7399 24.6383 14.3883C24.99 14.0367 25.1875 13.5598 25.1875 13.0625V9.31249C25.1875 8.81521 24.99 8.33829 24.6383 7.98666C24.2867 7.63503 23.8098 7.43749 23.3125 7.43749ZM15.4609 3.2785C15.6094 3.11464 15.7902 2.98321 15.9918 2.89247C16.1935 2.80172 16.4117 2.75362 16.6328 2.75116H16.6902C16.9494 2.75278 17.2057 2.80612 17.444 2.90804C17.6823 3.00997 17.8978 3.15843 18.078 3.34473C18.2582 3.53104 18.3994 3.75143 18.4933 3.993C18.5873 4.23457 18.632 4.49246 18.625 4.75155C18.6225 4.97267 18.5744 5.1909 18.4837 5.39255C18.3929 5.59421 18.2615 5.77494 18.0977 5.92343C16.9855 6.9078 15.1398 7.25468 13.9961 7.37655C14.1367 6.13554 14.5234 4.33202 15.4609 3.2785ZM7.95039 3.32069C8.31361 2.95752 8.80551 2.75241 9.31914 2.74999H9.37656C9.59768 2.75244 9.81591 2.80055 10.0176 2.8913C10.2192 2.98204 10.4 3.11347 10.5484 3.27733C11.5316 4.38827 11.8785 6.23046 12.0004 7.36952C10.8613 7.25233 9.01914 6.90077 7.9082 5.91757C7.74434 5.76908 7.61291 5.58835 7.52217 5.38669C7.43142 5.18504 7.38332 4.96681 7.38086 4.74569C7.37359 4.48229 7.41991 4.22017 7.51701 3.97521C7.6141 3.73026 7.75995 3.50758 7.9457 3.32069H7.95039ZM2.6875 9.31249H12.0625V13.0625H2.6875V9.31249ZM4.5625 14.9375H12.0625V22.4375H4.5625V14.9375ZM21.4375 22.4375H13.9375V14.9375H21.4375V22.4375ZM23.3125 13.0625H13.9375V9.31249H23.3125V13.0625Z" fill="#581D35" />
            </svg>,
            <svg key="9" width="19" height="27" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9375 5.0625V27H0.375V5.28662L15.5625 0.540527V5.0625H18.9375ZM13.875 2.83447L6.74268 5.0625H13.875V2.83447ZM17.25 6.75H2.0625V25.3125H17.25V6.75ZM9.65625 11.8916C9.98145 11.5928 10.3462 11.3643 10.7505 11.2061C11.1548 11.0479 11.5854 10.9688 12.0425 10.9688C12.5259 10.9688 12.9829 11.061 13.4136 11.2456C13.8442 11.4302 14.2178 11.6807 14.5342 11.9971C14.8506 12.3135 15.1011 12.687 15.2856 13.1177C15.4702 13.5483 15.5625 14.0098 15.5625 14.502C15.5625 14.9678 15.4746 15.416 15.2988 15.8467C15.123 16.2773 14.8682 16.6597 14.5342 16.9937L9.65625 21.8584L4.77832 16.9937C4.44434 16.6597 4.18945 16.2773 4.01367 15.8467C3.83789 15.416 3.75 14.9678 3.75 14.502C3.75 14.0098 3.84229 13.5483 4.02686 13.1177C4.21143 12.687 4.46191 12.3135 4.77832 11.9971C5.09473 11.6807 5.46387 11.4302 5.88574 11.2456C6.30762 11.061 6.76904 10.9688 7.27002 10.9688C7.71826 10.9688 8.14453 11.0479 8.54883 11.2061C8.95312 11.3643 9.32227 11.5928 9.65625 11.8916ZM13.3345 15.7939C13.6948 15.4336 13.875 15.0029 13.875 14.502C13.875 14.2471 13.8267 14.0098 13.73 13.79C13.6333 13.5703 13.5015 13.3726 13.3345 13.1968C13.1675 13.021 12.9741 12.8892 12.7544 12.8013C12.5347 12.7134 12.293 12.665 12.0293 12.6562C11.5283 12.6562 11.0977 12.8364 10.7373 13.1968L9.65625 14.2778L8.5752 13.1968C8.21484 12.8364 7.78418 12.6562 7.2832 12.6562C7.02832 12.6562 6.79102 12.7046 6.57129 12.8013C6.35156 12.8979 6.15381 13.0298 5.97803 13.1968C5.80225 13.3638 5.67041 13.5571 5.58252 13.7769C5.49463 13.9966 5.44629 14.2383 5.4375 14.502C5.4375 15.0029 5.61768 15.4336 5.97803 15.7939L9.65625 19.4722L13.3345 15.7939Z" fill="#581D35" />
            </svg>
        ];

    const label = [
        "Home",
        "Qur'an",
        "Mempelai",
        "Acara",
        "Maps",
        "RSVP",
        "Gift",
        "Thanks"
    ]

    return (
        <>
            {navbar && (
                <div className="navbar" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <div className="navbar-item">
                        {svgItems.map((item, index) => (
                            <section key={item} className="mx-2" onClick={() => setActiveIndex(index)}>
                                <p>{item}</p>
                                <p>{label[index]}</p>
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
