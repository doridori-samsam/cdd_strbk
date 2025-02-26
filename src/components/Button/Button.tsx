import React, {ButtonHTMLAttributes, forwardRef} from 'react';
import classNames from 'classnames/bind';
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	theme?: 'outlined' | 'contained';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit';
	color?: 'primary' | 'secondary' | 'info' | 'success' | 'danger';
	disabled?: boolean;
	rounded?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>((props,ref) => {
	const { children, theme, size, color, disabled, rounded, ...rest } = props;
	const btnClass = classNames.bind(styles)('btn', theme || 'outlined', size || 'sm', color || 'primary', rounded ? 'round' : null);

	return (
		<button
			className={btnClass}
			ref={ref}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
});

export default Button;
