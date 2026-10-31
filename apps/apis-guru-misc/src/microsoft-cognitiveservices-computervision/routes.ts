import { createRoute, z } from '@hono/zod-openapi'

type ObjectHierarchyType = {
  confidence?: number
  object?: string | null
  parent?: ObjectHierarchyType
} | null

const AdultInfoSchema = z
  .object({
    adultScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Score from 0 to 1 that indicates how much the content is considered adult-oriented within the image.',
      }),
    goreScore: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Score from 0 to 1 that indicates how gory is the image.' }),
    isAdultContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating if the image contains adult-oriented content.' }),
    isGoryContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating if the image is gory.' }),
    isRacyContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating if the image is racy.' }),
    racyScore: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Score from 0 to 1 that indicates how suggestive is the image.' }),
  })
  .nullable()
  .openapi({
    description:
      'An object describing whether the image contains adult-oriented content and/or is racy.',
    required: [],
  })
  .openapi('AdultInfo')

const BoundingRectSchema = z
  .object({
    h: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height measured from the top-left point of the area, in pixels.' }),
    w: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width measured from the top-left point of the area, in pixels.' }),
    x: z
      .int32()
      .exactOptional()
      .openapi({ description: 'X-coordinate of the top left point of the area, in pixels.' }),
    y: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y-coordinate of the top left point of the area, in pixels.' }),
  })
  .openapi({ description: 'A bounding box for an area inside an image.', required: [] })
  .openapi('BoundingRect')

const ImageMetadataSchema = z
  .object({
    format: z.string().nullable().exactOptional().openapi({ description: 'Image format.' }),
    height: z.int32().exactOptional().openapi({ description: 'Image height, in pixels.' }),
    width: z.int32().exactOptional().openapi({ description: 'Image width, in pixels.' }),
  })
  .nullable()
  .openapi({ description: 'Image metadata.', required: [] })
  .openapi('ImageMetadata')

const AreaOfInterestResultSchema = z
  .object({
    areaOfInterest: BoundingRectSchema.exactOptional(),
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
  })
  .nullable()
  .openapi({ description: 'Result of AreaOfInterest operation.', required: [] })
  .openapi('AreaOfInterestResult')

const FaceRectangleSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Height measured from the top-left point of the face, in pixels.' }),
    left: z
      .int32()
      .exactOptional()
      .openapi({ description: 'X-coordinate of the top left point of the face, in pixels.' }),
    top: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Y-coordinate of the top left point of the face, in pixels.' }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width measured from the top-left point of the face, in pixels.' }),
  })
  .nullable()
  .openapi({ description: 'An object describing face rectangle.', required: [] })
  .openapi('FaceRectangle')

const CelebritiesModelSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence level for the celebrity recognition as a value ranging from 0 to 1.',
      }),
    faceRectangle: FaceRectangleSchema.exactOptional(),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the celebrity.' }),
  })
  .nullable()
  .openapi({ description: 'An object describing possible celebrity identification.', required: [] })
  .openapi('CelebritiesModel')

const LandmarksModelSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence level for the landmark recognition as a value ranging from 0 to 1.',
      }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the landmark.' }),
  })
  .nullable()
  .openapi({ description: 'A landmark recognized in the image.', required: [] })
  .openapi('LandmarksModel')

