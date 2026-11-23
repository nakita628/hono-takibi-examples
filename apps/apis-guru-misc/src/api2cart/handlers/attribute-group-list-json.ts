import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeGroupListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeGroupListJsonHandler = app.openapi(getAttributeGroupListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
