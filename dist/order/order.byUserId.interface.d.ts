import { OrderResponseData } from "./order.response.interface";
export declare type OrderByUserId = Omit<OrderResponseData, "userId">;
export interface OrderByUserIdResponse {
    userId: string;
    orderInfo: OrderByUserId[];
}
