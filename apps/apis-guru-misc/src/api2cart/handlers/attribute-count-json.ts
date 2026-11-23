import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttributeCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeCountJsonHandler = app.openapi(getAttributeCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
