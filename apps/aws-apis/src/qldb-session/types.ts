type SendCommandRequest = {
  SessionToken?: {} | undefined
  StartSession?: { LedgerName: {} } | undefined
  StartTransaction?: {} | undefined
  EndSession?: {} | undefined
  CommitTransaction?: { TransactionId: {}; CommitDigest: {} } | undefined
  AbortTransaction?: {} | undefined
  ExecuteStatement?: { TransactionId: {}; Statement: {}; Parameters?: {} | undefined } | undefined
  FetchPage?: { TransactionId: {}; NextPageToken: {} } | undefined
}
type SendCommandResult = {
  StartSession?:
    | {
        SessionToken?: {} | undefined
        TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined
      }
    | undefined
  StartTransaction?:
    | {
        TransactionId?: {} | undefined
        TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined
      }
    | undefined
  EndSession?:
    | { TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined }
    | undefined
  CommitTransaction?:
    | {
        TransactionId?: {} | undefined
        CommitDigest?: {} | undefined
        TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined
        ConsumedIOs?: { ReadIOs?: {} | undefined; WriteIOs?: {} | undefined } | undefined
      }
    | undefined
  AbortTransaction?:
    | { TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined }
    | undefined
  ExecuteStatement?:
    | {
        FirstPage?: { Values?: {} | undefined; NextPageToken?: {} | undefined } | undefined
        TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined
        ConsumedIOs?: { ReadIOs?: {} | undefined; WriteIOs?: {} | undefined } | undefined
      }
    | undefined
  FetchPage?:
    | {
        Page?: { Values?: {} | undefined; NextPageToken?: {} | undefined } | undefined
        TimingInformation?: { ProcessingTimeMilliseconds?: {} | undefined } | undefined
        ConsumedIOs?: { ReadIOs?: {} | undefined; WriteIOs?: {} | undefined } | undefined
      }
    | undefined
}
type BadRequestException = { [x: string]: unknown }
type InvalidSessionException = { [x: string]: unknown }
type OccConflictException = { [x: string]: unknown }
type RateExceededException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type CapacityExceededException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=QLDBSession.SendCommand': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: SendCommandResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: InvalidSessionException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: OccConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: RateExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'QLDBSession.SendCommand'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SendCommandRequest }
            output: CapacityExceededException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
