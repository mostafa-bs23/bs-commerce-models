import { DescriptiveError, ErrorResponse, SuccessResponse, Customer } from 'src/index';
/**
 * API Path: /customer
 * method: GET
 * response: GetCustomerInformationResponse
 */
export interface GetCustomerInformationSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer;
}
export declare const enum GetCustomerInformationErrorMessages {
    CUSTOMER_NOT_FOUND = "CUSTOMER_NOT_FOUND"
}
export interface GetCustomerInformationErrorResponse extends ErrorResponse {
    code?: number;
    error: GetCustomerInformationErrorMessages;
    errors: DescriptiveError;
}
export declare type GetCustomerInformationResponse = GetCustomerInformationSuccessResponse | GetCustomerInformationErrorResponse;
