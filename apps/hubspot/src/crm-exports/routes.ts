import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({
        description: 'A string indicating the general category of the error.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({ description: 'Context about the error condition', example: null }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects providing further information about the error.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies this error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object mapping link names to associated URIs that contain documentation about the error or recommended remediation steps.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    status: z
      .string()
      .openapi({ description: 'A string representing the status of the error.', example: null }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const ActionResponseWithSingleResultURISchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the export was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of StandardError objects detailing any errors that occurred during the export task.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'A collection of related links associated with the export.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of errors encountered during the export process.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The timestamp when the export request was made, in ISO 8601 format.',
        example: null,
      }),
    result: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the resulting file if the export status is COMPLETE.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the export process started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          'The current status of the export, which can be PENDING, PROCESSING, COMPLETE or CANCELED.',
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'startedAt', 'status'], example: null })
  .openapi('ActionResponseWithSingleResultURI')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const FilterSchema = z
  .object({
    highValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string representing the upper boundary value used with the 'BETWEEN' operator.",
        example: null,
      }),
    operator: z
      .enum([
        'BETWEEN',
        'CONTAINS_TOKEN',
        'EQ',
        'GT',
        'GTE',
        'HAS_PROPERTY',
        'IN',
        'LT',
        'LTE',
        'NEQ',
        'NOT_CONTAINS_TOKEN',
        'NOT_HAS_PROPERTY',
        'NOT_IN',
      ])
      .openapi({
        description:
          "The operator used to compare the property value against the specified value(s). Valid operators include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.",
        example: null,
      }),
    propertyName: z
      .string()
      .openapi({
        description: 'The name of the property to filter by. This is a string value.',
        example: null,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the value to compare the property against when using certain operators.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          "An array of string values used with operators like 'IN' and 'NOT_IN' to specify multiple comparison values.",
        example: null,
      }),
  })
  .openapi({
    required: ['operator', 'propertyName'],
    description:
      'Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against. ',
    example: null,
  })
  .openapi('Filter')

const FilterGroupSchema = z
  .object({
    filters: z
      .array(FilterSchema)
      .openapi({
        description:
          'An array of filter objects that define the criteria for the filter group. Each filter specifies a property, an operator, and a value to be used in the filtering process.',
        example: null,
      }),
  })
  .openapi({
    required: ['filters'],
    description:
      'Represents a group of filters used to query data within HubSpot. This component is used to define criteria for filtering records in various API endpoints.',
    example: null,
  })
  .openapi('FilterGroup')

const PublicCrmSearchRequestSchema = z
  .object({
    filterGroups: z
      .array(FilterGroupSchema)
      .openapi({
        description:
          'An array of filter groups, where each group contains multiple filters. This allows for complex filtering logic by combining multiple filters together.',
        example: null,
      }),
    filters: z
      .array(FilterSchema)
      .openapi({
        description:
          'An array of filter objects used to specify the criteria for the search. Each filter defines a property, an operator, and a value to filter by.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The search query string, to filter CRM records.', example: null }),
    sorts: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'Defines the order in which the CRM records should be returned.',
        example: null,
      }),
  })
  .openapi({ required: ['filterGroups', 'filters', 'sorts'], example: null })
  .openapi('PublicCrmSearchRequest')

