import { createRoute, z } from '@hono/zod-openapi'

const ApplicationIdSchema = z
  .string()
  .openapi({
    description: 'ID of your Apideck Application',
    example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
  })
  .openapi('ApplicationId')

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

const ConsumerIdSchema = z
  .string()
  .openapi({
    description:
      "Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID.",
    example: 'test_consumer_id',
  })
  .openapi('ConsumerId')

const DeliveryUrlSchema = z
  .url()
  .regex(/^(https?):\/\//)
  .openapi({
    description: 'The delivery url of the webhook endpoint.',
    example: 'https://example.com/my/webhook/endpoint',
  })
  .openapi('DeliveryUrl')

const DescriptionSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'A description of the object.',
    example: 'A description',
    title: 'Description',
  })
  .openapi('Description')

const WebhookEventTypeSchema = z
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
  .openapi({ example: 'crm.company.created', 'x-apideck-enum-id': 'webhooks.event_type' })
  .openapi('WebhookEventType')

const StatusSchema = z
  .enum(['enabled', 'disabled'])
  .openapi({
    description: 'The status of the webhook.',
    example: 'enabled',
    'x-apideck-enum-id': 'webhooks.status',
    'x-graphql-type-name': 'WebhookStatus',
  })
  .openapi('Status')

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

const CreateWebhookRequestSchema = z
  .strictObject({
    delivery_url: DeliveryUrlSchema,
    description: DescriptionSchema.exactOptional(),
    events: z
      .array(WebhookEventTypeSchema)
      .openapi({
        description:
          'The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.',
        example: ['vault.connection.created', 'vault.connection.updated'],
        title: 'Subscribed events',
      }),
    status: StatusSchema,
    unified_api: UnifiedApiIdSchema,
  })
  .openapi({
    required: ['delivery_url', 'status', 'events', 'unified_api'],
    'x-apideck-schema-id': 'CreateWebhookRequest',
  })
  .openapi('CreateWebhookRequest')

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'The date and time when the object was created.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Created at (timestamp)',
  })
  .openapi('CreatedAt')

const ExecuteBaseUrlSchema = z
  .url()
  .regex(/^(https?):\/\//)
  .openapi({
    description:
      'The Unify Base URL events from connectors will be sent to after service id is appended.',
    example: 'https://unify.apideck.com/webhook/webhooks/1234/execute',
    readOnly: true,
  })
  .openapi('ExecuteBaseUrl')

const UpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    description: 'The date and time when the object was last updated.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Updated at (timestamp)',
  })
  .openapi('UpdatedAt')

const WebhookSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    delivery_url: DeliveryUrlSchema,
    description: DescriptionSchema.exactOptional(),
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
      .array(WebhookEventTypeSchema)
      .openapi({
        description:
          'The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.',
        example: ['vault.connection.created', 'vault.connection.updated'],
        title: 'Subscribed events',
      }),
    execute_base_url: ExecuteBaseUrlSchema,
    id: z.string().exactOptional().openapi({ example: '1234', readOnly: true }),
    status: StatusSchema,
    unified_api: UnifiedApiIdSchema,
    updated_at: UpdatedAtSchema.exactOptional(),
  })
  .openapi({
    required: ['delivery_url', 'status', 'events', 'unified_api', 'execute_base_url'],
    'x-apideck-schema-id': 'Webhook',
  })
  .openapi('Webhook')

const CreateWebhookResponseSchema = z
  .object({
    data: WebhookSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'CreateWebhookResponse',
  })
  .openapi('CreateWebhookResponse')

const DeleteWebhookResponseSchema = z
  .object({
    data: WebhookSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'DeleteWebhookResponse',
  })
  .openapi('DeleteWebhookResponse')

const ExecuteWebhookEventRequestSchema = z
  .looseObject({})
  .openapi({ 'x-apideck-schema-id': 'ExecuteWebhookEventRequest' })
  .openapi('ExecuteWebhookEventRequest')

const ExecuteWebhookEventsRequestSchema = z
  .array(z.looseObject({}))
  .openapi({ 'x-apideck-schema-id': 'ExecuteWebhookEventsRequest' })
  .openapi('ExecuteWebhookEventsRequest')

const ExecuteWebhookResponseSchema = z
  .object({
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID of the request received',
        example: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime webhook event was received',
        example: '2021-10-01T08:26:28.039Z',
      }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'ExecuteWebhookResponse',
  })
  .openapi('ExecuteWebhookResponse')

