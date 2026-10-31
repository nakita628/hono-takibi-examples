import { createRoute, z } from '@hono/zod-openapi'

const BusinessCardRecognitionResultSchema = z
  .object({
    AddressString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The address printed on the business card (if included on the business card)',
      }),
    BusinessName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the business printed on the business card (if included on the business card)',
      }),
    EmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address printed on the business card (if included on the business card)',
      }),
    PersonName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the person printed on the business card (if included on the business card)',
      }),
    PersonTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the person printed on the business card (if included on the business card)',
      }),
    PhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number printed on the business card (if included on the business card)',
      }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the operation was successful, false otherwise' }),
    Timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time printed on the business card (if included on the business card)',
      }),
  })
  .openapi({
    description:
      'Result of recognizing a business card, to extract the key information from the business card',
    required: [],
  })
  .openapi('BusinessCardRecognitionResult')

const PointSchema = z
  .object({
    X: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'X location in 2D in the image, where 0 represents the left edge of the image',
      }),
    Y: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Y location in 2D in the image, where 0 represents the top edge of the image',
      }),
  })
  .openapi({
    description:
      'Point location in 2D in an image, where 0, 0 represents the top/left corner of the image',
    required: [],
  })
  .openapi('Point')

const OcrPhotoTextElementSchema = z
  .object({
    BoundingPoints: z
      .array(PointSchema)
      .exactOptional()
      .openapi({ description: 'Points that form the bounding polygon around the text' }),
    ConfidenceLevel: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)',
      }),
    Height: z.int32().exactOptional().openapi({ description: 'Height of the word in pixels' }),
    Text: z.string().exactOptional().openapi({ description: 'Text of the word' }),
    Width: z.int32().exactOptional().openapi({ description: 'Width of the word in pixels' }),
    XLeft: z
      .int32()
      .exactOptional()
      .openapi({ description: 'X location of the left edge of the word in pixels' }),
    YTop: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y location of the top edge of the word in pixels' }),
  })
  .openapi({ description: 'A single text in an OCR document', required: [] })
  .openapi('OcrPhotoTextElement')

const FormFieldDefinitionSchema = z
  .object({
    AllowNumericDigits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
      }),
    AlternateAnchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional - alterate match text for the specified anchor' }),
    AnchorMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.',
      }),
    BottomAnchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional - the bottom anchor of the field' }),
    DataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
      }),
    FieldID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.',
      }),
    HorizontalAlignmentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right',
      }),
    Ignore: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional - Ignore any result items that contain a partial or complete match with these text strings',
      }),
    LeftAnchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional - the left-hand anchor of the field' }),
    MinimumCharacterCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional - the target number of digits in the field; useful for fixed-length fields',
      }),
    Options: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)',
      }),
    TargetDigitCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional - the target number of digits in the field; useful for fixed-length fields',
      }),
    TargetFieldHeight_Relative: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional - scale factor for target field height - relative to height of field title',
      }),
    TargetFieldHorizontalAdjustment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Optional - horizontal adjestment in relative width of the field' }),
    TargetFieldVerticalAdjustment: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Optional - vertical adjestment in relative height of the field' }),
    TargetFieldWidth_Relative: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.',
      }),
    TopAnchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional - the top anchor of the field' }),
    VerticalAlignmentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom',
      }),
  })
  .openapi({
    description: 'Definition of a form field for OCR data extraction from images',
    required: [],
  })
  .openapi('FormFieldDefinition')

const FieldResultSchema = z
  .object({
    FieldValues: z
      .array(OcrPhotoTextElementSchema)
      .exactOptional()
      .openapi({ description: 'Result field value(s) extracted' }),
    TargetField: FormFieldDefinitionSchema.exactOptional(),
  })
  .openapi({ description: 'A pairing target field and actual value read from form', required: [] })
  .openapi('FieldResult')

const FormTableColumnDefinitionSchema = z
  .object({
    AllowNumericDigits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
      }),
    AnchorMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.',
      }),
    ColumnID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the field; use this to identify which field is being referenced',
      }),
    DataType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
      }),
    MinimumCharacterCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional - the target number of digits in the field; useful for fixed-length fields',
      }),
    TopAnchor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional - the top anchor of the column heading' }),
  })
  .openapi({
    description: 'Definition of a column within a table for OCR data extraction from images',
    required: [],
  })
  .openapi('FormTableColumnDefinition')

