import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          ##path is the source of the image for the
          <path d="M 29.2735 30.544 L 23.9138 20.347 C 26.8925 18.9494 28.7135 15.999 28.7135 12.4792 C 28.7135 7.0255 24.6903 3.4963 18.46 3.4963 L 7.2513 3.4963 C 6.9031 3.4963 6.6161 3.7833 6.6161 4.1315 L 6.6161 30.8405 C 6.6161 31.1887 6.9031 31.4757 7.2513 31.4757 L 11.6699 31.4757 C 12.0181 31.4757 12.3004 31.1887 12.3004 30.8405 L 12.3004 21.3022 L 17.9848 21.3022 L 23.1562 31.1369 C 23.2645 31.344 23.4809 31.4757 23.7115 31.4757 L 28.7135 31.4757 C 28.9347 31.4757 29.1417 31.3581 29.2547 31.1699 C 29.3676 30.9769 29.377 30.7416 29.2735 30.544 Z M 17.9989 16.8507 L 12.3004 16.8507 L 12.3004 7.9477 L 17.8813 7.9477 C 21.0811 7.9477 23.0339 9.6465 23.0339 12.4087 C 23.0339 15.2273 21.1987 16.8507 17.9989 16.8507 Z M 17.9989 16.8507" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
