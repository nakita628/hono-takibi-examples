import { createRoute, z } from '@hono/zod-openapi'

const UnifiedPropertySchema = z
  .string()
  .openapi({ description: 'Name of the property in our Unified API.', example: 'owner_id' })
  .openapi('UnifiedProperty')

type SupportedPropertyType = {
  child_properties?: { unified_property?: SupportedPropertyType }[]
  unified_property?: z.infer<typeof UnifiedPropertySchema>
}

const ResourceStatusSchema = z
  .enum(['live', 'beta', 'development', 'upcoming', 'considering'])
  .openapi({
    description: 'Status of the resource. Resources with status live or beta are callable.',
  })
  .openapi('ResourceStatus')

const ApiStatusSchema = z
  .enum(['live', 'beta', 'development', 'considering'])
  .openapi({ description: 'Status of the API. APIs with status live or beta are callable.' })
  .openapi('ApiStatus')

const ApiSchema = z
  .object({
    api_reference_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the API reference of the API.',
        example: 'https://developers.apideck.com/apis/file-storage/reference',
      }),
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of categories the API belongs to.',
        example: ['files', 'file-storage', 'cloud-storage', 'object-storage'],
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Description of the API.',
        example: 'Manage API keys, access tokens, OAuth flows and integrations.',
      }),
    events: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of event types this API supports.',
        example: ['crm.contact.updated', 'accounting.invoice.created'],
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the API.', example: 'file-storage', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the API.', example: 'File Storage API' }),
    postman_collection_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'ID of the Postman collection of the API.',
        example: '1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f',
      }),
    resources: z
      .array(
        z
          .object({
            excluded_from_coverage: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Exclude from mapping coverage', example: false }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'ID of the resource, typically a lowercased version of its name.',
                example: 'companies',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the resource (plural)', example: 'Companies' }),
            status: ResourceStatusSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of resources supported in this API.' }),
    spec_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the latest OpenAPI specification of the API.',
        example: 'https://specs.apideck.com/file-storage.yml',
      }),
    status: ApiStatusSchema.exactOptional(),
    type: z
      .enum(['platform', 'unified'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Api', required: [] })
  .openapi('Api')

const ResourceIdSchema = z
  .string()
  .openapi({
    description: 'ID of the resource, typically a lowercased version of name.',
    example: 'companies',
  })
  .openapi('ResourceId')

const ApiResourceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the resource, typically a lowercased version of name.',
        example: 'companies',
      }),
    linked_resources: z
      .array(
        z
          .object({
            id: ResourceIdSchema.exactOptional(),
            unified_property: UnifiedPropertySchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of linked resources.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the resource (plural)', example: 'Companies' }),
    schema: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'JSON Schema of the resource in our Unified API',
        example: {
          additionalProperties: false,
          properties: {
            created_at: { example: '2020-09-30T07:43:32.000Z', readOnly: true, type: 'string' },
            id: { example: '12345', readOnly: true, type: 'string' },
            name: { example: 'Elon Musk', minLength: 1, type: 'string' },
            updated_at: { example: '2020-09-30T07:43:32.000Z', readOnly: true, type: 'string' },
          },
          required: ['name', 'company_name'],
          'x-pii': ['name', 'email', 'first_name', 'last_name'],
        },
        'x-json-schema': true,
      }),
    status: ResourceStatusSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'ApiResource', required: [] })
  .openapi('ApiResource')

const PaginationCoverageSchema = z
  .object({
    limit_support: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the connector supports changing the page size by using the limit parameter.',
      }),
    mode: z
      .enum(['native', 'virtual'])
      .exactOptional()
      .openapi({
        description:
          'How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.',
        example: 'native',
      }),
    paging_support: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the connector supports paging through results using the cursor parameter.',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConnectorResource', required: [] })
  .openapi('PaginationCoverage')

