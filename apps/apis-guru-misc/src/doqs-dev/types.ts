type Format = 'a0' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6'
type Orientation = 'landscape' | 'portrait'
type DesignerTemplate = {
  components: { [x: string]: unknown }[]
  created_at?: string | undefined
  css: string
  footer_html?: string | undefined
  format: Format
  header_html?: string | undefined
  id?: string | undefined
  name: string
  orientation: Orientation
  preview_payload: { [x: string]: unknown }
  template_html: string
}
type ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate = { results: DesignerTemplate[] }
type ResponseError = { message: string }
type CreateOrUpdateTemplateRequest = {
  components: { [x: string]: unknown }[]
  css: string
  footer_html?: string | undefined
  format: Format
  header_html?: string | undefined
  name: string
  orientation: Orientation
  preview_payload: { [x: string]: unknown }
  template_html: string
}
type ResponseOkDesignerTemplate = { results: DesignerTemplate }
type PreviewModel = {
  css: string
  data: { [x: string]: unknown }
  footer_html?: string | undefined
  header_html?: string | undefined
  template_html: string
}
type PreviewResponse = { html: string }
type ResponseOkPreviewResponse = { results: PreviewResponse }
type ResponseOkNoneType = { results: { [x: string]: unknown } | null }
type GeneratePDFPayload = { data: { [x: string]: unknown } }
type BoundingBox = { height: number; width: number; x: number; y: number }
type DateField = {
  bbox: BoundingBox
  cell_count?: number | undefined
  cell_offset?: number | undefined
  cells?: boolean | undefined
  color?: string | undefined
  font?: {} | undefined
  font_size?: number | undefined
  format: string
  h_align?: {} | undefined
  locale?: string | undefined
  name: string
  page: number
  required?: boolean | undefined
  type: 'date'
  v_align?: {} | undefined
}
type TextField = {
  bbox: BoundingBox
  cell_count?: number | undefined
  cell_offset?: number | undefined
  cells?: boolean | undefined
  color?: string | undefined
  font?: {} | undefined
  font_size?: number | undefined
  h_align?: {} | undefined
  name: string
  page: number
  required?: boolean | undefined
  type: 'text'
  v_align?: {} | undefined
}
type ImageField = {
  anchor?: {} | undefined
  bbox: BoundingBox
  name: string
  page: number
  required?: boolean | undefined
  type?: 'image' | undefined
}
type CheckBoxField = {
  bbox: BoundingBox
  eval?: boolean | string | undefined
  name: string
  page: number
  required?: boolean | undefined
  type: 'check'
}
type Template = {
  created_at?: string | undefined
  fields?: (DateField | TextField | ImageField | CheckBoxField)[] | undefined
  id?: string | undefined
  name?: string | undefined
  pages: number
  size_bytes?: number | undefined
}
type ResponseOkListAppsApiRoutesTemplatesTemplate = { results: Template[] }
type BodyCreate = { file: File }
type ResponseOkTemplate = { results: Template }
type UpdateTemplateRequest = {
  fields: (DateField | TextField | ImageField | CheckBoxField)[]
  name?: string | undefined
}
type ResponseOkHttpUrl = { results: string }
type FillTemplateRequest = { data?: { [x: string]: unknown } | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/designer/templates/': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateOrUpdateTemplateRequest }
            output: ResponseOkDesignerTemplate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOrUpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateOrUpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/designer/templates/preview': {
      $post:
        | {
            input: { json: PreviewModel }
            output: ResponseOkPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PreviewModel }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PreviewModel }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/designer/templates/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: ResponseOkNoneType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ResponseOkDesignerTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & { json: CreateOrUpdateTemplateRequest }
            output: ResponseOkDesignerTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateOrUpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CreateOrUpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/designer/templates/:id/generate': {
      $post:
        | {
            input: { param: { id: string } } & { json: GeneratePDFPayload }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GeneratePDFPayload }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: GeneratePDFPayload }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseOkListAppsApiRoutesTemplatesTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { form: BodyCreate }
            output: ResponseOkTemplate
            outputFormat: 'json'
            status: 201
          }
        | { input: { form: BodyCreate }; output: ResponseError; outputFormat: 'json'; status: 400 }
        | { input: { form: BodyCreate }; output: ResponseError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/templates/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: ResponseOkNoneType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } }
            output: ResponseOkTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateTemplateRequest }
            output: ResponseOkTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:id/file': {
      $get:
        | {
            input: { param: { id: string } }
            output: ResponseOkHttpUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:id/fill': {
      $post:
        | {
            input: { param: { id: string } } & { json: FillTemplateRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: FillTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: FillTemplateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
