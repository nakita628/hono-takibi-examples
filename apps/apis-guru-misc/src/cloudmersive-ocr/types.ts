type OcrWordElement = {
  BlockNumber?: number | undefined
  ConfidenceLevel?: number | undefined
  Height?: number | undefined
  LineNumber?: number | undefined
  PageNumber?: number | undefined
  ParagraphNumber?: number | undefined
  Width?: number | undefined
  WordNumber?: number | undefined
  WordText?: string | undefined
  XLeft?: number | undefined
  YTop?: number | undefined
}
type OcrLineElement = { LineText?: string | undefined; Words?: OcrWordElement[] | undefined }
type ImageToLinesWithLocationResult = {
  Lines?: OcrLineElement[] | undefined
  Successful?: boolean | undefined
}
type ImageToWordsWithLocationResult = {
  Successful?: boolean | undefined
  Words?: OcrWordElement[] | undefined
}
type ImageToTextResponse = {
  MeanConfidenceLevel?: number | undefined
  TextResult?: string | undefined
}
type OcrPageResultWithLinesWithLocation = {
  Lines?: OcrLineElement[] | undefined
  PageNumber?: number | undefined
  Successful?: boolean | undefined
}
type PdfToLinesWithLocationResult = {
  OcrPages?: OcrPageResultWithLinesWithLocation[] | undefined
  Successful?: boolean | undefined
}
type OcrPageResultWithWordsWithLocation = {
  PageNumber?: number | undefined
  Successful?: boolean | undefined
  Words?: OcrWordElement[] | undefined
}
type PdfToWordsWithLocationResult = {
  OcrPages?: OcrPageResultWithWordsWithLocation[] | undefined
  Successful?: boolean | undefined
}
type OcrPageResult = {
  MeanConfidenceLevel?: number | undefined
  PageNumber?: number | undefined
  TextResult?: string | undefined
}
type PdfToTextResponse = {
  OcrPages?: OcrPageResult[] | undefined
  Successful?: boolean | undefined
}
type BusinessCardRecognitionResult = {
  AddressString?: string | undefined
  BusinessName?: string | undefined
  EmailAddress?: string | undefined
  PersonName?: string | undefined
  PersonTitle?: string | undefined
  PhoneNumber?: string | undefined
  Successful?: boolean | undefined
  Timestamp?: string | undefined
}
type FormFieldDefinition = {
  AllowNumericDigits?: boolean | undefined
  AlternateAnchor?: string | undefined
  AnchorMode?: string | undefined
  BottomAnchor?: string | undefined
  DataType?: string | undefined
  FieldID?: string | undefined
  HorizontalAlignmentType?: string | undefined
  Ignore?: string[] | undefined
  LeftAnchor?: string | undefined
  MinimumCharacterCount?: number | undefined
  Options?: string | undefined
  TargetDigitCount?: number | undefined
  TargetFieldHeight_Relative?: number | undefined
  TargetFieldHorizontalAdjustment?: number | undefined
  TargetFieldVerticalAdjustment?: number | undefined
  TargetFieldWidth_Relative?: number | undefined
  TopAnchor?: string | undefined
  VerticalAlignmentType?: string | undefined
}
type FormTableColumnDefinition = {
  AllowNumericDigits?: boolean | undefined
  AnchorMode?: string | undefined
  ColumnID?: string | undefined
  DataType?: string | undefined
  MinimumCharacterCount?: number | undefined
  TopAnchor?: string | undefined
}
type FormTableDefinition = {
  ColumnDefinitions?: FormTableColumnDefinition[] | undefined
  TableID?: string | undefined
  TargetRowHeight_Relative?: number | undefined
  TargetTableHeight_Relative?: number | undefined
}
type FormDefinitionTemplate = {
  FieldDefinitions?: FormFieldDefinition[] | undefined
  TableDefinitions?: FormTableDefinition[] | undefined
}
type Point = { X?: number | undefined; Y?: number | undefined }
type OcrPhotoTextElement = {
  BoundingPoints?: Point[] | undefined
  ConfidenceLevel?: number | undefined
  Height?: number | undefined
  Text?: string | undefined
  Width?: number | undefined
  XLeft?: number | undefined
  YTop?: number | undefined
}
type FieldResult = {
  FieldValues?: OcrPhotoTextElement[] | undefined
  TargetField?: FormFieldDefinition | undefined
}
type TableCellResult = {
  CellValues?: OcrPhotoTextElement[] | undefined
  ColumnID?: string | undefined
}
type TableRowResult = { TableRowCellsResult?: TableCellResult[] | undefined }
type TableResult = {
  TableDefinition?: FormTableDefinition | undefined
  TableRowsResult?: TableRowResult[] | undefined
}
type FormRecognitionResult = {
  BestMatchFormSettingName?: string | undefined
  Diagnostics?: string[] | undefined
  FieldValueExtractionResult?: FieldResult[] | undefined
  Successful?: boolean | undefined
  TableValueExtractionResults?: TableResult[] | undefined
}
type ReceiptLineItem = { ItemDescription?: string | undefined; ItemPrice?: number | undefined }
type ReceiptRecognitionResult = {
  AddressString?: string | undefined
  BusinessName?: string | undefined
  BusinessWebsite?: string | undefined
  PhoneNumber?: string | undefined
  ReceiptItems?: ReceiptLineItem[] | undefined
  ReceiptSubTotal?: number | undefined
  ReceiptTotal?: number | undefined
  Successful?: boolean | undefined
  Timestamp?: string | undefined
}
type PhotoToWordsWithLocationResult = {
  DiagnosticImage?: string | undefined
  Successful?: boolean | undefined
  TextElements?: OcrPhotoTextElement[] | undefined
}
type GetPageAngleResult = { Angle?: number | undefined; Successful?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocr/image/to/lines-with-location': {
      $post:
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToLinesWithLocationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/image/to/words-with-location': {
      $post:
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToWordsWithLocationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/image/toText': {
      $post:
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/pdf/to/lines-with-location': {
      $post:
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToLinesWithLocationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToLinesWithLocationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/pdf/to/words-with-location': {
      $post:
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToWordsWithLocationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { language?: string | undefined; preprocessing?: string | undefined }
            } & { form: { imageFile: File } }
            output: PdfToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/pdf/toText': {
      $post:
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PdfToTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PdfToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PdfToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PdfToTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/recognize/business-card': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: BusinessCardRecognitionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: BusinessCardRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: BusinessCardRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: BusinessCardRecognitionResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/recognize/form': {
      $post:
        | {
            input: {
              header: {
                formTemplateDefinition?: FormDefinitionTemplate | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
                language?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                formTemplateDefinition?: FormDefinitionTemplate | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
                language?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                formTemplateDefinition?: FormDefinitionTemplate | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
                language?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                formTemplateDefinition?: FormDefinitionTemplate | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
                language?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/recognize/form/advanced': {
      $post:
        | {
            input: {
              header: {
                bucketID?: string | undefined
                bucketSecretKey?: string | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                bucketID?: string | undefined
                bucketSecretKey?: string | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                bucketID?: string | undefined
                bucketSecretKey?: string | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                bucketID?: string | undefined
                bucketSecretKey?: string | undefined
                recognitionMode?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: FormRecognitionResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/recognize/receipt': {
      $post:
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ReceiptRecognitionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ReceiptRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ReceiptRecognitionResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: ReceiptRecognitionResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/to/words-with-location': {
      $post:
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PhotoToWordsWithLocationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PhotoToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PhotoToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                recognitionMode?: string | undefined
                language?: string | undefined
                preprocessing?: string | undefined
                diagnostics?: string | undefined
              }
            } & { form: { imageFile: File } }
            output: PhotoToWordsWithLocationResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/photo/toText': {
      $post:
        | {
            input: {
              header: { recognitionMode?: string | undefined; language?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { recognitionMode?: string | undefined; language?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { recognitionMode?: string | undefined; language?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: { recognitionMode?: string | undefined; language?: string | undefined }
            } & { form: { imageFile: File } }
            output: ImageToTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/binarize': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/binarize/advanced': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/get-page-angle': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: GetPageAngleResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: GetPageAngleResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: GetPageAngleResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: GetPageAngleResult
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/unrotate': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/unrotate/advanced': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/preprocessing/image/unskew': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/ocr/receipts/photo/to/csv': {
      $post:
        | {
            input: { form: { imageFile: File } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { form: { imageFile: File } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
