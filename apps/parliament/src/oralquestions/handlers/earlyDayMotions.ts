import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarlyDayMotionIdRoute, getEarlyDayMotionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const earlyDayMotionsHandler = app
  .openapi(getEarlyDayMotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarlyDayMotionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
