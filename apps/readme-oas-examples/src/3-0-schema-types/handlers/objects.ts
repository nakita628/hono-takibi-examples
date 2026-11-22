import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app.openapi(postAnythingObjectsRoute, (c) => {
  throw new Error('Not implemented')
})
