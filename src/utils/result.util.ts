export type IResult<ResultData = any, ResultError = any> = OkResponse<ResultData> | ErrorResponse<ResultError>;

type OkResponse<ResultData = any> = {
	success: true;
	data: ResultData;
};

type ErrorResponse<ResultError = any> = {
	success: false;
	message: string;
	error?: ResultError;
};

function ok<R = any>(data: R): OkResponse<R> {
	return {
		success: true,
		data,
	};
}

function error<E = any>(message: string, error?: E): ErrorResponse<E> {
	return {
		success: false,
		message,
		error,
	};
}

const Result = { error, ok };

export default Result;
