import React from 'react';

export const SculptedLiquidKNLogo: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "w-14 h-14",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="100%"
      height="100%"
      fill="none"
      className={className}
      role="img"
      aria-label="Dr. Keyhan Najafian - Master Liquid KN Monogram"
      {...props}
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F6FAF8" />
          <stop offset="75%" stopColor="#EDF5F2" />
          <stop offset="100%" stopColor="#E2EDE8" />
        </radialGradient>

        <linearGradient id="squircleBorder" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#A7F3D0" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#7DD3FC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="spineGrad" x1="120" y1="90" x2="160" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="20%" stopColor="#047857" />
          <stop offset="55%" stopColor="#059669" />
          <stop offset="80%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <linearGradient id="kUpperGrad" x1="140" y1="260" x2="275" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="35%" stopColor="#10B981" />
          <stop offset="70%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        <linearGradient id="meltedLoopGrad" x1="145" y1="255" x2="365" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="25%" stopColor="#10B981" />
          <stop offset="48%" stopColor="#06B6D4" />
          <stop offset="72%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        <linearGradient id="nLegGrad" x1="365" y1="150" x2="385" y2="415" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="35%" stopColor="#0369A1" />
          <stop offset="75%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="spineHighlight" x1="120" y1="100" x2="160" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="30%" stopColor="#A7F3D0" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="loopHighlight" x1="160" y1="270" x2="350" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.85" />
        </linearGradient>

        <filter id="liquidShadow" x="-20%" y="-20%" width="145%" height="145%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#047857" floodOpacity="0.22" />
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0284C7" floodOpacity="0.28" />
        </filter>

        <filter id="softAura" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="24" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Container Surface: Sculpted Frosted Glass Squircle */}
      <rect x="24" y="24" width="464" height="464" rx="124" fill="url(#bgGlow)" />
      <rect x="24" y="24" width="464" height="464" rx="124" stroke="url(#squircleBorder)" strokeWidth="3" />

      {/* Dynamic Chromatic Aura */}
      <g opacity="0.38" filter="url(#softAura)">
        <circle cx="160" cy="220" r="70" fill="#10B981" />
        <circle cx="310" cy="340" r="85" fill="#38BDF8" />
        <circle cx="360" cy="210" r="60" fill="#0284C7" />
      </g>

      {/* Harmonic Field Waveforms */}
      <path d="M72 380 C 140 430, 240 435, 340 390 C 390 368, 420 330, 440 280" stroke="#047857" strokeWidth="1.5" strokeDasharray="6 8" strokeOpacity="0.18" fill="none"/>
      <path d="M80 140 C 150 70, 310 65, 400 130 C 435 155, 445 190, 440 230" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="5 7" strokeOpacity="0.18" fill="none"/>

      {/* Master Monogram Sculpture */}
      <g filter="url(#liquidShadow)">
        {/* 1. K-Spine S-Curve */}
        <path d="M 148 102 C 152 140, 134 195, 136 250 C 138 305, 156 360, 138 410 C 130 428, 114 425, 116 405 C 122 360, 110 305, 112 250 C 114 195, 132 140, 128 102 C 126 84, 146 84, 148 102 Z" fill="url(#spineGrad)" />
        <path d="M 139 110 C 142 148, 126 200, 128 250 C 130 300, 145 350, 132 396" stroke="url(#spineHighlight)" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* 2. K-Upper Crest */}
        <path d="M 132 255 C 160 230, 205 185, 252 118 C 260 106, 274 114, 268 126 C 222 205, 175 252, 142 278 C 134 284, 126 270, 132 255 Z" fill="url(#kUpperGrad)" />
        <path d="M 145 256 C 180 220, 222 172, 258 122" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.85" fill="none" />

        {/* 3. Melted Pendulum Valley & N-Arch */}
        <path d="M 134 266 C 175 315, 230 398, 298 402 C 338 404, 355 365, 357 305 C 359 235, 355 165, 368 142 C 376 128, 394 135, 392 155 C 382 195, 382 270, 378 325 C 372 388, 340 426, 290 422 C 214 416, 155 328, 120 274 C 112 262, 126 254, 134 266 Z" fill="url(#meltedLoopGrad)" />
        <path d="M 134 270 C 178 322, 236 404, 296 408 C 338 410, 358 368, 360 300 C 362 225, 360 160, 372 144" stroke="url(#loopHighlight)" strokeWidth="6.5" strokeLinecap="round" fill="none" />

        {/* 4. N-Right Waterfall Cascade */}
        <path d="M 372 144 C 388 175, 386 260, 388 335 C 390 380, 396 415, 380 428 C 368 438, 356 422, 364 402 C 374 375, 368 310, 366 245 C 364 195, 362 160, 372 144 Z" fill="url(#nLegGrad)" />
        <path d="M 374 158 C 378 220, 376 300, 378 385" stroke="#93C5FD" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.8" fill="none" />
      </g>

      {/* Luminous Gemstone Terminal Nodes */}
      <circle cx="138" cy="98" r="14" fill="#047857" />
      <circle cx="135" cy="95" r="9" fill="#10B981" />
      <circle cx="132" cy="92" r="4.5" fill="#A7F3D0" />
      <circle cx="130" cy="90" r="2" fill="#FFFFFF" />

      <circle cx="264" cy="116" r="13" fill="#059669" />
      <circle cx="261" cy="113" r="8" fill="#34D399" />
      <circle cx="258" cy="110" r="4" fill="#E0F2FE" />
      <circle cx="256" cy="108" r="1.8" fill="#FFFFFF" />

      <circle cx="302" cy="406" r="12" fill="#0284C7" />
      <circle cx="300" cy="404" r="7.5" fill="#38BDF8" />
      <circle cx="297" cy="401" r="3.5" fill="#F0FDFA" />

      <circle cx="376" cy="144" r="13.5" fill="#0369A1" />
      <circle cx="373" cy="141" r="8.5" fill="#38BDF8" />
      <circle cx="370" cy="138" r="4" fill="#FFFFFF" />

      <circle cx="376" cy="414" r="11" fill="#0F172A" />
      <circle cx="374" cy="412" r="6.5" fill="#1E40AF" />
      <circle cx="372" cy="410" r="3" fill="#60A5FA" />

      <circle cx="126" cy="412" r="11" fill="#064E3B" />
      <circle cx="124" cy="410" r="6.5" fill="#059669" />
      <circle cx="122" cy="408" r="3" fill="#6EE7B7" />

      {/* Caustic Specular Gleam Stars */}
      <g transform="translate(262, 114) scale(0.7)">
        <path d="M0 -14 Q 0 0 -14 0 Q 0 0 0 14 Q 0 0 14 0 Q 0 0 0 -14" fill="#FFFFFF" />
      </g>
      <g transform="translate(374, 142) scale(0.65)">
        <path d="M0 -14 Q 0 0 -14 0 Q 0 0 0 14 Q 0 0 14 0 Q 0 0 0 -14" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export default SculptedLiquidKNLogo;
