type Amount = { currency: string; value: bigint }
type StoredValueStatusChangeRequest = {
  amount?: Amount | undefined
  merchantAccount: string
  paymentMethod: { [x: string]: string }
  recurringDetailReference?: string | undefined
  reference: string
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
  status: 'active' | 'inactive'
  store?: string | undefined
}
type StoredValueStatusChangeResponse = {
  authCode?: string | undefined
  currentBalance?: Amount | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
type ServiceError = {
  additionalData?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type StoredValueBalanceCheckRequest = {
  amount?: Amount | undefined
  merchantAccount: string
  paymentMethod: { [x: string]: string }
  recurringDetailReference?: string | undefined
  reference: string
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
  store?: string | undefined
}
type StoredValueBalanceCheckResponse = {
  currentBalance?: Amount | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
type StoredValueIssueRequest = {
  amount?: Amount | undefined
  merchantAccount: string
  paymentMethod: { [x: string]: string }
  recurringDetailReference?: string | undefined
  reference: string
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
  store?: string | undefined
}
type StoredValueIssueResponse = {
  authCode?: string | undefined
  currentBalance?: Amount | undefined
  paymentMethod?: { [x: string]: string } | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
type StoredValueLoadRequest = {
  amount: Amount
  loadType?: 'merchandiseReturn' | 'load' | undefined
  merchantAccount: string
  paymentMethod: { [x: string]: string }
  recurringDetailReference?: string | undefined
  reference: string
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
  store?: string | undefined
}
type StoredValueLoadResponse = {
  authCode?: string | undefined
  currentBalance?: Amount | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
type StoredValueBalanceMergeRequest = {
  amount?: Amount | undefined
  merchantAccount: string
  paymentMethod: { [x: string]: string }
  recurringDetailReference?: string | undefined
  reference: string
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
  sourcePaymentMethod: { [x: string]: string }
  store?: string | undefined
}
type StoredValueBalanceMergeResponse = {
  authCode?: string | undefined
  currentBalance?: Amount | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
type StoredValueVoidRequest = {
  merchantAccount: string
  originalReference: string
  reference?: string | undefined
  store?: string | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type StoredValueVoidResponse = {
  currentBalance?: Amount | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?: 'Success' | 'Refused' | 'Error' | 'NotEnoughBalance' | undefined
  thirdPartyRefusalReason?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/changeStatus': {
      $post:
        | {
            input: { json: StoredValueStatusChangeRequest }
            output: StoredValueStatusChangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueStatusChangeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueStatusChangeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueStatusChangeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueStatusChangeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/checkBalance': {
      $post:
        | {
            input: { json: StoredValueBalanceCheckRequest }
            output: StoredValueBalanceCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueBalanceCheckRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueBalanceCheckRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueBalanceCheckRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueBalanceCheckRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/issue': {
      $post:
        | {
            input: { json: StoredValueIssueRequest }
            output: StoredValueIssueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueIssueRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueIssueRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueIssueRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueIssueRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/load': {
      $post:
        | {
            input: { json: StoredValueLoadRequest }
            output: StoredValueLoadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueLoadRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueLoadRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueLoadRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueLoadRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mergeBalance': {
      $post:
        | {
            input: { json: StoredValueBalanceMergeRequest }
            output: StoredValueBalanceMergeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueBalanceMergeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueBalanceMergeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueBalanceMergeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueBalanceMergeRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/voidTransaction': {
      $post:
        | {
            input: { json: StoredValueVoidRequest }
            output: StoredValueVoidResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoredValueVoidRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoredValueVoidRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoredValueVoidRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoredValueVoidRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
