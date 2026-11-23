import { OpenAPIHono } from '@hono/zod-openapi'
import { getPausedIncidentReportsAlertsRoute, getPausedIncidentReportsCountsRoute } from '../routes'

const app = new OpenAPIHono()

export const pausedIncidentReportsHandler = app
  .openapi(getPausedIncidentReportsAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPausedIncidentReportsCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