const SupportedPropertySchema: z.ZodType<SupportedPropertyType> = z
  .lazy(() =>
    z
      .object({
        child_properties: z
          .array(
            z
              .object({ unified_property: SupportedPropertySchema.exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of child properties of the unified property.' }),
        unified_property: UnifiedPropertySchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('SupportedProperty')

const ApiResourceCoverageSchema = z
  .object({
    coverage: z
      .array(
        z
          .object({
            downstream_id: z
              .string()
              .exactOptional()
              .openapi({
                description: "ID of the resource in the Connector's API (downstream)",
                example: 'accounts',
              }),
            downstream_name: z
              .string()
              .exactOptional()
              .openapi({
                description: "Name of the resource in the Connector's API (downstream)",
                example: 'Accounts',
              }),
            pagination: PaginationCoverageSchema.exactOptional(),
            pagination_supported: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.',
              }),
            supported_fields: z
              .array(SupportedPropertySchema)
              .exactOptional()
              .openapi({ description: 'Supported fields on the detail endpoint.' }),
            supported_filters: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'Supported filters on the list endpoint of the resource.',
                example: ['name', 'email'],
              }),
            supported_list_fields: z
              .array(SupportedPropertySchema)
              .exactOptional()
              .openapi({ description: 'Supported fields on the list endpoint.' }),
            supported_operations: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'List of supported operations on the resource.',
                example: ['all', 'one', 'add', 'update', 'delete'],
              }),
            supported_sort_by: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'Supported sorting properties on the list endpoint of the resource.',
                example: ['updated_at', 'created_at', 'name'],
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the resource, typically a lowercased version of name.',
        example: 'companies',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the resource (plural)', example: 'Companies' }),
    status: ResourceStatusSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'ApiResourceCoverage', required: [] })
  .openapi('ApiResourceCoverage')

const ApisFilterSchema = z
  .strictObject({ status: ApiStatusSchema.exactOptional() })
  .openapi({
    example: { status: 'beta' },
    'x-apideck-schema-id': 'ApisFilter',
    'x-graphql-type-name': 'ApisFilter',
    required: [],
  })
  .openapi('ApisFilter')

const BadRequestResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing property foobar' }),
        z.object({}).openapi({ example: { missing: [{ foobar: 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestvalidationerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestValidationError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'BadRequest', required: [] })
  .openapi('BadRequestResponse')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

const ConnectorDocSchema = z
  .object({
    audience: z
      .enum(['application_owner', 'consumer'])
      .exactOptional()
      .openapi({ description: 'Audience for the doc.' }),
    format: z.literal('markdown').exactOptional().openapi({ description: 'Format of the doc.' }),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the doc.', example: 'connection' }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Link to fetch the content of the doc.',
        example: 'https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConnectorDoc', required: [] })
  .openapi('ConnectorDoc')

const ConnectorSettingSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'pipeline_id' }),
    label: z.string().exactOptional().openapi({ example: 'Pipeline' }),
    type: z
      .enum([
        'text',
        'checkbox',
        'tel',
        'email',
        'url',
        'textarea',
        'select',
        'filtered-select',
        'multi-select',
        'datetime',
        'date',
        'time',
        'number',
        'password',
      ])
      .exactOptional()
      .openapi({ example: 'select' }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConnectorSetting', required: [] })
  .openapi('ConnectorSetting')

const ConnectorStatusSchema = z
  .enum(['live', 'beta', 'development', 'considering'])
  .openapi({
    description: 'Status of the connector. Connectors with status live or beta are callable.',
  })
  .openapi('ConnectorStatus')

const ConnectorEventSchema = z
  .object({
    downstream_event_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Downstream event type', example: 'person_created' }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unify entity type', example: 'employee' }),
    event_source: z
      .enum(['native', 'virtual'])
      .exactOptional()
      .openapi({ description: 'Unify event source', example: 'native' }),
    event_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unify event type', example: 'employee.created' }),
    resources: z.array(ResourceIdSchema).exactOptional(),
  })
  .openapi({
    description:
      'Unify event that is supported on the connector. Events are delivered via Webhooks.',
    'x-apideck-schema-id': 'ConnectorEvent',
    required: [],
  })
  .openapi('ConnectorEvent')

const LinkedConnectorResourceSchema = z
  .object({
    downstream_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "ID of the resource in the Connector's API (downstream)",
        example: 'accounts',
      }),
    downstream_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Name of the resource in the Connector's API (downstream)",
        example: 'Accounts',
      }),
    id: ResourceIdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the resource (plural)', example: 'Companies' }),
    status: ResourceStatusSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'LinkedConnectorResource', required: [] })
  .openapi('LinkedConnectorResource')

