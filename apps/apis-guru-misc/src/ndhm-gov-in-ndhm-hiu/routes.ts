import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchemaSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ' })
  .openapi('TimestampSchema')

const PatientAuthPurposeSchema = z
  .enum(['LINK', 'KYC', 'KYC_AND_LINK'])
  .openapi({ description: 'what is the purpose of user auth' })
  .openapi('PatientAuthPurpose')

const PatientAuthRequesterSchema = z
  .object({ id: z.string().openapi({ example: 100005 }), type: z.enum(['HIP', 'HIU']) })
  .openapi({ description: 'identification of requester', required: ['type', 'id'] })
  .openapi('PatientAuthRequester')

const AccessTokenValiditySchema = z
  .object({
    expiry: TimestampSchemaSchema,
    limit: z.int().openapi({ description: 'number of times, the token can be used', example: '1' }),
    purpose: PatientAuthPurposeSchema,
    requester: PatientAuthRequesterSchema,
  })
  .openapi({ required: ['purpose', 'requester', 'expiry', 'limit'] })
  .openapi('AccessTokenValidity')

const AuthConfirmIdentifierTypeSchema = z.literal('MOBILE').openapi('AuthConfirmIdentifierType')

const AuthConfirmIdentifierSchema = z
  .object({
    type: AuthConfirmIdentifierTypeSchema,
    value: z.string().openapi({ example: '+919800083232' }),
  })
  .openapi({ required: ['type', 'value'], xml: { name: 'AuthConfirmIdentifier' } })
  .openapi('AuthConfirmIdentifier')

