import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesDuplicateRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesDuplicateHandler = app.openapi(postTemplatesDuplicateRoute, (c) => {
  throw new Error('Not implemented')
})
