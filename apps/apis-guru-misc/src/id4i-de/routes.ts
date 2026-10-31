import { createRoute, z } from '@hono/zod-openapi'

type ApiErrorType = {
  code:
    | 'ERR_REGISTRATION_VERIFICATION_NO_TOKEN'
    | 'ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN'
    | 'ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN'
    | 'ERR_AUTHENTICATION_NO_TOKEN'
    | 'ERR_AUTHENTICATION_INVALID_TOKEN'
    | 'ERR_AUTHENTICATION_EXPIRED_TOKEN'
    | 'ERR_AUTHENTICATION_FAILED'
    | 'ERR_AUTHORIZATION_MISSING_PRIVILEGES'
    | 'ERR_AUTHORIZATION_FORBIDDEN'
    | 'ERR_AUTHORIZATION_REQUIRE_USER'
    | 'ERR_INPUT_VALIDATION_FAILED'
    | 'ERR_FIELD_INPUT_VALIDATION_FAILED'
    | 'ERR_VALIDATION_CONSTRAINT_FAILED'
    | 'ERR_INPUT_NOT_READABLE'
    | 'ERR_INVALID_INPUT_PARAMETER'
    | 'ERR_GUID_CREATION'
    | 'ERR_INVALID_ID4N_OBJECT_TYPE'
    | 'ERR_MISSING_BILLING_INFORMATION'
    | 'ERR_COLLECTION_UPDATE_DENIED'
    | 'ERR_ENTITY_NOT_FOUND'
    | 'ERR_ENTITY_TOO_BIG'
    | 'ERR_DUPLICATE'
    | 'ERR_INTERNAL'
    | 'ERR_UNKNOWN'
    | 'ERR_INVALID_ORGANIZATION_USERROLE'
    | 'ERR_ORGANIZATION_ROLE_INCONSISTENCY'
    | 'ERR_ORGANIZATION_NOT_DELETABLE'
    | 'ERR_USER_ALREADY_IN_ORGANIZATION'
    | 'ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE'
    | 'ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME'
    | 'ERR_USER_DEACTIVATED'
    | 'ERR_LANGUAGE_NOT_SUPPORTED'
    | 'ERR_EMAIL_MISSING_TEMPLATE_PARAM'
    | 'ERR_EMAIL_TEMPLATE_NOT_AVAILABLE'
    | 'ERR_EMAIL_PREPARATION_FAILED'
    | 'ERR_IMAGE_CONVERSION'
    | 'ERR_UPLOAD_TOO_LARGE'
    | 'ERR_INVALID_ALIAS_TYPE'
    | 'ERR_INVALID_URI_TEMPLATE'
    | 'ERR_INVALID_URI_TEMPLATE_VARIABLE'
    | 'ERR_INVALID_NAMESPACE'
    | 'ERR_INVALID_PROPERTY_KEY'
    | 'ERR_INVALID_FILTER'
    | 'ERR_NAMESPACE_ALREADY_EXISTS'
    | 'ERR_INSECURE_PASSWORD'
    | 'ERR_TRANSFER_DENIED'
    | 'ERR_INVALID_PHYSICAL_STATE'
    | 'ERR_INVALID_HISTORY_PROPERTY_NAMESPACE'
    | 'ERR_INVALID_HISTORY_PROPERTY_VALUE'
    | 'ERR_ORGA_CANNOT_BE_OWN_PARTNER'
    | 'ERR_INVALID_GS1_CODE'
    | 'ERR_INVALID_GS1_CHAR_IN_CODE'
    | 'ERR_INVALID_GS1_CODE_NOT_UNIQUE'
    | 'ERR_INVALID_GS1_GTIN'
    | 'ERR_GS1_CODE_CURRENTLY_UNSUPPORTED'
  errorId: string
  errorList: ApiErrorType[]
  message: string
}

const AccountCredentialsSchema = z
  .object({ login: z.string().exactOptional(), password: z.string().exactOptional() })
  .openapi({ title: 'AccountCredentials', required: [] })
  .openapi('AccountCredentials')

const AddApiKeyPrivilegeRequestSchema = z
  .object({ privilege: z.string() })
  .openapi({ required: ['privilege'], title: 'AddApiKeyPrivilegeRequest' })
  .openapi('AddApiKeyPrivilegeRequest')

const AddPartnerRequestSchema = z
  .object({
    organizationId: z
      .string()
      .openapi({
        description: 'The namespace of the partner organization to add',
        example: 'org.acme',
      }),
  })
  .openapi({ required: ['organizationId'], title: 'AddPartnerRequest' })
  .openapi('AddPartnerRequest')

const ApiErrorSchema: z.ZodType<ApiErrorType> = z
  .lazy(() =>
    z
      .object({
        code: z.enum([
          'ERR_REGISTRATION_VERIFICATION_NO_TOKEN',
          'ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN',
          'ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN',
          'ERR_AUTHENTICATION_NO_TOKEN',
          'ERR_AUTHENTICATION_INVALID_TOKEN',
          'ERR_AUTHENTICATION_EXPIRED_TOKEN',
          'ERR_AUTHENTICATION_FAILED',
          'ERR_AUTHORIZATION_MISSING_PRIVILEGES',
          'ERR_AUTHORIZATION_FORBIDDEN',
          'ERR_AUTHORIZATION_REQUIRE_USER',
          'ERR_INPUT_VALIDATION_FAILED',
          'ERR_FIELD_INPUT_VALIDATION_FAILED',
          'ERR_VALIDATION_CONSTRAINT_FAILED',
          'ERR_INPUT_NOT_READABLE',
          'ERR_INVALID_INPUT_PARAMETER',
          'ERR_GUID_CREATION',
          'ERR_INVALID_ID4N_OBJECT_TYPE',
          'ERR_MISSING_BILLING_INFORMATION',
          'ERR_COLLECTION_UPDATE_DENIED',
          'ERR_ENTITY_NOT_FOUND',
          'ERR_ENTITY_TOO_BIG',
          'ERR_DUPLICATE',
          'ERR_INTERNAL',
          'ERR_UNKNOWN',
          'ERR_INVALID_ORGANIZATION_USERROLE',
          'ERR_ORGANIZATION_ROLE_INCONSISTENCY',
          'ERR_ORGANIZATION_NOT_DELETABLE',
          'ERR_USER_ALREADY_IN_ORGANIZATION',
          'ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE',
          'ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME',
          'ERR_USER_DEACTIVATED',
          'ERR_LANGUAGE_NOT_SUPPORTED',
          'ERR_EMAIL_MISSING_TEMPLATE_PARAM',
          'ERR_EMAIL_TEMPLATE_NOT_AVAILABLE',
          'ERR_EMAIL_PREPARATION_FAILED',
          'ERR_IMAGE_CONVERSION',
          'ERR_UPLOAD_TOO_LARGE',
          'ERR_INVALID_ALIAS_TYPE',
          'ERR_INVALID_URI_TEMPLATE',
          'ERR_INVALID_URI_TEMPLATE_VARIABLE',
          'ERR_INVALID_NAMESPACE',
          'ERR_INVALID_PROPERTY_KEY',
          'ERR_INVALID_FILTER',
          'ERR_NAMESPACE_ALREADY_EXISTS',
          'ERR_INSECURE_PASSWORD',
          'ERR_TRANSFER_DENIED',
          'ERR_INVALID_PHYSICAL_STATE',
          'ERR_INVALID_HISTORY_PROPERTY_NAMESPACE',
          'ERR_INVALID_HISTORY_PROPERTY_VALUE',
          'ERR_ORGA_CANNOT_BE_OWN_PARTNER',
          'ERR_INVALID_GS1_CODE',
          'ERR_INVALID_GS1_CHAR_IN_CODE',
          'ERR_INVALID_GS1_CODE_NOT_UNIQUE',
          'ERR_INVALID_GS1_GTIN',
          'ERR_GS1_CODE_CURRENTLY_UNSUPPORTED',
        ]),
        errorId: z.string(),
        errorList: z.array(ApiErrorSchema),
        message: z.string(),
      })
      .openapi({ required: ['code', 'errorId', 'errorList', 'message'], title: 'ApiError' }),
  )
  .openapi('ApiError')

const ApiKeyChangeRequestSchema = z
  .object({ active: z.boolean().exactOptional(), newLabel: z.string().min(5).max(50) })
  .openapi({ required: ['newLabel'], title: 'ApiKeyChangeRequest' })
  .openapi('ApiKeyChangeRequest')

const ApiKeyCreationRequestSchema = z
  .object({
    label: z.string().min(5).max(50),
    organizationId: z.string().openapi({ example: 'de.acme' }),
    secret: z.string().min(10).max(500),
  })
  .openapi({ required: ['label', 'organizationId', 'secret'], title: 'ApiKeyCreationRequest' })
  .openapi('ApiKeyCreationRequest')

const ApiKeyPresentationSchema = z
  .object({
    active: z.boolean().openapi({ description: 'Whether this API key is active', example: true }),
    createdAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The UTC unix timestamp of when this api key has been created',
        example: 1517232722,
      }),
    createdBy: z.string().openapi({ example: 'user123' }),
    key: z
      .string()
      .openapi({
        description: 'The api key identifier',
        example: '39978f49-6ff1-4147-bf0f-9910185084b7',
      }),
    label: z
      .string()
      .openapi({ description: 'The label / name of the api key', example: 'My Api Key' }),
    organizationId: z
      .string()
      .openapi({
        description: 'The organization namespace this api key belongs to',
        example: 'de.acme',
      }),
  })
  .openapi({
    required: ['active', 'createdAt', 'createdBy', 'key', 'label', 'organizationId'],
    title: 'ApiKeyPresentation',
  })
  .openapi('ApiKeyPresentation')

const ApiKeyPrivilegeSchema = z
  .object({ id4nAssociated: z.boolean(), privilege: z.string() })
  .openapi({ required: ['id4nAssociated', 'privilege'], title: 'ApiKeyPrivilege' })
  .openapi('ApiKeyPrivilege')

const ApiKeyPrivilegeInfoSchema = z
  .object({
    allowsBillableOperations: z.boolean().exactOptional(),
    helpText: z.string().exactOptional(),
    id4nAssociated: z.boolean(),
    name: z.string(),
  })
  .openapi({ required: ['id4nAssociated', 'name'], title: 'ApiKeyPrivilegeInfo' })
  .openapi('ApiKeyPrivilegeInfo')

const AppInfoPresentationSchema = z
  .object({
    branch: z.string().exactOptional(),
    commitTime: z.string().exactOptional(),
    name: z.string().exactOptional(),
    productionMode: z.boolean().exactOptional(),
    revision: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ title: 'AppInfoPresentation', required: [] })
  .openapi('AppInfoPresentation')

