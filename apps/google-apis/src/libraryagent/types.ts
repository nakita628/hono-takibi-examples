type GoogleExampleLibraryagentV1Shelf = { name?: string | undefined; theme?: string | undefined }
type GoogleExampleLibraryagentV1ListShelvesResponse = {
  nextPageToken?: string | undefined
  shelves?: GoogleExampleLibraryagentV1Shelf[] | undefined
}
type GoogleExampleLibraryagentV1Book = {
  author?: string | undefined
  name?: string | undefined
  read?: boolean | undefined
  title?: string | undefined
}
type GoogleExampleLibraryagentV1ListBooksResponse = {
  books?: GoogleExampleLibraryagentV1Book[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/shelves': {
      $get: {
        input: {
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
        output: GoogleExampleLibraryagentV1ListShelvesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $get: {
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
        output: GoogleExampleLibraryagentV1Book
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:borrow': {
      $post: {
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
        output: GoogleExampleLibraryagentV1Book
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:return': {
      $post: {
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
        output: GoogleExampleLibraryagentV1Book
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/books': {
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
        output: GoogleExampleLibraryagentV1ListBooksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
