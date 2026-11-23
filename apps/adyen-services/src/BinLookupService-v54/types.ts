type ThreeDSAvailabilityRequest = {
  additionalData?: { [x: string]: string } | undefined
  brands?: string[] | undefined
  cardNumber?: string | undefined
  merchantAccount: string
  recurringDetailReference?: string | undefined
  shopperReference?: string | undefined
}
type BinDetail = { issuerCountry?: string | undefined }
type DSPublicKeyDetail = {
  brand?: string | undefined
  directoryServerId?: string | undefined
  fromSDKVersion?: string | undefined
  publicKey?: string | undefined
  rootCertificates?: string | undefined
}
type ThreeDS2CardRangeDetail = {
  acsInfoInd?: string[] | undefined
  brandCode?: string | undefined
  endRange?: string | undefined
  startRange?: string | undefined
  threeDS2Versions?: string[] | undefined
  threeDSMethodURL?: string | undefined
}
type ThreeDSAvailabilityResponse = {
  binDetails?: BinDetail | undefined
  dsPublicKeys?: DSPublicKeyDetail[] | undefined
  threeDS1Supported?: boolean | undefined
  threeDS2CardRangeDetails?: ThreeDS2CardRangeDetail[] | undefined
  threeDS2supported?: boolean | undefined
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
type CostEstimateAssumptions = {
  assume3DSecureAuthenticated?: boolean | undefined
  assumeLevel3Data?: boolean | undefined
  installments?: number | undefined
}
type MerchantDetails = {
  countryCode?: string | undefined
  enrolledIn3DSecure?: boolean | undefined
  mcc?: string | undefined
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
type CostEstimateRequest = {
  amount: Amount
  assumptions?: CostEstimateAssumptions | undefined
  cardNumber?: string | undefined
  encryptedCardNumber?: string | undefined
  merchantAccount: string
  merchantDetails?: MerchantDetails | undefined
  recurring?: Recurring | undefined
  selectedRecurringDetailReference?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperReference?: string | undefined
}
type CardBin = {
  bin?: string | undefined
  commercial?: boolean | undefined
  fundingSource?: string | undefined
  fundsAvailability?: string | undefined
  issuerBin?: string | undefined
  issuingBank?: string | undefined
  issuingCountry?: string | undefined
  issuingCurrency?: string | undefined
  paymentMethod?: string | undefined
  payoutEligible?: string | undefined
  summary?: string | undefined
}
type CostEstimateResponse = {
  cardBin?: CardBin | undefined
  costEstimateAmount?: Amount | undefined
  costEstimateReference?: string | undefined
  resultCode?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/get3dsAvailability': {
      $post:
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ThreeDSAvailabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ThreeDSAvailabilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getCostEstimate': {
      $post:
        | {
            input: { json: CostEstimateRequest }
            output: CostEstimateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CostEstimateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CostEstimateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CostEstimateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CostEstimateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CostEstimateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
