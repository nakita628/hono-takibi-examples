type APIRequest = {
  action?: 'READ' | 'CREATE' | 'UPDATE' | 'DELETE' | undefined
  actor?:
    | {
        account?: string | undefined
        id?: string | undefined
        jti?: string | undefined
        requestIp?: string | undefined
        userAgent?: string | undefined
      }
    | undefined
  requestId?: string | undefined
  resource?:
    | {
        item?: { id?: string | undefined } | undefined
        itemVersion?: number | undefined
        type?: 'ITEM' | 'VAULT' | undefined
        vault?: { id?: string | undefined } | undefined
      }
    | undefined
  result?: 'SUCCESS' | 'DENY' | undefined
  timestamp?: string | undefined
}
type ErrorResponse = { message?: string | undefined; status?: number | undefined }
type ServiceDependency = {
  message?: string | undefined
  service?: string | undefined
  status?: string | undefined
}
type Vault = {
  attributeVersion?: number | undefined
  contentVersion?: number | undefined
  createdAt?: string | undefined
  description?: string | undefined
  id?: string | undefined
  items?: number | undefined
  name?: string | undefined
  type?: 'USER_CREATED' | 'PERSONAL' | 'EVERYONE' | 'TRANSFER' | undefined
  updatedAt?: string | undefined
}
type Item = {
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
  createdAt?: string | undefined
  favorite?: boolean | undefined
  id?: string | undefined
  lastEditedBy?: string | undefined
  state?: 'ARCHIVED' | 'DELETED' | undefined
  tags?: string[] | undefined
  title?: string | undefined
  updatedAt?: string | undefined
  urls?: { href: string; label?: string | undefined; primary?: boolean | undefined }[] | undefined
  vault: { id: string }
  version?: number | undefined
}
type GeneratorRecipe = {
  characterSets?: ('LETTERS' | 'DIGITS' | 'SYMBOLS')[] | undefined
  excludeCharacters?: string | undefined
  length?: number | undefined
}
type Field = {
  entropy?: number | undefined
  generate?: boolean | undefined
  id: string
  label?: string | undefined
  purpose?: '' | 'USERNAME' | 'PASSWORD' | 'NOTES' | undefined
  recipe?: GeneratorRecipe | undefined
  section?: { id?: string | undefined } | undefined
  type: 'STRING' | 'EMAIL' | 'CONCEALED' | 'URL' | 'TOTP' | 'DATE' | 'MONTH_YEAR' | 'MENU'
  value?: string | undefined
}
type File2 = {
  content?: string | undefined
  content_path?: string | undefined
  id?: string | undefined
  name?: string | undefined
  section?: { id?: string | undefined } | undefined
  size?: number | undefined
}
type FullItem = {
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
  createdAt?: string | undefined
  favorite?: boolean | undefined
  id?: string | undefined
  lastEditedBy?: string | undefined
  state?: 'ARCHIVED' | 'DELETED' | undefined
  tags?: string[] | undefined
  title?: string | undefined
  updatedAt?: string | undefined
  urls?: { href: string; label?: string | undefined; primary?: boolean | undefined }[] | undefined
  vault: { id: string }
  version?: number | undefined
  fields?: Field[] | undefined
  files?: File2[] | undefined
  sections?: { id?: string | undefined; label?: string | undefined }[] | undefined
}
type Patch = {
  op: 'add' | 'remove' | 'replace'
  path: string
  value?: { [x: string]: unknown } | undefined
}[]
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
    '/health': {
      $get: {
        input: {}
        output: { dependencies?: ServiceDependency[] | undefined; name: string; version: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/heartbeat': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
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
  },
  '/'
>
export default routes
