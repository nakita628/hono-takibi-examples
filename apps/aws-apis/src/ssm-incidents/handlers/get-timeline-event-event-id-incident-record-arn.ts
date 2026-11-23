import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetTimelineEventEventIdIncidentRecordArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getTimelineEventEventIdIncidentRecordArnHandler = app.openapi(
  getGetTimelineEventEventIdIncidentRecordArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
