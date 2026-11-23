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
type MarkRecordingAsReadyRequest = { engagementId: bigint }
type SettingsResponse = {
  createdAt: string
  height: number
  isReady: boolean
  name: string
  supportsCustomObjects: boolean
  supportsInboundCalling: boolean
  updatedAt: string
  url: string
  usesCallingWindow: boolean
  usesRemote: boolean
  width: number
}
type SettingsRequest = {
  height: number
  isReady: boolean
  name: string
  supportsCustomObjects: boolean
  supportsInboundCalling: boolean
  url: string
  usesCallingWindow: boolean
  usesRemote: boolean
  width: number
}
type SettingsPatchRequest = {
  height?: number | undefined
  isReady?: boolean | undefined
  name?: string | undefined
  supportsCustomObjects?: boolean | undefined
  supportsInboundCalling?: boolean | undefined
  url?: string | undefined
  usesCallingWindow?: boolean | undefined
  usesRemote?: boolean | undefined
  width?: number | undefined
}
type ChannelConnectionSettingsResponse = {
  createdAt: string
  isReady: boolean
  updatedAt: string
  url: string
}
type ChannelConnectionSettingsRequest = { isReady: boolean; url: string }
type ChannelConnectionSettingsPatchRequest = {
  isReady?: boolean | undefined
  url?: string | undefined
}
type RecordingSettingsResponse = { urlToRetrieveAuthedRecording: string }
type RecordingSettingsRequest = { urlToRetrieveAuthedRecording: string }
type RecordingSettingsPatchRequest = { urlToRetrieveAuthedRecording?: string | undefined }
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
    '/crm/extensions/calling/2026-09/recordings/ready': {
      $post:
        | {
            input: { json: MarkRecordingAsReadyRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: MarkRecordingAsReadyRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/calling/2026-09/:appId/settings': {
      $get:
        | {
            input: { param: { appId: number } }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: SettingsRequest }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: SettingsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $patch:
        | {
            input: { param: { appId: number } } & { json: SettingsPatchRequest }
            output: SettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: SettingsPatchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/calling/2026-09/:appId/settings/channel-connection': {
      $get:
        | {
            input: { param: { appId: number } }
            output: ChannelConnectionSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: ChannelConnectionSettingsRequest }
            output: ChannelConnectionSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: ChannelConnectionSettingsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { appId: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $patch:
        | {
            input: { param: { appId: number } } & { json: ChannelConnectionSettingsPatchRequest }
            output: ChannelConnectionSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: ChannelConnectionSettingsPatchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/calling/2026-09/:appId/settings/recording': {
      $get:
        | {
            input: { param: { appId: number } }
            output: RecordingSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: RecordingSettingsRequest }
            output: RecordingSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: RecordingSettingsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { appId: number } } & { json: RecordingSettingsPatchRequest }
            output: RecordingSettingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: RecordingSettingsPatchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
