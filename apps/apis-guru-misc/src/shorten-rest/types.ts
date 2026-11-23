type DestinationModel = { country?: string | undefined; os?: string | undefined; url: string }
type MetaTagModel = { content: string; name: string }
type SnippetModel = { id: string; parameters?: { [x: string]: string } | undefined }
type AliasModel = {
  createdAt?: bigint | undefined
  destinations?: DestinationModel[] | undefined
  domainName?: string | undefined
  metatags?: MetaTagModel[] | undefined
  name: string
  snippets?: SnippetModel[] | undefined
  updatedAt?: bigint | undefined
}
type CreateAliasModel = {
  destinations?: DestinationModel[] | undefined
  metatags?: MetaTagModel[] | undefined
  snippets?: SnippetModel[] | undefined
}
type CreateAliasResponseModel = {
  aliasName?: string | undefined
  domainName?: string | undefined
  shortUrl?: string | undefined
}
type GetAliasesModel = { aliases?: string[] | undefined; lastId?: string | undefined }
type ClickModel = {
  alias?: string | undefined
  aliasId?: string | undefined
  browser?: string | undefined
  country?: string | undefined
  createdAt?: bigint | undefined
  destination?: string | undefined
  domain?: string | undefined
  os?: string | undefined
  referrer?: string | undefined
  userAgent?: string | undefined
}
type GetClicksModel = { clicks?: ClickModel[] | undefined; lastId?: string | undefined }
type ClicksFilterModel = {
  aliasId?: string | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  domain?: string | undefined
  lastId?: number | undefined
}
type ClickModelPg = {
  accountId?: string | undefined
  alias?: string | undefined
  aliasId?: string | undefined
  browser?: string | undefined
  country?: string | undefined
  createdAt?: bigint | undefined
  destination?: string | undefined
  domain?: string | undefined
  id?: number | undefined
  os?: string | undefined
  referrer?: string | undefined
  userAgent?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/aliases': {
      $delete: {
        input: { query: { domainName?: string | undefined; aliasName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { domainName?: string | undefined; aliasName: string } }
        output: AliasModel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { domainName?: string | undefined; aliasName?: string | undefined } } & {
          json: CreateAliasModel
        }
        output: CreateAliasResponseModel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { domainName?: string | undefined; aliasName: string } } & {
          json: CreateAliasModel
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/aliases/all': {
      $get: {
        input: {
          query: {
            domainName?: string | undefined
            continueFrom?: string | undefined
            limit?: number | undefined
          }
        }
        output: GetAliasesModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clicks': {
      $get: {
        input: { query: { continueFrom?: string | undefined; limit?: number | undefined } }
        output: GetClicksModel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clicks/pg': {
      $post: {
        input: { json: ClicksFilterModel }
        output: ClickModelPg
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
