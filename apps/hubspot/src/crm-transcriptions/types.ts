type FormattedPhoneNumber = {
  e164Number: string
  extension?: string | undefined
  phoneNumberType:
    | 'FIXED_LINE'
    | 'FIXED_LINE_OR_MOBILE'
    | 'MOBILE'
    | 'PAGER'
    | 'PERSONAL_NUMBER'
    | 'PREMIUM_RATE'
    | 'SHARED_COST'
    | 'TOLL_FREE'
    | 'UAN'
    | 'UNKNOWN'
    | 'VOICEMAIL'
    | 'VOIP'
}
type CompletedThirdPartyCallRequest = {
  callStartedTimestamp?: string | undefined
  createEngagement: boolean
  durationSeconds?: number | undefined
  engagementProperties: { [x: string]: string }
  externalCallId: string
  finalCallStatus:
    | 'BUSY'
    | 'CALLING_CRM_USER'
    | 'CANCELED'
    | 'COMPLETED'
    | 'CONNECTING'
    | 'FAILED'
    | 'HOLD'
    | 'IN_PROGRESS'
    | 'MISSED'
    | 'NO_ANSWER'
    | 'QUEUED'
    | 'RINGING'
    | 'UNKNOWN'
  fromNumber: FormattedPhoneNumber
  potentialRecipientUserIds: number[]
  toNumber: FormattedPhoneNumber
  userId?: number | undefined
}
type ObjectCoordinates = { objectId: bigint; objectTypeId: string; portalId: number }
type ContactCallerId = {
  callerIdType: 'CONTACT'
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  objectCoordinates: ObjectCoordinates
}
type CompanyCallerId = {
  callerIdType: 'COMPANY'
  name?: string | undefined
  objectCoordinates: ObjectCoordinates
}
type CompletedThirdPartyCallResponse = { callerIdMatches: (ContactCallerId | CompanyCallerId)[] }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type Speaker = { email?: string | undefined; id: string; name: string }
type TranscriptCreateUtterance = {
  endTimeMillis: bigint
  languageCode?: string | undefined
  speaker: Speaker
  startTimeMillis: bigint
  text: string
}
type TranscriptCreateRequest = {
  engagementId: bigint
  transcriptCreateUtterances: TranscriptCreateUtterance[]
}
type TranscriptCreateResponse = { id: string }
type TranscriptUtterance = {
  endTimeMillis: bigint
  id: string
  languageCode?: string | undefined
  speaker?: Speaker | undefined
  startTimeMillis: bigint
  text: string
}
type TranscriptResponse = {
  createdAt: string
  engagementId: bigint
  id: string
  transcriptSource: 'HUBSPOT_GENERATED' | 'INTEGRATOR_GENERATED'
  transcriptUtterances: TranscriptUtterance[]
  updatedAt: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/extensions/calling/2026-09/inbound-call': {
      $post:
        | {
            input: { json: CompletedThirdPartyCallRequest }
            output: CompletedThirdPartyCallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompletedThirdPartyCallRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/calling/2026-09/transcripts': {
      $post:
        | {
            input: { json: TranscriptCreateRequest }
            output: TranscriptCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TranscriptCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/calling/2026-09/transcripts/:transcriptId': {
      $get:
        | {
            input: { param: { transcriptId: string } }
            output: TranscriptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transcriptId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { transcriptId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { transcriptId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
