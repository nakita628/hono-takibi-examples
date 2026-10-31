import { createRoute, z } from '@hono/zod-openapi'

const BoundingBoxSchema = z
  .array(z.number())
  .openapi({
    description:
      'Quadrangle bounding box, with coordinates in original image. The eight numbers represent the four points (x-coordinate, y-coordinate from the left-top corner of the image) of the detected rectangle from the left-top corner in the clockwise direction. For images, coordinates are in pixels. For PDF, coordinates are in inches.',
  })
  .openapi('BoundingBox')

const ComputerVisionErrorSchema = z
  .object({
    code: z
      .enum([
        'InvalidImageFormat',
        'UnsupportedMediaType',
        'InvalidImageUrl',
        'NotSupportedFeature',
        'NotSupportedImage',
        'Timeout',
        'InternalServerError',
        'InvalidImageSize',
        'BadArgument',
        'DetectFaceError',
        'NotSupportedLanguage',
        'InvalidThumbnailSize',
        'InvalidDetails',
        'InvalidModel',
        'CancelledRequest',
        'NotSupportedVisualFeature',
        'FailedToProcess',
        'Unspecified',
        'StorageException',
      ])
      .openapi({
        description: 'The error code.',
        'x-ms-enum': { modelAsString: true, name: 'ComputerVisionErrorCodes' },
      }),
    message: z
      .string()
      .openapi({ description: 'A message explaining the error reported by the service.' }),
    requestId: z.string().exactOptional().openapi({ description: 'A unique request identifier.' }),
  })
  .openapi({ description: 'Details about the API request error.', required: ['code', 'message'] })
  .openapi('ComputerVisionError')

const ImageUrlSchema = z
  .object({ url: z.string().openapi({ description: 'Publicly reachable URL of an image.' }) })
  .openapi({ required: ['url'] })
  .openapi('ImageUrl')

const WordSchema = z
  .object({
    boundingBox: BoundingBoxSchema,
    confidence: z
      .enum(['High', 'Low'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Qualitative confidence measure.',
        'x-ms-enum': { modelAsString: false, name: 'TextRecognitionResultConfidenceClass' },
      }),
    text: z.string().openapi({ description: 'The text content of the word.' }),
  })
  .openapi({
    description: 'An object representing a recognized word.',
    required: ['boundingBox', 'text'],
  })
  .openapi('Word')

const LineSchema = z
  .object({
    boundingBox: BoundingBoxSchema.exactOptional(),
    text: z.string().exactOptional().openapi({ description: 'The text content of the line.' }),
    words: z
      .array(WordSchema)
      .exactOptional()
      .openapi({ description: 'List of words in the text line.' }),
  })
  .openapi({ description: 'An object representing a recognized text line.', required: [] })
  .openapi('Line')

const OperationStatusSchema = z
  .enum(['NotStarted', 'Running', 'Failed', 'Succeeded'])
  .openapi({
    description: 'Status code of the text operation.',
    'x-ms-enum': { modelAsString: false, name: 'TextOperationStatusCodes' },
  })
  .openapi('OperationStatus')

const TextRecognitionResultSchema = z
  .object({
    clockwiseOrientation: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The orientation of the image in degrees in the clockwise direction. Range between [0, 360).',
      }),
    height: z
      .number()
      .exactOptional()
      .openapi({ description: 'The height of the image in pixels or the PDF in inches.' }),
    lines: z.array(LineSchema).openapi({ description: 'A list of recognized text lines.' }),
    page: z
      .int()
      .exactOptional()
      .openapi({ description: 'The 1-based page number of the recognition result.' }),
    unit: z
      .enum(['pixel', 'inch'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The unit used in the Width, Height and BoundingBox. For images, the unit is 'pixel'. For PDF, the unit is 'inch'.",
        'x-ms-enum': { modelAsString: false, name: 'TextRecognitionResultDimensionUnit' },
      }),
    width: z
      .number()
      .exactOptional()
      .openapi({ description: 'The width of the image in pixels or the PDF in inches.' }),
  })
  .openapi({ description: 'An object representing a recognized text region', required: ['lines'] })
  .openapi('TextRecognitionResult')

const ReadOperationResultSchema = z
  .object({
    recognitionResults: z
      .array(TextRecognitionResultSchema)
      .exactOptional()
      .openapi({ description: 'An array of text recognition result of the read operation.' }),
    status: OperationStatusSchema.exactOptional(),
  })
  .openapi({ description: 'OCR result of the read operation.', required: [] })
  .openapi('ReadOperationResult')

const TextOperationResultSchema = z
  .object({
    recognitionResult: TextRecognitionResultSchema.exactOptional(),
    status: OperationStatusSchema.exactOptional(),
  })
  .openapi({ description: 'Result of recognition text operation.', required: [] })
  .openapi('TextOperationResult')

const EndpointParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Supported Cognitive Services endpoints.',
      in: 'path',
      name: 'Endpoint',
      required: true,
      schema: { type: 'string' },
      'x-ms-parameter-location': 'client',
      'x-ms-skip-url-encoding': true,
    },
  })

const TextRecognitionModeParamsSchema = z
  .enum(['Handwritten', 'Printed'])
  .openapi({
    param: {
      description: 'Type of text to recognize.',
      examples: { 'Successful Recognize Text request': { value: 'Handwritten' } },
      in: 'query',
      name: 'mode',
      required: true,
      schema: { enum: ['Handwritten', 'Printed'], type: 'string' },
      'x-ms-enum': { modelAsString: false, name: 'TextRecognitionMode' },
      'x-ms-parameter-location': 'method',
    },
  })

const SuccessfulGetReadOperationResultRequestExample = {
  value: {
    recognitionResults: [
      {
        clockwiseOrientation: 349.59,
        height: 400,
        lines: [
          {
            boundingBox: [202, 618, 2047, 643, 2046, 840, 200, 813],
            text: 'Our greatest glory is not',
            words: [
              { boundingBox: [204, 627, 481, 628, 481, 830, 204, 829], text: 'Our' },
              { boundingBox: [519, 628, 1057, 630, 1057, 832, 518, 830], text: 'greatest' },
              { boundingBox: [1114, 630, 1549, 631, 1548, 833, 1114, 832], text: 'glory' },
              { boundingBox: [1586, 631, 1785, 632, 1784, 834, 1586, 833], text: 'is' },
              { boundingBox: [1822, 632, 2115, 633, 2115, 835, 1822, 834], text: 'not' },
            ],
          },
          {
            boundingBox: [420, 1273, 2954, 1250, 2958, 1488, 422, 1511],
            text: 'but in rising every time we fall',
            words: [
              { boundingBox: [423, 1269, 634, 1268, 635, 1507, 424, 1508], text: 'but' },
              { boundingBox: [667, 1268, 808, 1268, 809, 1506, 668, 1507], text: 'in' },
              { boundingBox: [874, 1267, 1289, 1265, 1290, 1504, 875, 1506], text: 'rising' },
              { boundingBox: [1331, 1265, 1771, 1263, 1772, 1502, 1332, 1504], text: 'every' },
              { boundingBox: [1812, 1263, 2178, 1261, 2179, 1500, 1813, 1502], text: 'time' },
              { boundingBox: [2219, 1261, 2510, 1260, 2511, 1498, 2220, 1500], text: 'we' },
              { boundingBox: [2551, 1260, 3016, 1258, 3017, 1496, 2552, 1498], text: 'fall' },
            ],
          },
        ],
        page: 1,
        unit: 'pixel',
        width: 600,
      },
      {
        clockwiseOrientation: 1.32,
        height: 400,
        lines: [
          {
            boundingBox: [1612, 903, 2744, 935, 2738, 1139, 1607, 1107],
            text: 'in never failing ,',
            words: [
              { boundingBox: [1611, 934, 1707, 933, 1708, 1147, 1613, 1147], text: 'in' },
              { boundingBox: [1753, 933, 2132, 930, 2133, 1144, 1754, 1146], text: 'never' },
              { boundingBox: [2162, 930, 2673, 927, 2674, 1140, 2164, 1144], text: 'failing' },
              {
                boundingBox: [2703, 926, 2788, 926, 2790, 1139, 2705, 1140],
                confidence: 'Low',
                text: ',',
              },
            ],
          },
        ],
        page: 2,
        unit: 'pixel',
        width: 600,
      },
    ],
    status: 'Succeeded',
  },
}

const SuccessfulGetTextOperationResultRequestExample = {
  value: {
    recognitionResult: {
      lines: [
        {
          boundingBox: [202, 618, 2047, 643, 2046, 840, 200, 813],
          text: 'Our greatest glory is not',
          words: [
            { boundingBox: [204, 627, 481, 628, 481, 830, 204, 829], text: 'Our' },
            { boundingBox: [519, 628, 1057, 630, 1057, 832, 518, 830], text: 'greatest' },
            { boundingBox: [1114, 630, 1549, 631, 1548, 833, 1114, 832], text: 'glory' },
            { boundingBox: [1586, 631, 1785, 632, 1784, 834, 1586, 833], text: 'is' },
            { boundingBox: [1822, 632, 2115, 633, 2115, 835, 1822, 834], text: 'not' },
          ],
        },
        {
          boundingBox: [420, 1273, 2954, 1250, 2958, 1488, 422, 1511],
          text: 'but in rising every time we fall',
          words: [
            { boundingBox: [423, 1269, 634, 1268, 635, 1507, 424, 1508], text: 'but' },
            { boundingBox: [667, 1268, 808, 1268, 809, 1506, 668, 1507], text: 'in' },
            { boundingBox: [874, 1267, 1289, 1265, 1290, 1504, 875, 1506], text: 'rising' },
            { boundingBox: [1331, 1265, 1771, 1263, 1772, 1502, 1332, 1504], text: 'every' },
            { boundingBox: [1812, 1263, 2178, 1261, 2179, 1500, 1813, 1502], text: 'time' },
            { boundingBox: [2219, 1261, 2510, 1260, 2511, 1498, 2220, 1500], text: 'we' },
            { boundingBox: [2551, 1260, 3016, 1258, 3017, 1496, 2552, 1498], text: 'fall' },
          ],
        },
        {
          boundingBox: [1612, 903, 2744, 935, 2738, 1139, 1607, 1107],
          text: 'in never failing ,',
          words: [
            { boundingBox: [1611, 934, 1707, 933, 1708, 1147, 1613, 1147], text: 'in' },
            { boundingBox: [1753, 933, 2132, 930, 2133, 1144, 1754, 1146], text: 'never' },
            { boundingBox: [2162, 930, 2673, 927, 2674, 1140, 2164, 1144], text: 'failing' },
            { boundingBox: [2703, 926, 2788, 926, 2790, 1139, 2705, 1140], text: ',' },
          ],
        },
      ],
    },
    status: 'Succeeded',
  },
}

