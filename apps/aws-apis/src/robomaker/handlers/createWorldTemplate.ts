import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateWorldTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const createWorldTemplateHandler = app.openapi(postCreateWorldTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