const UnifiedApiIdSchema = z
  .enum([
    'accounting',
    'ats',
    'calendar',
    'crm',
    'csp',
    'customer-support',
    'ecommerce',
    'email',
    'email-marketing',
    'expense-management',
    'file-storage',
    'form',
    'hris',
    'lead',
    'payroll',
    'pos',
    'procurement',
    'project-management',
    'script',
    'sms',
    'spreadsheet',
    'team-messaging',
    'issue-tracking',
    'time-registration',
    'transactional-email',
    'vault',
  ])
  .openapi({
    description: 'Name of Apideck Unified API',
    example: 'crm',
    'x-apideck-enum-id': 'unified_api',
  })
  .openapi('UnifiedApiId')

const WebhookSupportSchema = z
  .object({
    managed_via: z
      .enum(['manual', 'api'])
      .exactOptional()
      .openapi({
        description: 'How the subscription is managed in the downstream.',
        example: 'api',
      }),
    mode: z
      .enum(['native', 'virtual', 'none'])
      .exactOptional()
      .openapi({ description: 'Mode of the webhook support.', example: 'native' }),
    subscription_level: z
      .enum(['connection', 'integration'])
      .exactOptional()
      .openapi({
        description: 'Received events are scoped to connection or across integration.',
        example: 'integration',
      }),
    virtual_webhooks: z
      .strictObject({
        request_rate: z
          .strictObject({
            rate: z
              .int()
              .openapi({ description: 'The number of requests per window unit.', title: 'Rate' }),
            size: z
              .int()
              .openapi({ description: 'Size of request window.', title: 'Size of rate window' }),
            unit: z
              .enum(['second', 'minute', 'hour', 'day'])
              .openapi({ description: 'The window unit for the rate.', title: 'Unit' }),
          })
          .openapi({
            description: 'The rate at which requests for resources will be made to downstream.',
            required: ['rate', 'size', 'unit'],
            title: 'Request Rate',
          }),
        resources: z
          .object({})
          .exactOptional()
          .openapi({
            description: 'The resources that will be requested from downstream.',
            title: 'Resources',
            'x-patternProperties': {
              '^.*$': {
                properties: { events: { items: { type: 'string' }, type: 'array' } },
                type: 'object',
              },
            },
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Virtual webhook config for the connector.',
        required: ['request_rate'],
        title: 'Virtual Webhooks',
      }),
  })
  .openapi({
    description:
      'How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.',
    'x-apideck-schema-id': 'WebhookSupport',
    required: [],
  })
  .openapi('WebhookSupport')

const ConnectorSchema = z
  .object({
    auth_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API',
        example: true,
        readOnly: true,
      }),
    auth_type: z
      .enum(['oauth2', 'apiKey', 'basic', 'custom', 'none'])
      .exactOptional()
      .openapi({
        description: 'Type of authorization used by the connector',
        example: 'oauth2',
        readOnly: true,
        'x-apideck-enum-id': 'auth_types',
      }),
    blind_mapped: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality.',
        example: true,
        readOnly: true,
      }),
    configurable_resources: z
      .array(ResourceIdSchema)
      .exactOptional()
      .openapi({
        description: 'List of resources that have settings that can be configured.',
        example: ['leads', 'companies'],
      }),
    custom_scopes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set to `true` when connector allows the definition of custom scopes.',
        example: true,
        readOnly: true,
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A description of the object.',
        example: 'A description',
        title: 'Description',
      }),
    docs: z.array(ConnectorDocSchema).exactOptional(),
    free_trial_available: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial',
      }),
    has_sandbox_credentials: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether Apideck Sandbox OAuth credentials are available.',
        example: true,
      }),
    icon_url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Link to a small square icon for the connector.',
        example:
          'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the connector.', example: 'crm+salesforce', readOnly: true }),
    logo_url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Link to the full logo for the connector.',
        example:
          'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the connector.', example: 'Salesforce' }),
    oauth_credentials_source: z
      .enum(['integration', 'connection'])
      .exactOptional()
      .openapi({
        description:
          'Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.',
        example: 'integration',
        readOnly: true,
        'x-apideck-enum-id': 'oauth_credentials_source',
      }),
    oauth_grant_type: z
      .enum(['authorization_code', 'client_credentials', 'password'])
      .exactOptional()
      .openapi({
        description:
          'OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types',
        example: 'authorization_code',
        readOnly: true,
        'x-apideck-enum-id': 'oauth_grant_types',
      }),
    oauth_scopes: z
      .array(
        z
          .object({
            default_apis: z
              .array(z.string().openapi({ description: 'ID of the Unified API.', example: 'crm' }))
              .exactOptional()
              .openapi({
                description:
                  'List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes.',
              }),
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'ID of the OAuth scope.', example: 'contacts:all' }),
            label: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Label of the OAuth scope.',
                example: 'Read/write on the Contacts resource',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of OAuth Scopes available for this connector.' }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service provider identifier', example: 'close' }),
    settings: z.array(ConnectorSettingSchema).exactOptional(),
    signup_url: z
      .url()
      .exactOptional()
      .openapi({
        description: "Link to the connector's signup page.",
        example: 'https://www.salesforce.com/signup',
      }),
    status: ConnectorStatusSchema.exactOptional(),
    supported_events: z
      .array(ConnectorEventSchema)
      .exactOptional()
      .openapi({
        description: 'List of events that are supported on the connector across all Unified APIs.',
      }),
    supported_resources: z
      .array(LinkedConnectorResourceSchema)
      .exactOptional()
      .openapi({ description: 'List of resources that are supported on the connector.' }),
    tls_support: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description of the TLS support' }),
        type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    unified_apis: z
      .array(
        z
          .object({
            downstream_unsupported_resources: z
              .array(ResourceIdSchema)
              .exactOptional()
              .openapi({
                description: 'List of resources that are not supported on the downstream.',
              }),
            id: UnifiedApiIdSchema.exactOptional(),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the API.', example: 'File Storage API' }),
            oauth_scopes: z
              .array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ID of the OAuth scope.', example: 'contacts:all' }),
                    label: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Label of the OAuth scope.',
                        example: 'Read/write on the Contacts resource',
                      }),
                  })
                  .openapi({
                    description:
                      'OAuth scopes required for the connector. Add these scopes to your OAuth app.',
                    example: { id: 'contacts:all', label: 'Read/write on the Contacts resource' },
                    required: [],
                  }),
              )
              .exactOptional(),
            supported_events: z
              .array(ConnectorEventSchema)
              .exactOptional()
              .openapi({
                description:
                  'List of events that are supported on the connector for this Unified API.',
              }),
            supported_resources: z
              .array(LinkedConnectorResourceSchema)
              .exactOptional()
              .openapi({ description: 'List of resources that are supported on the connector.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of Unified APIs that feature this connector.' }),
    webhook_support: WebhookSupportSchema.exactOptional(),
    website_url: z
      .url()
      .exactOptional()
      .openapi({
        description: "Link to the connector's website.",
        example: 'https://www.salesforce.com',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Connector', required: [] })
  .openapi('Connector')

const ConnectorResourceSchema = z
  .object({
    custom_fields_supported: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if custom fields are supported on this resource.' }),
    downstream_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "ID of the resource in the Connector's API (downstream)",
        example: 'accounts',
      }),
    downstream_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Name of the resource in the Connector's API (downstream)",
        example: 'Accounts',
      }),
    downstream_unsupported_operations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of operations that are not supported on the downstream.',
        example: ['upload'],
      }),
    id: ResourceIdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the resource (plural)', example: 'Companies' }),
    pagination: PaginationCoverageSchema.exactOptional(),
    pagination_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.',
      }),
    status: ResourceStatusSchema.exactOptional(),
    supported_fields: z
      .array(SupportedPropertySchema)
      .exactOptional()
      .openapi({ description: 'Supported fields on the detail endpoint.' }),
    supported_filters: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Supported filters on the list endpoint of the resource.',
        example: ['name', 'email'],
      }),
    supported_list_fields: z
      .array(SupportedPropertySchema)
      .exactOptional()
      .openapi({ description: 'Supported fields on the list endpoint.' }),
    supported_operations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of supported operations on the resource.',
        example: ['all', 'one', 'add', 'update', 'delete'],
      }),
    supported_sort_by: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Supported sorting properties on the list endpoint of the resource.',
        example: ['updated_at', 'created_at', 'name'],
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConnectorResource', required: [] })
  .openapi('ConnectorResource')

