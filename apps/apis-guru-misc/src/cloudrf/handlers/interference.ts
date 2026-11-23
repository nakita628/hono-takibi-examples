import { OpenAPIHono } from '@hono/zod-openapi'
import { getInterferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const interferenceHandler = app.openapi(getInterferenceRoute, (c) => {
  throw new Error('Not implemented')
})
