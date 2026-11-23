import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app.openapi(getTemplatesRoute, (c) => {
  throw new Error('Not implemented')
})
