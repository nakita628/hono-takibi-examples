import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnregisterConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const unregisterConnectorHandler = app.openapi(postUnregisterConnectorRoute, (c) => {
  throw new Error('Not implemented')
})
