import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescriptionGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const descriptionHandler = app.openapi(postDescriptionGenerateRoute, (c) => {
  throw new Error('Not implemented')
})
