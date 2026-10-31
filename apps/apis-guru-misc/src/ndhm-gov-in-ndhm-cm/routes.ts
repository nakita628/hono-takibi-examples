import { createRoute, z } from '@hono/zod-openapi'

const AuthConfirmIdentifierTypeSchema = z.literal('MOBILE').openapi('AuthConfirmIdentifierType')

const AuthConfirmIdentifierSchema = z
  .object({
    type: AuthConfirmIdentifierTypeSchema,
    value: z.string().openapi({ example: '+919800083232' }),
  })
  .openapi({ required: ['type', 'value'], xml: { name: 'AuthConfirmIdentifier' } })
  .openapi('AuthConfirmIdentifier')

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

const CareContextRepresentationSchema = z
  .object({ display: z.string(), referenceNumber: z.string() })
  .openapi({ required: ['referenceNumber', 'display'], xml: { name: 'Tag' } })
  .openapi('CareContextRepresentation')

const ConsentAcknowledgementSchema = z
  .object({
    consentId: z.string().openapi({ example: '<consent-artefact-id>' }),
    status: z.enum(['OK', 'UNKNOWN']),
  })
  .openapi({ required: ['status', 'consentId'] })
  .openapi('ConsentAcknowledgement')

const TimestampSchemaSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ' })
  .openapi('TimestampSchema')

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

const ConsentManagerPatientIDSchema = z
  .object({ id: z.string().openapi({ example: 'hinapatel79@ndhm', xml: { attribute: true } }) })
  .openapi({ required: ['id'] })
  .openapi('ConsentManagerPatientID')

const HITypeEnumSchema = z
  .enum(['OPConsultation', 'Prescription', 'DischargeSummary', 'DiagnosticReport'])
  .openapi({ xml: { name: 'HIType' } })
  .openapi('HITypeEnum')

const OrganizationRepresentationSchema = z
  .object({ id: z.string().openapi({ xml: { attribute: true } }) })
  .openapi({ required: ['id'], xml: { name: 'OrganizationResponse' } })
  .openapi('OrganizationRepresentation')

const PermissionSchema = z
  .object({
    accessMode: z.enum(['VIEW', 'STORE', 'QUERY', 'STREAM']),
    dataEraseAt: z.iso.datetime({ offset: true }),
    dateRange: z
      .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
      .openapi({ required: ['from', 'to'] }),
    frequency: z
      .object({
        repeats: z.int().exactOptional(),
        unit: z.enum(['HOUR', 'WEEK', 'DAY', 'MONTH', 'YEAR']).exactOptional(),
        value: z.int().exactOptional(),
      })
      .openapi({ required: [] }),
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

const DateRangeSchema = z
  .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['from', 'to'] })
  .openapi('DateRange')

const ErrorSchema = z
  .object({ code: z.union([z.literal(1000), z.literal(10001)]), message: z.string() })
  .openapi({ required: ['code', 'message'], xml: { name: 'Error' } })
  .openapi('Error')

const ErrorResponseSchema = z
  .object({ error: ErrorSchema.exactOptional() })
  .openapi({ xml: { name: 'ErrorResponse' }, required: [] })
  .openapi('ErrorResponse')

const RequestReferenceSchema = z
  .object({ requestId: z.uuid().openapi({ description: 'the requestId that was passed' }) })
  .openapi({ required: ['requestId'] })
  .openapi('RequestReference')