const FormTableDefinitionSchema = z
  .object({
    ColumnDefinitions: z
      .array(FormTableColumnDefinitionSchema)
      .exactOptional()
      .openapi({ description: 'Definition of the columns in the table' }),
    TableID: z.string().exactOptional().openapi({ description: 'Optional; the ID of the table' }),
    TargetRowHeight_Relative: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional - scale factor for target row height - relative to height of column header',
      }),
    TargetTableHeight_Relative: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional - scale factor for target table height - relative to maximum height of headers of columns',
      }),
  })
  .openapi({
    description: 'Definition of a form table for OCR data extraction from images',
    required: [],
  })
  .openapi('FormTableDefinition')

const FormDefinitionTemplateSchema = z
  .object({
    FieldDefinitions: z
      .array(FormFieldDefinitionSchema)
      .exactOptional()
      .openapi({
        description: 'Field definitions in the template; a field is comprised of a key/value pair',
      }),
    TableDefinitions: z
      .array(FormTableDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice',
      }),
  })
  .openapi({
    description:
      'Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR',
    required: [],
  })
  .openapi('FormDefinitionTemplate')

const TableCellResultSchema = z
  .object({
    CellValues: z
      .array(OcrPhotoTextElementSchema)
      .exactOptional()
      .openapi({ description: 'Result cell value(s) extracted' }),
    ColumnID: z.string().exactOptional().openapi({ description: 'The ID of the column' }),
  })
  .openapi({
    description: 'The recognition result of one cell in one row in a table of a form',
    required: [],
  })
  .openapi('TableCellResult')

const TableRowResultSchema = z
  .object({
    TableRowCellsResult: z
      .array(TableCellResultSchema)
      .exactOptional()
      .openapi({ description: 'Table cells in this row result' }),
  })
  .openapi({ description: 'One row of data in the resulting table', required: [] })
  .openapi('TableRowResult')

const TableResultSchema = z
  .object({
    TableDefinition: FormTableDefinitionSchema.exactOptional(),
    TableRowsResult: z
      .array(TableRowResultSchema)
      .exactOptional()
      .openapi({ description: 'Rows of data in the table' }),
  })
  .openapi({ description: 'The result of reading a table via OCR from a form', required: [] })
  .openapi('TableResult')

const FormRecognitionResultSchema = z
  .object({
    BestMatchFormSettingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional; populated when using photo/recognize/form/advanced with the Setting Name of the best-matching highest-relevance form',
      }),
    Diagnostics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Diagnostic images - default is null, enable diagnostics=true to populate this parameter with one image per field',
      }),
    FieldValueExtractionResult: z
      .array(FieldResultSchema)
      .exactOptional()
      .openapi({ description: 'Result of form field OCR data extraction' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the operation was successful, false otherwise' }),
    TableValueExtractionResults: z
      .array(TableResultSchema)
      .exactOptional()
      .openapi({ description: 'Result of form table OCR data extraction' }),
  })
  .openapi({ description: 'The result of extracting form field values', required: [] })
  .openapi('FormRecognitionResult')

const GetPageAngleResultSchema = z
  .object({
    Angle: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Angle of the page in radians; 0 represents perfectly horizontal' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the operation was successful, false otherwise' }),
  })
  .openapi({ description: 'Result of performing a get-page-angle operation', required: [] })
  .openapi('GetPageAngleResult')

