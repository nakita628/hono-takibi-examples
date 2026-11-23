type Assignee = { email: string; id: string | null; name: string | null }
type Follower = { email: string; id: string | null; name: string | null }
type Target = { id: string; type: string; url: string }
type NewTaskRequest = {
  assignee: Assignee
  context: string
  description: string
  domain: string
  dueDate: string
  followers: Follower[]
  name: string
  parentTaskId: string | null
  priority: string
  surrogateKey: string
  target: Target[]
}
type EditTaskRequest = { status: string }
type AddCommentRequest = { text: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/notes': {
      $get: {
        input: {
          query: {
            'target.id': string
            perPage?: number | undefined
            page?: number | undefined
            reason?: string | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            description: string
            domain: string
            target: { id?: string | undefined; type?: string | undefined; url?: string | undefined }
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notes/:noteId': {
      $get: {
        input: { param: { noteId: string } } & { query: { reason?: string | undefined } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks': {
      $get: {
        input: {
          query: {
            'assignee.email'?: string | undefined
            'target.id'?: string | undefined
            context?: string | undefined
            page?: string | undefined
            perPage?: string | undefined
            status?: string | undefined
          }
        } & { header: { Accept: string; 'Content-Type': string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: NewTaskRequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId': {
      $get: {
        input: { param: { taskId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { taskId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: EditTaskRequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/:taskId/comments': {
      $post: {
        input: { param: { taskId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: AddCommentRequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
