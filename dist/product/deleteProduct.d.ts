import { DescriptiveError, ErrorResponse, SuccessResponse } from "src/index";
/**
 * API Path: /products/:productId
 * method: DELETE
 * params: productId
 * response: DeleteProductResponse
 */
export interface DeleteProductParams {
    productId: string;
}
export declare const enum DeleteProductSuccessMessage {
    PRODUCT_DELETED_SUCCESSFUL = "PRODUCT_DELETED_SUCCESSFUL"
}
export interface DeleteProductSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: DeleteProductSuccessMessage;
    };
}
export declare const enum DeleteProductErrorMessages {
    CAN_NOT_DELETE_PRODUCT = "CAN_NOT_DELETE_PRODUCT"
}
export interface DeleteProductErrorResponse extends ErrorResponse {
    code?: number;
    error: DeleteProductErrorMessages;
    errors: DescriptiveError;
}
export declare type DeleteProductResponse = DeleteProductSuccessResponse | DeleteProductErrorResponse;
