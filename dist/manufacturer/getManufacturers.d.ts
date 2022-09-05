import { DescriptiveError, ErrorResponse, SuccessResponse } from '../common/index';
import { Manufacturer } from './manufacturer';
export declare const enum GetManufacturersErrorMessages {
    MANUFACTURERS_NOT_FOUND = "MANUFACTURERS_NOT_FOUND"
}
export declare const enum GetManufacturersSuccessMessages {
    MANUFACTURERS_LOADED_SUCCESSFULLY = "MANUFACTURERS_LOADED_SUCCESSFULLY",
    MANUFACTURER_IS_EMPTY = "MANUFACTURER_IS_EMPTY"
}
/**
* API Path: /manufacturers?skip={...}&limit={...}
* method: GET
* body: null
* response: GetManufacturersResponse
*/
export interface GetManufacturersQuery {
    skip?: number;
    limit?: number;
}
export interface GetManufacturersSuccessResponse extends SuccessResponse {
    code: number;
    data: {
        manufacturers: Manufacturer[];
        total: number;
        message: GetManufacturersSuccessMessages;
    };
}
export interface GetManufacturersErrorResponse extends ErrorResponse {
    code?: number;
    error: GetManufacturersErrorMessages;
    errors: DescriptiveError;
}
export declare type GetManufacturersResponse = GetManufacturersSuccessResponse | GetManufacturersErrorResponse;
