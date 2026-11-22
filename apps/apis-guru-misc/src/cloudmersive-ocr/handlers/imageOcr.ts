import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcrImageToLinesWithLocationRoute,
  postOcrImageToTextRoute,
  postOcrImageToWordsWithLocationRoute,
  postOcrPhotoRecognizeBusinessCardRoute,
  postOcrPhotoRecognizeFormAdvancedRoute,
  postOcrPhotoRecognizeFormRoute,
  postOcrPhotoRecognizeReceiptRoute,
  postOcrPhotoToTextRoute,
  postOcrPhotoToWordsWithLocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageOcrHandler = app
  .openapi(postOcrImageToLinesWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrImageToWordsWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrImageToTextRoute, (c) => {
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