const BillingPositionSchema = z
  .object({
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    count: z.number(),
    description: z.string(),
    service: z.string(),
    singlePrice: z.number(),
    sum: z.number(),
    unit: z.string(),
  })
  .openapi({
    required: ['amount', 'count', 'description', 'service', 'singlePrice', 'sum', 'unit'],
    title: 'BillingPosition',
  })
  .openapi('BillingPosition')

const ChangeLogEntrySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique id of the changelog entry',
        example: 'e100123',
        readOnly: true,
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The message as template or rendered as plain text',
        example: 'User {{&user}} has changed the title of {{&object}}',
        readOnly: true,
      }),
    messageProperties: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({
        description:
          'The values of the properties in the message. May be nested as object with a value field ',
        example: { object: 'nearly every object', user: { type: 'user', value: 'a.vratny' } },
        readOnly: true,
      }),
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The UTC unix timestamp when this change occurred',
        example: 1517232722,
        readOnly: true,
      }),
  })
  .openapi({ description: 'A changelog entry', title: 'ChangeLogEntry', required: [] })
  .openapi('ChangeLogEntry')

const ChangeRoleRequestSchema = z
  .object({ roles: z.array(z.string()).exactOptional() })
  .openapi({ title: 'ChangeRoleRequest', required: [] })
  .openapi('ChangeRoleRequest')

const CompleteUserRegistrationRequestSchema = z
  .object({
    password: z.string().min(8).max(99),
    username: z.string().regex(/[a-zA-Z0-9_.-]{6,50}/),
    verificationToken: z.string(),
  })
  .openapi({
    required: ['password', 'username', 'verificationToken'],
    title: 'CompleteUserRegistrationRequest',
  })
  .openapi('CompleteUserRegistrationRequest')

const CountrySchema = z
  .object({ code: z.string(), name: z.string() })
  .openapi({ required: ['code', 'name'], title: 'Country' })
  .openapi('Country')

const CreateCollectionRequestSchema = z
  .object({
    label: z.string().min(5).max(128).exactOptional(),
    length: z.int32().min(6).max(255),
    organizationId: z.string().openapi({ example: 'de.acme' }),
    type: z.enum(['ROUTING_COLLECTION', 'LOGISTIC_COLLECTION', 'LABELLED_COLLECTION']),
  })
  .openapi({ required: ['length', 'organizationId', 'type'], title: 'CreateCollectionRequest' })
  .openapi('CreateCollectionRequest')

const CreateGuidRequestSchema = z
  .object({
    count: z
      .int32()
      .min(1)
      .max(1000)
      .openapi({ description: 'The total number of GUIDs to create', example: 1 }),
    length: z
      .int32()
      .min(7)
      .max(255)
      .openapi({ description: 'The charactersequence length of the GUID', example: 40 }),
    organizationId: z
      .string()
      .openapi({
        description:
          'The namespace of the organization where the generated GUIDs should be assigned.',
        example: 'de.acme',
      }),
  })
  .openapi({
    description: 'GUID creation information',
    required: ['count', 'length', 'organizationId'],
    title: 'CreateGuidRequest',
  })
  .openapi('CreateGuidRequest')

const VisibilitySchema = z
  .object({
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Document is publicly readable (if ID4N is owned by the same organization)',
        example: true,
      }),
    sharedOrganizationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Document is readable by these organizations (independend of ID4N ownership)',
        example: ['de.acme', 'com.porsche', 'de.bluerain'],
      }),
  })
  .openapi({ title: 'Visibility', required: [] })
  .openapi('Visibility')

const DocumentSchema = z
  .object({
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'File Name', example: 'publicInfo.pdf' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mime Type', example: 'text/plain' }),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: "The organization's namespace which owns the document",
        example: 'de.bluerain',
        readOnly: true,
      }),
    visibility: VisibilitySchema.exactOptional(),
  })
  .openapi({ title: 'Document', required: [] })
  .openapi('Document')

const VisibilityUpdateSchema = z
  .object({
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Document is publicly readable (if ID4N is owned by the same organization)',
        example: true,
      }),
    sharedWithOrganizationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Document is readable by these organizations (independend of ID4N ownership)',
        example: ['de.acme', 'com.porsche', 'de.bluerain'],
      }),
  })
  .openapi({ title: 'VisibilityUpdate', required: [] })
  .openapi('VisibilityUpdate')

const DocumentUpdateSchema = z
  .object({
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'File Name', example: 'publicInfo.pdf' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mime Type', example: 'text/plain' }),
    visibility: VisibilityUpdateSchema.exactOptional(),
  })
  .openapi({ title: 'DocumentUpdate', required: [] })
  .openapi('DocumentUpdate')

const GuidSchema = z
  .object({
    createdTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The UTC unix timestamp of when this GUID has been created',
        example: 1517232722,
        readOnly: true,
      }),
    holderOrganizationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization namespace of the GUID holder', readOnly: true }),
    id4n: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID', example: '3THvgrWxqgTFC4', readOnly: true }),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization namespace of the GUID owner', readOnly: true }),
    physicalState: z
      .enum(['UNATTACHED', 'ATTACHED', 'DETACHED'])
      .exactOptional()
      .openapi({ description: 'Physical attachment state of the GUID' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The properties of the organization',
        example: 'de.example',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Guid', required: [] })
  .openapi('Guid')

const GuidAliasSchema = z
  .object({
    alias: z.string().min(1).max(255).openapi({ description: 'An alias', example: 'alias' }),
  })
  .openapi({ required: ['alias'], title: 'GuidAlias' })
  .openapi('GuidAlias')

const GuidCollectionSchema = z
  .object({
    createdTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The UTC unix timestamp of when this collection has been created',
        readOnly: true,
      }),
    holderOrganizationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization namespace of the holder of the collection' }),
    id4n: z.string().exactOptional().openapi({ description: 'The ID', readOnly: true }),
    label: z.string().min(5).max(128).exactOptional(),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization namespace of the collection owner', readOnly: true }),
    physicalState: z
      .enum(['UNATTACHED', 'ATTACHED', 'DETACHED'])
      .exactOptional()
      .openapi({ description: 'Physical attachment state of the collection' }),
    type: z
      .enum(['ROUTING_COLLECTION', 'LOGISTIC_COLLECTION', 'LABELLED_COLLECTION'])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'GuidCollection', required: [] })
  .openapi('GuidCollection')

const HistoryItemSchema = z
  .object({
    additionalProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'History items custom additional properties' }),
    organizationId: z
      .string()
      .openapi({ description: 'Originator of the history item', example: 'org.acme' }),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Owner of the history item',
        example: 'de.bluerain',
        readOnly: true,
      }),
    sequenceId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Forms the primary key of the history item together with the GUID and the organizationId',
        example: 9784,
        readOnly: true,
      }),
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'History item timestamp',
        example: 1517232722,
        readOnly: true,
      }),
    type: z
      .enum([
        'CREATED',
        'DESTROYED',
        'RECYCLED',
        'SHIPMENT_PREPARED',
        'STORED',
        'RETRIEVED_FROM_STORAGE',
        'PACKAGED',
        'DISPATCHED',
        'RECEIVED',
        'DELIVERY_REFUSED',
        'REPROCESSING_STARTED',
        'REPROCESSING_STEP_STARTED',
        'REPROCESSING_STEP_CANCELLED',
        'REPROCESSING_STEP_FINISHED',
        'REPROCESSING_CANCELLED',
        'REPROCESSING_FINISHED',
        'DISASSEMBLED',
        'MAINTENANCE_STARTED',
        'MAINTENANCE_STEP_STARTED',
        'MAINTENANCE_STEP_CANCELLED',
        'MAINTENANCE_STEP_FINISHED',
        'MAINTENANCE_CANCELLED',
        'MAINTENANCE_FINISHED',
        'PRODUCTION_STARTED',
        'PRODUCTION_CANCELLED',
        'PRODUCTION_FINISHED',
        'PRODUCTION_STEP_STARTED',
        'PRODUCTION_STEP_CANCELLED',
        'PRODUCTION_STEP_FINISHED',
        'QUALITY_CHECK_PERFORMED',
      ])
      .openapi({ description: 'Type of the history item', example: 'DISPATCHED' }),
    visibility: VisibilitySchema.exactOptional(),
  })
  .openapi({
    description: 'GUID history item',
    required: ['organizationId', 'type'],
    title: 'HistoryItem',
  })
  .openapi('HistoryItem')

const HistoryItemUpdateSchema = z
  .object({
    organizationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.',
        example: 'de.acme',
      }),
    visibility: VisibilitySchema.exactOptional(),
  })
  .openapi({
    description: 'GUID history item update (diff patch)',
    title: 'HistoryItemUpdate',
    required: [],
  })
  .openapi('HistoryItemUpdate')

const Id4nSchema = z
  .object({
    id4n: z.string().exactOptional().openapi({ description: 'The ID', example: '3THvgrWxqgTFC4' }),
  })
  .openapi({ title: 'Id4n', required: [] })
  .openapi('Id4n')

const Id4nPresentationSchema = z
  .object({
    createdTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The UTC unix timestamp of when this ID has been created',
        example: 1517232722,
        readOnly: true,
      }),
    holderOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Organization namespace of the holder of the ID',
        example: 'de.example',
        readOnly: true,
      }),
    id4n: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID', example: '3THvgrWxqgTFC4', readOnly: true }),
    label: z.string().exactOptional().openapi({ readOnly: true }),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Organization namespace of the ID owner',
        example: 'org.acme',
        readOnly: true,
      }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The properties of the organization',
        example: 'de.example',
        readOnly: true,
      }),
    type: z
      .enum(['GUID', 'ROUTING_COLLECTION', 'LOGISTIC_COLLECTION', 'LABELLED_COLLECTION'])
      .exactOptional()
      .openapi({ description: 'The type of ID', readOnly: true }),
  })
  .openapi({ title: 'Id4nPresentation', required: [] })
  .openapi('Id4nPresentation')