const OcrWordElementSchema = z
  .object({
    BlockNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the containing block' }),
    ConfidenceLevel: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)',
      }),
    Height: z.int32().exactOptional().openapi({ description: 'Height of the word in pixels' }),
    LineNumber: z.int32().exactOptional().openapi({ description: 'Line number of the word' }),
    PageNumber: z.int32().exactOptional().openapi({ description: 'Index of the containing page' }),
    ParagraphNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the containing paragraph' }),
    Width: z.int32().exactOptional().openapi({ description: 'Width of the word in pixels' }),
    WordNumber: z.int32().exactOptional().openapi({ description: 'Index of the word in the line' }),
    WordText: z.string().exactOptional().openapi({ description: 'Text of the word' }),
    XLeft: z
      .int32()
      .exactOptional()
      .openapi({ description: 'X location of the left edge of the word in pixels' }),
    YTop: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y location of the top edge of the word in pixels' }),
  })
  .openapi({ description: 'A single word in an OCR document', required: [] })
  .openapi('OcrWordElement')

const OcrLineElementSchema = z
  .object({
    LineText: z.string().exactOptional().openapi({ description: 'Text of the line' }),
    Words: z
      .array(OcrWordElementSchema)
      .exactOptional()
      .openapi({ description: 'Word objects in the line' }),
  })
  .openapi({ description: 'A contiguous line of text in an OCR document', required: [] })
  .openapi('OcrLineElement')

const ImageToLinesWithLocationResultSchema = z
  .object({
    Lines: z
      .array(OcrLineElementSchema)
      .exactOptional()
      .openapi({ description: 'Words in the image' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
  })
  .openapi({ description: 'Result of an image to lines-with-location OCR operation', required: [] })
  .openapi('ImageToLinesWithLocationResult')

const ImageToTextResponseSchema = z
  .object({
    MeanConfidenceLevel: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Confidence level rating of the OCR operation; ratings above 80% are strong.',
      }),
    TextResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Converted text string from the image input.' }),
  })
  .openapi({
    description:
      'Response from an OCR to text operation.  Includes the confience rating and converted text result.',
    required: [],
  })
  .openapi('ImageToTextResponse')

const ImageToWordsWithLocationResultSchema = z
  .object({
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
    Words: z
      .array(OcrWordElementSchema)
      .exactOptional()
      .openapi({ description: 'Word elements in the image' }),
  })
  .openapi({ description: 'Result of an image to words-with-location OCR operation', required: [] })
  .openapi('ImageToWordsWithLocationResult')

const OcrPageResultSchema = z
  .object({
    MeanConfidenceLevel: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Confidence level rating of the OCR operation; ratings above 80% are strong.',
      }),
    PageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file',
      }),
    TextResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'Converted text string from the image input.' }),
  })
  .openapi({ required: [] })
  .openapi('OcrPageResult')

const OcrPageResultWithLinesWithLocationSchema = z
  .object({
    Lines: z
      .array(OcrLineElementSchema)
      .exactOptional()
      .openapi({ description: 'Word elements in the image' }),
    PageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file',
      }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
  })
  .openapi({
    description: 'OCR results of a page, including lines of text and their location',
    required: [],
  })
  .openapi('OcrPageResultWithLinesWithLocation')

const OcrPageResultWithWordsWithLocationSchema = z
  .object({
    PageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file',
      }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
    Words: z
      .array(OcrWordElementSchema)
      .exactOptional()
      .openapi({ description: 'Word elements in the image' }),
  })
  .openapi({
    description: 'OCR results of a page, including words of text and their location',
    required: [],
  })
  .openapi('OcrPageResultWithWordsWithLocation')

