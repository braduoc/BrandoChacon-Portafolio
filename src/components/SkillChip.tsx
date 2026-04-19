import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SkillChipProps {
    skill: { name: string; type: string };
    index: number;
}

const SkillChip: React.FC<SkillChipProps> = ({ skill, index }) => {
    const chipRef = useIntersectionObserver();

    const renderIcon = (type: string) => {
        const s = {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "var(--accent)",
            strokeWidth: "2",
            strokeLinecap: "round" as const,
            strokeLinejoin: "round" as const
        };

        switch (type) {
            case 'JavaScript':
                return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="16 18 22 12 16 6" />
  <polyline points="8 6 2 12 8 18" />
</svg>
            case 'TypeScript':
                return <svg {...s}><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>;

            case 'React':
                return (
                    <svg {...s}>
                        <circle cx="12" cy="12" r="2" />
                        <path d="M12 21.933c-6.107 0-11.057-4.446-11.057-9.933s4.95-9.933 11.057-9.933 11.057 4.446 11.057 9.933-4.95 9.933-11.057 9.933z" />
                        <path d="M12 21.933c-6.107 0-11.057-4.446-11.057-9.933s4.95-9.933 11.057-9.933 11.057 4.446 11.057 9.933-4.95 9.933-11.057 9.933z" transform="rotate(60 12 12)" />
                        <path d="M12 21.933c-6.107 0-11.057-4.446-11.057-9.933s4.95-9.933 11.057-9.933 11.057 4.446 11.057 9.933-4.95 9.933-11.057 9.933z" transform="rotate(120 12 12)" />
                    </svg>
                );

            case 'Next.js':
                return <svg {...s}><path d="m3 21 9-18 9 18H3z" /></svg>;

            case 'Node.js':
                return <svg {...s}><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>;

            case 'Tailwind CSS':
                return <svg {...s}><path d="M17.7 7.7A2.5 2.5 0 1 1 20 6l-3 2h-3l-2-3" /><path d="M9.6 4.6A2 2 0 1 1 11 3L8 5H5l-2-3" /><path d="M12.6 19.4A2 2 0 1 0 14 21l-3-2H8l-2 3" /><path d="M4.3 16.3A2.5 2.5 0 1 0 2 18l3-2h3l2 3" /></svg>;

            case 'PostgreSQL':
            case 'MongoDB':
                return <svg {...s}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>;

            case 'AWS':
                return <svg {...s}><path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26A8 8 0 1 0 3 16.3" /><path d="M16 19h1.5" /></svg>;

            case 'Docker':
                return <svg {...s}><path d="M22 7.7c0-1.1-.8-2-1.8-2h-3.4c-1.1 0-1.8.9-1.8 2s.7 2 1.8 2h3.4c1 0 1.8-.9 1.8-2Z" /><path d="M10 7.7c0-1.1-.8-2-1.8-2H4.8c-1.1 0-1.8.9-1.8 2s.7 2 1.8 2h3.4c1 0 1.8-.9 1.8-2Z" /><path d="M2 12.4h20" /><path d="M22 17.1c0 1.1-.8 2-1.8 2H3.8c-1.1 0-1.8-.9-1.8-2V12h20v5.1Z" /></svg>;

            case 'Git':
                return <svg {...s}><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 9v12" /><path d="M18 9v6" /><path d="M9 6h7a2 2 0 0 1 2 2v1" /></svg>;

            case 'Figma':
                return <svg {...s}><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>;

            default:
                return <svg {...s}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
        }
    };


    return (
        <div
            ref={chipRef}
            className="skill-chip rounded-lg p-4 flex items-center gap-3 scroll-fade-left border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/[0.08]"
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {renderIcon(skill.type)}
            <span className="text-sm font-medium text-slate-200">{skill.name}</span>
        </div>
    );
};

export default SkillChip;