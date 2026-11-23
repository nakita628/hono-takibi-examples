type IdealAuthLinkRequest = { accountHolderId: string }
type Href = { href: string }
type IdealAuthLinkResponse = { redirectUrl?: Href | undefined }
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type IdealAuthenticateRequest = { accountHolderId: string; payload: string }
type IdealAuthenticateResponse = { redirectUrl?: Href | undefined }
type ProfileRegistrationRequest = { accountHolderId: string; paymentInstrumentIds: string[] }
type ProfileRegistrationResponse = { redirectUrl?: Href | undefined }
type CancelPaymentRequest = { token: string }
type Links = { cancel?: Href | undefined; success?: Href | undefined }
type CancelPaymentResponse = { links: Links }
type ConfirmPaymentRequest = { balanceAccountId: string; token: string }
type ConfirmPaymentResponse = { links: Links }
type PaymentMethod = 'ideal'
type PaymentSource = 'redirect' | 'qr' | 'pushNotification'
type IdealPaymentDetailsRequest = {
  method: PaymentMethod
  payload?: string | undefined
  source?: PaymentSource | undefined
}
type Amount = { currency: string; value: bigint }
type AccountHolder = { fullName: string }
type AccountIdentification = { type: string }
type Counterparty = { accountHolder: AccountHolder; accountIdentification: AccountIdentification }
type PaymentDetails = {
  amount: Amount
  counterparty: Counterparty
  description: string
  expiresAt: string
}
type PaymentDetailsResponse = { details: PaymentDetails; token: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ideal/profile/auth-link': {
      $post:
        | {
            input: { json: IdealAuthLinkRequest }
            output: IdealAuthLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdealAuthLinkRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdealAuthLinkRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: IdealAuthLinkRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ideal/profile/authenticate': {
      $post:
        | {
            input: { json: IdealAuthenticateRequest }
            output: IdealAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdealAuthenticateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdealAuthenticateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: IdealAuthenticateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ideal/profile/register': {
      $post:
        | {
            input: { json: ProfileRegistrationRequest }
            output: ProfileRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProfileRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProfileRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ProfileRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/cancel': {
      $post:
        | {
            input: { json: CancelPaymentRequest }
            output: CancelPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CancelPaymentRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CancelPaymentRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CancelPaymentRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/confirm': {
      $post:
        | {
            input: { header: { 'WWW-Authenticate'?: string | undefined } } & {
              json: ConfirmPaymentRequest
            }
            output: ConfirmPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'WWW-Authenticate'?: string | undefined } } & {
              json: ConfirmPaymentRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'WWW-Authenticate'?: string | undefined } } & {
              json: ConfirmPaymentRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'WWW-Authenticate'?: string | undefined } } & {
              json: ConfirmPaymentRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'WWW-Authenticate'?: string | undefined } } & {
              json: ConfirmPaymentRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/details': {
      $post:
        | {
            input: { json: IdealPaymentDetailsRequest }
            output: PaymentDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdealPaymentDetailsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdealPaymentDetailsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: IdealPaymentDetailsRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
