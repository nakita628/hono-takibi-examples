import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeTypeListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeTypeListJsonHandler = app.openapi(getAttributeTypeListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