const WebhookEventLogSchema = z
  .strictObject({
    application_id: ApplicationIdSchema.exactOptional(),
    attempts: z
      .array(
        z
          .object({
            execution_attempt: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Number of attempts webhook endpoint was called before a success was returned or eventually failed',
                example: 3,
              }),
            status_code: z
              .int()
              .exactOptional()
              .openapi({ description: 'HTTP Status code that was returned.', example: 200 }),
            success: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Whether or not the request was successful.',
                example: true,
              }),
            timestamp: z
              .string()
              .exactOptional()
              .openapi({
                description: 'ISO Date and time when the request was made.',
                example: '2021-07-12T14:26:17.420Z',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'record of each attempt to call webhook endpoint' }),
    consumer_id: ConsumerIdSchema.exactOptional(),
    endpoint: z
      .url()
      .regex(/^(https?):\/\//)
      .exactOptional()
      .openapi({
        description: 'The URL of the webhook endpoint.',
        example: 'https://example.com/my/webhook/endpoint',
      }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the Entity described by the attributes delivered within payload',
        example: 'Connection',
      }),
    event_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of source event that webhook is subscribed to.',
        example: 'vault.connection.updated',
      }),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Number of attempts webhook endpoint was called before a success was returned or eventually failed',
        example: 3,
      }),
    http_method: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP Method of request to endpoint.', example: 'GET' }),
    id: z.string().exactOptional().openapi({ example: '1d174c4d-fe9e-4377-a76c-6da22fe9cd87' }),
    request_body: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The JSON stringified payload that was delivered to the webhook endpoint.',
        example:
          '{"entity":{"id":"2222+test_user_id","application_id":"2222","consumer_id":"test_user_id","name":"ActiveCampaign","icon":"https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png","logo":"https://www.activecampaign.com/site/assets/social-2x.png","unified_api":"crm","service_id":"activecampaign","auth_type":"apiKey","enabled":true,"tag_line":"Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.","website":"https://www.activecampaign.com/","settings":{"instance_url":"https://eu28.salesforce.com","base_url":"https://updated.api-us1.com"},"metadata":{"plan":"enterprise","account":{"name":"My Company"}},"state":"callable","created_at":"2021-09-10T10:39:49.628Z","updated_at":"2021-09-10T10:39:52.715Z"},"entityType":"Connection"}',
      }),
    response_body: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The JSON stringified response that was returned from the webhook endpoint.',
        example: '{"status":"OK"}',
      }),
    retry_scheduled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the request has not hit the max retry limit and will be retried.',
        example: true,
      }),
    service: z
      .strictObject({
        id: z
          .string()
          .openapi({ description: 'Apideck service provider id.', example: '101-data-solution' }),
        name: z
          .string()
          .openapi({ description: 'Apideck service provider name.', example: '101 Data Solution' }),
      })
      .exactOptional()
      .openapi({
        description: 'Apideck service provider associated with event.',
        required: ['id', 'name'],
      }),
    status_code: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP Status code that was returned.', example: 200 }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the request was successful.', example: true }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Date and time when the request was made.',
        example: '2021-07-12T14:26:17.420Z',
      }),
    unified_api: UnifiedApiIdSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'WebhookEventLog', required: [] })
  .openapi('WebhookEventLog')

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

const GetWebhookEventLogsResponseSchema = z
  .object({
    data: z.array(WebhookEventLogSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetWebhookEventLogsResponse',
    'x-graphql-type-name': 'EventLogList',
  })
  .openapi('GetWebhookEventLogsResponse')

const GetWebhookResponseSchema = z
  .object({
    data: WebhookSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetWebhookResponse',
    'x-graphql-type-name': 'Webhook',
  })
  .openapi('GetWebhookResponse')

const GetWebhooksResponseSchema = z
  .object({
    data: z.array(WebhookSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'GetWebhooksResponse',
    'x-graphql-type-name': 'WebhookList',
  })
  .openapi('GetWebhooksResponse')

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

const ResolveWebhookEventRequestSchema = z
  .looseObject({})
  .openapi({ 'x-apideck-schema-id': 'ResolveWebhookEventRequest' })
  .openapi('ResolveWebhookEventRequest')

const ResolveWebhookEventsRequestSchema = z
  .array(z.looseObject({}))
  .openapi({ 'x-apideck-schema-id': 'ResolveWebhookEventRequest' })
  .openapi('ResolveWebhookEventsRequest')

const ResolveWebhookResponseSchema = z
  .object({
    request_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UUID of the request received',
        example: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
      }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime webhook event was received',
        example: '2021-10-01T08:26:28.039Z',
      }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'ResolveWebhookResponse',
  })
  .openapi('ResolveWebhookResponse')

