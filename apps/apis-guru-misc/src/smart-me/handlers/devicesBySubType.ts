import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDevicesBySubTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesBySubTypeHandler = app.openapi(getApiDevicesBySubTypeRoute, (c) => {
  throw new Error('Not implemented')
})
