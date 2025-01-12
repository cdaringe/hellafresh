import { AppPluggable } from '../app-meta/mod.ts'

export const ui: AppPluggable['browser'] =  () => {
  return (
    <div className={tw('w-48 h-48 flex items-center justify-center')}>
      <svg viewBox="0 0 100 100" className={tw('w-full h-full')}>
        {/* Main star shape */}
        <path
          d="M50 10 L61 39 L92 40 L67 59 L75 90 L50 73 L25 90 L33 59 L8 40 L39 39 Z"
          className={tw('fill-yellow-400')}
        />

        {/* Shining rays */}
        <g className={tw('animate-[spin_3s_linear_infinite]')}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <line
              key={index}
              x1="50"
              y1="50"
              x2="95"
              y2="50"
              className={tw('stroke-yellow-300 stroke-2')}
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>

        {/* Center glow */}
        <circle
          cx="50"
          cy="50"
          r="15"
          className={tw('fill-yellow-200 animate-[pulse_2s_ease-in-out_infinite]')}
        />
      </svg>
    </div>
  );
};
