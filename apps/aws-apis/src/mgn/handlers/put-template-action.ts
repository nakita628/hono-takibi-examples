import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutTemplateActionRoute } from '../routes'

const app = new OpenAPIHono()

export const putTemplateActionHandler = app.openapi(postPutTemplateActionRoute, (c) => {
  throw new Error('Not implemented')
})
