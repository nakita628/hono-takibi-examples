type ImageUrl = { url: string }
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
type BoundingBox = number[]
type Word = { boundingBox: BoundingBox; confidence?: 'High' | 'Low' | undefined; text: string }
type Line = {
  boundingBox?: BoundingBox | undefined
  text?: string | undefined
  words?: Word[] | undefined
}
type TextRecognitionResult = {
  clockwiseOrientation?: number | undefined
  height?: number | undefined
  lines: Line[]
  page?: number | undefined
  unit?: 'pixel' | 'inch' | undefined
  width?: number | undefined
}
type OperationStatus = 'NotStarted' | 'Running' | 'Failed' | 'Succeeded'
type ReadOperationResult = {
  recognitionResults?: TextRecognitionResult[] | undefined
  status?: OperationStatus | undefined
}
type TextOperationResult = {
  recognitionResult?: TextRecognitionResult | undefined
  status?: OperationStatus | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/read/core/asyncBatchAnalyze': {
      $post:
        | { input: { json: ImageUrl }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/read/operations/:operationId': {
      $get:
        | {
            input: { param: { operationId: string } }
            output: ReadOperationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operationId: string } }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/recognizeText': {
      $post:
        | {
            input: { query: { mode: 'Handwritten' | 'Printed' } } & { json: ImageUrl }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { mode: 'Handwritten' | 'Printed' } } & { json: ImageUrl }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/textOperations/:operationId': {
      $get:
        | {
            input: { param: { operationId: string } }
            output: TextOperationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { operationId: string } }
            output: ComputerVisionError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
