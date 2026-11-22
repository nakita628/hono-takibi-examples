import { OpenAPIHono } from '@hono/zod-openapi'
import { getSegmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const segmentHandler = app.openapi(getSegmentsRoute, (c) => {
  throw new Error('Not implemented')
})
