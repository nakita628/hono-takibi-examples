import { createRoute, z } from '@hono/zod-openapi'

const PublicPropertyValidationRuleSchema = z
  .object({
    ruleArguments: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'A list of arguments that define the specific conditions or parameters for the validation rule.',
        example: null,
      }),
    ruleType: z
      .enum([
        'AFTER_DATETIME_DURATION',
        'AFTER_DURATION',
        'ALPHANUMERIC',
        'BEFORE_DATETIME_DURATION',
        'BEFORE_DURATION',
        'DAYS_OF_WEEK',
        'DECIMAL',
        'DOMAIN',
        'EMAIL',
        'EMAIL_ALLOWED_DOMAINS',
        'EMAIL_BLOCKED_DOMAINS',
        'END_DATE',
        'END_DATETIME',
        'FORMAT',
        'MAX_LENGTH',
        'MAX_NUMBER',
        'MIN_LENGTH',
        'MIN_NUMBER',
        'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE',
        'REGEX',
        'SPECIAL_CHARACTERS',
        'START_DATE',
        'START_DATETIME',
        'URL',
        'URL_ALLOWED_DOMAINS',
        'URL_BLOCKED_DOMAINS',
        'WHITESPACE',
      ])
      .openapi({
        description:
          'The category of validation applied to the property, such as FORMAT, ALPHANUMERIC, or MAX_LENGTH.',
        example: null,
      }),
    shouldApplyNormalization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether normalization should be applied to the property value before validation.',
        example: null,
      }),
  })
  .openapi({ required: ['ruleArguments', 'ruleType'], example: null })
  .openapi('PublicPropertyValidationRule')

const PublicPropertyValidationRuleMapSchema = z
  .object({
    propertyName: z
      .string()
      .openapi({
        description: 'The name of the property for which validation rules are defined.',
        example: null,
      }),
    propertyValidationRules: z
      .array(PublicPropertyValidationRuleSchema)
      .openapi({
        description: 'A list of validation rules applicable to the property.',
        example: null,
      }),
  })
  .openapi({ required: ['propertyName', 'propertyValidationRules'], example: null })
  .openapi('PublicPropertyValidationRuleMap')

