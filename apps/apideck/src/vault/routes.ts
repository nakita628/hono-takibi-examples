import { createRoute, z } from '@hono/zod-openapi'

const SimpleFormFieldOptionSchema = z
  .object({
    label: z.string().exactOptional().openapi({ example: 'General Channel' }),
    value: z
      .union([
        z.string().openapi({ example: 'general' }),
        z.int().openapi({ example: 123 }),
        z.number().openapi({ example: 12.5 }),
        z.boolean().openapi({ example: true }),
        z
          .array(z.union([z.string(), z.int(), z.number()]))
          .openapi({ example: ['team', 'general'] }),
      ])
      .exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'SimpleFormFieldOption', required: [] })
  .openapi('SimpleFormFieldOption')

const FormFieldOptionGroupSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: '1234' }),
    label: z.string().exactOptional().openapi({ example: 'General Channel' }),
    options: z.array(SimpleFormFieldOptionSchema).exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'FormFieldOptionGroup', required: [] })
  .openapi('FormFieldOptionGroup')

type FormFieldOptionType =
  | z.infer<typeof SimpleFormFieldOptionSchema>
  | z.infer<typeof FormFieldOptionGroupSchema>

const ApplicationIdSchema = z
  .string()
  .openapi({
    description: 'ID of your Apideck Application',
    example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
  })
  .openapi('ApplicationId')

const AuthTypeSchema = z
  .enum(['oauth2', 'apiKey', 'basic', 'custom', 'none'])
  .openapi({
    description: 'Type of authorization used by the connector',
    example: 'oauth2',
    readOnly: true,
    'x-apideck-enum-id': 'auth_types',
  })
  .openapi('AuthType')

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

const FormFieldOptionSchema: z.ZodType<FormFieldOptionType> = z
  .lazy(() => z.union([SimpleFormFieldOptionSchema, FormFieldOptionGroupSchema]))
  .openapi('FormFieldOption')

const FormFieldSchema = z
  .object({
    allow_custom_values: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list.',
        example: false,
        title: 'Allow custom values',
      }),
    custom_field: z.boolean().exactOptional().openapi({ example: false }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The description of the form field',
        example: 'Slack channel to push notification to',
      }),
    disabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Indicates if the form field is displayed in a “read-only” mode.',
        example: false,
      }),
    hidden: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the form field is not displayed but the value that is being stored on the connection.',
        example: false,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the form field.', example: 'channel' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label of the field', example: 'Channel' }),
    options: z
      .array(FormFieldOptionSchema)
      .exactOptional()
      .openapi({ example: [{ label: 'General Channel', value: 'general' }] }),
    placeholder: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The placeholder for the form field', example: 'Select a channel' }),
    prefix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Prefix to display in front of the form field.',
        example: 'https://',
      }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the form field is required, which means it must be filled in before the form can be submitted',
        example: true,
      }),
    sensitive: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the form field contains sensitive data, which will display the value as a masked input.',
        example: false,
      }),
    suffix: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Suffix to display next to the form field.',
        example: '.shopify.com',
      }),
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
      ])
      .exactOptional()
      .openapi({ example: 'select' }),
  })
  .openapi({ 'x-apideck-schema-id': 'FormField', 'x-graphql-type-name': 'FormField', required: [] })
  .openapi('FormField')

const IntegrationStateSchema = z
  .enum(['disabled', 'needs_configuration', 'configured'])
  .openapi({
    description: 'The current state of the Integration.',
    example: 'configured',
    readOnly: true,
    'x-apideck-enum-id': 'integrations.state',
    'x-apideck-schema-id': 'IntegrationState',
  })
  .openapi('IntegrationState')

const OAuthGrantTypeSchema = z
  .enum(['authorization_code', 'client_credentials', 'password'])
  .openapi({
    description:
      'OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types',
    example: 'authorization_code',
    readOnly: true,
    'x-apideck-enum-id': 'oauth_grant_types',
  })
  .openapi('OAuthGrantType')

const ConnectionStateSchema = z
  .enum(['available', 'callable', 'added', 'authorized', 'invalid'])
  .openapi({
    description: '[Connection state flow](#section/Connection-state)',
    example: 'authorized',
    readOnly: true,
    'x-apideck-enum-id': 'connections.state',
    'x-apideck-schema-id': 'ConnectionState',
  })
  .openapi('ConnectionState')

const WebhookSubscriptionSchema = z
  .strictObject({
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the webhook subscription was created downstream',
        example: '2020-10-01T12:00:00.000Z',
      }),
    downstream_event_types: z
      .array(
        z
          .string()
          .openapi({ description: 'The Downstream Event Type', example: 'contacts.CREATED' }),
      )
      .exactOptional()
      .openapi({ description: 'The list of downstream Events this connection is subscribed to' }),
    downstream_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the downstream service',
        example: '5f5f5f5f5f5f5f5f5f5f5f5f',
      }),
    execute_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL the downstream is sending to when the event is triggered',
        example:
          'https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}',
      }),
    unify_event_types: z
      .array(
        z.string().openapi({ description: 'The Unify Event Type', example: 'crm.contact.created' }),
      )
      .exactOptional()
      .openapi({ description: 'The list of Unify Events this connection is subscribed to' }),
  })
  .openapi({ readOnly: true, 'x-apideck-schema-id': 'WebhookSubscription', required: [] })
  .openapi('WebhookSubscription')

