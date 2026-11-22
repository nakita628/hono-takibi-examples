import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4AttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app.openapi(getV4AttributesRoute, (c) => {
  throw new Error('Not implemented')
})
