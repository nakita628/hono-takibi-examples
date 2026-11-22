import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConnectKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app.openapi(getV1ConnectKeysRoute, (c) => {
  throw new Error('Not implemented')
})
