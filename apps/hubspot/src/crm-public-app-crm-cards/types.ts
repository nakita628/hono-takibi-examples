type ActionConfirmationBody = {
  cancelButtonLabel: string
  confirmButtonLabel: string
  prompt: string
}
type ActionHookActionBody = {
  confirmation?: ActionConfirmationBody | undefined
  httpMethod: 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE'
  label?: string | undefined
  propertyNamesIncluded: string[]
  type: 'ACTION_HOOK'
  url: string
}
type IFrameActionBody = {
  height: number
  label?: string | undefined
  propertyNamesIncluded: string[]
  type: 'IFRAME'
  url: string
  width: number
}
type ObjectToken = {
  dataType?:
    | 'BOOLEAN'
    | 'CURRENCY'
    | 'DATE'
    | 'DATETIME'
    | 'EMAIL'
    | 'LINK'
    | 'NUMERIC'
    | 'STATUS'
    | 'STRING'
    | undefined
  label?: string | undefined
  name?: string | undefined
  value: string
}
type IntegratorObjectResult = {
  actions: (ActionHookActionBody | IFrameActionBody)[]
  id: string
  linkUrl?: string | undefined
  title: string
  tokens: ObjectToken[]
}
type TopLevelActions = {
  primary?: ActionHookActionBody | IFrameActionBody | undefined
  secondary: (ActionHookActionBody | IFrameActionBody)[]
  settings?: IFrameActionBody | undefined
}
type IntegratorCardPayloadResponse = {
  allItemsLinkUrl?: string | undefined
  cardLabel?: string | undefined
  responseVersion: 'v1' | 'v3'
  sections: IntegratorObjectResult[]
  topLevelActions?: TopLevelActions | undefined
  totalCount: number
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type CardActions = { baseUrls: string[] }
type CardAuditResponse = {
  actionType: 'CREATE' | 'DELETE' | 'UPDATE'
  applicationId: number
  authSource: 'APP' | 'EXTERNAL' | 'INTERNAL'
  changedAt: bigint
  initiatingUserId: number
  objectTypeId: bigint
}
type DisplayOption = {
  label: string
  name: string
  type: 'DANGER' | 'DEFAULT' | 'INFO' | 'SUCCESS' | 'WARNING'
}
type CardDisplayProperty = {
  dataType:
    | 'BOOLEAN'
    | 'CURRENCY'
    | 'DATE'
    | 'DATETIME'
    | 'EMAIL'
    | 'LINK'
    | 'NUMERIC'
    | 'STATUS'
    | 'STRING'
  label: string
  name: string
  options: DisplayOption[]
}
type CardDisplayBody = { properties: CardDisplayProperty[] }
type CardObjectTypeBody = {
  name: 'companies' | 'contacts' | 'deals' | 'marketing_events' | 'tickets'
  propertiesToSend: string[]
}
type PublicCardFetchBody = { objectTypes: CardObjectTypeBody[]; targetUrl: string }
type PublicCardResponse = {
  actions: CardActions
  auditHistory: CardAuditResponse[]
  createdAt?: string | undefined
  display: CardDisplayBody
  fetch: PublicCardFetchBody
  id: string
  title: string
  updatedAt?: string | undefined
}
type PublicCardListResponse = { results: PublicCardResponse[] }
type CardFetchBody = {
  cardType: 'EXTERNAL' | 'SERVERLESS'
  objectTypes: CardObjectTypeBody[]
  serverlessFunction?: string | undefined
  targetUrl: string
}
type CardCreateRequest = {
  actions: CardActions
  display: CardDisplayBody
  fetch: CardFetchBody
  title: string
}
type CardMigrateViewsRequest = {
  allowDuplicateAppCardIds: boolean
  appCardId: bigint
  helpdeskAppCardId?: bigint | undefined
  legacyCrmCardId: bigint
  tabAppCardId?: bigint | undefined
}
type CardMigrateViewsResponse = {
  endedAt?: bigint | undefined
  message: string
  remainingPortalCount?: bigint | undefined
  startedAt?: bigint | undefined
  totalPortalCount?: bigint | undefined
}
type CardFetchBodyPatch = {
  cardType?: 'EXTERNAL' | 'SERVERLESS' | undefined
  objectTypes: CardObjectTypeBody[]
  serverlessFunction?: string | undefined
  targetUrl?: string | undefined
}
type CardPatchRequest = {
  actions?: CardActions | undefined
  display?: CardDisplayBody | undefined
  fetch?: CardFetchBodyPatch | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crm/extensions/cards-dev/2026-09/sample-response': {
      $get:
        | { input: {}; output: IntegratorCardPayloadResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/crm/extensions/cards-dev/2026-09/:appId': {
      $get:
        | {
            input: { param: { appId: number } }
            output: PublicCardListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: number } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: number } } & { json: CardCreateRequest }
            output: PublicCardResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { appId: number } } & { json: CardCreateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/cards-dev/2026-09/:appId/views/migrate': {
      $post:
        | {
            input: { param: { appId: number } } & { json: CardMigrateViewsRequest }
            output: CardMigrateViewsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } } & { json: CardMigrateViewsRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/crm/extensions/cards-dev/2026-09/:appId/:cardId': {
      $get:
        | {
            input: { param: { appId: number; cardId: string } }
            output: PublicCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; cardId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { appId: number; cardId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { appId: number; cardId: string } } & { json: CardPatchRequest }
            output: PublicCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number; cardId: string } } & { json: CardPatchRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
