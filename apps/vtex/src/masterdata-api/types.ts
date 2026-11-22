type Listdataentity = {
  acronym: string
  allowGetAll: boolean
  name: string
  primaryKeyType: string
}
type Field = {
  displayName: string
  isFilter: boolean
  isInternal: boolean
  isNullable: boolean
  isSearchable: boolean
  name: string
  type: string
}
type Getdataentityfields = {
  acronym: string
  allowGetAll: boolean
  fields: Field[]
  name: string
  primaryKeyType: string
}
type Createnewdocument = { Href: string; Id: string }
type Usingfilters = { campo1: string; campo2: string; campo3: number }
type PutscoresRequest = { field: string; key: string; point: number; until: string }
type DeletescorebyfieldRequest = { key: string }
type PutscorebyfieldRequest = { key: string; point: number; until: string }
type Listversion = { date: string; id: string }
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
type Putversion = { Href: string; Id: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/dataentities': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: Listdataentity[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym': {
      $get: {
        input: { param: { acronym: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Getdataentityfields
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents': {
      $patch: {
        input: { param: { acronym: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { acronym: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: Createnewdocument
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { acronym: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id': {
      $delete: {
        input: { param: { acronym: string; id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { acronym: string; id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Usingfilters
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { acronym: string; id: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { acronym: string; id: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/clusters': {
      $post: {
        input: { param: { acronym: string; id: string } } & { header: { Accept: string } } & {
          json: { [x: string]: unknown }[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/score': {
      $put: {
        input: { param: { acronym: string; id: string } } & { header: { Accept: string } } & {
          json: PutscoresRequest[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/score/:field-name': {
      $delete: {
        input: { param: { acronym: string; id: string; 'field-name': string } } & {
          header: { Accept: string }
        } & { json: DeletescorebyfieldRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { acronym: string; id: string; 'field-name': string } } & {
          header: { Accept: string }
        } & { json: PutscorebyfieldRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/versions': {
      $get: {
        input: { param: { acronym: string; id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Listversion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/versions/:versionId': {
      $get: {
        input: { param: { acronym: string; id: string; versionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Getversion
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { acronym: string; id: string; versionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Putversion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/:field/attachments': {
      $post: {
        input: { param: { acronym: string; id: string; field: string } } & {
          form: { file: File[] }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/documents/:id/:field/attachments/:file-name': {
      $get: {
        input: { param: { acronym: string; id: string; field: string; 'file-name': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/dataentities/:acronym/scroll': {
      $get:
        | {
            input: { param: { acronym: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { acronym: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/dataentities/:acronym/search': {
      $get:
        | {
            input: { param: { acronym: string } } & {
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
            input: { param: { acronym: string } } & {
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
