import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const registerConnectorHandler = app.openapi(postRegisterConnectorRoute, (c) => {
  throw new Error('Not implemented')
})
