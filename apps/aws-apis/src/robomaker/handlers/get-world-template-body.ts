import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetWorldTemplateBodyRoute } from '../routes'

const app = new OpenAPIHono()

export const getWorldTemplateBodyHandler = app.openapi(postGetWorldTemplateBodyRoute, (c) => {
  throw new Error('Not implemented')
})
