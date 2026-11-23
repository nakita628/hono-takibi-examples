type AccountType = 'CURRENT' | 'SAVINGS' | 'BUSINESS' | 'CREDIT_CARD' | 'LOAN' | 'UNKNOWN'
type ACHAccountIdentifier = {
  accountLastDigits?: string | undefined
  accountNumber: string
  isTokenized?: boolean | undefined
  routingNumber: string
}
type BACSAccountIdentifier = { accountNumber: string; sortCode: string }
type BSBAccountIdentifier = { accountNumber: string; bsbCode: string }
type EFTAccountIdentifier = { accountNumber: string; branch: string; institution: string }
type IBANAccountIdentifier = { bban: string; bic: string; iban: string }
type RIXAccountIdentifier = { accountNumber: string; clearingNumber: string }
type AccountIdentifiers = {
  ach?: ACHAccountIdentifier | undefined
  bacs?: BACSAccountIdentifier | undefined
  bsb?: BSBAccountIdentifier | undefined
  eft?: EFTAccountIdentifier | undefined
  iban?: IBANAccountIdentifier | undefined
  rix?: RIXAccountIdentifier | undefined
}
type Identity = { fullLegalName: string; name: string }
type PartyRole = 'HOLDER' | 'AUTHORIZED_USER' | 'OTHER' | 'UNKNOWN'
type AccountParty = { identity: Identity; role: PartyRole }
type VerifiedAccount = {
  accountId: string
  accountName: string
  accountNumber: string
  accountType: AccountType
  bankName?: string | undefined
  currency: string
  identifiers: AccountIdentifiers
  parties: AccountParty[]
}
type AccountVerificationCountry =
  | 'SE'
  | 'FI'
  | 'NO'
  | 'DK'
  | 'NL'
  | 'IT'
  | 'DE'
  | 'AT'
  | 'ES'
  | 'PT'
  | 'FR'
  | 'GB'
  | 'BE'
  | 'LV'
  | 'LT'
  | 'PL'
  | 'EE'
  | 'IE'
  | 'US'
  | 'CA'
  | 'AU'
type AccountVerificationReportResponse = {
  accounts: VerifiedAccount[]
  country: AccountVerificationCountry
  id: string
}
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
type AccountVerificationRoutesRequest = {
  country: AccountVerificationCountry
  locale?: string | undefined
  redirectUrl: string
  state?: string | undefined
}
type Provider = { logoURL: string; name: string }
type Route = { link: string; provider: Provider }
type AccountVerificationRoutesResponse = { routes: Route[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accountVerification/reports/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: AccountVerificationReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { code: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountVerification/routes': {
      $post:
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: AccountVerificationRoutesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: AccountVerificationRoutesRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
