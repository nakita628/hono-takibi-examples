type SearchResponse = {
  status?: { timems?: {} | undefined; rid?: {} | undefined } | undefined
  hits?:
    | {
        found?: {} | undefined
        start?: {} | undefined
        cursor?: {} | undefined
        hit?: {} | undefined
      }
    | undefined
  facets?: {} | undefined
  stats?: {} | undefined
}
type SuggestResponse = {
  status?: { timems?: {} | undefined; rid?: {} | undefined } | undefined
  suggest?:
    | { query?: {} | undefined; found?: {} | undefined; suggestions?: {} | undefined }
    | undefined
}
type UploadDocumentsResponse = {
  status?: {} | undefined
  adds?: {} | undefined
  deletes?: {} | undefined
  warnings?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2013-01-01/search#format=sdk&pretty=true&q': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            expr?: string | undefined
            facet?: string | undefined
            fq?: string | undefined
            highlight?: string | undefined
            partial?: boolean | undefined
            q: string
            'q.options'?: string | undefined
            'q.parser'?: 'simple' | 'structured' | 'lucene' | 'dismax' | undefined
            return?: string | undefined
            size?: number | undefined
            sort?: string | undefined
            start?: number | undefined
            stats?: string | undefined
            format: 'sdk'
            pretty: 'true'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2013-01-01/suggest#format=sdk&pretty=true&q&suggester': {
      $get: {
        input: {
          query: {
            q: string
            suggester: string
            size?: number | undefined
            format: 'sdk'
            pretty: 'true'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SuggestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2013-01-01/documents/batch#format=sdk&Content-Type': {
      $post: {
        input: { query: { format: 'sdk' } } & {
          header: {
            'Content-Type': 'application/json' | 'application/xml'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { documents: string } }
        output: UploadDocumentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
