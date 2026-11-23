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
} from '../routes'

const app = new OpenAPIHono()

export const ocrHandler = app
  .openapi(postOcrImageToLinesWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrImageToWordsWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrImageToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPdfToLinesWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPdfToWordsWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPdfToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoRecognizeBusinessCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoRecognizeFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoRecognizeFormAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoRecognizeReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoToWordsWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPhotoToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageBinarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageBinarizeAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageGetPageAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnrotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnrotateAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnskewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrReceiptsPhotoToCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
