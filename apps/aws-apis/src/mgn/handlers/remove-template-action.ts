import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveTemplateActionRoute } from '../routes'

const app = new OpenAPIHono()

export const removeTemplateActionHandler = app.openapi(postRemoveTemplateActionRoute, (c) => {
  throw new Error('Not implemented')
})
