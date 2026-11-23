import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcrImageToLinesWithLocationRoute,
  postOcrImageToTextRoute,
  postOcrImageToWordsWithLocationRoute,
  postOcrPdfToLinesWithLocationRoute,
  postOcrPdfToTextRoute,
  postOcrPdfToWordsWithLocationRoute,
  postOcrPhotoRecognizeBusinessCardRoute,
  postOcrPhotoRecognizeFormAdvancedRoute,
  postOcrPhotoRecognizeFormRoute,
  postOcrPhotoRecognizeReceiptRoute,
  postOcrPhotoToTextRoute,
  postOcrPhotoToWordsWithLocationRoute,
  postOcrPreprocessingImageBinarizeAdvancedRoute,
  postOcrPreprocessingImageBinarizeRoute,
  postOcrPreprocessingImageGetPageAngleRoute,
  postOcrPreprocessingImageUnrotateAdvancedRoute,
  postOcrPreprocessingImageUnrotateRoute,
  postOcrPreprocessingImageUnskewRoute,
  postOcrReceiptsPhotoToCsvRoute,
} from './routes'
import {
  postOcrImageToLinesWithLocationRouteHandler,
  postOcrImageToTextRouteHandler,
  postOcrImageToWordsWithLocationRouteHandler,
  postOcrPdfToLinesWithLocationRouteHandler,
  postOcrPdfToTextRouteHandler,
  postOcrPdfToWordsWithLocationRouteHandler,
  postOcrPhotoRecognizeBusinessCardRouteHandler,
  postOcrPhotoRecognizeFormAdvancedRouteHandler,
  postOcrPhotoRecognizeFormRouteHandler,
  postOcrPhotoRecognizeReceiptRouteHandler,
  postOcrPhotoToTextRouteHandler,
  postOcrPhotoToWordsWithLocationRouteHandler,
  postOcrPreprocessingImageBinarizeAdvancedRouteHandler,
  postOcrPreprocessingImageBinarizeRouteHandler,
  postOcrPreprocessingImageGetPageAngleRouteHandler,
  postOcrPreprocessingImageUnrotateAdvancedRouteHandler,
  postOcrPreprocessingImageUnrotateRouteHandler,
  postOcrPreprocessingImageUnskewRouteHandler,
  postOcrReceiptsPhotoToCsvRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOcrImageToLinesWithLocationRoute, postOcrImageToLinesWithLocationRouteHandler)
  .openapi(postOcrImageToWordsWithLocationRoute, postOcrImageToWordsWithLocationRouteHandler)
  .openapi(postOcrImageToTextRoute, postOcrImageToTextRouteHandler)
  .openapi(postOcrPdfToLinesWithLocationRoute, postOcrPdfToLinesWithLocationRouteHandler)
  .openapi(postOcrPdfToWordsWithLocationRoute, postOcrPdfToWordsWithLocationRouteHandler)
  .openapi(postOcrPdfToTextRoute, postOcrPdfToTextRouteHandler)
  .openapi(postOcrPhotoRecognizeBusinessCardRoute, postOcrPhotoRecognizeBusinessCardRouteHandler)
  .openapi(postOcrPhotoRecognizeFormRoute, postOcrPhotoRecognizeFormRouteHandler)
  .openapi(postOcrPhotoRecognizeFormAdvancedRoute, postOcrPhotoRecognizeFormAdvancedRouteHandler)
  .openapi(postOcrPhotoRecognizeReceiptRoute, postOcrPhotoRecognizeReceiptRouteHandler)
  .openapi(postOcrPhotoToWordsWithLocationRoute, postOcrPhotoToWordsWithLocationRouteHandler)
  .openapi(postOcrPhotoToTextRoute, postOcrPhotoToTextRouteHandler)
  .openapi(postOcrPreprocessingImageBinarizeRoute, postOcrPreprocessingImageBinarizeRouteHandler)
  .openapi(
    postOcrPreprocessingImageBinarizeAdvancedRoute,
    postOcrPreprocessingImageBinarizeAdvancedRouteHandler,
  )
  .openapi(
    postOcrPreprocessingImageGetPageAngleRoute,
    postOcrPreprocessingImageGetPageAngleRouteHandler,
  )
  .openapi(postOcrPreprocessingImageUnrotateRoute, postOcrPreprocessingImageUnrotateRouteHandler)
  .openapi(
    postOcrPreprocessingImageUnrotateAdvancedRoute,
    postOcrPreprocessingImageUnrotateAdvancedRouteHandler,
  )
  .openapi(postOcrPreprocessingImageUnskewRoute, postOcrPreprocessingImageUnskewRouteHandler)
  .openapi(postOcrReceiptsPhotoToCsvRoute, postOcrReceiptsPhotoToCsvRouteHandler)

export default app
