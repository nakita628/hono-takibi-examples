import { OpenAPIHono } from '@hono/zod-openapi'
import { getHistoryExportResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const historyExportResultsHandler = app.openapi(getHistoryExportResultsRoute, (c) => {
  throw new Error('Not implemented')
})
