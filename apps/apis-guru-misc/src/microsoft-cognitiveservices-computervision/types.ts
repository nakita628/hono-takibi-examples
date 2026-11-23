type ImageUrl = { url: string }
type AdultInfo = {
  adultScore?: number | undefined
  goreScore?: number | undefined
  isAdultContent?: boolean | undefined
  isGoryContent?: boolean | undefined
  isRacyContent?: boolean | undefined
  racyScore?: number | undefined
} | null
type BoundingRect = {
  h?: number | undefined
  w?: number | undefined
  x?: number | undefined
  y?: number | undefined
}
type DetectedBrand = {
  confidence?: number | undefined
  name?: (string | null) | undefined
  rectangle?: BoundingRect | undefined
} | null
type FaceRectangle = {
  height?: number | undefined
  left?: number | undefined
  top?: number | undefined
  width?: number | undefined
} | null
type CelebritiesModel = {
  confidence?: number | undefined
  faceRectangle?: FaceRectangle | undefined
  name?: (string | null) | undefined
} | null
type LandmarksModel = { confidence?: number | undefined; name?: (string | null) | undefined } | null
type CategoryDetail = {
  celebrities?: (CelebritiesModel[] | null) | undefined
  landmarks?: (LandmarksModel[] | null) | undefined
} | null
type Category = {
  detail?: CategoryDetail | undefined
  name?: (string | null) | undefined
  score?: number | undefined
} | null
type ColorInfo = {
  accentColor?: (string | null) | undefined
  dominantColorBackground?: (string | null) | undefined
  dominantColorForeground?: (string | null) | undefined
  dominantColors?: ((string | null)[] | null) | undefined
  isBWImg?: boolean | undefined
} | null
type ImageCaption = { confidence?: number | undefined; text?: (string | null) | undefined } | null
type ImageDescriptionDetails = {
  captions?: (ImageCaption[] | null) | undefined
  tags?: ((string | null)[] | null) | undefined
} | null
type FaceDescription = {
  age?: number | undefined
  faceRectangle?: FaceRectangle | undefined
  gender?: 'Male' | 'Female' | undefined
} | null
type ImageType = { clipArtType?: number | undefined; lineDrawingType?: number | undefined } | null
type ImageMetadata = {
  format?: (string | null) | undefined
  height?: number | undefined
  width?: number | undefined
} | null
type ObjectHierarchy = {
  confidence?: number | undefined
  object?: (string | null) | undefined
  parent?: ObjectHierarchy | undefined
} | null
type DetectedObject = {
  confidence?: number | undefined
  object?: (string | null) | undefined
  parent?: ObjectHierarchy | undefined
  rectangle?: BoundingRect | undefined
} | null
type ImageTag = {
  confidence?: number | undefined
  hint?: (string | null) | undefined
  name?: (string | null) | undefined
} | null
type ImageAnalysis = {
  adult?: AdultInfo | undefined
  brands?: (DetectedBrand[] | null) | undefined
  categories?: (Category[] | null) | undefined
  color?: ColorInfo | undefined
  description?: ImageDescriptionDetails | undefined
  faces?: (FaceDescription[] | null) | undefined
  imageType?: ImageType | undefined
  metadata?: ImageMetadata | undefined
  objects?: (DetectedObject[] | null) | undefined
  requestId?: (string | null) | undefined
  tags?: (ImageTag[] | null) | undefined
} | null
type ComputerVisionError = {
  code:
    | 'InvalidImageFormat'
    | 'UnsupportedMediaType'
    | 'InvalidImageUrl'
    | 'NotSupportedFeature'
    | 'NotSupportedImage'
    | 'Timeout'
    | 'InternalServerError'
    | 'InvalidImageSize'
    | 'BadArgument'
    | 'DetectFaceError'
    | 'NotSupportedLanguage'
    | 'InvalidThumbnailSize'
    | 'InvalidDetails'
    | 'InvalidModel'
    | 'CancelledRequest'
    | 'NotSupportedVisualFeature'
    | 'FailedToProcess'
    | 'Unspecified'
    | 'StorageException'
  message: string
  requestId?: string | undefined
}
type AreaOfInterestResult = {
  areaOfInterest?: BoundingRect | undefined
  metadata?: ImageMetadata | undefined
  requestId?: (string | null) | undefined
} | null
type ImageDescription = {
  description?: ImageDescriptionDetails | undefined
  metadata?: ImageMetadata | undefined
  requestId?: (string | null) | undefined
} | null
type DetectResult = {
  metadata?: ImageMetadata | undefined
  objects?: (DetectedObject[] | null) | undefined
  requestId?: (string | null) | undefined
} | null
type ModelDescription = {
  categories?: ((string | null)[] | null) | undefined
  name?: (string | null) | undefined
} | null
type ListModelsResult = { models?: (ModelDescription[] | null) | undefined } | null
type DomainModelResults = {
  metadata?: ImageMetadata | undefined
  requestId?: (string | null) | undefined
  result?: { [x: string]: unknown } | undefined
} | null
type OcrWord = {
  boundingBox?: (string | null) | undefined
  text?: (string | null) | undefined
} | null
type OcrLine = {
  boundingBox?: (string | null) | undefined
  words?: (OcrWord[] | null) | undefined
} | null
type OcrRegion = {
  boundingBox?: (string | null) | undefined
  lines?: (OcrLine[] | null) | undefined
} | null
type OcrResult = {
  language?: (string | null) | undefined
  orientation?: (string | null) | undefined
  regions?: (OcrRegion[] | null) | undefined
  textAngle?: number | undefined
} | null
type TagResult = {
  metadata?: ImageMetadata | undefined
  requestId?: (string | null) | undefined
  tags?: (ImageTag[] | null) | undefined
} | null
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analyze': {
      $post:
        | {
            input: {
              query: {
                visualFeatures?:
                  | (
                      | 'ImageType'
                      | 'Faces'
                      | 'Adult'
                      | 'Categories'
                      | 'Color'
                      | 'Tags'
                      | 'Description'
                      | 'Objects'
                      | 'Brands'
                    )[]
                  | undefined
                details?: ('Celebrities' | 'Landmarks')[] | undefined
                language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined
                descriptionExclude?: ('Celebrities' | 'Landmarks')[] | undefined
              }
            } & { json: ImageUrl }
            output: ImageAnalysis
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                visualFeatures?:
                  | (
                      | 'ImageType'
                      | 'Faces'
                      | 'Adult'
                      | 'Categories'
                      | 'Color'
                      | 'Tags'
                      | 'Description'
                      | 'Objects'
                      | 'Brands'
                    )[]
                  | undefined
                details?: ('Celebrities' | 'Landmarks')[] | undefined
                language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined
                descriptionExclude?: ('Celebrities' | 'Landmarks')[] | undefined
              }
            } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/areaOfInterest': {
      $post:
        | {
            input: { json: ImageUrl }
            output: AreaOfInterestResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/describe': {
      $post:
        | {
            input: {
              query: {
                maxCandidates?: number | undefined
                language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined
                descriptionExclude?: ('Celebrities' | 'Landmarks')[] | undefined
              }
            } & { json: ImageUrl }
            output: ImageDescription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxCandidates?: number | undefined
                language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined
                descriptionExclude?: ('Celebrities' | 'Landmarks')[] | undefined
              }
            } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/detect': {
      $post:
        | { input: { json: ImageUrl }; output: DetectResult; outputFormat: 'json'; status: 200 }
        | {
            input: { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/generateThumbnail': {
      $post:
        | {
            input: {
              query: { width: number; height: number; smartCropping?: boolean | undefined }
            } & { json: ImageUrl }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { width: number; height: number; smartCropping?: boolean | undefined }
            } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/models': {
      $get:
        | { input: {}; output: ListModelsResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ComputerVisionError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/models/:model/analyze': {
      $post:
        | {
            input: { param: { model: string } } & {
              query: { language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined }
            } & { json: ImageUrl }
            output: DomainModelResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model: string } } & {
              query: { language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined }
            } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ocr': {
      $post:
        | {
            input: {
              query: {
                detectOrientation: boolean
                language?:
                  | 'unk'
                  | 'zh-Hans'
                  | 'zh-Hant'
                  | 'cs'
                  | 'da'
                  | 'nl'
                  | 'en'
                  | 'fi'
                  | 'fr'
                  | 'de'
                  | 'el'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'ko'
                  | 'nb'
                  | 'pl'
                  | 'pt'
                  | 'ru'
                  | 'es'
                  | 'sv'
                  | 'tr'
                  | 'ar'
                  | 'ro'
                  | 'sr-Cyrl'
                  | 'sr-Latn'
                  | 'sk'
                  | undefined
              }
            } & { json: ImageUrl }
            output: OcrResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                detectOrientation: boolean
                language?:
                  | 'unk'
                  | 'zh-Hans'
                  | 'zh-Hant'
                  | 'cs'
                  | 'da'
                  | 'nl'
                  | 'en'
                  | 'fi'
                  | 'fr'
                  | 'de'
                  | 'el'
                  | 'hu'
                  | 'it'
                  | 'ja'
                  | 'ko'
                  | 'nb'
                  | 'pl'
                  | 'pt'
                  | 'ru'
                  | 'es'
                  | 'sv'
                  | 'tr'
                  | 'ar'
                  | 'ro'
                  | 'sr-Cyrl'
                  | 'sr-Latn'
                  | 'sk'
                  | undefined
              }
            } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tag': {
      $post:
        | {
            input: { query: { language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined } } & {
              json: ImageUrl
            }
            output: TagResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'es' | 'ja' | 'pt' | 'zh' | undefined } } & {
              json: ImageUrl
            }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
