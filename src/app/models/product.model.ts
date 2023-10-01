interface sizeAndQuantity {
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
    xxl?: number;
    xxxl?: number;
    universal?: number
}

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description?: string;
    image?: string;
    sizeAndQuantity: sizeAndQuantity[];
}