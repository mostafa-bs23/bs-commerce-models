import { DescriptiveError, ErrorResponse, SuccessResponse, User } from 'src/index';
/**
 * API Path: /user
 * method: GET
 * response: GetUserResponse
 */
export interface GetUserSuccessResponse extends SuccessResponse {
    code: number;
    data: User;
}
export declare const enum GetUserErrorMessages {
    CAN_NOT_GET_USER = "CAN_NOT_GET_USER"
}
export interface GetUserErrorResponse extends ErrorResponse {
    code?: number;
    error: GetUserErrorMessages;
    errors: DescriptiveError;
}
export declare type GetUserResponse = GetUserSuccessResponse | GetUserErrorResponse;
