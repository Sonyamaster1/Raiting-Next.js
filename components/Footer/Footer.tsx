import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.container)}>
      <div>
        OwlTop &copy; 2020 - 20{format(new Date(), 'yy')} Все права защищены
      </div>
      <a className={styles.a} href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a className={styles.a} href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