const CategoryDetailSchema = z
  .object({
    celebrities: z
      .array(CelebritiesModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of celebrities if any identified.' }),
    landmarks: z
      .array(LandmarksModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of landmarks if any identified.' }),
  })
  .nullable()
  .openapi({ description: 'An object describing additional category details.', required: [] })
  .openapi('CategoryDetail')

const CategorySchema = z
  .object({
    detail: CategoryDetailSchema.exactOptional(),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the category.' }),
    score: z.float64().exactOptional().openapi({ description: 'Scoring of the category.' }),
  })
  .nullable()
  .openapi({ description: 'An object describing identified category.', required: [] })
  .openapi('Category')

const CelebrityResultsSchema = z
  .object({
    celebrities: z
      .array(CelebritiesModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of celebrities recognized in the image.' }),
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
  })
  .nullable()
  .openapi({
    description: 'Result of domain-specific classifications for the domain of celebrities.',
    required: [],
  })
  .openapi('CelebrityResults')

const ColorInfoSchema = z
  .object({
    accentColor: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Possible accent color.' }),
    dominantColorBackground: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Possible dominant background color.' }),
    dominantColorForeground: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Possible dominant foreground color.' }),
    dominantColors: z
      .array(z.string().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of possible dominant colors.' }),
    isBWImg: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A value indicating if the image is black and white.' }),
  })
  .nullable()
  .openapi({
    description: 'An object providing additional metadata describing color attributes.',
    required: [],
  })
  .openapi('ColorInfo')

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

const ObjectHierarchySchema: z.ZodType<ObjectHierarchyType> = z
  .lazy(() =>
    z
      .object({
        confidence: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Confidence score of having observed the object in the image, as a value ranging from 0 to 1.',
          }),
        object: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Label for the object.' }),
        parent: ObjectHierarchySchema.exactOptional(),
      })
      .nullable()
      .openapi({ description: 'An object detected inside an image.', required: [] }),
  )
  .openapi('ObjectHierarchy')

const DetectedObjectSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence score of having observed the object in the image, as a value ranging from 0 to 1.',
      }),
    object: z.string().nullable().exactOptional().openapi({ description: 'Label for the object.' }),
    parent: ObjectHierarchySchema.exactOptional(),
    rectangle: BoundingRectSchema.exactOptional(),
  })
  .nullable()
  .openapi({ description: 'An object detected in an image.', required: [] })
  .openapi('DetectedObject')

const DetectResultSchema = z
  .object({
    metadata: ImageMetadataSchema.exactOptional(),
    objects: z
      .array(DetectedObjectSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of detected objects.', readOnly: true }),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
  })
  .nullable()
  .openapi({ description: 'Result of a DetectImage call.', required: [] })
  .openapi('DetectResult')

const DetectedBrandSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Confidence score of having observed the brand in the image, as a value ranging from 0 to 1.',
        readOnly: true,
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Label for the brand.', readOnly: true }),
    rectangle: BoundingRectSchema.exactOptional(),
  })
  .nullable()
  .openapi({ description: 'A brand detected in an image.', required: [] })
  .openapi('DetectedBrand')

const DomainModelResultsSchema = z
  .object({
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
    result: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Model-specific response.', 'x-ms-client-flatten': true }),
  })
  .nullable()
  .openapi({
    description:
      'Result of image analysis using a specific domain model including additional metadata.',
    required: [],
  })
  .openapi('DomainModelResults')

const FaceDescriptionSchema = z
  .object({
    age: z.int32().exactOptional().openapi({ description: 'Possible age of the face.' }),
    faceRectangle: FaceRectangleSchema.exactOptional(),
    gender: z
      .enum(['Male', 'Female'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Possible gender of the face.',
        'x-ms-enum': { modelAsString: false, name: 'Gender' },
      }),
  })
  .nullable()
  .openapi({ description: 'An object describing a face identified in the image.', required: [] })
  .openapi('FaceDescription')

const ImageCaptionSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The level of confidence the service has in the caption.' }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The text of the caption.' }),
  })
  .nullable()
  .openapi({
    description: 'An image caption, i.e. a brief description of what the image depicts.',
    required: [],
  })
  .openapi('ImageCaption')

const ImageDescriptionDetailsSchema = z
  .object({
    captions: z
      .array(ImageCaptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of captions, sorted by confidence level.' }),
    tags: z
      .array(z.string().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'A collection of image tags.' }),
  })
  .nullable()
  .openapi({
    description:
      'A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.',
    required: [],
  })
  .openapi('ImageDescriptionDetails')

const ImageTypeSchema = z
  .object({
    clipArtType: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Confidence level that the image is a clip art.' }),
    lineDrawingType: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Confidence level that the image is a line drawing.' }),
  })
  .nullable()
  .openapi({
    description: 'An object providing possible image types and matching confidence levels.',
    required: [],
  })
  .openapi('ImageType')

