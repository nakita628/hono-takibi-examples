type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type TemplateField = {
  index: string
  type: string
  alias: string | null
  tag: string | null
  id: bigint | null
  content?: string | undefined
  checked?: boolean | undefined
}
type Template = {
  templateType: string
  templateId: string
  basename: string
  etag: string
  fileid: bigint
  filename: string
  lastmod: bigint
  mime: string
  size: bigint | number
  type: string
  hasPreview: boolean
  previewUrl: string | null
  fields: TemplateField[]
}
type TemplateFileCreatorWithTemplates = {
  app: string
  label: string
  extension: string
  iconClass: string | null
  iconSvgInline: string | null
  mimetypes: string[]
  ratio: number | null
  actionLabel: string
  templates: Template[]
}
type TemplateFile = {
  basename: string
  etag: string
  fileid: bigint
  filename: string | null
  lastmod: bigint
  mime: string
  size: bigint | number
  type: string
  hasPreview: boolean
  permissions: bigint
}
type TemplateFileCreator = {
  app: string
  label: string
  extension: string
  iconClass: string | null
  iconSvgInline: string | null
  mimetypes: string[]
  ratio: number | null
  actionLabel: string
}
type FolderTree = {
  id: bigint
  basename: string
  displayName?: string | undefined
  children: { [x: string]: unknown }[]
}[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/files/api/v1/thumbnail/:x/:y/:file': {
      $get:
        | {
            input: { param: { x: bigint; y: bigint; file: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { x: bigint; y: bigint; file: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { x: bigint; y: bigint; file: string } }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { x: bigint; y: bigint; file: string } }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/directEditing': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  editors: {
                    [x: string]: {
                      id: string
                      name: string
                      mimetypes: string[]
                      optionalMimetypes: string[]
                      secure: boolean
                    }
                  }
                  creators: {
                    [x: string]: {
                      id: string
                      editor: string
                      name: string
                      extension: string
                      templates: boolean
                      mimetypes: string[]
                    }
                  }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/directEditing/templates/:editorId/:creatorId': {
      $get:
        | {
            input: { param: { editorId: string; creatorId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  templates: {
                    [x: string]: {
                      id: string
                      title: string
                      preview: string | null
                      extension: string
                      mimetype: string
                    }
                  }
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { editorId: string; creatorId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { editorId: string; creatorId: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/directEditing/open': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId?: (string | null) | undefined
                fileId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { url: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId?: (string | null) | undefined
                fileId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId?: (string | null) | undefined
                fileId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId?: (string | null) | undefined
                fileId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/directEditing/create': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId: string
                creatorId: string
                templateId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { url: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId: string
                creatorId: string
                templateId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId: string
                creatorId: string
                templateId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path: string
                editorId: string
                creatorId: string
                templateId?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { message: string } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/templates': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: TemplateFileCreatorWithTemplates[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/templates/fields/:fileId': {
      $get:
        | {
            input: { param: { fileId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: TemplateField } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fileId: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/templates/create': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                filePath: string
                templatePath?: string | undefined
                templateType?: string | undefined
                templateFields?: TemplateField[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: TemplateFile } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                filePath: string
                templatePath?: string | undefined
                templateType?: string | undefined
                templateFields?: TemplateField[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                filePath: string
                templatePath?: string | undefined
                templateType?: string | undefined
                templateFields?: TemplateField[] | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/templates/path': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { templatePath?: string | undefined; copySystemTemplates?: boolean | undefined }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { template_path: string; templates: TemplateFileCreator[] }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { templatePath?: string | undefined; copySystemTemplates?: boolean | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { templatePath?: string | undefined; copySystemTemplates?: boolean | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/transferownership': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { recipient: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { recipient: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { recipient: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { recipient: string; path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/transferownership/:id': {
      $post:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/openlocaleditor': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { path: string } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  userId: string | null
                  pathHash: string
                  expirationTime: bigint
                  token: string
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { path: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { path: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/openlocaleditor/:token': {
      $post:
        | {
            input: { param: { token: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { path: string }
            }
            output: {
              ocs: {
                meta: OCSMeta
                data: { userId: string; pathHash: string; expirationTime: bigint; token: string }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { token: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { path: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/folder-tree': {
      $get:
        | {
            input: {
              query: {
                path?: string | undefined
                depth?: bigint | undefined
                withParents?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: FolderTree
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                path?: string | undefined
                depth?: bigint | undefined
                withParents?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { message: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                path?: string | undefined
                depth?: bigint | undefined
                withParents?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                path?: string | undefined
                depth?: bigint | undefined
                withParents?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { message: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/convert': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                fileId: bigint
                targetMimeType: string
                destination?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { path: string; fileId: bigint } } }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                fileId: bigint
                targetMimeType: string
                destination?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                fileId: bigint
                targetMimeType: string
                destination?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files/api/v1/opened': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { fileId: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { fileId: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { fileId: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
