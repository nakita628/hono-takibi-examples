type Error = { code: 1000 | 10001; message: string }
type CareContextRepresentation = { display: string; referenceNumber: string }
type IdentifierType = 'MOBILE' | 'MR'
type PatientRepresentation = {
  careContexts: CareContextRepresentation[]
  display: string
  matchedBy?: IdentifierType[] | undefined
  referenceNumber: string
}
type RequestReference = { requestId: string }
type TimestampSchema = string
type PatientDiscoveryResult = {
  error?: Error | undefined
  patient?: PatientRepresentation | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
  transactionId: string
}
type ErrorResponse = { error?: Error | undefined }
type CareContextDefinition = { careContextReference: string; patientReference: string }
type HITypeEnum = 'OPConsultation' | 'Prescription' | 'DischargeSummary' | 'DiagnosticReport'
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
type Requester = {
  identifier?: { system?: string | undefined; type: string; value: string } | undefined
  name: string
}
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
type ConsentRequestStatusRequest = {
  consentRequestId: string
  requestId: string
  timestamp: TimestampSchema
}
type ConsentFetchRequest = { consentId: string; requestId: string; timestamp: TimestampSchema }
type ConsentAcknowledgement = { consentId: string; status: 'OK' | 'UNKNOWN' }
type HIPConsentNotificationResponse = {
  acknowledgement?: ConsentAcknowledgement | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type HIUConsentNotificationResponse = {
  acknowledgement?: ConsentAcknowledgement[] | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type UuidSchema = string
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
type HeartbeatResponse = {
  error?: Error | undefined
  status?: 'UP' | 'DOWN' | undefined
  timestamp?: TimestampSchema | undefined
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
type PatientIdentificationRequest = {
  query: { patient: { id: string }; requester: { id: string; type: 'HIU' | 'HIP' } }
  requestId: string
  timestamp: TimestampSchema
}
type ShareProfileAcknowledgement = { healthId: string; status: 'SUCCESS' | 'FAILURE' }
type ShareProfileResult = {
  acknowledgement: ShareProfileAcknowledgement
  error?: Error | undefined
  requestId: string
  resp: RequestReference
  timestamp: TimestampSchema
}
type SubscriptionCategory = 'LINK'
type OrganizationRepresentation = { id: string }
type ConsentManagerPatientID = { id: string }
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
type HIUSubscriptionRequestNotificationAcknowledgement = {
  acknowledgement?: { status: 'OK'; subscriptionRequestId: string } | undefined
  error?: Error | undefined
  requestId: string
  resp: RequestReference
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
type PatientAuthRequester = { id: string; type: 'HIP' | 'HIU' }
type PatientAuthInitRequest = {
  query: {
    authMode?: AuthenticationMode | undefined
    id: string
    purpose: PatientAuthPurpose
    requester: PatientAuthRequester
  }
  requestId: string
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
    '/v0.5/care-contexts/on-discover': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientDiscoveryResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consent-requests/init': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consent-requests/status': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentRequestStatusRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/fetch': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: ConsentFetchRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/hip/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: HIPConsentNotificationResponse }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: HIPConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIPConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIPConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: HIPConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/consents/hiu/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: HIUConsentNotificationResponse }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: HIUConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIUConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIUConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: HIUConsentNotificationResponse }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/notify': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: HealthInformationNotification }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/on-request': {
      $post:
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIPHealthInformationRequestAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/health-information/request': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: HIRequest }
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
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientCareContextLinkRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/on-confirm': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/links/link/on-init': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientLinkReferenceResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/find': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientIdentificationRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/patients/profile/on-share': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: ShareProfileResult }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/cm/init': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/subscription-requests/hiu/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionRequestNotificationAcknowledgement
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
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: HIUSubscriptionNotificationAcknowledgment
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & {
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
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthConfirmRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/fetch-modes': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthModeQueryRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/init': {
      $post:
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & { json: PatientAuthInitRequest }
            output: ErrorResponse
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v0.5/users/auth/on-notify': {
      $post:
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { header: { Authorization: string } } & {
              json: PatientAuthNotificationAcknowledgement
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { Authorization: string } } & {
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