const ConnectorsFilterSchema = z
  .strictObject({
    status: ConnectorStatusSchema.exactOptional(),
    unified_api: UnifiedApiIdSchema.exactOptional(),
  })
  .openapi({
    example: { unified_api: 'file-storage' },
    'x-apideck-schema-id': 'ConnectorsFilter',
    'x-graphql-type-name': 'ConnectorsFilter',
    required: [],
  })
  .openapi('ConnectorsFilter')

const LinksSchema = z
  .object({
    current: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the current page through the API',
        example: 'https://unify.apideck.com/crm/companies',
      }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM',
      }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
      }),
  })
  .openapi({
    description: 'Links to navigate to previous or next pages through the API',
    'x-apideck-schema-id': 'Links',
    required: [],
  })
  .openapi('Links')

const MetaSchema = z
  .object({
    cursors: z
      .object({
        current: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the current page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjI=',
          }),
        next: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the next page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjM=',
          }),
        previous: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the previous page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjE=',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cursors to navigate to previous or next pages through the API',
        required: [],
      }),
    items_on_page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of items returned in the data property of the response',
        example: 50,
      }),
  })
  .openapi({ description: 'Response metadata', 'x-apideck-schema-id': 'Meta', required: [] })
  .openapi('Meta')

const GetApiResourceCoverageResponseSchema = z
  .object({
    data: ApiResourceCoverageSchema,
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetApiResourceCoverageResponse',
  })
  .openapi('GetApiResourceCoverageResponse')

