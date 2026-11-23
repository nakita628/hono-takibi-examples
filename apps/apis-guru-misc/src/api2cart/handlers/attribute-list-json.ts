import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeListJsonHandler = app.openapi(getAttributeListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
