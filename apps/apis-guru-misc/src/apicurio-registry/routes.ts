import { createRoute, z } from '@hono/zod-openapi'

const ArtifactDescriptionSchema = z
  .string()
  .openapi({
    description: 'Description of the artifact.',
    example: '"Artifact description"',
    'x-codegen-inline': true,
  })
  .openapi('ArtifactDescription')

const ArtifactIdSchema = z
  .string()
  .openapi({ description: 'The ID of a single artifact.', example: '"example-artifact"' })
  .openapi('ArtifactId')

const GroupIdSchema = z
  .string()
  .openapi({ description: 'An ID of a single artifact group.', example: '"my-group"' })
  .openapi('GroupId')

const PropertiesSchema = z
  .record(z.string(), z.string())
  .openapi({
    description: 'User-defined name-value pairs. Name and value must be strings.',
    'x-codegen-inline': true,
    'x-codegen-type': 'StringMap',
  })
  .openapi('Properties')

const ArtifactReferenceSchema = z
  .object({
    artifactId: z.string(),
    groupId: z.string(),
    name: z.string(),
    version: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf.',
    example: {
      artifactId: '13842090-2ce3-11ec-8d3d-0242ac130003',
      groupId: 'mygroup',
      name: 'foo.bar.Open',
      version: '2',
    },
    required: ['artifactId', 'groupId', 'name'],
    title: 'Root Type for ArtifactReference',
  })
  .openapi('ArtifactReference')

const ArtifactStateSchema = z
  .enum(['ENABLED', 'DISABLED', 'DEPRECATED'])
  .openapi({
    description:
      'Describes the state of an artifact or artifact version.  The following states\nare possible:\n\n* ENABLED\n* DISABLED\n* DEPRECATED\n',
    'x-codegen-package': 'io.apicurio.registry.types',
  })
  .openapi('ArtifactState')

const ArtifactTypeSchema = z
  .string()
  .openapi({ description: '', example: 'AVRO', 'x-codegen-package': 'io.apicurio.registry.types' })
  .openapi('ArtifactType')

const ArtifactMetaDataSchema = z
  .object({
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    createdBy: z.string(),
    createdOn: z.iso.datetime({ offset: true }),
    description: z.string().exactOptional(),
    globalId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    groupId: GroupIdSchema.exactOptional().openapi({ description: '' }),
    id: ArtifactIdSchema.openapi({ description: '' }),
    labels: z.array(z.string()).exactOptional().openapi({ description: '' }),
    modifiedBy: z.string(),
    modifiedOn: z.iso.datetime({ offset: true }),
    name: z.string().exactOptional(),
    properties: PropertiesSchema.exactOptional().openapi({ description: '' }),
    references: z.array(ArtifactReferenceSchema).exactOptional().openapi({ description: '' }),
    state: ArtifactStateSchema.openapi({ description: '' }),
    type: ArtifactTypeSchema.openapi({ description: '' }),
    version: z.string().openapi({ description: '' }),
  })
  .openapi({
    description: '',
    example: {
      contentId: 82736,
      createdBy: 'user1',
      createdOn: '2019-03-22T12:51:19Z',
      description: 'Description of the artifact',
      globalId: 12984719247,
      groupId: 'My-Group',
      id: 'Procurement-Invoice',
      labels: ['label-1', 'label-2'],
      modifiedBy: 'user2',
      modifiedOn: '2019-07-19T15:09:00Z',
      name: 'Artifact Name',
      properties: { 'custom-1': 'foo', 'custom-2': 'bar' },
      references: [
        {
          artifactId: '13842090-2ce3-11ec-8d3d-0242ac130003',
          groupId: 'mygroup',
          name: 'foo.bar.Open',
          version: 2,
        },
      ],
      type: 'AVRO',
      version: 18,
    },
    required: [
      'id',
      'createdBy',
      'createdOn',
      'modifiedBy',
      'modifiedOn',
      'version',
      'type',
      'globalId',
      'state',
      'group',
      'contentId',
    ],
    title: 'Root Type for ArtifactMetaData',
  })
  .openapi('ArtifactMetaData')

const ArtifactNameSchema = z
  .string()
  .openapi({
    description: 'Name of the artifact.',
    example: '"Artifact name"',
    'x-codegen-inline': true,
  })
  .openapi('ArtifactName')

const ArtifactOwnerSchema = z
  .object({ owner: z.string().exactOptional() })
  .openapi({
    description: 'Describes the ownership of an artifact.',
    example: { owner: 'bwayne' },
    title: 'Root Type for ArtifactOwner',
    required: [],
  })
  .openapi('ArtifactOwner')

const SearchedArtifactSchema = z
  .object({
    createdBy: z.string().openapi({ description: '' }),
    createdOn: z.iso.datetime({ offset: true }).openapi({ description: '' }),
    description: z.string().exactOptional().openapi({ description: '' }),
    groupId: GroupIdSchema.exactOptional().openapi({ description: '' }),
    id: ArtifactIdSchema.openapi({ description: '' }),
    labels: z.array(z.string()).exactOptional().openapi({ description: '' }),
    modifiedBy: z.string().exactOptional().openapi({ description: '' }),
    modifiedOn: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: '' }),
    name: z.string().exactOptional().openapi({ description: '' }),
    state: ArtifactStateSchema.openapi({ description: '' }),
    type: ArtifactTypeSchema.openapi({ description: '' }),
  })
  .openapi({
    description:
      'Models a single artifact from the result set returned when searching for artifacts.',
    example: {
      createdBy: 'user1',
      createdOn: '2019-03-22T12:51:19Z',
      description: 'Description of the artifact',
      groupId: 'My-Group',
      id: 'Procurement-Invoice',
      labels: ['current', 'internal'],
      name: 'Artifact Name',
      state: 'ENABLED',
      type: 'AVRO',
    },
    required: ['createdBy', 'createdOn', 'id', 'type', 'state', 'group'],
  })
  .openapi('SearchedArtifact')

const ArtifactSearchResultsSchema = z
  .object({
    artifacts: z
      .array(SearchedArtifactSchema)
      .openapi({ description: 'The artifacts returned in the result set.' }),
    count: z
      .int()
      .openapi({
        description:
          'The total number of artifacts that matched the query that produced the result set (may be \nmore than the number of artifacts in the result set).',
      }),
  })
  .openapi({
    description: 'Describes the response received when searching for artifacts.',
    required: ['count', 'artifacts'],
  })
  .openapi('ArtifactSearchResults')

const ArtifactTypeInfoSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: '', example: { name: 'AVRO' }, required: [] })
  .openapi('ArtifactTypeInfo')

const ConfigurationPropertySchema = z
  .object({
    description: z.string().openapi({ description: '' }),
    label: z.string().openapi({ description: '' }),
    name: z.string(),
    type: z.string().openapi({ description: '' }),
    value: z.string(),
  })
  .openapi({
    description: '',
    example: {
      description:
        'When enabled, the registry will allow only the artifact owner (creator) to modify an artifact.',
      label: 'Owner Only Authorization',
      name: 'registry.auth.owner-only-authorization',
      type: 'boolean',
      value: 'true',
    },
    required: ['name', 'value', 'type', 'label', 'description'],
    title: 'Root Type for ConfigurationProperty',
  })
  .openapi('ConfigurationProperty')

const ContentCreateRequestSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description:
          'Raw content of the artifact or a valid (and accessible) URL where the content can be found.',
        example: '',
      }),
    references: z
      .array(ArtifactReferenceSchema)
      .openapi({ description: 'Collection of references to other artifacts.' }),
  })
  .openapi({ description: '', required: ['content', 'references'] })
  .openapi('ContentCreateRequest')

const CreateGroupMetaDataSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z.string().openapi({ description: '' }),
    properties: PropertiesSchema.exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: '',
    example: {
      description: 'The description of the artifact.',
      id: 'group-identifier',
      properties: { 'custom-1': 'foo', 'custom-2': 'bar' },
    },
    required: ['id'],
    title: 'Root Type for CreateGroupMetaData',
  })
  .openapi('CreateGroupMetaData')

const DownloadRefSchema = z
  .object({ downloadId: z.string(), href: z.string().exactOptional() })
  .openapi({
    description: 'Models a download "link".  Useful for browser use-cases.',
    example: {
      downloadId: '247-4987490-297845',
      href: 'https://54321.registry.examples.org/apis/registry/v2/downloads/247-4987490-297845',
    },
    required: ['downloadId'],
    title: 'Root Type for Download',
  })
  .openapi('DownloadRef')

const EditableMetaDataSchema = z
  .object({
    description: z.string().exactOptional(),
    labels: z.array(z.string()).exactOptional().openapi({ description: '' }),
    name: z.string().exactOptional(),
    properties: PropertiesSchema.exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: '',
    example: {
      description: 'The description of the artifact.',
      labels: ['regional', 'global'],
      name: 'Artifact Name',
      properties: { 'custom-1': 'foo', 'custom-2': 'bar' },
    },
    title: 'Root Type for EditableArtifactMetaData',
    required: [],
  })
  .openapi('EditableMetaData')

const EncodedArtifactDescriptionSchema = z
  .string()
  .openapi({
    description: 'Base64 encoded description of the artifact.',
    example: '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"',
    'x-codegen-inline': true,
  })
  .openapi('EncodedArtifactDescription')

const EncodedArtifactNameSchema = z
  .string()
  .openapi({
    description: 'Base64 encoded name of the artifact.',
    example: '"QXJ0aWZhY3QgbmFtZQo="',
    'x-codegen-inline': true,
  })
  .openapi('EncodedArtifactName')

const ErrorSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full details about the error.  This might contain a server stack trace, for example.',
      }),
    error_code: z.int32().exactOptional().openapi({ description: 'The server-side error code.' }),
    message: z.string().exactOptional().openapi({ description: 'The short error message.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error name - typically the classname of the exception thrown by the server.',
      }),
  })
  .openapi({
    description:
      'All error responses, whether `4xx` or `5xx` will include one of these as the response\nbody.',
    example: { error_code: 500, message: 'An error occurred somewhere.' },
    title: 'Root Type for Error',
    required: [],
  })
  .openapi('Error')

const FileContentSchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', 'x-codegen-inline': true })
  .openapi('FileContent')

const GroupMetaDataSchema = z
  .object({
    createdBy: z.string(),
    createdOn: z.iso.datetime({ offset: true }),
    description: z.string(),
    id: GroupIdSchema.openapi({ description: '' }),
    modifiedBy: z.string(),
    modifiedOn: z.iso.datetime({ offset: true }),
    properties: PropertiesSchema.openapi({ description: '' }),
  })
  .openapi({
    description: '',
    example: {
      artifactsType: 'AVRO',
      createdBy: 'user1',
      createdOn: '2019-03-22T12:51:19Z',
      description: 'Description of the group',
      id: 'group-identifier',
      modifiedBy: 'user2',
      modifiedOn: '2019-07-19T15:09:00Z',
      properties: { 'custom-1': 'foo', 'custom-2': 'bar' },
    },
    required: [
      'id',
      'description',
      'createdBy',
      'createdOn',
      'modifiedBy',
      'modifiedOn',
      'properties',
    ],
    title: 'Root Type for GroupMetaData',
  })
  .openapi('GroupMetaData')

const SearchedGroupSchema = z
  .object({
    createdBy: z.string().openapi({ description: '' }),
    createdOn: z.iso.datetime({ offset: true }).openapi({ description: '' }),
    description: z.string().openapi({ description: '' }),
    id: GroupIdSchema.openapi({ description: '' }),
    modifiedBy: z.string().openapi({ description: '' }),
    modifiedOn: z.iso.datetime({ offset: true }).openapi({ description: '' }),
  })
  .openapi({
    description: 'Models a single group from the result set returned when searching for groups.',
    example: {
      createdBy: 'user1',
      createdOn: '2019-03-22T12:51:19Z',
      description: 'Description of the group',
      id: 'My-Group',
      modifiedBy: 'user1',
      modifiedOn: '2019-03-22T12:51:19Z',
      name: 'Group Name',
    },
    required: ['description', 'createdBy', 'createdOn', 'id', 'modifiedBy', 'modifiedOn'],
  })
  .openapi('SearchedGroup')

const GroupSearchResultsSchema = z
  .object({
    count: z
      .int()
      .openapi({
        description:
          'The total number of groups that matched the query that produced the result set (may be \nmore than the number of groups in the result set).',
      }),
    groups: z
      .array(SearchedGroupSchema)
      .openapi({ description: 'The groups returned in the result set.' }),
  })
  .openapi({
    description: 'Describes the response received when searching for groups.',
    required: ['count', 'groups'],
  })
  .openapi('GroupSearchResults')

const IfExistsSchema = z
  .enum(['FAIL', 'UPDATE', 'RETURN', 'RETURN_OR_UPDATE'])
  .openapi({ description: '' })
  .openapi('IfExists')

const LimitsSchema = z
  .object({
    maxArtifactDescriptionLengthChars: z
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
    maxArtifactLabelsCount: z
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
    maxArtifactNameLengthChars: z
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
    maxArtifactPropertiesCount: z
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
    maxArtifactsCount: z
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
    maxLabelSizeBytes: z
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
    maxPropertyKeySizeBytes: z
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
    maxPropertyValueSizeBytes: z
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
    maxRequestsPerSecondCount: z
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
    maxSchemaSizeBytes: z
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
    maxTotalSchemasCount: z
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
    maxVersionsPerArtifactCount: z
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
  .openapi({
    description:
      'List of limitations on used resources, that are applied on the current instance of Registry.\nKeys represent the resource type and are suffixed by the corresponding unit.\nValues are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.',
    example: {
      maxArtifactDescriptionLengthChars: -1,
      maxArtifactLabelsCount: -1,
      maxArtifactNameLengthChars: -1,
      maxArtifactPropertiesCount: -1,
      maxArtifactsCount: -1,
      maxLabelSizeBytes: -1,
      maxPropertyKeySizeBytes: -1,
      maxPropertyValueSizeBytes: -1,
      maxRequestsPerSecondCount: -1,
      maxSchemaSizeBytes: -1,
      maxTotalSchemasCount: -1,
      maxVersionsPerArtifactCount: -1,
    },
    title: 'Root Type for Limits',
    required: [],
  })
  .openapi('Limits')

const LogLevelSchema = z
  .enum([
    'DEBUG',
    'TRACE',
    'WARN',
    'ERROR',
    'SEVERE',
    'WARNING',
    'INFO',
    'CONFIG',
    'FINE',
    'FINER',
    'FINEST',
  ])
  .openapi({ description: '', 'x-codegen-package': 'io.apicurio.registry.types' })
  .openapi('LogLevel')

const LogConfigurationSchema = z
  .object({ level: LogLevelSchema.openapi({ description: '' }) })
  .openapi({ description: '', required: ['level'] })
  .openapi('LogConfiguration')

const NamedLogConfigurationSchema = z
  .object({ name: z.string().openapi({ description: '' }) })
  .openapi({ required: ['name'] })
  .and(LogConfigurationSchema)
  .openapi({ description: '' })
  .openapi('NamedLogConfiguration')

const RoleTypeSchema = z
  .enum(['READ_ONLY', 'DEVELOPER', 'ADMIN'])
  .openapi({ description: '', 'x-codegen-package': 'io.apicurio.registry.types' })
  .openapi('RoleType')

const RoleMappingSchema = z
  .object({
    principalId: z.string().openapi({ description: '' }),
    principalName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A friendly name for the principal.' }),
    role: RoleTypeSchema.openapi({ description: '' }),
  })
  .openapi({
    description: 'The mapping between a user/principal and their role.',
    example: {
      principalId: 'svc_account_84874587_123484',
      principalName: 'famartin-svc-account',
      role: 'READ_ONLY',
    },
    required: ['principalId', 'role'],
  })
  .openapi('RoleMapping')

const RuleTypeSchema = z
  .enum(['VALIDITY', 'COMPATIBILITY'])
  .openapi({
    description: '',
    example: 'VALIDITY',
    'x-codegen-package': 'io.apicurio.registry.types',
  })
  .openapi('RuleType')

const RuleSchema = z
  .object({ config: z.string(), type: RuleTypeSchema.exactOptional() })
  .openapi({
    description: '',
    example: { config: 'FULL', type: 'VALIDITY' },
    required: ['config'],
    title: 'Root Type for Rule',
  })
  .openapi('Rule')

const RuleViolationCauseSchema = z
  .object({ context: z.string().exactOptional(), description: z.string().exactOptional() })
  .openapi({
    description: '',
    example: {
      context: '/info/externalDocs[url]',
      description: 'External documentation URL is not valid (it must be formatted as a URL).',
    },
    title: 'Root Type for RuleViolationCause',
    required: [],
  })
  .openapi('RuleViolationCause')

const RuleViolationErrorSchema = z
  .object({
    causes: z
      .array(RuleViolationCauseSchema)
      .openapi({ description: 'List of rule violation causes.' }),
  })
  .openapi({ required: ['causes'] })
  .and(ErrorSchema)
  .openapi({
    description:
      'All error responses, whether `4xx` or `5xx` will include one of these as the response\nbody.',
    example: {
      causes: [
        { context: '/info[title]', description: 'API is missing a title' },
        {
          context: '/paths[/invoices]/put[operationId]',
          description: 'Operation IDs must be unique',
        },
      ],
      error_code: 409,
      message: 'Artifact failed validation',
    },
    title: 'Root Type for Error',
    'x-codegen-extendsClass': 'io.apicurio.registry.rest.v2.beans.Error',
  })
  .openapi('RuleViolationError')

const SearchedVersionSchema = z
  .object({
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    createdBy: z.string().openapi({ description: '' }),
    createdOn: z.iso.datetime({ offset: true }).openapi({ description: '' }),
    description: z.string().exactOptional().openapi({ description: '' }),
    globalId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    labels: z.array(z.string()).exactOptional().openapi({ description: '' }),
    name: z.string().exactOptional().openapi({ description: '' }),
    properties: PropertiesSchema.exactOptional().openapi({ description: '' }),
    references: z.array(ArtifactReferenceSchema).openapi({ description: '' }),
    state: ArtifactStateSchema.openapi({ description: '' }),
    type: ArtifactTypeSchema.openapi({ description: '' }),
    version: z.string().openapi({ description: '' }),
  })
  .openapi({
    description:
      'Models a single artifact from the result set returned when searching for artifacts.',
    example: {
      contentId: 62,
      createdBy: 'some text',
      createdOn: '2018-02-10T09:30Z',
      description: 'Description of the artifact version',
      globalId: 37,
      labels: ['current', 'internal'],
      name: 'Artifact Version Name',
      properties: {},
      references: {},
      state: 'ENABLED',
      type: 'AVRO',
      version: 85,
    },
    required: [
      'createdBy',
      'createdOn',
      'type',
      'state',
      'globalId',
      'version',
      'contentId',
      'references',
    ],
  })
  .openapi('SearchedVersion')

const SortBySchema = z.enum(['name', 'createdOn']).openapi({ description: '' }).openapi('SortBy')

const SortOrderSchema = z.enum(['asc', 'desc']).openapi({ description: '' }).openapi('SortOrder')

const SystemInfoSchema = z
  .object({
    builtOn: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    name: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({
    description: '',
    example: {
      builtOn: '2021-03-19T12:55:00Z',
      description: 'The Apicurio Registry application.',
      name: 'Apicurio Registry (SQL)',
      version: '2.0.0.Final',
    },
    title: 'Root Type for SystemInfo',
    required: [],
  })
  .openapi('SystemInfo')

const UpdateConfigurationPropertySchema = z
  .object({ value: z.string() })
  .openapi({
    description: '',
    example: { value: 'true' },
    required: ['value'],
    title: 'Root Type for UpdateConfigurationProperty',
  })
  .openapi('UpdateConfigurationProperty')

const UpdateRoleSchema = z
  .object({ role: RoleTypeSchema })
  .openapi({
    description: '',
    example: { role: 'READ_ONLY' },
    required: ['role'],
    title: 'Root Type for UpdateRole',
  })
  .openapi('UpdateRole')

const UpdateStateSchema = z
  .object({ state: ArtifactStateSchema })
  .openapi({
    description: '',
    example: { state: 'DISABLED' },
    required: ['state'],
    title: 'Root Type for UpdateState',
  })
  .openapi('UpdateState')

const UserInfoSchema = z
  .object({
    admin: z.boolean().exactOptional(),
    developer: z.boolean().exactOptional(),
    displayName: z.string().exactOptional(),
    username: z.string().exactOptional(),
    viewer: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Information about a single user.',
    example: {
      admin: true,
      developer: false,
      displayName: 'Diana Prince',
      username: 'dprince',
      viewer: false,
    },
    title: 'Root Type for UserInfo',
    required: [],
  })
  .openapi('UserInfo')

const VersionSchema = z
  .string()
  .openapi({
    description:
      'A single version of an artifact.  Can be provided by the client when creating a new version,\nor it can be server-generated.  The value can be any string unique to the artifact, but it is\nrecommended to use a simple integer or a semver value.',
    example: '"3.1.6"',
  })
  .openapi('Version')

const VersionMetaDataSchema = z
  .object({
    contentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    createdBy: z.string(),
    createdOn: z.iso.datetime({ offset: true }),
    description: z.string().exactOptional(),
    globalId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '' }),
    groupId: GroupIdSchema.exactOptional().openapi({ description: '' }),
    id: ArtifactIdSchema.openapi({ description: '' }),
    labels: z.array(z.string()).exactOptional().openapi({ description: '' }),
    name: z.string().exactOptional(),
    properties: PropertiesSchema.exactOptional().openapi({ description: '' }),
    state: ArtifactStateSchema.exactOptional().openapi({ description: '' }),
    type: ArtifactTypeSchema.openapi({ description: '' }),
    version: z.string(),
  })
  .openapi({
    description: '',
    example: {
      contentId: 12347,
      createdBy: 'user1',
      createdOn: '2019-05-17T12:00:00Z',
      description: 'The description of the artifact',
      globalId: 183282932983,
      groupId: 'My-Group',
      id: 'my-artifact-id',
      labels: ['label-1', 'label-2'],
      name: 'Artifact Name',
      properties: { 'custom-1': 'foo', 'custom-2': 'bar' },
      references: [
        {
          artifactId: '13842090-2ce3-11ec-8d3d-0242ac130003',
          groupId: 'mygroup',
          name: 'foo.bar.Open',
          version: 2,
        },
      ],
      type: 'PROTOBUF',
      version: 1221432,
    },
    required: ['createdOn', 'createdBy', 'version', 'type', 'globalId', 'id', 'contentId'],
    title: 'Root Type for ArtifactVersionMetaData',
  })
  .openapi('VersionMetaData')

const VersionSearchResultsSchema = z
  .object({
    count: z
      .int()
      .openapi({
        description:
          'The total number of versions that matched the query (may be more than the number of versions\nreturned in the result set).',
      }),
    versions: z
      .array(SearchedVersionSchema)
      .openapi({ description: 'The collection of artifact versions returned in the result set.' }),
  })
  .openapi({
    description: 'Describes the response received when searching for artifacts.',
    required: ['count', 'versions'],
  })
  .openapi('VersionSearchResults')

const ArtifactContentResponse = {
  description: 'The content of one version of one artifact.',
  content: {
    '*/*': {
      schema: FileContentSchema,
      examples: {
        OpenAPI: {
          value: {
            info: {
              description: 'An example API design using OpenAPI.',
              title: 'Empty API',
              version: '1.0.0',
            },
            openapi: '3.0.2',
          },
        },
      },
    },
  },
}

const BadRequestResponse = {
  description: 'Common response for all operations that can return a `400` error.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ConflictResponse = {
  description: 'Common response used when an input conflicts with existing data.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        ConflictExample: {
          value: { error_code: 409, message: 'The artifact content was invalid.' },
        },
      },
    },
  },
}

