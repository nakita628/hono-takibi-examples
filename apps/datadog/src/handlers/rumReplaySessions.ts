import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2RumReplaySessionsSessionIdViewsViewIdSegmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const rumReplaySessionsHandler = app.openapi(
  getApiV2RumReplaySessionsSessionIdViewsViewIdSegmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