const ConnectionSchema = z
  .object({
    auth_type: AuthTypeSchema.exactOptional(),
    authorize_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.",
        example:
          'https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>',
        readOnly: true,
      }),
    configurable_resources: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['opportunities', 'companies', 'contacts', 'leads'], readOnly: true }),
    configuration: z
      .array(
        z
          .object({
            defaults: z
              .array(
                z
                  .object({
                    id: z.string().exactOptional().openapi({ example: 'ProductInterest' }),
                    options: z.array(FormFieldOptionSchema).exactOptional(),
                    target: z
                      .enum(['custom_fields', 'resource'])
                      .exactOptional()
                      .openapi({
                        example: 'custom_fields',
                        readOnly: true,
                        'x-apideck-enum-id': 'connections.configuration.defaults.target',
                      }),
                    value: z
                      .union([
                        z.string().openapi({ example: 'GC5000 series' }),
                        z.int().openapi({ example: 10 }),
                        z.number().openapi({ example: 10.5 }),
                        z.boolean().openapi({ example: true }),
                        z.array(
                          z.union([
                            z.string().openapi({ example: 'GC6000 series' }),
                            z.int().openapi({ example: 10 }),
                            z.number().openapi({ example: 10.5 }),
                          ]),
                        ),
                      ])
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            resource: z.string().exactOptional().openapi({ example: 'leads' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    created_at: z.number().exactOptional().openapi({ example: 1615563533390, readOnly: true }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.',
        example: true,
      }),
    form_fields: z
      .array(FormFieldSchema)
      .exactOptional()
      .openapi({
        description: 'The settings that are wanted to create a connection.',
        example: [
          {
            custom_field: false,
            disabled: false,
            id: 'instance_url',
            label: 'Instance url',
            mask: false,
            placeholder: '',
            required: true,
            sensitive: false,
            type: 'text',
            value: 'https://eu28.salesforce.com',
          },
          {
            custom_field: false,
            disabled: false,
            id: 'api_key',
            label: 'API Key',
            mask: false,
            placeholder: '',
            required: true,
            sensitive: true,
            type: 'text',
            value: '123455677',
          },
        ],
        readOnly: true,
      }),
    has_guide: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).',
        example: true,
        readOnly: true,
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A visual icon of the connection, that will be shown in the Vault',
        example:
          'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the connection.',
        example: 'crm+salesforce',
        readOnly: true,
      }),
    integration_state: IntegrationStateSchema.exactOptional(),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The logo of the connection, that will be shown in the Vault',
        example:
          'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
        readOnly: true,
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attach your own consumer specific metadata',
        example: {
          account: { id: 'c01458a5-7276-41ce-bc19-639906b0450a', name: 'My Company' },
          plan: 'enterprise',
        },
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the connection',
        example: 'Salesforce',
        readOnly: true,
      }),
    oauth_grant_type: OAuthGrantTypeSchema.exactOptional(),
    resource_schema_support: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['leads'], readOnly: true }),
    resource_settings_support: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['leads'], readOnly: true }),
    revoke_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.",
        example: 'https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>',
        readOnly: true,
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the service this connection belongs to.',
        example: 'salesforce',
        readOnly: true,
      }),
    settings: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Connection settings. Values will persist to `form_fields` with corresponding id',
        example: { api_key: '12345xxxxxx', instance_url: 'https://eu28.salesforce.com' },
      }),
    settings_required_for_authorization: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of settings that are required to be configured on integration before authorization can occur',
        example: ['client_id', 'client_secret'],
        readOnly: true,
      }),
    state: ConnectionStateSchema.exactOptional(),
    status: z
      .enum(['live', 'upcoming', 'requested'])
      .exactOptional()
      .openapi({
        description: 'Status of the connection.',
        readOnly: true,
        'x-apideck-enum-id': 'connections.status',
      }),
    subscriptions: z.array(WebhookSubscriptionSchema).exactOptional().openapi({ readOnly: true }),
    tag_line: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
        readOnly: true,
      }),
    unified_api: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unified API category where the connection belongs to.',
        example: 'crm',
        readOnly: true,
      }),
    updated_at: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ example: 1616662325753, readOnly: true }),
    validation_support: z.boolean().exactOptional().openapi({ readOnly: true }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The website URL of the connection',
        example: 'https://www.salesforce.com',
        readOnly: true,
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Connection', required: [] })
  .openapi('Connection')

const ConsumerConnectionSchema = z
  .object({
    auth_type: AuthTypeSchema.exactOptional(),
    consumer_id: z.string().exactOptional().openapi({ example: 'test_user_id' }),
    created_at: z.string().exactOptional().openapi({ example: '2020-09-19T12:18:37.071Z' }),
    enabled: z.boolean().exactOptional().openapi({ example: true }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png',
      }),
    id: z.string().exactOptional().openapi({ example: '1111+test_user_id', readOnly: true }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg',
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attach your own consumer specific metadata',
        example: {
          account: { id: 'c01458a5-7276-41ce-bc19-639906b0450a', name: 'My Company' },
          plan: 'enterprise',
        },
      }),
    name: z.string().exactOptional().openapi({ example: 'Salesforce' }),
    service_id: z.string().exactOptional().openapi({ example: 'teamleader' }),
    settings: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Connection settings. Values will persist to `form_fields` with corresponding id',
        example: { instance_url: 'https://eu28.salesforce.com' },
      }),
    state: z
      .enum(['available', 'callable', 'added', 'configured', 'authorized'])
      .exactOptional()
      .openapi({ example: 'authorized', 'x-apideck-enum-id': 'consumer.connections.state' }),
    tag_line: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.',
        readOnly: true,
      }),
    unified_api: z.string().exactOptional().openapi({ example: 'crm' }),
    updated_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2020-09-19T12:18:37.071Z' }),
    website: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://www.salesforce.com', readOnly: true }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConsumerConnection', required: [] })
  .openapi('ConsumerConnection')

const VaultEventTypeSchema = z
  .enum([
    '*',
    'vault.connection.created',
    'vault.connection.updated',
    'vault.connection.disabled',
    'vault.connection.deleted',
    'vault.connection.callable',
    'vault.connection.token_refresh.failed',
  ])
  .openapi({ example: 'vault.connection.created', 'x-apideck-enum-id': 'vault.events' })
  .openapi('VaultEventType')

const ConnectionEventSchema = z
  .object({
    entity: ConsumerConnectionSchema.exactOptional(),
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The service provider's ID of the entity that triggered this event",
        example: '123456ASDF',
      }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type entity that triggered this event', example: 'Connection' }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique reference to this request event',
        example: '9755c355-56c3-4a2f-a2da-86ff4411fccb',
      }),
    event_type: VaultEventTypeSchema.exactOptional(),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current count this request event has been attempted',
        example: 2,
      }),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime for when the original event occurred',
        example: '2021-10-01T03:14:55.419Z',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service provider identifier', example: 'close' }),
  })
  .openapi({ 'x-sdk-exclude': true, required: [] })
  .openapi('ConnectionEvent')

const ConnectionImportDataSchema = z
  .object({
    credentials: z
      .strictObject({
        access_token: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Access token',
            example: '1234567890abcdefghijklmnopqrstuvwxyz',
          }),
        expires_in: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The number of seconds until the token expires. If omitted the token will be queued for refresh.',
            example: 3600,
          }),
        issued_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The datetime at which the token was issued. If omitted the token will be queued for refresh.',
            example: '2020-01-01T00:00:00Z',
          }),
        refresh_token: z
          .string()
          .openapi({
            description: 'The refresh token can be used to obtain a new access token.',
            example: '1234567890abcdefghijklmnopqrstuvwxyz',
          }),
      })
      .exactOptional()
      .openapi({
        example: {
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          refresh_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ',
        },
        required: ['refresh_token'],
      }),
    metadata: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attach your own consumer specific metadata',
        example: {
          account: { id: 'c01458a5-7276-41ce-bc19-639906b0450a', name: 'My Company' },
          plan: 'enterprise',
        },
      }),
    settings: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Connection settings. Values will persist to `form_fields` with corresponding id',
        example: { instance_url: 'https://eu28.salesforce.com' },
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'ConnectionImportData', required: [] })
  .openapi('ConnectionImportData')