const CollectionResponsePublicPropertyValidationRuleMapNoPagingSchema = z
  .object({
    results: z
      .array(PublicPropertyValidationRuleMapSchema)
      .openapi({
        description:
          'Collection of properties with their validation rules. Each item maps a property name to its configured validation rules for the specified object type.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicPropertyValidationRuleMapNoPaging')

const CollectionResponsePublicPropertyValidationRuleNoPagingSchema = z
  .object({
    results: z
      .array(PublicPropertyValidationRuleSchema)
      .openapi({
        description:
          'Collection of validation rules configured for the specified property. Each rule defines a constraint that property values must satisfy (e.g., format requirements, length limits, allowed values).',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicPropertyValidationRuleNoPaging')

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

const PublicPropertyValidationRuleUpdateSchema = z
  .object({
    ruleArguments: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'A list of arguments that define the constraints for the validation rule.',
        example: null,
      }),
    shouldApplyNormalization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether normalization should be applied to the property value as part of the validation process.',
        example: null,
      }),
  })
  .openapi({ required: ['ruleArguments'], example: null })
  .openapi('PublicPropertyValidationRuleUpdate')

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
      scopes: {
        automation: '',
        'cpq.quotes.read': '',
        'cpq.quotes.write': '',
        'crm.objects.appointments.read': '',
        'crm.objects.appointments.sensitive.read.v2': '',
        'crm.objects.appointments.sensitive.write.v2': '',
        'crm.objects.appointments.write': '',
        'crm.objects.calls.read': '',
        'crm.objects.carts.read': '',
        'crm.objects.carts.write': '',
        'crm.objects.commercepayments.write': '',
        'crm.objects.companies.highly_sensitive.read.v2': '',
        'crm.objects.companies.highly_sensitive.write.v2': '',
        'crm.objects.companies.read': '',
        'crm.objects.companies.sensitive.read.v2': '',
        'crm.objects.companies.sensitive.write.v2': '',
        'crm.objects.companies.write': '',
        'crm.objects.contacts.highly_sensitive.read.v2': '',
        'crm.objects.contacts.highly_sensitive.write.v2': '',
        'crm.objects.contacts.read': '',
        'crm.objects.contacts.sensitive.read.v2': '',
        'crm.objects.contacts.sensitive.write.v2': '',
        'crm.objects.contacts.write': '',
        'crm.objects.courses.read': '',
        'crm.objects.courses.write': '',
        'crm.objects.custom.highly_sensitive.read.v2': '',
        'crm.objects.custom.highly_sensitive.write.v2': '',
        'crm.objects.custom.read': '',
        'crm.objects.custom.sensitive.read.v2': '',
        'crm.objects.custom.sensitive.write.v2': '',
        'crm.objects.custom.write': '',
        'crm.objects.deals.highly_sensitive.read.v2': '',
        'crm.objects.deals.highly_sensitive.write.v2': '',
        'crm.objects.deals.read': '',
        'crm.objects.deals.sensitive.read.v2': '',
        'crm.objects.deals.sensitive.write.v2': '',
        'crm.objects.deals.write': '',
        'crm.objects.emails.read': '',
        'crm.objects.feedback_submissions.read': '',
        'crm.objects.goals.read': '',
        'crm.objects.goals.write': '',
        'crm.objects.invoices.read': '',
        'crm.objects.invoices.write': '',
        'crm.objects.leads.read': '',
        'crm.objects.leads.write': '',
        'crm.objects.line_items.read': '',
        'crm.objects.line_items.write': '',
        'crm.objects.listings.read': '',
        'crm.objects.listings.write': '',
        'crm.objects.marketing_events.read': '',
        'crm.objects.marketing_events.write': '',
        'crm.objects.meetings.read': '',
        'crm.objects.notes.read': '',
        'crm.objects.orders.read': '',
        'crm.objects.orders.write': '',
        'crm.objects.owners.read': '',
        'crm.objects.products.write': '',
        'crm.objects.projects.highly_sensitive.read': '',
        'crm.objects.projects.highly_sensitive.write': '',
        'crm.objects.projects.read': '',
        'crm.objects.projects.sensitive.read': '',
        'crm.objects.projects.sensitive.write': '',
        'crm.objects.projects.write': '',
        'crm.objects.quotes.read': '',
        'crm.objects.quotes.write': '',
        'crm.objects.services.read': '',
        'crm.objects.services.write': '',
        'crm.objects.subscriptions.read': '',
        'crm.objects.subscriptions.write': '',
        'crm.objects.tasks.read': '',
        'crm.objects.tickets.highly_sensitive.read': '',
        'crm.objects.tickets.highly_sensitive.write': '',
        'crm.objects.tickets.sensitive.read': '',
        'crm.objects.tickets.sensitive.write': '',
        'crm.objects.users.read': '',
        'crm.objects.users.write': '',
        'crm.pipelines.approval.read': '',
        'crm.pipelines.orders.read': '',
        'crm.pipelines.orders.write': '',
        'crm.schemas.appointments.read': '',
        'crm.schemas.appointments.write': '',
        'crm.schemas.calls.read': '',
        'crm.schemas.calls.write': '',
        'crm.schemas.carts.read': '',
        'crm.schemas.carts.write': '',
        'crm.schemas.commercepayments.read': '',
        'crm.schemas.commercepayments.write': '',
        'crm.schemas.companies.read': '',
        'crm.schemas.companies.write': '',
        'crm.schemas.contacts.read': '',
        'crm.schemas.contacts.write': '',
        'crm.schemas.courses.read': '',
        'crm.schemas.courses.write': '',
        'crm.schemas.custom.read': '',
        'crm.schemas.custom.write': '',
        'crm.schemas.deals.read': '',
        'crm.schemas.deals.write': '',
        'crm.schemas.emails.read': '',
        'crm.schemas.emails.write': '',
        'crm.schemas.invoices.read': '',
        'crm.schemas.invoices.write': '',
        'crm.schemas.line_items.read': '',
        'crm.schemas.listings.read': '',
        'crm.schemas.listings.write': '',
        'crm.schemas.meetings.read': '',
        'crm.schemas.meetings.write': '',
        'crm.schemas.notes.read': '',
        'crm.schemas.notes.write': '',
        'crm.schemas.orders.read': '',
        'crm.schemas.orders.write': '',
        'crm.schemas.projects.read': '',
        'crm.schemas.quotes.read': '',
        'crm.schemas.quotes.write': '',
        'crm.schemas.services.read': '',
        'crm.schemas.services.write': '',
        'crm.schemas.subscriptions.read': '',
        'crm.schemas.subscriptions.write': '',
        'crm.schemas.tasks.read': '',
        'crm.schemas.tasks.write': '',
        'e-commerce': '',
        'media_bridge.read': '',
        'tickets.highly_sensitive.v2': '',
        'tickets.sensitive.v2': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmPropertyValidations202609ObjectTypeIdRoute = createRoute({
  method: 'get',
  path: '/crm/property-validations/2026-09/{objectTypeId}',
  tags: ['Basic'],
  summary: 'Read all property validation rules for an object',
  description: 'Read all properties with validation rules for a given object.',
  operationId:
    'get-/crm/property-validations/2026-09/{objectTypeId}_/crm/v3/property-validations/{objectTypeId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which to retrieve property validation rules.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicPropertyValidationRuleMapNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const getCrmPropertyValidations202609ObjectTypeIdPropertyNameRoute = createRoute({
  method: 'get',
  path: '/crm/property-validations/2026-09/{objectTypeId}/{propertyName}',
  tags: ['Basic'],
  summary: 'Read validation rules for a property',
  description: "Read a property's validation rules identified by {propertyName}.",
  operationId:
    'get-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}_/crm/v3/property-validations/{objectTypeId}/{propertyName}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the property validation rules are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The name of the property for which validation rules are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: CollectionResponsePublicPropertyValidationRuleNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.objects.owners.read'] },
    { oauth2: ['crm.objects.deals.read'] },
    { oauth2: ['crm.objects.subscriptions.read'] },
    { oauth2: ['crm.objects.services.read'] },
    { oauth2: ['crm.objects.tickets.sensitive.read'] },
    { oauth2: ['crm.objects.listings.write'] },
    { oauth2: ['crm.objects.custom.read'] },
    { oauth2: ['crm.objects.tasks.read'] },
    { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
    { oauth2: ['crm.schemas.quotes.read'] },
    { oauth2: ['crm.objects.companies.read'] },
    { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
    { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
    { oauth2: ['media_bridge.read'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
    { oauth2: ['crm.objects.calls.read'] },
    { oauth2: ['crm.objects.meetings.read'] },
    { oauth2: ['crm.schemas.services.read'] },
    { oauth2: ['crm.schemas.line_items.read'] },
    { oauth2: ['crm.schemas.subscriptions.read'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
    { oauth2: ['crm.schemas.companies.read'] },
    { oauth2: ['crm.objects.products.write'] },
    { oauth2: ['crm.objects.feedback_submissions.read'] },
    { oauth2: ['crm.objects.services.write'] },
    { oauth2: ['crm.objects.subscriptions.write'] },
    { oauth2: ['crm.schemas.calls.read'] },
    { oauth2: ['crm.schemas.meetings.read'] },
    { oauth2: ['crm.objects.contacts.read'] },
    { oauth2: ['crm.objects.invoices.read'] },
    { oauth2: ['crm.schemas.orders.read'] },
    { oauth2: ['crm.schemas.emails.read'] },
    { oauth2: ['crm.schemas.deals.read'] },
    { oauth2: ['crm.objects.deals.write'] },
    { oauth2: ['e-commerce'] },
    { oauth2: ['crm.schemas.notes.read'] },
    { oauth2: ['crm.objects.projects.read'] },
    { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
    { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.goals.write'] },
    { oauth2: ['crm.objects.line_items.write'] },
    { oauth2: ['crm.objects.contacts.write'] },
    { oauth2: ['crm.objects.goals.read'] },
    { oauth2: ['crm.objects.line_items.read'] },
    { oauth2: ['crm.objects.projects.sensitive.write'] },
    { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
    { oauth2: ['crm.objects.quotes.write'] },
    { oauth2: ['crm.schemas.contacts.read'] },
    { oauth2: ['tickets.highly_sensitive.v2'] },
    { oauth2: ['crm.objects.leads.read'] },
    { oauth2: ['crm.objects.leads.write'] },
    { oauth2: ['crm.schemas.tasks.read'] },
    { oauth2: ['crm.objects.emails.read'] },
    { oauth2: ['crm.schemas.invoices.read'] },
    { oauth2: ['crm.objects.quotes.read'] },
    { oauth2: ['crm.objects.notes.read'] },
    { oauth2: ['crm.objects.courses.read'] },
    { oauth2: ['crm.objects.marketing_events.read'] },
    { oauth2: ['crm.pipelines.orders.read'] },
    { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
    { oauth2: ['crm.schemas.projects.read'] },
    { oauth2: ['crm.objects.orders.read'] },
    { oauth2: ['automation'] },
    { oauth2: ['crm.objects.companies.write'] },
    { oauth2: ['crm.schemas.carts.read'] },
    { oauth2: ['cpq.quotes.write'] },
    { oauth2: ['crm.schemas.listings.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
    { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.commercepayments.write'] },
    { oauth2: ['crm.objects.invoices.write'] },
    { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
    { oauth2: ['crm.objects.users.read'] },
    { oauth2: ['crm.objects.appointments.write'] },
    { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
    { oauth2: ['cpq.quotes.read'] },
    { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
    { oauth2: ['crm.schemas.appointments.read'] },
    { oauth2: ['crm.objects.custom.write'] },
    { oauth2: ['tickets.sensitive.v2'] },
    { oauth2: ['crm.objects.appointments.read'] },
    { oauth2: ['crm.schemas.courses.read'] },
    { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
    { oauth2: ['crm.objects.projects.sensitive.read'] },
    { oauth2: ['crm.pipelines.approval.read'] },
    { oauth2: ['crm.objects.projects.write'] },
    { oauth2: ['crm.objects.marketing_events.write'] },
    { oauth2: ['crm.schemas.custom.read'] },
    { oauth2: ['crm.objects.carts.read'] },
    { oauth2: ['crm.objects.courses.write'] },
    { oauth2: ['crm.schemas.commercepayments.read'] },
    { oauth2: ['crm.objects.listings.read'] },
  ],
})

export const getCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute =
  createRoute({
    method: 'get',
    path: '/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}',
    tags: ['Basic'],
    summary:
      'Retrieve a validation rule for a specific property and rule type, providing details on how property values should be formatted.',
    description:
      'Retrieve a specific validation rule for a property identified by its name and rule type.',
    operationId:
      'get-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}_/crm/v3/property-validations/{objectTypeId}/{propertyName}/rule-type/{ruleType}',
    request: {
      params: z.object({
        objectTypeId: z
          .string()
          .openapi({
            param: {
              name: 'objectTypeId',
              in: 'path',
              description:
                'The unique identifier of the object type for which the property validation rule is being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        propertyName: z
          .string()
          .openapi({
            param: {
              name: 'propertyName',
              in: 'path',
              description:
                'The name of the property for which the validation rule is being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        ruleType: z
          .enum([
            'AFTER_DATETIME_DURATION',
            'AFTER_DURATION',
            'ALPHANUMERIC',
            'BEFORE_DATETIME_DURATION',
            'BEFORE_DURATION',
            'DAYS_OF_WEEK',
            'DECIMAL',
            'DOMAIN',
            'EMAIL',
            'EMAIL_ALLOWED_DOMAINS',
            'EMAIL_BLOCKED_DOMAINS',
            'END_DATE',
            'END_DATETIME',
            'FORMAT',
            'MAX_LENGTH',
            'MAX_NUMBER',
            'MIN_LENGTH',
            'MIN_NUMBER',
            'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE',
            'REGEX',
            'SPECIAL_CHARACTERS',
            'START_DATE',
            'START_DATETIME',
            'URL',
            'URL_ALLOWED_DOMAINS',
            'URL_BLOCKED_DOMAINS',
            'WHITESPACE',
          ])
          .openapi({
            param: {
              name: 'ruleType',
              in: 'path',
              description:
                'The type of validation rule to retrieve. Valid values include FORMAT, ALPHANUMERIC, MAX_LENGTH, MIN_LENGTH, MIN_NUMBER, MAX_NUMBER, START_DATE, END_DATE, SPECIAL_CHARACTERS, WHITESPACE, DECIMAL, BEFORE_DURATION, AFTER_DURATION, DAYS_OF_WEEK, REGEX, START_DATETIME, END_DATETIME, BEFORE_DATETIME_DURATION, AFTER_DATETIME_DURATION, PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE, URL, URL_ALLOWED_DOMAINS, URL_BLOCKED_DOMAINS, EMAIL, EMAIL_ALLOWED_DOMAINS, EMAIL_BLOCKED_DOMAINS, DOMAIN.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'AFTER_DATETIME_DURATION',
                  'AFTER_DURATION',
                  'ALPHANUMERIC',
                  'BEFORE_DATETIME_DURATION',
                  'BEFORE_DURATION',
                  'DAYS_OF_WEEK',
                  'DECIMAL',
                  'DOMAIN',
                  'EMAIL',
                  'EMAIL_ALLOWED_DOMAINS',
                  'EMAIL_BLOCKED_DOMAINS',
                  'END_DATE',
                  'END_DATETIME',
                  'FORMAT',
                  'MAX_LENGTH',
                  'MAX_NUMBER',
                  'MIN_LENGTH',
                  'MIN_NUMBER',
                  'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE',
                  'REGEX',
                  'SPECIAL_CHARACTERS',
                  'START_DATE',
                  'START_DATETIME',
                  'URL',
                  'URL_ALLOWED_DOMAINS',
                  'URL_BLOCKED_DOMAINS',
                  'WHITESPACE',
                ],
              },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicPropertyValidationRuleSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [
      { oauth2: ['crm.objects.owners.read'] },
      { oauth2: ['crm.objects.deals.read'] },
      { oauth2: ['crm.objects.subscriptions.read'] },
      { oauth2: ['crm.objects.services.read'] },
      { oauth2: ['crm.objects.tickets.sensitive.read'] },
      { oauth2: ['crm.objects.listings.write'] },
      { oauth2: ['crm.objects.custom.read'] },
      { oauth2: ['crm.objects.tasks.read'] },
      { oauth2: ['crm.objects.custom.sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.write.v2'] },
      { oauth2: ['crm.schemas.quotes.read'] },
      { oauth2: ['crm.objects.companies.read'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.read'] },
      { oauth2: ['crm.objects.companies.sensitive.read.v2'] },
      { oauth2: ['media_bridge.read'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.sensitive.write.v2'] },
      { oauth2: ['crm.objects.calls.read'] },
      { oauth2: ['crm.objects.meetings.read'] },
      { oauth2: ['crm.schemas.services.read'] },
      { oauth2: ['crm.schemas.line_items.read'] },
      { oauth2: ['crm.schemas.subscriptions.read'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.write'] },
      { oauth2: ['crm.schemas.companies.read'] },
      { oauth2: ['crm.objects.products.write'] },
      { oauth2: ['crm.objects.feedback_submissions.read'] },
      { oauth2: ['crm.objects.services.write'] },
      { oauth2: ['crm.objects.subscriptions.write'] },
      { oauth2: ['crm.schemas.calls.read'] },
      { oauth2: ['crm.schemas.meetings.read'] },
      { oauth2: ['crm.objects.contacts.read'] },
      { oauth2: ['crm.objects.invoices.read'] },
      { oauth2: ['crm.schemas.orders.read'] },
      { oauth2: ['crm.schemas.emails.read'] },
      { oauth2: ['crm.schemas.deals.read'] },
      { oauth2: ['crm.objects.deals.write'] },
      { oauth2: ['e-commerce'] },
      { oauth2: ['crm.schemas.notes.read'] },
      { oauth2: ['crm.objects.projects.read'] },
      { oauth2: ['crm.objects.companies.sensitive.write.v2'] },
      { oauth2: ['crm.objects.custom.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.goals.write'] },
      { oauth2: ['crm.objects.line_items.write'] },
      { oauth2: ['crm.objects.contacts.write'] },
      { oauth2: ['crm.objects.goals.read'] },
      { oauth2: ['crm.objects.line_items.read'] },
      { oauth2: ['crm.objects.projects.sensitive.write'] },
      { oauth2: ['crm.objects.deals.sensitive.read.v2'] },
      { oauth2: ['crm.objects.quotes.write'] },
      { oauth2: ['crm.schemas.contacts.read'] },
      { oauth2: ['tickets.highly_sensitive.v2'] },
      { oauth2: ['crm.objects.leads.read'] },
      { oauth2: ['crm.objects.leads.write'] },
      { oauth2: ['crm.schemas.tasks.read'] },
      { oauth2: ['crm.objects.emails.read'] },
      { oauth2: ['crm.schemas.invoices.read'] },
      { oauth2: ['crm.objects.quotes.read'] },
      { oauth2: ['crm.objects.notes.read'] },
      { oauth2: ['crm.objects.courses.read'] },
      { oauth2: ['crm.objects.marketing_events.read'] },
      { oauth2: ['crm.pipelines.orders.read'] },
      { oauth2: ['crm.objects.contacts.sensitive.read.v2'] },
      { oauth2: ['crm.schemas.projects.read'] },
      { oauth2: ['crm.objects.orders.read'] },
      { oauth2: ['automation'] },
      { oauth2: ['crm.objects.companies.write'] },
      { oauth2: ['crm.schemas.carts.read'] },
      { oauth2: ['cpq.quotes.write'] },
      { oauth2: ['crm.schemas.listings.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.read.v2'] },
      { oauth2: ['crm.objects.contacts.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.commercepayments.write'] },
      { oauth2: ['crm.objects.invoices.write'] },
      { oauth2: ['crm.objects.custom.sensitive.read.v2'] },
      { oauth2: ['crm.objects.users.read'] },
      { oauth2: ['crm.objects.appointments.write'] },
      { oauth2: ['crm.objects.deals.sensitive.write.v2'] },
      { oauth2: ['cpq.quotes.read'] },
      { oauth2: ['crm.objects.appointments.sensitive.write.v2'] },
      { oauth2: ['crm.objects.projects.highly_sensitive.read'] },
      { oauth2: ['crm.schemas.appointments.read'] },
      { oauth2: ['crm.objects.custom.write'] },
      { oauth2: ['tickets.sensitive.v2'] },
      { oauth2: ['crm.objects.appointments.read'] },
      { oauth2: ['crm.schemas.courses.read'] },
      { oauth2: ['crm.objects.companies.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.deals.highly_sensitive.write.v2'] },
      { oauth2: ['crm.objects.projects.sensitive.read'] },
      { oauth2: ['crm.pipelines.approval.read'] },
      { oauth2: ['crm.objects.projects.write'] },
      { oauth2: ['crm.objects.marketing_events.write'] },
      { oauth2: ['crm.schemas.custom.read'] },
      { oauth2: ['crm.objects.carts.read'] },
      { oauth2: ['crm.objects.courses.write'] },
      { oauth2: ['crm.schemas.commercepayments.read'] },
      { oauth2: ['crm.objects.listings.read'] },
    ],
  })

export const putCrmPropertyValidations202609ObjectTypeIdPropertyNameRuleTypeRuleTypeRoute =
  createRoute({
    method: 'put',
    path: '/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}',
    tags: ['Basic'],
    summary:
      'Update a validation rule for a specific property and rule type, allowing customization of property value constraints.',
    description:
      'Update a specific validation rule for a property identified by its name and rule type.',
    operationId:
      'put-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}_/crm/v3/property-validations/{objectTypeId}/{propertyName}/rule-type/{ruleType}',
    request: {
      params: z.object({
        objectTypeId: z
          .string()
          .openapi({
            param: {
              name: 'objectTypeId',
              in: 'path',
              description:
                'The unique identifier of the CRM object type to which the property belongs.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        propertyName: z
          .string()
          .openapi({
            param: {
              name: 'propertyName',
              in: 'path',
              description:
                'The name of the property for which the validation rule is being updated.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        ruleType: z
          .enum([
            'AFTER_DATETIME_DURATION',
            'AFTER_DURATION',
            'ALPHANUMERIC',
            'BEFORE_DATETIME_DURATION',
            'BEFORE_DURATION',
            'DAYS_OF_WEEK',
            'DECIMAL',
            'DOMAIN',
            'EMAIL',
            'EMAIL_ALLOWED_DOMAINS',
            'EMAIL_BLOCKED_DOMAINS',
            'END_DATE',
            'END_DATETIME',
            'FORMAT',
            'MAX_LENGTH',
            'MAX_NUMBER',
            'MIN_LENGTH',
            'MIN_NUMBER',
            'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE',
            'REGEX',
            'SPECIAL_CHARACTERS',
            'START_DATE',
            'START_DATETIME',
            'URL',
            'URL_ALLOWED_DOMAINS',
            'URL_BLOCKED_DOMAINS',
            'WHITESPACE',
          ])
          .openapi({
            param: {
              name: 'ruleType',
              in: 'path',
              description:
                'The type of validation rule to update. Valid values include FORMAT, ALPHANUMERIC, MAX_LENGTH, MIN_LENGTH, MIN_NUMBER, MAX_NUMBER, START_DATE, END_DATE, SPECIAL_CHARACTERS, WHITESPACE, DECIMAL, BEFORE_DURATION, AFTER_DURATION, DAYS_OF_WEEK, REGEX, START_DATETIME, END_DATETIME, BEFORE_DATETIME_DURATION, AFTER_DATETIME_DURATION, PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE, URL, URL_ALLOWED_DOMAINS, URL_BLOCKED_DOMAINS, EMAIL, EMAIL_ALLOWED_DOMAINS, EMAIL_BLOCKED_DOMAINS, DOMAIN.',
              required: true,
              style: 'simple',
              explode: false,
              schema: {
                type: 'string',
                example: null,
                enum: [
                  'AFTER_DATETIME_DURATION',
                  'AFTER_DURATION',
                  'ALPHANUMERIC',
                  'BEFORE_DATETIME_DURATION',
                  'BEFORE_DURATION',
                  'DAYS_OF_WEEK',
                  'DECIMAL',
                  'DOMAIN',
                  'EMAIL',
                  'EMAIL_ALLOWED_DOMAINS',
                  'EMAIL_BLOCKED_DOMAINS',
                  'END_DATE',
                  'END_DATETIME',
                  'FORMAT',
                  'MAX_LENGTH',
                  'MAX_NUMBER',
                  'MIN_LENGTH',
                  'MIN_NUMBER',
                  'PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE',
                  'REGEX',
                  'SPECIAL_CHARACTERS',
                  'START_DATE',
                  'START_DATETIME',
                  'URL',
                  'URL_ALLOWED_DOMAINS',
                  'URL_BLOCKED_DOMAINS',
                  'WHITESPACE',
                ],
              },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': { schema: PublicPropertyValidationRuleUpdateSchema, example: null },
        },
        required: true,
      },
    },
    responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
    security: [
      { oauth2: ['crm.schemas.quotes.write'] },
      { oauth2: ['crm.schemas.invoices.write'] },
      { oauth2: ['crm.schemas.orders.write'] },
      { oauth2: ['crm.schemas.commercepayments.write'] },
      { oauth2: ['crm.schemas.courses.write'] },
      { oauth2: ['tickets.sensitive.v2'] },
      { oauth2: ['e-commerce'] },
      { oauth2: ['crm.schemas.appointments.write'] },
      { oauth2: ['crm.schemas.tasks.write'] },
      { oauth2: ['crm.schemas.contacts.write'] },
      { oauth2: ['crm.schemas.carts.write'] },
      { oauth2: ['crm.schemas.companies.write'] },
      { oauth2: ['crm.objects.tickets.sensitive.write'] },
      { oauth2: ['crm.schemas.subscriptions.write'] },
      { oauth2: ['crm.schemas.emails.write'] },
      { oauth2: ['crm.schemas.custom.write'] },
      { oauth2: ['crm.schemas.listings.write'] },
      { oauth2: ['crm.pipelines.orders.write'] },
      { oauth2: ['crm.objects.users.write'] },
      { oauth2: ['tickets.highly_sensitive.v2'] },
      { oauth2: ['crm.schemas.services.write'] },
      { oauth2: ['crm.schemas.notes.write'] },
      { oauth2: ['crm.objects.orders.write'] },
      { oauth2: ['crm.schemas.meetings.write'] },
      { oauth2: ['crm.schemas.deals.write'] },
      { oauth2: ['crm.schemas.calls.write'] },
      { oauth2: ['crm.objects.carts.write'] },
      { oauth2: ['crm.objects.tickets.highly_sensitive.write'] },
    ],
  })
