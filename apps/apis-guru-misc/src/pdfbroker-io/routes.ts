import { createRoute, z } from '@hono/zod-openapi'

const ColorDtoSchema = z
  .strictObject({
    B: z
      .int32()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Get or sets B value of RGB color', readOnly: true }),
    G: z
      .int32()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Get or sets G value of RGB color', readOnly: true }),
    R: z
      .int32()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Get or sets R value of RGB color', readOnly: true }),
  })
  .openapi({ description: 'Set color', required: [] })
  .openapi('ColorDto')

const ErrorResponseDtoSchema = z
  .strictObject({
    Description: z.string().nullable().exactOptional(),
    ErrorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If any error occurs the message will be displayed in here' }),
    StatusCode: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponseDto')

const PdfMetadataDtoSchema = z
  .strictObject({
    Author: z.string().nullable().exactOptional().openapi({ description: 'Pdf document author' }),
    EnableAdd: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables adding or modifying text annotations and interactive\r\nform fields.',
      }),
    EnableCopy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables or disables copying of text and graphics.' }),
    EnableModify: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables or disables modifying document contents (other than text annotations and \r\ninteractive form fields).',
      }),
    EnablePrinting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables or disables printing.' }),
    Keywords: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Pdf document keywords' }),
    OwnerPassword: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specifies the owner password that will protect full access to any generated PDF documents.',
      }),
    Subject: z.string().nullable().exactOptional().openapi({ description: 'Pdf document subject' }),
    Title: z.string().nullable().exactOptional().openapi({ description: 'Pdf document title' }),
    UserPassword: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specifies the user password that will protect access to any generated PDF documents.',
      }),
  })
  .openapi({ description: 'Enter meta data for pdf document', required: [] })
  .openapi('PdfMetadataDto')

const FoRequestDtoSchema = z
  .strictObject({
    FoDocumentBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'This is the complete XSL-FO document provided using Base64 encoding.',
      }),
    Metadata: PdfMetadataDtoSchema.exactOptional(),
    Resources: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.',
      }),
  })
  .openapi({
    description:
      'The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.',
    required: [],
  })
  .openapi('FoRequestDto')

const FoTransformRequestDtoSchema = z
  .strictObject({
    FoDocumentBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'This is the complete XSL-FO document provided using Base64 encoding.',
      }),
    Metadata: PdfMetadataDtoSchema.exactOptional(),
    Resources: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string.',
      }),
    XmlDataDocumentBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding.',
      }),
  })
  .openapi({
    description:
      'The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.',
    required: [],
  })
  .openapi('FoTransformRequestDto')

const FontStyleSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi({ description: 'Font style enum representing Regular, Bold, Italic, BoldItalic' })
  .openapi('FontStyle')

const FontDtoSchema = z
  .strictObject({
    Name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gets the name of the font', readOnly: true }),
    Size: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Gets the size of the font', readOnly: true }),
    Style: FontStyleSchema.exactOptional(),
  })
  .openapi({ description: 'The Font dto object', required: [] })
  .openapi('FontDto')

const ImageResponseDtoSchema = z
  .strictObject({
    ErrorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If any error occurs the message will be displayed in here' }),
    ImageBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The Base64 encoded string that is the image file. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g.',
      }),
  })
  .openapi({
    description:
      'When setting the Accept-header in the request to "application/json" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it\'s better to use Accept-header "image/jpeg", "image/png" or "image/gif".',
    required: [],
  })
  .openapi('ImageResponseDto')

const PdfConcatenationRequestDtoSchema = z
  .strictObject({
    PdfDocumentsAsBase64String: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The list of Pdf documents encoded as Base64 strings.' }),
  })
  .openapi({
    description: 'Request to concatenate a list of Pdf documents to a single Pdf document.',
    required: [],
  })
  .openapi('PdfConcatenationRequestDto')

const PdfResponseDtoSchema = z
  .strictObject({
    ErrorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If any error occurs the message will be displayed in here' }),
    PdfFileBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The Base64 encoded string that is the pdf file.' }),
  })
  .openapi({
    description:
      'When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it\'s better to use Accept-header "application/pdf".',
    required: [],
  })
  .openapi('PdfResponseDto')

