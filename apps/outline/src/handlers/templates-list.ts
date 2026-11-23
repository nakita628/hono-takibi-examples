import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesListRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesListHandler = app.openapi(postTemplatesListRoute, (c) => {
  throw new Error('Not implemented')
})