const Id4nPropertiesSchema = z
  .object({
    id4n: z.string().exactOptional().openapi({ description: 'The ID4n' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The properties of the ID4n' }),
  })
  .openapi({ description: 'An id4n with its properties', title: 'Id4nProperties', required: [] })
  .openapi('Id4nProperties')

const ListOfGS1sSchema = z
  .object({
    codes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of GS1/MAPP codes.' }),
  })
  .openapi({ description: 'A list of GS1/MAPP codes', title: 'ListOfGS1s', required: [] })
  .openapi('ListOfGS1s')

const ImportGS1CodesRequestSchema = z
  .object({
    listOfGS1s: ListOfGS1sSchema,
    organizationId: z
      .string()
      .openapi({
        description: 'The organization where the GS1/Mapp code is imported.',
        example: 'de.acme',
      }),
  })
  .openapi({
    description: 'GS1/MAPP codes import information',
    required: ['listOfGS1s', 'organizationId'],
    title: 'ImportGS1CodesRequest',
  })
  .openapi('ImportGS1CodesRequest')

const ListOfId4nPropertiesSchema = z
  .object({
    list: z
      .array(Id4nPropertiesSchema)
      .exactOptional()
      .openapi({ description: 'A list containing the id4n with its properties.' }),
  })
  .openapi({
    description: 'A list of id4n properties',
    title: 'ListOfId4nProperties',
    required: [],
  })
  .openapi('ListOfId4nProperties')

const ListOfId4nsSchema = z
  .object({
    id4ns: z.array(z.string()).exactOptional().openapi({ description: 'A list of id4ns.' }),
  })
  .openapi({ description: 'A list of id4ns', title: 'ListOfId4ns', required: [] })
  .openapi('ListOfId4ns')

const OrganizationSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The id of the organization ( Deprecated: Use namespace instead. )',
        example: 100,
        readOnly: true,
      }),
    logoURL: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to a logo of the organization',
        example: '/api/v1/public/images/abcdef',
        readOnly: true,
      }),
    name: z
      .string()
      .min(3)
      .max(254)
      .openapi({ description: 'The name of the organization', example: 'ACME Inc.' }),
    namespace: z
      .string()
      .min(3)
      .max(255)
      .openapi({ description: 'The namespace of the organization', example: 'de.acme' }),
  })
  .openapi({
    description: 'An organization',
    required: ['name', 'namespace'],
    title: 'Organization',
  })
  .openapi('Organization')

const OrganizationAddressSchema = z
  .object({
    city: z.string().min(2).max(99).openapi({ example: 'MyCity' }),
    companyName: z.string().min(0).max(254).exactOptional().openapi({ example: 'ACME Inc.' }),
    countryCode: z
      .string()
      .min(0)
      .max(2)
      .openapi({ description: 'The ISO 3166 two-letter country code', example: 'DE' }),
    countryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country name', example: 'Germany', readOnly: true }),
    firstname: z.string().min(0).max(255).openapi({ example: 'Max' }),
    lastname: z.string().min(0).max(255).openapi({ example: 'Muster' }),
    postCode: z.string().min(2).max(40).openapi({ example: 12345 }),
    street: z.string().min(3).max(254).openapi({ example: 'Examplestreet 1' }),
    telephone: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({ description: 'The telephone number e.g.', example: '+49 8088 12345' }),
  })
  .openapi({
    required: ['city', 'countryCode', 'firstname', 'lastname', 'postCode', 'street'],
    title: 'OrganizationAddress',
  })
  .openapi('OrganizationAddress')

const OrganizationUpdateSchema = z
  .object({
    name: z
      .string()
      .min(3)
      .max(254)
      .exactOptional()
      .openapi({ description: 'The name of the organization', example: 'ACME Inc.' }),
  })
  .openapi({ description: 'An organization', title: 'OrganizationUpdate', required: [] })
  .openapi('OrganizationUpdate')

const OrganizationUserInvitationSchema = z
  .object({
    email: z.string().exactOptional(),
    roles: z.array(z.string()),
    userName: z.string().exactOptional(),
  })
  .openapi({ required: ['roles'], title: 'OrganizationUserInvitation' })
  .openapi('OrganizationUserInvitation')

const OrganizationUserInvitationListRequestSchema = z
  .object({ invitations: z.array(OrganizationUserInvitationSchema) })
  .openapi({ required: ['invitations'], title: 'OrganizationUserInvitationListRequest' })
  .openapi('OrganizationUserInvitationListRequest')