const PdfToImageOptionsSchema = z
  .strictObject({
    Height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width;',
      }),
    HorizontalResolution: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Set the horizontal resolution, default is 96 dpi;' }),
    ImageFormat: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Valid options are "image/jpeg", "image/png" or "image/gif". Default is "image/png"',
      }),
    JpegQuality: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Sets the quality of jpeg images, range 0 to 100, default is 75' }),
    PageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Which page of the pdf file to generate image from, default is first page',
      }),
    PngCompressionLevel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Sets the png compression level, range 1 - 9, default is 6' }),
    Transparent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format.',
      }),
    VerticalResolution: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Set the vertical resolution, default is 96 dpi;' }),
    Width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height;',
      }),
  })
  .openapi({ required: [] })
  .openapi('PdfToImageOptions')

const PdfToImageRequestDtoSchema = z
  .strictObject({
    Options: PdfToImageOptionsSchema.exactOptional(),
    PdfFileBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The pdf file to generate image from, as Base64 encoded string.' }),
  })
  .openapi({ required: [] })
  .openapi('PdfToImageRequestDto')

const XOriginPointSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('XOriginPoint')

const YOriginPointSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi('YOriginPoint')

const PdfWriteStringOptionsSchema = z
  .strictObject({
    Font: FontDtoSchema.exactOptional(),
    PageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Get or set which page in the pdf to write on, default is first page.',
      }),
    Text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The text to write in the pdf' }),
    TextColor: ColorDtoSchema.exactOptional(),
    XOrigin: XOriginPointSchema.exactOptional(),
    XPosition: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Get or set the X axis position on where to write string, in reference to XOrigin.',
      }),
    YOrigin: YOriginPointSchema.exactOptional(),
    YPosition: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Get or set the Y axis position on where to write string, in reference to YOrigin.',
      }),
  })
  .openapi({ description: 'Options for writing string in pdf page;', required: [] })
  .openapi('PdfWriteStringOptions')

const PdfWriteStringRequestDtoSchema = z
  .strictObject({
    FontFileBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string.',
      }),
    Options: PdfWriteStringOptionsSchema.exactOptional(),
    PdfFileBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The pdf file to add text to, as Base64 encoded string.' }),
  })
  .openapi({ description: 'The request dto object to write a string on pdf page', required: [] })
  .openapi('PdfWriteStringRequestDto')

const WkHtmlToPdfRequestDtoSchema = z
  .strictObject({
    HtmlBase64String: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String.',
      }),
    Resources: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string.',
      }),
    Url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set.',
      }),
    WkHtmlToPdfArguments: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Command line arguments passed to wkhtmltopdf.' }),
  })
  .openapi({
    description:
      'WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf;',
    required: [],
  })
  .openapi('WkHtmlToPdfRequestDto')

const OAuth2SecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: { pdfbroker: 'Scope to access the PdfBroker API.' },
      tokenUrl: 'https://login.pdfbroker.io/connect/token',
    },
  },
  type: 'oauth2',
}

