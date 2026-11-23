import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSegmentsIdRoute,
  getSegmentsRoute,
  postSegmentsRoute,
  putSegmentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
