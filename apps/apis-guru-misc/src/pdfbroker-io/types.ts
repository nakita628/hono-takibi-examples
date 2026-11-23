type ErrorResponseDto = {
  Description?: (string | null) | undefined
  ErrorMessage?: (string | null) | undefined
  StatusCode?: number | undefined
}
type PdfConcatenationRequestDto = { PdfDocumentsAsBase64String?: (string[] | null) | undefined }
type PdfResponseDto = {
  ErrorMessage?: (string | null) | undefined
  PdfFileBase64String?: (string | null) | undefined
}
type PdfToImageOptions = {
  Height?: number | undefined
  HorizontalResolution?: number | undefined
  ImageFormat?: (string | null) | undefined
  JpegQuality?: number | undefined
  PageNumber?: number | undefined
  PngCompressionLevel?: number | undefined
  Transparent?: boolean | undefined
  VerticalResolution?: number | undefined
  Width?: number | undefined
}
type PdfToImageRequestDto = {
  Options?: PdfToImageOptions | undefined
  PdfFileBase64String?: (string | null) | undefined
}
type ImageResponseDto = {
  ErrorMessage?: (string | null) | undefined
  ImageBase64String?: (string | null) | undefined
}
type FontStyle = 0 | 1 | 2 | 3
type FontDto = {
  Name?: (string | null) | undefined
  Size?: number | undefined
  Style?: FontStyle | undefined
}
type ColorDto = { B?: number | undefined; G?: number | undefined; R?: number | undefined }
type XOriginPoint = 0 | 1 | 2
type YOriginPoint = 0 | 1 | 2
type PdfWriteStringOptions = {
  Font?: FontDto | undefined
  PageNumber?: number | undefined
  Text?: (string | null) | undefined
  TextColor?: ColorDto | undefined
  XOrigin?: XOriginPoint | undefined
  XPosition?: number | undefined
  YOrigin?: YOriginPoint | undefined
  YPosition?: number | undefined
}
type PdfWriteStringRequestDto = {
  FontFileBase64String?: (string | null) | undefined
  Options?: PdfWriteStringOptions | undefined
  PdfFileBase64String?: (string | null) | undefined
}
type WkHtmlToPdfRequestDto = {
  HtmlBase64String?: (string | null) | undefined
  Resources?: ({ [x: string]: string } | null) | undefined
  Url?: (string | null) | undefined
  WkHtmlToPdfArguments?: ({ [x: string]: string } | null) | undefined
}
type PdfMetadataDto = {
  Author?: (string | null) | undefined
  EnableAdd?: boolean | undefined
  EnableCopy?: boolean | undefined
  EnableModify?: boolean | undefined
  EnablePrinting?: boolean | undefined
  Keywords?: (string[] | null) | undefined
  OwnerPassword?: (string | null) | undefined
  Subject?: (string | null) | undefined
  Title?: (string | null) | undefined
  UserPassword?: (string | null) | undefined
}
type FoRequestDto = {
  FoDocumentBase64String?: (string | null) | undefined
  Metadata?: PdfMetadataDto | undefined
  Resources?: ({ [x: string]: string } | null) | undefined
}
type FoTransformRequestDto = {
  FoDocumentBase64String?: (string | null) | undefined
  Metadata?: PdfMetadataDto | undefined
  Resources?: ({ [x: string]: string } | null) | undefined
  XmlDataDocumentBase64String?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/pdf': {
      $get:
        | { input: {}; output: ErrorResponseDto; outputFormat: 'json'; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/pdf/pdfconcat': {
      $post:
        | {
            input: { json: PdfConcatenationRequestDto } & {
              form: { pdfdocument1?: File | undefined; pdfdocument2?: File | undefined }
            }
            output: PdfResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PdfConcatenationRequestDto } & {
              form: { pdfdocument1?: File | undefined; pdfdocument2?: File | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PdfConcatenationRequestDto } & {
              form: { pdfdocument1?: File | undefined; pdfdocument2?: File | undefined }
            }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PdfConcatenationRequestDto } & {
              form: { pdfdocument1?: File | undefined; pdfdocument2?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: PdfConcatenationRequestDto } & {
              form: { pdfdocument1?: File | undefined; pdfdocument2?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/pdf/pdftoimage': {
      $post:
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: ImageResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: PdfToImageRequestDto } & {
              form: { options?: string | undefined; pdfdocument?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/pdf/pdfwritestring': {
      $post:
        | {
            input: { json: PdfWriteStringRequestDto } & {
              form: {
                fontfile?: File | undefined
                options?: string | undefined
                pdfdocument?: File | undefined
              }
            }
            output: PdfResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PdfWriteStringRequestDto } & {
              form: {
                fontfile?: File | undefined
                options?: string | undefined
                pdfdocument?: File | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: PdfWriteStringRequestDto } & {
              form: {
                fontfile?: File | undefined
                options?: string | undefined
                pdfdocument?: File | undefined
              }
            }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PdfWriteStringRequestDto } & {
              form: {
                fontfile?: File | undefined
                options?: string | undefined
                pdfdocument?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: PdfWriteStringRequestDto } & {
              form: {
                fontfile?: File | undefined
                options?: string | undefined
                pdfdocument?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/pdf/wkhtmltopdf': {
      $post:
        | {
            input: { json: WkHtmlToPdfRequestDto }
            output: PdfResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WkHtmlToPdfRequestDto }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: WkHtmlToPdfRequestDto }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: WkHtmlToPdfRequestDto }; output: {}; outputFormat: string; status: 415 }
        | { input: { json: WkHtmlToPdfRequestDto }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/pdf/xslfo': {
      $post:
        | {
            input: { json: FoRequestDto } & {
              form: {
                fodocument?: File | undefined
                metadata?: (string | null) | undefined
                resources?: File | undefined
              }
            }
            output: PdfResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FoRequestDto } & {
              form: {
                fodocument?: File | undefined
                metadata?: (string | null) | undefined
                resources?: File | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: FoRequestDto } & {
              form: {
                fodocument?: File | undefined
                metadata?: (string | null) | undefined
                resources?: File | undefined
              }
            }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FoRequestDto } & {
              form: {
                fodocument?: File | undefined
                metadata?: (string | null) | undefined
                resources?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: FoRequestDto } & {
              form: {
                fodocument?: File | undefined
                metadata?: (string | null) | undefined
                resources?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/pdf/xslfowithtransform': {
      $post:
        | {
            input: { json: FoTransformRequestDto } & {
              form: {
                fodocument?: File | undefined
                resources?: File | undefined
                xmldatadocument?: File | undefined
              }
            }
            output: PdfResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FoTransformRequestDto } & {
              form: {
                fodocument?: File | undefined
                resources?: File | undefined
                xmldatadocument?: File | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: FoTransformRequestDto } & {
              form: {
                fodocument?: File | undefined
                resources?: File | undefined
                xmldatadocument?: File | undefined
              }
            }
            output: ErrorResponseDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FoTransformRequestDto } & {
              form: {
                fodocument?: File | undefined
                resources?: File | undefined
                xmldatadocument?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: FoTransformRequestDto } & {
              form: {
                fodocument?: File | undefined
                resources?: File | undefined
                xmldatadocument?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
