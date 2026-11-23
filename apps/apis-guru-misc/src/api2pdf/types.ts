type ChromeAdvancedOptions = {
  landscape?: string | undefined
  printBackground?: boolean | undefined
}
type ChromeHtmlToPdfRequest = {
  fileName?: string | undefined
  html: string
  inlinePdf?: boolean | undefined
  options?: ChromeAdvancedOptions | undefined
}
type ApiResponseSuccess = {
  cost?: number | undefined
  mbIn?: number | undefined
  mbOut?: number | undefined
  pdf?: string | undefined
  success?: boolean | undefined
}
type ApiResponseFailure = { reason?: string | undefined; success?: boolean | undefined }
type ChromeUrlToPdfRequest = {
  fileName?: string | undefined
  inlinePdf?: boolean | undefined
  options?: ChromeAdvancedOptions | undefined
  url: string
}
type LibreOfficeConvertRequest = {
  fileName?: string | undefined
  inlinePdf?: boolean | undefined
  url: string
}
type MergeRequest = {
  fileName?: string | undefined
  inlinePdf?: boolean | undefined
  urls: string[]
}
type WkHtmlToPdfAdvancedOptions = {
  orientation?: string | undefined
  pageSize?: string | undefined
}
type WkHtmlToPdfHtmlToPdfRequest = {
  fileName?: string | undefined
  html: string
  inlinePdf?: boolean | undefined
  options?: WkHtmlToPdfAdvancedOptions | undefined
}
type WkHtmlToPdfUrlToPdfRequest = {
  fileName?: string | undefined
  inlinePdf?: boolean | undefined
  options?: WkHtmlToPdfAdvancedOptions | undefined
  url: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/chrome/html': {
      $post:
        | {
            input: { json: ChromeHtmlToPdfRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChromeHtmlToPdfRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/chrome/url': {
      $get:
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: ChromeUrlToPdfRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChromeUrlToPdfRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/libreoffice/convert': {
      $post:
        | {
            input: { json: LibreOfficeConvertRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LibreOfficeConvertRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/merge': {
      $post:
        | {
            input: { json: MergeRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MergeRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/wkhtmltopdf/html': {
      $post:
        | {
            input: { json: WkHtmlToPdfHtmlToPdfRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WkHtmlToPdfHtmlToPdfRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/wkhtmltopdf/url': {
      $get:
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { url: string; output?: string | undefined } }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: WkHtmlToPdfUrlToPdfRequest }
            output: ApiResponseSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WkHtmlToPdfUrlToPdfRequest }
            output: ApiResponseFailure
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/zebra': {
      $get: {
        input: {
          query: {
            format: string
            value: string
            showlabel?: boolean | undefined
            height?: number | undefined
            width?: number | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
