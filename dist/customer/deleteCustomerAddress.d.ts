import { DescriptiveError, ErrorResponse, SuccessResponse, Customer } from 'src/index';
/**
 * API Path: /customer/delete-address/:addressId
 * method: DELETE
 * params: addressId
 * response: DeleteCustomerAddressResponse
 */
export interface DeleteCustomerAddressParams {
    addressId: string;
}
export interface DeleteCustomerAddressSuccessResponse extends SuccessResponse {
    code: number;
    data: Customer;
}
export declare const enum DeleteCustomerAddressErrorMessages {
    CAN_NOT_DELETE_CUSTOMER_ADDRESS = "CAN_NOT_DELETE_CUSTOMER_ADDRESS"
}
export interface DeleteCustomerAddressErrorResponse extends ErrorResponse {
    code?: number;
    error: DeleteCustomerAddressErrorMessages;
    errors: DescriptiveError;
}
export declare type DeleteCustomerAddressResponse = DeleteCustomerAddressSuccessResponse | DeleteCustomerAddressErrorResponse;
