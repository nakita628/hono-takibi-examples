type Amount = { currency: string; value: bigint }
type PermitRestriction = {
  maxAmount?: Amount | undefined
  singleTransactionLimit?: Amount | undefined
  singleUse?: boolean | undefined
}
type Permit = {
  partnerId?: string | undefined
  profileReference?: string | undefined
  restriction?: PermitRestriction | undefined
  resultKey?: string | undefined
  validTillDate?: string | undefined
}
type CreatePermitRequest = {
  merchantAccount: string
  permits: Permit[]
  recurringDetailReference: string
  shopperReference: string
}
type PermitResult = { resultKey?: string | undefined; token?: string | undefined }
type CreatePermitResult = {
  permitResultList?: PermitResult[] | undefined
  pspReference?: string | undefined
}
type ServiceError = {
  additionalData?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type DisableRequest = {
  contract?: string | undefined
  merchantAccount: string
  recurringDetailReference?: string | undefined
  shopperReference: string
}
type DisableResult = { response?: string | undefined }
type DisablePermitRequest = { merchantAccount: string; token: string }
type DisablePermitResult = { pspReference?: string | undefined; status?: string | undefined }
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
type RecurringDetailsRequest = {
  merchantAccount: string
  recurring?: Recurring | undefined
  shopperReference: string
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
type TokenDetails = {
  tokenData?: { [x: string]: string } | undefined
  tokenDataType?: string | undefined
}
type RecurringDetail = {
  additionalData?: { [x: string]: string } | undefined
  alias?: string | undefined
  aliasType?: string | undefined
  bank?: BankAccount | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  contractTypes?: string[] | undefined
  creationDate?: string | undefined
  firstPspReference?: string | undefined
  name?: string | undefined
  networkTxReference?: string | undefined
  paymentMethodVariant?: string | undefined
  recurringDetailReference: string
  shopperName?: Name | undefined
  socialSecurityNumber?: string | undefined
  tokenDetails?: TokenDetails | undefined
  transactionLinkId?: string | undefined
  variant: string
}
type RecurringDetailWrapper = { RecurringDetail?: RecurringDetail | undefined }
type RecurringDetailsResult = {
  creationDate?: string | undefined
  details?: RecurringDetailWrapper[] | undefined
  lastKnownShopperEmail?: string | undefined
  shopperReference?: string | undefined
}
type NotifyShopperRequest = {
  amount: Amount
  billingDate?: string | undefined
  billingSequenceNumber?: string | undefined
  displayedReference?: string | undefined
  merchantAccount: string
  recurringDetailReference?: string | undefined
  reference: string
  shopperReference: string
  storedPaymentMethodId?: string | undefined
}
type NotifyShopperResult = {
  displayedReference?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  reference?: string | undefined
  resultCode?: string | undefined
  shopperNotificationReference?: string | undefined
  storedPaymentMethodId?: string | undefined
}
type ScheduleAccountUpdaterRequest = {
  additionalData?: { [x: string]: string } | undefined
  card?: Card | undefined
  merchantAccount: string
  reference: string
  selectedRecurringDetailReference?: string | undefined
  shopperReference?: string | undefined
}
type ScheduleAccountUpdaterResult = { pspReference: string; result: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createPermit': {
      $post:
        | {
            input: { json: CreatePermitRequest }
            output: CreatePermitResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreatePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/disable': {
      $post:
        | {
            input: { json: DisableRequest }
            output: DisableResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DisableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DisableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DisableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DisableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DisableRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/disablePermit': {
      $post:
        | {
            input: { json: DisablePermitRequest }
            output: DisablePermitResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DisablePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DisablePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DisablePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DisablePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DisablePermitRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listRecurringDetails': {
      $post:
        | {
            input: { json: RecurringDetailsRequest }
            output: RecurringDetailsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RecurringDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RecurringDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RecurringDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RecurringDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RecurringDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/notifyShopper': {
      $post:
        | {
            input: { json: NotifyShopperRequest }
            output: NotifyShopperResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotifyShopperRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NotifyShopperRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NotifyShopperRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NotifyShopperRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: NotifyShopperRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scheduleAccountUpdater': {
      $post:
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ScheduleAccountUpdaterResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ScheduleAccountUpdaterRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