const ImageUrlRequestBody = {
  description: 'A JSON document with a URL pointing to the image that is to be analyzed.',
  content: { 'application/json': { schema: ImageUrlSchema } },
  required: true,
}

const RecognizeTextInStreamImageRequestBody = {
  description: 'An image stream.',
  content: { 'application/octet-stream': { schema: z.object({}) } },
  required: true,
}

const ApimKeySecurityScheme = { in: 'header', name: 'Ocp-Apim-Subscription-Key', type: 'apiKey' }

export const postReadCoreAsyncBatchAnalyzeRoute = createRoute({
  method: 'post',
  path: '/read/core/asyncBatchAnalyze',
  description:
    "Use this interface to get the result of a Read operation, employing the state-of-the-art Optical Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read File interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your 'GetReadOperationResult' operation to access OCR results.​",
  operationId: 'BatchReadFile',
  request: { body: ImageUrlRequestBody },
  responses: {
    202: {
      description: 'The service has accepted the request and will start processing later.',
      headers: z.object({
        'Operation-Location': {
          description:
            'URL to query for status of the operation. The operation ID will expire in 48 hours. ',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'URL to query for status of the operation. The operation ID will expire in 48 hours. ',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const getReadOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/read/operations/{operationId}',
  description:
    "This interface is used for getting OCR results of Read operation. The URL to this interface should be retrieved from 'Operation-Location' field returned from Batch Read File interface.",
  operationId: 'GetReadOperationResult',
  request: {
    params: z.object({
      operationId: z
        .string()
        .openapi({
          param: {
            description:
              "Id of read operation returned in the response of the 'Batch Read File' interface.",
            examples: {
              'Successful Get Read Operation Result request': {
                value: 'e56ffa6e-1ee4-4042-bc07-993db706c95f',
              },
            },
            in: 'path',
            name: 'operationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the read operation status.',
      content: {
        'application/json': {
          schema: ReadOperationResultSchema,
          examples: {
            'Successful Get Read Operation Result request':
              SuccessfulGetReadOperationResultRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const postRecognizeTextRoute = createRoute({
  method: 'post',
  path: '/recognizeText',
  description:
    "Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Recognize Text Operation Result operation.",
  operationId: 'RecognizeText',
  request: {
    query: z.object({ mode: TextRecognitionModeParamsSchema }),
    body: ImageUrlRequestBody,
  },
  responses: {
    202: {
      description:
        "The service has accepted the request and will start processing later. It will return Accepted immediately and include an 'Operation-Location' header. Client side should further query the operation status using the URL specified in this header. The operation ID will expire in 48 hours.",
      headers: z.object({
        'Operation-Location': {
          description:
            'URL to query for status of the operation. The operation ID will expire in 48 hours. ',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'URL to query for status of the operation. The operation ID will expire in 48 hours. ',
              param: { required: false },
            }),
        },
      }),
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const getTextOperationsOperationIdRoute = createRoute({
  method: 'get',
  path: '/textOperations/{operationId}',
  description:
    "This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.",
  operationId: 'GetTextOperationResult',
  request: {
    params: z.object({
      operationId: z
        .string()
        .openapi({
          param: {
            description:
              "Id of the text operation returned in the response of the 'Recognize Text'",
            examples: {
              'Successful Get Text Operation Result request': {
                value: '49a36324-fc4b-4387-aa06-090cfbf0064f',
              },
            },
            in: 'path',
            name: 'operationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the operation status.',
      content: {
        'application/json': {
          schema: TextOperationResultSchema,
          examples: {
            'Successful Get Text Operation Result request':
              SuccessfulGetTextOperationResultRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})
