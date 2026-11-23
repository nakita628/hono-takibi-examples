type Task = {
  completed?: string | undefined
  deleted?: boolean | undefined
  due?: string | undefined
  etag?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  links?:
    | { description?: string | undefined; link?: string | undefined; type?: string | undefined }[]
    | undefined
  notes?: string | undefined
  parent?: string | undefined
  position?: string | undefined
  selfLink?: string | undefined
  status?: string | undefined
  title?: string | undefined
  updated?: string | undefined
}
type Tasks = {
  etag?: string | undefined
  items?: Task[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type TaskList = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  selfLink?: string | undefined
  title?: string | undefined
  updated?: string | undefined
}
type TaskLists = {
  etag?: string | undefined
  items?: TaskList[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/tasks/v1/lists/:tasklist/clear': {
      $post: {
        input: { param: { tasklist: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tasks/v1/lists/:tasklist/tasks': {
      $get: {
        input: { param: { tasklist: string } } & {
          query: {
            completedMax?: string | undefined
            completedMin?: string | undefined
            dueMax?: string | undefined
            dueMin?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            showCompleted?: boolean | undefined
            showDeleted?: boolean | undefined
            showHidden?: boolean | undefined
            updatedMin?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Tasks
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { tasklist: string } } & {
          query: {
            parent?: string | undefined
            previous?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Task }
        output: Task
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/v1/lists/:tasklist/tasks/:task': {
      $delete: {
        input: { param: { tasklist: string; task: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { tasklist: string; task: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Task
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { tasklist: string; task: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Task }
        output: Task
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { tasklist: string; task: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Task }
        output: Task
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/v1/lists/:tasklist/tasks/:task/move': {
      $post: {
        input: { param: { tasklist: string; task: string } } & {
          query: {
            parent?: string | undefined
            previous?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Task
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/v1/users/@me/lists': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TaskLists
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TaskList }
        output: TaskList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tasks/v1/users/@me/lists/:tasklist': {
      $delete: {
        input: { param: { tasklist: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { tasklist: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TaskList
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { tasklist: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TaskList }
        output: TaskList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { tasklist: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TaskList }
        output: TaskList
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