const PublicExportListRequestSchema = z
  .object({
    associatedObjectType: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the types of associated objects to include in the export.',
        example: null,
      }),
    exportInternalValuesOptions: z
      .array(z.enum(['NAMES', 'VALUES']).openapi({ example: null }))
      .openapi({
        description:
          "An array of strings indicating options for exporting internal values. Valid values are 'NAMES' and 'VALUES'.",
        example: null,
      }),
    exportName: z
      .string()
      .openapi({ description: 'A string representing the name of the export.', example: null }),
    exportType: z
      .literal('LIST')
      .default('LIST')
      .openapi({
        description: "A string indicating the type of export, which is 'LIST' by default.",
        example: null,
      }),
    format: z
      .enum(['CSV', 'XLS', 'XLSX'])
      .openapi({
        description:
          "A string specifying the format of the export file. Valid values are 'XLS', 'XLSX', and 'CSV'.",
        example: null,
      }),
    includeLabeledAssociations: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to include labeled associations in the export.',
        example: null,
      }),
    includePrimaryDisplayPropertyForAssociatedObjects: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include the primary display property for associated objects.',
        example: null,
      }),
    language: z
      .enum([
        'AF_ZA',
        'AR_EG',
        'BG',
        'BN',
        'CA_ES',
        'CS',
        'DA_DK',
        'DE',
        'EL_GR',
        'EN',
        'EN_GB',
        'ES',
        'ES_MX',
        'ET_EE',
        'FI',
        'FR',
        'FR_CA',
        'HE_IL',
        'HI_IN',
        'HR',
        'HU',
        'ID',
        'IT',
        'JA',
        'KO_KR',
        'LT_LT',
        'MS',
        'NL',
        'NO',
        'PL',
        'PT_BR',
        'PT_PT',
        'RO',
        'RU',
        'SK_SK',
        'SL',
        'SV',
        'TH',
        'TL',
        'TR',
        'UK',
        'VI_VN',
        'ZH_CN',
        'ZH_HK',
        'ZH_TW',
      ])
      .openapi({
        description:
          "A string specifying the language for the export. Valid values include language codes such as 'EN', 'FR', 'DE', etc.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'A string representing the ID of the list to be exported.',
        example: null,
      }),
    objectProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings listing the properties of the objects to be included in the export.',
        example: null,
      }),
    objectType: z
      .string()
      .openapi({
        description: 'A string representing the type of objects being exported.',
        example: null,
      }),
    overrideAssociatedObjectsPerDefinitionPerRowLimit: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to override the limit on associated objects per definition per row.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'associatedObjectType',
      'exportInternalValuesOptions',
      'exportName',
      'exportType',
      'format',
      'includeLabeledAssociations',
      'includePrimaryDisplayPropertyForAssociatedObjects',
      'language',
      'listId',
      'objectProperties',
      'objectType',
      'overrideAssociatedObjectsPerDefinitionPerRowLimit',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicExportListRequest')

const PublicExportViewRequestSchema = z
  .object({
    associatedObjectType: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings indicating the types of associated objects to include in the export.',
        example: null,
      }),
    exportInternalValuesOptions: z
      .array(z.enum(['NAMES', 'VALUES']).openapi({ example: null }))
      .openapi({
        description:
          "An array of strings specifying options for internal values in the export. Valid values are 'NAMES' and 'VALUES'.",
        example: null,
      }),
    exportName: z
      .string()
      .openapi({
        description: 'The name assigned to the export, represented as a string.',
        example: null,
      }),
    exportType: z
      .literal('VIEW')
      .default('VIEW')
      .openapi({
        description: "The type of export being requested. The only valid value is 'VIEW'.",
        example: null,
      }),
    format: z
      .enum(['CSV', 'XLS', 'XLSX'])
      .openapi({
        description: "The file format for the export. Valid options are 'XLS', 'XLSX', and 'CSV'.",
        example: null,
      }),
    includeLabeledAssociations: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether labeled associations should be included in the export.',
        example: null,
      }),
    includePrimaryDisplayPropertyForAssociatedObjects: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the primary display property for associated objects should be included.',
        example: null,
      }),
    language: z
      .enum([
        'AF_ZA',
        'AR_EG',
        'BG',
        'BN',
        'CA_ES',
        'CS',
        'DA_DK',
        'DE',
        'EL_GR',
        'EN',
        'EN_GB',
        'ES',
        'ES_MX',
        'ET_EE',
        'FI',
        'FR',
        'FR_CA',
        'HE_IL',
        'HI_IN',
        'HR',
        'HU',
        'ID',
        'IT',
        'JA',
        'KO_KR',
        'LT_LT',
        'MS',
        'NL',
        'NO',
        'PL',
        'PT_BR',
        'PT_PT',
        'RO',
        'RU',
        'SK_SK',
        'SL',
        'SV',
        'TH',
        'TL',
        'TR',
        'UK',
        'VI_VN',
        'ZH_CN',
        'ZH_HK',
        'ZH_TW',
      ])
      .openapi({
        description:
          "The language code for the export. Valid values include 'EN', 'FR', 'DE', 'JA', 'ES', 'PT_BR', 'NL', 'BN', 'CS', 'DA_DK', 'EL_GR', 'ES_MX', 'FI', 'HR', 'HU', 'ID', 'IT', 'KO_KR', 'NO', 'PL', 'RO', 'RU', 'SV', 'TH', 'VI_VN', 'ZH_CN', 'ZH_HK', 'AF_ZA', 'AR_EG', 'BG', 'CA_ES', 'SL', 'TR', 'UK', 'EN_GB', 'FR_CA', 'HE_IL', 'LT_LT', 'PT_PT', 'SK_SK', 'MS', 'TL', 'ZH_TW', 'HI_IN', 'ET_EE'.",
        example: null,
      }),
    objectProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the properties of the object to be included in the export.',
        example: null,
      }),
    objectType: z
      .string()
      .openapi({
        description: 'A string representing the type of object being exported.',
        example: null,
      }),
    overrideAssociatedObjectsPerDefinitionPerRowLimit: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to override the limit of associated objects per definition per row.',
        example: null,
      }),
    publicCrmSearchRequest: PublicCrmSearchRequestSchema.exactOptional(),
  })
  .openapi({
    required: [
      'associatedObjectType',
      'exportInternalValuesOptions',
      'exportName',
      'exportType',
      'format',
      'includeLabeledAssociations',
      'includePrimaryDisplayPropertyForAssociatedObjects',
      'language',
      'objectProperties',
      'objectType',
      'overrideAssociatedObjectsPerDefinitionPerRowLimit',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicExportViewRequest')

const PublicExportRequestSchema = z
  .xor([PublicExportViewRequestSchema, PublicExportListRequestSchema])
  .openapi({ example: null })
  .openapi('PublicExportRequest')

const PublicExportResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the export was created, in ISO 8601 format.',
        example: null,
      }),
    exportName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name assigned to the export.', example: null }),
    exportState: z
      .enum([
        'CANCELED',
        'CONFLICT',
        'DEFERRED',
        'DELETED',
        'DONE',
        'ENQUEUED',
        'FAILED',
        'PENDING_APPROVAL',
        'PROCESSING',
      ])
      .openapi({ description: 'The current state of the export process.', example: null }),
    exportType: z
      .enum(['LIST', 'VIEW'])
      .openapi({
        description: 'The type of export, which can be either VIEW or LIST.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique ID of the export.', example: null }),
    objectProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'The list of properties exported for the associated object.',
        example: null,
      }),
    objectType: z
      .string()
      .openapi({ description: 'The associated CRM object being exported.', example: null }),
    recordCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of records included in the export.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The timestamp when the export was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'exportState',
      'exportType',
      'id',
      'objectProperties',
      'objectType',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicExportResponse')

