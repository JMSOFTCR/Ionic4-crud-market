export class Products {
    id?: string;
    category_id: number;
    codigo: string;
    category_name: string;
    name: string;
    stock: number;
    description: string; 
    image_url: string;
    condicion: string;
    precio_costo: number;
    precio_venta: number;
    profit: number;
    other: number;
    idwarehouse: number;
    created_at: Date;
}
