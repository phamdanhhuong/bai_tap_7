export interface CartItemType {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartType {
    items: CartItemType[];
    totalAmount: number;
}

export interface InputTextProps {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

export interface ModalProps {
    isVisible: boolean;
    content: React.ReactNode;
    onClose: () => void;
}

export interface CardProps {
    title: string;
    content: React.ReactNode;
    actions?: React.ReactNode;
}