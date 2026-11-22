import { OpenAPIHono } from '@hono/zod-openapi'
import { getMediaSegmentsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaSegmentHandler = app.openapi(getMediaSegmentsItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
