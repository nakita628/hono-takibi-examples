import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SegmentsSegmentIdRoute,
  getV1ProductsProductIdSegmentsRoute,
  getV1SegmentsSegmentIdRoute,
  postV1ProductsProductIdSegmentsRoute,
  putV1SegmentsSegmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getV1ProductsProductIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