const NotFoundResponse = {
  description: 'Common response for all operations that can return a `404` error.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        NotFoundExample: {
          value: {
            error_code: 404,
            message: "No artifact with id 'Topic-1/Inbound' could be found.",
          },
        },
      },
    },
  },
}

const RuleViolationConflictResponse = {
  description: 'Common response used when an input conflicts with existing data.',
  content: {
    'application/json': {
      schema: RuleViolationErrorSchema,
      examples: {
        RuleViolationConflictExample: {
          value: {
            causes: [
              { context: '/info[title]', description: 'API is missing a title' },
              {
                context: '/paths[/invoices]/put[operationId]',
                description: 'Operation IDs must be unique',
              },
            ],
            error_code: 409,
            message: 'The artifact content was invalid',
          },
        },
      },
    },
  },
}

const ServerErrorResponse = {
  description: 'Common response for all operations that can fail with an unexpected server error.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        ErrorExample: { value: { error_code: 500, message: 'Lost connection to the database.' } },
      },
    },
  },
}

export const getAdminArtifactTypesRoute = createRoute({
  method: 'get',
  path: '/admin/artifactTypes',
  tags: ['Artifact Type', 'Admin'],
  summary: 'List artifact types',
  description:
    'Gets a list of all the configured artifact types.\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'listArtifactTypes',
  responses: {
    200: {
      description: 'The list of available artifact types.',
      content: { 'application/json': { schema: z.array(ArtifactTypeInfoSchema) } },
    },
    500: ServerErrorResponse,
  },
})

export const getAdminConfigPropertiesRoute = createRoute({
  method: 'get',
  path: '/admin/config/properties',
  tags: ['Admin'],
  summary: 'List all configuration properties',
  description:
    'Returns a list of all configuration properties that have been set.  The list is not paged.\n\nThis operation may fail for one of the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'listConfigProperties',
  responses: {
    200: {
      description: 'On a successful response, returns a list of configuration properties.',
      content: { 'application/json': { schema: z.array(ConfigurationPropertySchema) } },
    },
    500: ServerErrorResponse,
  },
})

