type NextPage = { after: string; link?: string | undefined }
type ForwardPaging = { next?: NextPage | undefined }
type PublicTemplate = {
  body?: string | undefined
  createdAt?: bigint | undefined
  folderId?: string | undefined
  id: string
  name?: string | undefined
  ownerId?: string | undefined
  subject?: string | undefined
  updatedAt?: bigint | undefined
}
type CollectionResponsePublicTemplateForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicTemplate[]
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
type PublicTemplateInput = {
  body: string
  folderId?: string | undefined
  name: string
  subject?: string | undefined
}
type PublicFolder = {
  createdAt?: bigint | undefined
  id: string
  name?: string | undefined
  updatedAt?: bigint | undefined
}
type CollectionResponsePublicFolderForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicFolder[]
}
type PublicTemplateUpdate = {
  body: { [x: string]: unknown }
  folderId: { [x: string]: unknown }
  name: { [x: string]: unknown }
  subject: { [x: string]: unknown }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/automation/email-templates/2026-09': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponsePublicTemplateForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PublicTemplateInput }
            output: PublicTemplate
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: PublicTemplateInput }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/automation/email-templates/2026-09/folders': {
      $get:
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: CollectionResponsePublicFolderForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/email-templates/2026-09/:templateId': {
      $get:
        | {
            input: { param: { templateId: bigint } }
            output: PublicTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { templateId: bigint } } & { json: PublicTemplateUpdate }
            output: PublicTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateId: bigint } } & { json: PublicTemplateUpdate }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
