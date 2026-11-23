type Empty = { [x: string]: unknown }
type Author = {
  displayName?: string | undefined
  profilePhotoUri?: string | undefined
  type?: 'AUTHOR_TYPE_UNSPECIFIED' | 'REGULAR_USER' | 'LOCAL_GUIDE' | 'MERCHANT' | undefined
}
type Answer = {
  author?: Author | undefined
  createTime?: string | undefined
  name?: string | undefined
  text?: string | undefined
  updateTime?: string | undefined
  upvoteCount?: number | undefined
}
type Question = {
  author?: Author | undefined
  createTime?: string | undefined
  name?: string | undefined
  text?: string | undefined
  topAnswers?: Answer[] | undefined
  totalAnswerCount?: number | undefined
  updateTime?: string | undefined
  upvoteCount?: number | undefined
}
type ListQuestionsResponse = {
  nextPageToken?: string | undefined
  questions?: Question[] | undefined
  totalSize?: number | undefined
}
type ListAnswersResponse = {
  answers?: Answer[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type UpsertAnswerRequest = { answer?: Answer | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Question }
        output: Question
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/answers:delete': {
      $delete: {
        input: { param: { name: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            answersPerQuestion?: number | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
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
        output: ListQuestionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Question }
        output: Question
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/answers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            orderBy?: string | undefined
            pageSize?: number | undefined
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
        output: ListAnswersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/answers:upsert': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: UpsertAnswerRequest }
        output: Answer
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
