import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFastSendDeviceValuesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const fastSendDeviceValuesHandler = app.openapi(getApiFastSendDeviceValuesIdRoute, (c) => {
  throw new Error('Not implemented')
})
