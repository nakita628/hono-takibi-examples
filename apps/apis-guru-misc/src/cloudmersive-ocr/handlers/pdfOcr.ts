import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcrPdfToLinesWithLocationRoute,
  postOcrPdfToTextRoute,
  postOcrPdfToWordsWithLocationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pdfOcrHandler = app
  .openapi(postOcrPdfToLinesWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPdfToWordsWithLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPdfToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
