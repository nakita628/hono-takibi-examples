import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app.openapi(getApiV1HistoryRoute, (c) => {
  throw new Error('Not implemented')
})
