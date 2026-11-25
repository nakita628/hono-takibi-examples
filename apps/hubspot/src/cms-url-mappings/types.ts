type UrlMapping = {
  cdnPurgeEmbargoTime: bigint
  contentGroupId: bigint
  cosObjectType:
    | 'ACCESS_GROUP_MEMBERSHIP'
    | 'APP_PAGE'
    | 'BLOCK'
    | 'BLOG'
    | 'BLOG_AUTHOR'
    | 'BRAND_BUSINESS_UNIT'
    | 'BRAND_SETTINGS'
    | 'CONTACT_MEMBERSHIP'
    | 'CONTENT'
    | 'CONTENT_EMBED'
    | 'CONTENT_FOLDER'
    | 'CONTENT_GROUP'
    | 'CRM_OBJECT'
    | 'CRM_OBJECT_TYPE'
    | 'CUSTOM_WIDGET'
    | 'CUSTOMER_PORTAL'
    | 'DATA_QUERY'
    | 'DESIGN_FOLDER'
    | 'DOMAIN'
    | 'DOMAIN_SETTINGS'
    | 'EMAIL_ADDRESS'
    | 'EXTENSION_RESOURCE'
    | 'FILE'
    | 'FOLDER'
    | 'FOLLOW_ME'
    | 'FORM'
    | 'GLOBAL_CONTENT'
    | 'GLOBAL_STYLES_THEME'
    | 'HUBDB_TABLE'
    | 'HUBDB_TABLE_ROW'
    | 'IMAGE'
    | 'JS_PROJECT_COMPONENT'
    | 'KNOWLEDGE_BASE'
    | 'KNOWLEDGE_CATEGORY'
    | 'KNOWLEDGE_CATEGORY_TRANSLATION'
    | 'KNOWLEDGE_HOMEPAGE_CATEGORY'
    | 'LAYOUT'
    | 'LAYOUT_SECTION'
    | 'LIST_MEMBERSHIP'
    | 'MARKETPLACE_LISTING'
    | 'PASSWORD_PROTECTED'
    | 'PAYMENT'
    | 'PERSONALIZATION_TOKEN'
    | 'PLACEMENT'
    | 'PROJECT'
    | 'QUOTE_TEMPLATE'
    | 'RAW_ASSET'
    | 'REDIRECT_URL'
    | 'SECTION'
    | 'SERVERLESS_FUNCTION'
    | 'SITE_MAP'
    | 'SITE_MENU'
    | 'SITE_SETTINGS'
    | 'STAGED_CONTENT'
    | 'SUBSCRIPTIONS_SETTINGS'
    | 'TAG'
    | 'THEME'
    | 'THEME_SETTINGS'
    | 'UNRESTRICTED_ACCESS'
    | 'URL_MAPPING'
    | 'VIDEO_PLAYER'
    | 'WIDGET'
    | 'WORKFLOW'
  created: bigint
  createdById: number
  deletedAt: bigint
  destination: string
  id: bigint
  internallyCreated: boolean
  isActive: boolean
  isMatchFullUrl: boolean
  isMatchQueryString: boolean
  isOnlyAfterNotFound: boolean
  isPattern: boolean
  isProtocolAgnostic: boolean
  isRegex: boolean
  isTrailingSlashOptional: boolean
  label: string
  lastUsedAt: bigint
  name: string
  note: string
  portalId: number
  precedence: number
  redirectStyle: number
  routePrefix: string
  updated: bigint
  updatedById: number
}
type UrlMappingInput = {
  cdnPurgeEmbargoTime: bigint
  contentGroupId: bigint
  cosObjectType:
    | 'ACCESS_GROUP_MEMBERSHIP'
    | 'APP_PAGE'
    | 'BLOCK'
    | 'BLOG'
    | 'BLOG_AUTHOR'
    | 'BRAND_BUSINESS_UNIT'
    | 'BRAND_SETTINGS'
    | 'CONTACT_MEMBERSHIP'
    | 'CONTENT'
    | 'CONTENT_EMBED'
    | 'CONTENT_FOLDER'
    | 'CONTENT_GROUP'
    | 'CRM_OBJECT'
    | 'CRM_OBJECT_TYPE'
    | 'CUSTOM_WIDGET'
    | 'CUSTOMER_PORTAL'
    | 'DATA_QUERY'
    | 'DESIGN_FOLDER'
    | 'DOMAIN'
    | 'DOMAIN_SETTINGS'
    | 'EMAIL_ADDRESS'
    | 'EXTENSION_RESOURCE'
    | 'FILE'
    | 'FOLDER'
    | 'FOLLOW_ME'
    | 'FORM'
    | 'GLOBAL_CONTENT'
    | 'GLOBAL_STYLES_THEME'
    | 'HUBDB_TABLE'
    | 'HUBDB_TABLE_ROW'
    | 'IMAGE'
    | 'JS_PROJECT_COMPONENT'
    | 'KNOWLEDGE_BASE'
    | 'KNOWLEDGE_CATEGORY'
    | 'KNOWLEDGE_CATEGORY_TRANSLATION'
    | 'KNOWLEDGE_HOMEPAGE_CATEGORY'
    | 'LAYOUT'
    | 'LAYOUT_SECTION'
    | 'LIST_MEMBERSHIP'
    | 'MARKETPLACE_LISTING'
    | 'PASSWORD_PROTECTED'
    | 'PAYMENT'
    | 'PERSONALIZATION_TOKEN'
    | 'PLACEMENT'
    | 'PROJECT'
    | 'QUOTE_TEMPLATE'
    | 'RAW_ASSET'
    | 'REDIRECT_URL'
    | 'SECTION'
    | 'SERVERLESS_FUNCTION'
    | 'SITE_MAP'
    | 'SITE_MENU'
    | 'SITE_SETTINGS'
    | 'STAGED_CONTENT'
    | 'SUBSCRIPTIONS_SETTINGS'
    | 'TAG'
    | 'THEME'
    | 'THEME_SETTINGS'
    | 'UNRESTRICTED_ACCESS'
    | 'URL_MAPPING'
    | 'VIDEO_PLAYER'
    | 'WIDGET'
    | 'WORKFLOW'
  created: bigint
  createdById: number
  deletedAt: bigint
  destination: string
  id: bigint
  internallyCreated: boolean
  isActive: boolean
  isMatchFullUrl: boolean
  isMatchQueryString: boolean
  isOnlyAfterNotFound: boolean
  isPattern: boolean
  isProtocolAgnostic: boolean
  isRegex: boolean
  isTrailingSlashOptional: boolean
  label: string
  lastUsedAt: bigint
  name: string
  note: string
  portalId: number
  precedence: number
  redirectStyle: number
  routePrefix: string
  updated: bigint
  updatedById: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/url-mappings/2026-09/url-mappings': {
      $get:
        | { input: {}; output: UrlMapping[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: UrlMappingInput }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/url-mappings/2026-09/url-mappings/:id': {
      $get:
        | {
            input: { param: { id: unknown } }
            output: UrlMapping
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: unknown } }; output: {}; outputFormat: string; status: 200 }
      $delete:
        | { input: { param: { id: unknown } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: unknown } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