const ConnectionMetadataSchema = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ 'x-apideck-schema-id': 'ConnectionMetadata', required: [] })
  .openapi('ConnectionMetadata')

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

const ConnectionWebhookSchema = z
  .strictObject({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the object was created.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Created at (timestamp)',
      }),
    delivery_url: z
      .url()
      .regex(/^(https?):\/\//)
      .openapi({
        description: 'The delivery url of the webhook endpoint.',
        example: 'https://example.com/my/webhook/endpoint',
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
    disabled_reason: z
      .enum(['none', 'retry_limit', 'usage_limit'])
      .exactOptional()
      .openapi({
        description:
          "Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.",
        example: 'retry_limit',
        'x-apideck-enum-id': 'webhook.disabled_reasons',
      }),
    events: z
      .array(
        z
          .enum([
            '*',
            'crm.activity.created',
            'crm.activity.updated',
            'crm.activity.deleted',
            'crm.company.created',
            'crm.company.updated',
            'crm.company.deleted',
            'crm.contact.created',
            'crm.contact.updated',
            'crm.contact.deleted',
            'crm.lead.created',
            'crm.lead.updated',
            'crm.lead.deleted',
            'crm.note.created',
            'crm.notes.updated',
            'crm.notes.deleted',
            'crm.opportunity.created',
            'crm.opportunity.updated',
            'crm.opportunity.deleted',
            'lead.lead.created',
            'lead.lead.updated',
            'lead.lead.deleted',
            'vault.connection.created',
            'vault.connection.updated',
            'vault.connection.disabled',
            'vault.connection.deleted',
            'vault.connection.callable',
            'vault.connection.token_refresh.failed',
            'ats.job.created',
            'ats.job.updated',
            'ats.job.deleted',
            'ats.applicant.created',
            'ats.applicant.updated',
            'ats.applicant.deleted',
            'accounting.customer.created',
            'accounting.customer.updated',
            'accounting.customer.deleted',
            'accounting.invoice.created',
            'accounting.invoice.updated',
            'accounting.invoice.deleted',
            'accounting.invoice_item.created',
            'accounting.invoice_item.updated',
            'accounting.invoice_item.deleted',
            'accounting.ledger_account.created',
            'accounting.ledger_account.updated',
            'accounting.ledger_account.deleted',
            'accounting.tax_rate.created',
            'accounting.tax_rate.updated',
            'accounting.tax_rate.deleted',
            'accounting.bill.created',
            'accounting.bill.updated',
            'accounting.bill.deleted',
            'accounting.payment.created',
            'accounting.payment.updated',
            'accounting.payment.deleted',
            'accounting.supplier.created',
            'accounting.supplier.updated',
            'accounting.supplier.deleted',
            'pos.order.created',
            'pos.order.updated',
            'pos.order.deleted',
            'pos.product.created',
            'pos.product.updated',
            'pos.product.deleted',
            'pos.payment.created',
            'pos.payment.updated',
            'pos.payment.deleted',
            'pos.merchant.created',
            'pos.merchant.updated',
            'pos.merchant.deleted',
            'pos.location.created',
            'pos.location.updated',
            'pos.location.deleted',
            'pos.item.created',
            'pos.item.updated',
            'pos.item.deleted',
            'pos.modifier.created',
            'pos.modifier.updated',
            'pos.modifier.deleted',
            'pos.modifier-group.created',
            'pos.modifier-group.updated',
            'pos.modifier-group.deleted',
            'hris.employee.created',
            'hris.employee.updated',
            'hris.employee.deleted',
            'hris.company.created',
            'hris.company.updated',
            'hris.company.deleted',
            'file-storage.file.created',
            'file-storage.file.updated',
            'file-storage.file.deleted',
            'issue-tracking.ticket.created',
            'issue-tracking.ticket.updated',
            'issue-tracking.ticket.deleted',
          ])
          .openapi({ example: 'crm.company.created', 'x-apideck-enum-id': 'webhooks.event_type' }),
      )
      .openapi({
        description:
          'The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.',
        example: ['vault.connection.created', 'vault.connection.updated'],
        title: 'Subscribed events',
      }),
    execute_base_url: z
      .url()
      .regex(/^(https?):\/\//)
      .openapi({
        description:
          'The Unify Base URL events from connectors will be sent to after service id is appended.',
        example: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
        readOnly: true,
      }),
    id: z.string().exactOptional().openapi({ example: '1234', readOnly: true }),
    status: z
      .enum(['enabled', 'disabled'])
      .openapi({
        description: 'The status of the webhook.',
        example: 'enabled',
        'x-apideck-enum-id': 'webhooks.status',
        'x-graphql-type-name': 'WebhookStatus',
      }),
    unified_api: UnifiedApiIdSchema,
    updated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the object was last updated.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Updated at (timestamp)',
      }),
  })
  .openapi({
    required: ['delivery_url', 'status', 'events', 'unified_api', 'execute_base_url'],
    'x-apideck-schema-id': 'Webhook',
  })
  .openapi('ConnectionWebhook')

const ConsumerIdSchema = z
  .string()
  .openapi({
    description:
      "Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.",
    example: 'test_consumer_id',
  })
  .openapi('ConsumerId')

const ConsumerMetadataSchema = z
  .object({
    account_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the account as shown in the sidebar.',
        example: 'SpaceX',
        title: 'Account name',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the user as shown in the sidebar.',
        example: 'elon@musk.com',
        title: 'Email',
      }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The avatar of the user in the sidebar. Must be a valid URL',
        example: 'https://www.spacex.com/static/images/share.jpg',
        title: 'Image',
      }),
    user_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the user as shown in the sidebar.',
        example: 'Elon Musk',
        title: 'User name',
      }),
  })
  .openapi({
    description:
      'The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.',
    'x-apideck-schema-id': 'ConsumerMetadata',
    required: [],
  })
  .openapi('ConsumerMetadata')

const RequestCountAllocationSchema = z
  .object({
    proxy: z.number().exactOptional().openapi({ example: 10 }),
    unify: z.number().exactOptional().openapi({ example: 100 }),
    vault: z.number().exactOptional().openapi({ example: 21 }),
  })
  .openapi({ readOnly: true, 'x-apideck-schema-id': 'RequestCountAllocation', required: [] })
  .openapi('RequestCountAllocation')

