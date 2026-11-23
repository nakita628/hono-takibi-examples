type ContentDisposition = {
  creationDate: string
  fileName: string
  modificationDate: string
  parameters: { [x: string]: string }
  readDate: string
  size: number
  type: string
}
type MediaType = {
  parameters: { [x: string]: string }
  subtype: string
  type: string
  wildcardSubtype: boolean
  wildcardType: boolean
}
type ParameterizedHeader = { parameters: { [x: string]: string }; value: string }
type MultiPart = {
  bodyParts: BodyPart[]
  contentDisposition: ContentDisposition
  entity: { [x: string]: unknown }
  headers: { [x: string]: string[] }
  mediaType: MediaType
  messageBodyWorkers: { [x: string]: unknown }
  parameterizedHeaders: { [x: string]: ParameterizedHeader[] }
  parent: MultiPart
  providers: { [x: string]: unknown }
}
type BodyPart = {
  contentDisposition: ContentDisposition
  entity: { [x: string]: unknown }
  headers: { [x: string]: string[] }
  mediaType: MediaType
  messageBodyWorkers: { [x: string]: unknown }
  parameterizedHeaders: { [x: string]: ParameterizedHeader[] }
  parent: MultiPart
  providers: { [x: string]: unknown }
}
type FormDataContentDisposition = {
  creationDate: string
  fileName: string
  modificationDate: string
  name: string
  parameters: { [x: string]: string }
  readDate: string
  size: number
  type: string
}
type FormDataBodyPart = {
  contentDisposition: ContentDisposition
  entity: { [x: string]: unknown }
  formDataContentDisposition: FormDataContentDisposition
  headers: { [x: string]: string[] }
  mediaType: MediaType
  messageBodyWorkers: { [x: string]: unknown }
  name: string
  parameterizedHeaders: { [x: string]: ParameterizedHeader[] }
  parent: MultiPart
  providers: { [x: string]: unknown }
  simple: boolean
  value: string
}
type FormDataMultiPart = {
  bodyParts: BodyPart[]
  contentDisposition: ContentDisposition
  entity: { [x: string]: unknown }
  fields: { [x: string]: FormDataBodyPart[] }
  headers: { [x: string]: string[] }
  mediaType: MediaType
  messageBodyWorkers: { [x: string]: unknown }
  parameterizedHeaders: { [x: string]: ParameterizedHeader[] }
  parent: MultiPart
  providers: { [x: string]: unknown }
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
type FileColumn = { name: string; type: string }
type DataSourceGetResponse = {
  columns: FileColumn[]
  createdAt: string
  datasourceId: bigint
  datasourceName: string
  datasourceType: 'FILE'
  lastIngestionStatus: 'FAILED' | 'IN_PROGRESS' | 'SUCCESSFUL'
}
type DataSourceUpdateResponse = {
  datasourceId: bigint
  datasourceName: string
  previewLink: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data-studio/data-source/2026-09': {
      $post: {
        input: { form: FormDataMultiPart }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/data-studio/data-source/2026-09/:datasourceId': {
      $get:
        | {
            input: { param: { datasourceId: bigint } }
            output: DataSourceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasourceId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { datasourceId: bigint } } & { form: FormDataMultiPart }
            output: DataSourceUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { datasourceId: bigint } } & { form: FormDataMultiPart }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { datasourceId: bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
