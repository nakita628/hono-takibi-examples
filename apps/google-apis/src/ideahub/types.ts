type GoogleSearchIdeahubV1alphaTopic = {
  displayName?: string | undefined
  mid?: string | undefined
  name?: string | undefined
}
type GoogleSearchIdeahubV1alphaIdea = {
  name?: string | undefined
  text?: string | undefined
  topics?: GoogleSearchIdeahubV1alphaTopic[] | undefined
}
type GoogleSearchIdeahubV1alphaListIdeasResponse = {
  ideas?: GoogleSearchIdeahubV1alphaIdea[] | undefined
  nextPageToken?: string | undefined
}
type GoogleSearchIdeahubV1alphaTopicState = {
  dismissed?: boolean | undefined
  name?: string | undefined
  saved?: boolean | undefined
}
type GoogleSearchIdeahubV1alphaIdeaActivity = {
  ideas?: string[] | undefined
  name?: string | undefined
  topics?: string[] | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'POST_DRAFTED'
    | 'POST_PUBLISHED'
    | 'POST_DELETED'
    | 'POST_UNPUBLISHED'
    | undefined
  uri?: string | undefined
}
type GoogleSearchIdeahubV1alphaAvailableLocale = {
  locale?: string | undefined
  name?: string | undefined
}
type GoogleSearchIdeahubV1alphaListAvailableLocalesResponse = {
  availableLocales?: GoogleSearchIdeahubV1alphaAvailableLocale[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha/ideas': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            parent?: string | undefined
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
        output: GoogleSearchIdeahubV1alphaListIdeasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:name': {
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
        } & { json: GoogleSearchIdeahubV1alphaTopicState }
        output: GoogleSearchIdeahubV1alphaTopicState
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/ideaActivities': {
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
        } & { json: GoogleSearchIdeahubV1alphaIdeaActivity }
        output: GoogleSearchIdeahubV1alphaIdeaActivity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/ideas': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleSearchIdeahubV1alphaListIdeasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/locales': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
