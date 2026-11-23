import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesTemplateTokenCompileRoute } from './routes'
import { postTemplatesTemplateTokenCompileRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postTemplatesTemplateTokenCompileRoute,
  postTemplatesTemplateTokenCompileRouteHandler,
)

export default app