const PaginatedResponseOfApiKeyPresentationSchema = z
  .object({
    elements: z.array(ApiKeyPresentationSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfApiKeyPresentation',
  })
  .openapi('PaginatedResponseOfApiKeyPresentation')

const PaginatedResponseOfApiKeyPrivilegeSchema = z
  .object({
    elements: z.array(ApiKeyPrivilegeSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfApiKeyPrivilege',
  })
  .openapi('PaginatedResponseOfApiKeyPrivilege')

const PaginatedResponseOfApiKeyPrivilegeInfoSchema = z
  .object({
    elements: z.array(ApiKeyPrivilegeInfoSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfApiKeyPrivilegeInfo',
  })
  .openapi('PaginatedResponseOfApiKeyPrivilegeInfo')

const PaginatedResponseOfChangeLogEntrySchema = z
  .object({
    elements: z.array(ChangeLogEntrySchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfChangeLogEntry',
  })
  .openapi('PaginatedResponseOfChangeLogEntry')

const PaginatedResponseOfCountrySchema = z
  .object({
    elements: z.array(CountrySchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfCountry' })
  .openapi('PaginatedResponseOfCountry')

const PaginatedResponseOfDocumentSchema = z
  .object({
    elements: z.array(DocumentSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfDocument' })
  .openapi('PaginatedResponseOfDocument')

const PaginatedResponseOfGuidSchema = z
  .object({
    elements: z.array(GuidSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfGuid' })
  .openapi('PaginatedResponseOfGuid')

const PaginatedResponseOfGuidCollectionSchema = z
  .object({
    elements: z.array(GuidCollectionSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfGuidCollection',
  })
  .openapi('PaginatedResponseOfGuidCollection')

const PaginatedResponseOfHistoryItemSchema = z
  .object({
    elements: z.array(HistoryItemSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfHistoryItem' })
  .openapi('PaginatedResponseOfHistoryItem')

const PaginatedResponseOfId4nPresentationSchema = z
  .object({
    elements: z.array(Id4nPresentationSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfId4nPresentation',
  })
  .openapi('PaginatedResponseOfId4nPresentation')

const PaginatedResponseOfOrganizationSchema = z
  .object({
    elements: z.array(OrganizationSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfOrganization' })
  .openapi('PaginatedResponseOfOrganization')

const PartnerOrganizationSchema = z
  .object({
    logoURL: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to a logo of the organization',
        example: '/api/v1/public/images/abcdef',
        readOnly: true,
      }),
    name: z
      .string()
      .min(3)
      .max(254)
      .exactOptional()
      .openapi({
        description: 'The name of the organization',
        example: 'ACME Inc.',
        readOnly: true,
      }),
    namespace: z
      .string()
      .min(3)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The namespace of the organization',
        example: 'de.acme',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A partner organization', title: 'PartnerOrganization', required: [] })
  .openapi('PartnerOrganization')

const PaginatedResponseOfPartnerOrganizationSchema = z
  .object({
    elements: z.array(PartnerOrganizationSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfPartnerOrganization',
  })
  .openapi('PaginatedResponseOfPartnerOrganization')

const RoleSchema = z
  .object({ name: z.string().exactOptional(), privileges: z.array(z.string()).exactOptional() })
  .openapi({ title: 'Role', required: [] })
  .openapi('Role')

const PaginatedResponseOfRoleSchema = z
  .object({
    elements: z.array(RoleSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfRole' })
  .openapi('PaginatedResponseOfRole')

const UserPresentationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: false, name: 'id', wrapped: false } }),
    name: z.string().exactOptional(),
  })
  .openapi({ title: 'UserPresentation', required: [] })
  .openapi('UserPresentation')

const PaginatedResponseOfUserPresentationSchema = z
  .object({
    elements: z.array(UserPresentationSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({
    required: ['elements', 'limit', 'offset'],
    title: 'PaginatedResponseOfUserPresentation',
  })
  .openapi('PaginatedResponseOfUserPresentation')

const UserRolesSchema = z
  .object({
    roles: z.array(z.string()).exactOptional(),
    user: UserPresentationSchema.exactOptional(),
  })
  .openapi({ title: 'UserRoles', required: [] })
  .openapi('UserRoles')

const PaginatedResponseOfUserRolesSchema = z
  .object({
    elements: z.array(UserRolesSchema),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfUserRoles' })
  .openapi('PaginatedResponseOfUserRoles')

const PaginatedResponseOfstringSchema = z
  .object({
    elements: z.array(z.string()),
    limit: z.int32().openapi({ description: 'The number of returned elements', example: 100 }),
    offset: z.int32().openapi({ description: 'Starting with the n-th element', example: 0 }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of elements', example: 200 }),
  })
  .openapi({ required: ['elements', 'limit', 'offset'], title: 'PaginatedResponseOfstring' })
  .openapi('PaginatedResponseOfstring')

const PasswordResetRequestSchema = z
  .object({ username: z.string() })
  .openapi({ required: ['username'], title: 'PasswordResetRequest' })
  .openapi('PasswordResetRequest')

const PasswordResetVerificationRequestSchema = z
  .object({ password: z.string(), token: z.string() })
  .openapi({ required: ['password', 'token'], title: 'PasswordResetVerificationRequest' })
  .openapi('PasswordResetVerificationRequest')

const PublicImagePresentationSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The uri/url of the image',
        example: '/api/v1/public/image/bc671c63-4a9b-46e7-8c59-9bbe1917e6cc',
        readOnly: true,
      }),
  })
  .openapi({ title: 'PublicImagePresentation', required: [] })
  .openapi('PublicImagePresentation')

const QueuePresentationSchema = z
  .object({
    active: z.boolean().openapi({ example: true }),
    id: z.string().openapi({ example: '<default>' }),
    waitingMessages: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The count of queued messages',
        example: true,
      }),
  })
  .openapi({ required: ['active', 'id'], title: 'QueuePresentation' })
  .openapi('QueuePresentation')

const QueueUpdateRequestSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this value is set to false the queue will be deleted.',
        example: true,
      }),
    id: z.string().exactOptional().openapi({ example: '<default>' }),
    purgeQueue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set this value to true if you want to purge the queue.',
        example: false,
      }),
  })
  .openapi({ title: 'QueueUpdateRequest', required: [] })
  .openapi('QueueUpdateRequest')

const RegistrationVerificationTokenPresentationSchema = z
  .object({ token: z.string() })
  .openapi({ required: ['token'], title: 'RegistrationVerificationTokenPresentation' })
  .openapi('RegistrationVerificationTokenPresentation')

const RemoveApiKeyPrivilegeRequestSchema = z
  .object({ privilege: z.string() })
  .openapi({ required: ['privilege'], title: 'RemoveApiKeyPrivilegeRequest' })
  .openapi('RemoveApiKeyPrivilegeRequest')

const RemovePartnerRequestSchema = z
  .object({
    organizationId: z
      .string()
      .openapi({
        description: 'The namespace of the partner organization to remove',
        example: 'org.acme',
      }),
  })
  .openapi({ required: ['organizationId'], title: 'RemovePartnerRequest' })
  .openapi('RemovePartnerRequest')

const RouteSchema = z
  .object({
    params: z.record(z.string(), z.string()),
    priority: z.int32().exactOptional(),
    public: z.boolean(),
    type: z.string(),
    validUntil: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['params', 'public', 'type'], title: 'Route' })
  .openapi('Route')

const RoutingOptionsSchema = z
  .object({ deleteOutdatedRoutes: z.boolean().exactOptional() })
  .openapi({ title: 'RoutingOptions', required: [] })
  .openapi('RoutingOptions')

const RoutingFileSchema = z
  .object({ options: RoutingOptionsSchema.exactOptional(), routes: z.array(RouteSchema) })
  .openapi({ required: ['routes'], title: 'RoutingFile' })
  .openapi('RoutingFile')

const RoutingFileRequestSchema = z
  .object({ organizationId: z.string().exactOptional(), routing: RoutingFileSchema })
  .openapi({ required: ['routing'], title: 'RoutingFileRequest' })
  .openapi('RoutingFileRequest')

const SendCustomMessageSchema = z
  .object({
    data: z
      .record(z.string(), z.string())
      .openapi({ description: 'Custom data in a map. You may use JSON content', example: 'x = y' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({
        description: 'The name of the message (organisation specific)',
        example: '<event name>',
      }),
  })
  .openapi({ required: ['data', 'name'], title: 'SendCustomMessage' })
  .openapi('SendCustomMessage')

const ServiceCostsSchema = z
  .object({ listing: z.record(z.string(), z.number()) })
  .openapi({ required: ['listing'], title: 'ServiceCosts' })
  .openapi('ServiceCosts')

const SimpleMessageResponseSchema = z
  .object({ message: z.string() })
  .openapi({ required: ['message'], title: 'SimpleMessageResponse' })
  .openapi('SimpleMessageResponse')

const TransferReceiveInfoSchema = z
  .object({
    organizationId: z
      .string()
      .openapi({
        description:
          'Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.',
        example: 'de.id4i',
      }),
  })
  .openapi({ required: ['organizationId'], title: 'TransferReceiveInfo' })
  .openapi('TransferReceiveInfo')

const TransferSendInfoSchema = z
  .object({
    holderOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The current holder of the object',
        example: 'de.id4i',
        readOnly: true,
      }),
    keepOwnership: z
      .boolean()
      .openapi({
        description: 'Keep the public ownership while transferring the object',
        example: true,
      }),
    openForClaims: z
      .boolean()
      .openapi({
        description:
          'Allow anyone who knows (or can scan) the ID4N to claim ownership of this object',
        example: false,
      }),
    ownerOrganizationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The current publicly visible owner of the object',
        example: 'de.bluerain',
        readOnly: true,
      }),
    recipientOrganizationIds: z
      .array(z.string())
      .openapi({
        description: 'Allow only these organizations to obtain this object',
        example: ['de.acme', 'com.porsche', 'de.bluerain'],
      }),
  })
  .openapi({
    required: ['keepOwnership', 'openForClaims', 'recipientOrganizationIds'],
    title: 'TransferSendInfo',
  })
  .openapi('TransferSendInfo')

const UserRegistrationRequestSchema = z
  .object({
    email: z.string(),
    password: z.string().min(8).max(99),
    username: z.string().regex(/[a-zA-Z0-9_.-]{6,50}/),
  })
  .openapi({ required: ['email', 'password', 'username'], title: 'UserRegistrationRequest' })
  .openapi('UserRegistrationRequest')

const UserRegistrationResponseSchema = z
  .object({
    email: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    message: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: ['id'], title: 'UserRegistrationResponse' })
  .openapi('UserRegistrationResponse')

const WhoIsResponseSchema = z
  .object({
    aliases: z.record(z.string(), z.string()).exactOptional(),
    organization: OrganizationSchema.exactOptional(),
    organizationAddress: OrganizationAddressSchema.exactOptional(),
  })
  .openapi({ title: 'WhoIsResponse', required: [] })
  .openapi('WhoIsResponse')

const ChangeRoleRequestRequestBody = {
  description: 'changeRoleRequest',
  content: {
    'application/json': { schema: ChangeRoleRequestSchema },
    'application/xml': { schema: ChangeRoleRequestSchema },
  },
  required: true,
}

const ListOfId4nsRequestBody = {
  description: 'id4ns',
  content: {
    'application/json': { schema: ListOfId4nsSchema },
    'application/xml': { schema: ListOfId4nsSchema },
  },
  required: true,
}

const ListOfId4ns2RequestBody = {
  description: 'listOfGuids',
  content: {
    'application/json': { schema: ListOfId4nsSchema },
    'application/xml': { schema: ListOfId4nsSchema },
  },
  required: true,
}

const OrganizationAddressRequestBody = {
  description: 'addressResource',
  content: {
    'application/json': { schema: OrganizationAddressSchema },
    'application/xml': { schema: OrganizationAddressSchema },
  },
  required: true,
}

const CreateDocumentRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          content: z.file().openapi({ type: 'string', format: 'binary', description: 'content' }),
        })
        .openapi({ required: ['content'] }),
    },
  },
  required: true,
}

const AuthorizationSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const putAccountPasswordRoute = createRoute({
  method: 'put',
  path: '/account/password',
  tags: ['Accounts'],
  summary: 'Verify password reset',
  description: 'Setting a new password and verifying the request to set the password.',
  operationId: 'verifyPasswordReset',
  request: {
    body: {
      description: 'Contains the new password and the verification token to set the new password.',
      content: {
        'application/json': { schema: PasswordResetVerificationRequestSchema },
        'application/xml': { schema: PasswordResetVerificationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SimpleMessageResponseSchema },
        'application/xml': { schema: SimpleMessageResponseSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const postAccountPasswordRoute = createRoute({
  method: 'post',
  path: '/account/password',
  tags: ['Accounts'],
  summary: 'Request password reset',
  description: 'Requesting a reset for a new password. ',
  operationId: 'requestPasswordReset',
  request: {
    body: {
      description: 'Contains the required information to request a new password.',
      content: {
        'application/json': { schema: PasswordResetRequestSchema },
        'application/xml': { schema: PasswordResetRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SimpleMessageResponseSchema },
        'application/xml': { schema: SimpleMessageResponseSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const putAccountRegistrationRoute = createRoute({
  method: 'put',
  path: '/account/registration',
  tags: ['Accounts'],
  summary: 'Complete registration',
  description:
    'Completing a registration e.g. for invited users. Finish registration with a username and a password.',
  operationId: 'completeRegistration',
  request: {
    body: {
      description: 'Contains the verification token, the username and the initial password.',
      content: {
        'application/json': { schema: CompleteUserRegistrationRequestSchema },
        'application/xml': { schema: CompleteUserRegistrationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const postAccountRegistrationRoute = createRoute({
  method: 'post',
  path: '/account/registration',
  tags: ['Accounts'],
  summary: 'Register user',
  description: 'Registering a new user.',
  operationId: 'registerUser',
  request: {
    body: {
      description: 'The user information about the new created user.',
      content: {
        'application/json': { schema: UserRegistrationRequestSchema },
        'application/xml': { schema: UserRegistrationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UserRegistrationResponseSchema },
        'application/xml': { schema: UserRegistrationResponseSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const postAccountVerificationRoute = createRoute({
  method: 'post',
  path: '/account/verification',
  tags: ['Accounts'],
  summary: 'Verify registration',
  description: 'Verifies a new user registration.',
  operationId: 'verifyUserRegistration',
  request: {
    body: {
      description: 'The token for user verification.',
      content: {
        'application/json': { schema: RegistrationVerificationTokenPresentationSchema },
        'application/xml': { schema: RegistrationVerificationTokenPresentationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const getApiV1ApikeysRoute = createRoute({
  method: 'get',
  path: '/api/v1/apikeys',
  tags: ['Api Keys'],
  summary: 'Find API key by organization',
  description: 'Finding all API key assigned to the specified organization in a paginated manner.',
  operationId: 'listAllApiKeysOfOrganization',
  request: {
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The namespace of the organization to search in.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfApiKeyPresentationSchema },
        'application/xml': { schema: PaginatedResponseOfApiKeyPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1ApikeysRoute = createRoute({
  method: 'post',
  path: '/api/v1/apikeys',
  tags: ['Api Keys'],
  summary: 'Create API key',
  description: 'Creation of a new API key.',
  operationId: 'createNewApiKey',
  request: {
    body: {
      description: 'API key to be created.',
      content: {
        'application/json': { schema: ApiKeyCreationRequestSchema },
        'application/xml': { schema: ApiKeyCreationRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiKeyPresentationSchema },
        'application/xml': { schema: ApiKeyPresentationSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1ApikeysPrivilegesRoute = createRoute({
  method: 'get',
  path: '/api/v1/apikeys/privileges',
  tags: ['Api Keys'],
  summary: 'List all privileges',
  description: 'Listing all possible API key privileges.',
  operationId: 'listAllApiKeyPrivileges',
  request: {
    query: z.object({
      id4nConcerning: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'id4nConcerning',
            in: 'query',
            name: 'id4nConcerning',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfApiKeyPrivilegeInfoSchema },
        'application/xml': { schema: PaginatedResponseOfApiKeyPrivilegeInfoSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1ApikeysKeyRoute = createRoute({
  method: 'get',
  path: '/api/v1/apikeys/{key}',
  tags: ['Api Keys'],
  summary: 'Show API key',
  description: 'Showing the details of an API key.',
  operationId: 'getApiKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The API key to show.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ApiKeyPresentationSchema },
        'application/xml': { schema: ApiKeyPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1ApikeysKeyRoute = createRoute({
  method: 'put',
  path: '/api/v1/apikeys/{key}',
  tags: ['Api Keys'],
  summary: 'Update API keys',
  description:
    'API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.',
  operationId: 'updateApiKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The API key to be updated.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new values to apply.',
      content: {
        'application/json': { schema: ApiKeyChangeRequestSchema },
        'application/xml': { schema: ApiKeyChangeRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1ApikeysKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/apikeys/{key}',
  tags: ['Api Keys'],
  summary: 'Delete API key',
  description: 'Deletion of an API key.',
  operationId: 'deleteApiKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'The API key to delete.',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1ApikeysKeyPrivilegesRoute = createRoute({
  method: 'get',
  path: '/api/v1/apikeys/{key}/privileges',
  tags: ['Api Keys'],
  summary: 'List privileges',
  operationId: 'listApiKeyPrivileges',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfApiKeyPrivilegeSchema },
        'application/xml': { schema: PaginatedResponseOfApiKeyPrivilegeSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1ApikeysKeyPrivilegesRoute = createRoute({
  method: 'post',
  path: '/api/v1/apikeys/{key}/privileges',
  tags: ['Api Keys'],
  summary: 'Add privilege',
  operationId: 'addApiKeyPrivilege',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'addApiKeyPrivilegeRequest',
      content: {
        'application/json': { schema: AddApiKeyPrivilegeRequestSchema },
        'application/xml': { schema: AddApiKeyPrivilegeRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1ApikeysKeyPrivilegesRoute = createRoute({
  method: 'delete',
  path: '/api/v1/apikeys/{key}/privileges',
  tags: ['Api Keys'],
  summary: 'Remove privilege',
  operationId: 'removeApiKeyPrivilege',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'removeApiKeyPrivilegeRequest',
      content: {
        'application/json': { schema: RemoveApiKeyPrivilegeRequestSchema },
        'application/xml': { schema: RemoveApiKeyPrivilegeRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute = createRoute({
  method: 'get',
  path: '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns',
  tags: ['Api Keys'],
  summary: 'ID4ns of a privilege',
  description: 'Listing ID4ns of a id4n concerning privilege',
  operationId: 'listId4ns',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      privilege: z
        .string()
        .openapi({
          param: {
            description: 'privilege',
            in: 'path',
            name: 'privilege',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfId4nPresentationSchema },
        'application/xml': { schema: PaginatedResponseOfId4nPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute = createRoute({
  method: 'post',
  path: '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns',
  tags: ['Api Keys'],
  summary: 'Add ID4ns of a privilege',
  operationId: 'addApiKeyPrivilegeForId4ns',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      privilege: z
        .string()
        .openapi({
          param: {
            description: 'privilege',
            in: 'path',
            name: 'privilege',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListOfId4nsRequestBody,
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/apikeys/{key}/privileges/{privilege}/id4ns',
  tags: ['Api Keys'],
  summary: 'Remove id4ns of a privilege',
  operationId: 'removeApiKeyPrivilegeForId4ns',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      privilege: z
        .string()
        .openapi({
          param: {
            description: 'privilege',
            in: 'path',
            name: 'privilege',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListOfId4nsRequestBody,
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1BillingOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/billing/{organizationId}',
  tags: ['Billing'],
  summary: 'Get billing amount of services for a given organization',
  operationId: 'getSumForOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The organization to compute the billing information for',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Billing start date',
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Billing end date',
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ServiceCostsSchema },
        'application/xml': { schema: ServiceCostsSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1BillingOrganizationIdPositionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/billing/{organizationId}/positions',
  tags: ['Billing'],
  summary: 'Get billing positions for a given organization',
  operationId: 'getPositionsForOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The organization to compute the billing information for',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Billing start date',
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Billing end date',
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(BillingPositionSchema) },
        'application/xml': { schema: z.array(BillingPositionSchema) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1ChangelogOrganizationOrganizationIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/changelog/organization/{organizationId}/',
  tags: ['Auditing'],
  summary: 'List change log entries of an organization',
  description: 'Listing change log entries of the specified organization id.',
  operationId: 'listOrganizationChangeLog',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description:
              'The namespace identifying the organization whose change log entries are to be listed',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      messageMimeType: z
        .string()
        .default('text/mustache')
        .exactOptional()
        .openapi({
          param: {
            description:
              "The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' ",
            in: 'query',
            name: 'messageMimeType',
            required: false,
            schema: { default: 'text/mustache', type: 'string' },
          },
        }),
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'From date time as UTC Date-Time format',
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'To date time as UTC Date-Time format',
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfChangeLogEntrySchema },
        'application/xml': { schema: PaginatedResponseOfChangeLogEntrySchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1CollectionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/collections',
  tags: ['Collections'],
  summary: 'Create collection',
  operationId: 'createCollection',
  request: {
    body: {
      description: 'createInfo',
      content: {
        'application/json': { schema: CreateCollectionRequestSchema },
        'application/xml': { schema: CreateCollectionRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: Id4nSchema },
        'application/xml': { schema: Id4nSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1CollectionsId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id4n}',
  tags: ['Collections'],
  summary: 'Find collection',
  operationId: 'findCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GuidCollectionSchema },
        'application/xml': { schema: GuidCollectionSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1CollectionsId4nRoute = createRoute({
  method: 'delete',
  path: '/api/v1/collections/{id4n}',
  tags: ['Collections'],
  summary: 'Delete collection',
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1CollectionsId4nRoute = createRoute({
  method: 'patch',
  path: '/api/v1/collections/{id4n}',
  tags: ['Collections'],
  summary: 'Update collection',
  description: 'Update collection changing only the given values',
  operationId: 'updateCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: GuidCollectionSchema },
        'application/xml': { schema: GuidCollectionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
    },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1CollectionsId4nElementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/collections/{id4n}/elements',
  tags: ['Collections'],
  summary: 'List contents of the collection',
  operationId: 'listElementsOfCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization namespace.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfGuidSchema },
        'application/xml': { schema: PaginatedResponseOfGuidSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1CollectionsId4nElementsRoute = createRoute({
  method: 'post',
  path: '/api/v1/collections/{id4n}/elements',
  tags: ['Collections'],
  summary: 'Add elements to collection',
  operationId: 'addElementsToCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListOfId4ns2RequestBody,
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1CollectionsId4nElementsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/collections/{id4n}/elements',
  tags: ['Collections'],
  summary: 'Remove elements from collection',
  operationId: 'removeElementsFromCollection',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ListOfId4ns2RequestBody,
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1CountriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/countries',
  tags: ['Organizations'],
  summary: 'List countries',
  operationId: 'listCountries',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfCountrySchema },
        'application/xml': { schema: PaginatedResponseOfCountrySchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1DocumentsId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{id4n}',
  tags: ['Storage'],
  summary: 'List documents',
  description: 'Listing all documents of an id4n',
  operationId: 'listAllDocuments',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by owner organization',
            in: 'query',
            name: 'owner',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfDocumentSchema },
        'application/xml': { schema: PaginatedResponseOfDocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1DocumentsId4nOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{id4n}/{organizationId}',
  tags: ['Storage'],
  summary: 'List organization specific documents',
  description: 'Listing documents of an id4n seen by a specified organization',
  operationId: 'listDocuments',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by owner organization',
            in: 'query',
            name: 'owner',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfDocumentSchema },
        'application/xml': { schema: PaginatedResponseOfDocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1DocumentsId4nOrganizationIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/documents/{id4n}/{organizationId}',
  tags: ['Storage'],
  summary: 'Put an document for an id4n',
  description: 'Creating or overwriting an existing document ',
  operationId: 'putDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: CreateDocumentRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DocumentSchema },
        'application/xml': { schema: DocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1DocumentsId4nOrganizationIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/documents/{id4n}/{organizationId}',
  tags: ['Storage'],
  summary: 'Create an document for an id4n',
  description:
    "The documents' mime type is suggested on octet-stream data. Otherwise the specified content mime type is used.",
  operationId: 'createDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: CreateDocumentRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DocumentSchema },
        'application/xml': { schema: DocumentSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1DocumentsId4nOrganizationIdFileNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{id4n}/{organizationId}/{fileName}',
  tags: ['Storage'],
  summary: 'Read document contents',
  operationId: 'readDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1DocumentsId4nOrganizationIdFileNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/documents/{id4n}/{organizationId}/{fileName}',
  tags: ['Storage'],
  summary: 'Delete a document',
  operationId: 'deleteDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata',
  tags: ['Storage'],
  summary: 'Retrieve a document (meta-data only, no content)',
  operationId: 'getDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DocumentSchema },
        'application/xml': { schema: DocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute = createRoute({
  method: 'patch',
  path: '/api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata',
  tags: ['Storage'],
  summary: 'Update a document',
  operationId: 'updateDocumentMetadata',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'document',
      content: {
        'application/json': { schema: DocumentUpdateSchema },
        'application/xml': { schema: DocumentUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DocumentSchema },
        'application/xml': { schema: DocumentSchema },
      },
    },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1GuidsRoute = createRoute({
  method: 'post',
  path: '/api/v1/guids',
  tags: ['Guids'],
  summary: 'Create GUID(s)',
  description: 'Creating one or more GUIDs with a specified length.',
  operationId: 'createGuid',
  request: {
    body: {
      description: 'GUID creation model',
      content: {
        'application/json': { schema: CreateGuidRequestSchema },
        'application/xml': { schema: CreateGuidRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListOfId4nsSchema },
        'application/xml': { schema: ListOfId4nsSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1GuidsWithoutCollectionRoute = createRoute({
  method: 'get',
  path: '/api/v1/guids/withoutCollection',
  tags: ['Guids'],
  summary: 'Retrieve GUIDs not in any collection',
  operationId: 'getGuidsWithoutCollection',
  request: {
    query: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization to search GUIDs for',
            in: 'query',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfGuidSchema },
        'application/xml': { schema: PaginatedResponseOfGuidSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1GuidsId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/guids/{id4n}',
  tags: ['Guids'],
  summary: 'Retrieve GUID information',
  operationId: 'getGuid',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The GUID number',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization namespace to resolve.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GuidSchema },
        'application/xml': { schema: GuidSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1GuidsId4nRoute = createRoute({
  method: 'patch',
  path: '/api/v1/guids/{id4n}',
  tags: ['Guids'],
  summary: 'Change GUID information.',
  description: 'Allows ownership transfer.',
  operationId: 'updateGuid',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The GUID number',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: GuidSchema },
        'application/xml': { schema: GuidSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
    },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1HistoryId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/{id4n}',
  tags: ['History'],
  summary: 'List history',
  description: 'Lists the history of a GUID',
  operationId: 'filteredList',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includePrivate: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Also return private history entries',
            in: 'query',
            name: 'includePrivate',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show only entries created by one of the given organizations. This parameter can be used multiple times.',
            in: 'query',
            name: 'organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.union([
            z.literal('CREATED'),
            z.literal('DESTROYED'),
            z.literal('RECYCLED'),
            z.literal('SHIPMENT_PREPARED'),
            z.literal('STORED'),
            z.literal('RETRIEVED_FROM_STORAGE'),
            z.literal('PACKAGED'),
            z.literal('DISPATCHED'),
            z.literal('RECEIVED'),
            z.literal('DELIVERY_REFUSED'),
            z.literal('REPROCESSING_STARTED'),
            z.literal('REPROCESSING_STEP_STARTED'),
            z.literal('REPROCESSING_STEP_CANCELLED'),
            z.literal('REPROCESSING_STEP_FINISHED'),
            z.literal('REPROCESSING_CANCELLED'),
            z.literal('REPROCESSING_FINISHED'),
            z.literal('DISASSEMBLED'),
            z.literal('MAINTENANCE_STARTED'),
            z.literal('MAINTENANCE_STEP_STARTED'),
            z.literal('MAINTENANCE_STEP_CANCELLED'),
            z.literal('MAINTENANCE_STEP_FINISHED'),
            z.literal('MAINTENANCE_CANCELLED'),
            z.literal('MAINTENANCE_FINISHED'),
            z.literal('PRODUCTION_STARTED'),
            z.literal('PRODUCTION_CANCELLED'),
            z.literal('PRODUCTION_FINISHED'),
            z.literal('PRODUCTION_STEP_STARTED'),
            z.literal('PRODUCTION_STEP_CANCELLED'),
            z.literal('PRODUCTION_STEP_FINISHED'),
            z.literal('QUALITY_CHECK_PERFORMED'),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show only entries matching one of the given history item types. This parameter can be used multiple times.',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: [
                'CREATED',
                'DESTROYED',
                'RECYCLED',
                'SHIPMENT_PREPARED',
                'STORED',
                'RETRIEVED_FROM_STORAGE',
                'PACKAGED',
                'DISPATCHED',
                'RECEIVED',
                'DELIVERY_REFUSED',
                'REPROCESSING_STARTED',
                'REPROCESSING_STEP_STARTED',
                'REPROCESSING_STEP_CANCELLED',
                'REPROCESSING_STEP_FINISHED',
                'REPROCESSING_CANCELLED',
                'REPROCESSING_FINISHED',
                'DISASSEMBLED',
                'MAINTENANCE_STARTED',
                'MAINTENANCE_STEP_STARTED',
                'MAINTENANCE_STEP_CANCELLED',
                'MAINTENANCE_STEP_FINISHED',
                'MAINTENANCE_CANCELLED',
                'MAINTENANCE_FINISHED',
                'PRODUCTION_STARTED',
                'PRODUCTION_CANCELLED',
                'PRODUCTION_FINISHED',
                'PRODUCTION_STEP_STARTED',
                'PRODUCTION_STEP_CANCELLED',
                'PRODUCTION_STEP_FINISHED',
                'QUALITY_CHECK_PERFORMED',
              ],
              items: {
                enum: [
                  'CREATED',
                  'DESTROYED',
                  'RECYCLED',
                  'SHIPMENT_PREPARED',
                  'STORED',
                  'RETRIEVED_FROM_STORAGE',
                  'PACKAGED',
                  'DISPATCHED',
                  'RECEIVED',
                  'DELIVERY_REFUSED',
                  'REPROCESSING_STARTED',
                  'REPROCESSING_STEP_STARTED',
                  'REPROCESSING_STEP_CANCELLED',
                  'REPROCESSING_STEP_FINISHED',
                  'REPROCESSING_CANCELLED',
                  'REPROCESSING_FINISHED',
                  'DISASSEMBLED',
                  'MAINTENANCE_STARTED',
                  'MAINTENANCE_STEP_STARTED',
                  'MAINTENANCE_STEP_CANCELLED',
                  'MAINTENANCE_STEP_FINISHED',
                  'MAINTENANCE_CANCELLED',
                  'MAINTENANCE_FINISHED',
                  'PRODUCTION_STARTED',
                  'PRODUCTION_CANCELLED',
                  'PRODUCTION_FINISHED',
                  'PRODUCTION_STEP_STARTED',
                  'PRODUCTION_STEP_CANCELLED',
                  'PRODUCTION_STEP_FINISHED',
                  'QUALITY_CHECK_PERFORMED',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      qualifier: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.',
            explode: true,
            in: 'query',
            name: 'qualifier',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      fromDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'From date time as UTC Date-Time format',
            in: 'query',
            name: 'fromDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      toDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'To date time as UTC Date-Time format',
            in: 'query',
            name: 'toDate',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfHistoryItemSchema },
        'application/xml': { schema: PaginatedResponseOfHistoryItemSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1HistoryId4nRoute = createRoute({
  method: 'post',
  path: '/api/v1/history/{id4n}',
  tags: ['History'],
  summary: 'Add history item',
  description: 'Add a new history item',
  operationId: 'addItem',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The history item to publish',
      content: {
        'application/json': { schema: HistoryItemSchema },
        'application/xml': { schema: HistoryItemSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1HistoryId4nOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/{id4n}/{organizationId}',
  tags: ['History'],
  summary: 'DEPRECATED - List history',
  description:
    'DEPRECATED - please use filteredList with organization parameter to achieve the same functionality',
  operationId: 'list',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includePrivate: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Also return private history entries',
            in: 'query',
            name: 'includePrivate',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfHistoryItemSchema },
        'application/xml': { schema: PaginatedResponseOfHistoryItemSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  deprecated: true,
  security: [{ Authorization: [] }],
})

export const getApiV1HistoryId4nOrganizationIdSequenceIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/history/{id4n}/{organizationId}/{sequenceId}',
  tags: ['History'],
  summary: 'Get history item',
  operationId: 'retrieveItem',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sequenceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'sequenceId',
            in: 'path',
            name: 'sequenceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: HistoryItemSchema },
        'application/xml': { schema: HistoryItemSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1HistoryId4nOrganizationIdSequenceIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/history/{id4n}/{organizationId}/{sequenceId}',
  tags: ['History'],
  summary: 'Update history item',
  operationId: 'updateItem',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sequenceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'sequenceId',
            in: 'path',
            name: 'sequenceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'update',
      content: {
        'application/json': { schema: HistoryItemUpdateSchema },
        'application/xml': { schema: HistoryItemUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: HistoryItemSchema },
        'application/xml': { schema: HistoryItemSchema },
      },
    },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute = createRoute({
  method: 'put',
  path: '/api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility',
  tags: ['History'],
  summary: 'Set history item visibility',
  operationId: 'updateItemVisibility',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sequenceId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'sequenceId',
            in: 'path',
            name: 'sequenceId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'History item visibility restrictions',
      content: {
        'application/json': { schema: VisibilitySchema },
        'application/xml': { schema: VisibilitySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: HistoryItemSchema },
        'application/xml': { schema: HistoryItemSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1Id4nsId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/id4ns/{id4n}',
  tags: ['Guids'],
  summary: 'Retrieve ID4n information',
  description: 'Retrieving basic information about an ID like the type and the creation time.',
  operationId: 'getId4n',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The ID to resolve to',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization namespace to resolve.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: Id4nPresentationSchema },
        'application/xml': { schema: Id4nPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1Id4nsId4nAliasRoute = createRoute({
  method: 'get',
  path: '/api/v1/id4ns/{id4n}/alias',
  tags: ['Alias', 'Guids'],
  summary: 'Get all aliases for the given GUID or Collection.',
  description:
    'Looks up the alias for each alias type (group and single) and returns a map of all aliases found.',
  operationId: 'getGuidAliases',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The GUID or Collection to operate on',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.record(z.string(), z.string()) },
        'application/xml': { schema: z.record(z.string(), z.string()) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1Id4nsId4nAliasAliasTypeRoute = createRoute({
  method: 'post',
  path: '/api/v1/id4ns/{id4n}/alias/{aliasType}',
  tags: ['Alias', 'Guids'],
  summary: 'Add alias for GUID or Collection',
  description:
    'Adds or replaces aliases for single ID4ns (alias type item and mapp) or groups of ID4ns (alias types gtin, ean and article)',
  operationId: 'addGuidAlias',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The GUID or Collection to operate on',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      aliasType: z
        .enum([
          'gtin',
          'article',
          'mapp',
          'item',
          'rfid',
          'tracking',
          'eclass',
          'unspsc',
          'product',
          'material',
          'reference',
        ])
        .openapi({
          param: {
            description: 'Alias type, see the corresponding API model',
            in: 'path',
            name: 'aliasType',
            required: true,
            schema: {
              enum: [
                'gtin',
                'article',
                'mapp',
                'item',
                'rfid',
                'tracking',
                'eclass',
                'unspsc',
                'product',
                'material',
                'reference',
              ],
              type: 'string',
            },
          },
        }),
    }),
    body: {
      description: 'The alias to add or update',
      content: {
        'application/json': { schema: GuidAliasSchema },
        'application/xml': { schema: GuidAliasSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1Id4nsId4nAliasAliasTypeRoute = createRoute({
  method: 'delete',
  path: '/api/v1/id4ns/{id4n}/alias/{aliasType}',
  tags: ['Alias', 'Guids'],
  summary: 'Remove aliases from GUID or Collection',
  description: 'Remove the alias of the given type',
  operationId: 'removeGuidAlias',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The GUID or Collection to operate on',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      aliasType: z
        .enum([
          'gtin',
          'article',
          'mapp',
          'item',
          'rfid',
          'tracking',
          'eclass',
          'unspsc',
          'product',
          'material',
          'reference',
        ])
        .openapi({
          param: {
            description: 'Alias type, see the corresponding API model',
            in: 'path',
            name: 'aliasType',
            required: true,
            schema: {
              enum: [
                'gtin',
                'article',
                'mapp',
                'item',
                'rfid',
                'tracking',
                'eclass',
                'unspsc',
                'product',
                'material',
                'reference',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1Id4nsId4nCollectionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/id4ns/{id4n}/collections',
  tags: ['Guids'],
  summary: 'Retrieve collections of an ID',
  description: 'Retrieving all owned or holding collections the specified id4n is assigned to.',
  operationId: 'getCollections',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The ID which the collections should contain',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization holding the collections.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfGuidCollectionSchema },
        'application/xml': { schema: PaginatedResponseOfGuidCollectionSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1Id4nsId4nPropertiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/id4ns/{id4n}/properties',
  tags: ['Collections', 'Guids'],
  summary: 'Retrieve ID4n properties',
  description: 'List all properties of an id4n.',
  operationId: 'getProperties',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization namespace.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.record(z.string(), z.string()) },
        'application/xml': { schema: z.record(z.string(), z.string()) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1Id4nsId4nPropertiesRoute = createRoute({
  method: 'delete',
  path: '/api/v1/id4ns/{id4n}/properties',
  tags: ['Collections', 'Guids'],
  summary: 'Delete ID4n properties',
  description:
    'Partial deletion of id4n properties. If the property does not exist, it will be ignored.',
  operationId: 'deleteProperties',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The organization namespace to work on while deleting the properties.',
            in: 'query',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'A set of property keys to delete.',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1Id4nsId4nPropertiesRoute = createRoute({
  method: 'patch',
  path: '/api/v1/id4ns/{id4n}/properties',
  tags: ['Collections', 'Guids'],
  summary: 'Patch ID4n properties',
  description:
    'Partial updating of id4n properties. If a property contains a null value the property will be deleted other values will be saved and overwritten if they already exist.',
  operationId: 'patchProperties',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The organization namespace to work on while patching the properties.',
            in: 'query',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The properties to update.',
      content: {
        'application/json': { schema: z.record(z.string(), z.string()) },
        'application/xml': { schema: z.record(z.string(), z.string()) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1ImportGs1Route = createRoute({
  method: 'post',
  path: '/api/v1/import/gs1',
  tags: ['Guids'],
  summary: 'Import GS1/MAPP codes',
  description: 'Importing GS1/MAPP codes that contain unique components.',
  operationId: 'importGS1Codes',
  request: {
    body: {
      description:
        'The information how the MAPP codes should be imported and the list of MAPP codes',
      content: {
        'application/json': { schema: ImportGS1CodesRequestSchema },
        'application/xml': { schema: ImportGS1CodesRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1InfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/info',
  tags: ['Meta Information'],
  summary: 'Retrieve version information about ID4i',
  description: 'Retrieving version information about ID4i.',
  operationId: 'applicationInfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: AppInfoPresentationSchema },
        'application/xml': { schema: AppInfoPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1MicrostorageId4nOrganizationRoute = createRoute({
  method: 'get',
  path: '/api/v1/microstorage/{id4n}/{organization}',
  tags: ['Storage'],
  summary: 'Read data from microstorage',
  operationId: 'readFromMicrostorage',
  request: {
    params: z.object({
      organization: z
        .string()
        .openapi({
          param: {
            description: 'organization',
            in: 'path',
            name: 'organization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1MicrostorageId4nOrganizationRoute = createRoute({
  method: 'put',
  path: '/api/v1/microstorage/{id4n}/{organization}',
  tags: ['Storage'],
  summary: 'Write data to microstorage',
  operationId: 'writeToMicrostorage',
  request: {
    params: z.object({
      organization: z
        .string()
        .openapi({
          param: {
            description: 'organization',
            in: 'path',
            name: 'organization',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Content-Type',
            in: 'header',
            name: 'Content-Type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'Content-Length': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'Content-Length',
            in: 'header',
            name: 'Content-Length',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: { description: 'body', content: { '*/*': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1MultipleId4nsPropertiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/multiple/id4ns/properties',
  tags: ['Collections', 'Guids'],
  summary: 'Get multiple ID4n properties',
  description: 'Get a list of ID4n properties for the specified ID4ns.',
  operationId: 'getMultipleProperties',
  request: {
    query: z.object({
      id4ns: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The list of ID4ns to resolve.',
            explode: true,
            in: 'query',
            name: 'id4ns',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The organization namespace.',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ListOfId4nPropertiesSchema },
        'application/xml': { schema: ListOfId4nPropertiesSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1OrganizationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations',
  tags: ['Organizations'],
  summary: 'Create organization',
  description: 'Creating a new organization.',
  operationId: 'createOrganization',
  request: {
    body: {
      description: 'Organization to be created',
      content: {
        'application/json': { schema: OrganizationSchema },
        'application/xml': { schema: OrganizationSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationSchema },
        'application/xml': { schema: OrganizationSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}',
  tags: ['Organizations'],
  summary: 'Find organization by id/namespace',
  description: 'Returns a single organization.',
  operationId: 'findOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization to be retrieved.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationSchema },
        'application/xml': { schema: OrganizationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1OrganizationsOrganizationIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/organizations/{organizationId}',
  tags: ['Organizations'],
  summary: 'Update organization',
  operationId: 'updateOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization to be updated.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated organization object',
      content: {
        'application/json': { schema: OrganizationUpdateSchema },
        'application/xml': { schema: OrganizationUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationSchema },
        'application/xml': { schema: OrganizationSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1OrganizationsOrganizationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{organizationId}',
  tags: ['Organizations'],
  summary: 'Delete organization',
  operationId: 'deleteOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization to be deleted.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdAddressesBillingRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/addresses/billing',
  tags: ['Organizations'],
  summary: 'Retrieve billing address',
  operationId: 'findOrganizationBillingAddress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationAddressSchema },
        'application/xml': { schema: OrganizationAddressSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1OrganizationsOrganizationIdAddressesBillingRoute = createRoute({
  method: 'put',
  path: '/api/v1/organizations/{organizationId}/addresses/billing',
  tags: ['Organizations'],
  summary: 'Store billing address',
  operationId: 'updateOrganizationBillingAddress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: OrganizationAddressRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationAddressSchema },
        'application/xml': { schema: OrganizationAddressSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{organizationId}/addresses/billing',
  tags: ['Organizations'],
  summary: 'Remove billing address',
  operationId: 'deleteOrganizationBillingAddress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdAddressesDefaultRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/addresses/default',
  tags: ['Organizations'],
  summary: 'Retrieve address',
  operationId: 'findOrganizationAddress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationAddressSchema },
        'application/xml': { schema: OrganizationAddressSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1OrganizationsOrganizationIdAddressesDefaultRoute = createRoute({
  method: 'put',
  path: '/api/v1/organizations/{organizationId}/addresses/default',
  tags: ['Organizations'],
  summary: 'Store address',
  operationId: 'updateOrganizationAddress',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: OrganizationAddressRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationAddressSchema },
        'application/xml': { schema: OrganizationAddressSchema },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/collections',
  tags: ['Collections', 'Organizations'],
  summary: 'Get collections of organization',
  description:
    'Retrieving all collections of an organization in a paginated manner. You may filter the results by specifying id4n properties with filter operations (eq, in, ne) in the query parameters. e.g. `com.yourcompany.orderId.eq=1234`  ',
  operationId: 'getAllCollectionsOfOrganization',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      type: z
        .enum(['ROUTING_COLLECTION', 'LOGISTIC_COLLECTION', 'LABELLED_COLLECTION'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this type',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              enum: ['ROUTING_COLLECTION', 'LOGISTIC_COLLECTION', 'LABELLED_COLLECTION'],
              type: 'string',
            },
          },
        }),
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this label',
            in: 'query',
            name: 'label',
            required: false,
            schema: { type: 'string' },
          },
        }),
      labelPrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this label prefix',
            in: 'query',
            name: 'labelPrefix',
            required: false,
            schema: { maximum: 2147483647, minimum: 1, type: 'string' },
          },
        }),
      property: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of i4dn property filter. e.g. "com.myorga.state:IN:waiting|processing" or "com.myorga.orderId:EQ:SAP001"',
            explode: true,
            in: 'query',
            name: 'property',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfGuidCollectionSchema },
        'application/xml': { schema: PaginatedResponseOfGuidCollectionSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1OrganizationsOrganizationIdLogoRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations/{organizationId}/logo',
  tags: ['Organizations'],
  summary: 'Update organization logo',
  description: 'Updating an organization logo using a multipart file upload.',
  operationId: 'setOrganizationLogo',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization where the logo should be updated.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'An image containing the new logo.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PublicImagePresentationSchema },
        'application/xml': { schema: PublicImagePresentationSchema },
      },
    },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1OrganizationsOrganizationIdLogoRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{organizationId}/logo',
  tags: ['Organizations'],
  summary: 'Delete organization logo',
  operationId: 'deleteOrganizationLogo',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization where the logo should be deleted.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdMessagingRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/messaging',
  tags: ['Messaging'],
  operationId: 'getDefaultQueue',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: QueuePresentationSchema },
        'application/xml': { schema: QueuePresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const patchApiV1OrganizationsOrganizationIdMessagingRoute = createRoute({
  method: 'patch',
  path: '/api/v1/organizations/{organizationId}/messaging',
  tags: ['Messaging'],
  operationId: 'patchDefaultQueue',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: QueueUpdateRequestSchema },
        'application/xml': { schema: QueueUpdateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    204: { description: 'No Content' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations/{organizationId}/messaging/enqueueCustomMessage',
  tags: ['Messaging'],
  summary: 'Enqueue a custom message',
  description: 'Enqueue a custom organisation message with custom data.',
  operationId: 'enqueueCustomMessage',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The organisation namespace',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: SendCustomMessageSchema },
        'application/xml': { schema: SendCustomMessageSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdPartnerRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/partner',
  tags: ['Organizations'],
  summary: 'Get partners of an organization',
  description: 'Listing partners in a paginated manner.',
  operationId: 'getPartnerOrganizations',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization to query partner organizations',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfPartnerOrganizationSchema },
        'application/xml': { schema: PaginatedResponseOfPartnerOrganizationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1OrganizationsOrganizationIdPartnerRoute = createRoute({
  method: 'put',
  path: '/api/v1/organizations/{organizationId}/partner',
  tags: ['Organizations'],
  summary: 'Add partner',
  description:
    'Adding a partner organization. If the given organization is already a partner the result will be state 200 too.',
  operationId: 'addPartnerOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: AddPartnerRequestSchema },
        'application/xml': { schema: AddPartnerRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1OrganizationsOrganizationIdPartnerRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{organizationId}/partner',
  tags: ['Organizations'],
  summary: 'Remove partner',
  description: 'Removing a partner organization',
  operationId: 'removePartnerOrganization',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: {
        'application/json': { schema: RemovePartnerRequestSchema },
        'application/xml': { schema: RemovePartnerRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdPrivilegesRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/privileges',
  tags: ['Organizations'],
  summary: 'List my privileges',
  description: 'Listing all privileges of the current user/APIKey of the specified organization.',
  operationId: 'getOrganizationPrivileges',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/roles',
  tags: ['Accounts', 'Organizations'],
  summary: 'List users and their roles',
  description: 'Listing users and their roles in a paginated manner.',
  operationId: 'getAllOrganizationRoles',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfUserRolesSchema },
        'application/xml': { schema: PaginatedResponseOfUserRolesSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdUsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/users',
  tags: ['Accounts', 'Organizations'],
  summary: 'Find users in organization',
  description: 'Finding users in the specified organization in a paginated manner.',
  operationId: 'getUsersOfOrganization',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfUserPresentationSchema },
        'application/xml': { schema: PaginatedResponseOfUserPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1OrganizationsOrganizationIdUsersInviteRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations/{organizationId}/users/invite',
  tags: ['Accounts', 'Organizations'],
  summary: 'Invite Users',
  operationId: 'inviteUsers',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization where users should be invited',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'invitationList',
      content: {
        'application/json': { schema: OrganizationUserInvitationListRequestSchema },
        'application/xml': { schema: OrganizationUserInvitationListRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{organizationId}/users/{username}/roles',
  tags: ['Accounts', 'Organizations'],
  summary: 'Get user roles by username',
  operationId: 'getUserRoles',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'username',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfstringSchema },
        'application/xml': { schema: PaginatedResponseOfstringSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations/{organizationId}/users/{username}/roles',
  tags: ['Accounts', 'Organizations'],
  summary: 'Add role(s) to user',
  operationId: 'addUserRoles',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'username',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ChangeRoleRequestRequestBody,
  },
  responses: {
    200: { description: 'OK' },
    201: { description: 'Created' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{organizationId}/users/{username}/roles',
  tags: ['Accounts', 'Organizations'],
  summary: 'Remove role(s) from user',
  operationId: 'removeUserRoles',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The namespace of the organization',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'username',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ChangeRoleRequestRequestBody,
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicDocumentsId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/documents/{id4n}',
  tags: ['Public Services', 'Storage'],
  summary: 'List public documents',
  description: 'Listing all public documents of an id4n',
  operationId: 'listAllPublicDocuments',
  request: {
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by owner organization',
            in: 'query',
            name: 'owner',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfDocumentSchema },
        'application/xml': { schema: PaginatedResponseOfDocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/documents/{id4n}/{organizationId}/{fileName}',
  tags: ['Public Services', 'Storage'],
  summary: 'Read public document contents',
  operationId: 'readPublicDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata',
  tags: ['Public Services', 'Storage'],
  summary: 'Retrieve a public document (meta-data only, no content)',
  operationId: 'getPublicDocument',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'fileName',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: DocumentSchema },
        'application/xml': { schema: DocumentSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicHistoryId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/history/{id4n}',
  tags: ['Public Services'],
  summary: 'Shows the public history of the given GUID',
  description: 'Only contains public history items',
  operationId: 'listPublicHistory',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'GUID to retrieve the history for',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfHistoryItemSchema },
        'application/xml': { schema: PaginatedResponseOfHistoryItemSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicImageImageIDRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/image/{imageID}',
  tags: ['Images', 'Public Services'],
  summary: 'Resolve image',
  operationId: 'resolveImageUsingGET',
  request: {
    params: z.object({
      imageID: z
        .string()
        .openapi({
          param: {
            description: 'The id of the image to be resolved.',
            in: 'path',
            name: 'imageID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicOrganizationsOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/organizations/{organizationId}',
  tags: ['Public Services'],
  summary: 'Read public organization information',
  operationId: 'readOrganizationInfo',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'Organization ID',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: OrganizationSchema },
        'application/xml': { schema: OrganizationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1PublicRoutesId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/public/routes/{id4n}',
  tags: ['Public Services'],
  summary: 'Retrieve all public routes for a GUID',
  operationId: 'getRoutes',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .default('web')
        .openapi({
          param: {
            description: 'type',
            in: 'query',
            name: 'type',
            required: true,
            schema: { default: 'web', type: 'string' },
          },
        }),
      interpolate: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'interpolate',
            in: 'query',
            name: 'interpolate',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(RouteSchema) },
        'application/xml': { schema: z.array(RouteSchema) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1RolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/roles',
  tags: ['Accounts'],
  summary: 'List roles',
  description: 'Listing of roles.',
  operationId: 'listAllRoles',
  request: {
    query: z.object({
      privilege: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If specified the roles will be filtered containing that privilege.',
            in: 'query',
            name: 'privilege',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfRoleSchema },
        'application/xml': { schema: PaginatedResponseOfRoleSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1RoutingfilesId4nRoute = createRoute({
  method: 'get',
  path: '/api/v1/routingfiles/{id4n}',
  tags: ['Routing'],
  summary: 'Retrieve routing file',
  operationId: 'getRoutingFile',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: RoutingFileSchema },
        'application/xml': { schema: RoutingFileSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1RoutingfilesId4nRoute = createRoute({
  method: 'put',
  path: '/api/v1/routingfiles/{id4n}',
  tags: ['Routing'],
  summary: 'Store routing file',
  operationId: 'updateRoutingFile',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'rfr',
      content: {
        'application/json': { schema: RoutingFileRequestSchema },
        'application/xml': { schema: RoutingFileRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1RoutingfilesId4nRouteTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/routingfiles/{id4n}/route/{type}',
  tags: ['Routing'],
  summary: 'Retrieve current route of a GUID (or ID4N)',
  operationId: 'getRoute',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'The type of route you want to have',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      privateRoutes: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'privateRoutes',
            in: 'query',
            name: 'privateRoutes',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      publicRoutes: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'publicRoutes',
            in: 'query',
            name: 'publicRoutes',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      interpolate: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'interpolate',
            in: 'query',
            name: 'interpolate',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: RouteSchema },
        'application/xml': { schema: RouteSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1RoutingfilesId4nRoutesTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/routingfiles/{id4n}/routes/{type}',
  tags: ['Routing'],
  summary: 'Retrieve all routes of a GUID (or ID4N)',
  operationId: 'getAllRoutes',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'The type of route you want to have',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'organizationId',
            in: 'query',
            name: 'organizationId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      interpolate: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'interpolate',
            in: 'query',
            name: 'interpolate',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(RouteSchema) },
        'application/xml': { schema: z.array(RouteSchema) },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1SearchGuidsRoute = createRoute({
  method: 'get',
  path: '/api/v1/search/guids',
  tags: ['Alias'],
  summary: 'Search for GUIDs by alias',
  operationId: 'searchByAlias',
  request: {
    query: z.object({
      alias: z
        .string()
        .openapi({
          param: {
            description: 'The alias to search for',
            in: 'query',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
          },
        }),
      aliasType: z
        .enum([
          'gtin',
          'article',
          'mapp',
          'item',
          'rfid',
          'tracking',
          'eclass',
          'unspsc',
          'product',
          'material',
          'reference',
        ])
        .openapi({
          param: {
            description: 'Alias type type to search for',
            in: 'query',
            name: 'aliasType',
            required: true,
            schema: {
              enum: [
                'gtin',
                'article',
                'mapp',
                'item',
                'rfid',
                'tracking',
                'eclass',
                'unspsc',
                'product',
                'material',
                'reference',
              ],
              type: 'string',
            },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfGuidSchema },
        'application/xml': { schema: PaginatedResponseOfGuidSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1SearchGuidsAliasesTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/search/guids/aliases/types',
  tags: ['Alias'],
  summary: 'List all supported alias types',
  description:
    'Retrieve this list to find out all alias types to use with alias search and change operations',
  operationId: 'getGuidAliasTypes',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z.enum([
              'gtin',
              'article',
              'mapp',
              'item',
              'rfid',
              'tracking',
              'eclass',
              'unspsc',
              'product',
              'material',
              'reference',
            ]),
          ),
        },
        'application/xml': {
          schema: z.array(
            z.enum([
              'gtin',
              'article',
              'mapp',
              'item',
              'rfid',
              'tracking',
              'eclass',
              'unspsc',
              'product',
              'material',
              'reference',
            ]),
          ),
        },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1TransfersId4nReceiveInfoRoute = createRoute({
  method: 'put',
  path: '/api/v1/transfers/{id4n}/receiveInfo',
  tags: ['Transfer'],
  summary:
    'Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership',
  description:
    'Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo',
  operationId: 'receive',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'This ID4N identifies the object to take hold of',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Required information to receive an id4n object',
      content: {
        'application/json': { schema: TransferReceiveInfoSchema },
        'application/xml': { schema: TransferReceiveInfoSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1TransfersId4nSendInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/transfers/{id4n}/sendInfo',
  tags: ['Transfer'],
  summary: 'Show transfer preparation information',
  operationId: 'getSendInfo',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The ID4N to retrieve information about',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: TransferSendInfoSchema },
        'application/xml': { schema: TransferSendInfoSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const putApiV1TransfersId4nSendInfoRoute = createRoute({
  method: 'put',
  path: '/api/v1/transfers/{id4n}/sendInfo',
  tags: ['Transfer'],
  summary: 'Prepare an object for transfer',
  operationId: 'prepare',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'The ID4N to prepare for transfer',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Transfer preparation status',
      content: {
        'application/json': { schema: TransferSendInfoSchema },
        'application/xml': { schema: TransferSendInfoSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
      },
    },
    202: { description: 'Accepted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1UserOrganizationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/user/organizations',
  tags: ['Accounts', 'Organizations'],
  summary: 'Retrieve organizations of user',
  operationId: 'getOrganizationsOfUser',
  request: {
    query: z.object({
      role: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'role',
            in: 'query',
            name: 'role',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfOrganizationSchema },
        'application/xml': { schema: PaginatedResponseOfOrganizationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/users',
  tags: ['Accounts'],
  summary: 'Find users',
  operationId: 'findUsers',
  request: {
    query: z.object({
      usernamePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'usernamePrefix',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Start with the n-th element',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum count of returned elements',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PaginatedResponseOfUserPresentationSchema },
        'application/xml': { schema: PaginatedResponseOfUserPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getApiV1UsersUsernameRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{username}',
  tags: ['Accounts'],
  summary: 'Find by username',
  operationId: 'findUserByUsername',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'username',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: UserPresentationSchema },
        'application/xml': { schema: UserPresentationSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
  security: [{ Authorization: [] }],
})

export const getGoGuidRoute = createRoute({
  method: 'get',
  path: '/go/{guid}',
  tags: ['Public Services'],
  summary: 'Forward',
  description: 'Forwarding to the designated route defined in the routing,',
  operationId: 'go',
  request: {
    params: z.object({
      guid: z
        .string()
        .openapi({
          param: {
            description: 'guid',
            in: 'path',
            name: 'guid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['Accounts'],
  description: 'ID4i API Login',
  operationId: 'login',
  request: {
    body: {
      content: {
        'application/json': { schema: AccountCredentialsSchema },
        'application/xml': { schema: AccountCredentialsSchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})

export const getWhoisId4nRoute = createRoute({
  method: 'get',
  path: '/whois/{id4n}',
  tags: ['Public Services', 'WhoIs'],
  summary: 'Resolve owner of id4n',
  operationId: 'resolveWhoIsEntry',
  request: {
    params: z.object({
      id4n: z
        .string()
        .openapi({
          param: {
            description: 'id4n',
            in: 'path',
            name: 'id4n',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: WhoIsResponseSchema },
        'application/xml': { schema: WhoIsResponseSchema },
      },
    },
    202: { description: 'Accepted' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    405: {
      description: 'Method not allowed',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ApiErrorSchema },
        'application/xml': { schema: ApiErrorSchema },
      },
    },
  },
})
