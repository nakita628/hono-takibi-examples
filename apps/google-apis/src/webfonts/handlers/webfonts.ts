import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WebfontsRoute } from '../routes'

const app = new OpenAPIHono()

export const webfontsHandler = app.openapi(getV1WebfontsRoute, (c) => {
  throw new Error('Not implemented')
})
