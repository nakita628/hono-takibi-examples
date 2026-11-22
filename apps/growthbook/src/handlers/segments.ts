import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SegmentsIdRoute,
  getV1SegmentsIdRoute,
  getV1SegmentsRoute,
  postV1SegmentsIdRoute,
  postV1SegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getV1SegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
