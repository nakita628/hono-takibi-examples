type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicAuditLog = {
  event: 'CREATED' | 'DELETED' | 'PUBLISHED' | 'RESTORE' | 'UNPUBLISHED' | 'UPDATED'
  fullName: string
  meta: { [x: string]: unknown }
  objectId: string
  objectName: string
  objectType:
    | 'BLOG'
    | 'BLOG_POST'
    | 'CASE_STUDY'
    | 'CONTENT_SETTINGS'
    | 'CSS'
    | 'CTA'
    | 'DOMAIN'
    | 'EMAIL'
    | 'FILE'
    | 'GLOBAL_MODULE'
    | 'HUBDB_TABLE'
    | 'JS'
    | 'KNOWLEDGE_BASE'
    | 'KNOWLEDGE_BASE_ARTICLE'
    | 'LANDING_PAGE'
    | 'MODULE'
    | 'PODCAST'
    | 'QUOTE'
    | 'SERVERLESS_FUNCTION'
    | 'TEMPLATE'
    | 'THEME'
    | 'URL_MAPPING'
    | 'WEB_INTERACTIVE'
    | 'WEBSITE_PAGE'
  timestamp: string
  userId: string
}
type CollectionResponsePublicAuditLog = { paging?: Paging | undefined; results: PublicAuditLog[] }
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
type CmsAuditLoggingExportFilters = { objectType: string[] }
type CmsAuditLoggingExportSettings = {
  email: string
  filters?: CmsAuditLoggingExportFilters | undefined
  format: 'CSV' | 'XLS' | 'XLSX'
  partition?: number | undefined
  portalId: number
  recipientUserIds: number[]
  shouldMarkExportFileAsSensitive: boolean
  type: string
  userId?: number | undefined
  userTimeZone?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cms/audit-logs/2026-09': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                eventType?: string[] | undefined
                limit?: number | undefined
                objectId?: string[] | undefined
                objectType?: string[] | undefined
                sort?: string[] | undefined
                userId?: string[] | undefined
              }
            }
            output: CollectionResponsePublicAuditLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                eventType?: string[] | undefined
                limit?: number | undefined
                objectId?: string[] | undefined
                objectType?: string[] | undefined
                sort?: string[] | undefined
                userId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/cms/audit-logs/2026-09/export': {
      $post: {
        input: { json: CmsAuditLoggingExportSettings }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
