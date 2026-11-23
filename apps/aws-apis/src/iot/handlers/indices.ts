import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndicesIndexNameRoute,
  getIndicesRoute,
  postIndicesBucketsRoute,
  postIndicesCardinalityRoute,
  postIndicesPercentilesRoute,
  postIndicesSearchRoute,
  postIndicesStatisticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicesHandler = app
  .openapi(getIndicesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndicesBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndicesCardinalityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndicesPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndicesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
