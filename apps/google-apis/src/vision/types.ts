type GoogleCloudVisionV1p1beta1Feature = {
  maxResults?: number | undefined
  model?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'FACE_DETECTION'
    | 'LANDMARK_DETECTION'
    | 'LOGO_DETECTION'
    | 'LABEL_DETECTION'
    | 'TEXT_DETECTION'
    | 'DOCUMENT_TEXT_DETECTION'
    | 'SAFE_SEARCH_DETECTION'
    | 'IMAGE_PROPERTIES'
    | 'CROP_HINTS'
    | 'WEB_DETECTION'
    | 'PRODUCT_SEARCH'
    | 'OBJECT_LOCALIZATION'
    | undefined
}
type GoogleCloudVisionV1p1beta1CropHintsParams = { aspectRatios?: number[] | undefined }
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type GoogleCloudVisionV1p1beta1LatLongRect = {
  maxLatLng?: LatLng | undefined
  minLatLng?: LatLng | undefined
}
type GoogleCloudVisionV1p1beta1NormalizedVertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudVisionV1p1beta1Vertex = { x?: number | undefined; y?: number | undefined }
type GoogleCloudVisionV1p1beta1BoundingPoly = {
  normalizedVertices?: GoogleCloudVisionV1p1beta1NormalizedVertex[] | undefined
  vertices?: GoogleCloudVisionV1p1beta1Vertex[] | undefined
}
type GoogleCloudVisionV1p1beta1ProductSearchParams = {
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  filter?: string | undefined
  productCategories?: string[] | undefined
  productSet?: string | undefined
}
type GoogleCloudVisionV1p1beta1TextDetectionParams = {
  advancedOcrOptions?: string[] | undefined
  enableTextDetectionConfidenceScore?: boolean | undefined
}
type GoogleCloudVisionV1p1beta1WebDetectionParams = { includeGeoResults?: boolean | undefined }
type GoogleCloudVisionV1p1beta1ImageContext = {
  cropHintsParams?: GoogleCloudVisionV1p1beta1CropHintsParams | undefined
  languageHints?: string[] | undefined
  latLongRect?: GoogleCloudVisionV1p1beta1LatLongRect | undefined
  productSearchParams?: GoogleCloudVisionV1p1beta1ProductSearchParams | undefined
  textDetectionParams?: GoogleCloudVisionV1p1beta1TextDetectionParams | undefined
  webDetectionParams?: GoogleCloudVisionV1p1beta1WebDetectionParams | undefined
}
type GoogleCloudVisionV1p1beta1GcsSource = { uri?: string | undefined }
type GoogleCloudVisionV1p1beta1InputConfig = {
  content?: string | undefined
  gcsSource?: GoogleCloudVisionV1p1beta1GcsSource | undefined
  mimeType?: string | undefined
}
type GoogleCloudVisionV1p1beta1AnnotateFileRequest = {
  features?: GoogleCloudVisionV1p1beta1Feature[] | undefined
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext | undefined
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig | undefined
  pages?: number[] | undefined
}
type GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest = {
  labels?: { [x: string]: string } | undefined
  parent?: string | undefined
  requests?: GoogleCloudVisionV1p1beta1AnnotateFileRequest[] | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleCloudVisionV1p1beta1ImageAnnotationContext = {
  pageNumber?: number | undefined
  uri?: string | undefined
}
type GoogleCloudVisionV1p1beta1CropHint = {
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  importanceFraction?: number | undefined
}
type GoogleCloudVisionV1p1beta1CropHintsAnnotation = {
  cropHints?: GoogleCloudVisionV1p1beta1CropHint[] | undefined
}
type GoogleCloudVisionV1p1beta1Position = {
  x?: number | undefined
  y?: number | undefined
  z?: number | undefined
}
type GoogleCloudVisionV1p1beta1FaceAnnotationLandmark = {
  position?: GoogleCloudVisionV1p1beta1Position | undefined
  type?:
    | 'UNKNOWN_LANDMARK'
    | 'LEFT_EYE'
    | 'RIGHT_EYE'
    | 'LEFT_OF_LEFT_EYEBROW'
    | 'RIGHT_OF_LEFT_EYEBROW'
    | 'LEFT_OF_RIGHT_EYEBROW'
    | 'RIGHT_OF_RIGHT_EYEBROW'
    | 'MIDPOINT_BETWEEN_EYES'
    | 'NOSE_TIP'
    | 'UPPER_LIP'
    | 'LOWER_LIP'
    | 'MOUTH_LEFT'
    | 'MOUTH_RIGHT'
    | 'MOUTH_CENTER'
    | 'NOSE_BOTTOM_RIGHT'
    | 'NOSE_BOTTOM_LEFT'
    | 'NOSE_BOTTOM_CENTER'
    | 'LEFT_EYE_TOP_BOUNDARY'
    | 'LEFT_EYE_RIGHT_CORNER'
    | 'LEFT_EYE_BOTTOM_BOUNDARY'
    | 'LEFT_EYE_LEFT_CORNER'
    | 'RIGHT_EYE_TOP_BOUNDARY'
    | 'RIGHT_EYE_RIGHT_CORNER'
    | 'RIGHT_EYE_BOTTOM_BOUNDARY'
    | 'RIGHT_EYE_LEFT_CORNER'
    | 'LEFT_EYEBROW_UPPER_MIDPOINT'
    | 'RIGHT_EYEBROW_UPPER_MIDPOINT'
    | 'LEFT_EAR_TRAGION'
    | 'RIGHT_EAR_TRAGION'
    | 'LEFT_EYE_PUPIL'
    | 'RIGHT_EYE_PUPIL'
    | 'FOREHEAD_GLABELLA'
    | 'CHIN_GNATHION'
    | 'CHIN_LEFT_GONION'
    | 'CHIN_RIGHT_GONION'
    | 'LEFT_CHEEK_CENTER'
    | 'RIGHT_CHEEK_CENTER'
    | undefined
}
type GoogleCloudVisionV1p1beta1FaceAnnotation = {
  angerLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  blurredLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  detectionConfidence?: number | undefined
  fdBoundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  headwearLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  joyLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  landmarkingConfidence?: number | undefined
  landmarks?: GoogleCloudVisionV1p1beta1FaceAnnotationLandmark[] | undefined
  panAngle?: number | undefined
  rollAngle?: number | undefined
  sorrowLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  surpriseLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  tiltAngle?: number | undefined
  underExposedLikelihood?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
}
type GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak = {
  isPrefix?: boolean | undefined
  type?: 'UNKNOWN' | 'SPACE' | 'SURE_SPACE' | 'EOL_SURE_SPACE' | 'HYPHEN' | 'LINE_BREAK' | undefined
}
type GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage = {
  confidence?: number | undefined
  languageCode?: string | undefined
}
type GoogleCloudVisionV1p1beta1TextAnnotationTextProperty = {
  detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak | undefined
  detectedLanguages?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage[] | undefined
}
type GoogleCloudVisionV1p1beta1Symbol = {
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty | undefined
  text?: string | undefined
}
type GoogleCloudVisionV1p1beta1Word = {
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty | undefined
  symbols?: GoogleCloudVisionV1p1beta1Symbol[] | undefined
}
type GoogleCloudVisionV1p1beta1Paragraph = {
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty | undefined
  words?: GoogleCloudVisionV1p1beta1Word[] | undefined
}
type GoogleCloudVisionV1p1beta1Block = {
  blockType?: 'UNKNOWN' | 'TEXT' | 'TABLE' | 'PICTURE' | 'RULER' | 'BARCODE' | undefined
  boundingBox?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  paragraphs?: GoogleCloudVisionV1p1beta1Paragraph[] | undefined
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty | undefined
}
type GoogleCloudVisionV1p1beta1Page = {
  blocks?: GoogleCloudVisionV1p1beta1Block[] | undefined
  confidence?: number | undefined
  height?: number | undefined
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty | undefined
  width?: number | undefined
}
type GoogleCloudVisionV1p1beta1TextAnnotation = {
  pages?: GoogleCloudVisionV1p1beta1Page[] | undefined
  text?: string | undefined
}
type Color = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GoogleCloudVisionV1p1beta1ColorInfo = {
  color?: Color | undefined
  pixelFraction?: number | undefined
  score?: number | undefined
}
type GoogleCloudVisionV1p1beta1DominantColorsAnnotation = {
  colors?: GoogleCloudVisionV1p1beta1ColorInfo[] | undefined
}
type GoogleCloudVisionV1p1beta1ImageProperties = {
  dominantColors?: GoogleCloudVisionV1p1beta1DominantColorsAnnotation | undefined
}
type GoogleCloudVisionV1p1beta1LocationInfo = { latLng?: LatLng | undefined }
type GoogleCloudVisionV1p1beta1Property = {
  name?: string | undefined
  uint64Value?: string | undefined
  value?: string | undefined
}
type GoogleCloudVisionV1p1beta1EntityAnnotation = {
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  confidence?: number | undefined
  description?: string | undefined
  locale?: string | undefined
  locations?: GoogleCloudVisionV1p1beta1LocationInfo[] | undefined
  mid?: string | undefined
  properties?: GoogleCloudVisionV1p1beta1Property[] | undefined
  score?: number | undefined
  topicality?: number | undefined
}
type GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation = {
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  languageCode?: string | undefined
  mid?: string | undefined
  name?: string | undefined
  score?: number | undefined
}
type GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation = {
  languageCode?: string | undefined
  mid?: string | undefined
  name?: string | undefined
  score?: number | undefined
}
type GoogleCloudVisionV1p1beta1ProductKeyValue = {
  key?: string | undefined
  value?: string | undefined
}
type GoogleCloudVisionV1p1beta1Product = {
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  productCategory?: string | undefined
  productLabels?: GoogleCloudVisionV1p1beta1ProductKeyValue[] | undefined
}
type GoogleCloudVisionV1p1beta1ProductSearchResultsResult = {
  image?: string | undefined
  product?: GoogleCloudVisionV1p1beta1Product | undefined
  score?: number | undefined
}
type GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult = {
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly | undefined
  objectAnnotations?: GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation[] | undefined
  results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[] | undefined
}
type GoogleCloudVisionV1p1beta1ProductSearchResults = {
  indexTime?: string | undefined
  productGroupedResults?: GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult[] | undefined
  results?: GoogleCloudVisionV1p1beta1ProductSearchResultsResult[] | undefined
}
type GoogleCloudVisionV1p1beta1SafeSearchAnnotation = {
  adult?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  medical?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  racy?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  spoof?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
  violence?:
    | 'UNKNOWN'
    | 'VERY_UNLIKELY'
    | 'UNLIKELY'
    | 'POSSIBLE'
    | 'LIKELY'
    | 'VERY_LIKELY'
    | undefined
}
type GoogleCloudVisionV1p1beta1WebDetectionWebLabel = {
  label?: string | undefined
  languageCode?: string | undefined
}
type GoogleCloudVisionV1p1beta1WebDetectionWebImage = {
  score?: number | undefined
  url?: string | undefined
}
type GoogleCloudVisionV1p1beta1WebDetectionWebPage = {
  fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[] | undefined
  pageTitle?: string | undefined
  partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[] | undefined
  score?: number | undefined
  url?: string | undefined
}
type GoogleCloudVisionV1p1beta1WebDetectionWebEntity = {
  description?: string | undefined
  entityId?: string | undefined
  score?: number | undefined
}
type GoogleCloudVisionV1p1beta1WebDetection = {
  bestGuessLabels?: GoogleCloudVisionV1p1beta1WebDetectionWebLabel[] | undefined
  fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[] | undefined
  pagesWithMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebPage[] | undefined
  partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[] | undefined
  visuallySimilarImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[] | undefined
  webEntities?: GoogleCloudVisionV1p1beta1WebDetectionWebEntity[] | undefined
}
type GoogleCloudVisionV1p1beta1AnnotateImageResponse = {
  context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext | undefined
  cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation | undefined
  error?: Status | undefined
  faceAnnotations?: GoogleCloudVisionV1p1beta1FaceAnnotation[] | undefined
  fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation | undefined
  imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties | undefined
  labelAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[] | undefined
  landmarkAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[] | undefined
  localizedObjectAnnotations?: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[] | undefined
  logoAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[] | undefined
  productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults | undefined
  safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation | undefined
  textAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[] | undefined
  webDetection?: GoogleCloudVisionV1p1beta1WebDetection | undefined
}
type GoogleCloudVisionV1p1beta1AnnotateFileResponse = {
  error?: Status | undefined
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig | undefined
  responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[] | undefined
  totalPages?: number | undefined
}
type GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse = {
  responses?: GoogleCloudVisionV1p1beta1AnnotateFileResponse[] | undefined
}
type GoogleCloudVisionV1p1beta1GcsDestination = { uri?: string | undefined }
type GoogleCloudVisionV1p1beta1OutputConfig = {
  batchSize?: number | undefined
  gcsDestination?: GoogleCloudVisionV1p1beta1GcsDestination | undefined
}
type GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest = {
  features?: GoogleCloudVisionV1p1beta1Feature[] | undefined
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext | undefined
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig | undefined
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig | undefined
}
type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest = {
  labels?: { [x: string]: string } | undefined
  parent?: string | undefined
  requests?: GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[] | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudVisionV1p1beta1ImageSource = {
  gcsImageUri?: string | undefined
  imageUri?: string | undefined
}
type GoogleCloudVisionV1p1beta1Image = {
  content?: string | undefined
  source?: GoogleCloudVisionV1p1beta1ImageSource | undefined
}
type GoogleCloudVisionV1p1beta1AnnotateImageRequest = {
  features?: GoogleCloudVisionV1p1beta1Feature[] | undefined
  image?: GoogleCloudVisionV1p1beta1Image | undefined
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext | undefined
}
type GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest = {
  labels?: { [x: string]: string } | undefined
  parent?: string | undefined
  requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[] | undefined
}
type GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse = {
  responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[] | undefined
}
type GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest = {
  labels?: { [x: string]: string } | undefined
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig | undefined
  parent?: string | undefined
  requests?: GoogleCloudVisionV1p1beta1AnnotateImageRequest[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1p1beta1/files:annotate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest }
        output: GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/files:asyncBatchAnnotate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/images:annotate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest }
        output: GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/images:asyncBatchAnnotate': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/:parent/files:annotate': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest }
        output: GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/:parent/files:asyncBatchAnnotate': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/:parent/images:annotate': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest }
        output: GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1p1beta1/:parent/images:asyncBatchAnnotate': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
