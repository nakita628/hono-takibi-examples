import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app.openapi(getV1AttributesRoute, (c) => {
  throw new Error('Not implemented')
})
