type AvsAddress = { streetAddress: string; zip?: string | undefined }
type TestCardRange = {
  address?: AvsAddress | undefined
  cardHolderName: string
  cvc?: string | undefined
  expiryMonth:
    | 'APRIL'
    | 'AUGUST'
    | 'DECEMBER'
    | 'FEBRUARY'
    | 'JANUARY'
    | 'JULY'
    | 'JUNE'
    | 'MARCH'
    | 'MAY'
    | 'NOVEMBER'
    | 'OCTOBER'
    | 'SEPTEMBER'
  expiryYear: number
  rangeEnd: string
  rangeStart: string
  threeDDirectoryServerResponse?: 'N' | 'U' | 'Y' | undefined
  threeDPassword?: string | undefined
  threeDUsername?: string | undefined
}
type CreateTestCardRangesRequest = {
  accountCode: string
  accountTypeCode: string
  testCardRanges: TestCardRange[]
}
type TestCardRangeCreationResult = {
  cardNumberRangeEnd: string
  cardNumberRangeStart: string
  creationResultCode: 'ALREADY_EXISTS' | 'CREATED' | 'ERROR'
  message?: string | undefined
}
type CreateTestCardRangesResult = { rangeCreationResults: TestCardRangeCreationResult[] }
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createTestCardRanges': {
      $post:
        | {
            input: { json: CreateTestCardRangesRequest }
            output: CreateTestCardRangesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateTestCardRangesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateTestCardRangesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateTestCardRangesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateTestCardRangesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateTestCardRangesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
