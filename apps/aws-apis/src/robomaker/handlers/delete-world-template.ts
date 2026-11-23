import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteWorldTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteWorldTemplateHandler = app.openapi(postDeleteWorldTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
