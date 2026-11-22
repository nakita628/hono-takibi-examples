type DocumentUploadFailure = { Code?: string | undefined; Message?: string | undefined }
type ErrorModel = { detail: string; status: number }
type DocumentUploadAttributes = {
  code?: string | undefined
  detail?: string | undefined
  guid: string
  location?: string | undefined
  status: 'pending' | 'uploaded' | 'received' | 'processing' | 'success' | 'vbms' | 'error'
  updated_at?: string | undefined
  uploaded_pdf?: { [x: string]: unknown } | undefined
}
type DocumentUploadPath = { attributes: DocumentUploadAttributes; id: string; type: string }
type DocumentUploadStatusGuidList = { ids: string[] }
type PdfDimensionAttributes = { height: number; oversized_pdf: boolean; width: number }
type PdfUploadAttributes = {
  content: {
    attachments?:
      | { dimensions?: PdfDimensionAttributes | undefined; page_count?: number | undefined }[]
      | undefined
    dimensions?: PdfDimensionAttributes | undefined
    page_count?: number | undefined
  }
  total_documents: number
  total_pages: number
}
type DocumentUploadStatusAttributes = {
  code?: string | undefined
  detail?: string | undefined
  guid: string
  message?: string | undefined
  status: 'pending' | 'uploaded' | 'received' | 'processing' | 'success' | 'vbms' | 'error'
  updated_at?: string | undefined
  uploaded_pdf?: PdfUploadAttributes | undefined
}
type DocumentUploadStatus = { attributes: DocumentUploadStatusAttributes; id: string; type: string }
type DocumentUploadStatusReport = DocumentUploadStatus[]
type DocumentValidationErrorModel = { detail: string; status: string; title: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/path': {
      $put:
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: DocumentUploadFailure
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: { errors: ErrorModel[] }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Content-MD5'?: string | undefined } }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads': {
      $post:
        | { input: {}; output: { data: DocumentUploadPath }; outputFormat: 'json'; status: 202 }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { errors: ErrorModel[] }; outputFormat: 'json'; status: 422 }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/report': {
      $post:
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: { data: DocumentUploadStatusReport }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: { errors: ErrorModel[] }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: DocumentUploadStatusGuidList }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/validate_document': {
      $post:
        | {
            input: {}
            output: {
              data?:
                | {
                    attributes?: { status?: string | undefined } | undefined
                    type?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 403 }
        | {
            input: {}
            output: { errors: DocumentValidationErrorModel[] }
            outputFormat: 'json'
            status: 422
          }
        | { input: {}; output: { Message?: string | undefined }; outputFormat: 'json'; status: 429 }
        | {
            input: {}
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data: DocumentUploadStatus }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploads/:id/download': {
      $get:
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: { Message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: {
              code?: string | undefined
              detail?: string | undefined
              status?: string | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
