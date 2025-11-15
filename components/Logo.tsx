import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Logo grid - 3x3 squares */}
      <div className="grid grid-cols-3 gap-1 w-10 h-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i}
            className="bg-primary-dark group-hover:bg-primary-blue transition-colors duration-200"
          />
        ))}
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-primary-dark text-xl font-heading font-bold leading-tight">
          Callahan
        </span>
        <span className="text-primary-dark text-xs font-body uppercase tracking-wide">
          SOFTWARE CONSULTING
        </span>
      </div>
    </Link>
  )
}