const TaskLocatorSchema = z
  .object({
    id: z.string().openapi({ description: 'The unique ID of the export.', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An object containing relevant links related to the export process.',
        example: null,
      }),
  })
  .openapi({ required: ['id'], example: null })
  .openapi('TaskLocator')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'crm.export': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postCrmExports202609ExportAsyncRoute = createRoute({
  method: 'post',
  path: '/crm/exports/2026-09/export/async',
  tags: ['Advanced'],
  summary: 'Start an export',
  description: 'Begins exporting CRM data for the portal as specified in the request body',
  operationId: 'post-/crm/exports/2026-09/export/async_start',
  request: {
    body: {
      content: { 'application/json': { schema: PublicExportRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'accepted',
      content: { 'application/json': { schema: TaskLocatorSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.export'] }],
})

export const getCrmExports202609ExportAsyncTasksTaskIdStatusRoute = createRoute({
  method: 'get',
  path: '/crm/exports/2026-09/export/async/tasks/{taskId}/status',
  tags: ['Advanced'],
  summary: 'Get the status of the export including the URL to download the file',
  description:
    'Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE',
  operationId: 'get-/crm/exports/2026-09/export/async/tasks/{taskId}/status_getStatus',
  request: {
    params: z.object({
      taskId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'taskId',
            in: 'path',
            description:
              'The unique identifier of the export task whose status you want to retrieve. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ActionResponseWithSingleResultURISchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.export'] }],
})

export const getCrmExports202609ExportExportIdRoute = createRoute({
  method: 'get',
  path: '/crm/exports/2026-09/export/{exportId}',
  tags: ['Basic'],
  summary: 'Retrieve details of a specific export by its unique ID.',
  description:
    'Retrieve detailed information about a specific CRM export, including its current state and properties.',
  operationId: 'get-/crm/exports/2026-09/export/{exportId}_getById',
  request: {
    params: z.object({
      exportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'exportId',
            in: 'path',
            description: 'The unique identifier of the export to retrieve. It is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicExportResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.export'] }],
})
