type LoginOptionsPublic = {
  disableFormLogin?: boolean | undefined
  disableBasicAuth?: boolean | undefined
  disableOIDCLogin?: boolean | undefined
}
type OIDCConfigPublic = { providerUrl?: string | undefined; redirectUri?: string | undefined }
type AdminGetConfigPublic = {
  header_title: string
  loginOptions: LoginOptionsPublic
  globalOtpauthUrl: string
  enableWebDAV: boolean
  sharedMaxUploadSize: bigint
  uploads: { resumableChunkMb?: number | undefined; resumableTtlHours?: number | undefined }
  oidc: OIDCConfigPublic
}
type AdminGetConfigAdmin = {
  header_title: string
  loginOptions: {
    disableFormLogin?: boolean | undefined
    disableBasicAuth?: boolean | undefined
    disableOIDCLogin?: boolean | undefined
    authBypass?: (boolean | null) | undefined
    authHeaderName?: (string | null) | undefined
  }
  globalOtpauthUrl: string
  enableWebDAV: boolean
  sharedMaxUploadSize: bigint
  uploads: { resumableChunkMb?: number | undefined; resumableTtlHours?: number | undefined }
  oidc: OIDCConfigPublic
}
type ShareLinkEntry = {
  folder?: string | undefined
  file?: string | undefined
  expires?: bigint | undefined
  password?: (string | null) | undefined
  token?: string | undefined
  sourceId?: string | undefined
  sourceName?: string | undefined
}
type ShareLinksMap = { [x: string]: ShareLinkEntry }
type ShareFolderLinkEntry = {
  folder?: string | undefined
  expires?: bigint | undefined
  password?: (string | null) | undefined
  allowUpload?: number | undefined
  token?: string | undefined
  sourceId?: string | undefined
  sourceName?: string | undefined
}
type ShareFolderLinksMap = { [x: string]: ShareFolderLinkEntry }
type AdminUpdateConfigRequest = {
  header_title?: string | undefined
  loginOptions?:
    | {
        disableFormLogin?: boolean | undefined
        disableBasicAuth?: boolean | undefined
        disableOIDCLogin?: boolean | undefined
        authBypass?: boolean | undefined
        authHeaderName?: string | undefined
      }
    | undefined
  globalOtpauthUrl?: string | undefined
  enableWebDAV?: boolean | undefined
  sharedMaxUploadSize?: bigint | undefined
  uploads?:
    | { resumableChunkMb?: number | undefined; resumableTtlHours?: number | undefined }
    | undefined
  oidc?:
    | {
        providerUrl?: string | undefined
        clientId?: string | undefined
        clientSecret?: string | undefined
        redirectUri?: string | undefined
        groupClaim?: (string | null) | undefined
        extraScopes?: (string | null) | undefined
      }
    | undefined
}
type SimpleSuccess = { success?: boolean | undefined }
type SimpleError = { error?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/admin/acl/getGrants.php': {
      $get:
        | {
            input: { query: { user: string; sourceId?: string | undefined } }
            output: { grants?: { [x: string]: unknown } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { user: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { user: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/acl/saveGrants.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json:
                | { user: string; sourceId?: string | undefined; grants: { [x: string]: unknown } }
                | {
                    sourceId?: string | undefined
                    changes: { user: string; grants: { [x: string]: unknown } }[]
                  }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json:
                | { user: string; sourceId?: string | undefined; grants: { [x: string]: unknown } }
                | {
                    sourceId?: string | undefined
                    changes: { user: string; grants: { [x: string]: unknown } }[]
                  }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json:
                | { user: string; sourceId?: string | undefined; grants: { [x: string]: unknown } }
                | {
                    sourceId?: string | undefined
                    changes: { user: string; grants: { [x: string]: unknown } }[]
                  }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json:
                | { user: string; sourceId?: string | undefined; grants: { [x: string]: unknown } }
                | {
                    sourceId?: string | undefined
                    changes: { user: string; grants: { [x: string]: unknown } }[]
                  }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json:
                | { user: string; sourceId?: string | undefined; grants: { [x: string]: unknown } }
                | {
                    sourceId?: string | undefined
                    changes: { user: string; grants: { [x: string]: unknown } }[]
                  }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/addUser.php': {
      $post:
        | {
            input: { query: { setup?: string | undefined } } & {
              header: { 'X-CSRF-Token'?: string | undefined }
            } & { json: { username: string; password: string; isAdmin?: boolean | undefined } }
            output: { success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { setup?: string | undefined } } & {
              header: { 'X-CSRF-Token'?: string | undefined }
            } & { json: { username: string; password: string; isAdmin?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { setup?: string | undefined } } & {
              header: { 'X-CSRF-Token'?: string | undefined }
            } & { json: { username: string; password: string; isAdmin?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { setup?: string | undefined } } & {
              header: { 'X-CSRF-Token'?: string | undefined }
            } & { json: { username: string; password: string; isAdmin?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/admin/changeUserPassword.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { username: string; newPassword: string }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/admin/clamavTest.php': {
      $post:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              command?: string | undefined
              engine?: (string | null) | undefined
              details?: string | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/admin/diskUsageDeleteSnapshot.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              json: { sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              json: { sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              json: { sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              json: { sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/diskUsageSummary.php': {
      $get:
        | {
            input: {
              query: {
                topFolders?: number | undefined
                topFiles?: number | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                topFolders?: number | undefined
                topFiles?: number | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                topFolders?: number | undefined
                topFiles?: number | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                topFolders?: number | undefined
                topFiles?: number | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/diskUsageTriggerScan.php': {
      $post:
        | {
            input: { json: { sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/downloadProBundle.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 502
          }
    }
  } & {
    '/api/admin/getConfig.php': {
      $get:
        | {
            input: {}
            output: AdminGetConfigPublic | AdminGetConfigAdmin
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/admin/getUsers.php': {
      $get:
        | {
            input: {}
            output: { username?: string | undefined; role?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/admin/installProBundle.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { bundle: File } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/oidcDebugInfo.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/admin/oidcTest.php': {
      $post:
        | {
            input: { json: { providerUrl?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { providerUrl?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/readMetadata.php': {
      $get:
        | {
            input: { query: { file: 'share_links.json' | 'share_folder_links.json' } }
            output: ShareLinksMap | ShareFolderLinksMap
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { file: 'share_links.json' | 'share_folder_links.json' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { file: 'share_links.json' | 'share_folder_links.json' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { file: 'share_links.json' | 'share_folder_links.json' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/removeUser.php': {
      $delete:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { username: string } }
            output: { success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/admin/resumableCleanup.php': {
      $post:
        | {
            input: {
              json: {
                all?: boolean | undefined
                purgeAll?: boolean | undefined
                sourceId?: string | undefined
              }
            }
            output: {
              success?: boolean | undefined
              checked?: number | undefined
              removed?: number | undefined
              remaining?: number | undefined
              sources?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                all?: boolean | undefined
                purgeAll?: boolean | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                all?: boolean | undefined
                purgeAll?: boolean | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                all?: boolean | undefined
                purgeAll?: boolean | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              json: {
                all?: boolean | undefined
                purgeAll?: boolean | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/setEncryptionKey.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { action: 'generate' | 'clear'; force?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/setLicense.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { license: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { license: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { license: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { license: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { license: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/admin/updateConfig.php': {
      $put:
        | {
            input: { json: AdminUpdateConfigRequest }
            output: SimpleSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminUpdateConfigRequest }
            output: SimpleError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminUpdateConfigRequest }
            output: SimpleError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AdminUpdateConfigRequest }
            output: SimpleError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/admin/updateUserPermissions.php': {
      $put:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                permissions: {
                  username?: string | undefined
                  folderOnly?: boolean | undefined
                  readOnly?: boolean | undefined
                  disableUpload?: boolean | undefined
                }[]
              }
            }
            output: { success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                permissions: {
                  username?: string | undefined
                  folderOnly?: boolean | undefined
                  readOnly?: boolean | undefined
                  disableUpload?: boolean | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                permissions: {
                  username?: string | undefined
                  folderOnly?: boolean | undefined
                  readOnly?: boolean | undefined
                  disableUpload?: boolean | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                permissions: {
                  username?: string | undefined
                  folderOnly?: boolean | undefined
                  readOnly?: boolean | undefined
                  disableUpload?: boolean | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                permissions: {
                  username?: string | undefined
                  folderOnly?: boolean | undefined
                  readOnly?: boolean | undefined
                  disableUpload?: boolean | undefined
                }[]
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/admin/virusLog.php': {
      $get:
        | {
            input: { query: { limit?: number | undefined; format?: 'json' | 'csv' | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; format?: 'json' | 'csv' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; format?: 'json' | 'csv' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; format?: 'json' | 'csv' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/auth/auth.php': {
      $post:
        | {
            input: {
              json: {
                username: string
                password: string
                remember_me?: boolean | undefined
                totp_code?: string | undefined
              }
            }
            output: {
              status?: string | undefined
              success?: string | undefined
              username?: string | undefined
              isAdmin?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                username: string
                password: string
                remember_me?: boolean | undefined
                totp_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                username: string
                password: string
                remember_me?: boolean | undefined
                totp_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                username: string
                password: string
                remember_me?: boolean | undefined
                totp_code?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/auth/checkAuth.php': {
      $get: {
        input: {}
        output:
          | {
              authenticated?: boolean | undefined
              isAdmin?: boolean | undefined
              totp_enabled?: boolean | undefined
              username?: string | undefined
              folderOnly?: boolean | undefined
            }
          | { setup?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/auth/login_basic.php': {
      $get:
        | { input: {}; output: { success?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/auth/logout.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/auth/token.php': {
      $get: {
        input: {}
        output: { csrf_token?: string | undefined; share_url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/file/copyFiles.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { source: string; destination: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { source: string; destination: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { source: string; destination: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { source: string; destination: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { source: string; destination: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/createFile.php': {
      $post:
        | {
            input: { json: { folder: string; name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { folder: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { folder: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { folder: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { folder: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/createShareLink.php': {
      $post:
        | {
            input: {
              json: {
                folder: string
                file: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
              }
            }
            output: {
              token?: string | undefined
              url?: string | undefined
              expires?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                folder: string
                file: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                folder: string
                file: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                folder: string
                file: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                folder: string
                file: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/deleteFiles.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/deleteShareLink.php': {
      $post:
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { token: string } } & { form: { token: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/file/deleteTrashFiles.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { deleteAll: boolean } | { files: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { deleteAll: boolean } | { files: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { deleteAll: boolean } | { files: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { deleteAll: boolean } | { files: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/download.php': {
      $get:
        | {
            input: { query: { folder: string; file: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/file/downloadZip.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[]; format?: 'zip' | '7z' | undefined }
            }
            output: {
              ok?: boolean | undefined
              token?: string | undefined
              statusUrl?: string | undefined
              downloadUrl?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[]; format?: 'zip' | '7z' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[]; format?: 'zip' | '7z' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[]; format?: 'zip' | '7z' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[]; format?: 'zip' | '7z' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/downloadZipFile.php': {
      $get:
        | {
            input: { query: { k: string; name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { k: string; name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { k: string; name?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/file/extractZip.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; files: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/getFileList.php': {
      $get:
        | {
            input: { query: { folder: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { folder: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder: string; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/getFileTag.php': {
      $get: {
        input: { query: { sourceId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/file/getShareLinks.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api/file/getTrashItems.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/file/moveFiles.php': {
      $post:
        | {
            input: { json: { source: string; destination: string; files: string[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { source: string; destination: string; files: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { source: string; destination: string; files: string[] } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { source: string; destination: string; files: string[] } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/file/renameFile.php': {
      $put:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; oldName: string; newName: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; oldName: string; newName: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; oldName: string; newName: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; oldName: string; newName: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; oldName: string; newName: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/restoreFiles.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { files: string[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { files: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { files: string[] } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { files: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/saveFile.php': {
      $put:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; fileName: string; content: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; fileName: string; content: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; fileName: string; content: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; fileName: string; content: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; fileName: string; content: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/saveFileTag.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                sourceId?: string | undefined
                tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                deleteGlobal?: boolean | undefined
                tagToDelete?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                sourceId?: string | undefined
                tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                deleteGlobal?: boolean | undefined
                tagToDelete?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                sourceId?: string | undefined
                tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                deleteGlobal?: boolean | undefined
                tagToDelete?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                sourceId?: string | undefined
                tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                deleteGlobal?: boolean | undefined
                tagToDelete?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                sourceId?: string | undefined
                tags?: { name?: string | undefined; color?: string | undefined }[] | undefined
                deleteGlobal?: boolean | undefined
                tagToDelete?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/share.php': {
      $get:
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                view?: 0 | 1 | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                view?: 0 | 1 | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                view?: 0 | 1 | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/file/snippet.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined; file: string } }
            output: { snippet?: string | undefined; truncated?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined; file: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder?: string | undefined; file: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder?: string | undefined; file: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { folder?: string | undefined; file: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/file/thumbnail.php': {
      $get:
        | {
            input: { query: { folder: string; file: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/file/zipStatus.php': {
      $get:
        | { input: { query: { k: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { k: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { k: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/folder/capabilities.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/folder/createFolder.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folderName: string; parent?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folderName: string; parent?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folderName: string; parent?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folderName: string; parent?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folderName: string; parent?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/folder/createShareFolderLink.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
                allowUpload?: 0 | 1 | undefined
                allowSubfolders?: 0 | 1 | undefined
              }
            }
            output: {
              token?: string | undefined
              link?: string | undefined
              expires?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
                allowUpload?: 0 | 1 | undefined
                allowSubfolders?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
                allowUpload?: 0 | 1 | undefined
                allowSubfolders?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                expirationValue?: number | undefined
                expirationUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | undefined
                password?: string | undefined
                allowUpload?: 0 | 1 | undefined
                allowSubfolders?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/folder/deleteFolder.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/folder/deleteShareFolderLink.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/folder/downloadSharedFile.php': {
      $get:
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                file?: string | undefined
                path?: string | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                file?: string | undefined
                path?: string | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                file?: string | undefined
                path?: string | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                file?: string | undefined
                path?: string | undefined
                inline?: 0 | 1 | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/folder/downloadSharedFolder.php': {
      $get:
        | {
            input: {
              query: { token: string; pass?: string | undefined; path?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { token: string; pass?: string | undefined; path?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { token: string; pass?: string | undefined; path?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { token: string; pass?: string | undefined; path?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/folder/encryptionJobStart.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                mode: 'encrypt' | 'decrypt'
                totalFiles?: number | undefined
                totalBytes?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/encryptionJobStatus.php': {
      $get:
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { jobId: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/folder/encryptionJobTick.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { jobId: string; maxFiles?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/encryptionPlan.php': {
      $get:
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              query: { folder?: string | undefined; mode?: 'encrypt' | 'decrypt' | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/getFolderColors.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/folder/getFolderEncryption.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/folder/getFolderList.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {
              folder?: string | undefined
              fileCount?: number | undefined
              metadataFile?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/folder/getShareFolderLinks.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api/folder/isEmpty.php': {
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                sourceId?: string | undefined
                deep?: number | undefined
                depth?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                sourceId?: string | undefined
                deep?: number | undefined
                depth?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/folder/listChildren.php': {
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/folder/moveFolder.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                source: string
                destination: string
                mode?: string | undefined
                sourceId?: string | undefined
                destSourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/renameFolder.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldFolder: string; newFolder: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldFolder: string; newFolder: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldFolder: string; newFolder: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldFolder: string; newFolder: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldFolder: string; newFolder: string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/folder/saveFolderColor.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; color?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/setFolderEncryption.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; encrypted: boolean }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/folder/shareFolder.php': {
      $get:
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                path?: string | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                token: string
                pass?: string | undefined
                path?: string | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/folder/uploadToSharedFolder.php': {
      $post:
        | {
            input: {
              form: {
                token: string
                pass?: string | undefined
                path?: string | undefined
                fileToUpload: File
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              form: {
                token: string
                pass?: string | undefined
                path?: string | undefined
                fileToUpload: File
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                token: string
                pass?: string | undefined
                path?: string | undefined
                fileToUpload: File
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/media/getProgress.php': {
      $get:
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder: string; file: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/media/getViewedMap.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { folder?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/media/updateProgress.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                seconds?: number | undefined
                duration?: (number | null) | undefined
                completed?: (boolean | null) | undefined
                clear?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                seconds?: number | undefined
                duration?: (number | null) | undefined
                completed?: (boolean | null) | undefined
                clear?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                seconds?: number | undefined
                duration?: (number | null) | undefined
                completed?: (boolean | null) | undefined
                clear?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                seconds?: number | undefined
                duration?: (number | null) | undefined
                completed?: (boolean | null) | undefined
                clear?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                folder: string
                file: string
                seconds?: number | undefined
                duration?: (number | null) | undefined
                completed?: (boolean | null) | undefined
                clear?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/onlyoffice/callback.php': {
      $post: {
        input: { query: { sourceId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/onlyoffice/config.php': {
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                file?: string | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                file?: string | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                file?: string | undefined
                sourceId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/onlyoffice/signed-download.php': {
      $get:
        | { input: { query: { tok: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { tok: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api/onlyoffice/status.php': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/pro/audit/exportCsv.php': {
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/audit/list.php': {
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                user?: string | undefined
                action?: string | undefined
                source?: string | undefined
                storage?: string | undefined
                from?: string | undefined
                to?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/pro/diskUsageChildren.php': {
      $get:
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { folder?: string | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/diskUsageDeleteFilePermanent.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder?: string | undefined; name: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder?: string | undefined; name: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder?: string | undefined; name: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder?: string | undefined; name: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder?: string | undefined; name: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/diskUsageDeleteFolderRecursive.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { folder: string; sourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/diskUsageTopFiles.php': {
      $get:
        | {
            input: { query: { limit?: number | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { limit?: number | undefined; sourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/groups/list.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/pro/groups/save.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { groups: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { groups: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { groups: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { groups: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { groups: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/portals/get.php': {
      $get:
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/pro/portals/list.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/pro/portals/publicMeta.php': {
      $get:
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 410 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/pro/portals/save.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { portals: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { portals: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { portals: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { portals: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { portals: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/portals/submissions.php': {
      $get:
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { slug: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/pro/portals/submitForm.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: {
                slug: string
                form: {
                  name?: string | undefined
                  email?: string | undefined
                  reference?: string | undefined
                  notes?: string | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/portals/uploadLogo.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              form: { portal_logo: File; slug?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              form: { portal_logo: File; slug?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              form: { portal_logo: File; slug?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              form: { portal_logo: File; slug?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/pro/search/query.php': {
      $get:
        | {
            input: {
              query: {
                q?: string | undefined
                limit?: number | undefined
                sourceId?: string | undefined
                force?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                q?: string | undefined
                limit?: number | undefined
                sourceId?: string | undefined
                force?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q?: string | undefined
                limit?: number | undefined
                sourceId?: string | undefined
                force?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                q?: string | undefined
                limit?: number | undefined
                sourceId?: string | undefined
                force?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                q?: string | undefined
                limit?: number | undefined
                sourceId?: string | undefined
                force?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/pro/uploadBrandLogo.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { brand_logo: File } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { brand_logo: File } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { brand_logo: File } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { brand_logo: File } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/profile/changePassword.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldPassword: string; newPassword: string; confirmPassword: string }
            }
            output: { success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldPassword: string; newPassword: string; confirmPassword: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldPassword: string; newPassword: string; confirmPassword: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldPassword: string; newPassword: string; confirmPassword: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & {
              json: { oldPassword: string; newPassword: string; confirmPassword: string }
            }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/profile/getCurrentUser.php': {
      $get:
        | {
            input: {}
            output: {
              username: string
              isAdmin: boolean
              totp_enabled: boolean
              profile_picture: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error?: string | undefined }; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/profile/getUserPermissions.php': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/profile/totp_disable.php': {
      $put:
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: { success?: boolean | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/profile/totp_recover.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { recovery_code: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/profile/totp_saveCode.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: { status?: string | undefined; recoveryCode?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/profile/totp_setup.php': {
      $get:
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/profile/totp_verify.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_code: string } }
            output: { status?: string | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_code: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_code: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_code: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/profile/updateUserPanel.php': {
      $put:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_enabled: boolean } }
            output: { success?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_enabled: boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_enabled: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_enabled: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { json: { totp_enabled: boolean } }
            output: {}
            outputFormat: string
            status: 405
          }
    }
  } & {
    '/api/profile/uploadPicture.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { profile_picture: File } }
            output: { success: boolean; url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { profile_picture: File } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { profile_picture: File } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { profile_picture: File } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token': string } } & { form: { profile_picture: File } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/public/siteConfig.php': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/upload/checkExisting.php': {
      $post:
        | {
            input: {
              json: {
                folder: string
                sourceId?: string | undefined
                files: { path: string; size?: bigint | undefined }[]
              }
            }
            output: {
              existing?:
                | {
                    path?: string | undefined
                    size?: (bigint | null) | undefined
                    sameSize?: (boolean | null) | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                folder: string
                sourceId?: string | undefined
                files: { path: string; size?: bigint | undefined }[]
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                folder: string
                sourceId?: string | undefined
                files: { path: string; size?: bigint | undefined }[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                folder: string
                sourceId?: string | undefined
                files: { path: string; size?: bigint | undefined }[]
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/upload/removeChunks.php': {
      $post:
        | {
            input: { json: { folder: string; csrf_token: string } } & {
              form: { folder: string; csrf_token: string }
            }
            output: { success?: boolean | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { folder: string; csrf_token: string } } & {
              form: { folder: string; csrf_token: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { folder: string; csrf_token: string } } & {
              form: { folder: string; csrf_token: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/upload/upload.php': {
      $post:
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output:
              | { success?: string | undefined; newFilename?: string | undefined }
              | { status?: string | undefined }
              | { csrf_expired?: boolean | undefined; csrf_token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-CSRF-Token'?: string | undefined } } & {
              form: {
                fileToUpload: File
                folder?: string | undefined
                csrf_token?: string | undefined
                upload_token?: string | undefined
                resumableChunkNumber?: number | undefined
                resumableTotalChunks?: number | undefined
                resumableChunkSize?: number | undefined
                resumableCurrentChunkSize?: number | undefined
                resumableTotalSize?: number | undefined
                resumableType?: string | undefined
                resumableIdentifier?: string | undefined
                resumableFilename?: string | undefined
                resumableRelativePath?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