const ImageTagSchema = z
  .object({
    confidence: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The level of confidence that the entity was observed.' }),
    hint: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional hint/details for this tag.' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the entity.' }),
  })
  .nullable()
  .openapi({
    description: 'An entity observation in the image, along with the confidence score.',
    required: [],
  })
  .openapi('ImageTag')

const ImageAnalysisSchema = z
  .object({
    adult: AdultInfoSchema.exactOptional(),
    brands: z
      .array(DetectedBrandSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of brands detected in the image.' }),
    categories: z
      .array(CategorySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array indicating identified categories.' }),
    color: ColorInfoSchema.exactOptional(),
    description: ImageDescriptionDetailsSchema.exactOptional(),
    faces: z
      .array(FaceDescriptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of possible faces within the image.' }),
    imageType: ImageTypeSchema.exactOptional(),
    metadata: ImageMetadataSchema.exactOptional(),
    objects: z
      .array(DetectedObjectSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of objects describing what was detected in the image.' }),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
    tags: z
      .array(ImageTagSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of tags with confidence level.' }),
  })
  .nullable()
  .openapi({ description: 'Result of AnalyzeImage operation.', required: [] })
  .openapi('ImageAnalysis')

const ImageDescriptionSchema = z
  .object({
    description: ImageDescriptionDetailsSchema.exactOptional(),
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
  })
  .nullable()
  .openapi({
    description:
      'A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.',
    required: [],
  })
  .openapi('ImageDescription')

const ImageUrlSchema = z
  .object({ url: z.string().openapi({ description: 'Publicly reachable URL of an image.' }) })
  .openapi({ required: ['url'] })
  .openapi('ImageUrl')

const LandmarkResultsSchema = z
  .object({
    landmarks: z
      .array(LandmarksModelSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of landmarks recognized in the image.' }),
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
  })
  .nullable()
  .openapi({
    description: 'Result of domain-specific classifications for the domain of landmarks.',
    required: [],
  })
  .openapi('LandmarkResults')

const ModelDescriptionSchema = z
  .object({
    categories: z
      .array(z.string().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Categories of the model.' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'The name of the model.' }),
  })
  .nullable()
  .openapi({
    description: 'An object describing supported model by name and categories.',
    required: [],
  })
  .openapi('ModelDescription')

const ListModelsResultSchema = z
  .object({
    models: z
      .array(ModelDescriptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of supported models.', readOnly: true }),
  })
  .nullable()
  .openapi({ description: 'Result of the List Domain Models operation.', required: [] })
  .openapi('ListModelsResult')

const OcrWordSchema = z
  .object({
    boundingBox: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Bounding box of a recognized word. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.',
      }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'String value of a recognized word.' }),
  })
  .nullable()
  .openapi({ description: 'Information on a recognized word.', required: [] })
  .openapi('OcrWord')

const OcrLineSchema = z
  .object({
    boundingBox: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Bounding box of a recognized line. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.',
      }),
    words: z
      .array(OcrWordSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An array of objects, where each object represents a recognized word.',
      }),
  })
  .nullable()
  .openapi({ description: 'An object describing a single recognized line of text.', required: [] })
  .openapi('OcrLine')

const OcrRegionSchema = z
  .object({
    boundingBox: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Bounding box of a recognized region. The four integers represent the x-coordinate of the left edge, the y-coordinate of the top edge, width, and height of the bounding box, in the coordinate system of the input image, after it has been rotated around its center according to the detected text angle (see textAngle property), with the origin at the top-left corner, and the y-axis pointing down.',
      }),
    lines: z
      .array(OcrLineSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'An array of recognized lines of text.' }),
  })
  .nullable()
  .openapi({
    description:
      'A region consists of multiple lines (e.g. a column of text in a multi-column document).',
    required: [],
  })
  .openapi('OcrRegion')

