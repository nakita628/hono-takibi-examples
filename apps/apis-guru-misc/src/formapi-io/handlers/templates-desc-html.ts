import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesDescHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesDescHtmlHandler = app.openapi(postTemplatesDescHtmlRoute, (c) => {
  throw new Error('Not implemented')
})
