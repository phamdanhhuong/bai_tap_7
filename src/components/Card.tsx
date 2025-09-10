import React from 'react';

interface CardProps {
    title: string;
    content: React.ReactNode;
    actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, actions }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-content">
                {content}
            </div>
            {actions && <div className="card-actions">{actions}</div>}
        </div>
    );
};

export default Card;