import React from 'react';
import cn from 'classnames';
import { Icon } from '../Icon';
import styles from './LikeButton.module.scss';

interface Props {
  isSelected: boolean;
  onClick: () => void;
  size: number;
}

export const LikeButton: React.FC<Props> = ({ isSelected, onClick, size }) => {
  return (
    <button
      type="button"
      className={cn(styles.like_button, {
        [styles['like_button--selected']]: isSelected,
      })}
      onClick={onClick}
      aria-label="add to favourites"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <Icon
        color={isSelected ? 'Red' : 'Main'}
        type={isSelected ? 'HeartFilled' : 'Heart'}
      />
    </button>
  );
};
