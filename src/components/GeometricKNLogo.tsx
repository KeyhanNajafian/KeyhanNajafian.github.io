import React from 'react';

interface GeometricKNLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const GeometricKNLogo: React.FC<GeometricKNLogoProps> = ({
  className = "w-12 h-12",
  size = "100%",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      fill="none"
      className={className}
      role="img"
      aria-label="Dr. Keyhan Najafian - Geometric KN Monogram"
      {...props}
    >
      <defs>
        {/* Central Backbone Gradient */}
        <linearGradient id="backboneGrad" x1="160" y1="80" x2="160" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="50%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>

        {/* K Upper Diagonal Gradient */}
        <linearGradient id="kUpperDiagGrad" x1="160" y1="250" x2="290" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="60%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        {/* K Lower Diagonal Gradient */}
        <linearGradient id="kLowerDiagGrad" x1="160" y1="250" x2="290" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* N Diagonal Gradient */}
        <linearGradient id="nDiagonalGrad" x1="260" y1="90" x2="380" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="35%" stopColor="#047857" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* N Right Stem Gradient */}
        <linearGradient id="nRightStemGrad" x1="380" y1="90" x2="380" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="60%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      <g id="geometric-kn-monogram" strokeLinecap="round" strokeLinejoin="round">
        {/* 1. Interlocked Backbone Spine */}
        <path d="M 160 90 L 160 410" stroke="url(#backboneGrad)" strokeWidth="26" />

        {/* 2. Geometric K Diagonals */}
        <path d="M 160 250 L 285 125" stroke="url(#kUpperDiagGrad)" strokeWidth="24" />
        <path d="M 160 250 L 270 360" stroke="url(#kLowerDiagGrad)" strokeWidth="24" />

        {/* 3. N Left Pillar & Interlock Link */}
        <path
          d="M 160 100 L 260 100 L 260 410"
          stroke="#0F172A"
          strokeWidth="18"
          fill="none"
          strokeLinejoin="miter"
          strokeMiterlimit="6"
        />

        {/* 4. Sharp N Downward Diagonal Vector */}
        <path d="M 260 100 L 380 400" stroke="url(#nDiagonalGrad)" strokeWidth="24" />

        {/* 5. N Right Vertical Stem */}
        <path d="M 380 90 L 380 410" stroke="url(#nRightStemGrad)" strokeWidth="24" />

        {/* 6. Neural Network Vertex Nodes */}
        {/* K Spine Vertices */}
        <circle cx="160" cy="90" r="14" fill="#0F172A" />
        <circle cx="160" cy="90" r="7" fill="#10B981" />
        <circle cx="160" cy="410" r="14" fill="#065F46" />
        <circle cx="160" cy="410" r="7" fill="#34D399" />

        {/* K Center Nexus Node */}
        <circle cx="160" cy="250" r="16" fill="#047857" stroke="#0F172A" strokeWidth="4" />
        <circle cx="160" cy="250" r="6" fill="#FFFFFF" />

        {/* K Diagonal Tips */}
        <circle cx="285" cy="125" r="13" fill="#10B981" />
        <circle cx="285" cy="125" r="6" fill="#047857" />
        <circle cx="270" cy="360" r="13" fill="#0369A1" />
        <circle cx="270" cy="360" r="6" fill="#38BDF8" />

        {/* N Top Apex Vertex */}
        <circle cx="260" cy="100" r="15" fill="#0F172A" stroke="#047857" strokeWidth="3" />
        <circle cx="260" cy="100" r="6" fill="#10B981" />

        {/* N Bottom Diagonal-to-Stem Nexus */}
        <circle cx="380" cy="400" r="15" fill="#0369A1" stroke="#0F172A" strokeWidth="3" />
        <circle cx="380" cy="400" r="6" fill="#38BDF8" />

        {/* N Top Right Terminal */}
        <circle cx="380" cy="90" r="14" fill="#0284C7" />
        <circle cx="380" cy="90" r="6" fill="#E0F2FE" />
      </g>
    </svg>
  );
};

export default GeometricKNLogo;
