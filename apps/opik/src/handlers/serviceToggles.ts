import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateTogglesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceTogglesHandler = app.openapi(getV1PrivateTogglesRoute, (c) => {
  throw new Error('Not implemented')
})
