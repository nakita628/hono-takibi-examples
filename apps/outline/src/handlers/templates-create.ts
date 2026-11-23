import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesCreateHandler = app.openapi(postTemplatesCreateRoute, (c) => {
  throw new Error('Not implemented')
})
