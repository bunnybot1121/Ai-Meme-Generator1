import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50',
      secondary: 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50',
      accent: 'btn-gradient text-white shadow-lg',
      outline: 'border-2 border-orange-600 text-orange-400 hover:bg-orange-600/10'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
