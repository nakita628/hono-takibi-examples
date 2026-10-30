import { createRoute, z } from '@hono/zod-openapi'

const ActionConfirmationBodySchema = z
  .object({
    cancelButtonLabel: z
      .string()
      .openapi({ description: 'The label for the button that cancels the action.', example: null }),
    confirmButtonLabel: z
      .string()
      .openapi({
        description: 'The label for the button that confirms the action.',
        example: null,
      }),
    prompt: z
      .string()
      .openapi({
        description: 'The message displayed to the user to confirm the action.',
        example: null,
      }),
  })
  .openapi({ required: ['cancelButtonLabel', 'confirmButtonLabel', 'prompt'], example: null })
  .openapi('ActionConfirmationBody')

const ActionHookActionBodySchema = z
  .object({
    confirmation: ActionConfirmationBodySchema.exactOptional(),
    httpMethod: z
      .enum(['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'])
      .openapi({
        description:
          'The HTTP method to be used when making the call, which can be set to GET, POST, PUT, DELETE, or PATCH. If using GET or DELETE',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The label for this property as you'd like it displayed to users.",
        example: null,
      }),
    propertyNamesIncluded: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'A list of property names that will be included on the action. See the documentation for more information',
        example: null,
      }),
    type: z
      .literal('ACTION_HOOK')
      .default('ACTION_HOOK')
      .openapi({ description: 'The type of status.', example: null }),
    url: z
      .string()
      .openapi({
        description: 'The URL endpoint that will be called when the action is triggered.',
        example: null,
      }),
  })
  .openapi({
    title: 'ACTION_HOOK',
    required: ['httpMethod', 'propertyNamesIncluded', 'type', 'url'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ActionHookActionBody')

const CardActionsSchema = z
  .object({
    baseUrls: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "A list of URL prefixes that will be accepted for card action URLs. If your data fetch response includes an action URL that doesn't begin with one of these values, it will result in an error and the card will not be displayed.",
        example: null,
      }),
  })
  .openapi({ required: ['baseUrls'], example: null })
  .openapi('CardActions')

const CardAuditResponseSchema = z
  .object({
    actionType: z
      .enum(['CREATE', 'DELETE', 'UPDATE'])
      .openapi({
        description: 'The type of action performed, with possible values: CREATE, DELETE, UPDATE.',
        example: null,
      }),
    applicationId: z
      .int32()
      .openapi({
        description: 'The ID of the application associated with the card.',
        example: null,
      }),
    authSource: z
      .enum(['APP', 'EXTERNAL', 'INTERNAL'])
      .openapi({
        description:
          'The source of authentication for the action, with possible values: APP, EXTERNAL, INTERNAL.',
        example: null,
      }),
    changedAt: z
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
        description: 'The timestamp indicating when the change occurred.',
        example: null,
      }),
    initiatingUserId: z
      .int32()
      .openapi({ description: 'The ID of the user who initiated the action.', example: null }),
    objectTypeId: z
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
        description: 'The ID of the card.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'actionType',
      'applicationId',
      'authSource',
      'changedAt',
      'initiatingUserId',
      'objectTypeId',
    ],
    example: null,
  })
  .openapi('CardAuditResponse')

const DisplayOptionSchema = z
  .object({
    label: z
      .string()
      .openapi({
        description: 'The text that will be displayed to users for this option.',
        example: null,
      }),
    name: z
      .string()
      .openapi({ description: 'JSON-friendly unique name for option.', example: null }),
    type: z
      .enum(['DANGER', 'DEFAULT', 'INFO', 'SUCCESS', 'WARNING'])
      .openapi({ description: 'The type of status.', example: null }),
  })
  .openapi({ required: ['label', 'name', 'type'], example: null })
  .openapi('DisplayOption')

const CardDisplayPropertySchema = z
  .object({
    dataType: z
      .enum([
        'BOOLEAN',
        'CURRENCY',
        'DATE',
        'DATETIME',
        'EMAIL',
        'LINK',
        'NUMERIC',
        'STATUS',
        'STRING',
      ])
      .openapi({ description: 'Type of data represented by this property.', example: null }),
    label: z
      .string()
      .openapi({
        description: "The label for this property as you'd like it displayed to users.",
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'An internal identifier for this property. This value must be unique TODO.',
        example: null,
      }),
    options: z
      .array(DisplayOptionSchema)
      .openapi({
        description:
          'An array of available options that can be displayed. Only used in when `dataType` is `STATUS`.',
        example: null,
      }),
  })
  .openapi({ required: ['dataType', 'label', 'name', 'options'], example: null })
  .openapi('CardDisplayProperty')

