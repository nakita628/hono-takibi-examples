type OpenIdConfiguration = { jwks_uri?: string | undefined }
type Error = { code: 1000 | 10001; message: string }
type ErrorResponse = { error?: Error | undefined }
type IdentifierType = 'MOBILE' | 'MR' | 'NDHM_HEALTH_NUMBER' | 'HEALTH_ID'
type Identifier = { type: IdentifierType; value: string }
type TimestampSchema = string
type PatientDiscoveryRequest = {
  patient: {
    gender: 'M' | 'F' | 'O' | 'U'
    id: string
    name: string
    unverifiedIdentifiers?: Identifier[] | undefined
    verifiedIdentifiers: Identifier[]
    yearOfBirth: number
  }
  requestId: string
  timestamp: TimestampSchema
  transactionId: string
}
type CareContextRepresentation = { display: string; referenceNumber: string }
type PatientRepresentation = {
  careContexts: CareContextRepresentation[]
  display: string
  matchedBy?: IdentifierType[] | undefined
  referenceNumber: string
}
type RequestReference = { requestId: string }
type PatientDiscoveryResult = {
  error?: Error | undefined
  patient?: PatientRepresentation | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
  transactionId: string
}
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
type HITypeEnum = 'OPConsultation' | 'Prescription' | 'DischargeSummary' | 'DiagnosticReport'
type ConsentManagerPatientID = { id: string }
type Permission = {
  accessMode: 'VIEW' | 'STORE' | 'QUERY' | 'STREAM'
  dataEraseAt: string
  dateRange: { from: string; to: string }
  frequency: {
    repeats?: number | undefined
    unit?: 'HOUR' | 'WEEK' | 'DAY' | 'MONTH' | 'YEAR' | undefined
    value?: number | undefined
  }
}
type UsePurpose = { code: string; refUri?: string | undefined; text: string }
type ConsentStatus = 'GRANTED' | 'EXPIRED' | 'DENIED' | 'REQUESTED' | 'REVOKED'
type HIPConsentNotification = {
  notification: {
    consentDetail: {
      careContexts: { careContextReference: string; patientReference: string }[]
      consentId: string
      consentManager: { id: string }
      createdAt: string
      hiTypes: HITypeEnum[]
      hip: { id: string }
      patient: ConsentManagerPatientID
      permission: Permission
      purpose: UsePurpose
      schemaVersion?: string | undefined
    }
    consentId: string
    signature: string
    status: ConsentStatus
  }
  requestId: string
  timestamp: TimestampSchema
}
type ConsentAcknowledgement = { consentId: string; status: 'OK' | 'UNKNOWN' }
type HIPConsentNotificationResponse = {
  acknowledgement?: ConsentAcknowledgement | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type HIPHealthInformationRequestAcknowledgement = {
  error?: Error | undefined
  hiRequest?: { sessionStatus: 'ACKNOWLEDGED'; transactionId: string } | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type Consent = { id: string }
type DateRange = { from: string; to: string }
type KeyObject = { expiry: string; keyValue: string; parameters: string }
type KeyMaterial = { cryptoAlg: string; curve: string; dhPublicKey: KeyObject; nonce: string }
type UuidSchema = string
type HIPHealthInformationRequest = {
  hiRequest: {
    consent: Consent
    dataPushUrl: string
    dateRange: DateRange
    keyMaterial: KeyMaterial
  }
  requestId: UuidSchema
  timestamp: TimestampSchema
  transactionId: UuidSchema
}
type HealthInformationNotification = {
  notification: {
    consentId: UuidSchema
    doneAt: string
    notifier: { id?: string | undefined; type?: 'HIU' | 'HIP' | undefined }
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
type PatientCareContextLink = {
  accessToken: string
  patient: { careContexts: CareContextRepresentation[]; display: string; referenceNumber: string }
}
type PatientCareContextLinkRequest = {
  link: PatientCareContextLink
  requestId: string
  timestamp: TimestampSchema
}
type LinkConfirmationRequest = {
  confirmation: { linkRefNumber: string; token: string }
  requestId: string
  timestamp: TimestampSchema
}
type CareContext = { referenceNumber: string }
type PatientLinkReferenceRequest = {
  patient: { careContexts: CareContext[]; id: string; referenceNumber: string }
  requestId: string
  timestamp: TimestampSchema
  transactionId: string
}
type PatientCareContextLinkResponse = {
  acknowledgement?: { status: 'SUCCESS' } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type PatientLinkResult = {
  error?: Error | undefined
  patient?:
    | { careContexts: CareContextRepresentation[]; display: string; referenceNumber: string }
    | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type Meta = {
  communicationExpiry?: string | undefined
  communicationHint?: string | undefined
  communicationMedium: 'MOBILE' | 'EMAIL'
}
type PatientLinkReferenceResult = {
  error?: Error | undefined
  link?:
    | {
        authenticationType: 'DIRECT' | 'MEDIATED'
        meta?: Meta | undefined
        referenceNumber: string
      }
    | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
  transactionId: UuidSchema
}
type ShareProfileAcknowledgement = { healthId: string; status: 'SUCCESS' | 'FAILURE' }
type ShareProfileResult = {
  acknowledgement: ShareProfileAcknowledgement
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type PatientAddress = {
  district?: string | undefined
  line?: string | undefined
  pincode?: string | undefined
  state?: string | undefined
}
type PatientGender = 'M' | 'F' | 'O' | 'U'
type ShareProfileRequest = {
  patient: {
    hipCode?: string | undefined
    userDemographics: {
      address?: PatientAddress | undefined
      dayOfBirth?: number | undefined
      gender: PatientGender
      healthId: string
      healthIdNumber: string
      identifiers?: Identifier[] | undefined
      monthOfBirth?: number | undefined
      name: string
      yearOfBirth: number
    }
  }
  requestId: string
  timestamp: TimestampSchema
}
type PatientSMSNotifcationRequest = {
  notification: {
    careContextInfo: string
    deeplinkUrl?: string | undefined
    hip: { id: string; name?: string | undefined }
    phoneNo: string
    receiverName?: string | undefined
  }
  requestId: string
  timestamp: TimestampSchema
}
type PatientSMSNotifcationResponse = {
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  status?: 'ACKNOWLEDGED' | 'ERRORED' | undefined
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
    '/v0.5/care-contexts/discover': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientDiscoveryRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/care-contexts/on-discover': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientDiscoveryResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
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
    '/v0.5/consents/hip/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPConsentNotification
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPConsentNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPConsentNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPConsentNotification
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPConsentNotification
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/hip/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPConsentNotificationResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPConsentNotificationResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/hip/on-request': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/hip/request': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: HIPHealthInformationRequest
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
    '/v0.5/links/link/add-contexts': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientCareContextLinkRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/confirm': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: LinkConfirmationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientLinkReferenceRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/on-add-contexts': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientCareContextLinkResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/on-confirm': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/on-init': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientLinkReferenceResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/profile/on-share': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: ShareProfileResult
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/profile/share': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: ShareProfileRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/sms/notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-CM-ID': string } } & {
              json: PatientSMSNotifcationRequest
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/sms/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string; 'X-HIP-ID': string } } & {
              json: PatientSMSNotifcationResponse
            }
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
