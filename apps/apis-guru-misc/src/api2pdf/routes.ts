import { createRoute, z } from '@hono/zod-openapi'

const ApiResponseFailureSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason for the PDF generation failure',
        example: 'Source website could not be found',
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be false if the operation failed', example: false }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseFailure')

const ApiResponseSuccessSchema = z
  .object({
    cost: z
      .number()
      .exactOptional()
      .openapi({ description: 'Cost of the operation (mbIn + mbOut) * $.001', example: 0.0007979 }),
    mbIn: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of megabytes of bandwidth used to process the pdf',
        example: 0.06463,
      }),
    mbOut: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The amount of megabytes of bandwidth generated from the resulting pdf',
        example: 0.73327,
      }),
    pdf: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A url to the PDF that will exist only for 24 hours',
        example: 'https://link-to-your-pdf',
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will be true if the operation suceeded', example: true }),
  })
  .openapi({ required: [] })
  .openapi('ApiResponseSuccess')

const ChromeAdvancedOptionsSchema = z
  .object({
    landscape: z.string().exactOptional().openapi({ example: 'true' }),
    printBackground: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('ChromeAdvancedOptions')

const ChromeHtmlToPdfRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    html: z.string().openapi({ example: '<p>Hello World</p>' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    options: ChromeAdvancedOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['html'] })
  .openapi('ChromeHtmlToPdfRequest')

const ChromeUrlToPdfRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    options: ChromeAdvancedOptionsSchema.exactOptional(),
    url: z.url().openapi({ example: 'https://www.github.com' }),
  })
  .openapi({ required: ['url'] })
  .openapi('ChromeUrlToPdfRequest')

const LibreOfficeConvertRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    url: z
      .url()
      .openapi({
        example:
          'https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx',
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('LibreOfficeConvertRequest')

const MergeRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    urls: z
      .array(z.string())
      .openapi({ example: ['link-to-pdf1', 'link-to-pdf2', 'link-to-pdf3'] }),
  })
  .openapi({ required: ['urls'] })
  .openapi('MergeRequest')

const WkHtmlToPdfAdvancedOptionsSchema = z
  .object({
    orientation: z.string().exactOptional().openapi({ example: 'landscape' }),
    pageSize: z.string().exactOptional().openapi({ example: 'A4' }),
  })
  .openapi({ required: [] })
  .openapi('WkHtmlToPdfAdvancedOptions')

const WkHtmlToPdfHtmlToPdfRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    html: z.string().openapi({ example: '<p>Hello World</p>' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    options: WkHtmlToPdfAdvancedOptionsSchema.exactOptional(),
  })
  .openapi({ required: ['html'] })
  .openapi('WkHtmlToPdfHtmlToPdfRequest')

const WkHtmlToPdfUrlToPdfRequestSchema = z
  .object({
    fileName: z.string().exactOptional().openapi({ example: 'test.pdf' }),
    inlinePdf: z.boolean().exactOptional().openapi({ example: true }),
    options: WkHtmlToPdfAdvancedOptionsSchema.exactOptional(),
    url: z.url().openapi({ example: 'https://www.github.com' }),
  })
  .openapi({ required: ['url'] })
  .openapi('WkHtmlToPdfUrlToPdfRequest')

const HeaderApiKeySecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

const QueryApiKeySecurityScheme = { in: 'query', name: 'apikey', type: 'apiKey' }

