import { OpenAPIHono } from '@hono/zod-openapi'
import { getMediaSegmentsItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaSegmentsHandler = app.openapi(getMediaSegmentsItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
