type APIRequest = {
  requestId?: string | undefined
  timestamp?: string | undefined
  action?: 'READ' | 'CREATE' | 'UPDATE' | 'DELETE' | undefined
  result?: 'SUCCESS' | 'DENY' | undefined
  actor?:
    | {
        id?: string | undefined
        account?: string | undefined
        jti?: string | undefined
        userAgent?: string | undefined
        requestIp?: string | undefined
      }
    | undefined
  resource?:
    | {
        type?: 'ITEM' | 'VAULT' | undefined
        vault?: { id?: string | undefined } | undefined
        item?: { id?: string | undefined } | undefined
        itemVersion?: number | undefined
      }
    | undefined
}
type ErrorResponse = { status?: number | undefined; message?: string | undefined }
type Vault = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  attributeVersion?: number | undefined
  contentVersion?: number | undefined
  items?: number | undefined
  type?: 'USER_CREATED' | 'PERSONAL' | 'EVERYONE' | 'TRANSFER' | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Item = {
  id?: string | undefined
  title?: string | undefined
  vault: { id: string }
  category:
    | 'LOGIN'
    | 'PASSWORD'
    | 'API_CREDENTIAL'
    | 'SERVER'
    | 'DATABASE'
    | 'CREDIT_CARD'
    | 'MEMBERSHIP'
    | 'PASSPORT'
    | 'SOFTWARE_LICENSE'
    | 'OUTDOOR_LICENSE'
    | 'SECURE_NOTE'
    | 'WIRELESS_ROUTER'
    | 'BANK_ACCOUNT'
    | 'DRIVER_LICENSE'
    | 'IDENTITY'
    | 'REWARD_PROGRAM'
    | 'DOCUMENT'
    | 'EMAIL_ACCOUNT'
    | 'SOCIAL_SECURITY_NUMBER'
    | 'MEDICAL_RECORD'
    | 'SSH_KEY'
    | 'CUSTOM'
  urls?: { label?: string | undefined; primary?: boolean | undefined; href: string }[] | undefined
  favorite?: boolean | undefined
  tags?: string[] | undefined
  version?: number | undefined
  state?: 'ARCHIVED' | 'DELETED' | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  lastEditedBy?: string | undefined
}
type GeneratorRecipe = {
  length?: number | undefined
  characterSets?: ('LETTERS' | 'DIGITS' | 'SYMBOLS')[] | undefined
  excludeCharacters?: string | undefined
}
type Field = {
  id: string
  section?: { id?: string | undefined } | undefined
  type: 'STRING' | 'EMAIL' | 'CONCEALED' | 'URL' | 'TOTP' | 'DATE' | 'MONTH_YEAR' | 'MENU'
  purpose?: '' | 'USERNAME' | 'PASSWORD' | 'NOTES' | undefined
  label?: string | undefined
  value?: string | undefined
  generate?: boolean | undefined
  recipe?: GeneratorRecipe | undefined
  entropy?: number | undefined
}
type File2 = {
  id?: string | undefined
  name?: string | undefined
  size?: number | undefined
  content_path?: string | undefined
  section?: { id?: string | undefined } | undefined
  content?: string | undefined
}
type FullItem = {
  id?: string | undefined
  title?: string | undefined
  vault: { id: string }
  category:
    | 'LOGIN'
    | 'PASSWORD'
    | 'API_CREDENTIAL'
    | 'SERVER'
    | 'DATABASE'
    | 'CREDIT_CARD'
    | 'MEMBERSHIP'
    | 'PASSPORT'
    | 'SOFTWARE_LICENSE'
    | 'OUTDOOR_LICENSE'
    | 'SECURE_NOTE'
    | 'WIRELESS_ROUTER'
    | 'BANK_ACCOUNT'
    | 'DRIVER_LICENSE'
    | 'IDENTITY'
    | 'REWARD_PROGRAM'
    | 'DOCUMENT'
    | 'EMAIL_ACCOUNT'
    | 'SOCIAL_SECURITY_NUMBER'
    | 'MEDICAL_RECORD'
    | 'SSH_KEY'
    | 'CUSTOM'
  urls?: { label?: string | undefined; primary?: boolean | undefined; href: string }[] | undefined
  favorite?: boolean | undefined
  tags?: string[] | undefined
  version?: number | undefined
  state?: 'ARCHIVED' | 'DELETED' | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  lastEditedBy?: string | undefined
  sections?: { id?: string | undefined; label?: string | undefined }[] | undefined
  fields?: Field[] | undefined
  files?: File2[] | undefined
}
type Patch = {
  op: 'add' | 'remove' | 'replace'
  path: string
  value?: { [x: string]: unknown } | undefined
}[]
type ServiceDependency = {
  service?: string | undefined
  status?: string | undefined
  message?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/activity': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: APIRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/vaults': {
      $get:
        | {
            input: { query: { filter?: string | undefined } }
            output: Vault[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/vaults/:vaultUuid': {
      $get:
        | {
            input: { param: { vaultUuid: string } }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vaults/:vaultUuid/items': {
      $get:
        | {
            input: { param: { vaultUuid: string } } & { query: { filter?: string | undefined } }
            output: Item[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string } } & { query: { filter?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string } } & { query: { filter?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { vaultUuid: string } } & { json: FullItem }
            output: FullItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vaultUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vaults/:vaultUuid/items/:itemUuid': {
      $get:
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: FullItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: FullItem }
            output: FullItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: FullItem }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: Patch }
            output: FullItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: Patch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: Patch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & { json: Patch }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vaults/:vaultUuid/items/:itemUuid/files': {
      $get:
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: File2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid': {
      $get:
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } } & {
              query: { inline_files?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid/content': {
      $get:
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultUuid: string; itemUuid: string; fileUuid: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/heartbeat': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/health': {
      $get: {
        input: {}
        output: { name: string; version: string; dependencies?: ServiceDependency[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } },
  '/'
>
export default routes
