import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
import { CustomerProduct } from './customerProduct';
/**
 * API Path: /customer/home-page-products
 * method: GET
 * response: GetCustomerAllHomePageProductsResponse
 */
export interface GetCustomerAllHomePageProductsSuccessResponse extends SuccessResponse {
    code: number;
    data: CustomerProduct[];
}
export declare const enum GetCustomerAllHomePageProductsErrorMessages {
    NO_PRODUCTS_FOUND = "NO_PRODUCTS_FOUND"
}
export interface GetCustomerAllHomePageProductsErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomerAllHomePageProductsErrorMessages;
    errors: DescriptiveError;
}
export declare type GetCustomerAllHomePageProductsResponse = GetCustomerAllHomePageProductsSuccessResponse | GetCustomerAllHomePageProductsErrorResponse;
