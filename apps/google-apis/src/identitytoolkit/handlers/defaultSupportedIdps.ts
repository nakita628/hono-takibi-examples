import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2DefaultSupportedIdpsRoute } from '../routes'

const app = new OpenAPIHono()

export const defaultSupportedIdpsHandler = app.openapi(getV2DefaultSupportedIdpsRoute, (c) => {
  throw new Error('Not implemented')
})
