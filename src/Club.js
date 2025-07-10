import React from "react";

const Club = (props) => {
  return (
    <div>
      {props.clubDict.map((element) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25vw" // Responsive width
            height="auto" // Maintain aspect ratio
            viewBox="0 0 356 452" // Defines internal coordinate system
            fill="none"
          >
            <g filter="url(#a)">
              <path
                fill="#1E1E1E"
                d="M16 16c0-8.837 7.163-16 16-16h292c8.837 0 16 7.163 16 16v388c0 8.837-7.163 16-16 16H32c-8.837 0-16-7.163-16-16z"
              />
              <path
                fill="#fff"
                d="M178 27c77.32 0 140 47.458 140 106v152H38V133c0-58.542 62.68-106 140-106"
              />
              <path
                fill="#E8E8E8"
                d="M16 211h324v193c0 8.837-7.163 16-16 16H32c-8.837 0-16-7.163-16-16z"
              />
              <path fill="#F4B678" d="m177 229 30.311-30h-60.622z" />
              {/* ...ellipses unchanged... */}
            </g>

            {/* feet? */}
            <g fill="#F4B678">
              <ellipse cx="115" cy="406.499" rx="18" ry="9.5" />
              <ellipse
                cx="100.846"
                cy="397.02"
                rx="15.898"
                ry="9.5"
                transform="rotate(72.476 100.846 397.02)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="scale(-1 1)rotate(72.476 -320.846 104.513)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="matrix(0 -1 -1 0 124 402.795)"
              />
              <ellipse cx="115" cy="406.499" rx="18" ry="9.5" />
              <ellipse
                cx="100.846"
                cy="397.02"
                rx="15.898"
                ry="9.5"
                transform="rotate(72.476 100.846 397.02)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="scale(-1 1)rotate(72.476 -320.846 104.513)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="matrix(0 -1 -1 0 124 402.795)"
              />
              <ellipse cx="239" cy="405.499" rx="18" ry="9.5" />
              <ellipse
                cx="224.846"
                cy="396.02"
                rx="15.898"
                ry="9.5"
                transform="rotate(72.476 224.846 396.02)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="scale(-1 1)rotate(72.476 -382.164 19.418)"
              />
              <ellipse
                cx="15.898"
                cy="9.5"
                rx="15.898"
                ry="9.5"
                transform="matrix(0 -1 -1 0 248 401.795)"
              />
            </g>

            <image
              href={`${element.image}`}
              x="50%"
              y="30%"
              width="300"
              height="300"
              transform="translate(-150, -150)"
            />

            {/* Bullet Texts - Centered around 50% */}
            <text
              x="50%"
              y="56%"
              fontSize={`${element.size}`}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              fontWeight="bold"
              style={{ fill: `${element.color}` }}
            >
              {element.title}
            </text>
            <text
              x="12%"
              y="64%"
              fontSize="24"
              dominantBaseline="middle"
              fill="black"
              fontWeight="600"
            >
              • {element.role}
            </text>
            <text
              x="12%"
              y="70%"
              fontSize="24"
              dominantBaseline="middle"
              fill="black"
              fontWeight="600"
            >
              •
              {element.desc.split("\n").map((line, index) => (
                <tspan
                  key={index}
                  x="17%" // reset x for each line
                  dy={index === 0 ? "0em" : "1.1em"} // vertical offset
                >
                  {line}
                </tspan>
              ))}
            </text>

            <defs>
              <filter
                id="a"
                width="356"
                height="452"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="16" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_299_7"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_299_7"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        );
      })}
    </div>
  );
};

export default Club;
