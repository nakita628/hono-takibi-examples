type OpenIdConfiguration = { jwks_uri?: string | undefined }
type Error = { code: 1000 | 10001; message: string }
type ErrorResponse = { error?: Error | undefined }
type CertificateOrKeyGetSchema = {
  alg?: string | undefined
  e?: string | undefined
  kid?: string | undefined
  kty?: string | undefined
  n?: string | undefined
  use?: string | undefined
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
}
type Certs = { keys?: CertificateOrKeyGetSchema[] | undefined }
type CareContextDefinition = { careContextReference: string; patientReference: string }
type HITypeEnum = 'OPConsultation' | 'Prescription' | 'DischargeSummary' | 'DiagnosticReport'
type Permission = {
  accessMode: 'VIEW' | 'STORE' | 'QUERY' | 'STREAM'
  dataEraseAt: string
  dateRange: { from: string; to: string }
  frequency: { repeats: number; unit: 'HOUR' | 'WEEK' | 'DAY' | 'MONTH' | 'YEAR'; value: number }
}
type UsePurpose = { code: string; refUri?: string | undefined; text: string }
type Requester = {
  identifier?: { system?: string | undefined; type: string; value: string } | undefined
  name: string
}
type TimestampSchema = string
type ConsentRequest = {
  consent: {
    careContexts?: CareContextDefinition[] | undefined
    hiTypes: HITypeEnum[]
    hip?: { id: string } | undefined
    hiu: { id: string }
    patient: { id: string }
    permission: Permission
    purpose: UsePurpose
    requester: Requester
  }
  requestId: string
  timestamp: TimestampSchema
}
type RequestReference = { requestId: string }
type ConsentRequestInitResponse = {
  consentRequest?: { id: string } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type ConsentArtefactReference = { id: string }
type ConsentStatus = 'GRANTED' | 'EXPIRED' | 'DENIED' | 'REQUESTED' | 'REVOKED'
type HIUConsentRequestStatus = {
  consentRequest?:
    | { consentArtefacts: ConsentArtefactReference[]; id: string; status: ConsentStatus }
    | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type ConsentRequestStatusRequest = {
  consentRequestId: string
  requestId: string
  timestamp: TimestampSchema
}
type ConsentFetchRequest = { consentId: string; requestId: string; timestamp: TimestampSchema }
type HIUConsentNotificationEvent = {
  notification: {
    consentArtefacts?: ConsentArtefactReference[] | undefined
    consentRequestId: string
    status: ConsentStatus
  }
  requestId: string
  timestamp: TimestampSchema
}
type ConsentAcknowledgement = { consentId: string; status: 'OK' | 'UNKNOWN' }
type HIUConsentNotificationResponse = {
  acknowledgement?: ConsentAcknowledgement[] | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type ConsentManagerPatientID = { id: string }
type ConsentArtefactResponse = {
  consent?:
    | {
        consentDetail: {
          careContexts: { careContextReference: string; patientReference: string }[]
          consentId: string
          consentManager: { id: string }
          createdAt: string
          hiTypes: HITypeEnum[]
          hip: { id: string }
          hiu: { id: string }
          patient: ConsentManagerPatientID
          permission: Permission
          purpose: UsePurpose
          requester: Requester
          schemaVersion?: string | undefined
        }
        signature: string
        status: ConsentStatus
      }
    | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type Consent = { id: string }
type DateRange = { from: string; to: string }
type KeyObject = { expiry: string; keyValue: string; parameters: string }
type KeyMaterial = { cryptoAlg: string; curve: string; dhPublicKey: KeyObject; nonce: string }
type UuidSchema = string
type HIRequest = {
  hiRequest: {
    consent: Consent
    dataPushUrl: string
    dateRange: DateRange
    keyMaterial: KeyMaterial
  }
  requestId: UuidSchema
  timestamp: TimestampSchema
}
type HIUHealthInformationRequestResponse = {
  error?: Error | undefined
  hiRequest?: { sessionStatus: 'REQUESTED' | 'ACKNOWLEDGED'; transactionId: UuidSchema } | undefined
  requestId: UuidSchema
  resp: RequestReference
  timestamp: TimestampSchema
}
type HealthInformationNotification = {
  notification: {
    consentId: UuidSchema
    doneAt: string
    notifier: { id: string; type: 'HIU' | 'HIP' }
    statusNotification: {
      hipId: string
      sessionStatus: 'TRANSFERRED' | 'FAILED'
      statusResponses?:
        | {
            careContextReference: string
            description?: string | undefined
            hiStatus: 'DELIVERED' | 'OK' | 'ERRORED'
          }[]
        | undefined
    }
    transactionId: UuidSchema
  }
  requestId: string
  timestamp: TimestampSchema
}
type EntryContent = {
  careContextReference: string
  checksum: string
  content: string
  media: 'application/fhir+json'
}
type EntryLink = {
  careContextReference: string
  checksum: string
  link: string
  media: 'application/fhir+json'
}
type DataNotification = {
  entries: (EntryContent | EntryLink)[]
  keyMaterial: KeyMaterial
  pageCount: number
  pageNumber: number
  transactionId: string
}
type HeartbeatResponse = {
  error?: Error | undefined
  status: 'UP' | 'DOWN'
  timestamp: TimestampSchema
}
type PatientIdentificationRequest = {
  query: { patient: { id: string }; requester: { id: string; type: 'HIU' | 'HIP' } }
  requestId: string
  timestamp: TimestampSchema
}
type PatientIdentificationResponse = {
  error?: Error | undefined
  patient?: { id: string; name: string } | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type SessionRequest = { clientId: string; clientSecret: string }
type SessionResponse = {
  accessToken?: string | undefined
  expiresIn?: number | undefined
  refreshExpiresIn?: number | undefined
  refreshToken?: string | undefined
  tokenType?: string | undefined
}
type SubscriptionCategory = 'LINK'
type OrganizationRepresentation = { id: string }
type SubscriptionPeriod = { from: string; to: string }
type SubscriptionRequest = {
  requestId: string
  subscription: {
    categories: SubscriptionCategory[]
    hips?: OrganizationRepresentation[] | undefined
    hiu: OrganizationRepresentation
    patient: ConsentManagerPatientID
    period: SubscriptionPeriod
    purpose: UsePurpose
  }
  timestamp: TimestampSchema
}
type SubscriptionStatus = 'GRANTED' | 'DENIED'
type HIUSubscriptionContext = {
  categories: SubscriptionCategory[]
  hip?: OrganizationRepresentation | undefined
  period: SubscriptionPeriod
}
type HIUSubscription = {
  hiu: OrganizationRepresentation
  id: string
  patient: ConsentManagerPatientID
  sources: HIUSubscriptionContext[]
}
type SubscriptionApprovalNotification = {
  notification: {
    status: SubscriptionStatus
    subscription?: HIUSubscription | undefined
    subscriptionRequestId?: string | undefined
  }
  requestId: string
  timestamp: TimestampSchema
}
type HIUSubscriptionRequestReceipt = {
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  subscriptionRequest?: { id: string } | undefined
  timestamp: TimestampSchema
}
type HIUSubscriptionRequestNotificationAcknowledgement = {
  acknowledgement?: { status: 'OK'; subscriptionRequestId: string } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type EventCategoryDetail = { careContext: CareContextDefinition; hiTypes: HITypeEnum[] }
type HIUSubscriptionEventContent = {
  context: EventCategoryDetail[]
  hip: OrganizationRepresentation
  patient: ConsentManagerPatientID
}
type HIUSubscriptionNotification = {
  event: {
    category: SubscriptionCategory
    content: HIUSubscriptionEventContent
    id: UuidSchema
    published: TimestampSchema
    subscriptionId: string
  }
  requestId: string
  timestamp: TimestampSchema
}
type HIUSubscriptionNotificationAcknowledgment = {
  acknowledgement?: { eventId: string; status: 'OK' } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type PatientGender = 'M' | 'F' | 'O' | 'U'
type AuthConfirmIdentifierType = 'MOBILE'
type AuthConfirmIdentifier = { type: AuthConfirmIdentifierType; value: string }
type PatientDemographic = {
  dateOfBirth: string
  gender: PatientGender
  identifier?: AuthConfirmIdentifier | undefined
  name: string
}
type PatientAuthConfirmRequest = {
  credential: { authCode?: string | undefined; demographic?: PatientDemographic | undefined }
  requestId: string
  timestamp: TimestampSchema
  transactionId: string
}
type PatientAuthPurpose = 'LINK' | 'KYC' | 'KYC_AND_LINK'
type PatientAuthModeQueryRequest = {
  query: { id: string; purpose: PatientAuthPurpose; requester: { id: string; type: 'HIP' | 'HIU' } }
  requestId: string
  timestamp: TimestampSchema
}
type AuthenticationMode = 'MOBILE_OTP' | 'DIRECT' | 'DEMOGRAPHICS' | 'AADHAAR_OTP'
type PatientAuthInitRequest = {
  query: {
    authMode?: AuthenticationMode | undefined
    id: string
    purpose: PatientAuthPurpose
    requester: { id: string; type: 'HIP' | 'HIU' }
  }
  requestId: string
  timestamp: TimestampSchema
}
type PatientAddress = {
  district?: string | undefined
  line?: string | undefined
  pincode?: string | undefined
  state?: string | undefined
}
type IdentifierType = 'MOBILE' | 'MR' | 'NDHM_HEALTH_NUMBER' | 'HEALTH_ID'
type Identifier = { type?: IdentifierType | undefined; value?: string | undefined }
type PatientDemographicResponse = {
  address?: PatientAddress | undefined
  gender: PatientGender
  id: string
  identifiers?: Identifier[] | undefined
  name: string
  yearOfBirth: number
}
type PatientAuthRequester = { id: string; type: 'HIP' | 'HIU' }
type AccessTokenValidity = {
  expiry: TimestampSchema
  limit: number
  purpose: PatientAuthPurpose
  requester: PatientAuthRequester
}
type PatientAuthNotification = {
  auth?:
    | {
        accessToken?: string | undefined
        patient?: PatientDemographicResponse | undefined
        status: 'GRANTED' | 'DENIED'
        transactionId: string
        validity?: AccessTokenValidity | undefined
      }
    | undefined
  requestId: string
  timestamp: TimestampSchema
}
type PatientAuthConfirmResponse = {
  auth?:
    | {
        accessToken?: string | undefined
        patient?: PatientDemographicResponse | undefined
        validity?: AccessTokenValidity | undefined
      }
    | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type PatientAuthModeQueryResponse = {
  auth?: { modes: AuthenticationMode[]; purpose: PatientAuthPurpose } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type AuthMeta = { expiry?: string | undefined; hint?: string | undefined }
type PatientAuthInitResponse = {
  auth?:
    | { meta?: AuthMeta | undefined; mode: AuthenticationMode; transactionId: string }
    | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type PatientAuthNotificationAcknowledgement = {
  acknowledgement?: { status: 'OK' } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v0.5/.well-known/openid-configuration': {
      $get:
        | { input: {}; output: OpenIdConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: OpenIdConfiguration; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/v0.5/certs': {
      $get:
        | { input: {}; output: Certs; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Certs; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 404 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 500 }
        | { input: {}; output: ErrorResponse; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/v0.5/consent-requests/init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consent-requests/on-init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentRequestInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consent-requests/on-status': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentRequestStatus
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consent-requests/status': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentRequestStatusRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/fetch': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ConsentFetchRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/hiu/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentNotificationEvent
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentNotificationEvent
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentNotificationEvent
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentNotificationEvent
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUConsentNotificationEvent
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/hiu/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUConsentNotificationResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/on-fetch': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: ConsentArtefactResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/cm/request': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/hiu/on-request': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUHealthInformationRequestResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HealthInformationNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/transfer': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: DataNotification }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: DataNotification }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: DataNotification }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: DataNotification }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: DataNotification }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/heartbeat': {
      $get:
        | { input: {}; output: HeartbeatResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HeartbeatResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v0.5/patients/find': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientIdentificationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/on-find': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/sessions': {
      $post:
        | {
            input: { json: SessionRequest }
            output: SessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SessionRequest }
            output: SessionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/cm/init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: SubscriptionRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/hiu/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: SubscriptionApprovalNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/hiu/on-init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionRequestReceipt
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionRequestReceipt
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionRequestReceipt
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionRequestReceipt
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionRequestReceipt
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/hiu/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscriptions/hiu/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIU-ID': string } } & {
              json: HIUSubscriptionNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscriptions/hiu/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/confirm': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthConfirmRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/fetch-modes': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthModeQueryRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthInitRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/on-confirm': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthConfirmResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/on-fetch-modes': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthModeQueryResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/on-init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string; 'X-HIU-ID': string } } & {
              json: PatientAuthInitResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
