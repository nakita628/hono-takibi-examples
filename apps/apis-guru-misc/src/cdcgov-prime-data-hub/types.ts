type Destination = {
  itemCount?: number | undefined
  organization?: string | undefined
  organization_id?: string | undefined
  sending_at?: string | undefined
  service?: string | undefined
}
type Detail = {
  detail?: string | undefined
  id?: string | undefined
  scope?: 'Parameter' | 'Report' | 'Item' | undefined
}
type ItemRouting = {
  destinations?: string[] | undefined
  reportIndex?: number | undefined
  trackingId?: string | undefined
}
type Report = {
  destinationCount?: number | undefined
  destinations?: Destination[] | undefined
  errorCount?: number | undefined
  errors?: Detail[] | undefined
  id: string
  reportItemCount?: number | undefined
  routing?: ItemRouting[] | undefined
  timestamp?: string | undefined
  topic?: string | undefined
  warningCount?: number | undefined
  warnings?: Detail[] | undefined
}
type SettingMetadata = {
  createdAt?: string | undefined
  createdBy?: string | undefined
  version?: number | undefined
}
type Organization = {
  countyName?: string | undefined
  description: string
  jurisdiction: 'National' | 'State' | 'County'
  meta?: SettingMetadata | undefined
  name: string
  stateCode?: string | undefined
}
type SFTPTransport = { filePath: string; host: string; port: number; type: string }
type AS2Transport = {
  contentDescription?: string | undefined
  mimeType?: string | undefined
  receiverId: string
  receiverUrl: string
  senderEmail?: string | undefined
  senderId: string
  type: string
}
type BlobStoreTransport = { containerName: string; storageName: string; type: string }
type NullTransport = { dummy?: string | undefined; type: string }
type CustomConfiguration = {
  format: 'CSV' | 'HL7'
  nameFormat?: string | undefined
  receivingOrganization?: string | undefined
  schemaName: string
  transport: SFTPTransport | AS2Transport | BlobStoreTransport | NullTransport
  type: string
}
type StandardHL7Configuration = {
  convertTimestampToDateTime?: string | undefined
  defaultAoeToUnknown?: boolean | undefined
  includeAOE: boolean
  nameFormat?: string | undefined
  phoneNumberFormatting?:
    | 'STANDARD'
    | 'ONLY_DIGITS_IN_COMPONENT_ONE'
    | 'AREA_LOCAL_IN_COMPONENT_ONE'
    | undefined
  receivingApplicationName?: string | undefined
  receivingApplicationOID?: string | undefined
  receivingFacilityName?: string | undefined
  receivingFacilityOID?: string | undefined
  receivingOrganization?: string | undefined
  reportingFacilityId?: string | undefined
  reportingFacilityIdType?: string | undefined
  reportingFacilityName?: string | undefined
  suppressAoe?: boolean | undefined
  suppressHl7Fields?: string | undefined
  suppressQstForAoe?: boolean | undefined
  transport: SFTPTransport | AS2Transport | BlobStoreTransport | NullTransport
  truncateHDNamespaceIds?: boolean | undefined
  type: string
  useBatchHeaders: boolean
  useBlankInsteadOfUnknown?: string | undefined
  usePid14ForPatientEmail?: boolean | undefined
  useTestProcessingMode?: boolean | undefined
}
type RedoxConfiguration = { [x: string]: unknown }
type Receiver = {
  description: string
  jurisdictionalFilters?:
    | {
        doesNotMatch?: boolean | undefined
        matchFields?:
          | 'FACILITY_OR_PATIENT_ADDRESS'
          | 'FACILITY_ADDRESS'
          | 'FACILITY_NAME'
          | 'ABNORMAL_VALUE'
          | undefined
        matchValues?: string[] | undefined
      }[]
    | undefined
  meta?: SettingMetadata | undefined
  name: string
  organizationName?: string | undefined
  timing: { dailyAt?: number | undefined; frequency: 'REAL_TIME' | 'HOURLY' | 'DAILY' }
  topic: string
  translations?: (CustomConfiguration | StandardHL7Configuration | RedoxConfiguration)[] | undefined
}
type Sender = {
  description: string
  format: 'CSV'
  meta?: SettingMetadata | undefined
  name: string
  organizationName?: string | undefined
  schema: string
  topic: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/reports': {
      $post:
        | {
            input: {
              query: {
                client: string
                option?:
                  | 'ValidatePayload'
                  | 'CheckConnections'
                  | 'SendImmediately'
                  | 'SkipSend'
                  | 'SkipInvalidItems'
                  | undefined
                default?: string[] | undefined
                routeTo?: string[] | undefined
              }
            } & { json: string }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client: string
                option?:
                  | 'ValidatePayload'
                  | 'CheckConnections'
                  | 'SendImmediately'
                  | 'SkipSend'
                  | 'SkipInvalidItems'
                  | undefined
                default?: string[] | undefined
                routeTo?: string[] | undefined
              }
            } & { json: string }
            output: Report
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                client: string
                option?:
                  | 'ValidatePayload'
                  | 'CheckConnections'
                  | 'SendImmediately'
                  | 'SkipSend'
                  | 'SkipInvalidItems'
                  | undefined
                default?: string[] | undefined
                routeTo?: string[] | undefined
              }
            } & { json: string }
            output: Report
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                client: string
                option?:
                  | 'ValidatePayload'
                  | 'CheckConnections'
                  | 'SendImmediately'
                  | 'SkipSend'
                  | 'SkipInvalidItems'
                  | undefined
                default?: string[] | undefined
                routeTo?: string[] | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/settings/organizations': {
      $get: { input: {}; output: Organization[]; outputFormat: 'json'; status: 200 }
      $head: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/settings/organizations/:organizationName': {
      $delete:
        | {
            input: { param: { organizationName: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get: {
        input: { param: { organizationName: string } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { organizationName: string } } & { json: Organization }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string } } & { json: Organization }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationName: string } } & { json: Organization }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string } } & { json: Organization }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/settings/organizations/:organizationName/receivers': {
      $get:
        | {
            input: { param: { organizationName: string } }
            output: Receiver[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/settings/organizations/:organizationName/receivers/:receiverName': {
      $delete:
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: Receiver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: Receiver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; receiverName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { organizationName: string; receiverName: string } } & {
              json: Receiver
            }
            output: Receiver
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; receiverName: string } } & {
              json: Receiver
            }
            output: Receiver
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationName: string; receiverName: string } } & {
              json: Receiver
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; receiverName: string } } & {
              json: Receiver
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/settings/organizations/:organizationName/senders': {
      $get:
        | {
            input: { param: { organizationName: string } }
            output: Sender[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/settings/organizations/:organizationName/senders/:senderName': {
      $delete:
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: Sender
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: Sender
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; senderName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { param: { organizationName: string; senderName: string } } & { json: Sender }
            output: Sender[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationName: string; senderName: string } } & { json: Sender }
            output: Sender[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationName: string; senderName: string } } & { json: Sender }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationName: string; senderName: string } } & { json: Sender }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