const GetApiResourceResponseSchema = z
  .object({
    data: ApiResourceSchema,
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetApiResourceResponse',
  })
  .openapi('GetApiResourceResponse')

const GetApiResponseSchema = z
  .object({
    data: ApiSchema,
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'data'], 'x-apideck-schema-id': 'GetApiResponse' })
  .openapi('GetApiResponse')

const GetApisResponseSchema = z
  .object({
    data: z.array(ApiSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetApisResponse',
    'x-graphql-type-name': 'ApiList',
  })
  .openapi('GetApisResponse')

const GetConnectorResourceResponseSchema = z
  .object({
    data: ConnectorResourceSchema,
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConnectorResourceResponse',
  })
  .openapi('GetConnectorResourceResponse')

const GetConnectorResponseSchema = z
  .object({
    data: ConnectorSchema,
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConnectorResponse',
  })
  .openapi('GetConnectorResponse')

const GetConnectorsResponseSchema = z
  .object({
    data: z.array(ConnectorSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConnectorsResponse',
    'x-graphql-type-name': 'ConnectorList',
  })
  .openapi('GetConnectorsResponse')

const NotFoundResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: "Could not find widget with id: '123'" }),
        z.object({}).openapi({ example: { not_found: { entity: 'widget', id: '123' } } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Found',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unknown Widget',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#entitynotfounderror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 404 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'EntityNotFoundError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotFound', required: [] })
  .openapi('NotFoundResponse')

const PaymentRequiredResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'You have reached your limit of 2000',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Payment Required',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Request Limit Reached',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestlimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 402 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'PaymentRequired', required: [] })
  .openapi('PaymentRequiredResponse')

