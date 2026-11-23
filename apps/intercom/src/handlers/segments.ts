import { OpenAPIHono } from '@hono/zod-openapi'
import { getSegmentsRoute, getSegmentsSegmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const segmentsHandler = app
  .openapi(getSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
