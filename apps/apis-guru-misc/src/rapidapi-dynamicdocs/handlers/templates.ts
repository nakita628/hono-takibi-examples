import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesTemplateTokenCompileRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app.openapi(postTemplatesTemplateTokenCompileRoute, (c) => {
  throw new Error('Not implemented')
})