const PdfToLinesWithLocationResultSchema = z
  .object({
    OcrPages: z
      .array(OcrPageResultWithLinesWithLocationSchema)
      .exactOptional()
      .openapi({ description: 'OCR results for each page' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
  })
  .openapi({
    description:
      'Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.',
    required: [],
  })
  .openapi('PdfToLinesWithLocationResult')

const PdfToTextResponseSchema = z
  .object({
    OcrPages: z
      .array(OcrPageResultSchema)
      .exactOptional()
      .openapi({ description: 'Page OCR results' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
  })
  .openapi({
    description:
      'Response from an OCR to text operation.  Includes the confidence rating and converted text result.',
    required: [],
  })
  .openapi('PdfToTextResponse')

const PdfToWordsWithLocationResultSchema = z
  .object({
    OcrPages: z
      .array(OcrPageResultWithWordsWithLocationSchema)
      .exactOptional()
      .openapi({ description: 'OCR page results' }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
  })
  .openapi({
    description:
      'Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.',
    required: [],
  })
  .openapi('PdfToWordsWithLocationResult')

const PhotoToWordsWithLocationResultSchema = z
  .object({
    DiagnosticImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header "DiagnosticMode" with the value "true".  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage.',
      }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if successful, false otherwise' }),
    TextElements: z
      .array(OcrPhotoTextElementSchema)
      .exactOptional()
      .openapi({ description: 'Word elements in the image' }),
  })
  .openapi({ description: 'Result of an photo to words-with-location OCR operation', required: [] })
  .openapi('PhotoToWordsWithLocationResult')

const ReceiptLineItemSchema = z
  .object({
    ItemDescription: z.string().exactOptional().openapi({ description: 'Description of the item' }),
    ItemPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Price of the item if available' }),
  })
  .openapi({
    description: 'Receipt line item, comprised of a product or item and a price (if available)',
    required: [],
  })
  .openapi('ReceiptLineItem')

const ReceiptRecognitionResultSchema = z
  .object({
    AddressString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address of the business printed on the receipt (if included on the receipt)',
      }),
    BusinessName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the business printed on the receipt (if included on the receipt)',
      }),
    BusinessWebsite: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The website URL of the business printed on the receipt (if included on the receipt)',
      }),
    PhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The phone number printed on the receipt (if included on the receipt)',
      }),
    ReceiptItems: z
      .array(ReceiptLineItemSchema)
      .exactOptional()
      .openapi({
        description:
          'The individual line items comprising the order; does not include total (see ReceiptTotal)',
      }),
    ReceiptSubTotal: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional; if available, the monetary value of the receipt subtotal - typically not including specialized line items such as Tax. If this value is not available, it will be 0.',
      }),
    ReceiptTotal: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total monetary value of the receipt (if included on the receipt)',
      }),
    Successful: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the operation was successful, false otherwise' }),
    Timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time printed on the receipt (if included on the receipt)',
      }),
  })
  .openapi({
    description: 'Result of recognizing a receipt, to extract the key information from the receipt',
    required: [],
  })
  .openapi('ReceiptRecognitionResult')

const ImageOcrPostRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          imageFile: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description:
                'Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.',
            }),
        })
        .openapi({ required: ['imageFile'] }),
    },
  },
  required: true,
}

const PdfOcrPostRequestBody = {
  content: {
    'multipart/form-data': {
      schema: z
        .object({
          imageFile: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'PDF file to perform OCR on.',
            }),
        })
        .openapi({ required: ['imageFile'] }),
    },
  },
  required: true,
}

const ApikeySecurityScheme = {
  description: 'API Key Authentication',
  in: 'header',
  name: 'Apikey',
  type: 'apiKey',
}