const HIPConsentNotificationResponseSchema = z
  .object({
    acknowledgement: ConsentAcknowledgementSchema.exactOptional(),
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
  .openapi('HIPConsentNotificationResponse')

const HIPHealthInformationRequestAcknowledgementSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    hiRequest: z
      .object({ sessionStatus: z.literal('ACKNOWLEDGED'), transactionId: z.uuid() })
      .exactOptional()
      .openapi({ required: ['transactionId', 'sessionStatus'] }),
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
  .openapi('HIPHealthInformationRequestAcknowledgement')

const ConsentSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('Consent')

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

const HealthInformationNotificationSchema = z
  .object({
    notification: z
      .object({
        consentId: UuidSchemaSchema,
        doneAt: z.iso.datetime({ offset: true }),
        notifier: z
          .object({ id: z.string().openapi({ example: 100005 }), type: z.enum(['HIU', 'HIP']) })
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
    status: z.enum(['UP', 'DOWN']).exactOptional(),
    timestamp: TimestampSchemaSchema.exactOptional(),
  })
  .openapi({ xml: { name: 'HeartbeatResponse' }, required: [] })
  .openapi('HeartbeatResponse')

const IdentifierTypeSchema = z.enum(['MOBILE', 'MR']).openapi('IdentifierType')

const IdentifierSchema = z
  .object({ type: IdentifierTypeSchema, value: z.string().openapi({ example: '+919800083232' }) })
  .openapi({ required: ['type', 'value'], xml: { name: 'Identifier' } })
  .openapi('Identifier')

const MetaSchema = z
  .object({
    communicationExpiry: z.string().exactOptional().openapi({ example: '2019-12-30T12:01:55Z' }),
    communicationHint: z.string().exactOptional(),
    communicationMedium: z.enum(['MOBILE', 'EMAIL']),
  })
  .openapi({ required: ['communicationMedium'], xml: { name: 'Meta' } })
  .openapi('Meta')

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
    description: 'Demographic details must be same as registered',
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
        description: 'note, demographic details are only required for demographic verfication.',
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

const PatientAuthPurposeSchema = z
  .enum(['LINK', 'KYC', 'KYC_AND_LINK'])
  .openapi({ description: 'what is the purpose of user auth' })
  .openapi('PatientAuthPurpose')

const PatientAuthRequesterSchema = z
  .object({ id: z.string().openapi({ example: 100005 }), type: z.enum(['HIP', 'HIU']) })
  .openapi({ description: 'identification of requester', required: ['type', 'id'] })
  .openapi('PatientAuthRequester')

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
        requester: PatientAuthRequesterSchema,
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

const PatientCareContextLinkSchema = z
  .object({
    accessToken: z
      .string()
      .openapi({
        description: 'AccessToken fetched in the user auth process for the purpose specified',
      }),
    patient: z
      .object({
        careContexts: z
          .array(CareContextRepresentationSchema)
          .openapi({ xml: { name: 'careContexts', wrapped: true } }),
        display: z.string(),
        referenceNumber: z
          .string()
          .openapi({ description: 'patient reference id at HIP', example: 'TMH-PUID-001' }),
      })
      .openapi({ required: ['referenceNumber', 'display', 'careContexts'] }),
  })
  .openapi({ required: ['accessToken', 'patient'] })
  .openapi('PatientCareContextLink')

const PatientCareContextLinkRequestSchema = z
  .object({
    link: PatientCareContextLinkSchema,
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    timestamp: TimestampSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'link'] })
  .openapi('PatientCareContextLinkRequest')

const PatientRepresentationSchema = z
  .object({
    careContexts: z.array(CareContextRepresentationSchema),
    display: z.string(),
    matchedBy: z.array(IdentifierTypeSchema).exactOptional(),
    referenceNumber: z.string(),
  })
  .openapi({ required: ['referenceNumber', 'display', 'careContexts'], xml: { name: 'Patient' } })
  .openapi('PatientRepresentation')

const PatientDiscoveryResultSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    patient: PatientRepresentationSchema.exactOptional(),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
    transactionId: z.uuid(),
  })
  .openapi({
    required: ['requestId', 'timestamp', 'transactionId', 'resp'],
    xml: { name: 'PatientDiscoveryResult' },
  })
  .openapi('PatientDiscoveryResult')

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

const PatientLinkReferenceResultSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    link: z
      .object({
        authenticationType: z.enum(['DIRECT', 'MEDIATED']),
        meta: MetaSchema.exactOptional(),
        referenceNumber: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['referenceNumber', 'authenticationType'] }),
    requestId: z
      .uuid()
      .openapi({
        description: 'a nonce, unique for each HTTP request',
        example: '5f7a535d-a3fd-416b-b069-c97d021fbacd',
      }),
    resp: RequestReferenceSchema,
    timestamp: TimestampSchemaSchema,
    transactionId: UuidSchemaSchema,
  })
  .openapi({ required: ['requestId', 'timestamp', 'transactionId', 'resp'] })
  .openapi('PatientLinkReferenceResult')