export const postChromeHtmlRoute = createRoute({
  method: 'post',
  path: '/chrome/html',
  tags: ['Headless Chrome'],
  summary: 'Convert raw HTML to PDF',
  description:
    'Convert HTML to a PDF using Headless Chrome on AWS Lambda.\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'chromeFromHtmlPost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `html` *(string, required)* - raw HTML to convert to PDF\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.\n- `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).',
      content: { 'application/json': { schema: ChromeHtmlToPdfRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const getChromeUrlRoute = createRoute({
  method: 'get',
  path: '/chrome/url',
  tags: ['Headless Chrome'],
  summary: 'Convert URL to PDF',
  description:
    'Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.\n### Authorize via Query String Parameter\n**apikey=YOUR-API-KEY**\n### Example\n``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` ',
  operationId: 'chromeFromUrlGET',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'Url of the page to convert to PDF. Must start with http:// or https://.',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      output: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify output=json to receive a JSON output. Defaults to PDF file.',
            in: 'query',
            name: 'output',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A PDF file or a JSON object depending on the `output` query parameter',
      content: {
        'application/json': { schema: ApiResponseSuccessSchema },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
  security: [{ QueryApiKey: [] }],
})

export const postChromeUrlRoute = createRoute({
  method: 'post',
  path: '/chrome/url',
  tags: ['Headless Chrome'],
  summary: 'Convert URL to PDF',
  description:
    'Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'chromeFromUrlPost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `url` *(string, required)* - Url to the web page to convert to PDF\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.\n- `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).',
      content: { 'application/json': { schema: ChromeUrlToPdfRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const postLibreofficeConvertRoute = createRoute({
  method: 'post',
  path: '/libreoffice/convert',
  tags: ['LibreOffice'],
  summary: 'Convert office document or image to PDF',
  description:
    'Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'libreConvertPost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `url` *(string, required)* - A direct URL to the file. Api2Pdf will consume the file at that URL and then convert it.\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. ',
      content: { 'application/json': { schema: LibreOfficeConvertRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const postMergeRoute = createRoute({
  method: 'post',
  path: '/merge',
  tags: ['Merge / Combine Pdfs'],
  summary: 'Merge multiple PDFs together',
  description:
    'Merge two or more PDFs together on AWS Lambda.\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'mergePost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `urls` *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together..\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. ',
      content: { 'application/json': { schema: MergeRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const postWkhtmltopdfHtmlRoute = createRoute({
  method: 'post',
  path: '/wkhtmltopdf/html',
  tags: ['wkhtmltopdf'],
  summary: 'Convert raw HTML to PDF',
  description:
    'Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'wkhtmltopdfFromHtmlPost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `html` *(string, required)* - raw HTML to convert to PDF\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.\n- `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).',
      content: { 'application/json': { schema: WkHtmlToPdfHtmlToPdfRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const getWkhtmltopdfUrlRoute = createRoute({
  method: 'get',
  path: '/wkhtmltopdf/url',
  tags: ['wkhtmltopdf'],
  summary: 'Convert URL to PDF',
  description:
    'Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.\n### Authorize via Query String Parameter\n**apikey=YOUR-API-KEY**\n### Example\n``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` ',
  operationId: 'wkhtmltopdfFromUrlGET',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'Url of the page to convert to PDF. Must start with http:// or https://.',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      output: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify output=json to receive a JSON output. Defaults to PDF file.',
            in: 'query',
            name: 'output',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A PDF file or a JSON object depending on the `output` query parameter',
      content: {
        'application/json': { schema: ApiResponseSuccessSchema },
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
  security: [{ QueryApiKey: [] }],
})

export const postWkhtmltopdfUrlRoute = createRoute({
  method: 'post',
  path: '/wkhtmltopdf/url',
  tags: ['wkhtmltopdf'],
  summary: 'Convert URL to PDF',
  description:
    'Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..\n### Authorize via Header of Request\n**Authorization: YOUR-API-KEY**',
  operationId: 'wkhtmltopdfFromUrlPost',
  request: {
    body: {
      description:
        'A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:\n- `url` *(string, required)* - Url to the web page to convert to PDF\n- `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.\n- `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.\n- `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).',
      content: { 'application/json': { schema: WkHtmlToPdfUrlToPdfRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'A JSON object containing the url to the PDF and other meta data',
      content: { 'application/json': { schema: ApiResponseSuccessSchema } },
    },
    401: {
      description: 'Failed to generate PDF',
      content: { 'application/json': { schema: ApiResponseFailureSchema } },
    },
  },
})

export const getZebraRoute = createRoute({
  method: 'get',
  path: '/zebra',
  tags: ['ZXING (Zebra Crossing) Bar Codes'],
  summary: 'Generate bar codes and QR codes with ZXING.',
  description:
    'See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)\n### Authorize via Query String Parameter\n**apikey=YOUR-API-KEY**\n### Example\n``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` ',
  operationId: 'zebraGET',
  request: {
    query: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description: 'Most common is CODE_39 or QR_CODE',
            in: 'query',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Specify the text value you want to convert',
            in: 'query',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      showlabel: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show label of text below barcode',
            in: 'query',
            name: 'showlabel',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Height of the barcode generated image',
            in: 'query',
            name: 'height',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Width of the barcode generated image',
            in: 'query',
            name: 'width',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An image of the generated barcode or QR code',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  security: [{ QueryApiKey: [] }],
})
