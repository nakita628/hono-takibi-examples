import { OpenAPIHono } from '@hono/zod-openapi'
import { getThumbnailStatusRealmIdStrFilenameRoute } from '../routes'

const app = new OpenAPIHono()

export const thumbnailHandler = app.openapi(getThumbnailStatusRealmIdStrFilenameRoute, (c) => {
  throw new Error('Not implemented')
})
