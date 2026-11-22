import { OpenAPIHono } from '@hono/zod-openapi'
import { getHardwareHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const historicalDataHandler = app.openapi(getHardwareHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
