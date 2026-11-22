import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2TimeseriesAnomalyInvestigationsRoute } from '../routes'

const app = new OpenAPIHono()

export const timeseriesAnomalyInvestigationsHandler = app.openapi(
  postApiV2TimeseriesAnomalyInvestigationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