const OcrResultSchema = z
  .object({
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The BCP-47 language code of the text in the image.' }),
    orientation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Orientation of the text recognized in the image, if requested. The value (up, down, left, or right) refers to the direction that the top of the recognized text is facing, after the image has been rotated around its center according to the detected text angle (see textAngle property).\r\nIf detection of the orientation was not requested, or no text is detected, the value is 'NotDetected'.",
      }),
    regions: z
      .array(OcrRegionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An array of objects, where each object represents a region of recognized text.',
      }),
    textAngle: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The angle, in radians, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('OcrResult')

const TagResultSchema = z
  .object({
    metadata: ImageMetadataSchema.exactOptional(),
    requestId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the REST API request.' }),
    tags: z
      .array(ImageTagSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A list of tags with confidence level.' }),
  })
  .nullable()
  .openapi({
    description: 'The results of a image tag operation, including any tags and image metadata.',
    required: [],
  })
  .openapi('TagResult')

const DescriptionExcludeParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(
      z
        .enum(['Celebrities', 'Landmarks'])
        .openapi({ 'x-ms-enum': { modelAsString: false, name: 'DescriptionExclude' } }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Turn off specified domain models when generating the description.',
      explode: false,
      in: 'query',
      name: 'descriptionExclude',
      required: false,
      schema: {
        items: {
          enum: ['Celebrities', 'Landmarks'],
          nullable: false,
          type: 'string',
          'x-ms-enum': { modelAsString: false, name: 'DescriptionExclude' },
        },
        type: 'array',
      },
      style: 'form',
      'x-ms-parameter-location': 'method',
      'x-nullable': true,
    },
  })

const DetectOrientationParamsSchema = z
  .stringbool()
  .default(true)
  .openapi({
    param: {
      description:
        "Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).",
      examples: { 'Successful RecognizePrintedText request': { value: 'true' } },
      in: 'query',
      name: 'detectOrientation',
      required: true,
      schema: { default: true, type: 'boolean' },
      'x-ms-parameter-location': 'method',
    },
  })

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

const OcrLanguageParamsSchema = z
  .enum([
    'unk',
    'zh-Hans',
    'zh-Hant',
    'cs',
    'da',
    'nl',
    'en',
    'fi',
    'fr',
    'de',
    'el',
    'hu',
    'it',
    'ja',
    'ko',
    'nb',
    'pl',
    'pt',
    'ru',
    'es',
    'sv',
    'tr',
    'ar',
    'ro',
    'sr-Cyrl',
    'sr-Latn',
    'sk',
  ])
  .default('unk')
  .exactOptional()
  .openapi({
    param: {
      description:
        "The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.",
      examples: { 'Successful RecognizePrintedText request': { value: 'en' } },
      in: 'query',
      name: 'language',
      required: false,
      schema: {
        default: 'unk',
        enum: [
          'unk',
          'zh-Hans',
          'zh-Hant',
          'cs',
          'da',
          'nl',
          'en',
          'fi',
          'fr',
          'de',
          'el',
          'hu',
          'it',
          'ja',
          'ko',
          'nb',
          'pl',
          'pt',
          'ru',
          'es',
          'sv',
          'tr',
          'ar',
          'ro',
          'sr-Cyrl',
          'sr-Latn',
          'sk',
        ],
        type: 'string',
      },
      'x-ms-enum': { modelAsString: false, name: 'OcrLanguages' },
      'x-ms-parameter-location': 'method',
      'x-nullable': false,
    },
  })

const ServiceLanguageParamsSchema = z
  .enum(['en', 'es', 'ja', 'pt', 'zh'])
  .default('en')
  .exactOptional()
  .openapi({
    param: {
      description:
        'The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.',
      examples: { 'Successful AnalyzeImage request': { value: 'en' } },
      in: 'query',
      name: 'language',
      required: false,
      schema: { default: 'en', enum: ['en', 'es', 'ja', 'pt', 'zh'], type: 'string' },
      'x-ms-parameter-location': 'method',
      'x-nullable': false,
    },
  })

const VisualFeaturesParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(
      z
        .enum([
          'ImageType',
          'Faces',
          'Adult',
          'Categories',
          'Color',
          'Tags',
          'Description',
          'Objects',
          'Brands',
        ])
        .openapi({ 'x-ms-enum': { modelAsString: false, name: 'VisualFeatureTypes' } }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include: Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white. Adult - detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also detected. Objects - detects various objects within an image, including the approximate location. The Objects argument is only available in English. Brands - detects various brands within an image, including the approximate location. The Brands argument is only available in English.',
      examples: {
        'Successful AnalyzeImage request': {
          value: [
            'Categories',
            'Adult',
            'Tags',
            'Description',
            'Faces',
            'Color',
            'ImageType',
            'Objects',
            'Brands',
          ],
        },
      },
      explode: false,
      in: 'query',
      name: 'visualFeatures',
      required: false,
      schema: {
        items: {
          enum: [
            'ImageType',
            'Faces',
            'Adult',
            'Categories',
            'Color',
            'Tags',
            'Description',
            'Objects',
            'Brands',
          ],
          nullable: false,
          type: 'string',
          'x-ms-enum': { modelAsString: false, name: 'VisualFeatureTypes' },
        },
        type: 'array',
      },
      style: 'form',
      'x-ms-parameter-location': 'method',
    },
  })

const SuccessfulAnalyzeImageByDomainRequestExample = {
  value: {
    metadata: { format: 'Jpeg', height: 1000, width: 1500 },
    requestId: 'f0027b4b-dc0d-4082-9228-1545ed246b03',
    result: {
      celebrities: [
        {
          confidence: 0.999028444,
          faceRectangle: { height: 248, left: 597, top: 162, width: 248 },
          name: 'Satya Nadella',
        },
      ],
    },
  },
}

const SuccessfulAnalyzeImageRequestExample = {
  value: {
    adult: {
      adultScore: 0.0934349000453949,
      goreScore: 0.012872257380997575,
      isAdultContent: false,
      isGoryContent: false,
      isRacyContent: false,
      racyScore: 0.06861349195241928,
    },
    brands: [
      { confidence: 0.857, name: 'Pepsi', rectangle: { h: 177, w: 161, x: 489, y: 79 } },
      { confidence: 0.893, name: 'Coca-Cola', rectangle: { h: 372, w: 171, x: 216, y: 55 } },
    ],
    categories: [
      { name: 'abstract_', score: 0.00390625 },
      {
        detail: {
          celebrities: [
            {
              confidence: 0.999028444,
              faceRectangle: { height: 248, left: 597, top: 162, width: 248 },
              name: 'Satya Nadella',
            },
          ],
          landmarks: [{ confidence: 0.9978346, name: 'Forbidden City' }],
        },
        name: 'people_',
        score: 0.83984375,
      },
    ],
    color: {
      accentColor: '873B59',
      dominantColorBackground: 'Brown',
      dominantColorForeground: 'Brown',
      dominantColors: ['Brown', 'Black'],
      isBWImg: false,
    },
    description: {
      captions: [{ confidence: 0.48293603002174407, text: 'Satya Nadella sitting on a bench' }],
      tags: ['person', 'man', 'outdoor', 'window', 'glasses'],
    },
    faces: [
      { age: 44, faceRectangle: { height: 250, left: 593, top: 160, width: 250 }, gender: 'Male' },
    ],
    imageType: { clipArtType: 0, lineDrawingType: 0 },
    metadata: { format: 'Jpeg', height: 1000, width: 1500 },
    objects: [
      {
        confidence: 0.9,
        object: 'tree',
        parent: { confidence: 0.95, object: 'plant' },
        rectangle: { h: 50, w: 50, x: 0, y: 0 },
      },
    ],
    requestId: '0dbec5ad-a3d3-4f7e-96b4-dfd57efe967d',
    tags: [
      { confidence: 0.9897908568382263, name: 'person' },
      { confidence: 0.9449388980865479, name: 'man' },
      { confidence: 0.938492476940155, name: 'outdoor' },
      { confidence: 0.8951393961906433, name: 'window' },
      { confidence: 0.7250059783791661, hint: 'mammal', name: 'pangolin' },
    ],
  },
}