const TooManyRequestsResponseSchema = z
  .object({
    detail: z
      .object({ context: z.string().exactOptional(), error: z.looseObject({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)',
        example: 'Too Many Requests',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Connector Rate Limit Error',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#connectorratelimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 429 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'ConnectorRateLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'TooManyRequests', required: [] })
  .openapi('TooManyRequestsResponse')

const UnauthorizedResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Failed to generate valid JWT Session. Verify applicationId is correct',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unauthorized',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unauthorized Request',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 401 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'UnauthorizedError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unauthorized', required: [] })
  .openapi('UnauthorizedResponse')

const UnexpectedErrorResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing Header: x-apideck-consumer-id' }),
        z.object({}).openapi({ example: { missing: [{ 'x-apideck-consumer-id': 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of error returned',
        example: 'RequestHeadersValidationError',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Error', required: [] })
  .openapi('UnexpectedErrorResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const GetApiResourceCoverageResponseResponse = {
  description: 'ApiResources',
  content: { 'application/json': { schema: GetApiResourceCoverageResponseSchema } },
}

const GetApiResourceResponseResponse = {
  description: 'ApiResources',
  content: { 'application/json': { schema: GetApiResourceResponseSchema } },
}

const GetApiResponseResponse = {
  description: 'Apis',
  content: { 'application/json': { schema: GetApiResponseSchema } },
}

const GetApisResponseResponse = {
  description: 'Apis',
  content: { 'application/json': { schema: GetApisResponseSchema } },
}

const GetConnectorDocResponseResponse = {
  description: 'Connectors',
  content: { 'text/markdown': { schema: z.string() } },
}

const GetConnectorResourceResponseResponse = {
  description: 'ConnectorResources',
  content: { 'application/json': { schema: GetConnectorResourceResponseSchema } },
}

const GetConnectorResponseResponse = {
  description: 'Connectors',
  content: { 'application/json': { schema: GetConnectorResponseSchema } },
}

const GetConnectorsResponseResponse = {
  description: 'Connectors',
  content: { 'application/json': { schema: GetConnectorsResponseSchema } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const TooManyRequestsResponseResponse = {
  description: 'Too Many Requests',
  content: { 'application/json': { schema: TooManyRequestsResponseSchema } },
}

const UnauthorizedResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const UnexpectedErrorResponseResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: UnexpectedErrorResponseSchema } },
}

const ApisFilterParamsSchema = ApisFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ApisFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const ApplicationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of your Unify application',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'header',
      name: 'x-apideck-app-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConnectorsFilterParamsSchema = ConnectorsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ConnectorsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const CursorParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.',
      in: 'query',
      name: 'cursor',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const DocIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the Doc',
      in: 'path',
      name: 'doc_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return. Minimum 1, Maximum 200, Default 20',
      in: 'query',
      name: 'limit',
      schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const ResourceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the resource you are acting upon.',
      in: 'path',
      name: 'resource_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const UnifiedApiParamsSchema = UnifiedApiIdSchema.openapi({
  param: {
    description:
      'Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs',
    in: 'query',
    name: 'unified_api',
    required: false,
    schema: { $ref: '#/components/schemas/UnifiedApiId' },
  },
}).exactOptional()

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getConnectorApisRoute = createRoute({
  method: 'get',
  path: '/connector/apis',
  tags: ['APIs'],
  summary: 'List APIs',
  description: 'List APIs',
  operationId: 'apisAll',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: ApisFilterParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetApisResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorApisIdRoute = createRoute({
  method: 'get',
  path: '/connector/apis/{id}',
  tags: ['APIs'],
  summary: 'Get API',
  description: 'Get API',
  operationId: 'apisOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: GetApiResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorApisIdResourcesResourceIdRoute = createRoute({
  method: 'get',
  path: '/connector/apis/{id}/resources/{resource_id}',
  tags: ['API Resources'],
  summary: 'Get API Resource',
  description: 'Get API Resource',
  operationId: 'apiResourcesOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema, resource_id: ResourceIdParamsSchema }),
  },
  responses: {
    200: GetApiResourceResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorApisIdResourcesResourceIdCoverageRoute = createRoute({
  method: 'get',
  path: '/connector/apis/{id}/resources/{resource_id}/coverage',
  tags: ['API Resources'],
  summary: 'Get API Resource Coverage',
  description: 'Get API Resource Coverage',
  operationId: 'apiResourceCoverageOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema, resource_id: ResourceIdParamsSchema }),
  },
  responses: {
    200: GetApiResourceCoverageResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorConnectorsRoute = createRoute({
  method: 'get',
  path: '/connector/connectors',
  tags: ['Connectors'],
  summary: 'List Connectors',
  description: 'List Connectors',
  operationId: 'connectorsAll',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: ConnectorsFilterParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetConnectorsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorConnectorsIdRoute = createRoute({
  method: 'get',
  path: '/connector/connectors/{id}',
  tags: ['Connectors'],
  summary: 'Get Connector',
  description: 'Get Connector',
  operationId: 'connectorsOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
  },
  responses: {
    200: GetConnectorResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorConnectorsIdDocsDocIdRoute = createRoute({
  method: 'get',
  path: '/connector/connectors/{id}/docs/{doc_id}',
  tags: ['Connector Docs'],
  summary: 'Get Connector Doc content',
  description: 'Get Connector Doc content',
  operationId: 'connectorDocsOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema, doc_id: DocIdParamsSchema }),
  },
  responses: {
    200: GetConnectorDocResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getConnectorConnectorsIdResourcesResourceIdRoute = createRoute({
  method: 'get',
  path: '/connector/connectors/{id}/resources/{resource_id}',
  tags: ['Connector Resources'],
  summary: 'Get Connector Resource',
  description: 'Get Connector Resource',
  operationId: 'connectorResourcesOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    params: z.object({ id: IdParamsSchema, resource_id: ResourceIdParamsSchema }),
    query: z.object({ unified_api: UnifiedApiParamsSchema }),
  },
  responses: {
    200: GetConnectorResourceResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})
