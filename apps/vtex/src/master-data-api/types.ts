type CreateUpdateAddressRequests = {
  addressName?: (string | null) | undefined
  addressType?: (string | null) | undefined
  city?: (string | null) | undefined
  complement?: (string | null) | undefined
  country?: (string | null) | undefined
  neighborhood?: (string | null) | undefined
  number?: (string | null) | undefined
  postalCode?: (string | null) | undefined
  receiverName?: (string | null) | undefined
  reference?: (string | null) | undefined
  state?: (string | null) | undefined
  street?: (string | null) | undefined
  userId?: (string | null) | undefined
}
type DocumentResponse = { Href: string; Id: string }
type CreateUpdateProfileRequests = {
  document?: (string | null) | undefined
  documentType?: (string | null) | undefined
  email?: (string | null) | undefined
  firstName?: (string | null) | undefined
  isCorporate?: (boolean | null) | undefined
  isNewsletterOptIn?: (boolean | null) | undefined
  lastName?: (string | null) | undefined
  localeDefault?: (string | null) | undefined
  phone?: (string | null) | undefined
}
type DocumentRequest = { [x: string]: string }
type UsingFieldsAll = { accountId: string; accountName: string; dataEntityId: string; id: string }
type Listversion = { date: string; document?: { [x: string]: unknown } | undefined; id: string }
type ArEVentilaO = { Date: string; Point: number; Until: string }
type Scores = { 'Ar e Ventilação': ArEVentilaO[] }
type DepartmentVisitedTag = { DisplayValue: string; Scores: Scores }
type Document = {
  accountId: string
  accountName: string
  carttag: string | null
  checkouttag: string | null
  dataEntityId: string
  departmentVisitedTag: DepartmentVisitedTag
  email: string
  followers: string[]
  id: string
  rclastsession: string
  rclastsessiondate: string
}
type Getversion = { author: string; document: Document; id: string }
type PutindicesRequest = { fields: string; multiple: boolean; name: string }
type Name = { type: string }
type Properties = { name: Name }
type SaveschemabynameRequest = { properties: Properties }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/dataentities/Address/documents': {
      $post: {
        input: { query: { _schema?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: CreateUpdateAddressRequests }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/Address/documents/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { _schema?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: CreateUpdateAddressRequests }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/Client/documents': {
      $post: {
        input: { query: { _schema?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: CreateUpdateProfileRequests }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/Client/documents/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { _schema?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: CreateUpdateProfileRequests }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/documents': {
      $patch: {
        input: { param: { dataEntityName: string } } & {
          query: { _schema?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & { json: DocumentRequest }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { dataEntityName: string } } & {
          query: { _schema?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } } & { json: DocumentRequest }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/documents/:id': {
      $delete: {
        input: { param: { dataEntityName: string; id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { dataEntityName: string; id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: UsingFieldsAll
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { dataEntityName: string; id: string } } & {
          query: { _where?: string | undefined; _schema?: string | undefined }
        } & { header: { Accept: string } } & { json: DocumentRequest }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { dataEntityName: string; id: string } } & {
          query: { _where?: string | undefined; _schema?: string | undefined }
        } & { header: { Accept: string } } & { json: DocumentRequest }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/documents/:id/clusters': {
      $post: {
        input: { param: { dataEntityName: string; id: string } } & {
          header: { Accept: string }
        } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/documents/:id/versions': {
      $get: {
        input: { param: { dataEntityName: string; id: string } } & {
          query: { load?: boolean | undefined; fields?: string | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: Listversion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId': {
      $get: {
        input: { param: { dataEntityName: string; id: string; versionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Getversion
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { dataEntityName: string; id: string; versionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: DocumentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/indices': {
      $get: {
        input: { param: { dataEntityName: string } } & { header: { 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { dataEntityName: string } } & { json: PutindicesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/indices/:index_name': {
      $delete: {
        input: { param: { dataEntityName: string; index_name: string } } & {
          header: { 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { dataEntityName: string; index_name: string } } & {
          header: { 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/schemas': {
      $get: {
        input: { param: { dataEntityName: string } } & { header: { 'Content-Type': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/schemas/:schemaName': {
      $delete: {
        input: { param: { dataEntityName: string; schemaName: string } } & {
          header: { 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { dataEntityName: string; schemaName: string } } & {
          header: { 'Content-Type': string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { dataEntityName: string; schemaName: string } } & {
          json: SaveschemabynameRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:dataEntityName/scroll': {
      $get:
        | {
            input: { param: { dataEntityName: string } } & {
              query: {
                _token?: string | undefined
                _fields?: string | undefined
                _where?: string | undefined
                _schema?: string | undefined
                _keyword?: string | undefined
                _sort?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string; 'REST-Range': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { dataEntityName: string } } & {
              query: {
                _token?: string | undefined
                _fields?: string | undefined
                _where?: string | undefined
                _schema?: string | undefined
                _keyword?: string | undefined
                _sort?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string; 'REST-Range': string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/dataentities/:dataEntityName/search': {
      $get:
        | {
            input: { param: { dataEntityName: string } } & {
              query: {
                _fields?: string | undefined
                _where?: string | undefined
                _schema?: string | undefined
                _keyword?: string | undefined
                _sort?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string; 'REST-Range': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { dataEntityName: string } } & {
              query: {
                _fields?: string | undefined
                _where?: string | undefined
                _schema?: string | undefined
                _keyword?: string | undefined
                _sort?: string | undefined
              }
            } & { header: { 'Content-Type': string; Accept: string; 'REST-Range': string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
