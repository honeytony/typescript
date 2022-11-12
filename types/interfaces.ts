interface IPayment {
    sum: number;
    from: number;
    to: number;
}

interface IPaymentRequest extends IPayment {}

interface ISuccessResp extends IPayment {
    databaseId: number;
}

interface IFailedResp {
    errorMessage: string;
    errorCode: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: ISuccessResp;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IFailedResp;
}

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }
