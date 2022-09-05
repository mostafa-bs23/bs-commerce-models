import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /wishlist/:wishlistId
 * method: DELETE
 * params: wishlistId
 * response: deleteWishlistResponse
 */
export interface DeleteWishlistParams {
    wishlistId: string;
}
export interface deleteWishlistSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: string;
    };
}
export declare const enum deleteWishlistSuccessMessage {
    WISHLIST_DELETED_SUCCESSFUL = "WISHLIST_DELETED_SUCCESSFUL"
}
export interface deleteWishlistErrorResponse extends ErrorResponse {
    code?: number;
    error: deleteWishlistErrorMessage;
    errors: DescriptiveError;
}
export declare const enum deleteWishlistErrorMessage {
    CAN_NOT_DELETE_WISHLIST = "CAN_NOT_DELETE_WISHLIST"
}
export declare type deleteWishlistResponse = deleteWishlistSuccessResponse | deleteWishlistErrorResponse;
