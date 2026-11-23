import { OpenAPIHono } from '@hono/zod-openapi'
import { getHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app.openapi(getHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