const PatientLinkResultSchema = z
  .object({
    error: ErrorSchema.exactOptional(),
    patient: z
      .object({
        careContexts: z.array(CareContextRepresentationSchema),
        display: z.string(),
        referenceNumber: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['referenceNumber', 'display', 'careContexts'] }),
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
  .openapi('PatientLinkResult')

const ShareProfileAcknowledgementSchema = z
  .object({
    healthId: z.string().openapi({ example: '<username>@<suffix>' }),
    status: z.enum(['SUCCESS', 'FAILURE']),
  })
  .openapi({ required: ['status', 'healthId'] })
  .openapi('ShareProfileAcknowledgement')

const ShareProfileResultSchema = z
  .object({
    acknowledgement: ShareProfileAcknowledgementSchema,
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
    required: ['requestId', 'timestamp', 'acknowledgement', 'resp'],
    xml: { name: 'ShareProfileResult' },
  })
  .openapi('ShareProfileResult')

const SubscriptionCategorySchema = z.literal('LINK').openapi('SubscriptionCategory')

const SubscriptionPeriodSchema = z
  .object({ from: z.iso.datetime({ offset: true }), to: z.iso.datetime({ offset: true }) })
  .openapi({ required: ['from', 'to'] })
  .openapi('SubscriptionPeriod')

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

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Access token which was issued after successful login with gateway auth server.',
      in: 'header',
      name: 'Authorization',
      required: true,
      schema: { type: 'string' },
    },
  })

