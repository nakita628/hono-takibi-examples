import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesFunctionsHandler = app.openapi(getDevicesMicrosoftGraphDeltaRoute, (c) => {
  throw new Error('Not implemented')
})
