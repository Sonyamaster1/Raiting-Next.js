import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 's',
  className,
  children,
  color = 'green',
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.primary]: color == 'primary',
        [styles.green]: color == 'green',
        [styles.red]: color == 'red',
        [styles.gray]: color == 'gray',
      })}
      {...props}
    >
      {href ? <a>{children}</a> : <>{children}</>}
    </div>
  );
};