export const postV05CareContextsOnDiscoverRoute = createRoute({
  method: 'post',
  path: '/v0.5/care-contexts/on-discover',
  tags: ['discovery'],
  summary: "Response to patient's account discovery request",
  description:
    'Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be \n  1. **more than one definitive match for the given request** \n  2. **no verified identifer was specified**\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientDiscoveryResultSchema },
        'application/xml': { schema: PatientDiscoveryResultSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description: '**Causes:**\n  * Format mismatch of any of attributes.\n',
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

export const postV05ConsentRequestsInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/init',
  tags: ['consent'],
  summary: 'Create consent request',
  description:
    'Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05ConsentRequestsStatusRoute = createRoute({
  method: 'post',
  path: '/v0.5/consent-requests/status',
  tags: ['consent'],
  summary: 'Get consent request status',
  description:
    'Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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
  tags: ['consent'],
  summary: 'Get consent artefact',
  description:
    'This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway ***/v0.5/consents/on-fetch***',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05ConsentsHipOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/consents/hip/on-notify',
  tags: ['consent'],
  summary: 'Consent notification',
  description:
    'This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIPConsentNotificationResponseSchema },
        'application/xml': { schema: HIPConsentNotificationResponseSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request Accepted' },
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
  tags: ['consent'],
  summary: 'Consent notification',
  description:
    'This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - ***/v0.5/consents/hiu/notify***.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05HealthInformationNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/notify',
  tags: ['data flow'],
  summary: 'Notifications corresponding to events during data flow',
  description:
    'API called by HIU and HIP during data-transfer. \n1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]\n2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]\n3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent\n4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05HealthInformationOnRequestRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/on-request',
  tags: ['data flow'],
  summary: 'Health information data request acknowledgement from HIP',
  description:
    'This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: HIPHealthInformationRequestAcknowledgementSchema },
        'application/xml': { schema: HIPHealthInformationRequestAcknowledgementSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted.' },
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

export const postV05HealthInformationRequestRoute = createRoute({
  method: 'post',
  path: '/v0.5/health-information/request',
  tags: ['data flow'],
  summary: 'Health information data request from HIU',
  description:
    'HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05LinksLinkAddContextsRoute = createRoute({
  method: 'post',
  path: '/v0.5/links/link/add-contexts',
  tags: ['link'],
  summary: 'API for HIP initiated care-context linking for patient',
  description:
    'API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  \n  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientCareContextLinkRequestSchema },
        'application/xml': { schema: PatientCareContextLinkRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'accepted' },
    400: {
      description: '**Causes:**\n  * required information not provided\n',
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

export const postV05LinksLinkOnConfirmRoute = createRoute({
  method: 'post',
  path: '/v0.5/links/link/on-confirm',
  tags: ['link'],
  summary: 'Token authenticated by HIP, indicating completion of linkage of care-contexts',
  description:
    'Returns a list of linked care contexts with patient reference number.\n  1. **Validated and linked account reference number**\n  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**\n  3. **Verified that same Consent Manager which made the link request is sending the token**\n  4. **Results of unmasked linked care contexts with patient reference number**\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientLinkResultSchema },
        'application/xml': { schema: PatientLinkResultSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'accepted' },
    400: {
      description:
        '**Causes:**\n  * resp not specified\n  * atleast patient or error should be specified\n',
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

export const postV05LinksLinkOnInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/links/link/on-init',
  tags: ['link'],
  summary: "Response to patient's care context link request",
  description:
    'Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have\n  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**\n  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**\n  3. **HIP should communicate the mode of authentication of a successful request**\n  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \nThe error section in the body, represents the potential errors that may have occurred. Possible reasons:\n  1. **Patient reference number is invalid**\n  2. **Care context reference numbers are invalid**\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: PatientLinkReferenceResultSchema },
        'application/xml': { schema: PatientLinkReferenceResultSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description: '**Causes:**\n  * Format mismatch of any of attributes.\n',
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

export const postV05PatientsFindRoute = createRoute({
  method: 'post',
  path: '/v0.5/patients/find',
  tags: ['identification'],
  summary: 'Identify a patient by her consent-manager user-id',
  description:
    'This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05PatientsProfileOnShareRoute = createRoute({
  method: 'post',
  path: '/v0.5/patients/profile/on-share',
  tags: ['profile'],
  summary: "Response to patient's share profile request",
  description: 'Result of patient share profile request at HIP end.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': { schema: ShareProfileResultSchema },
        'application/xml': { schema: ShareProfileResultSchema },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Request accepted' },
    400: {
      description: '**Causes:**\n  * Format mismatch of any of attributes.\n',
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

export const postV05SubscriptionRequestsCmInitRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/cm/init',
  tags: ['subscriptions'],
  summary: 'Request for subscription',
  description:
    'creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05SubscriptionRequestsHiuOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscription-requests/hiu/on-notify',
  tags: ['subscriptions'],
  summary:
    'Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.',
  description:
    'This API is called by HIU as acknowledgement to subscription request relevant notifications. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05SubscriptionsHiuOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/subscriptions/hiu/on-notify',
  tags: ['subscriptions', 'hiu facing'],
  summary: 'Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.',
  description:
    'This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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
  tags: ['user auth'],
  summary:
    'Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation',
  description:
    'This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent\n  1. demographic details are only required for  demographic auth as of now. \n  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.\n  3. demographic.identifier is optional, however maybe required if authentication so mandates. \n  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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
  tags: ['user auth', 'hip facing'],
  summary: "Get a patient's authentication modes relevant to specified purpose",
  description:
    'This API is meant for identify supported authentication modes for a patient given a specific purpose\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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
  tags: ['user auth'],
  summary: 'Initialize authentication from HIP',
  description:
    'This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.\n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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

export const postV05UsersAuthOnNotifyRoute = createRoute({
  method: 'post',
  path: '/v0.5/users/auth/on-notify',
  tags: ['user auth', 'hip facing', 'hiu facing'],
  summary:
    'callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)',
  description:
    'This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. \n',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
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
