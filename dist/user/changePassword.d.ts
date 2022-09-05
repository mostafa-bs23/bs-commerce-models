import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /user/password
 * method: PATCH
 * body: ChangePasswordRequest
 * response: ChangePasswordResponse
 */
export interface ChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}
export declare const enum ChangePasswordSuccessMessage {
    CHANGE_PASSWORD_SUCCESSFUL = "CHANGE_PASSWORD_SUCCESSFUL"
}
export interface ChangePasswordSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        message?: ChangePasswordSuccessMessage;
    };
}
export declare const enum ChangePasswordErrorMessages {
    CAN_NOT_GET_USER = "CAN_NOT_GET_USER",
    CURRENT_PASSWORD_IS_INCORRECT = "CURRENT_PASSWORD_IS_INCORRECT",
    CAN_NOT_CHANGE_PASSWORD = "CAN_NOT_CHANGE_PASSWORD"
}
export interface ChangePasswordErrorResponse extends ErrorResponse {
    code?: number;
    error: ChangePasswordErrorMessages;
    errors: DescriptiveError;
}
export declare type ChangePasswordResponse = ChangePasswordErrorResponse | ChangePasswordSuccessResponse;
