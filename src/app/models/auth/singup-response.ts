import { IAuthResponse } from "./auth-response";

export class SignupResponse implements IAuthResponse {
    public isSuccess: String;
    public error: String;

    public constructor(dto: IAuthResponse) {
        this.isSuccess = dto.isSuccess;
        this.error = dto.error;
    }
}