const CardDisplayBodySchema = z
  .object({
    properties: z
      .array(CardDisplayPropertySchema)
      .openapi({
        description:
          'Card display properties. These will will be rendered as "label : value" pairs in the card UI. See the [example card](#) in the overview docs for more details.',
        example: null,
      }),
  })
  .openapi({ required: ['properties'], example: null })
  .openapi('CardDisplayBody')

const CardObjectTypeBodySchema = z
  .object({
    name: z
      .enum(['companies', 'contacts', 'deals', 'marketing_events', 'tickets'])
      .openapi({
        description: 'A CRM object type where this card should be displayed.',
        example: null,
      }),
    propertiesToSend: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          "An array of properties that should be sent to this card's target URL when the data fetch request is made. Must be valid properties for the corresponding CRM object type.",
        example: null,
      }),
  })
  .openapi({ required: ['name', 'propertiesToSend'], example: null })
  .openapi('CardObjectTypeBody')

const CardFetchBodySchema = z
  .object({
    cardType: z
      .enum(['EXTERNAL', 'SERVERLESS'])
      .openapi({
        description: 'A deprecated field to determine the type of card returned.',
        example: null,
      }),
    objectTypes: z
      .array(CardObjectTypeBodySchema)
      .openapi({
        description:
          'An array of CRM object types where this card should be displayed. HubSpot will call your data fetch URL whenever a user visits a record page of the types defined here.',
        example: null,
      }),
    serverlessFunction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A deprecated field to specify serverless functionality with the card',
        example: null,
      }),
    targetUrl: z
      .string()
      .openapi({
        description:
          'URL to a service endpoints that will respond with card details. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.',
        example: null,
      }),
  })
  .openapi({ required: ['cardType', 'objectTypes', 'targetUrl'], example: null })
  .openapi('CardFetchBody')

const CardCreateRequestSchema = z
  .object({
    actions: CardActionsSchema,
    display: CardDisplayBodySchema,
    fetch: CardFetchBodySchema,
    title: z
      .string()
      .openapi({
        description: 'The top-level title for this card. Displayed to users in the CRM UI.',
        example: null,
      }),
  })
  .openapi({ required: ['actions', 'display', 'fetch', 'title'], example: null })
  .openapi('CardCreateRequest')

const CardFetchBodyPatchSchema = z
  .object({
    cardType: z
      .enum(['EXTERNAL', 'SERVERLESS'])
      .exactOptional()
      .openapi({
        description: 'A deprecated field to determine the type of card returned.',
        example: null,
      }),
    objectTypes: z
      .array(CardObjectTypeBodySchema)
      .openapi({
        description:
          'An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.',
        example: null,
      }),
    serverlessFunction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A deprecated field to specify serverless functionality with the card',
        example: null,
      }),
    targetUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.',
        example: null,
      }),
  })
  .openapi({ required: ['objectTypes'], example: null })
  .openapi('CardFetchBodyPatch')

const CardMigrateViewsRequestSchema = z
  .object({
    allowDuplicateAppCardIds: z
      .boolean()
      .openapi({
        description:
          'A boolean flag indicating whether duplicate app card IDs are allowed during the migration process.',
        example: null,
      }),
    appCardId: z
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
        description:
          'The unique identifier for the new app card to which views will be migrated. This is an integer in int64 format.',
        example: null,
      }),
    helpdeskAppCardId: z
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
        description:
          'The unique identifier for the helpdesk app card, if applicable. This is an integer in int64 format.',
        example: null,
      }),
    legacyCrmCardId: z
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
        description:
          'The unique identifier for the legacy CRM card. This is an integer in int64 format.',
        example: null,
      }),
    tabAppCardId: z
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
      .openapi({ type: 'integer', format: 'int64', example: null }),
  })
  .openapi({
    required: ['allowDuplicateAppCardIds', 'appCardId', 'legacyCrmCardId'],
    example: null,
  })
  .openapi('CardMigrateViewsRequest')

const CardMigrateViewsResponseSchema = z
  .object({
    endedAt: z
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
        description: 'The timestamp for when the migration ended.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A human readable message describing the progress of the migration.',
        example: null,
      }),
    remainingPortalCount: z
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
        description:
          'The number of portals that remain to be swapped from the Legacy CRM Card to the App Card',
        example: null,
      }),
    startedAt: z
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
        description: 'The timestamp for when the migration started.',
        example: null,
      }),
    totalPortalCount: z
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
        description: 'The total number of portals that have access to the Legacy CRM Card',
        example: null,
      }),
  })
  .openapi({ required: ['message'], example: null })
  .openapi('CardMigrateViewsResponse')

