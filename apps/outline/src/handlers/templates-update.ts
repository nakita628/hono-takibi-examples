import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesUpdateHandler = app.openapi(postTemplatesUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
