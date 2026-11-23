import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateWorldTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateWorldTemplateHandler = app.openapi(postUpdateWorldTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
