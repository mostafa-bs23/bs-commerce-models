import { DescriptiveError, ErrorResponse, SuccessResponse } from 'src/index';
/**
 * API Path: /media/upload
 * method: POST
 * body: UploadFileRequest
 * response: UploadFileResponse
 */
export interface File {
    url: string;
}
export interface UploadFileSuccessResponse extends SuccessResponse {
    code: number;
    data: File;
}
export declare const enum UploadFileErrorMessages {
    CAN_NOT_UPLOAD_FILE = "CAN_NOT_UPLOAD_FILE",
    PROVIDE_FILE = "PROVIDE_FILE",
    UNSUPPORTED_MIMETYPE = "UNSUPPORTED_MIMETYPE"
}
export interface UploadFileErrorResponse extends ErrorResponse {
    code?: number;
    error: UploadFileErrorMessages;
    errors: DescriptiveError;
}
export declare type UploadFileResponse = UploadFileSuccessResponse | UploadFileErrorResponse;