const ConsumerSchema = z
  .object({
    aggregated_request_count: z.number().exactOptional().openapi({ example: 101, readOnly: true }),
    application_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of your Apideck Application',
        example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
        readOnly: true,
      }),
    connections: z.array(ConsumerConnectionSchema).exactOptional().openapi({ readOnly: true }),
    consumer_id: ConsumerIdSchema,
    created: z
      .string()
      .exactOptional()
      .openapi({ example: '2021-05-07T12:55:42.242Z', readOnly: true }),
    metadata: ConsumerMetadataSchema.exactOptional(),
    modified: z
      .string()
      .exactOptional()
      .openapi({ example: '2021-05-07T12:55:42.242Z', readOnly: true }),
    request_count_updated: z
      .string()
      .exactOptional()
      .openapi({ example: '2021-05-07T12:55:42.242Z', readOnly: true }),
    request_counts: RequestCountAllocationSchema.exactOptional(),
    services: z
      .array(z.string().openapi({ example: 'salesforce' }))
      .exactOptional()
      .openapi({ example: ['salesforce', 'stripe'], readOnly: true }),
  })
  .openapi({ required: ['consumer_id'], 'x-apideck-schema-id': 'Consumer' })
  .openapi('Consumer')

const ConsumerRequestCountsInDateRangeResponseSchema = z
  .object({
    data: z
      .object({
        aggregated_request_count: z.number().exactOptional().openapi({ example: 40 }),
        application_id: z.string().exactOptional().openapi({ example: '1111' }),
        consumer_id: z.string().exactOptional().openapi({ example: 'test_user_id' }),
        end_datetime: z.string().exactOptional().openapi({ example: '2021-05-10T12:00:00.000Z' }),
        request_counts: RequestCountAllocationSchema.exactOptional(),
        start_datetime: z.string().exactOptional().openapi({ example: '2021-05-01T12:00:00.000Z' }),
      })
      .openapi({ 'x-apideck-schema-id': 'ConsumerRequestCountsInDateRange', required: [] }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'ConsumerRequestCountsInDateRangeResponse',
  })
  .openapi('ConsumerRequestCountsInDateRangeResponse')

const CreateConnectionResponseSchema = z
  .object({
    data: ConnectionSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 201 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'CreateConnectionResponse',
  })
  .openapi('CreateConnectionResponse')

const CreateConsumerResponseSchema = z
  .object({
    data: ConsumerSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConsumerResponse',
  })
  .openapi('CreateConsumerResponse')

const CreateSessionResponseSchema = z
  .strictObject({
    data: z
      .strictObject({
        session_token: z
          .string()
          .openapi({
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj',
            readOnly: true,
          }),
        session_uri: z
          .string()
          .openapi({
            example:
              'http://vault.apideck.com/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj',
            readOnly: true,
          }),
      })
      .openapi({ required: ['session_uri', 'session_token'] }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'CreateSessionResponse',
  })
  .openapi('CreateSessionResponse')

const DeleteConsumerResponseSchema = z
  .object({
    data: z.object({ consumer_id: ConsumerIdSchema.exactOptional() }).openapi({ required: [] }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConsumerResponse',
  })
  .openapi('DeleteConsumerResponse')

const GetConnectionResponseSchema = z
  .object({
    data: ConnectionSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConnectionResponse',
  })
  .openapi('GetConnectionResponse')

const GetConnectionsResponseSchema = z
  .object({
    data: z.array(ConnectionSchema),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConnectionsResponse',
  })
  .openapi('GetConnectionsResponse')

const GetConsumerResponseSchema = z
  .object({
    data: ConsumerSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConsumerResponse',
  })
  .openapi('GetConsumerResponse')

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

const GetConsumersResponseSchema = z
  .object({
    data: z.array(
      z
        .object({
          aggregated_request_count: z.number().exactOptional().openapi({ example: 101 }),
          application_id: z.string().exactOptional().openapi({ example: '1111' }),
          consumer_id: z.string().exactOptional().openapi({ example: 'test_consumer_id' }),
          created: z.string().exactOptional().openapi({ example: '2021-05-07T12:55:42.242Z' }),
          metadata: ConsumerMetadataSchema.exactOptional(),
          modified: z.string().exactOptional().openapi({ example: '2021-05-07T12:55:42.242Z' }),
          request_count_updated: z
            .string()
            .exactOptional()
            .openapi({ example: '2021-05-07T12:55:42.242Z' }),
          request_counts: RequestCountAllocationSchema.exactOptional(),
          services: z
            .array(z.string().openapi({ example: 'salesforce' }))
            .exactOptional()
            .openapi({ example: ['salesforce', 'stripe'] }),
        })
        .openapi({ required: [] }),
    ),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConsumersResponse',
  })
  .openapi('GetConsumersResponse')

const LogSchema = z
  .strictObject({
    api_style: z
      .string()
      .openapi({
        description: 'Indicates if the request was made via REST or Graphql endpoint.',
        example: 'REST',
      }),
    base_url: z
      .string()
      .openapi({
        description: 'The Apideck base URL the request was made to.',
        example: 'unify.apideck.com',
      }),
    child_request: z
      .boolean()
      .openapi({
        description: 'Indicates whether or not this is a child or parent request.',
        example: false,
      }),
    consumer_id: z
      .string()
      .openapi({
        description: 'The consumer Id associated with the request.',
        example: 'test-consumer',
      }),
    duration: z
      .number()
      .openapi({
        description:
          'The entire execution time in milliseconds it took to call the Apideck service provider.',
        example: 2220.379304,
      }),
    error_message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'If error occurred, this is brief explanation',
        example: 'Refresh token is invalid',
      }),
    execution: z
      .int()
      .openapi({
        description: 'The entire execution time in milliseconds it took to make the request.',
        example: 2248,
      }),
    has_children: z
      .boolean()
      .openapi({
        description:
          'When request is a parent request, this indicates if there are child requests associated.',
        example: false,
      }),
    http_method: z.string().openapi({ description: 'HTTP Method of request.', example: 'GET' }),
    id: z
      .string()
      .openapi({
        description: 'UUID acting as Request Identifier.',
        example: '0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f',
      }),
    latency: z
      .number()
      .openapi({
        description: 'Latency added by making this request via Unified Api.',
        example: 27.620695999999953,
      }),
    operation: z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The OpenApi Operation Id associated with the request',
            example: 'connectionsAll',
          }),
        name: z
          .string()
          .openapi({
            description: 'The OpenApi Operation name associated with the request',
            example: 'Get All Connections',
          }),
      })
      .openapi({
        description: 'The request as defined in OpenApi Spec.',
        required: ['id', 'name'],
      }),
    parent_id: z
      .string()
      .nullable()
      .openapi({
        description: "When request is a child request, this UUID indicates it's parent request.",
        example: '0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f',
      }),
    path: z
      .string()
      .openapi({
        description: 'The path component of the URI the request was made to.',
        example: '/vault/connections',
      }),
    sandbox: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the request was made using Apidecks sandbox credentials or not.',
        example: false,
      }),
    service: z
      .strictObject({
        id: z
          .string()
          .openapi({ description: 'Apideck service provider id.', example: 'apideck-vault' }),
        name: z
          .string()
          .openapi({ description: 'Apideck service provider name.', example: 'Apideck Vault' }),
      })
      .openapi({
        description: 'Apideck service provider associated with request.',
        required: ['id', 'name'],
      }),
    source_ip: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The IP address of the source of the request.',
        example: '94.227.131.238',
      }),
    status_code: z
      .int()
      .openapi({ description: 'HTTP Status code that was returned.', example: 200 }),
    success: z
      .boolean()
      .openapi({ description: 'Whether or not the request was successful.', example: true }),
    timestamp: z
      .string()
      .openapi({
        description: 'ISO Date and time when the request was made.',
        example: '2021-07-12T14:26:17.420Z',
      }),
    unified_api: z
      .enum([
        'crm',
        'lead',
        'proxy',
        'vault',
        'accounting',
        'hris',
        'ats',
        'ecommerce',
        'issue-tracking',
        'pos',
        'file-storage',
        'sms',
      ])
      .openapi({
        description: 'Which Unified Api request was made to.',
        example: 'vault',
        'x-apideck-enum-id': 'logs.unified_api',
      }),
  })
  .openapi({
    required: [
      'id',
      'parent_id',
      'api_style',
      'base_url',
      'child_request',
      'consumer_id',
      'duration',
      'execution',
      'has_children',
      'http_method',
      'latency',
      'operation',
      'path',
      'sandbox',
      'service',
      'status_code',
      'success',
      'timestamp',
      'unified_api',
    ],
    'x-apideck-schema-id': 'Log',
  })
  .openapi('Log')

