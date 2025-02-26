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
		size: 'sm',
		color: 'primary',
		children: '버튼',
	}
}
