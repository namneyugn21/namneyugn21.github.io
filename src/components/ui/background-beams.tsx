import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = React.memo(
    ({ className }: { className?: string }) => {
        const initialViewBox = window.innerWidth < 400 ? "80 -450 400 900" : "0 0 820 820";
        const [viewBox, setViewBox] = React.useState(initialViewBox);
        React.useEffect(() => {
            const updateViewBox = () => {
                if (window.innerWidth < 400) {
                    setViewBox("80 -450 400 900");
                } else {
                    setViewBox("0 0 820 820");
                }
            };
            window.addEventListener("resize", updateViewBox);
            return () => {
                window.removeEventListener("resize", updateViewBox);
            };
        }, []);
        // Number of beam paths
        const paths = [
            "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
            "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
            "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
            "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
            "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
            "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
            "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
            "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
            "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
            "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
            "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
            "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
            "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
            "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
            "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
            "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
        ];
    return (
        <div>
            <svg
            className="beam-track-pad z-0 h-full w-full pointer-events-none absolute"
            width="100%"
            height="100%"
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
                {/* Pre-defined track path */}
                <path d="M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563" 
                stroke="white" 
                strokeOpacity="0.1" 
                strokeWidth="0.5">
                </path>
                {paths.map((path, index) => (
                <motion.path
                    key={`path-` + index}
                    d={path}
                    stroke={`url(#linearGradient-${index})`}
                    strokeOpacity="0.5"
                    strokeWidth="0.5"
                ></motion.path>
                ))}
                <defs>
                    {paths.map((path, index) => (
                        <motion.linearGradient
                        id={`linearGradient-${index}`}
                        key={`gradient-${index}`}
                        initial={{
                            x1: "0%",
                            x2: "0%",
                            y1: "0%",
                            y2: "0%",
                        }}
                        animate={{
                            // The length of the beam
                            x1: ["0%", "100%"],
                            x2: ["0%", "90%"],
                            y1: ["0%", "100%"],
                            y2: ["0%", `${93 + Math.random() * 8}%`],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        >
                        <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                        <stop stopColor="#18CCFC"></stop>
                        <stop offset="32.5%" stopColor="#6344F5"></stop>
                        <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    ))}

                    <radialGradient
                        id="paint0_radial_242_278"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
                    >
                        <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
                        <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
                        <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
        );
    }
);

BackgroundBeams.displayName = "BackgroundBeams";