const GetLogsResponseSchema = z
  .object({
    data: z.array(LogSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetLogsResponse',
    'x-graphql-type-name': 'LogList',
  })
  .openapi('GetLogsResponse')

const LogsFilterSchema = z
  .object({
    connector_id: z.string().nullable().exactOptional().openapi({ example: 'crm+salesforce' }),
    exclude_unified_apis: z.string().nullable().exactOptional().openapi({ example: 'vault,proxy' }),
    status_code: z.number().nullable().exactOptional().openapi({ example: 201 }),
  })
  .openapi({
    'x-apideck-schema-id': 'LogsFilter',
    'x-graphql-type-name': 'LogsFilter',
    required: [],
  })
  .openapi('LogsFilter')

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

const NotImplementedResponseSchema = z
  .object({
    detail: z
      .union([
        z
          .string()
          .openapi({
            example:
              "Failed to retrieve Widget tokenUrl from 'components.securitySchemes.OAuth2.flows'",
          }),
        z.object({}),
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
        example: 'Not Implemented',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unmapped Attribute',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#mappingerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 501 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'MappingError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotImplemented', required: [] })
  .openapi('NotImplementedResponse')

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

const ProxyRequestSchema = z
  .object({})
  .openapi({
    example: {
      account_sid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      api_version: '2010-04-01',
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      date_created: 'Thu, 30 Jul 2015 20:12:31 +0000',
      date_sent: 'Thu, 30 Jul 2015 20:12:33 +0000',
      date_updated: 'Thu, 30 Jul 2015 20:12:33 +0000',
      direction: 'outbound-api',
      from: '+15017122661',
      messaging_service_sid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      num_media: '0',
      num_segments: '1',
      sid: 'SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      status: 'sent',
      subresource_uris: {
        media:
          '/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json',
      },
      to: '+15558675310',
      uri: '/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json',
    },
    'x-apideck-schema-id': 'ProxyRequest',
  })
  .openapi('ProxyRequest')

const SessionSchema = z
  .strictObject({
    consumer_metadata: ConsumerMetadataSchema.exactOptional(),
    custom_consumer_settings: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Custom consumer settings that are passed as part of the session.',
        example: {
          feature_flag_1: true,
          tax_rates: [
            { id: '6', label: '6%' },
            { id: '21', label: '21%' },
          ],
        },
        title: 'Custom consumer settings',
      }),
    redirect_uri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL to redirect the user to after the session has been configured.',
        example: 'https://mysaas.com/dashboard',
        title: 'Redirect URI',
      }),
    settings: z
      .strictObject({
        allow_actions: z
          .array(z.enum(['delete', 'disconnect', 'reauthorize', 'disable']))
          .exactOptional()
          .openapi({
            description:
              'Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.\nAvailable actions are: `delete`, `disconnect`, `reauthorize` and `disable`.\nEmpty array will hide all actions. By default all actions are visible.',
            title: 'Allow actions',
          }),
        auto_redirect: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`.',
            title: 'Auto-redirect',
          }),
        hide_guides: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`.',
            title: 'Hide guides',
          }),
        hide_resource_settings: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user.',
            title: 'Hide resource settings',
          }),
        isolation_mode: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items.',
            title: 'Isolation mode',
          }),
        sandbox_mode: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment.',
            title: 'Sandbox mode',
          }),
        session_length: z
          .string()
          .default('1h')
          .exactOptional()
          .openapi({
            description: 'The duration of time the session is valid for (maximum 1 week).',
            example: '30m',
            title: 'Session Length',
          }),
        show_logs: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              'Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`.',
            title: 'Show logs',
          }),
        show_sidebar: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description:
              'Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`.',
            title: 'Show sidebar',
          }),
        show_suggestions: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`.',
            title: 'Show suggestions',
          }),
        unified_apis: z
          .array(UnifiedApiIdSchema)
          .exactOptional()
          .openapi({
            description:
              'Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Settings to change the way the Vault is displayed.',
        'x-graphql-type-name': 'SessionSettings',
        required: [],
      }),
    theme: z
      .object({
        favicon: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL to the favicon to use for Vault.',
            example: 'https://res.cloudinary.com/apideck/icons/intercom',
            title: 'Favicon',
          }),
        logo: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL to the logo to use for Vault.',
            example: 'https://res.cloudinary.com/apideck/icons/intercom',
            title: 'Logo',
          }),
        primary_color: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The primary color to use for Vault.',
            example: '#286efa',
            title: 'Primary color',
          }),
        privacy_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL to the privacy policy that will be shown in the sidebar.',
            example: 'https://compliance.apideck.com/privacy-policy',
            title: 'Privacy URL',
          }),
        sidepanel_background_color: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The background color to use for the sidebar.',
            example: '#286efa',
            title: 'Sidebar background color',
          }),
        sidepanel_text_color: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The text color to use for the sidebar.',
            example: '#FFFFFF',
            title: 'Sidebar text color',
          }),
        terms_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL to the terms and conditions that will be shown in the sidebar.',
            example: 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e',
            title: 'Terms URL',
          }),
        vault_name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name that will be shown in the sidebar.',
            example: 'Intercom',
            title: 'Vault name',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Theming options to change the look and feel of Vault.',
        required: [],
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Session', required: [] })
  .openapi('Session')

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

const UnprocessableResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Unprocessable request, please verify your request headers and body.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unprocessable Entity',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid State',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#invalidstateerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 422 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'InvalidStateError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unprocessable', required: [] })
  .openapi('UnprocessableResponse')

const UpdateConnectionResponseSchema = z
  .object({
    data: ConnectionSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'UpdateConnectionResponse',
  })
  .openapi('UpdateConnectionResponse')

const UpdateConsumerRequestSchema = z
  .strictObject({ metadata: ConsumerMetadataSchema.exactOptional() })
  .openapi({ 'x-apideck-schema-id': 'UpdateConsumerRequest', required: [] })
  .openapi('UpdateConsumerRequest')

const UpdateConsumerResponseSchema = z
  .object({
    data: ConsumerSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetConsumerResponse',
  })
  .openapi('UpdateConsumerResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const ConsumerRequestCountsInDateRangeResponseResponse = {
  description: 'Consumers Request Counts within Date Range',
  content: { 'application/json': { schema: ConsumerRequestCountsInDateRangeResponseSchema } },
}

const CreateConnectionResponseResponse = {
  description: 'Connection created',
  content: { 'application/json': { schema: CreateConnectionResponseSchema } },
}

const CreateConsumerResponseResponse = {
  description: 'Consumer created',
  content: { 'application/json': { schema: CreateConsumerResponseSchema } },
}

const CreateSessionResponseResponse = {
  description: 'Session created',
  content: { 'application/json': { schema: CreateSessionResponseSchema } },
}

const CreatedResponse = {
  description: 'Resource created',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const DeleteConsumerResponseResponse = {
  description: 'Consumer deleted',
  content: { 'application/json': { schema: DeleteConsumerResponseSchema } },
}

const DeletedResponse = {
  description: 'Resource successfully deleted',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const GetConnectionResponseResponse = {
  description: 'Connection',
  content: { 'application/json': { schema: GetConnectionResponseSchema } },
}

const GetConnectionsResponseResponse = {
  description: 'Connections',
  content: { 'application/json': { schema: GetConnectionsResponseSchema } },
}

const GetConsumerResponseResponse = {
  description: 'Consumer',
  content: { 'application/json': { schema: GetConsumerResponseSchema } },
}

const GetConsumersResponseResponse = {
  description: 'Consumers',
  content: { 'application/json': { schema: GetConsumersResponseSchema } },
}

const GetLogsResponseResponse = {
  description: 'Logs',
  content: { 'application/json': { schema: GetLogsResponseSchema } },
}

const NoContentResponse = {
  description: 'No content',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const OkResponse = {
  description: 'Ok',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const ProxyErrorResponse = {
  description: 'Proxy error',
  content: { 'application/json': { schema: z.any() } },
  headers: z.object({
    'x-apideck-downstream-error': {
      schema: z
        .boolean()
        .exactOptional()
        .openapi({
          param: { required: false },
          description: 'Indicates if the error returned in the body is from the downstream',
        }),
    },
  }),
}

const UnauthorizedResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const UnexpectedErrorResponseResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: UnexpectedErrorResponseSchema } },
}

const UnprocessableResponseResponse = {
  description: 'Unprocessable',
  content: { 'application/json': { schema: UnprocessableResponseSchema } },
}

const UpdateConnectionResponseResponse = {
  description: 'Connection updated',
  content: { 'application/json': { schema: UpdateConnectionResponseSchema } },
}

const UpdateConsumerResponseResponse = {
  description: 'Consumer updated',
  content: { 'application/json': { schema: UpdateConsumerResponseSchema } },
}

const UpdatedResponse = {
  description: 'Resource updated',
  content: { 'application/json': { schema: z.any(), example: {} } },
}

const ApiParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Scope results to Unified API',
      example: 'crm',
      in: 'query',
      name: 'api',
      schema: { type: 'string' },
      required: false,
    },
  })

const ApplicationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Application ID of the resource to return',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'path',
      name: 'application_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CodeParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'An authorization code from the connector which Apideck Vault will later exchange for an access token.',
      example: 'g0ZGZmNjVmOWI',
      in: 'query',
      name: 'code',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConfiguredParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Scopes results to connections that have been configured or not',
      example: true,
      in: 'query',
      name: 'configured',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const ConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer to return',
      example: 'test_user_id',
      in: 'path',
      name: 'consumer_id',
      required: true,
      schema: { type: 'string' },
    },
  })

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

const EndDatetimeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Scopes results to requests that happened before datetime',
      example: '2021-05-30T12:00:00.000Z',
      in: 'query',
      name: 'end_datetime',
      required: true,
      schema: { type: 'string' },
    },
  })

const FilterParamsSchema = z
  .object({
    connector_id: z.string().nullable().exactOptional().openapi({ example: 'crm+salesforce' }),
    exclude_unified_apis: z.string().nullable().exactOptional().openapi({ example: 'vault,proxy' }),
    status_code: z
      .preprocess(
        (val) => (val === 'null' ? null : val),
        z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.number(),
          )
          .nullable(),
      )
      .exactOptional()
      .openapi({ example: 201 }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter results',
      explode: true,
      in: 'query',
      name: 'filter',
      schema: {
        properties: {
          connector_id: { example: 'crm+salesforce', nullable: true, type: 'string' },
          exclude_unified_apis: { example: 'vault,proxy', nullable: true, type: 'string' },
          status_code: { example: 201, nullable: true, type: 'number' },
        },
        type: 'object',
        'x-apideck-schema-id': 'LogsFilter',
        'x-graphql-type-name': 'LogsFilter',
      },
      style: 'deepObject',
      required: false,
    },
    'x-apideck-schema-id': 'LogsFilter',
    'x-graphql-type-name': 'LogsFilter',
    required: [],
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

const RawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Include raw response. Mostly used for debugging purposes',
      in: 'query',
      name: 'raw',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const RedirectUriParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'URL to redirect back to after authorization. When left empty the default configured redirect uri will be used.',
      example: 'http://example.com/integrations',
      in: 'query',
      name: 'redirect_uri',
      required: true,
      schema: { type: 'string' },
    },
  })

const ResourceParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Resource Name',
      example: 'leads',
      in: 'path',
      name: 'resource',
      required: true,
      schema: { type: 'string' },
    },
  })

const ScopeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(' ') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        "One or more OAuth scopes to request from the connector. OAuth scopes control the set of resources and operations that are allowed after authorization. Refer to the connector's documentation for the available scopes.",
      example: ['openid', 'leads:write', 'profile:read'],
      explode: false,
      in: 'query',
      name: 'scope',
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'spaceDelimited',
      required: false,
    },
  })

const ServiceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Service ID of the resource to return',
      example: 'pipedrive',
      in: 'path',
      name: 'service_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const StartDatetimeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Scopes results to requests that happened after datetime',
      example: '2021-05-01T12:00:00.000Z',
      in: 'query',
      name: 'start_datetime',
      required: true,
      schema: { type: 'string' },
    },
  })

const StateParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'An opaque value the applications adds to the initial request that the authorization server includes when redirecting the back to the application. This value must be used by the application to prevent CSRF attacks.',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsInVuaWZpZWRfYXBpIjoiZGVmYXVsdCIsInNlcnZpY2VfaWQiOiJ0ZWFtbGVhZGVyIiwiYXBwbGljYXRpb25faWQiOiIxMTExIiwiaWF0IjoxNjIyMTI2Nzg3fQ.97_pn1UAXc7mctXBdr15czUNO1jjdQ9sJUOIE_Myzbk',
      in: 'query',
      name: 'state',
      required: true,
      schema: { type: 'string' },
    },
  })

const UnifiedApiParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unified API',
      example: 'crm',
      in: 'path',
      name: 'unified_api',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckAppIdParamsSchema = z
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

const XApideckConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer which you want to get or push data from',
      in: 'header',
      name: 'x-apideck-consumer-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamAuthorizationParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Downstream authorization header. This will skip the Vault token injection.',
      example: 'Bearer XXXXXXXXXXXXXXXXX',
      in: 'header',
      name: 'x-apideck-downstream-authorization',
      required: false,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamMethodParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Downstream method. If not provided the upstream method will be inherited,',
      example: 'POST',
      in: 'header',
      name: 'x-apideck-downstream-method',
      required: false,
      schema: { type: 'string' },
    },
  })

const XApideckDownstreamUrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Downstream URL',
      example: 'https://api.twilio.com',
      in: 'header',
      name: 'x-apideck-downstream-url',
      required: true,
      schema: { type: 'string' },
    },
  })

const XApideckServiceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.',
      in: 'header',
      name: 'x-apideck-service-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const ApplicationIdSecurityScheme = {
  description: 'The ID of your Unify application',
  in: 'header',
  name: 'x-apideck-app-id',
  type: 'apiKey',
}

export const getVaultAuthorizeServiceIdApplicationIdRoute = createRoute({
  method: 'get',
  path: '/vault/authorize/{service_id}/{application_id}',
  tags: ['Connections'],
  summary: 'Authorize',
  description:
    "__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__\n\nUse this endpoint to authenticate a user with a connector. It will return a 301 redirect to the downstream connector endpoints.\n\nAuth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.\n\nVault handles the complete Authorization Code Grant Type Flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.\n",
  operationId: 'connectionsAuthorize',
  request: {
    params: z.object({
      service_id: ServiceIdParamsSchema,
      application_id: ApplicationIdParamsSchema,
    }),
    query: z.object({
      state: StateParamsSchema,
      redirect_uri: RedirectUriParamsSchema,
      scope: ScopeParamsSchema,
    }),
  },
  responses: {
    301: { description: 'redirect' },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [],
})

export const getVaultCallbackRoute = createRoute({
  method: 'get',
  path: '/vault/callback',
  tags: ['Connections'],
  summary: 'Callback',
  description:
    'This endpoint gets called after the triggering the authorize flow.\n\nCallback links need a state and code parameter to verify the validity of the request.\n',
  operationId: 'connectionsCallback',
  request: { query: z.object({ state: StateParamsSchema, code: CodeParamsSchema }) },
  responses: {
    301: { description: 'callback' },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [],
})

export const getVaultConnectionsRoute = createRoute({
  method: 'get',
  path: '/vault/connections',
  tags: ['Connections'],
  summary: 'Get all connections',
  description:
    'This endpoint includes all the configured integrations and contains the required assets\nto build an integrations page where your users can install integrations.\nOAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.\n',
  operationId: 'connectionsAll',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    query: z.object({ api: ApiParamsSchema, configured: ConfiguredParamsSchema }),
  },
  responses: {
    200: GetConnectionsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultConnectionsUnifiedApiServiceIdRoute = createRoute({
  method: 'get',
  path: '/vault/connections/{unified_api}/{service_id}',
  tags: ['Connections'],
  summary: 'Get connection',
  description: 'Get a connection',
  operationId: 'connectionsOne',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
  },
  responses: {
    200: GetConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postVaultConnectionsUnifiedApiServiceIdRoute = createRoute({
  method: 'post',
  path: '/vault/connections/{unified_api}/{service_id}',
  tags: ['Connections'],
  summary: 'Create connection',
  description: 'Create an authorized connection\n',
  operationId: 'connectionsAdd',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
    body: {
      description: 'Fields that need to be persisted on the resource',
      content: { 'application/json': { schema: ConnectionSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteVaultConnectionsUnifiedApiServiceIdRoute = createRoute({
  method: 'delete',
  path: '/vault/connections/{unified_api}/{service_id}',
  tags: ['Connections'],
  summary: 'Deletes a connection',
  description: 'Deletes a connection',
  operationId: 'connectionsDelete',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
  },
  responses: {
    204: { description: 'Resource deleted' },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchVaultConnectionsUnifiedApiServiceIdRoute = createRoute({
  method: 'patch',
  path: '/vault/connections/{unified_api}/{service_id}',
  tags: ['Connections'],
  summary: 'Update connection',
  description: 'Update a connection',
  operationId: 'connectionsUpdate',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
    body: {
      description: 'Fields that need to be updated on the resource',
      content: { 'application/json': { schema: ConnectionSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postVaultConnectionsUnifiedApiServiceIdImportRoute = createRoute({
  method: 'post',
  path: '/vault/connections/{unified_api}/{service_id}/import',
  tags: ['Connections'],
  summary: 'Import connection',
  description: 'Import an authorized connection.\n',
  operationId: 'connectionsImport',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
    body: {
      description: 'Fields that need to be persisted on the resource',
      content: { 'application/json': { schema: ConnectionImportDataSchema } },
      required: true,
    },
  },
  responses: {
    200: CreateConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postVaultConnectionsUnifiedApiServiceIdTokenRoute = createRoute({
  method: 'post',
  path: '/vault/connections/{unified_api}/{service_id}/token',
  tags: ['Connections'],
  summary: 'Get Access Token',
  description:
    'Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.\n\nNote that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.\n',
  operationId: 'connectionsToken',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({ service_id: ServiceIdParamsSchema, unified_api: UnifiedApiParamsSchema }),
    body: { content: { 'application/json': { schema: z.strictObject({}) } } },
  },
  responses: {
    200: GetConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultConnectionsUnifiedApiServiceIdResourceConfigRoute = createRoute({
  method: 'get',
  path: '/vault/connections/{unified_api}/{service_id}/{resource}/config',
  tags: ['Connections'],
  summary: 'Get resource settings',
  description:
    'This endpoint returns custom settings and their defaults required by connection for a given resource.\n',
  operationId: 'connectionSettingsAll',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({
      unified_api: UnifiedApiParamsSchema,
      service_id: ServiceIdParamsSchema,
      resource: ResourceParamsSchema,
    }),
  },
  responses: {
    200: GetConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchVaultConnectionsUnifiedApiServiceIdResourceConfigRoute = createRoute({
  method: 'patch',
  path: '/vault/connections/{unified_api}/{service_id}/{resource}/config',
  tags: ['Connections'],
  summary: 'Update settings',
  description: "Update default values for a connection's resource settings",
  operationId: 'connectionSettingsUpdate',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    params: z.object({
      service_id: ServiceIdParamsSchema,
      unified_api: UnifiedApiParamsSchema,
      resource: ResourceParamsSchema,
    }),
    body: {
      description: 'Fields that need to be updated on the resource',
      content: { 'application/json': { schema: ConnectionSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateConnectionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultConsumersRoute = createRoute({
  method: 'get',
  path: '/vault/consumers',
  tags: ['Consumers'],
  summary: 'Get all consumers',
  description:
    'This endpoint includes all application consumers, along with an aggregated count of requests made.\n',
  operationId: 'consumersAll',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: {
    200: GetConsumersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postVaultConsumersRoute = createRoute({
  method: 'post',
  path: '/vault/consumers',
  tags: ['Consumers'],
  summary: 'Create consumer',
  description: 'Create a consumer',
  operationId: 'consumersAdd',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    body: { content: { 'application/json': { schema: ConsumerSchema } }, required: true },
  },
  responses: {
    200: CreateConsumerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultConsumersConsumerIdRoute = createRoute({
  method: 'get',
  path: '/vault/consumers/{consumer_id}',
  tags: ['Consumers'],
  summary: 'Get consumer',
  description:
    'Consumer detail including their aggregated counts with the connections they have authorized.\n',
  operationId: 'consumersOne',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    params: z.object({ consumer_id: ConsumerIdParamsSchema }),
  },
  responses: {
    200: GetConsumerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteVaultConsumersConsumerIdRoute = createRoute({
  method: 'delete',
  path: '/vault/consumers/{consumer_id}',
  tags: ['Consumers'],
  summary: 'Delete consumer',
  description: 'Delete consumer and all their connections, including credentials.',
  operationId: 'consumersDelete',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    params: z.object({ consumer_id: ConsumerIdParamsSchema }),
  },
  responses: {
    200: DeleteConsumerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchVaultConsumersConsumerIdRoute = createRoute({
  method: 'patch',
  path: '/vault/consumers/{consumer_id}',
  tags: ['Consumers'],
  summary: 'Update consumer',
  description: 'Update consumer metadata such as name and email.',
  operationId: 'consumersUpdate',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    params: z.object({ consumer_id: ConsumerIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: UpdateConsumerRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateConsumerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultConsumersConsumerIdStatsRoute = createRoute({
  method: 'get',
  path: '/vault/consumers/{consumer_id}/stats',
  tags: ['Consumers'],
  summary: 'Consumer request counts',
  description: 'Get consumer request counts within a given datetime range.\n',
  operationId: 'consumerRequestCountsAll',
  request: {
    headers: z.object({ 'x-apideck-app-id': XApideckAppIdParamsSchema }),
    params: z.object({ consumer_id: ConsumerIdParamsSchema }),
    query: z.object({
      start_datetime: StartDatetimeParamsSchema,
      end_datetime: EndDatetimeParamsSchema,
    }),
  },
  responses: {
    200: ConsumerRequestCountsInDateRangeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultLogsRoute = createRoute({
  method: 'get',
  path: '/vault/logs',
  tags: ['Logs'],
  summary: 'Get all consumer request logs',
  description: 'This endpoint includes all consumer request logs.\n',
  operationId: 'logsAll',
  request: {
    headers: z.object({
      'x-apideck-app-id': XApideckAppIdParamsSchema,
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
    }),
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
          filter: FilterParamsSchema,
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetLogsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getVaultRevokeServiceIdApplicationIdRoute = createRoute({
  method: 'get',
  path: '/vault/revoke/{service_id}/{application_id}',
  tags: ['Connections'],
  summary: 'Revoke connection',
  description:
    "__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__\n\nUse this endpoint to revoke an existing OAuth connector.\n\nAuth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.\n\nVault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.\n",
  operationId: 'connectionsRevoke',
  request: {
    params: z.object({
      service_id: ServiceIdParamsSchema,
      application_id: ApplicationIdParamsSchema,
    }),
    query: z.object({ state: StateParamsSchema, redirect_uri: RedirectUriParamsSchema }),
  },
  responses: {
    301: { description: 'redirect' },
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [],
})

export const postVaultSessionsRoute = createRoute({
  method: 'post',
  path: '/vault/sessions',
  tags: ['Sessions'],
  summary: 'Create Session',
  description:
    'Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned\nURL to allow temporary access to manage their integrations and settings.\n\nNote: This is a short lived token that will expire after 1 hour (TTL: 3600).\n',
  operationId: 'sessionsCreate',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': XApideckConsumerIdParamsSchema,
      'x-apideck-app-id': XApideckAppIdParamsSchema,
    }),
    body: {
      description: 'Additional redirect uri and/or consumer metadata',
      content: { 'application/json': { schema: SessionSchema } },
    },
  },
  responses: {
    200: CreateSessionResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})
