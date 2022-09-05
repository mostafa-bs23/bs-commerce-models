import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
import { Product } from "./product";
/**
 * API Path: /products/:productId
 * method: GET
 * params: productId
 * response: GetProductResponse
 */
export interface GetProductParams {
    productId: string;
}
export interface GetProductSuccessResponse extends SuccessResponse {
    code: number;
    data: Product;
}
export declare const enum GetProductErrorMessages {
    CAN_NOT_GET_PRODUCT = "CAN_NOT_GET_PRODUCT"
}
export interface GetProductErrorResponse extends ErrorResponse {
    code?: number;
    error: GetProductErrorMessages;
    errors: DescriptiveError;
}
export declare type GetProductResponse = GetProductSuccessResponse | GetProductErrorResponse;
