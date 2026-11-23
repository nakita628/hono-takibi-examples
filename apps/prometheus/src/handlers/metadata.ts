import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app.openapi(getMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
