import Button from './Button';



export default {
	component: Button,
	title: 'Button',
	tags: ['Button'],
	args: {},
	parameters: {
		backgrounds: {
			default: 'Gray',
		}
	}
};

export const Default = {
	args: {
		theme: 'outlined',
		size: 'md',
		color: 'primary',
		children: '버튼',
	}
}

export const Rounded ={
	args: {
		theme: 'contained',
		size: 'md',
		color: 'info',
		children: '버튼',
		rounded: true
	}
}