export const getAdminConfigPropertiesPropertyNameRoute = createRoute({
  method: 'get',
  path: '/admin/config/properties/{propertyName}',
  tags: ['Admin'],
  summary: 'Get configuration property value',
  description:
    'Returns the value of a single configuration property.\n\nThis operation may fail for one of the following reasons:\n\n* Property not found or not configured (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getConfigProperty',
  request: {
    params: z.object({
      propertyName: z
        .string()
        .openapi({
          param: {
            description: 'The name of a configuration property.',
            in: 'path',
            name: 'propertyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The configuration property value.',
      content: { 'application/json': { schema: ConfigurationPropertySchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAdminConfigPropertiesPropertyNameRoute = createRoute({
  method: 'put',
  path: '/admin/config/properties/{propertyName}',
  tags: ['Admin'],
  summary: 'Update a configuration property',
  description:
    'Updates the value of a single configuration property.\n\nThis operation may fail for one of the following reasons:\n\n* Property not found or not configured (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateConfigProperty',
  request: {
    params: z.object({
      propertyName: z
        .string()
        .openapi({
          param: {
            description: 'The name of a configuration property.',
            in: 'path',
            name: 'propertyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConfigurationPropertySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The configuration property was updated.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAdminConfigPropertiesPropertyNameRoute = createRoute({
  method: 'delete',
  path: '/admin/config/properties/{propertyName}',
  tags: ['Admin'],
  summary: 'Reset a configuration property',
  description:
    'Resets the value of a single configuration property.  This will return the property to\nits default value (see external documentation for supported properties and their default\nvalues).\n\nThis operation may fail for one of the following reasons:\n\n* Property not found or not configured (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'resetConfigProperty',
  request: {
    params: z.object({
      propertyName: z
        .string()
        .openapi({
          param: {
            description: 'The name of a configuration property.',
            in: 'path',
            name: 'propertyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The configuration property was deleted.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAdminExportRoute = createRoute({
  method: 'get',
  path: '/admin/export',
  tags: ['Admin'],
  summary: 'Export registry data',
  description: 'Exports registry data as a ZIP archive.',
  operationId: 'exportData',
  request: {
    query: z.object({
      forBrowser: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content.',
            in: 'query',
            name: 'forBrowser',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Response when the export is successful.',
      content: {
        'application/json': { schema: DownloadRefSchema },
        'application/zip': { schema: FileContentSchema },
      },
    },
    500: ServerErrorResponse,
  },
})

export const postAdminImportRoute = createRoute({
  method: 'post',
  path: '/admin/import',
  tags: ['Admin'],
  summary: 'Import registry data',
  description:
    'Imports registry data that was previously exported using the `/admin/export` operation.',
  operationId: 'importData',
  request: {
    headers: z.object({
      'X-Registry-Preserve-GlobalId': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this header is set to false, global ids of imported data will be ignored and replaced by next id in global id sequence. This allows to import any data even thought the global ids would cause a conflict.',
            in: 'header',
            name: 'X-Registry-Preserve-GlobalId',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'X-Registry-Preserve-ContentId': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If this header is set to false, content ids of imported data will be ignored and replaced by next id in content id sequence. The mapping between content and artifacts will be preserved. This allows to import any data even thought the content ids would cause a conflict.',
            in: 'header',
            name: 'X-Registry-Preserve-ContentId',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description: 'The ZIP file representing the previously exported registry data.',
      content: { 'application/zip': { schema: FileContentSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Indicates that the import was successful.' },
    500: ServerErrorResponse,
  },
})

export const getAdminLoggersRoute = createRoute({
  method: 'get',
  path: '/admin/loggers',
  tags: ['Admin'],
  summary: 'List logging configurations',
  description:
    'List all of the configured logging levels.  These override the default\nlogging configuration.',
  operationId: 'listLogConfigurations',
  responses: {
    200: {
      description: 'The list of logging configurations.',
      content: { 'application/json': { schema: z.array(NamedLogConfigurationSchema) } },
    },
    500: ServerErrorResponse,
  },
})

export const getAdminLoggersLoggerRoute = createRoute({
  method: 'get',
  path: '/admin/loggers/{logger}',
  tags: ['Admin'],
  summary: 'Get a single logger configuration',
  description:
    'Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.',
  operationId: 'getLogConfiguration',
  request: {
    params: z.object({
      logger: z
        .string()
        .openapi({
          param: {
            description: 'The name of a single logger.',
            in: 'path',
            name: 'logger',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The logger configuration for the named logger.',
      content: { 'application/json': { schema: NamedLogConfigurationSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const putAdminLoggersLoggerRoute = createRoute({
  method: 'put',
  path: '/admin/loggers/{logger}',
  tags: ['Admin'],
  summary: "Set a logger's configuration",
  description:
    'Configures the logger referenced by the provided logger name with the given configuration.',
  operationId: 'setLogConfiguration',
  request: {
    params: z.object({
      logger: z
        .string()
        .openapi({
          param: {
            description: 'The name of a single logger.',
            in: 'path',
            name: 'logger',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new logger configuration.',
      content: { 'application/json': { schema: LogConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The new configuration for the given logger.',
      content: { 'application/json': { schema: NamedLogConfigurationSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const deleteAdminLoggersLoggerRoute = createRoute({
  method: 'delete',
  path: '/admin/loggers/{logger}',
  tags: ['Admin'],
  summary: 'Removes logger configuration',
  description: 'Removes the configured logger configuration (if any) for the given logger.',
  operationId: 'removeLogConfiguration',
  request: {
    params: z.object({
      logger: z
        .string()
        .openapi({
          param: {
            description: 'The name of a single logger.',
            in: 'path',
            name: 'logger',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The default logger configuration (now that the configuration for this logger has been removed, the \ndefault configuration is applied).',
      content: { 'application/json': { schema: NamedLogConfigurationSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getAdminRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/roleMappings',
  tags: ['Admin'],
  summary: 'List all role mappings',
  description:
    'Gets a list of all role mappings configured in the registry (if any).\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'listRoleMappings',
  responses: {
    200: {
      description: 'A successful response will return the list of role mappings.',
      content: { 'application/json': { schema: z.array(RoleMappingSchema) } },
    },
    500: ServerErrorResponse,
  },
})

export const postAdminRoleMappingsRoute = createRoute({
  method: 'post',
  path: '/admin/roleMappings',
  tags: ['Admin'],
  summary: 'Create a new role mapping',
  description:
    'Creates a new mapping between a user/principal and a role.\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n\n',
  operationId: 'createRoleMapping',
  request: {
    body: { content: { 'application/json': { schema: RoleMappingSchema } }, required: true },
  },
  responses: {
    204: { description: 'Returned when the role mapping was successfully created.' },
    500: ServerErrorResponse,
  },
})

export const getAdminRoleMappingsPrincipalIdRoute = createRoute({
  method: 'get',
  path: '/admin/roleMappings/{principalId}',
  tags: ['Admin'],
  summary: 'Return a single role mapping',
  description:
    'Gets the details of a single role mapping (by `principalId`).\n\nThis operation can fail for the following reasons:\n\n* No role mapping for the `principalId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getRoleMapping',
  request: {
    params: z.object({
      principalId: z
        .string()
        .openapi({
          param: {
            description: 'Unique id of a principal (typically either a user or service account).',
            in: 'path',
            name: 'principalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'When successful, returns the details of a role mapping.',
      content: { 'application/json': { schema: RoleMappingSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAdminRoleMappingsPrincipalIdRoute = createRoute({
  method: 'put',
  path: '/admin/roleMappings/{principalId}',
  tags: ['Admin'],
  summary: 'Update a role mapping',
  description:
    'Updates a single role mapping for one user/principal.\n\nThis operation can fail for the following reasons:\n\n* No role mapping for the principalId exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateRoleMapping',
  request: {
    params: z.object({
      principalId: z
        .string()
        .openapi({
          param: {
            description: 'Unique id of a principal (typically either a user or service account).',
            in: 'path',
            name: 'principalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRoleSchema } }, required: true },
  },
  responses: {
    204: { description: 'Response when the update is successful.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAdminRoleMappingsPrincipalIdRoute = createRoute({
  method: 'delete',
  path: '/admin/roleMappings/{principalId}',
  tags: ['Admin'],
  summary: 'Delete a role mapping',
  description:
    'Deletes a single role mapping, effectively denying access to a user/principal.\n\nThis operation can fail for the following reasons:\n\n* No role mapping for the principalId exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'deleteRoleMapping',
  request: {
    params: z.object({
      principalId: z
        .string()
        .openapi({
          param: {
            description: 'Unique id of a principal (typically either a user or service account).',
            in: 'path',
            name: 'principalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Response returned when the delete was successful.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getAdminRulesRoute = createRoute({
  method: 'get',
  path: '/admin/rules',
  tags: ['Global rules', 'Admin'],
  summary: 'List global rules',
  description:
    'Gets a list of all the currently configured global rules (if any).\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'listGlobalRules',
  responses: {
    200: {
      description: 'The list of names of the globally configured rules.',
      content: { 'application/json': { schema: z.array(RuleTypeSchema) } },
    },
    500: ServerErrorResponse,
  },
})

export const postAdminRulesRoute = createRoute({
  method: 'post',
  path: '/admin/rules',
  tags: ['Global rules', 'Admin'],
  summary: 'Create global rule',
  description:
    'Adds a rule to the list of globally configured rules.\n\nThis operation can fail for the following reasons:\n\n* The rule type is unknown (HTTP error `400`)\n* The rule already exists (HTTP error `409`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'createGlobalRule',
  request: { body: { content: { 'application/json': { schema: RuleSchema } }, required: true } },
  responses: {
    204: { description: 'The global rule was added.' },
    400: BadRequestResponse,
    409: ConflictResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAdminRulesRoute = createRoute({
  method: 'delete',
  path: '/admin/rules',
  tags: ['Global rules', 'Admin'],
  summary: 'Delete all global rules',
  description:
    'Deletes all globally configured rules.\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'deleteAllGlobalRules',
  responses: {
    204: { description: 'All global rules have been removed successfully.' },
    500: ServerErrorResponse,
  },
})

export const getAdminRulesRuleRoute = createRoute({
  method: 'get',
  path: '/admin/rules/{rule}',
  tags: ['Global rules', 'Admin'],
  summary: 'Get global rule configuration',
  description:
    'Returns information about the named globally configured rule.\n\nThis operation can fail for the following reasons:\n\n* Invalid rule name/type (HTTP error `400`)\n* No rule with name/type `rule` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getGlobalRuleConfig',
  request: {
    params: z.object({
      rule: RuleTypeSchema.openapi({
        param: {
          description: 'The unique name/type of a rule.',
          in: 'path',
          name: 'rule',
          required: true,
          schema: { $ref: '#/components/schemas/RuleType' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: "The global rule's configuration.",
      content: { 'application/json': { schema: RuleSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putAdminRulesRuleRoute = createRoute({
  method: 'put',
  path: '/admin/rules/{rule}',
  tags: ['Global rules', 'Admin'],
  summary: 'Update global rule configuration',
  description:
    'Updates the configuration for a globally configured rule.\n\nThis operation can fail for the following reasons:\n\n* Invalid rule name/type (HTTP error `400`)\n* No rule with name/type `rule` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateGlobalRuleConfig',
  request: {
    params: z.object({
      rule: RuleTypeSchema.openapi({
        param: {
          description: 'The unique name/type of a rule.',
          in: 'path',
          name: 'rule',
          required: true,
          schema: { $ref: '#/components/schemas/RuleType' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: RuleSchema } }, required: true },
  },
  responses: {
    200: {
      description: "The global rule's configuration was successfully updated.",
      content: { 'application/json': { schema: RuleSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteAdminRulesRuleRoute = createRoute({
  method: 'delete',
  path: '/admin/rules/{rule}',
  tags: ['Global rules', 'Admin'],
  summary: 'Delete global rule',
  description:
    'Deletes a single global rule.  If this is the only rule configured, this is the same\nas deleting **all** rules.\n\nThis operation can fail for the following reasons:\n\n* Invalid rule name/type (HTTP error `400`)\n* No rule with name/type `rule` exists (HTTP error `404`)\n* Rule cannot be deleted (HTTP error `409`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'deleteGlobalRule',
  request: {
    params: z.object({
      rule: RuleTypeSchema.openapi({
        param: {
          description: 'The unique name/type of a rule.',
          in: 'path',
          name: 'rule',
          required: true,
          schema: { $ref: '#/components/schemas/RuleType' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'The global rule was successfully deleted.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'List groups',
  description: 'Returns a list of all groups.  This list is paged.',
  operationId: 'listGroups',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of groups to return.  Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of groups to skip before starting the result set.  Defaults to 0.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      order: SortOrderSchema.openapi({
        param: {
          description: 'Sort order, ascending (`asc`) or descending (`desc`).',
          in: 'query',
          name: 'order',
          schema: { $ref: '#/components/schemas/SortOrder' },
          required: false,
        },
      }).exactOptional(),
      orderby: SortBySchema.openapi({
        param: {
          description: 'The field to sort by.  Can be one of:\n\n* `name`\n* `createdOn`\n',
          in: 'query',
          name: 'orderby',
          schema: { $ref: '#/components/schemas/SortBy' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'On a successful response, returns a bounded set of groups.',
      content: { 'application/json': { schema: GroupSearchResultsSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create a new group',
  description:
    'Creates a new group.\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n* The group already exist (HTTP error `409`)\n',
  operationId: 'createGroup',
  request: {
    body: {
      content: { 'application/json': { schema: CreateGroupMetaDataSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The group has been successfully created.',
      content: { 'application/json': { schema: GroupMetaDataSchema } },
    },
    409: ConflictResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Get a group by the specified ID.',
  description:
    'Returns a group using the specified id.\n\nThis operation can fail for the following reasons:\n\n* No group exists with the specified ID (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'getGroupById',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: "The group's metadata.",
      content: { 'application/json': { schema: GroupMetaDataSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Delete a group by the specified ID.',
  description:
    'Deletes a group by identifier.\n\nThis operation can fail for the following reasons:\n\n* A server error occurred (HTTP error `500`)\n* The group does not exist (HTTP error `404`)\n',
  operationId: 'deleteGroupById',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Empty content indicates a successful deletion.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts',
  tags: ['Artifacts'],
  summary: 'List artifacts in group',
  description: 'Returns a list of all artifacts in the group.  This list is paged.',
  operationId: 'listArtifactsInGroup',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of artifacts to return.  Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of artifacts to skip before starting the result set.  Defaults to 0.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      order: SortOrderSchema.openapi({
        param: {
          description: 'Sort order, ascending (`asc`) or descending (`desc`).',
          in: 'query',
          name: 'order',
          schema: { $ref: '#/components/schemas/SortOrder' },
          required: false,
        },
      }).exactOptional(),
      orderby: SortBySchema.openapi({
        param: {
          description: 'The field to sort by.  Can be one of:\n\n* `name`\n* `createdOn`\n',
          in: 'query',
          name: 'orderby',
          schema: { $ref: '#/components/schemas/SortBy' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'On a successful response, returns a bounded set of artifacts.',
      content: { 'application/json': { schema: ArtifactSearchResultsSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const postGroupsGroupIdArtifactsRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}/artifacts',
  tags: ['Artifacts'],
  summary: 'Create artifact',
  description:
    "Creates a new artifact by posting the artifact content.  The body of the request should\nbe the raw content of the artifact.  This is typically in JSON format for *most* of the \nsupported types, but may be in another format for a few (for example, `PROTOBUF`).\n\nThe registry attempts to figure out what kind of artifact is being added from the\nfollowing supported list:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)\n\nAlternatively, you can specify the artifact type using the `X-Registry-ArtifactType` \nHTTP request header, or include a hint in the request's `Content-Type`.  For example:\n\n```\nContent-Type: application/json; artifactType=AVRO\n```\n\nAn artifact is created using the content provided in the body of the request.  This\ncontent is created under a unique artifact ID that can be provided in the request\nusing the `X-Registry-ArtifactId` request header.  If not provided in the request,\nthe server generates a unique ID for the artifact.  It is typically recommended\nthat callers provide the ID, because this is typically a meaningful identifier, \nand for most use cases should be supplied by the caller.\n\nIf an artifact with the provided artifact ID already exists, the default behavior\nis for the server to reject the content with a 409 error.  However, the caller can\nsupply the `ifExists` query parameter to alter this default behavior. The `ifExists`\nquery parameter can have one of the following values:\n\n* `FAIL` (*default*) - server rejects the content with a 409 error\n* `UPDATE` - server updates the existing artifact and returns the new metadata\n* `RETURN` - server does not create or add content to the server, but instead \nreturns the metadata for the existing artifact\n* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the \nprovided content if such a version exists, otherwise a new version is created\n\nThis operation may fail for one of the following reasons:\n\n* An invalid `ArtifactType` was indicated (HTTP error `400`)\n* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)\n* Provided content (request body) was empty (HTTP error `400`)\n* An artifact with the provided ID already exists (HTTP error `409`)\n* The content violates one of the configured global rules (HTTP error `409`)\n* A server error occurred (HTTP error `500`)\n",
  operationId: 'createArtifact',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
    }),
    headers: z.object({
      'X-Registry-ArtifactType': ArtifactTypeSchema.openapi({
        param: {
          description:
            'Specifies the type of the artifact being added. Possible values include:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)',
          in: 'header',
          name: 'X-Registry-ArtifactType',
          schema: { $ref: '#/components/schemas/ArtifactType' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-ArtifactId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A client-provided, globally unique identifier for the new artifact.',
            in: 'header',
            name: 'X-Registry-ArtifactId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'X-Registry-Version': VersionSchema.openapi({
        param: {
          description:
            'Specifies the version number of this initial version of the artifact content.  This would typically\nbe a simple integer or a SemVer value.  If not provided, the server will assign a version number\nautomatically (starting with version `1`).',
          in: 'header',
          name: 'X-Registry-Version',
          schema: { $ref: '#/components/schemas/Version' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Description': ArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the description of artifact being added. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description',
          required: false,
          schema: { $ref: '#/components/schemas/ArtifactDescription' },
        },
      }).exactOptional(),
      'X-Registry-Description-Encoded': EncodedArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the description of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactDescription' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name': ArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the name of artifact being added. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name',
          schema: { $ref: '#/components/schemas/ArtifactName' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name-Encoded': EncodedArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the name of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactName' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Content-Hash': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies the (optional) hash of the artifact to be verified.',
            in: 'header',
            name: 'X-Registry-Content-Hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'X-Registry-Hash-Algorithm': z
        .enum(['SHA256', 'MD5'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256)',
            in: 'header',
            name: 'X-Registry-Hash-Algorithm',
            schema: { enum: ['SHA256', 'MD5'], type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      ifExists: IfExistsSchema.openapi({
        param: {
          description:
            'Set this option to instruct the server on what to do if the artifact already exists.',
          in: 'query',
          name: 'ifExists',
          schema: { $ref: '#/components/schemas/IfExists' },
          required: false,
        },
      }).exactOptional(),
      canonical: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used only when the `ifExists` query parameter is set to `RETURN_OR_UPDATE`, this parameter can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner.',
            in: 'query',
            name: 'canonical',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'The content of the artifact being created. This is often, but not always, JSON data\nrepresenting one of the supported artifact types:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)\n',
      content: {
        '*/*': {
          schema: FileContentSchema,
          examples: {
            'OpenAPI Example': {
              value: {
                components: {
                  schemas: {
                    Widget: {
                      description: 'A sample data type.',
                      example: { 'property-1': 'value1', 'property-2': true },
                      properties: {
                        'property-1': { type: 'string' },
                        'property-2': { type: 'boolean' },
                      },
                      title: 'Root Type for Widget',
                      type: 'object',
                    },
                  },
                },
                info: {
                  description: 'An example API design using OpenAPI.',
                  title: 'Empty API',
                  version: '1.0.7',
                },
                openapi: '3.0.2',
                paths: {
                  '/widgets': {
                    get: {
                      responses: {
                        '200': {
                          content: {
                            'application/json': {
                              schema: { items: { type: 'string' }, type: 'array' },
                            },
                          },
                          description: 'All widgets',
                        },
                      },
                      summary: 'Get widgets',
                    },
                  },
                },
              },
            },
          },
        },
        'application/create.extended+json': { schema: ContentCreateRequestSchema },
        'application/vnd.create.extended+json': { schema: ContentCreateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Artifact was successfully created.',
      content: { 'application/json': { schema: ArtifactMetaDataSchema } },
    },
    400: BadRequestResponse,
    409: RuleViolationConflictResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdArtifactsRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}/artifacts',
  tags: ['Artifacts'],
  summary: 'Delete artifacts in group',
  description: 'Deletes all of the artifacts that exist in a given group.',
  operationId: 'deleteArtifactsInGroup',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'When the delete operation is successful, a simple 204 is returned.' },
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}',
  tags: ['Artifacts'],
  summary: 'Get latest artifact',
  description:
    'Returns the latest version of the artifact in its raw form.  The `Content-Type` of the\nresponse depends on the artifact type.  In most cases, this is `application/json`, but \nfor some types it may be different (for example, `PROTOBUF`).\n\nThis operation may fail for one of the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getLatestArtifact',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    query: z.object({
      dereference: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows the user to specify if the content should be dereferenced when being returned',
            in: 'query',
            name: 'dereference',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { 200: ArtifactContentResponse, 404: NotFoundResponse, 500: ServerErrorResponse },
})

export const putGroupsGroupIdArtifactsArtifactIdRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}',
  tags: ['Artifacts'],
  summary: 'Update artifact',
  description:
    "Updates an artifact by uploading new content.  The body of the request can\nbe the raw content of the artifact or a JSON object containing both the raw content and\na set of references to other artifacts..  This is typically in JSON format for *most*\nof the supported types, but may be in another format for a few (for example, `PROTOBUF`).\nThe type of the content should be compatible with the artifact's type (it would be\nan error to update an `AVRO` artifact with new `OPENAPI` content, for example).\n\nThe update could fail for a number of reasons including:\n\n* Provided content (request body) was empty (HTTP error `400`)\n* No artifact with the `artifactId` exists (HTTP error `404`)\n* The new content violates one of the rules configured for the artifact (HTTP error `409`)\n* A server error occurred (HTTP error `500`)\n\nWhen successful, this creates a new version of the artifact, making it the most recent\n(and therefore official) version of the artifact.",
  operationId: 'updateArtifact',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    headers: z.object({
      'X-Registry-Version': VersionSchema.openapi({
        param: {
          description:
            'Specifies the version number of this new version of the artifact content.  This would typically\nbe a simple integer or a SemVer value.  If not provided, the server will assign a version number\nautomatically.',
          in: 'header',
          name: 'X-Registry-Version',
          schema: { $ref: '#/components/schemas/Version' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name': ArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not\nprovided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name',
          schema: { $ref: '#/components/schemas/ArtifactName' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name-Encoded': EncodedArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactName' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Description': ArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description',
          schema: { $ref: '#/components/schemas/ArtifactDescription' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Description-Encoded': EncodedArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactDescription' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description:
        'The new content of the artifact being updated. This is often, but not always, JSON data\nrepresenting one of the supported artifact types:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)\n',
      content: {
        '*/*': {
          schema: FileContentSchema,
          examples: {
            'OpenAPI Example': {
              value: {
                components: {
                  schemas: {
                    Widget: {
                      description: 'A sample data type.',
                      example: { 'property-1': 'value1', 'property-2': true },
                      properties: {
                        'property-1': { type: 'string' },
                        'property-2': { type: 'boolean' },
                      },
                      title: 'Root Type for Widget',
                      type: 'object',
                    },
                  },
                },
                info: {
                  description: 'An example API design using OpenAPI.',
                  title: 'Empty API',
                  version: '1.0.7',
                },
                openapi: '3.0.2',
                paths: {
                  '/widgets': {
                    get: {
                      responses: {
                        '200': {
                          content: {
                            'application/json': {
                              schema: { items: { type: 'string' }, type: 'array' },
                            },
                          },
                          description: 'All widgets',
                        },
                      },
                      summary: 'Get widgets',
                    },
                  },
                },
              },
            },
          },
        },
        'application/create.extended+json': { schema: ContentCreateRequestSchema },
        'application/vnd.create.extended+json': { schema: ContentCreateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'When successful, returns the updated artifact metadata.',
      content: { 'application/json': { schema: ArtifactMetaDataSchema } },
    },
    404: NotFoundResponse,
    409: ConflictResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdArtifactsArtifactIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}/artifacts/{artifactId}',
  tags: ['Artifacts'],
  summary: 'Delete artifact',
  description:
    'Deletes an artifact completely, resulting in all versions of the artifact also being\ndeleted.  This may fail for one of the following reasons:\n\n* No artifact with the `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'deleteArtifact',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Returned when the artifact was successfully deleted.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdMetaRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/meta',
  tags: ['Metadata'],
  summary: 'Get artifact metadata',
  description:
    'Gets the metadata for an artifact in the registry.  The returned metadata includes\nboth generated (read-only) and editable metadata (such as name and description).\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'getArtifactMetaData',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: "The artifact's metadata.",
      content: { 'application/json': { schema: ArtifactMetaDataSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdMetaRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/meta',
  tags: ['Metadata'],
  summary: 'Update artifact metadata',
  description:
    "Updates the editable parts of the artifact's metadata.  Not all metadata fields can\nbe updated.  For example, `createdOn` and `createdBy` are both read-only properties.\n\nThis operation can fail for the following reasons:\n\n* No artifact with the `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)",
  operationId: 'updateArtifactMetaData',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    body: {
      description: 'Updated artifact metadata.',
      content: { 'application/json': { schema: EditableMetaDataSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: "The artifact's metadata was updated." },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postGroupsGroupIdArtifactsArtifactIdMetaRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}/artifacts/{artifactId}/meta',
  tags: ['Metadata'],
  summary: 'Get artifact version metadata by content',
  description:
    'Gets the metadata for an artifact that matches the raw content.  Searches the registry\nfor a version of the given artifact matching the content provided in the body of the\nPOST.\n\nThis operation can fail for the following reasons:\n\n* Provided content (request body) was empty (HTTP error `400`)\n* No artifact with the `artifactId` exists (HTTP error `404`)\n* No artifact version matching the provided content exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getArtifactVersionMetaDataByContent',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    query: z.object({
      canonical: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.',
            in: 'query',
            name: 'canonical',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The content of an artifact version.',
      content: {
        '*/*': {
          schema: FileContentSchema,
          examples: {
            OpenAPI: {
              value: {
                components: {
                  schemas: {
                    Widget: {
                      description: 'A sample data type.',
                      example: { 'property-1': 'value1', 'property-2': true },
                      properties: {
                        'property-1': { type: 'string' },
                        'property-2': { type: 'boolean' },
                      },
                      title: 'Root Type for Widget',
                      type: 'object',
                    },
                  },
                },
                info: {
                  description: 'An example API design using OpenAPI.',
                  title: 'Empty API',
                  version: '1.0.7',
                },
                openapi: '3.0.2',
                paths: {
                  '/widgets': {
                    get: {
                      responses: {
                        '200': {
                          content: {
                            'application/json': {
                              schema: { items: { type: 'string' }, type: 'array' },
                            },
                          },
                          description: 'All widgets',
                        },
                      },
                      summary: 'Get widgets',
                    },
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The metadata of the artifact version matching the provided content.',
      content: { 'application/json': { schema: VersionMetaDataSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdOwnerRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/owner',
  tags: ['Metadata'],
  summary: 'Get artifact owner',
  description:
    'Gets the owner of an artifact in the registry.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'getArtifactOwner',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: "The artifact's owner.",
      content: { 'application/json': { schema: ArtifactOwnerSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdOwnerRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/owner',
  tags: ['Metadata'],
  summary: 'Update artifact owner',
  description:
    'Changes the ownership of an artifact.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'updateArtifactOwner',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: ArtifactOwnerSchema } }, required: true },
  },
  responses: {
    204: { description: 'The owner was successfully changed.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdRulesRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules',
  tags: ['Artifact rules'],
  summary: 'List artifact rules',
  description:
    'Returns a list of all rules configured for the artifact.  The set of rules determines\nhow the content of an artifact can evolve over time.  If no rules are configured for\nan artifact, the set of globally configured rules are used.  If no global rules \nare defined, there are no restrictions on content evolution.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'listArtifactRules',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the names of the rules configured for the artifact.',
      content: { 'application/json': { schema: z.array(RuleTypeSchema) } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postGroupsGroupIdArtifactsArtifactIdRulesRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules',
  tags: ['Artifact rules'],
  summary: 'Create artifact rule',
  description:
    'Adds a rule to the list of rules that get applied to the artifact when adding new\nversions.  All configured rules must pass to successfully add a new artifact version.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* Rule (named in the request body) is unknown (HTTP error `400`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'createArtifactRule',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: RuleSchema } }, required: true },
  },
  responses: {
    204: { description: 'The rule was added.' },
    400: BadRequestResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdArtifactsArtifactIdRulesRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules',
  tags: ['Artifact rules'],
  summary: 'Delete artifact rules',
  description:
    'Deletes all of the rules configured for the artifact.  After this is done, the global\nrules apply to the artifact again.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'deleteArtifactRules',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'The rules were successfully deleted.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdRulesRuleRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules/{rule}',
  tags: ['Artifact rules'],
  summary: 'Get artifact rule configuration',
  description:
    'Returns information about a single rule configured for an artifact.  This is useful\nwhen you want to know what the current configuration settings are for a specific rule.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No rule with this name/type is configured for this artifact (HTTP error `404`)\n* Invalid rule type (HTTP error `400`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'getArtifactRuleConfig',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      rule: z
        .enum(['VALIDITY', 'COMPATIBILITY'])
        .openapi({
          param: {
            description: 'The unique name/type of a rule.',
            in: 'path',
            name: 'rule',
            required: true,
            schema: { enum: ['VALIDITY', 'COMPATIBILITY'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about a rule.',
      content: { 'application/json': { schema: RuleSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdRulesRuleRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules/{rule}',
  tags: ['Artifact rules'],
  summary: 'Update artifact rule configuration',
  description:
    'Updates the configuration of a single rule for the artifact.  The configuration data\nis specific to each rule type, so the configuration of the `COMPATIBILITY` rule \nis in a different format from the configuration of the `VALIDITY` rule.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No rule with this name/type is configured for this artifact (HTTP error `404`)\n* Invalid rule type (HTTP error `400`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateArtifactRuleConfig',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      rule: z
        .enum(['VALIDITY', 'COMPATIBILITY'])
        .openapi({
          param: {
            description: 'The unique name/type of a rule.',
            in: 'path',
            name: 'rule',
            required: true,
            schema: { enum: ['VALIDITY', 'COMPATIBILITY'], type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RuleSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Rule configuration was updated.',
      content: { 'application/json': { schema: RuleSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdArtifactsArtifactIdRulesRuleRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}/artifacts/{artifactId}/rules/{rule}',
  tags: ['Artifact rules'],
  summary: 'Delete artifact rule',
  description:
    'Deletes a rule from the artifact.  This results in the rule no longer applying for\nthis artifact.  If this is the only rule configured for the artifact, this is the \nsame as deleting **all** rules, and the globally configured rules now apply to\nthis artifact.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No rule with this name/type is configured for this artifact (HTTP error `404`)\n* Invalid rule type (HTTP error `400`)\n* A server error occurred (HTTP error `500`)',
  operationId: 'deleteArtifactRule',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      rule: z
        .enum(['VALIDITY', 'COMPATIBILITY'])
        .openapi({
          param: {
            description: 'The unique name/type of a rule.',
            in: 'path',
            name: 'rule',
            required: true,
            schema: { enum: ['VALIDITY', 'COMPATIBILITY'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The rule was successfully deleted.' },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdStateRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/state',
  tags: ['Artifacts'],
  summary: 'Update artifact state',
  description:
    'Updates the state of the artifact.  For example, you can use this to mark the latest\nversion of an artifact as `DEPRECATED`.  The operation changes the state of the latest \nversion of the artifact.  If multiple versions exist, only the most recent is changed.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateArtifactState',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UpdateStateSchema } }, required: true },
  },
  responses: {
    204: { description: 'Returned when the operation was successful.' },
    400: BadRequestResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdTestRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/test',
  tags: ['Artifact rules'],
  summary: 'Test update artifact',
  description:
    "Tests whether an update to the artifact's content *would* succeed for the provided content.\nUltimately, this applies any rules configured for the artifact against the given content\nto determine whether the rules would pass or fail, but without actually updating the artifact\ncontent.\n\nThe body of the request should be the raw content of the artifact.  This is typically in \nJSON format for *most* of the supported types, but may be in another format for a few \n(for example, `PROTOBUF`).\n\nThe update could fail for a number of reasons including:\n\n* Provided content (request body) was empty (HTTP error `400`)\n* No artifact with the `artifactId` exists (HTTP error `404`)\n* The new content violates one of the rules configured for the artifact (HTTP error `409`)\n* The provided artifact type is not recognized (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n\nWhen successful, this operation simply returns a *No Content* response.  This response\nindicates that the content is valid against the configured content rules for the \nartifact (or the global rules if no artifact rules are enabled).",
  operationId: 'testUpdateArtifact',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    body: {
      description:
        'The content of the artifact being tested. This is often, but not always, JSON data\nrepresenting one of the supported artifact types:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)\n',
      content: { '*/*': { schema: FileContentSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'When successful, returns "No Content" to indicate that the rules passed, and the\ncontent was not updated.',
    },
    404: NotFoundResponse,
    409: RuleViolationConflictResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdVersionsRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions',
  tags: ['Versions'],
  summary: 'List artifact versions',
  description:
    'Returns a list of all versions of the artifact.  The result set is paged.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'listArtifactVersions',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of versions to skip before starting to collect the result set.  Defaults to 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of versions to return.  Defaults to 20.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all artifact versions.',
      content: {
        'application/json': {
          schema: VersionSearchResultsSchema,
          examples: { 'All Versions': { value: [5, 6, 10, 103] } },
        },
      },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postGroupsGroupIdArtifactsArtifactIdVersionsRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions',
  tags: ['Versions'],
  summary: 'Create artifact version',
  description:
    "Creates a new version of the artifact by uploading new content.  The configured rules for\nthe artifact are applied, and if they all pass, the new content is added as the most recent \nversion of the artifact.  If any of the rules fail, an error is returned.\n\nThe body of the request can be the raw content of the new artifact version, or the raw content \nand a set of references pointing to other artifacts, and the type\nof that content should match the artifact's type (for example if the artifact type is `AVRO`\nthen the content of the request should be an Apache Avro document).\n\nThis operation can fail for the following reasons:\n\n* Provided content (request body) was empty (HTTP error `400`)\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* The new content violates one of the rules configured for the artifact (HTTP error `409`)\n* A server error occurred (HTTP error `500`)\n",
  operationId: 'createArtifactVersion',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
    }),
    headers: z.object({
      'X-Registry-Version': VersionSchema.openapi({
        param: {
          description:
            'Specifies the version number of this new version of the artifact content.  This would typically\nbe a simple integer or a SemVer value.  It must be unique within the artifact.  If this is not\nprovided, the server will generate a new, unique version number for this new updated content.',
          in: 'header',
          name: 'X-Registry-Version',
          schema: { $ref: '#/components/schemas/Version' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name': ArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not\nprovided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name',
          schema: { $ref: '#/components/schemas/ArtifactName' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Description': ArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description',
          schema: { $ref: '#/components/schemas/ArtifactDescription' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Description-Encoded': EncodedArtifactDescriptionSchema.openapi({
        param: {
          description:
            'Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.',
          in: 'header',
          name: 'X-Registry-Description-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactDescription' },
          required: false,
        },
      }).exactOptional(),
      'X-Registry-Name-Encoded': EncodedArtifactNameSchema.openapi({
        param: {
          description:
            'Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.',
          in: 'header',
          name: 'X-Registry-Name-Encoded',
          schema: { $ref: '#/components/schemas/EncodedArtifactName' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description:
        'The content of the artifact version being created or the content and a set of references to other artifacts. This is often, but not always, JSON data\nrepresenting one of the supported artifact types:\n\n* Avro (`AVRO`)\n* Protobuf (`PROTOBUF`)\n* JSON Schema (`JSON`)\n* Kafka Connect (`KCONNECT`)\n* OpenAPI (`OPENAPI`)\n* AsyncAPI (`ASYNCAPI`)\n* GraphQL (`GRAPHQL`)\n* Web Services Description Language (`WSDL`)\n* XML Schema (`XSD`)\n',
      content: {
        '*/*': {
          schema: FileContentSchema,
          examples: {
            'OpenAPI Example': {
              value: {
                components: {
                  schemas: {
                    Widget: {
                      description: 'A sample data type.',
                      example: { 'property-1': 'value1', 'property-2': true },
                      properties: {
                        'property-1': { type: 'string' },
                        'property-2': { type: 'boolean' },
                      },
                      title: 'Root Type for Widget',
                      type: 'object',
                    },
                  },
                },
                info: {
                  description: 'An example API design using OpenAPI.',
                  title: 'Empty API',
                  version: '1.0.7',
                },
                openapi: '3.0.2',
                paths: {
                  '/widgets': {
                    get: {
                      responses: {
                        '200': {
                          content: {
                            'application/json': {
                              schema: { items: { type: 'string' }, type: 'array' },
                            },
                          },
                          description: 'All widgets',
                        },
                      },
                      summary: 'Get widgets',
                    },
                  },
                },
              },
            },
          },
        },
        'application/create.extended+json': { schema: ContentCreateRequestSchema },
        'application/vnd.create.extended+json': { schema: ContentCreateRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The artifact version was successfully created.',
      content: { 'application/json': { schema: VersionMetaDataSchema } },
    },
    404: NotFoundResponse,
    409: RuleViolationConflictResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}',
  tags: ['Versions'],
  summary: 'Get artifact version',
  description:
    'Retrieves a single version of the artifact content.  Both the `artifactId` and the\nunique `version` number must be provided.  The `Content-Type` of the response depends \non the artifact type.  In most cases, this is `application/json`, but for some types \nit may be different (for example, `PROTOBUF`).\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getArtifactVersion',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
    query: z.object({
      dereference: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows the user to specify if the content should be dereferenced when being returned',
            in: 'query',
            name: 'dereference',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ArtifactContentResponse, 404: NotFoundResponse, 500: ServerErrorResponse },
})

export const getGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta',
  tags: ['Metadata'],
  summary: 'Get artifact version metadata',
  description:
    "Retrieves the metadata for a single version of the artifact.  The version metadata is \na subset of the artifact metadata and only includes the metadata that is specific to\nthe version (for example, this doesn't include `modifiedOn`).\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n",
  operationId: 'getArtifactVersionMetaData',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: "The artifact version's metadata.",
      content: { 'application/json': { schema: VersionMetaDataSchema } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta',
  tags: ['Metadata'],
  summary: 'Update artifact version metadata',
  description:
    "Updates the user-editable portion of the artifact version's metadata.  Only some of \nthe metadata fields are editable by the user.  For example, `description` is editable, \nbut `createdOn` is not.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n",
  operationId: 'updateArtifactVersionMetaData',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: EditableMetaDataSchema } }, required: true },
  },
  responses: {
    204: { description: "The artifact version's metadata was successfully updated." },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMetaRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta',
  tags: ['Metadata'],
  summary: 'Delete artifact version metadata',
  description:
    'Deletes the user-editable metadata properties of the artifact version.  Any properties\nthat are not user-editable are preserved.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'deleteArtifactVersionMetaData',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
  },
  responses: {
    204: { description: "The artifact version's user-editable metadata was successfully deleted." },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferencesRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}/references',
  tags: ['Versions'],
  summary: 'Get artifact version',
  description:
    'Retrieves a single version of the artifact content.  Both the `artifactId` and the\nunique `version` number must be provided.  The `Content-Type` of the response depends \non the artifact type.  In most cases, this is `application/json`, but for some types \nit may be different (for example, `PROTOBUF`).\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getArtifactVersionReferences',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'List of all the artifact references for this artifact.',
      content: { 'application/json': { schema: z.array(ArtifactReferenceSchema) } },
    },
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const putGroupsGroupIdArtifactsArtifactIdVersionsVersionStateRoute = createRoute({
  method: 'put',
  path: '/groups/{groupId}/artifacts/{artifactId}/versions/{version}/state',
  tags: ['Versions'],
  summary: 'Update artifact version state',
  description:
    'Updates the state of a specific version of an artifact.  For example, you can use \nthis operation to disable a specific version.\n\nThis operation can fail for the following reasons:\n\n* No artifact with this `artifactId` exists (HTTP error `404`)\n* No version with this `version` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'updateArtifactVersionState',
  request: {
    params: z.object({
      groupId: GroupIdSchema.openapi({
        param: {
          description:
            'The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.',
          in: 'path',
          name: 'groupId',
          required: true,
          schema: { $ref: '#/components/schemas/GroupId' },
        },
      }),
      artifactId: ArtifactIdSchema.openapi({
        param: {
          description:
            'The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.',
          in: 'path',
          name: 'artifactId',
          required: true,
          schema: { $ref: '#/components/schemas/ArtifactId' },
        },
      }),
      version: VersionSchema.openapi({
        param: {
          description: 'The unique identifier of a specific version of the artifact content.',
          in: 'path',
          name: 'version',
          required: true,
          schema: { $ref: '#/components/schemas/Version' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UpdateStateSchema } }, required: true },
  },
  responses: {
    204: { description: 'Returned when the update was successful.' },
    400: BadRequestResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getIdsContentHashesContentHashIndexRoute = createRoute({
  method: 'get',
  path: '/ids/contentHashes/{contentHash}/',
  tags: ['Artifacts'],
  summary: 'Get artifact content by SHA-256 hash',
  description:
    'Gets the content for an artifact version in the registry using the \nSHA-256 hash of the content.  This content hash may be shared by multiple artifact\nversions in the case where the artifact versions have identical content.\n\nThis operation may fail for one of the following reasons:\n\n* No content with this `contentHash` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getContentByHash',
  request: {
    params: z.object({
      contentHash: z
        .string()
        .openapi({
          param: {
            description: 'SHA-256 content hash for a single artifact content.',
            in: 'path',
            name: 'contentHash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: ArtifactContentResponse, 404: NotFoundResponse, 500: ServerErrorResponse },
})

export const getIdsContentHashesContentHashReferencesRoute = createRoute({
  method: 'get',
  path: '/ids/contentHashes/{contentHash}/references',
  tags: ['Artifacts'],
  summary: 'List artifact references by hash',
  description:
    'Returns a list containing all the artifact references using the artifact content hash.\n\nThis operation may fail for one of the following reasons:\n\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'referencesByContentHash',
  request: {
    params: z.object({
      contentHash: z
        .string()
        .openapi({
          param: {
            description: 'SHA-256 content hash for a single artifact content.',
            in: 'path',
            name: 'contentHash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list containing all the references for the artifact with the given content hash.',
      content: { 'application/json': { schema: z.array(ArtifactReferenceSchema) } },
    },
  },
})

export const getIdsContentIdsContentIdIndexRoute = createRoute({
  method: 'get',
  path: '/ids/contentIds/{contentId}/',
  tags: ['Artifacts'],
  summary: 'Get artifact content by ID',
  description:
    'Gets the content for an artifact version in the registry using the unique content\nidentifier for that content.  This content ID may be shared by multiple artifact\nversions in the case where the artifact versions are identical.\n\nThis operation may fail for one of the following reasons:\n\n* No content with this `contentId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getContentById',
  request: {
    params: z.object({
      contentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Global identifier for a single artifact content.',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: ArtifactContentResponse, 404: NotFoundResponse, 500: ServerErrorResponse },
})

export const getIdsContentIdsContentIdReferencesRoute = createRoute({
  method: 'get',
  path: '/ids/contentIds/{contentId}/references',
  tags: ['Artifacts'],
  summary: 'List artifact references by content ID',
  description:
    'Returns a list containing all the artifact references using the artifact content ID.\n\nThis operation may fail for one of the following reasons:\n\n* A server error occurred (HTTP error `500`)',
  operationId: 'referencesByContentId',
  request: {
    params: z.object({
      contentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Global identifier for a single artifact content.',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list containing all the references for the artifact with the given content id.',
      content: { 'application/json': { schema: z.array(ArtifactReferenceSchema) } },
    },
  },
})

export const getIdsGlobalIdsGlobalIdRoute = createRoute({
  method: 'get',
  path: '/ids/globalIds/{globalId}',
  tags: ['Artifacts'],
  summary: 'Get artifact by global ID',
  description:
    'Gets the content for an artifact version in the registry using its globally unique\nidentifier.\n\nThis operation may fail for one of the following reasons:\n\n* No artifact version with this `globalId` exists (HTTP error `404`)\n* A server error occurred (HTTP error `500`)\n',
  operationId: 'getContentByGlobalId',
  request: {
    params: z.object({
      globalId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Global identifier for an artifact version.',
            in: 'path',
            name: 'globalId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      dereference: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows the user to specify if the content should be dereferenced when being returned',
            in: 'query',
            name: 'dereference',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ArtifactContentResponse, 404: NotFoundResponse, 500: ServerErrorResponse },
})

export const getIdsGlobalIdsGlobalIdReferencesRoute = createRoute({
  method: 'get',
  path: '/ids/globalIds/{globalId}/references',
  tags: ['Artifacts'],
  summary: 'List artifact references by global ID',
  description:
    'Returns a list containing all the artifact references using the artifact global ID.\n\nThis operation may fail for one of the following reasons:\n\n* A server error occurred (HTTP error `500`)',
  operationId: 'referencesByGlobalId',
  request: {
    params: z.object({
      globalId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Global identifier for an artifact version.',
            in: 'path',
            name: 'globalId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A list containing all the references for the artifact with the given global id.',
      content: { 'application/json': { schema: z.array(ArtifactReferenceSchema) } },
    },
  },
})

export const getSearchArtifactsRoute = createRoute({
  method: 'get',
  path: '/search/artifacts',
  tags: ['Search', 'Artifacts'],
  summary: 'Search for artifacts',
  description:
    'Returns a paginated list of all artifacts that match the provided filter criteria.\n',
  operationId: 'searchArtifacts',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by artifact name.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of artifacts to skip before starting to collect the result set.  Defaults to 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of artifacts to return.  Defaults to 20.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      order: SortOrderSchema.openapi({
        param: {
          description: 'Sort order, ascending (`asc`) or descending (`desc`).',
          in: 'query',
          name: 'order',
          schema: { $ref: '#/components/schemas/SortOrder' },
          required: false,
        },
      }).exactOptional(),
      orderby: SortBySchema.openapi({
        param: {
          description: 'The field to sort by.  Can be one of:\n\n* `name`\n* `createdOn`\n',
          in: 'query',
          name: 'orderby',
          schema: { $ref: '#/components/schemas/SortBy' },
          required: false,
        },
      }).exactOptional(),
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by label.  Include one or more label to only return artifacts containing all of the\nspecified labels.',
            in: 'query',
            name: 'labels',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      properties: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by one or more name/value property.  Separate each name/value pair using a colon.  For\nexample `properties=foo:bar` will return only artifacts with a custom property named `foo`\nand value `bar`.',
            in: 'query',
            name: 'properties',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by description.',
            in: 'query',
            name: 'description',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by artifact group.',
            in: 'query',
            name: 'group',
            schema: { type: 'string' },
            required: false,
          },
        }),
      globalId: z
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
            description: 'Filter by globalId.',
            in: 'query',
            name: 'globalId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      contentId: z
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
            description: 'Filter by contentId.',
            in: 'query',
            name: 'contentId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'On a successful response, returns a result set of artifacts - one for each artifact\nin the registry that matches the criteria.',
      content: { 'application/json': { schema: ArtifactSearchResultsSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const postSearchArtifactsRoute = createRoute({
  method: 'post',
  path: '/search/artifacts',
  tags: ['Search', 'Artifacts'],
  summary: 'Search for artifacts by content',
  description:
    'Returns a paginated list of all artifacts with at least one version that matches the\nposted content.\n',
  operationId: 'searchArtifactsByContent',
  request: {
    query: z.object({
      canonical: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.',
            in: 'query',
            name: 'canonical',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      artifactType: ArtifactTypeSchema.openapi({
        param: {
          description:
            'Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts.',
          in: 'query',
          name: 'artifactType',
          schema: { $ref: '#/components/schemas/ArtifactType' },
          required: false,
        },
      }).exactOptional(),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of artifacts to skip before starting to collect the result set.  Defaults to 0.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of artifacts to return.  Defaults to 20.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, type: 'integer' },
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order, ascending (`asc`) or descending (`desc`).',
            in: 'query',
            name: 'order',
            schema: { enum: ['asc', 'desc'], type: 'string' },
            required: false,
          },
        }),
      orderby: z
        .enum(['name', 'createdOn'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field to sort by.  Can be one of:\n\n* `name`\n* `createdOn`\n',
            in: 'query',
            name: 'orderby',
            schema: { enum: ['name', 'createdOn'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The content to search for.',
      content: { '*/*': { schema: FileContentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'On a successful response, returns a result set of artifacts - one for each artifact\nin the registry that matches the criteria.',
      content: { 'application/json': { schema: ArtifactSearchResultsSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getSystemInfoRoute = createRoute({
  method: 'get',
  path: '/system/info',
  tags: ['System'],
  summary: 'Get system information',
  description:
    'This operation retrieves information about the running registry system, such as the version\nof the software and when it was built.',
  operationId: 'getSystemInfo',
  responses: {
    200: {
      description: 'On success, returns the system information.',
      content: { 'application/json': { schema: SystemInfoSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getSystemLimitsRoute = createRoute({
  method: 'get',
  path: '/system/limits',
  tags: ['System'],
  summary: 'Get resource limits information',
  description:
    'This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.',
  operationId: 'getResourceLimits',
  responses: {
    200: {
      description: 'On success, returns resource limits',
      content: { 'application/json': { schema: LimitsSchema } },
    },
    500: ServerErrorResponse,
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Get current user',
  description: 'Returns information about the currently authenticated user.',
  operationId: 'getCurrentUserInfo',
  responses: {
    200: {
      description: 'Response when the endpoint is successfully invoked.',
      content: { 'application/json': { schema: UserInfoSchema } },
    },
    500: ServerErrorResponse,
  },
})
