
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FF6F3C',
					foreground: '#FFF5E1',
					50: '#FFF5E1',
					100: '#FFE4CC',
					200: '#FFCA99',
					300: '#FFB066',
					400: '#FF9633',
					500: '#FF6F3C',
					600: '#E55A2B',
					700: '#CC451A',
					800: '#B23009',
					900: '#991B00'
				},
				secondary: {
					DEFAULT: '#FFF5E1',
					foreground: '#FF6F3C'
				},
				accent: {
					DEFAULT: '#FFE4CC',
					foreground: '#CC451A'
				},
				cream: {
					50: '#FFFCF7',
					100: '#FFF8F0',
					200: '#FFF5E1',
					300: '#FFF0D1',
					400: '#FFEBC2',
					500: '#FFE6B3',
					600: '#E6CFA2',
					700: '#CCB891',
					800: '#B3A180',
					900: '#998A6F'
				},
				orange: {
					50: '#FFF7F5',
					100: '#FFEFEB',
					200: '#FFDFCC',
					300: '#FFCFAD',
					400: '#FFBF8E',
					500: '#FF6F3C',
					600: '#E55A2B',
					700: '#CC451A',
					800: '#B23009',
					900: '#991B00'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#FFF8F0',
					foreground: '#998A6F'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#FFFCF7',
					foreground: '#CC451A'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'bounce-gentle': 'bounce-gentle 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
