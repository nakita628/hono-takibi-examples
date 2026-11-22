type Fields = {
  accountId: string
  address: string | null
  callbackUrl: string
  cardNumber: string
  document: string
  dueDate: string
  holderName: string
  validationCode: string
}
type Transaction = { id: string; merchantName: string }
type _2SendPaymentsPublicRequest = {
  currencyCode: string
  fields: Fields
  installments: number
  installmentsInterestRate: number
  installmentsValue: number
  paymentSystem: number
  referenceValue: number
  transaction: Transaction
  value: number
}
type Configuration = { name: string; value: string }
type InsertAffiliationRequest = {
  configuration: Configuration[]
  implementation: string
  isConfigured: boolean
  isdelivered: boolean
  name: string
}
type UpdateAffiliationRequest = {
  configuration: Configuration[]
  id: string
  implementation: string
  isConfigured: boolean
  isdelivered: boolean
  name: string
}
type Option = { interestRate: number; quantity: number; value: number }
type Self = { href: string }
type Payment = {
  bin: string | null
  id: number
  isDefault: boolean
  name: string | null
  self: Self
  value: number
}
type Installment = { options: Option[]; payment: Payment }
type ValidRequest = { installments: Installment[]; value: number }
type Error = { code: string; exception: string | null; message: string }
type InvalidRequestValue = { error: Error }
type Rule = { antifraudImplementation: string | null; connectorImplementation: string; id: string }
type Validator = {
  cardCodeMask: string | null
  cardCodeRegex: string | null
  mask: string | null
  regex: string | null
  useBillingAddress: boolean
  useCardHolderName: boolean
  useCvv: boolean
  useExpirationDate: boolean
  validCardLengths: string | null
  weights: number[] | null
}
type PaymentSystemsResponse = {
  affiliationId: string | null
  allowCommercialCondition: boolean
  allowCommercialPolicy: boolean
  allowCountry: boolean
  allowInstallments: boolean
  allowIssuer: boolean
  allowMultiple: boolean
  allowNotification: boolean
  allowPeriod: boolean
  antifraudConnectorImplementation: string | null
  connectorId: number
  connectorImplementation: string
  description: string | null
  dueDate: string
  fields: string | null
  groupName: string
  id: number
  implementation: string
  isAvailable: boolean
  isCustom: boolean
  isSelfAuthorized: boolean
  name: string
  requiresDocument: boolean
  requiresPhone: boolean
  rules: Rule[]
  validator: Validator
}
type Antifraud = { affiliationId: string | null; implementation: string | null }
type Connector = { affiliationId: string; implementation: string }
type Issuer = { name: string | null }
type PaymentSystem = { id: number; implementation: string | null; name: string }
type SalesChannel = { id: string }
type InsertRuleRequest = {
  antifraud: Antifraud
  beginDate: string | null
  condition: string | null
  connector: Connector
  country: string | null
  dateIntervals: string | null
  enabled: boolean
  endDate: string | null
  installmentOptions: string | null
  installmentsService: string | null
  isDefault: boolean
  isSelfAuthorized: string | null
  issuer: Issuer
  multiMerchantList: string | null
  name: string
  paymentSystem: PaymentSystem
  requiresAuthentication: string | null
  salesChannels: SalesChannel[]
}
type Antifraud1 = { affiliationId: string }
type InstallmentOptions = { interestRateMethod: string | null }
type RuleByIdRequest = {
  antifraud: Antifraud1
  beginDate: string
  condition: string | null
  connector: Connector
  country: string | null
  dateIntervals: string | null
  enabled: boolean
  endDate: string
  id: string
  installmentOptions: InstallmentOptions
  isDefault: string | null
  isSelfAuthorized: string | null
  issuer: Issuer
  multiMerchantList: string | null
  name: string
  paymentSystem: PaymentSystem
  salesChannels: SalesChannel[]
}
type _1CreateanewtransactionRequest = {
  channel: string
  referenceId: string
  salesChannel: string
  urn?: string | undefined
  value: number
}
type Cancellations = { href: string }
type Field = { name: string; value: string }
type Interactions = { href: string }
type Payments = { href: string }
type Refunds = { href: string }
type Settlements = { href: string }
type StartTransactionResponse = {
  acceptHeader: string | null
  antifraudAffiliationId: string | null
  antifraudTid: string | null
  authorizationDate: string | null
  authorizationToken: string | null
  buyer: string | null
  cancelationDate: string | null
  cancelationToken: string | null
  cancellations: Cancellations
  channel: string
  commitmentDate: string | null
  commitmentToken: string | null
  fields: Field[]
  id: string
  interactions: Interactions
  ipAddress: string | null
  markedForRecurrence: boolean
  owner: string
  payments: Payments
  receiverUri: string
  referenceKey: string
  refundingDate: string | null
  refundingToken: string | null
  refunds: Refunds
  salesChannel: string
  settlements: Settlements
  softDescriptor: string | null
  startDate: string
  status: string
  timeoutStatus: number
  totalRefunds: number
  transactionId: string
  urn: string | null
  userAgent: string | null
  value: number
}
type Fields1 = { name: string; value: string }
type TransactionDetailsResponse = {
  acceptHeader: string
  antifraudAffiliationId: string | null
  antifraudTid: string | null
  authorizationDate: string | null
  authorizationToken: string | null
  buyer: string | null
  cancelationDate: string | null
  cancelationToken: string | null
  cancellations: Cancellations
  channel: string
  commitmentDate: string | null
  commitmentToken: string | null
  fields: Fields1[]
  id: string
  interactions: Interactions
  ipAddress: string
  markedForRecurrence: boolean
  owner: string
  payments: Payments
  receiverUri: string | null
  referenceKey: string
  refundingDate: string | null
  refundingToken: string | null
  refunds: Refunds
  salesChannel: string
  settlements: Settlements
  softDescriptor: string | null
  startDate: string
  status: string
  timeoutStatus: number
  totalRefunds: number
  transactionId: string
  urn: string | null
  userAgent: string
  value: number
}
type _3SendAdditionalDataRequest = { [x: string]: unknown }[]
type _4DoauthorizationRequest = {
  prepareForRecurrency: boolean
  softDescriptor: string
  transactionId: string
}
type CancelthetransactionRequest = {
  minicart?:
    | {
        freight?: number | undefined
        items?: { [x: string]: unknown }[] | undefined
        tax?: number | undefined
      }
    | undefined
  value: number
}
type Fields3 = {
  accountId: string
  address: string | null
  callbackUrl: string
  firstDigits: string
  validationCode: string
}
type _2SendPaymentsWithSavedCreditCardRequest = {
  currencyCode: string
  fields: Fields3
  installments: number
  installmentsInterestRate: number
  installmentsValue: number
  paymentSystem: number
  referenceValue: number
  transaction: Transaction
  value: number
}
type PaymentDetailsResponse = {
  ConnectorResponses: string | null
  ShowConnectorResponses: boolean
  allowInstallments: boolean
  allowIssuer: boolean
  allowNotification: boolean
  connector: string
  connectorResponse: string | null
  currencyCode: string | null
  description: string | null
  fields: Fields1[]
  group: string
  id: string
  installments: number
  installmentsInterestRate: number
  installmentsValue: number
  isAvailable: boolean
  isCustom: boolean
  merchantName: string | null
  paymentSystem: number
  paymentSystemName: string
  provider: string | null
  referenceValue: number
  returnCode: string | null
  returnMessage: string | null
  self: Self
  sheets: string | null
  status: string
  tid: string | null
  value: number
}
type RefundthetransactionRequest = {
  minicart?:
    | {
        freight?: number | undefined
        items?: { [x: string]: unknown }[] | undefined
        tax?: number | undefined
      }
    | undefined
  value: number
}
type SettlethetransactionRequest = { value: number }
type SettleResponse = {
  cancelledValue: number
  connectorRefundedValue: number
  message: string | null
  processingDate: string
  refundedToken: string | null
  refundedValue: number
  status: number
  statusDetail: string
  token: string
}
type Payment1 = { href: string }
type Action = {
  connectorResponse: string | null
  date: string
  payment: Payment1
  paymentId: string
  type: string
  value: number
}
type Request = { date: string; id: string; value: number }
type TransactionSettlementDetails = { actions: Action[]; requests: Request[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/pub/transactions/:transactionId/payments': {
      $post: {
        input: { param: { transactionId: string } } & { query: { orderId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: _2SendPaymentsPublicRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/affiliations': {
      $get: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        } & { json: InsertAffiliationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/affiliations/:affiliationId': {
      $get: {
        input: { param: { affiliationId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { affiliationId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: UpdateAffiliationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/installments': {
      $get:
        | {
            input: {
              query: {
                'request.value': number
                'request.salesChannel'?: number | undefined
                'request.paymentDetails[0].id'?: number | undefined
                'request.paymentDetails[0].value'?: number | undefined
                'request.paymentDetails[0].bin'?: number | undefined
              }
            } & {
              header: {
                'X-PROVIDER-API-AppKey': string
                'X-PROVIDER-API-AppToken': string
                'Content-Type': string
                Accept: string
              }
            }
            output: ValidRequest
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'request.value': number
                'request.salesChannel'?: number | undefined
                'request.paymentDetails[0].id'?: number | undefined
                'request.paymentDetails[0].value'?: number | undefined
                'request.paymentDetails[0].bin'?: number | undefined
              }
            } & {
              header: {
                'X-PROVIDER-API-AppKey': string
                'X-PROVIDER-API-AppToken': string
                'Content-Type': string
                Accept: string
              }
            }
            output: InvalidRequestValue
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/pvt/merchants/payment-systems': {
      $get: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: PaymentSystemsResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/pvt/rules': {
      $get: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: InsertRuleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/rules/:ruleId': {
      $delete: {
        input: { param: { ruleId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { ruleId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { ruleId: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
          }
        } & { json: RuleByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions': {
      $post: {
        input: {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: _1CreateanewtransactionRequest }
        output: StartTransactionResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId': {
      $get: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: TransactionDetailsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/additional-data': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: _3SendAdditionalDataRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/authorization-request': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: _4DoauthorizationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/cancellation-request': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: CancelthetransactionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/payments': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: _2SendPaymentsWithSavedCreditCardRequest[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/payments/:paymentId': {
      $get: {
        input: { param: { transactionId: string; paymentId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: PaymentDetailsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/refunding-request': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: RefundthetransactionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/settlement-request': {
      $post: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            Accept: string
            'Content-Type': string
          }
        } & { json: SettlethetransactionRequest }
        output: SettleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/pvt/transactions/:transactionId/settlements': {
      $get: {
        input: { param: { transactionId: string } } & {
          header: {
            'X-PROVIDER-API-AppKey': string
            'X-PROVIDER-API-AppToken': string
            'Content-Type': string
            Accept: string
          }
        }
        output: TransactionSettlementDetails
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
