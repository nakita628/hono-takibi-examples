type Template = {
  id?: number | undefined
  modified?: string | undefined
  name?: string | undefined
  owner?: boolean | undefined
  tags?: string[] | undefined
}
type Component = {
  cls?:
    | 'labelComponent'
    | 'numberComponent'
    | 'textComponent'
    | 'imageComponent'
    | 'dateComponent'
    | 'hlineComponent'
    | 'vlineComponent'
    | 'tableComponent'
    | 'compositeComponent'
    | 'barcodeComponent'
    | 'qrcodeComponent'
    | 'chartComponent'
    | 'rectangleComponent'
    | 'headerComponent'
    | 'footerComponent'
    | 'checkboxComponent'
    | 'radioComponent'
    | undefined
  dataIndex?: string | undefined
  height?: number | undefined
  id?: string | undefined
  left?: number | undefined
  top?: number | undefined
  value?: string | undefined
  width?: number | undefined
  zindex?: number | undefined
}
type TemplateDefinitionNew = {
  isDraft?: boolean | undefined
  layout?:
    | {
        emptyLabels?: number | undefined
        format?: 'A4' | 'letter' | 'custom' | undefined
        height?: number | undefined
        margins?:
          | {
              bottom?: number | undefined
              left?: number | undefined
              right?: number | undefined
              top?: number | undefined
            }
          | undefined
        orientation?: 'portrait' | 'landscape' | undefined
        repeatLayout?:
          | ({
              format?: 'A4' | 'letter' | 'custom' | undefined
              height?: number | undefined
              width?: number | undefined
            } | null)
          | undefined
        rotaion?: 0 | 90 | 180 | 270 | undefined
        unit?: 'cm' | 'in' | undefined
        width?: number | undefined
      }
    | undefined
  name: string
  pages?:
    | {
        components?: Component[] | undefined
        height?: number | undefined
        margins?: { bottom?: number | undefined; right?: number | undefined } | undefined
        width?: number | undefined
      }[]
    | undefined
  tags?: string[] | undefined
}
type TemplateDefinition = {
  dataSettings?:
    | {
        filterBy?: { [x: string]: unknown }[] | undefined
        sortBy?: { [x: string]: unknown }[] | undefined
      }
    | undefined
  editor?: { heightMultiplier?: number | undefined } | undefined
  id?: number | undefined
  isDraft?: boolean | undefined
  layout?:
    | {
        emptyLabels?: number | undefined
        format?: 'A4' | 'letter' | 'custom' | undefined
        height?: number | undefined
        margins?:
          | {
              bottom?: number | undefined
              left?: number | undefined
              right?: number | undefined
              top?: number | undefined
            }
          | undefined
        orientation?: 'portrait' | 'landscape' | undefined
        repeatLayout?:
          | ({
              format?: 'A4' | 'letter' | 'custom' | undefined
              height?: number | undefined
              width?: number | undefined
            } | null)
          | undefined
        rotation?: 0 | 90 | 180 | 270 | undefined
        unit?: 'cm' | 'in' | undefined
        width?: number | undefined
      }
    | undefined
  name?: string | undefined
  pages?:
    | {
        components?: Component[] | undefined
        height?: number | undefined
        margins?: { bottom?: number | undefined; right?: number | undefined } | undefined
        width?: number | undefined
      }[]
    | undefined
  tags?: string[] | undefined
}
type Data = { id?: number | undefined; name?: string | undefined }
type BatchData = { data?: Data | undefined; template?: number | undefined }[]
type Workspace = {
  created_at?: string | undefined
  id?: number | undefined
  identifier?: string | undefined
  is_master_workspace?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/templates': {
      $get:
        | {
            input: {}
            output: { response?: Template[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {}
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {}
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: TemplateDefinitionNew }
            output: { response?: TemplateDefinition | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TemplateDefinitionNew }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TemplateDefinitionNew }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/output': {
      $post:
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: {
              meta?:
                | {
                    'content-type'?: string | undefined
                    display_name?: string | undefined
                    encoding?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              response?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: BatchData }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/templateId': {
      $delete:
        | {
            input: { query: { templateId: number } }
            output: { response?: { success?: boolean | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { templateId: number } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { templateId: number } }
            output: { response?: TemplateDefinition | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { templateId: number } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { templateId: number } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: { response?: TemplateDefinition | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { templateId: number } } & { json: TemplateDefinitionNew }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/templateId/copy': {
      $post:
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: { response?: TemplateDefinition | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { templateId: number; name?: string | undefined } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/templateId/editor': {
      $post:
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: { response?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: { templateId: number; language?: 'en' | 'et' | 'cs' | 'sk' | 'ru' | undefined }
            } & { json: { [x: string]: unknown } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/templateId/output': {
      $post:
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: {
              meta?:
                | {
                    'content-type'?: string | undefined
                    display_name?: string | undefined
                    encoding?: string | undefined
                    name?: string | undefined
                  }
                | undefined
              response?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                templateId: number
                name?: string | undefined
                format?: 'pdf' | 'html' | 'zip' | 'xlsx' | undefined
                output?: 'base64' | 'url' | 'I' | undefined
              }
            } & { json: Data }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/workspaces/workspaceId': {
      $delete:
        | {
            input: { query: { workspaceId: string } }
            output: { response?: { success?: boolean | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { workspaceId: string } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { workspaceId: string } }
            output: { response?: Workspace | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Authentication failed: request expired'
                | 'Authentication failed: signature or secret missing'
                | 'Authentication failed: workspace missing'
                | 'Authentication failed: key missing'
                | "Authentication failed: property 'iss' (issuer) missing in JWT"
                | "Authentication failed: property 'sub' (subject) missing in JWT"
                | "Authentication failed: property 'exp' (expiration time) missing in JWT"
                | "Authentication failed: invalid 'iss' (issuer)"
                | 'Authentication failed: incorrect signature'
                | 'Authentication failed'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?: 'Your account has exceeded the monthly document generation limit.' | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Entity not found'
                | 'Resource not found'
                | 'None of the templates is available for the workspace.'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { workspaceId: string } }
            output: {
              error?:
                | 'Unable to parse JSON, please check formatting'
                | 'Required parameter missing'
                | 'Required parameter missing: template definition not defined'
                | 'Required parameter missing: template not defined'
                | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { workspaceId: string } }
            output: { error?: string | undefined; status?: number | undefined }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
