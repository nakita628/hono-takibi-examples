import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesInfoHandler = app.openapi(postTemplatesInfoRoute, (c) => {
  throw new Error('Not implemented')
})
