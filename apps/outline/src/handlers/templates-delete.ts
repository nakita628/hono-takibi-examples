import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesDeleteHandler = app.openapi(postTemplatesDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