export const postOcrImageToLinesWithLocationRoute = createRoute({
  method: 'post',
  path: '/ocr/image/to/lines-with-location',
  tags: ['ImageOcr'],
  summary: 'Convert a scanned image into words with location',
  description:
    'Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_ImageLinesWithLocation',
  request: {
    headers: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ImageToLinesWithLocationResultSchema },
        'application/xml': { schema: ImageToLinesWithLocationResultSchema },
        'text/json': { schema: ImageToLinesWithLocationResultSchema },
        'text/xml': { schema: ImageToLinesWithLocationResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrImageToWordsWithLocationRoute = createRoute({
  method: 'post',
  path: '/ocr/image/to/words-with-location',
  tags: ['ImageOcr'],
  summary: 'Convert a scanned image into words with location',
  description:
    'Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_ImageWordsWithLocation',
  request: {
    headers: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ImageToWordsWithLocationResultSchema },
        'application/xml': { schema: ImageToWordsWithLocationResultSchema },
        'text/json': { schema: ImageToWordsWithLocationResultSchema },
        'text/xml': { schema: ImageToWordsWithLocationResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrImageToTextRoute = createRoute({
  method: 'post',
  path: '/ocr/image/toText',
  tags: ['ImageOcr'],
  summary: 'Convert a scanned image into text',
  description:
    'Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_Post',
  request: {
    headers: z.object({
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ImageToTextResponseSchema },
        'application/xml': { schema: ImageToTextResponseSchema },
        'text/json': { schema: ImageToTextResponseSchema },
        'text/xml': { schema: ImageToTextResponseSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPdfToLinesWithLocationRoute = createRoute({
  method: 'post',
  path: '/ocr/pdf/to/lines-with-location',
  tags: ['PdfOcr'],
  summary: 'Convert a PDF into text lines with location',
  description:
    'Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.',
  operationId: 'PdfOcr_PdfToLinesWithLocation',
  request: {
    headers: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PdfOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PdfToLinesWithLocationResultSchema },
        'application/xml': { schema: PdfToLinesWithLocationResultSchema },
        'text/json': { schema: PdfToLinesWithLocationResultSchema },
        'text/xml': { schema: PdfToLinesWithLocationResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPdfToWordsWithLocationRoute = createRoute({
  method: 'post',
  path: '/ocr/pdf/to/words-with-location',
  tags: ['PdfOcr'],
  summary: 'Convert a PDF into words with location',
  description:
    'Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.',
  operationId: 'PdfOcr_PdfToWordsWithLocation',
  request: {
    headers: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PdfOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PdfToWordsWithLocationResultSchema },
        'application/xml': { schema: PdfToWordsWithLocationResultSchema },
        'text/json': { schema: PdfToWordsWithLocationResultSchema },
        'text/xml': { schema: PdfToWordsWithLocationResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPdfToTextRoute = createRoute({
  method: 'post',
  path: '/ocr/pdf/toText',
  tags: ['PdfOcr'],
  summary: 'Converts an uploaded PDF file into text via Optical Character Recognition.',
  operationId: 'PdfOcr_Post',
  request: {
    headers: z.object({
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls per page; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls per page; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls per page.  Default recognition mode is 'Basic'",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PdfOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PdfToTextResponseSchema },
        'application/xml': { schema: PdfToTextResponseSchema },
        'text/json': { schema: PdfToTextResponseSchema },
        'text/xml': { schema: PdfToTextResponseSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoRecognizeBusinessCardRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/recognize/business-card',
  tags: ['ImageOcr'],
  summary: 'Recognize a photo of a business card, extract key business information',
  description:
    'Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoRecognizeBusinessCard',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: BusinessCardRecognitionResultSchema },
        'application/xml': { schema: BusinessCardRecognitionResultSchema },
        'text/json': { schema: BusinessCardRecognitionResultSchema },
        'text/xml': { schema: BusinessCardRecognitionResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoRecognizeFormRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/recognize/form',
  tags: ['ImageOcr'],
  summary: 'Recognize a photo of a form, extract key fields and business information',
  description:
    'Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoRecognizeForm',
  request: {
    headers: z.object({
      formTemplateDefinition: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            const parts = val.split(',').map((part) => part.trim())
            if (parts.length % 2 !== 0) return val
            return Object.fromEntries(
              parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
            )
          },
          z.object({
            FieldDefinitions: z
              .preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(
                  z
                    .object({
                      AllowNumericDigits: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
                        }),
                      AlternateAnchor: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Optional - alterate match text for the specified anchor',
                        }),
                      AnchorMode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.',
                        }),
                      BottomAnchor: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Optional - the bottom anchor of the field' }),
                      DataType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
                        }),
                      FieldID: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.',
                        }),
                      HorizontalAlignmentType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right',
                        }),
                      Ignore: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - Ignore any result items that contain a partial or complete match with these text strings',
                        }),
                      LeftAnchor: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Optional - the left-hand anchor of the field' }),
                      MinimumCharacterCount: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - the target number of digits in the field; useful for fixed-length fields',
                        }),
                      Options: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)',
                        }),
                      TargetDigitCount: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.int32(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - the target number of digits in the field; useful for fixed-length fields',
                        }),
                      TargetFieldHeight_Relative: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - scale factor for target field height - relative to height of field title',
                        }),
                      TargetFieldHorizontalAdjustment: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - horizontal adjestment in relative width of the field',
                        }),
                      TargetFieldVerticalAdjustment: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - vertical adjestment in relative height of the field',
                        }),
                      TargetFieldWidth_Relative: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.',
                        }),
                      TopAnchor: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Optional - the top anchor of the field' }),
                      VerticalAlignmentType: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom',
                        }),
                    })
                    .openapi({
                      description: 'Definition of a form field for OCR data extraction from images',
                      required: [],
                    }),
                ),
              )
              .exactOptional()
              .openapi({
                description:
                  'Field definitions in the template; a field is comprised of a key/value pair',
              }),
            TableDefinitions: z
              .preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z.array(
                  z
                    .object({
                      ColumnDefinitions: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(
                            z
                              .object({
                                AllowNumericDigits: z
                                  .preprocess(
                                    ((read) => (val: unknown) => {
                                      const result = read.safeParse(val)
                                      return result.success ? result.data : val
                                    })(z.stringbool()),
                                    z.boolean(),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
                                  }),
                                AnchorMode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.',
                                  }),
                                ColumnID: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The identifier of the field; use this to identify which field is being referenced',
                                  }),
                                DataType: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
                                  }),
                                MinimumCharacterCount: z
                                  .preprocess(
                                    (val) =>
                                      typeof val === 'string' &&
                                      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                        ? Number(val)
                                        : val,
                                    z.int32(),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Optional - the target number of digits in the field; useful for fixed-length fields',
                                  }),
                                TopAnchor: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: 'Optional - the top anchor of the column heading',
                                  }),
                              })
                              .openapi({
                                description:
                                  'Definition of a column within a table for OCR data extraction from images',
                                required: [],
                              }),
                          ),
                        )
                        .exactOptional()
                        .openapi({ description: 'Definition of the columns in the table' }),
                      TableID: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Optional; the ID of the table' }),
                      TargetRowHeight_Relative: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - scale factor for target row height - relative to height of column header',
                        }),
                      TargetTableHeight_Relative: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          z.float64(),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Optional - scale factor for target table height - relative to maximum height of headers of columns',
                        }),
                    })
                    .openapi({
                      description: 'Definition of a form table for OCR data extraction from images',
                      required: [],
                    }),
                ),
              )
              .exactOptional()
              .openapi({
                description:
                  'Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice',
              }),
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Form field definitions',
            in: 'header',
            name: 'formTemplateDefinition',
            required: false,
            schema: {
              description:
                'Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR',
              properties: {
                FieldDefinitions: {
                  description:
                    'Field definitions in the template; a field is comprised of a key/value pair',
                  items: {
                    description: 'Definition of a form field for OCR data extraction from images',
                    properties: {
                      AllowNumericDigits: {
                        description:
                          'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
                        type: 'boolean',
                      },
                      AlternateAnchor: {
                        description: 'Optional - alterate match text for the specified anchor',
                        type: 'string',
                      },
                      AnchorMode: {
                        description:
                          'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.',
                        type: 'string',
                      },
                      BottomAnchor: {
                        description: 'Optional - the bottom anchor of the field',
                        type: 'string',
                      },
                      DataType: {
                        description:
                          'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
                        type: 'string',
                      },
                      FieldID: {
                        description:
                          'The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.',
                        type: 'string',
                      },
                      HorizontalAlignmentType: {
                        description:
                          'Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right',
                        type: 'string',
                      },
                      Ignore: {
                        description:
                          'Optional - Ignore any result items that contain a partial or complete match with these text strings',
                        items: { type: 'string' },
                        type: 'array',
                      },
                      LeftAnchor: {
                        description: 'Optional - the left-hand anchor of the field',
                        type: 'string',
                      },
                      MinimumCharacterCount: {
                        description:
                          'Optional - the target number of digits in the field; useful for fixed-length fields',
                        format: 'int32',
                        type: 'integer',
                      },
                      Options: {
                        description:
                          'Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)',
                        type: 'string',
                      },
                      TargetDigitCount: {
                        description:
                          'Optional - the target number of digits in the field; useful for fixed-length fields',
                        format: 'int32',
                        type: 'integer',
                      },
                      TargetFieldHeight_Relative: {
                        description:
                          'Optional - scale factor for target field height - relative to height of field title',
                        format: 'double',
                        type: 'number',
                      },
                      TargetFieldHorizontalAdjustment: {
                        description:
                          'Optional - horizontal adjestment in relative width of the field',
                        format: 'double',
                        type: 'number',
                      },
                      TargetFieldVerticalAdjustment: {
                        description:
                          'Optional - vertical adjestment in relative height of the field',
                        format: 'double',
                        type: 'number',
                      },
                      TargetFieldWidth_Relative: {
                        description:
                          'Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.',
                        format: 'double',
                        type: 'number',
                      },
                      TopAnchor: {
                        description: 'Optional - the top anchor of the field',
                        type: 'string',
                      },
                      VerticalAlignmentType: {
                        description:
                          'Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom',
                        type: 'string',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
                TableDefinitions: {
                  description:
                    'Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice',
                  items: {
                    description: 'Definition of a form table for OCR data extraction from images',
                    properties: {
                      ColumnDefinitions: {
                        description: 'Definition of the columns in the table',
                        items: {
                          description:
                            'Definition of a column within a table for OCR data extraction from images',
                          properties: {
                            AllowNumericDigits: {
                              description:
                                'Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits',
                              type: 'boolean',
                            },
                            AnchorMode: {
                              description:
                                'Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.',
                              type: 'string',
                            },
                            ColumnID: {
                              description:
                                'The identifier of the field; use this to identify which field is being referenced',
                              type: 'string',
                            },
                            DataType: {
                              description:
                                'The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)',
                              type: 'string',
                            },
                            MinimumCharacterCount: {
                              description:
                                'Optional - the target number of digits in the field; useful for fixed-length fields',
                              format: 'int32',
                              type: 'integer',
                            },
                            TopAnchor: {
                              description: 'Optional - the top anchor of the column heading',
                              type: 'string',
                            },
                          },
                          type: 'object',
                        },
                        type: 'array',
                      },
                      TableID: { description: 'Optional; the ID of the table', type: 'string' },
                      TargetRowHeight_Relative: {
                        description:
                          'Optional - scale factor for target row height - relative to height of column header',
                        format: 'double',
                        type: 'number',
                      },
                      TargetTableHeight_Relative: {
                        description:
                          'Optional - scale factor for target table height - relative to maximum height of headers of columns',
                        format: 'double',
                        type: 'number',
                      },
                    },
                    type: 'object',
                  },
                  type: 'array',
                },
              },
              type: 'object',
            },
          },
          description:
            'Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR',
          required: [],
        }),
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      diagnostics: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).",
            in: 'header',
            name: 'diagnostics',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FormRecognitionResultSchema },
        'application/xml': { schema: FormRecognitionResultSchema },
        'text/json': { schema: FormRecognitionResultSchema },
        'text/xml': { schema: FormRecognitionResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoRecognizeFormAdvancedRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/recognize/form/advanced',
  tags: ['ImageOcr'],
  summary: 'Recognize a photo of a form, extract key fields using stored templates',
  description:
    'Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoRecognizeFormAdvanced',
  request: {
    headers: z.object({
      bucketID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bucket ID of the Configuration Bucket storing the form templates',
            in: 'header',
            name: 'bucketID',
            required: false,
            schema: { type: 'string' },
          },
        }),
      bucketSecretKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Bucket Secret Key of the Configuration Bucket storing the form templates',
            in: 'header',
            name: 'bucketSecretKey',
            required: false,
            schema: { type: 'string' },
          },
        }),
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      diagnostics: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).",
            in: 'header',
            name: 'diagnostics',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: FormRecognitionResultSchema },
        'application/xml': { schema: FormRecognitionResultSchema },
        'text/json': { schema: FormRecognitionResultSchema },
        'text/xml': { schema: FormRecognitionResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoRecognizeReceiptRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/recognize/receipt',
  tags: ['ImageOcr'],
  summary: 'Recognize a photo of a receipt, extract key business information',
  description:
    'Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoRecognizeReceipt',
  request: {
    headers: z.object({
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'None'.  Possible values are None (no preprocessing of the image), and 'Advanced' (automatic image enhancement of the image before OCR is applied; this is recommended and needed to handle rotated receipts).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ReceiptRecognitionResultSchema },
        'application/xml': { schema: ReceiptRecognitionResultSchema },
        'text/json': { schema: ReceiptRecognitionResultSchema },
        'text/xml': { schema: ReceiptRecognitionResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoToWordsWithLocationRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/to/words-with-location',
  tags: ['ImageOcr'],
  summary: 'Convert a photo of a document or receipt into words with location',
  description:
    'Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoWordsWithLocation',
  request: {
    headers: z.object({
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional; possible values are 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      preprocessing: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).",
            in: 'header',
            name: 'preprocessing',
            required: false,
            schema: { type: 'string' },
          },
        }),
      diagnostics: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).",
            in: 'header',
            name: 'diagnostics',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: PhotoToWordsWithLocationResultSchema },
        'application/xml': { schema: PhotoToWordsWithLocationResultSchema },
        'text/json': { schema: PhotoToWordsWithLocationResultSchema },
        'text/xml': { schema: PhotoToWordsWithLocationResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPhotoToTextRoute = createRoute({
  method: 'post',
  path: '/ocr/photo/toText',
  tags: ['ImageOcr'],
  summary: 'Convert a photo of a document into text',
  description:
    'Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.',
  operationId: 'ImageOcr_PhotoToText',
  request: {
    headers: z.object({
      recognitionMode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'",
            in: 'header',
            name: 'recognitionMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)',
            in: 'header',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ImageOcrPostRequestBody,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: ImageToTextResponseSchema },
        'application/xml': { schema: ImageToTextResponseSchema },
        'text/json': { schema: ImageToTextResponseSchema },
        'text/xml': { schema: ImageToTextResponseSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageBinarizeRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/binarize',
  tags: ['Preprocessing'],
  summary: 'Convert an image of text into a binarized (light and dark) view',
  description:
    'Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.',
  operationId: 'Preprocessing_Binarize',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageBinarizeAdvancedRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/binarize/advanced',
  tags: ['Preprocessing'],
  summary: 'Convert an image of text into a binary (light and dark) view with ML',
  description:
    'Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.',
  operationId: 'Preprocessing_BinarizeAdvanced',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageGetPageAngleRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/get-page-angle',
  tags: ['Preprocessing'],
  summary: 'Get the angle of the page / document / receipt',
  description:
    'Analyzes a photo or image of a document and identifies the rotation angle of the page.',
  operationId: 'Preprocessing_GetPageAngle',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GetPageAngleResultSchema },
        'application/xml': { schema: GetPageAngleResultSchema },
        'text/json': { schema: GetPageAngleResultSchema },
        'text/xml': { schema: GetPageAngleResultSchema },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageUnrotateRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/unrotate',
  tags: ['Preprocessing'],
  summary: 'Detect and unrotate a document image',
  description:
    'Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.',
  operationId: 'Preprocessing_Unrotate',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageUnrotateAdvancedRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/unrotate/advanced',
  tags: ['Preprocessing'],
  summary: 'Detect and unrotate a document image (advanced)',
  description:
    'Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.',
  operationId: 'Preprocessing_UnrotateAdvanced',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrPreprocessingImageUnskewRoute = createRoute({
  method: 'post',
  path: '/ocr/preprocessing/image/unskew',
  tags: ['Preprocessing'],
  summary: 'Detect and unskew a photo of a document',
  description:
    'Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.',
  operationId: 'Preprocessing_Unskew',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/json': { schema: z.string() },
        'text/xml': { schema: z.string() },
      },
    },
  },
  security: [{ Apikey: [] }],
})

export const postOcrReceiptsPhotoToCsvRoute = createRoute({
  method: 'post',
  path: '/ocr/receipts/photo/to/csv',
  tags: ['Receipts'],
  summary:
    'Convert a photo of a receipt into a CSV file containing structured information from the receipt',
  description:
    'Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.',
  operationId: 'Receipts_PhotoToCSV',
  request: { body: ImageOcrPostRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.object({}) },
        'application/xml': { schema: z.object({}) },
        'text/json': { schema: z.object({}) },
        'text/xml': { schema: z.object({}) },
      },
    },
  },
  deprecated: true,
  security: [{ Apikey: [] }],
})
