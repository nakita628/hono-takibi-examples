import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeAssignSetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeAssignSetJsonHandler = app.openapi(postAttributeAssignSetJsonRoute, (c) => {
  throw new Error('Not implemented')
})