export const getApiPdfRoute = createRoute({
  method: 'get',
  path: '/api/pdf',
  tags: ['Pdf'],
  summary: 'Basic method to verify api is up and running',
  responses: {
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfPdfconcatRoute = createRoute({
  method: 'post',
  path: '/api/pdf/pdfconcat',
  tags: ['Pdf'],
  summary: 'Concatenate multiple pdf files into single pdf file..',
  request: {
    body: {
      description:
        'PdfConcat Request. Add two or more pdf files and concatenate pages into single pdf document.',
      content: {
        'application/json': {
          schema: PdfConcatenationRequestDtoSchema,
          example:
            '{\r\n  "pdfDocumentsAsBase64String": [\r\n    "<Encode your pdf documents as Base64 encoded string>",\r\n    "<Encode your pdf documents as Base64 encoded string>"\r\n  ]\r\n}',
        },
        'multipart/form-data': {
          schema: z
            .object({
              pdfdocument1: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Add pdf files to be concatenated into single file',
                }),
              pdfdocument2: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'You can add more than two files in the same request',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            pdfdocument1: { contentType: 'application/octet-stream' },
            pdfdocument2: { contentType: 'application/octet-stream' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: PdfResponseDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "Base64 encoded pdf file content",\r\n  "errorMessage": "If any error occured, info will be provided here"\r\n}',
        },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfPdftoimageRoute = createRoute({
  method: 'post',
  path: '/api/pdf/pdftoimage',
  tags: ['Pdf'],
  summary: 'Generate an image of to provided pdf file',
  request: {
    body: {
      description: 'PdfToImage Request. Create an image of a page in an existing pdf document.',
      content: {
        'application/json': {
          schema: PdfToImageRequestDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "<Encode your existing PDF document as Base64 encoded string>",\r\n  "options": {\r\n    "pageNumber": 1,\r\n    "imageFormat": "image/jpeg",\r\n    "horizontalResolution": 96.0,\r\n    "verticalResolution": 96.0,\r\n    "width": 0,\r\n    "height": 0,\r\n    "transparent": false,\r\n    "jpegQuality": 90,\r\n    "pngCompressionLevel": 6\r\n  }\r\n}',
        },
        'multipart/form-data': {
          schema: z
            .object({
              options: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After pdfdocument is added, add an entry named options with your PdfToImageOptions object serialized as JSON.',
                }),
              pdfdocument: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'An entry named pdfdocument is required in the multipart/form-data request',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            options: { contentType: 'application/json' },
            pdfdocument: { contentType: 'application/octet-stream' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Generate an image of the provided pdf file. Either the image file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: ImageResponseDtoSchema,
          example:
            '{\r\n  "imageBase64String": "Image file base64 encoded. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g.",\r\n  "errorMessage": "If any error occurred, information will be provided here"\r\n}',
        },
        'image/gif': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfPdfwritestringRoute = createRoute({
  method: 'post',
  path: '/api/pdf/pdfwritestring',
  tags: ['Pdf'],
  summary: 'Write text on a page in a pdf document.',
  request: {
    body: {
      description: 'PdfWriteString Request. Write string on page in pdf document',
      content: {
        'application/json': {
          schema: PdfWriteStringRequestDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "<Encode your existing PDF document as Base64 encoded string>",\r\n  "options": {\r\n    "text": "This is test string",\r\n    "textColor": {\r\n      "r": 33,\r\n      "g": 34,\r\n      "b": 35\r\n    },\r\n    "font": {\r\n      "name": "Arial",\r\n      "size": 24.0,\r\n      "style": 1\r\n    },\r\n    "pageNumber": 3,\r\n    "xPosition": 40.0,\r\n    "yPosition": -200.0,\r\n    "xOrigin": 1,\r\n    "yOrigin": 2\r\n  },\r\n  "fontFileBase64String": "<Attach your own TrueTypeFont file if necessary to style text, encoded as Base64 encoded string>"\r\n}',
        },
        'multipart/form-data': {
          schema: z
            .object({
              fontfile: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'Optional entry to attach your own TrueType font file to style string',
                }),
              options: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After pdfdocument is added, add an entry named options with your PdfWriteStringOptions object serialized as JSON.',
                }),
              pdfdocument: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'An entry named pdfdocument is required in the multipart/form-data request',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            fontfile: { contentType: 'application/octet-stream' },
            options: { contentType: 'application/json' },
            pdfdocument: { contentType: 'application/octet-stream' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: PdfResponseDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "Base64 encoded pdf file content",\r\n  "errorMessage": "If any error occured, info will be provided here"\r\n}',
        },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfWkhtmltopdfRoute = createRoute({
  method: 'post',
  path: '/api/pdf/wkhtmltopdf',
  tags: ['Pdf'],
  summary: 'Generate pdf file from url using the excellent tool wkhtmltopdf.',
  request: {
    body: {
      description:
        'WkHtmlToPdf Request. Generate pdf from html, either from url or base64 encoded html string',
      content: {
        'application/json': {
          schema: WkHtmlToPdfRequestDtoSchema,
          example:
            '{\r\n  "url": "https://www.pdfbroker.io",\r\n  "htmlBase64String": null,\r\n  "wkHtmlToPdfArguments": {\r\n    "grayscale": "",\r\n    "viewport-size": "1280x1024"\r\n  },\r\n  "resources": null\r\n}',
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: PdfResponseDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "Base64 encoded pdf file content",\r\n  "errorMessage": "If any error occured, info will be provided here"\r\n}',
        },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs executing request',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: { description: 'If content-type of request is not set to application/json' },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfXslfoRoute = createRoute({
  method: 'post',
  path: '/api/pdf/xslfo',
  tags: ['Pdf'],
  summary: 'Create pdf-file from complete XSL-FO document.',
  request: {
    body: {
      description:
        "XSL-FO Request, the basic XSL-FO request. Post your XSL-FO document and digital resources, either as 'multipart/form-data' or 'application/json'",
      content: {
        'application/json': {
          schema: FoRequestDtoSchema,
          example:
            '{\r\n  "foDocumentBase64String": "<Encode your XSL-FO document as Base64 encoded string>",\r\n  "resources": {\r\n    "<Use file name as key, i.e \'logo.png\', which is set as src on fo:external-graphic elements>": "<Convert your images to Base64 encoded string>"\r\n  },\r\n  "metadata": {\r\n    "title": "Pdf title metadata can be set with metadata object",\r\n    "author": null,\r\n    "subject": null,\r\n    "keywords": [\r\n      "pdf",\r\n      "api"\r\n    ],\r\n    "enableAdd": true,\r\n    "enableCopy": true,\r\n    "enableModify": true,\r\n    "enablePrinting": true,\r\n    "ownerPassword": null,\r\n    "userPassword": null\r\n  }\r\n}',
        },
        'multipart/form-data': {
          schema: z
            .object({
              fodocument: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'An entry named fodocument is required in the multipart/form-data request',
                }),
              metadata: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.string().nullable(),
              )
                .exactOptional()
                .openapi({
                  description: 'Add pdf document metadata like title, author, subject and keywords',
                }),
              resources: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'After fodocument is added, add all digital resources one by one to your multipart/form-data request, using the filename as name in the form.',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            fodocument: { contentType: 'application/octet-stream' },
            metadata: { contentType: 'application/json' },
            resources: { contentType: 'application/octet-stream' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: PdfResponseDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "Base64 encoded pdf file content",\r\n  "errorMessage": "If any error occured, info will be provided here"\r\n}',
        },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})

export const postApiPdfXslfowithtransformRoute = createRoute({
  method: 'post',
  path: '/api/pdf/xslfowithtransform',
  tags: ['Pdf'],
  summary: 'Create pdf-file from transforming xml document with Xsl-Fo transform document.',
  request: {
    body: {
      description:
        "XSL-FO Transform Request. The XSL-FO is transformed on the supplied xml data document. Post your XSL-FO transform document and xml data document aloing with your digital resources, either as 'multipart/form-data' or 'application/json'",
      content: {
        'application/json': {
          schema: FoTransformRequestDtoSchema,
          example:
            '{\r\n  "xmlDataDocumentBase64String": "<This is the document which contains your data that the XSL-FO transform will be applied on. Send as Base64 encoded string>",\r\n  "foDocumentBase64String": "<Encode your XSL-FO transform document as Base64 encoded string>",\r\n  "resources": {\r\n    "<Use file name as key, i.e \'logo.png\', which is set as src on fo:external-graphic elements>": "<Convert your images to Base64 encoded string>"\r\n  },\r\n  "metadata": null\r\n}',
        },
        'multipart/form-data': {
          schema: z
            .object({
              fodocument: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'An entry named fodocument with your XSL-FO transform is required in the multipart/form-data request',
                }),
              resources: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'After fodocument and xmldatadocument is added, add all digital resources one by one to your multipart/form-data request, using the filename as name in the form.',
                }),
              xmldatadocument: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'An entry named xmldatadocument, on which the XSL-FO transform is applied, is required in the multipart/form-data request',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            fodocument: { contentType: 'application/octet-stream' },
            resources: { contentType: 'application/octet-stream' },
            xmldatadocument: { contentType: 'application/octet-stream' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json',
      content: {
        'application/json': {
          schema: PdfResponseDtoSchema,
          example:
            '{\r\n  "pdfFileBase64String": "Base64 encoded pdf file content",\r\n  "errorMessage": "If any error occured, info will be provided here"\r\n}',
        },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'If any error occurs parsing input',
      content: {
        'application/json': {
          schema: ErrorResponseDtoSchema,
          example:
            '{\r\n  "description": "Always empty in the public response, used for internal error transport to logs",\r\n  "statusCode": 400,\r\n  "errorMessage": "The error message provided to client"\r\n}',
        },
      },
    },
    415: {
      description:
        'If content-type of request is not set to multipart/form-data or application/json',
    },
    429: { description: 'If you reach the monthly request limit for your subscription plan' },
  },
})
