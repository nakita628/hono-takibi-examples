import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeInfoJsonHandler = app.openapi(getAttributeInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
