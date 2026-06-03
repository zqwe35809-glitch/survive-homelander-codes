interface InlineAlertProps {
  message: string;
  linkText: string;
  linkHref: string;
  suffix: string;
}

export function InlineAlert({ message, linkText, linkHref, suffix }: InlineAlertProps) {
  return (
    <div 
      role="note" 
      className="flex h-9 items-center gap-2 bg-rose-950/20 border-b border-rose-900/30 px-4 text-[11px] font-medium text-rose-300 sm:px-6 sm:text-xs"
    >
      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-[10px] text-rose-400 font-bold">
        !
      </span>
      <p className="truncate">
        {message}{" "}
        <a 
          href={linkHref} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-vought-red hover:underline font-semibold"
        >
          {linkText}
        </a>{" "}
        {suffix}
      </p>
    </div>
  );
}
