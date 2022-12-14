import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';
import { Manufacturer } from './manufacturer';
export declare const enum DeleteManufacturerErrorMessages {
    MANUFACTURER_NOT_FOUND = "MANUFACTURER_NOT_FOUND",
    MANUFACTURER_NOT_DELETED = "MANUFACTURER_NOT_DELETED"
}
export declare const enum DeleteManufacturerSuccessMessages {
    MANUFACTURER_DELETED_SUCCESSFULLY = "MANUFACTURER_DELETED_SUCCESSFULLY"
}
/**
* API Path: /manufacturer/{manufacturerId}
* method: DELETE
* param: manufacturerId: string
* body: null
* response: DeleteManufacturerResponse
*/
export interface DeleteManufacturerSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        manufacturer: Manufacturer;
        message: DeleteManufacturerSuccessMessages;
    };
}
export interface DeleteManufacturerErrorResponse extends ErrorResponse {
    code?: number;
    error: DeleteManufacturerErrorMessages;
    errors: DescriptiveError;
}
export declare type DeleteManufacturerResponse = DeleteManufacturerSuccessResponse | DeleteManufacturerErrorResponse;
