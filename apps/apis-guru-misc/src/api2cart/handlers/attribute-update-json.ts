import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeUpdateJsonHandler = app.openapi(postAttributeUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
