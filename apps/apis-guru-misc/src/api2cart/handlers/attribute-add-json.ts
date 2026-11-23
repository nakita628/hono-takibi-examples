import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttributeAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeAddJsonHandler = app.openapi(postAttributeAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