const SuccessfulDescribeImageRequestExample = {
  value: {
    description: {
      captions: [
        { confidence: 0.48293603002174407, text: 'Satya Nadella sitting on a bench' },
        { confidence: 0.4003700681542283, text: 'Satya Nadella is sitting on a bench' },
        { confidence: 0.38035155997373377, text: 'Satya Nadella sitting in front of a building' },
      ],
      tags: ['person', 'man', 'outdoor', 'window', 'glasses'],
    },
    metadata: { format: 'Jpeg', height: 1000, width: 1500 },
    requestId: 'ed2de1c6-fb55-4686-b0da-4da6e05d283f',
  },
}

const SuccessfulDetectObjectsRequestExample = {
  value: {
    metadata: { format: 'Jpeg', height: 100, width: 100 },
    objects: [
      {
        confidence: 0.9,
        object: 'tree',
        parent: { confidence: 0.95, object: 'plant' },
        rectangle: { h: 50, w: 50, x: 0, y: 0 },
      },
    ],
    requestId: '1ad0e45e-b7b4-4be3-8042-53be96103337',
  },
}

const SuccessfulGenerateThumbnailRequestExample = { value: '{binary}' }

const SuccessfulGetAreaOfInterestRequestExample = {
  value: {
    areaOfInterest: { h: 951, w: 950, x: 160, y: 0 },
    metadata: { format: 'Jpeg', height: 951, width: 1378 },
    requestId: 'ed2de1c6-fb55-4686-b0da-4da6e05d283f',
  },
}

const SuccessfulListModelsRequestExample = {
  value: {
    models: [
      { categories: ['people_'], name: 'celebrities' },
      { categories: ['building_'], name: 'landmarks' },
    ],
  },
}

const SuccessfulRecognizePrintedTextRequestExample = {
  value: {
    language: 'en',
    orientation: 'Up',
    regions: [
      {
        boundingBox: '462,379,497,258',
        lines: [
          {
            boundingBox: '462,379,497,74',
            words: [
              { boundingBox: '462,379,41,73', text: 'A' },
              { boundingBox: '523,379,153,73', text: 'GOAL' },
              { boundingBox: '694,379,265,74', text: 'WITHOUT' },
            ],
          },
          {
            boundingBox: '565,471,289,74',
            words: [
              { boundingBox: '565,471,41,73', text: 'A' },
              { boundingBox: '626,471,150,73', text: 'PLAN' },
              { boundingBox: '801,472,53,73', text: 'IS' },
            ],
          },
          {
            boundingBox: '519,563,375,74',
            words: [
              { boundingBox: '519,563,149,74', text: 'JUST' },
              { boundingBox: '683,564,41,72', text: 'A' },
              { boundingBox: '741,564,153,73', text: 'WISH' },
            ],
          },
        ],
      },
    ],
    textAngle: -2.0000000000000338,
  },
}

const SuccessfulTagImageRequestExample = {
  value: {
    metadata: { format: 'Jpeg', height: 400, width: 400 },
    requestId: '1ad0e45e-b7b4-4be3-8042-53be96103337',
    tags: [
      { confidence: 0.9999997615814209, name: 'grass' },
      { confidence: 0.9999706745147705, name: 'outdoor' },
      { confidence: 0.9992897510528564, name: 'sky' },
      { confidence: 0.9964632391929626, name: 'building' },
      { confidence: 0.9927980303764343, name: 'house' },
      { confidence: 0.8226802945137024, name: 'lawn' },
      { confidence: 0.6412225365638733, name: 'green' },
      { confidence: 0.31403225660324097, name: 'residential' },
    ],
  },
}

const AnalyzeImageInStreamImageRequestBody = {
  description: 'An image stream.',
  content: {
    'application/octet-stream': { schema: z.object({}) },
    'multipart/form-data': { schema: z.object({}) },
  },
  required: true,
}

const ImageUrlRequestBody = {
  description: 'A JSON document with a URL pointing to the image that is to be analyzed.',
  content: { 'application/json': { schema: ImageUrlSchema } },
  required: true,
}

