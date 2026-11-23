import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTemplateActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listTemplateActionsHandler = app.openapi(postListTemplateActionsRoute, (c) => {
  throw new Error('Not implemented')
})