const AuthMetaSchema = z
  .object({
    expiry: z.string().exactOptional().openapi({ example: '2019-12-30T12:01:55Z' }),
    hint: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Meta' }, required: [] })
  .openapi('AuthMeta')

const AuthenticationModeSchema = z
  .enum(['MOBILE_OTP', 'DIRECT', 'DEMOGRAPHICS', 'AADHAAR_OTP'])
  .openapi({
    description:
      'Subjected to CM specific capability\n 1. MOBILE_OTP - for SMS OTP\n 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS\n 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number\n 4. DEMOGRAPHICS - for auth using demographic verification.\n',
  })
  .openapi('AuthenticationMode')

const CareContextDefinitionSchema = z
  .object({
    careContextReference: z.string().openapi({ example: 'Episode1' }),
    patientReference: z.string().openapi({ example: 'batman@tmh' }),
  })
  .openapi({ required: ['patientReference', 'careContextReference'] })
  .openapi('CareContextDefinition')

const CertificateOrKeyGetSchemaSchema = z
  .object({
    alg: z.string().exactOptional(),
    e: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    kty: z.string().exactOptional(),
    n: z.string().exactOptional(),
    use: z.string().exactOptional(),
    x5c: z
      .array(z.string().openapi({ description: 'A PKIX certificate [RFC5280]' }))
      .exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificateOrKeyGetSchema')

const CertsSchema = z
  .object({ keys: z.array(CertificateOrKeyGetSchemaSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Certs')

const ConsentAcknowledgementSchema = z
  .object({
    consentId: z.string().openapi({ example: '<consent-artefact-id>' }),
    status: z.enum(['OK', 'UNKNOWN']),
  })
  .openapi({ required: ['status', 'consentId'] })
  .openapi('ConsentAcknowledgement')

const ConsentArtefactReferenceSchema = z
  .object({ id: z.string().openapi({ example: '<consent-artefact-id>' }) })
  .openapi({ required: ['id'] })
  .openapi('ConsentArtefactReference')

const OrganizationRepresentationSchema = z
  .object({ id: z.string().openapi({ xml: { attribute: true } }) })
  .openapi({ required: ['id'], xml: { name: 'OrganizationResponse' } })
  .openapi('OrganizationRepresentation')

const HITypeEnumSchema = z
  .enum(['OPConsultation', 'Prescription', 'DischargeSummary', 'DiagnosticReport'])
  .openapi({ xml: { name: 'HIType' } })
  .openapi('HITypeEnum')

const ConsentManagerPatientIDSchema = z
  .object({ id: z.string().openapi({ example: 'hinapatel@ndhm', xml: { attribute: true } }) })
  .openapi({ required: ['id'] })
  .openapi('ConsentManagerPatientID')

const PermissionSchema = z
  .object({
    accessMode: z.enum(['VIEW', 'STORE', 'QUERY', 'STREAM']),
    dataEraseAt: z.iso.datetime({ offset: true }),
    dateRange: z
      .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
      .openapi({ required: ['from', 'to'] }),
    frequency: z
      .object({
        repeats: z.int(),
        unit: z.enum(['HOUR', 'WEEK', 'DAY', 'MONTH', 'YEAR']),
        value: z.int(),
      })
      .openapi({ required: ['unit', 'value', 'repeats'] }),
  })
  .openapi({
    required: ['accessMode', 'dateRange', 'dataEraseAt', 'frequency'],
    xml: { name: 'Permission' },
  })
  .openapi('Permission')

const UsePurposeSchema = z
  .object({
    code: z.string().openapi({ description: 'From the fixed set, documented at refUri' }),
    refUri: z.url().exactOptional(),
    text: z.string(),
  })
  .openapi({ required: ['text', 'code'] })
  .openapi('UsePurpose')

const RequesterSchema = z
  .object({
    identifier: z
      .object({
        system: z.string().exactOptional().openapi({ example: 'https://www.mciindia.org' }),
        type: z.string().openapi({ example: 'REGNO' }),
        value: z.string().openapi({ example: 'MH1001' }),
      })
      .exactOptional()
      .openapi({ required: ['type', 'value'] }),
    name: z.string().openapi({ example: 'Dr. Manju' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Requester')

const ConsentStatusSchema = z
  .enum(['GRANTED', 'EXPIRED', 'DENIED', 'REQUESTED', 'REVOKED'])
  .openapi('ConsentStatus')

const ErrorSchema = z
  .object({ code: z.union([z.literal(1000), z.literal(10001)]), message: z.string() })
  .openapi({ required: ['code', 'message'], xml: { name: 'Error' } })
  .openapi('Error')

const RequestReferenceSchema = z
  .object({ requestId: z.uuid().openapi({ description: 'the requestId that was passed' }) })
  .openapi({ required: ['requestId'] })
  .openapi('RequestReference')

const ConsentArtefactResponseSchema = z
  .object({
    consent: z
      .object({
        consentDetail: z
          .object({
            careContexts: z.array(
              z
                .object({
                  careContextReference: z.string().openapi({ example: 'Episode1' }),
                  patientReference: z.string().openapi({ example: 'hinapatel79@hospital' }),
                })
                .openapi({ required: ['patientReference', 'careContextReference'] }),
            ),
            consentId: z.uuid(),
            consentManager: OrganizationRepresentationSchema.and(
              z.any().openapi({ xml: { name: 'consentManager' } }),
            ),
            createdAt: z.iso.datetime({ offset: true }),
            hiTypes: z.array(HITypeEnumSchema),
            hip: OrganizationRepresentationSchema.and(z.any().openapi({ xml: { name: 'hip' } })),
            hiu: OrganizationRepresentationSchema.and(z.any().openapi({ xml: { name: 'hiu' } })),
            patient: ConsentManagerPatientIDSchema,
            permission: PermissionSchema,
            purpose: UsePurposeSchema,
            requester: RequesterSchema,
            schemaVersion: z.string().exactOptional(),
          })
          .openapi({
            required: [
              'consentId',
              'createdAt',
              'patient',
              'careContexts',
              'purpose',
              'hip',
              'hiu',
              'consentManager',
              'requester',
              'permission',
              'hiTypes',
            ],
          }),
        signature: z
          .string()
          .openapi({ example: 'Signature of CM as defined in W3C standards; Base64 encoded' }),
        status: ConsentStatusSchema,
      })
      .exactOptional()
      .openapi({ required: ['consentDetail', 'status', 'signature'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('ConsentArtefactResponse')

const ConsentFetchRequestSchema = z
  .object({
    consentId: z.string(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['consentId', 'requestId', 'timestamp'] })
  .openapi('ConsentFetchRequest')

const ConsentRequestSchema = z
  .object({
    consent: z
      .object({
        careContexts: z.array(CareContextDefinitionSchema).exactOptional(),
        hiTypes: z.array(HITypeEnumSchema),
        hip: OrganizationRepresentationSchema.and(
          z.any().openapi({ xml: { name: 'hip' } }),
        ).exactOptional(),
        hiu: OrganizationRepresentationSchema.and(z.any().openapi({ xml: { name: 'hiu' } })),
        patient: ConsentManagerPatientIDSchema.and(z.any().openapi({ xml: { name: 'patient' } })),
        permission: PermissionSchema,
        purpose: UsePurposeSchema,
        requester: RequesterSchema,
      })
      .openapi({
        required: [
          'purpose',
          'patient',
          'hiu',
          'requester',
          'hiTypes',
          'permission',
          'consentNotificationUrl',
        ],
      }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request.',
        example: '499a5a4a-7dda-4f20-9b67-e24589627061',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'consent'] })
  .openapi('ConsentRequest')

const ConsentRequestInitResponseSchema = z
  .object({
    consentRequest: z
      .object({
        id: z
          .uuid()
          .openapi({
            description: 'id of the consent-request created',
            example: 'f29f0e59-8388-4698-9fe6-05db67aeac46',
          }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({
    required: ['requestId', 'timestamp', 'resp'],
    xml: { name: 'ConsentRequestInitResponse' },
  })
  .openapi('ConsentRequestInitResponse')

const ConsentRequestStatusRequestSchema = z
  .object({
    consentRequestId: z.string(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['consentRequestId', 'requestId', 'timestamp'] })
  .openapi('ConsentRequestStatusRequest')

const EntryContentSchema = z
  .object({
    careContextReference: z
      .string()
      .openapi({ description: 'care context reference number.', example: 'RVH1008' }),
    checksum: z.string().openapi({ description: 'Md5 checksum of the content before encryption' }),
    content: z
      .string()
      .openapi({
        description: 'Encrypted content',
        example: 'Encrypted content of data packaged in FHIR bundle',
      }),
    media: z.literal('application/fhir+json').openapi({ description: 'mimetype of the content.' }),
  })
  .openapi({ required: ['content', 'media', 'checksum', 'careContextReference'] })
  .openapi('EntryContent')

const EntryLinkSchema = z
  .object({
    careContextReference: z
      .string()
      .openapi({ description: 'care context reference number.', example: 'NCC1701' }),
    checksum: z.string().openapi({ description: 'Md5 checksum of the content before encryption' }),
    link: z
      .string()
      .openapi({
        description: 'Encrypted content',
        example: 'https://data-from.net/sa2321afaf12e13',
      }),
    media: z.literal('application/fhir+json').openapi({ description: 'mimetype of the content.' }),
  })
  .openapi({ required: ['link', 'media', 'checksum', 'careContextReference'] })
  .openapi('EntryLink')

const KeyObjectSchema = z
  .object({
    expiry: z.iso.datetime({ offset: true }),
    keyValue: z.string(),
    parameters: z.string().openapi({ example: 'Curve25519/32byte random key' }),
  })
  .openapi({ required: ['expiry', 'parameters', 'keyValue'] })
  .openapi('KeyObject')

const KeyMaterialSchema = z
  .object({
    cryptoAlg: z.string().openapi({ example: 'ECDH' }),
    curve: z.string().openapi({ example: 'Curve25519' }),
    dhPublicKey: KeyObjectSchema,
    nonce: z.string().openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
  })
  .openapi({ required: ['cryptoAlg', 'curve', 'dhPublicKey', 'nonce'] })
  .openapi('KeyMaterial')

const DataNotificationSchema = z
  .object({
    entries: z.array(z.union([EntryContentSchema, EntryLinkSchema])),
    keyMaterial: KeyMaterialSchema,
    pageCount: z.int().openapi({ description: 'Total number of pages.' }),
    pageNumber: z.int().openapi({ description: 'Current page number.' }),
    transactionId: z.uuid().openapi({ description: 'Transaction Id issued when data requested.' }),
  })
  .openapi({ required: ['transactionId', 'entries', 'keyMaterial', 'pageNumber', 'pageCount'] })
  .openapi('DataNotification')

const DateRangeSchema = z
  .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['from', 'to'] })
  .openapi('DateRange')

const ErrorResponseSchema = z
  .object({ error: ErrorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const EventCategoryDetailSchema = z
  .object({ careContext: CareContextDefinitionSchema, hiTypes: z.array(HITypeEnumSchema) })
  .openapi({ required: ['hiTypes', 'careContext'] })
  .openapi('EventCategoryDetail')

const ConsentSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('Consent')

const UuidSchemaSchema = z
  .uuid()
  .openapi({ example: 'a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d' })
  .openapi('UuidSchema')

const HIRequestSchema = z
  .object({
    hiRequest: z
      .object({
        consent: ConsentSchema,
        dataPushUrl: z.string(),
        dateRange: DateRangeSchema,
        keyMaterial: KeyMaterialSchema,
      })
      .openapi({ required: ['consent', 'dataPushUrl', 'keyMaterial', 'dateRange'] }),
    requestId: UuidSchemaSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'hiRequest'] })
  .openapi('HIRequest')

const HIUConsentNotificationEventSchema = z
  .object({
    notification: z
      .object({
        consentArtefacts: z
          .array(ConsentArtefactReferenceSchema)
          .exactOptional()
          .openapi({
            description:
              'if the status is GRANTED or REVOKED, then the consentArtefact references (Ids) must be specified.',
          }),
        consentRequestId: z.string().openapi({ example: '<consent-request-id>' }),
        status: ConsentStatusSchema,
      })
      .openapi({ required: ['status', 'consentRequestId'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'notification'] })
  .openapi('HIUConsentNotificationEvent')

const HIUConsentNotificationResponseSchema = z
  .object({
    acknowledgement: z.array(ConsentAcknowledgementSchema).exactOptional(),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('HIUConsentNotificationResponse')

const HIUConsentRequestStatusSchema = z
  .object({
    consentRequest: z
      .object({
        consentArtefacts: z.array(ConsentArtefactReferenceSchema),
        id: z.string().openapi({ example: '<consent-request-id>' }),
        status: ConsentStatusSchema,
      })
      .exactOptional()
      .openapi({ required: ['id', 'status', 'consentArtefacts'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('HIUConsentRequestStatus')

const HIUHealthInformationRequestResponseSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    hiRequest: z
      .object({
        sessionStatus: z.enum(['REQUESTED', 'ACKNOWLEDGED']),
        transactionId: UuidSchemaSchema,
      })
      .exactOptional()
      .openapi({ required: ['transactionId', 'sessionStatus'] }),
    requestId: UuidSchemaSchema,
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('HIUHealthInformationRequestResponse')

const SubscriptionCategorySchema = z.literal('LINK').openapi('SubscriptionCategory')

const SubscriptionPeriodSchema = z
  .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['from', 'to'] })
  .openapi('SubscriptionPeriod')

const HIUSubscriptionContextSchema = z
  .object({
    categories: z.array(SubscriptionCategorySchema),
    hip: OrganizationRepresentationSchema.exactOptional(),
    period: SubscriptionPeriodSchema,
  })
  .openapi({ required: ['categories', 'period'] })
  .openapi('HIUSubscriptionContext')

const HIUSubscriptionSchema = z
  .object({
    hiu: OrganizationRepresentationSchema,
    id: z.string().openapi({ example: 'subscription Id' }),
    patient: ConsentManagerPatientIDSchema,
    sources: z.array(HIUSubscriptionContextSchema),
  })
  .openapi({ required: ['id', 'patient', 'hiu', 'sources'] })
  .openapi('HIUSubscription')

const HIUSubscriptionEventContentSchema = z
  .object({
    context: z.array(EventCategoryDetailSchema),
    hip: OrganizationRepresentationSchema,
    patient: ConsentManagerPatientIDSchema,
  })
  .openapi({ required: ['patient', 'hip', 'context'] })
  .openapi('HIUSubscriptionEventContent')

const HIUSubscriptionNotificationSchema = z
  .object({
    event: z
      .object({
        category: SubscriptionCategorySchema,
        content: HIUSubscriptionEventContentSchema,
        id: UuidSchemaSchema,
        published: TimestampSchemaSchema,
        subscriptionId: z.string().openapi({ example: 'subscription Id' }),
      })
      .openapi({ required: ['id', 'published', 'subscriptionId', 'category', 'content'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'event'] })
  .openapi('HIUSubscriptionNotification')

const HIUSubscriptionNotificationAcknowledgmentSchema = z
  .object({
    acknowledgement: z
      .object({
        eventId: z.string().openapi({ example: 'subscription event Id' }),
        status: z.literal('OK'),
      })
      .exactOptional()
      .openapi({ required: ['status', 'eventId'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('HIUSubscriptionNotificationAcknowledgment')

const HIUSubscriptionRequestNotificationAcknowledgementSchema = z
  .object({
    acknowledgement: z
      .object({
        status: z.literal('OK'),
        subscriptionRequestId: z.string().openapi({ example: 'subscription Id' }),
      })
      .exactOptional()
      .openapi({ required: ['status', 'subscriptionRequestId'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('HIUSubscriptionRequestNotificationAcknowledgement')

const HIUSubscriptionRequestReceiptSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    subscriptionRequest: z
      .object({
        id: z
          .uuid()
          .openapi({
            description: 'id of the consent-request created',
            example: 'f29f0e59-8388-4698-9fe6-05db67aeac46',
          }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({
    required: ['requestId', 'timestamp', 'resp'],
    xml: { name: 'ConsentRequestInitResponse' },
  })
  .openapi('HIUSubscriptionRequestReceipt')

const HealthInformationNotificationSchema = z
  .object({
    notification: z
      .object({
        consentId: UuidSchemaSchema,
        doneAt: z.iso.datetime({ offset: true }),
        notifier: z
          .object({ id: z.string().openapi({ example: 'tmh' }), type: z.enum(['HIU', 'HIP']) })
          .openapi({ required: ['type', 'id'] }),
        statusNotification: z
          .object({
            hipId: z.string().openapi({ example: 'max' }),
            sessionStatus: z.enum(['TRANSFERRED', 'FAILED']),
            statusResponses: z
              .array(
                z
                  .object({
                    careContextReference: z.string(),
                    description: z.string().exactOptional(),
                    hiStatus: z.enum(['DELIVERED', 'OK', 'ERRORED']).openapi({ example: 'OK' }),
                  })
                  .openapi({ required: ['careContextReference', 'hiStatus'] }),
              )
              .exactOptional(),
          })
          .openapi({ required: ['sessionStatus', 'hipId'] }),
        transactionId: UuidSchemaSchema,
      })
      .openapi({
        required: ['consentId', 'transactionId', 'doneAt', 'notifier', 'statusNotification'],
      }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request.',
        example: '499a5a4a-7dda-4f20-9b67-e24589627061',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'notification'] })
  .openapi('HealthInformationNotification')

const HeartbeatResponseSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    status: z.enum(['UP', 'DOWN']),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['timestamp', 'status'], xml: { name: 'HeartbeatResponse' } })
  .openapi('HeartbeatResponse')

const IdentifierTypeSchema = z
  .enum(['MOBILE', 'MR', 'NDHM_HEALTH_NUMBER', 'HEALTH_ID'])
  .openapi('IdentifierType')

const IdentifierSchema = z
  .object({
    type: IdentifierTypeSchema.exactOptional(),
    value: z.string().exactOptional().openapi({ example: '+919800083232' }),
  })
  .openapi({ xml: { name: 'Identifier' }, required: [] })
  .openapi('Identifier')

const OpenIdConfigurationSchema = z
  .object({ jwks_uri: z.url().exactOptional().openapi({ example: 'https://ncg-gateway/certs' }) })
  .openapi({ required: [] })
  .openapi('OpenIdConfiguration')

const PatientAddressSchema = z
  .object({
    district: z.string().exactOptional(),
    line: z.string().exactOptional(),
    pincode: z.string().exactOptional(),
    state: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PatientAddress')

const PatientGenderSchema = z.enum(['M', 'F', 'O', 'U']).openapi('PatientGender')

const PatientDemographicSchema = z
  .object({
    dateOfBirth: z
      .string()
      .openapi({ description: 'date of birth in YYYY-MM-DD format.', example: '1972-02-29' }),
    gender: PatientGenderSchema,
    identifier: AuthConfirmIdentifierSchema.exactOptional(),
    name: z.string().openapi({ example: 'janki das' }),
  })
  .openapi({
    description:
      'Demographic details are only required for demographic auth at this point. Demographic details must be same as registered',
    required: ['name', 'gender', 'dateOfBirth'],
  })
  .openapi('PatientDemographic')

const PatientAuthConfirmRequestSchema = z
  .object({
    credential: z
      .object({
        authCode: z.string().exactOptional(),
        demographic: PatientDemographicSchema.exactOptional(),
      })
      .openapi({
        description:
          'note, demographic details are only required for demographic auth at this point.',
        required: [],
      }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
    transactionId: z.string(),
  })
  .openapi({ required: ['requestId', 'timestamp', 'transactionId', 'credential'] })
  .openapi('PatientAuthConfirmRequest')

const PatientDemographicResponseSchema = z
  .object({
    address: PatientAddressSchema.exactOptional(),
    gender: PatientGenderSchema,
    id: z
      .string()
      .openapi({
        description: 'PHR Identifier of patient at consent manager',
        example: '<patient-id>@<consent-manager-id>',
      }),
    identifiers: z
      .array(IdentifierSchema)
      .exactOptional()
      .openapi({ xml: { name: 'identifiers', wrapped: true } }),
    name: z.string().openapi({ example: 'Hina Patel' }),
    yearOfBirth: z.int().openapi({ example: 2000 }),
  })
  .openapi({ required: ['id', 'name', 'gender', 'yearOfBirth'] })
  .openapi('PatientDemographicResponse')

const PatientAuthConfirmResponseSchema = z
  .object({
    auth: z
      .object({
        accessToken: z
          .string()
          .exactOptional()
          .openapi({ description: 'access token for initialization of subsequent action.' }),
        patient: PatientDemographicResponseSchema.exactOptional(),
        validity: AccessTokenValiditySchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'depending on the purpose of auth, as specified in /auth/init, the response may include the following \n  1. LINK - only returns **accessToken**\n  2. KYC - only returns **patient**\n  3. KYC_AND_LINK - returns both **accessToken** and **patient**\n',
        required: [],
      }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('PatientAuthConfirmResponse')

const PatientAuthInitRequestSchema = z
  .object({
    query: z
      .object({
        authMode: AuthenticationModeSchema.exactOptional(),
        id: z
          .string()
          .openapi({
            description: 'id  of the patient understood by the CM',
            example: 'hinapatel@ndhm',
          }),
        purpose: PatientAuthPurposeSchema,
        requester: z
          .object({ id: z.string().openapi({ example: 100005 }), type: z.enum(['HIP', 'HIU']) })
          .openapi({ description: 'identification of requester', required: ['type', 'id'] }),
      })
      .openapi({ required: ['id', 'requester', 'purpose'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'query'] })
  .openapi('PatientAuthInitRequest')

const PatientAuthInitResponseSchema = z
  .object({
    auth: z
      .object({
        meta: AuthMetaSchema.exactOptional(),
        mode: AuthenticationModeSchema,
        transactionId: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['transactionId', 'mode'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('PatientAuthInitResponse')

const PatientAuthModeQueryRequestSchema = z
  .object({
    query: z
      .object({
        id: z.string().openapi({ example: 'hinapatel79@ndhm' }),
        purpose: PatientAuthPurposeSchema,
        requester: z
          .object({ id: z.string().openapi({ example: '100005' }), type: z.enum(['HIP', 'HIU']) })
          .openapi({ required: ['id', 'type'] }),
      })
      .openapi({ required: ['id', 'purpose', 'requester'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'query'] })
  .openapi('PatientAuthModeQueryRequest')

const PatientAuthModeQueryResponseSchema = z
  .object({
    auth: z
      .object({ modes: z.array(AuthenticationModeSchema), purpose: PatientAuthPurposeSchema })
      .exactOptional()
      .openapi({ required: ['purpose', 'modes'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('PatientAuthModeQueryResponse')

const PatientAuthNotificationSchema = z
  .object({
    auth: z
      .object({
        accessToken: z
          .string()
          .exactOptional()
          .openapi({ description: 'access token for initialization of subsequent action.' }),
        patient: PatientDemographicResponseSchema.exactOptional(),
        status: z.enum(['GRANTED', 'DENIED']),
        transactionId: z.string().openapi({ description: 'transaction id for auth session' }),
        validity: AccessTokenValiditySchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'depending on the purpose of auth, as specified in /auth/init, the response may include the following \n  1. LINK - only returns **accessToken**\n  2. KYC - only returns **patient**\n  3. KYC_AND_LINK - returns both **accessToken** and **patient**\n',
        required: ['transactionId', 'status'],
      }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'transactionId'] })
  .openapi('PatientAuthNotification')

const PatientAuthNotificationAcknowledgementSchema = z
  .object({
    acknowledgement: z
      .object({ status: z.literal('OK') })
      .exactOptional()
      .openapi({ required: ['status'] }),
    error: ErrorSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'resp'] })
  .openapi('PatientAuthNotificationAcknowledgement')

const PatientIdentificationRequestSchema = z
  .object({
    query: z
      .object({
        patient: z
          .object({ id: z.string().openapi({ example: 'hinapatel79@ndhm' }) })
          .openapi({ required: ['id'] }),
        requester: z
          .object({ id: z.string().openapi({ example: 100005 }), type: z.enum(['HIU', 'HIP']) })
          .openapi({ required: ['type', 'id'] }),
      })
      .openapi({ required: ['patient', 'requester'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'query'] })
  .openapi('PatientIdentificationRequest')

const PatientIdentificationResponseSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    patient: z
      .object({
        id: z.string().openapi({ example: 'hinapatel79@ndhm' }),
        name: z.string().openapi({ example: 'Hina Patel' }),
      })
      .exactOptional()
      .openapi({ required: ['id', 'name'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
  })
  .openapi({
    required: ['requestId', 'timestamp', 'resp'],
    xml: { name: 'PatientIdentificationResponse' },
  })
  .openapi('PatientIdentificationResponse')

const SessionRequestSchema = z
  .object({ clientId: z.string(), clientSecret: z.string() })
  .openapi({ required: ['clientId', 'clientSecret'] })
  .openapi('SessionRequest')

const SessionResponseSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0',
      }),
    expiresIn: z.int().exactOptional().openapi({ description: 'In Minutes', example: 1800 }),
    refreshExpiresIn: z.int().exactOptional().openapi({ description: 'In Minutes', example: 1800 }),
    refreshToken: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0',
      }),
    tokenType: z.string().exactOptional().openapi({ example: 'bearer' }),
  })
  .openapi({ required: [] })
  .openapi('SessionResponse')

const SubscriptionStatusSchema = z.enum(['GRANTED', 'DENIED']).openapi('SubscriptionStatus')

const SubscriptionApprovalNotificationSchema = z
  .object({
    notification: z
      .object({
        status: SubscriptionStatusSchema,
        subscription: HIUSubscriptionSchema.exactOptional(),
        subscriptionRequestId: z
          .string()
          .exactOptional()
          .openapi({ example: 'request id of the subscription' }),
      })
      .openapi({ required: ['status'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'notification'] })
  .openapi('SubscriptionApprovalNotification')

const SubscriptionRequestSchema = z
  .object({
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request.',
        example: '499a5a4a-7dda-4f20-9b67-e24589627061',
      }),
    subscription: z
      .object({
        categories: z.array(SubscriptionCategorySchema),
        hips: z.array(OrganizationRepresentationSchema).exactOptional(),
        hiu: OrganizationRepresentationSchema,
        patient: ConsentManagerPatientIDSchema,
        period: SubscriptionPeriodSchema,
        purpose: UsePurposeSchema,
      })
      .openapi({ required: ['purpose', 'patient', 'hiu', 'categories', 'period'] }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'subscription'] })
  .openapi('SubscriptionRequest')

const ConsentIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: "Consent request's identifier",
      in: 'path',
      name: 'consentId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const ConsentRequestIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: "Consent request's identifier",
      in: 'path',
      name: 'consentRequestId',
      required: true,
      schema: { format: 'uuid', type: 'string' },
    },
  })

const LinkRefNumberParamsSchema = UuidSchemaSchema.openapi({
  param: {
    description: 'Reference number for the link request made earlier.',
    in: 'path',
    name: 'linkRefNumber',
    required: true,
    schema: { $ref: '#/components/schemas/UuidSchema' },
  },
})

const XCMIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Suffix of the consent manager to which the request was intended.',
      in: 'header',
      name: 'X-CM-ID',
      required: true,
      schema: { type: 'string' },
    },
  })

const XHIPIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Identifier of the health information provider to which the request was intended.',
      in: 'header',
      name: 'X-HIP-ID',
      required: true,
      schema: { type: 'string' },
    },
  })

const XHIUIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Identifier of the health information user to which the request was intended.',
      in: 'header',
      name: 'X-HIU-ID',
      required: true,
      schema: { type: 'string' },
    },
  })

const XOriginIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Identifier of the health information provider user from which the request came. (Necessity of this header depends on the authentication at the Bridge) If gateway uses JWT authentication, from access token itself originator can be identified.\n',
      in: 'header',
      name: 'X-Origin-ID',
      schema: { type: 'string' },
      required: false,
    },
  })

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.',
      in: 'header',
      name: 'Authorization',
      required: true,
      schema: { type: 'string' },
    },
  })

export const getV05WellKnownOpenidConfigurationRoute = createRoute({
  method: 'get',
  path: '/v0.5/.well-known/openid-configuration',
  tags: ['Gateway'],
  summary: 'Get openid configuration',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OpenIdConfigurationSchema },
        'application/xml': { schema: OpenIdConfigurationSchema },
      },
    },
    404: {
      description: '**Causes:**\n  * Invalid consent request id\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const getV05CertsRoute = createRoute({
  method: 'get',
  path: '/v0.5/certs',
  tags: ['Gateway'],
  summary: 'Get certs for JWT verification',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: CertsSchema },
        'application/xml': { schema: CertsSchema },
      },
    },
    404: {
      description: '**Causes:**\n  * Invalid consent request id\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentRequestsInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/init',
  tags: ['Gateway'],
  summary: 'Create consent request',
  description: 'Creates a consent request to get data about a patient by HIU user.',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: ConsentRequestSchema },
        'application/xml': { schema: ConsentRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent \n  * Required attributes not mentioned\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentRequestsOnInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/on-init',
  tags: ['consent flow'],
  summary: 'Response to consent request',
  description:
    'Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>\n  Reasons for error may be\n  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: ConsentRequestInitResponseSchema },
        'application/xml': { schema: ConsentRequestInitResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentRequestsOnStatusRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/on-status',
  tags: ['consent flow'],
  summary: 'Result of consent request status',
  description:
    'Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIUConsentRequestStatusSchema },
        'application/xml': { schema: HIUConsentRequestStatusSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentRequestsStatusRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/status',
  tags: ['Gateway'],
  summary: 'Get consent request status',
  description: 'Get status of consent request done previously',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: ConsentRequestStatusRequestSchema },
        'application/xml': { schema: ConsentRequestStatusRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentsFetchRoute = createRoute({
  method: 'post',
  path: '/v0.5/consents/fetch',
  tags: ['Gateway'],
  summary: 'Get consent artefact',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: ConsentFetchRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentsHiuNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/consents/hiu/notify',
  tags: ['consent flow'],
  summary: 'Consent notification',
  description:
    'Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. \n1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.\n2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>\n3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>\n4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: HIUConsentNotificationEventSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentsHiuOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/consents/hiu/on-notify',
  tags: ['Gateway'],
  summary: 'Consent notification',
  description:
    'This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: HIUConsentNotificationResponseSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05ConsentsOnFetchRoute = createRoute({
  method: 'post',
  path: '/v0.5/consents/on-fetch',
  tags: ['consent flow'],
  summary: 'Result of fetch request for a consent artefact',
  description:
    'Must contain either consent or error. Possible reason of errors are \n1. consentId passed through /fetch is invalid\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: ConsentArtefactResponseSchema },
        'application/xml': { schema: ConsentArtefactResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05HealthInformationCmRequestRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/cm/request',
  tags: ['Gateway'],
  summary: 'Health information data request',
  description:
    'Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIRequestSchema },
        'application/xml': { schema: HIRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Bad request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Token is invalid or Link has expired\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05HealthInformationHiuOnRequestRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/hiu/on-request',
  tags: ['data flow'],
  summary: 'Health information data request',
  description:
    'Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are\n  1. **Invalid consent artefact id**\n  2. **Consent has expired**\n  3. **Date ranges are invalid**\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIUHealthInformationRequestResponseSchema },
        'application/xml': { schema: HIUHealthInformationRequestResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Bad request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Token is invalid or Link has expired\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05HealthInformationNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/notify',
  tags: ['Gateway'],
  summary: 'Notifications corresponding to events during data flow',
  description:
    'API called by HIU and HIP during data-transfer.\n1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]\n2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]\n3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent\n4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HealthInformationNotificationSchema },
        'application/xml': { schema: HealthInformationNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Notification is Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid Request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05HealthInformationTransferRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/transfer',
  tags: ['data flow'],
  summary: 'health information transfer API',
  description:
    '**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. \n  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. \n  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. \n  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. \n  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"\n  5. checksum is Md5 checksum of the data conent, before encryption\n  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: DataNotificationSchema },
        'application/xml': { schema: DataNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Data accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const getV05HeartbeatRoute = createRoute({
  method: 'get',
  path: '/v0.5/heartbeat',
  tags: ['monitoring'],
  summary: 'Get consent request status',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: HeartbeatResponseSchema },
        'application/xml': { schema: HeartbeatResponseSchema },
      },
    },
  },
})

export const postV05PatientsFindRoute = createRoute({
  method: 'post',
  path: '/v0.5/patients/find',
  tags: ['Gateway'],
  summary: 'Identify a patient by her consent-manager user-id',
  description: 'This API is meant for identify to patient given her consent-manager-user-id\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientIdentificationRequestSchema },
        'application/xml': { schema: PatientIdentificationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: 'Invalid request, required attributes not provided\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05PatientsOnFindRoute = createRoute({
  method: 'post',
  path: '/v0.5/patients/on-find',
  tags: ['identification'],
  summary: 'Identification result for a consent-manager user-id',
  description:
    'If a patient is found then patient.name contains the patients name. \nOtherwise, patient is not provided, and possibly error is raised for invalid requests\nNote in addition to the "Authorization" header, one of the following headers must be specified\n1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)\n2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientIdentificationResponseSchema },
        'application/xml': { schema: PatientIdentificationResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: 'Invalid request, required attributes not provided\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SessionsRoute = createRoute({
  method: 'post',
  path: '/v0.5/sessions',
  tags: ['Gateway'],
  summary: 'Get access token',
  request: {
    body: {
      content: {
        'application/json': { schema: SessionRequestSchema },
        'application/xml': { schema: SessionRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SessionResponseSchema },
        'application/xml': { schema: SessionResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Invalid client Id or secret.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    404: {
      description: '**Causes:**\n  * Invalid consent request id\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionRequestsCmInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/cm/init',
  tags: ['Gateway'],
  summary: 'Request for subscription',
  description:
    'creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: SubscriptionRequestSchema },
        'application/xml': { schema: SubscriptionRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent \n  * Required attributes not mentioned\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionRequestsHiuNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/hiu/notify',
  tags: ['subscriptions'],
  summary: 'Notification for subscription grant/deny/revoke',
  description:
    'This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: SubscriptionApprovalNotificationSchema },
        'application/xml': { schema: SubscriptionApprovalNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent \n  * Required attributes not mentioned\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionRequestsHiuOnInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/hiu/on-init',
  tags: ['subscriptions'],
  summary:
    'callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.',
  description:
    'This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: HIUSubscriptionRequestReceiptSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionRequestsHiuOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/hiu/on-notify',
  tags: ['Gateway'],
  summary:
    'Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.',
  description:
    'This API is called by HIU as acknowledgement to subscription request relevant notifications. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIUSubscriptionRequestNotificationAcknowledgementSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionsHiuNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscriptions/hiu/notify',
  tags: ['subscriptions'],
  summary: 'Notification to HIU on basis of a granted subscription',
  description:
    'This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. \n1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. \n2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-HIU-ID': XHIUIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIUSubscriptionNotificationSchema },
        'application/xml': { schema: HIUSubscriptionNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: '**Causes:**\n  * Invalid data sent \n  * Required attributes not mentioned\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Expired/Invalid token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05SubscriptionsHiuOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscriptions/hiu/on-notify',
  tags: ['Gateway'],
  summary: 'Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.',
  description:
    'This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: HIUSubscriptionNotificationAcknowledgmentSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted.' },
    401: {
      description: '**Causes:**\n  * Invalid/Expired/Empty token.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream services are down\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthConfirmRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/confirm',
  tags: ['Gateway'],
  summary:
    'Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation',
  description:
    'This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent\n  1. demographic details are only required for  demographic auth as of now. \n  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.\n  3. demographic.identifier is optional, however maybe required if authentication so mandates. \n  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientAuthConfirmRequestSchema },
        'application/xml': { schema: PatientAuthConfirmRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description:
        '**Causes:**\n  * transaction id is not provided or invalid\n  * token or other auth confirmation details not provided or invalid\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthFetchModesRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/fetch-modes',
  tags: ['Gateway'],
  summary: "Get a patient's authentication modes relevant to specified purpose",
  description:
    'This API is meant for identify supported authentication modes for a patient given a specific purpose\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientAuthModeQueryRequestSchema },
        'application/xml': { schema: PatientAuthModeQueryRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: 'Invalid request, required attributes not provided\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/init',
  tags: ['Gateway'],
  summary: 'Initialize authentication from HIP',
  description:
    'This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.\n  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientAuthInitRequestSchema },
        'application/xml': { schema: PatientAuthInitRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description: '**Causes:**\n  * patient id is not provided\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/notify',
  tags: ['user auth'],
  summary: 'notification API in case of DIRECT mode of authentication by the CM',
  description:
    'This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.\n\n  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts\n  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.\n  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.\n',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'X-HIP-ID': XHIPIDParamsSchema,
      'X-HIU-ID': XHIUIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: PatientAuthNotificationSchema },
        'application/xml': { schema: PatientAuthNotificationSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description:
        '**Causes:**\n  * required details not provided\n  * neither auth nor error specified \n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthOnConfirmRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/on-confirm',
  tags: ['user auth'],
  summary:
    'callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not',
  description:
    'This API is called by CM to confirm authentication of users.\n\n  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts\n  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     \n',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'X-HIP-ID': XHIPIDParamsSchema,
      'X-HIU-ID': XHIUIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: PatientAuthConfirmResponseSchema },
        'application/xml': { schema: PatientAuthConfirmResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description:
        '**Causes:**\n  * required details not provided\n  * neither auth nor error specified \n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthOnFetchModesRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/on-fetch-modes',
  tags: ['user auth'],
  summary: 'Identification result for a consent-manager user-id',
  description:
    'If a patient is found then **auth** attribute contains the supported modes for the specified purpose. \nOtherwise, error is raised for invalid requests or for non-existent id.\nNote in addition to the "Authorization" header, one of the following headers must be specified\n1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)\n2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)\n',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'X-HIP-ID': XHIPIDParamsSchema,
      'X-HIU-ID': XHIUIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: PatientAuthModeQueryResponseSchema },
        'application/xml': { schema: PatientAuthModeQueryResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
    400: {
      description: 'Invalid request, required attributes not provided\n',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthOnInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/on-init',
  tags: ['user auth'],
  summary: 'Response to user authentication initialization from HIP',
  description:
    "If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. \n\n  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values \n      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. \n      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. \n      3. DEMOGRAPHICS - auth initiated with demographic verification\n      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester\n  2. **meta.expiry** conveys the expiry time of the token and the authentication session\n  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. \n  4. **NOTE**, only KYC purpose is applicable for HIU\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \nThe error section in the body, represents the potential errors that may have occurred. Possible reasons:\n  1. Patient id is invalid\n",
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'X-HIP-ID': XHIPIDParamsSchema,
      'X-HIU-ID': XHIUIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: PatientAuthInitResponseSchema },
        'application/xml': { schema: PatientAuthInitResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description:
        '**Causes:**\n  * required information not provided\n  * neither authInit nor error specified \n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})

export const postV05UsersAuthOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/on-notify',
  tags: ['Gateway'],
  summary: 'callback API by HIU/HIPs as acknowledgement of auth notification',
  description:
    'This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema, 'X-CM-ID': XCMIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientAuthNotificationAcknowledgementSchema },
        'application/xml': { schema: PatientAuthNotificationAcknowledgementSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description:
        '**Causes:**\n  * required details not provided\n  * neither auth nor error specified \n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    401: {
      description: '**Causes:**\n  * Unauthorized request\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
    500: {
      description: '**Causes:**\n  * Downstream system(s) is down.\n  * Unhandled exceptions.\n',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/xml': { schema: ErrorResponseSchema },
      },
    },
  },
})
