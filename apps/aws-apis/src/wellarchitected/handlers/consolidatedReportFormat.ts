import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsolidatedReportFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const consolidatedReportFormatHandler = app.openapi(
  getConsolidatedReportFormatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
