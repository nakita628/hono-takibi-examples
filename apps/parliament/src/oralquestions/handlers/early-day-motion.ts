import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarlyDayMotionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const earlyDayMotionHandler = app.openapi(getEarlyDayMotionIdRoute, (c) => {
  throw new Error('Not implemented')
})
