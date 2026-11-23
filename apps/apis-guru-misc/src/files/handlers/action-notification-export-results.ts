import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionNotificationExportResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionNotificationExportResultsHandler = app.openapi(
  getActionNotificationExportResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
