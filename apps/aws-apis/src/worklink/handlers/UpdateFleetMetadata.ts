import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateFleetMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateFleetMetadataHandler = app.openapi(postUpdateFleetMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
