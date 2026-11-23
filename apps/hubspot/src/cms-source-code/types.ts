type FileExtractRequest = { path: string }
type TaskLocator = { id: string; links?: { [x: string]: string } | undefined }
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
type ActionResponse = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type AssetFileMetadata = {
  archivedAt?: bigint | undefined
  children?: string[] | undefined
  createdAt: bigint
  folder: boolean
  hash?: string | undefined
  id: string
  name: string
  updatedAt: bigint
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cms/source-code/2026-09/extract/async': {
      $post:
        | {
            input: { json: FileExtractRequest }
            output: TaskLocator
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: FileExtractRequest }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/cms/source-code/2026-09/extract/async/tasks/:taskId/status': {
      $get:
        | {
            input: { param: { taskId: number } }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: number } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/cms/source-code/2026-09/:environment/content/:path': {
      $get: {
        input: { param: { environment: string; path: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $put:
        | {
            input: { param: { environment: string; path: string } } & {
              form: { file?: File | undefined }
            }
            output: AssetFileMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment: string; path: string } } & {
              form: { file?: File | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { environment: string; path: string } } & {
              form: { file?: File | undefined }
            }
            output: AssetFileMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment: string; path: string } } & {
              form: { file?: File | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { environment: string; path: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/cms/source-code/2026-09/:environment/metadata/:path': {
      $get:
        | {
            input: { param: { environment: string; path: string } } & {
              query: { properties?: string | undefined }
            }
            output: AssetFileMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environment: string; path: string } } & {
              query: { properties?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/cms/source-code/2026-09/:environment/validate/:path': {
      $post: {
        input: { param: { environment: string; path: string } } & {
          form: { file?: File | undefined }
        }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
