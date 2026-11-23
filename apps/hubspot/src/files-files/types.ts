type File2 = {
  access?:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE'
    | undefined
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  defaultHostingUrl?: string | undefined
  encoding?: string | undefined
  expiresAt?: bigint | undefined
  extension?: string | undefined
  fileMd5?: string | undefined
  height?: number | undefined
  id: string
  isUsableInContent?: boolean | undefined
  name?: string | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  size?: bigint | undefined
  sourceGroup?: 'CONTENT' | 'CONVERSATIONS' | 'FORMS' | 'UI_EXTENSIONS' | 'UNKNOWN' | undefined
  type?: string | undefined
  updatedAt: string
  url?: string | undefined
  width?: number | undefined
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type ImportFromUrlInput = {
  access:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE'
  duplicateValidationScope: 'ENTIRE_PORTAL' | 'EXACT_FOLDER'
  duplicateValidationStrategy: 'NONE' | 'REJECT' | 'RETURN_EXISTING'
  expiresAt?: string | undefined
  folderId?: string | undefined
  folderPath?: string | undefined
  name?: string | undefined
  overwrite: boolean
  ttl?: string | undefined
  url?: string | undefined
}
type ImportFromUrlTaskLocator = { id: string; links?: { [x: string]: string } | undefined }
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type FileActionResponse = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  result?: File2 | undefined
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
  taskId: string
}
type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type CollectionResponseFile = { paging?: Paging | undefined; results: File2[] }
type Folder = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  id: string
  name?: string | undefined
  parentFolderId?: string | undefined
  path?: string | undefined
  updatedAt: string
}
type FileStat = { file?: File2 | undefined; folder?: Folder | undefined }
type FileUpdateInput = {
  access?:
    | 'HIDDEN_INDEXABLE'
    | 'HIDDEN_NOT_INDEXABLE'
    | 'HIDDEN_PRIVATE'
    | 'HIDDEN_SENSITIVE'
    | 'PRIVATE'
    | 'PUBLIC_INDEXABLE'
    | 'PUBLIC_NOT_INDEXABLE'
    | 'SENSITIVE'
    | undefined
  clearExpires: boolean
  expiresAt?: string | undefined
  isUsableInContent?: boolean | undefined
  name?: string | undefined
  parentFolderId?: string | undefined
  parentFolderPath?: string | undefined
}
type SignedUrl = {
  expiresAt: string
  extension?: string | undefined
  height?: number | undefined
  name?: string | undefined
  size?: bigint | undefined
  type?: string | undefined
  url: string
  width?: number | undefined
}
type FolderInput = {
  name: string
  parentFolderId?: string | undefined
  parentPath?: string | undefined
}
type CollectionResponseFolder = { paging?: Paging | undefined; results: Folder[] }
type FolderUpdateInput = { name?: string | undefined; parentFolderId?: bigint | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/files/2026-09/files': {
      $post:
        | {
            input: {
              form: {
                charsetHunch?: string | undefined
                file?: File | undefined
                fileName?: string | undefined
                folderId?: string | undefined
                folderPath?: string | undefined
                options?: string | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                charsetHunch?: string | undefined
                file?: File | undefined
                fileName?: string | undefined
                folderId?: string | undefined
                folderPath?: string | undefined
                options?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/files/import-from-url/async': {
      $post:
        | {
            input: { json: ImportFromUrlInput }
            output: ImportFromUrlTaskLocator
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: ImportFromUrlInput }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/files/2026-09/files/import-from-url/async/tasks/:taskId/status': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: FileActionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/files/2026-09/files/search': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                allowsAnonymousAccess?: boolean | undefined
                before?: string | undefined
                createdAt?: string | undefined
                createdAtGte?: string | undefined
                createdAtLte?: string | undefined
                encoding?: string | undefined
                expiresAt?: string | undefined
                expiresAtGte?: string | undefined
                expiresAtLte?: string | undefined
                extension?: string | undefined
                fileMd5?: string | undefined
                height?: number | undefined
                heightGte?: number | undefined
                heightLte?: number | undefined
                idGte?: bigint | undefined
                idLte?: bigint | undefined
                ids?: bigint[] | undefined
                isUsableInContent?: boolean | undefined
                limit?: number | undefined
                name?: string | undefined
                parentFolderIds?: bigint[] | undefined
                path?: string | undefined
                properties?: string[] | undefined
                size?: bigint | undefined
                sizeGte?: bigint | undefined
                sizeLte?: bigint | undefined
                sort?: string[] | undefined
                type?: string | undefined
                updatedAt?: string | undefined
                updatedAtGte?: string | undefined
                updatedAtLte?: string | undefined
                url?: string | undefined
                width?: number | undefined
                widthGte?: number | undefined
                widthLte?: number | undefined
              }
            }
            output: CollectionResponseFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                allowsAnonymousAccess?: boolean | undefined
                before?: string | undefined
                createdAt?: string | undefined
                createdAtGte?: string | undefined
                createdAtLte?: string | undefined
                encoding?: string | undefined
                expiresAt?: string | undefined
                expiresAtGte?: string | undefined
                expiresAtLte?: string | undefined
                extension?: string | undefined
                fileMd5?: string | undefined
                height?: number | undefined
                heightGte?: number | undefined
                heightLte?: number | undefined
                idGte?: bigint | undefined
                idLte?: bigint | undefined
                ids?: bigint[] | undefined
                isUsableInContent?: boolean | undefined
                limit?: number | undefined
                name?: string | undefined
                parentFolderIds?: bigint[] | undefined
                path?: string | undefined
                properties?: string[] | undefined
                size?: bigint | undefined
                sizeGte?: bigint | undefined
                sizeLte?: bigint | undefined
                sort?: string[] | undefined
                type?: string | undefined
                updatedAt?: string | undefined
                updatedAtGte?: string | undefined
                updatedAtLte?: string | undefined
                url?: string | undefined
                width?: number | undefined
                widthGte?: number | undefined
                widthLte?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/files/stat/:path': {
      $get:
        | {
            input: { param: { path: string } } & { query: { properties?: string[] | undefined } }
            output: FileStat
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string } } & { query: { properties?: string[] | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/files/:fileId': {
      $get:
        | {
            input: { param: { fileId: string } } & { query: { properties?: string[] | undefined } }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fileId: string } } & { query: { properties?: string[] | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { fileId: string } } & {
              form: {
                charsetHunch?: string | undefined
                file?: File | undefined
                options?: string | undefined
              }
            }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fileId: string } } & {
              form: {
                charsetHunch?: string | undefined
                file?: File | undefined
                options?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { fileId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { fileId: string } } & { json: FileUpdateInput }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fileId: string } } & { json: FileUpdateInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/files/:fileId/download': {
      $get: {
        input: { param: { fileId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/files/2026-09/files/:fileId/gdpr-delete': {
      $delete: {
        input: { param: { fileId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/files/2026-09/files/:fileId/signed-url': {
      $get:
        | {
            input: { param: { fileId: string } } & {
              query: {
                expirationSeconds?: bigint | undefined
                size?: 'icon' | 'medium' | 'preview' | 'thumb' | undefined
                upscale?: boolean | undefined
              }
            }
            output: SignedUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fileId: string } } & {
              query: {
                expirationSeconds?: bigint | undefined
                size?: 'icon' | 'medium' | 'preview' | 'thumb' | undefined
                upscale?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/folders': {
      $post:
        | { input: { json: FolderInput }; output: Folder; outputFormat: 'json'; status: 201 }
        | { input: { json: FolderInput }; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/files/2026-09/folders/search': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                createdAt?: string | undefined
                createdAtGte?: string | undefined
                createdAtLte?: string | undefined
                idGte?: bigint | undefined
                idLte?: bigint | undefined
                ids?: bigint[] | undefined
                limit?: number | undefined
                name?: string | undefined
                parentFolderIds?: bigint[] | undefined
                path?: string | undefined
                properties?: string[] | undefined
                sort?: string[] | undefined
                updatedAt?: string | undefined
                updatedAtGte?: string | undefined
                updatedAtLte?: string | undefined
              }
            }
            output: CollectionResponseFolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                createdAt?: string | undefined
                createdAtGte?: string | undefined
                createdAtLte?: string | undefined
                idGte?: bigint | undefined
                idLte?: bigint | undefined
                ids?: bigint[] | undefined
                limit?: number | undefined
                name?: string | undefined
                parentFolderIds?: bigint[] | undefined
                path?: string | undefined
                properties?: string[] | undefined
                sort?: string[] | undefined
                updatedAt?: string | undefined
                updatedAtGte?: string | undefined
                updatedAtLte?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/folders/:folderId': {
      $get:
        | {
            input: { param: { folderId: string } } & {
              query: { properties?: string[] | undefined }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } } & {
              query: { properties?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { folderId: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
      $patch:
        | {
            input: { param: { folderId: string } } & { json: FolderUpdateInput }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderId: string } } & { json: FolderUpdateInput }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/files/2026-09/folders/:folderPath': {
      $get:
        | {
            input: { param: { folderPath: string } } & {
              query: { properties?: string[] | undefined }
            }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folderPath: string } } & {
              query: { properties?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete: {
        input: { param: { folderPath: string } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