const CardPatchRequestSchema = z
  .object({
    actions: CardActionsSchema.exactOptional(),
    display: CardDisplayBodySchema.exactOptional(),
    fetch: CardFetchBodyPatchSchema.exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The top-level title for this card. Displayed to users in the CRM UI.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('CardPatchRequest')

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

const IFrameActionBodySchema = z
  .object({
    height: z
      .int32()
      .openapi({ description: 'The height of the iframe in pixels.', example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The label for this property as you'd like it displayed to users.",
        example: null,
      }),
    propertyNamesIncluded: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'A list of property names that will be included on the url of the iframe.',
        example: null,
      }),
    type: z
      .literal('IFRAME')
      .default('IFRAME')
      .openapi({ description: 'The type of status.', example: null }),
    url: z
      .string()
      .openapi({
        description: 'The URL endpoint that will be loaded in the iframe when triggered.',
        example: null,
      }),
    width: z.int32().openapi({ description: 'The width of the iframe in pixels.', example: null }),
  })
  .openapi({
    title: 'IFRAME',
    required: ['height', 'propertyNamesIncluded', 'type', 'url', 'width'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('IFrameActionBody')

const ObjectTokenSchema = z
  .object({
    dataType: z
      .enum([
        'BOOLEAN',
        'CURRENCY',
        'DATE',
        'DATETIME',
        'EMAIL',
        'LINK',
        'NUMERIC',
        'STATUS',
        'STRING',
      ])
      .exactOptional()
      .openapi({ description: 'Type of data represented by this property.', example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: "The label for this property as you'd like it displayed to users.",
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An internal identifier for this property. This value must be unique TODO.',
        example: null,
      }),
    value: z.string().openapi({ description: 'The value of the property', example: null }),
  })
  .openapi({ required: ['value'], example: null })
  .openapi('ObjectToken')

const IntegratorObjectResultSchema = z
  .object({
    actions: z
      .array(z.xor([ActionHookActionBodySchema, IFrameActionBodySchema]).openapi({ example: null }))
      .openapi({
        description:
          'A list of actions associated with the card, which can include action hooks, confirmation action hooks, or iframes.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The unique identifier for the card.', example: null }),
    linkUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL used on the title of the card', example: null }),
    title: z
      .string()
      .openapi({
        description: 'The top-level title for this card. Displayed to users in the CRM UI.',
        example: null,
      }),
    tokens: z
      .array(ObjectTokenSchema)
      .openapi({
        description: 'A collection of tokens representing specific properties related to the card.',
        example: null,
      }),
  })
  .openapi({ required: ['actions', 'id', 'title', 'tokens'], example: null })
  .openapi('IntegratorObjectResult')

const TopLevelActionsSchema = z
  .object({
    primary: z
      .xor([ActionHookActionBodySchema, IFrameActionBodySchema])
      .exactOptional()
      .openapi({
        description:
          'Defines the primary action for a card, which can be either an action hook or an iframe.',
        example: null,
      }),
    secondary: z
      .array(z.xor([ActionHookActionBodySchema, IFrameActionBodySchema]).openapi({ example: null }))
      .openapi({
        description:
          'Specifies a list of secondary actions for a card, each of which can be an action hook or an iframe.',
        example: null,
      }),
    settings: IFrameActionBodySchema.exactOptional(),
  })
  .openapi({ required: ['secondary'], example: null })
  .openapi('TopLevelActions')

const IntegratorCardPayloadResponseSchema = z
  .object({
    allItemsLinkUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`.',
        example: null,
      }),
    cardLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title.",
        example: null,
      }),
    responseVersion: z
      .enum(['v1', 'v3'])
      .openapi({ description: 'The number version of the response.', example: null }),
    sections: z
      .array(IntegratorObjectResultSchema)
      .openapi({ description: 'A list of up to five valid card sub categories.', example: null }),
    topLevelActions: TopLevelActionsSchema.exactOptional(),
    totalCount: z
      .int32()
      .openapi({
        description: 'The total number of card properties that will be sent in this response.',
        example: null,
      }),
  })
  .openapi({ required: ['responseVersion', 'sections', 'totalCount'], example: null })
  .openapi('IntegratorCardPayloadResponse')

const PublicCardFetchBodySchema = z
  .object({
    objectTypes: z
      .array(CardObjectTypeBodySchema)
      .openapi({
        description:
          'An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.',
        example: null,
      }),
    targetUrl: z
      .string()
      .openapi({
        description:
          'URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.',
        example: null,
      }),
  })
  .openapi({ required: ['objectTypes', 'targetUrl'], example: null })
  .openapi('PublicCardFetchBody')

const PublicCardResponseSchema = z
  .object({
    actions: CardActionsSchema,
    auditHistory: z
      .array(CardAuditResponseSchema)
      .openapi({
        description:
          'A list of actions performed on the card, including creation, deletion, and updates.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the card was created.', example: null }),
    display: CardDisplayBodySchema,
    fetch: PublicCardFetchBodySchema,
    id: z.string().openapi({ description: 'The unique id of the card.', example: null }),
    title: z
      .string()
      .openapi({
        description: 'The top-level title for this card. Displayed to users in the CRM UI.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the card was last updated.', example: null }),
  })
  .openapi({
    required: ['actions', 'auditHistory', 'display', 'fetch', 'id', 'title'],
    example: null,
  })
  .openapi('PublicCardResponse')

const PublicCardListResponseSchema = z
  .object({
    results: z
      .array(PublicCardResponseSchema)
      .openapi({ description: 'A list of card responses', example: null }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('PublicCardListResponse')

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
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmExtensionsCardsDev202609SampleResponseRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/cards-dev/2026-09/sample-response',
  tags: ['Basic'],
  summary: 'Get sample card detail response',
  description:
    'Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.',
  operationId: 'get-/crm/extensions/cards-dev/2026-09/sample-response_getCardsSampleResponse',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: IntegratorCardPayloadResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
})

export const getCrmExtensionsCardsDev202609AppIdRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/cards-dev/2026-09/{appId}',
  tags: ['Basic'],
  summary: 'Get all cards',
  description: 'Returns a list of cards for a given app.',
  operationId: 'get-/crm/extensions/cards-dev/2026-09/{appId}_getAll',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which to retrieve the cards. It must be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCardListResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postCrmExtensionsCardsDev202609AppIdRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/cards-dev/2026-09/{appId}',
  tags: ['Basic'],
  summary: 'Create a new card',
  description:
    'Defines a new card that will become active on an account when this app is installed.',
  operationId: 'post-/crm/extensions/cards-dev/2026-09/{appId}_create',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app for which the card is being created. This is an integer value.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: CardCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCardResponseSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute = createRoute({
  method: 'post',
  path: '/crm/extensions/cards-dev/2026-09/{appId}/views/migrate',
  tags: ['Advanced'],
  summary: 'Migrate Card Views',
  description:
    'Swaps a Legacy CRM Card with an App Card in views. Reference the "Migrate a legacy CRM card to an app card" docs for more information',
  operationId:
    'post-/crm/extensions/cards-dev/2026-09/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app for which views are being migrated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: CardMigrateViewsRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CardMigrateViewsResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const getCrmExtensionsCardsDev202609AppIdCardIdRoute = createRoute({
  method: 'get',
  path: '/crm/extensions/cards-dev/2026-09/{appId}/{cardId}',
  tags: ['Basic'],
  summary: 'Get a card.',
  description: 'Returns the definition for a card with the given ID.',
  operationId: 'get-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_getById',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description:
              'The unique identifier of the app associated with the card. This should be an integer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      cardId: z
        .string()
        .openapi({
          param: {
            name: 'cardId',
            in: 'path',
            description: 'The unique identifier of the card to retrieve.',
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
      content: { 'application/json': { schema: PublicCardResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})

export const deleteCrmExtensionsCardsDev202609AppIdCardIdRoute = createRoute({
  method: 'delete',
  path: '/crm/extensions/cards-dev/2026-09/{appId}/{cardId}',
  tags: ['Basic'],
  summary: 'Delete a card',
  description:
    "Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.",
  operationId: 'delete-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_archive',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the application associated with the card.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      cardId: z
        .string()
        .openapi({
          param: {
            name: 'cardId',
            in: 'path',
            description: 'The unique identifier of the card to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ developer_hapikey: [] }],
})

export const patchCrmExtensionsCardsDev202609AppIdCardIdRoute = createRoute({
  method: 'patch',
  path: '/crm/extensions/cards-dev/2026-09/{appId}/{cardId}',
  tags: ['Basic'],
  summary: 'Update a card',
  description: 'Update a card definition with new details.',
  operationId: 'patch-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_update',
  request: {
    params: z.object({
      appId: z
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
            name: 'appId',
            in: 'path',
            description: 'The unique identifier of the app associated with the card.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      cardId: z
        .string()
        .openapi({
          param: {
            name: 'cardId',
            in: 'path',
            description: 'The unique identifier of the card to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: CardPatchRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCardResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ developer_hapikey: [] }],
})