const ApimKeySecurityScheme = { in: 'header', name: 'Ocp-Apim-Subscription-Key', type: 'apiKey' }

export const postAnalyzeRoute = createRoute({
  method: 'post',
  path: '/analyze',
  description:
    'This operation extracts a rich set of visual features based on the image content.\r\nTwo input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.\r\nA successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'AnalyzeImage',
  request: {
    query: z.object({
      visualFeatures: VisualFeaturesParamsSchema,
      details: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z
              .enum(['Celebrities', 'Landmarks'])
              .openapi({ 'x-ms-enum': { modelAsString: false, name: 'Details' } }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if detected in the image, Landmarks - identifies notable landmarks in the image.',
            examples: {
              'Successful AnalyzeImage request': { value: ['Celebrities', 'Landmarks'] },
            },
            explode: false,
            in: 'query',
            name: 'details',
            required: false,
            schema: {
              items: {
                enum: ['Celebrities', 'Landmarks'],
                nullable: false,
                type: 'string',
                'x-ms-enum': { modelAsString: false, name: 'Details' },
              },
              type: 'array',
            },
            style: 'form',
            'x-nullable': true,
          },
        }),
      language: ServiceLanguageParamsSchema,
      descriptionExclude: DescriptionExcludeParamsSchema,
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description:
        'The response include the extracted features in JSON format. Here is the definitions for enumeration types:\r\n ClipartType\r\n Non - clipart = 0, ambiguous = 1, normal - clipart = 2, good - clipart = 3. LineDrawingTypeNon - LineDrawing = 0, LineDrawing = 1.',
      content: {
        'application/json': {
          schema: ImageAnalysisSchema,
          examples: { 'Successful AnalyzeImage request': SuccessfulAnalyzeImageRequestExample },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const postAreaOfInterestRoute = createRoute({
  method: 'post',
  path: '/areaOfInterest',
  description:
    'This operation returns a bounding box around the most important area of the image.\r\nA successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.\r\nUpon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.',
  operationId: 'GetAreaOfInterest',
  request: { body: ImageUrlRequestBody },
  responses: {
    200: {
      description: 'The response includes the extracted area of interest in JSON format.',
      content: {
        'application/json': {
          schema: AreaOfInterestResultSchema,
          examples: {
            'Successful GetAreaOfInterest request': SuccessfulGetAreaOfInterestRequestExample,
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

export const postDescribeRoute = createRoute({
  method: 'post',
  path: '/describe',
  description:
    'This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. Descriptions may include results from celebrity and landmark domain models, if applicable.\r\nTwo input methods are supported -- (1) Uploading an image or (2) specifying an image URL.\r\nA successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'DescribeImage',
  request: {
    query: z.object({
      maxCandidates: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of candidate descriptions to be returned.  The default is 1.',
            examples: { 'Successful DescribeImage request': { value: 1 } },
            in: 'query',
            name: 'maxCandidates',
            required: false,
            schema: { default: 1, format: 'int32', type: 'integer' },
            'x-nullable': true,
          },
        }),
      language: ServiceLanguageParamsSchema,
      descriptionExclude: DescriptionExcludeParamsSchema,
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'Image description object.',
      content: {
        'application/json': {
          schema: ImageDescriptionSchema,
          examples: { 'Successful DescribeImage request': SuccessfulDescribeImageRequestExample },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const postDetectRoute = createRoute({
  method: 'post',
  path: '/detect',
  description:
    'Performs object detection on the specified image.\r\nTwo input methods are supported -- (1) Uploading an image or (2) specifying an image URL.\r\nA successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'DetectObjects',
  request: { body: ImageUrlRequestBody },
  responses: {
    200: {
      description: 'The response include the detected objects in JSON format.',
      content: {
        'application/json': {
          schema: DetectResultSchema,
          examples: { 'Successful DetectObjects request': SuccessfulDetectObjectsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const postGenerateThumbnailRoute = createRoute({
  method: 'post',
  path: '/generateThumbnail',
  description:
    'This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.\r\nA successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.\r\nUpon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.',
  operationId: 'GenerateThumbnail',
  request: {
    query: z.object({
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1024),
        )
        .openapi({
          param: {
            description:
              'Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.',
            examples: { 'Successful GenerateThumbnail request': { value: '500' } },
            in: 'query',
            name: 'width',
            required: true,
            schema: { format: 'int32', maximum: 1024, minimum: 1, type: 'integer' },
            'x-nullable': false,
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
          z.int32().min(1).max(1024),
        )
        .openapi({
          param: {
            description:
              'Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.',
            examples: { 'Successful GenerateThumbnail request': { value: '500' } },
            in: 'query',
            name: 'height',
            required: true,
            schema: { format: 'int32', maximum: 1024, minimum: 1, type: 'integer' },
            'x-nullable': false,
          },
        }),
      smartCropping: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean flag for enabling smart cropping.',
            examples: { 'Successful GenerateThumbnail request': { value: true } },
            in: 'query',
            name: 'smartCropping',
            required: false,
            schema: { default: false, type: 'boolean' },
            'x-nullable': true,
          },
        }),
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'The generated thumbnail in binary format.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: {
            'Successful GenerateThumbnail request': SuccessfulGenerateThumbnailRequestExample,
          },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/octet-stream': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const getModelsRoute = createRoute({
  method: 'get',
  path: '/models',
  description:
    'This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.\r\nA successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'ListModels',
  responses: {
    200: {
      description: 'List of available domain models.',
      content: {
        'application/json': {
          schema: ListModelsResultSchema,
          examples: { 'Successful ListModels request': SuccessfulListModelsRequestExample },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})

export const postModelsModelAnalyzeRoute = createRoute({
  method: 'post',
  path: '/models/{model}/analyze',
  description:
    'This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.\r\nTwo input methods are supported -- (1) Uploading an image or (2) specifying an image URL.\r\nA successful response will be returned in JSON.\r\nIf the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'AnalyzeImageByDomain',
  request: {
    params: z.object({
      model: z
        .string()
        .openapi({
          param: {
            description: 'The domain-specific content to recognize.',
            examples: { 'Successful AnalyzeImageByDomain request': { value: 'Celebrities' } },
            in: 'path',
            name: 'model',
            required: true,
            schema: { type: 'string' },
            'x-nullable': true,
          },
        }),
    }),
    query: z.object({ language: ServiceLanguageParamsSchema }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'Analysis result based on the domain model.',
      content: {
        'application/json': {
          schema: DomainModelResultsSchema,
          examples: {
            'Successful AnalyzeImageByDomain request': SuccessfulAnalyzeImageByDomainRequestExample,
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

export const postOcrRoute = createRoute({
  method: 'post',
  path: '/ocr',
  description:
    'Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.\r\nUpon success, the OCR results will be returned.\r\nUpon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.',
  operationId: 'RecognizePrintedText',
  request: {
    query: z.object({
      detectOrientation: DetectOrientationParamsSchema,
      language: OcrLanguageParamsSchema,
    }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description:
        'The OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words. The angle, in radians, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.',
      content: {
        'application/json': {
          schema: OcrResultSchema,
          examples: {
            'Successful RecognizePrintedText request': SuccessfulRecognizePrintedTextRequestExample,
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

export const postTagRoute = createRoute({
  method: 'post',
  path: '/tag',
  description:
    'This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the hint "fungus".\r\nTwo input methods are supported -- (1) Uploading an image or (2) specifying an image URL.\r\nA successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.',
  operationId: 'TagImage',
  request: {
    query: z.object({ language: ServiceLanguageParamsSchema }),
    body: ImageUrlRequestBody,
  },
  responses: {
    200: {
      description: 'Image tags object.',
      content: {
        'application/json': {
          schema: TagResultSchema,
          examples: { 'Successful TagImage request': SuccessfulTagImageRequestExample },
        },
      },
    },
    default: {
      description: 'Error response.',
      content: { 'application/json': { schema: ComputerVisionErrorSchema } },
    },
  },
})