const ServiceIdSchema = z
  .string()
  .openapi({ description: 'Service provider identifier', example: 'close' })
  .openapi('ServiceId')

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

const UpdateWebhookRequestSchema = z
  .strictObject({
    delivery_url: DeliveryUrlSchema.exactOptional(),
    description: DescriptionSchema.exactOptional(),
    events: z
      .array(WebhookEventTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.',
        example: ['vault.connection.created', 'vault.connection.updated'],
        title: 'Subscribed events',
      }),
    status: StatusSchema.exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'UpdateWebhookRequest', required: [] })
  .openapi('UpdateWebhookRequest')

const UpdateWebhookResponseSchema = z
  .object({
    data: WebhookSchema,
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'data'],
    'x-apideck-schema-id': 'UpdateWebhookResponse',
  })
  .openapi('UpdateWebhookResponse')

const WebhookEventSchema = z
  .object({
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
      .openapi({ description: 'The type entity that triggered this event', example: 'Company' }),
    entity_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to retrieve entity detail.',
        example: 'https://unify.apideck.com/crm/contacts/123456',
      }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique reference to this request event',
        example: '9755c355-56c3-4a2f-a2da-86ff4411fccb',
      }),
    event_type: WebhookEventTypeSchema.exactOptional(),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current count this request event has been attempted',
        example: 2,
      }),
    occurred_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'ISO Datetime for when the original event occurred',
        example: '2021-10-01T03:14:55.419Z',
      }),
    service_id: ServiceIdSchema.exactOptional(),
  })
  .openapi({ 'x-sdk-exclude': true, required: [] })
  .openapi('WebhookEvent')

const WebhookEventLogsFilterSchema = z
  .object({
    consumer_id: z.string().nullable().exactOptional().openapi({ example: 'test_user_id' }),
    entity_type: z.string().nullable().exactOptional().openapi({ example: 'Connection' }),
    event_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'vault.connection.callable' }),
    exclude_apis: z.string().nullable().exactOptional().openapi({ example: 'vault,proxy' }),
    service: z
      .object({ id: z.string().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    'x-apideck-schema-id': 'WebhookEventLogsFilter',
    'x-graphql-type-name': 'WebhookEventLogsFilter',
    required: [],
  })
  .openapi('WebhookEventLogsFilter')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateWebhookResponseResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: CreateWebhookResponseSchema } },
}

const DeleteWebhookResponseResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: DeleteWebhookResponseSchema } },
}

const ExecuteWebhookResponseResponse = {
  description: 'Execute Webhook',
  content: { 'application/json': { schema: ExecuteWebhookResponseSchema } },
}

const GetWebhookEventLogsResponseResponse = {
  description: 'EventLogs',
  content: { 'application/json': { schema: GetWebhookEventLogsResponseSchema } },
}

const GetWebhookResponseResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: GetWebhookResponseSchema } },
}

const GetWebhooksResponseResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: GetWebhooksResponseSchema } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const ResolveWebhookResponseResponse = {
  description: 'Resolve Webhook',
  content: { 'application/json': { schema: ResolveWebhookResponseSchema } },
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

const UpdateWebhookResponseResponse = {
  description: 'Webhooks',
  content: { 'application/json': { schema: UpdateWebhookResponseSchema } },
}

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

const ConsumerIdParamsSchema = z
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

const DownstreamEventTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The name of downstream event when connector does not supply in body or header',
      example: 'Employees::Events::EmployeeCreated',
      in: 'query',
      name: 'e',
      schema: { type: 'string' },
      required: false,
    },
  })

const FilterParamsSchema = WebhookEventLogsFilterSchema.openapi({
  param: {
    description: 'Filter results',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/WebhookEventLogsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const LookupIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Unique identifier to used to look up consumer/connection when receiving connector events from downstream.',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3NWUwNmEzLTUwNzUtNDY3Yi1hNTk5LWVkNmM5YTg5NTYyOCJ9._ppKdmBaCB2RHjBTifMNP2xKNeLBfNPim2CiHSUd0Zg',
      in: 'query',
      name: 'l_id',
      schema: { type: 'string' },
      required: false,
    },
  })

const LookupIdTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'JWT Webhook token that represents the connection lookupId. Signed so we know source came from us',
      example:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2MDAwYzIzLWI1NmItNGRlOC1iZmEzLTMxNTAzMTE3YzBmNyJ9.rAXnsmZ4O7eF0aDwdflkxAJQwMUfWs5989WfmspNZ6Q',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ServiceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Service provider ID.',
      example: 'factorialhr',
      in: 'path',
      name: 'serviceId',
      required: true,
      schema: { type: 'string' },
    },
  })

const WebhookTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.',
      in: 'path',
      name: 'id',
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

export const getWebhookLogsRoute = createRoute({
  method: 'get',
  path: '/webhook/logs',
  tags: ['Webhooks'],
  summary: 'List event logs',
  description: 'List event logs',
  operationId: 'eventLogsAll',
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
          filter: FilterParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetWebhookEventLogsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postWebhookWIdServiceIdRoute = createRoute({
  method: 'post',
  path: '/webhook/w/{id}/{serviceId}',
  tags: ['Webhooks'],
  summary: 'Resolve and Execute a connection webhook',
  description: 'Resolve a webhook based on lookup_id and then execute it',
  operationId: 'webhooksResolve',
  request: {
    params: z.object({ id: LookupIdTokenParamsSchema, serviceId: ServiceIdParamsSchema }),
    query: z.object({ e: DownstreamEventTypeParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([ResolveWebhookEventRequestSchema, ResolveWebhookEventsRequestSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: ResolveWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getWebhookWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhook/webhooks',
  tags: ['Webhooks'],
  summary: 'List webhook subscriptions',
  description: 'List all webhook subscriptions',
  operationId: 'webhooksAll',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    query: z.object({ cursor: CursorParamsSchema, limit: LimitParamsSchema }),
  },
  responses: {
    200: GetWebhooksResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postWebhookWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhook/webhooks',
  tags: ['Webhooks'],
  summary: 'Create webhook subscription',
  description: 'Create a webhook subscription to receive events',
  operationId: 'webhooksAdd',
  request: {
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateWebhookRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: CreateWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getWebhookWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/webhook/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Get webhook subscription',
  description: 'Get the webhook subscription details',
  operationId: 'webhooksOne',
  request: {
    params: z.object({ id: WebhookTokenParamsSchema }),
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
  },
  responses: {
    200: GetWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteWebhookWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/webhook/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Delete webhook subscription',
  description: 'Delete a webhook subscription',
  operationId: 'webhooksDelete',
  request: {
    params: z.object({ id: WebhookTokenParamsSchema }),
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
  },
  responses: {
    200: DeleteWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchWebhookWebhooksIdRoute = createRoute({
  method: 'patch',
  path: '/webhook/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Update webhook subscription',
  description: 'Update a webhook subscription',
  operationId: 'webhooksUpdate',
  request: {
    params: z.object({ id: WebhookTokenParamsSchema }),
    headers: z.object({ 'x-apideck-app-id': ApplicationIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postWebhookWebhooksIdExecuteServiceIdRoute = createRoute({
  method: 'post',
  path: '/webhook/webhooks/{id}/execute/{serviceId}',
  tags: ['Webhooks'],
  summary: 'Execute a webhook',
  description: 'Execute a webhook',
  operationId: 'webhooksExecute',
  request: {
    params: z.object({ id: WebhookTokenParamsSchema, serviceId: ServiceIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([ExecuteWebhookEventRequestSchema, ExecuteWebhookEventsRequestSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: ExecuteWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postWebhookWebhooksIdXServiceIdRoute = createRoute({
  method: 'post',
  path: '/webhook/webhooks/{id}/x/{serviceId}',
  tags: ['Webhooks'],
  summary: 'Execute a webhook',
  description: 'Execute a webhook',
  operationId: 'webhooksShortExecute',
  request: {
    params: z.object({ id: WebhookTokenParamsSchema, serviceId: ServiceIdParamsSchema }),
    query: z.object({ l_id: LookupIdParamsSchema, e: DownstreamEventTypeParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([ExecuteWebhookEventRequestSchema, ExecuteWebhookEventsRequestSchema]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: ExecuteWebhookResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})
