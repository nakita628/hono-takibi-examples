type ModifyRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  originalReference: string
}
type ModifyResponse = {
  additionalData?: { [x: string]: string } | undefined
  pspReference: string
  response: string
}
type ServiceError = {
  additionalData?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type Amount = { currency: string; value: bigint }
type Address = {
  city: string
  country: string
  houseNumberOrName: string
  postalCode: string
  stateOrProvince?: string | undefined
  street: string
}
type Card = {
  cvc?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  issueNumber?: string | undefined
  number?: string | undefined
  startMonth?: string | undefined
  startYear?: string | undefined
}
type Name = { firstName: string; lastName: string }
type FundSource = {
  additionalData?: { [x: string]: string } | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  shopperEmail?: string | undefined
  shopperName?: Name | undefined
  telephoneNumber?: string | undefined
}
type Recurring = {
  contract?: 'ONECLICK' | 'ONECLICK,RECURRING' | 'RECURRING' | 'PAYOUT' | 'EXTERNAL' | undefined
  recurringDetailName?: string | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  tokenService?:
    | 'VISATOKENSERVICE'
    | 'MCTOKENSERVICE'
    | 'AMEXTOKENSERVICE'
    | 'TOKEN_SHARING'
    | undefined
}
type PayoutRequest = {
  amount: Amount
  billingAddress?: Address | undefined
  card?: Card | undefined
  fraudOffset?: number | undefined
  fundSource?: FundSource | undefined
  merchantAccount: string
  recurring?: Recurring | undefined
  reference: string
  selectedRecurringDetailReference?: string | undefined
  shopperEmail?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  telephoneNumber?: string | undefined
}
type FraudCheckResult = { accountScore: number; checkId: number; name: string }
type FraudCheckResultWrapper = { FraudCheckResult?: FraudCheckResult | undefined }
type FraudResult = { accountScore: number; results?: FraudCheckResultWrapper[] | undefined }
type PayoutResponse = {
  additionalData?: { [x: string]: string } | undefined
  authCode?: string | undefined
  dccAmount?: Amount | undefined
  dccSignature?: string | undefined
  fraudResult?: FraudResult | undefined
  issuerUrl?: string | undefined
  md?: string | undefined
  paRequest?: string | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode?:
    | 'AuthenticationFinished'
    | 'AuthenticationNotRequired'
    | 'Authorised'
    | 'Cancelled'
    | 'ChallengeShopper'
    | 'Error'
    | 'IdentifyShopper'
    | 'PartiallyAuthorised'
    | 'Pending'
    | 'PresentToShopper'
    | 'Received'
    | 'RedirectShopper'
    | 'Refused'
    | 'Success'
    | undefined
}
type BankAccount = {
  bankAccountNumber?: string | undefined
  bankCity?: string | undefined
  bankLocationId?: string | undefined
  bankName?: string | undefined
  bic?: string | undefined
  countryCode?: string | undefined
  iban?: string | undefined
  ownerName?: string | undefined
  taxId?: string | undefined
}
type StoreDetailRequest = {
  additionalData?: { [x: string]: string } | undefined
  bank?: BankAccount | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  dateOfBirth: string
  entityType: 'NaturalPerson' | 'Company'
  fraudOffset?: number | undefined
  merchantAccount: string
  nationality: string
  recurring: Recurring
  selectedBrand?: string | undefined
  shopperEmail: string
  shopperName?: Name | undefined
  shopperReference: string
  socialSecurityNumber?: string | undefined
  telephoneNumber?: string | undefined
}
type StoreDetailResponse = {
  additionalData?: { [x: string]: string } | undefined
  pspReference: string
  recurringDetailReference: string
  resultCode: string
}
type StoreDetailAndSubmitRequest = {
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  bank?: BankAccount | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  dateOfBirth: string
  entityType: 'NaturalPerson' | 'Company'
  fraudOffset?: number | undefined
  merchantAccount: string
  nationality: string
  recurring: Recurring
  reference: string
  selectedBrand?: string | undefined
  shopperEmail: string
  shopperName?: Name | undefined
  shopperReference: string
  shopperStatement?: string | undefined
  socialSecurityNumber?: string | undefined
  telephoneNumber?: string | undefined
}
type StoreDetailAndSubmitResponse = {
  additionalData?: { [x: string]: string } | undefined
  pspReference: string
  refusalReason?: string | undefined
  resultCode: string
}
type SubmitRequest = {
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  dateOfBirth?: string | undefined
  entityType?: 'NaturalPerson' | 'Company' | undefined
  fraudOffset?: number | undefined
  merchantAccount: string
  nationality?: string | undefined
  recurring: Recurring
  reference: string
  selectedRecurringDetailReference: string
  shopperEmail: string
  shopperName?: Name | undefined
  shopperReference: string
  shopperStatement?: string | undefined
  socialSecurityNumber?: string | undefined
}
type SubmitResponse = {
  additionalData?: { [x: string]: string } | undefined
  pspReference: string
  refusalReason?: string | undefined
  resultCode: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/confirmThirdParty': {
      $post:
        | {
            input: { json: ModifyRequest }
            output: ModifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/declineThirdParty': {
      $post:
        | {
            input: { json: ModifyRequest }
            output: ModifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ModifyRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payout': {
      $post:
        | {
            input: { json: PayoutRequest }
            output: PayoutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PayoutRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PayoutRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PayoutRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PayoutRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PayoutRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/storeDetail': {
      $post:
        | {
            input: { json: StoreDetailRequest }
            output: StoreDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoreDetailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoreDetailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoreDetailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoreDetailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: StoreDetailRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/storeDetailAndSubmitThirdParty': {
      $post:
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: StoreDetailAndSubmitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: StoreDetailAndSubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/submitThirdParty': {
      $post:
        | {
            input: { json: SubmitRequest }
            output: SubmitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SubmitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
