import { DescriptiveError, ErrorResponse } from "src/common/errorResponse";
import { SuccessResponse } from "src/common/successResponse";
export interface deleteCartRequest {
    cartId: string;
}
export declare const enum Message {
    REMOVE_CART_SUCCESSFULLY = "REMOVE_CART_SUCCESSFULLY"
}
export interface DeleteMessage {
    message: Message;
}
export interface deleteCartSuccessResponse extends SuccessResponse {
    code: number;
    data: DeleteMessage;
}
export interface deleteCartErrorResponse extends ErrorResponse {
    code?: number;
    error: deleteCartErrorMessage;
    errors: DescriptiveError;
}
export declare const enum deleteCartErrorMessage {
    CAN_NOT_REMOVE_CART = "CAN_NOT_REMOVE_CART"
}
export declare type deleteCartResponse = deleteCartSuccessResponse | deleteCartErrorResponse;
