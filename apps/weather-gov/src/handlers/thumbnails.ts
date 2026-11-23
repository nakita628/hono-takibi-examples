import { OpenAPIHono } from '@hono/zod-openapi'
import { getThumbnailsSatelliteAreaRoute } from '../routes'

const app = new OpenAPIHono()

export const thumbnailsHandler = app.openapi(getThumbnailsSatelliteAreaRoute, (c) => {
  throw new Error('Not implemented')
})
