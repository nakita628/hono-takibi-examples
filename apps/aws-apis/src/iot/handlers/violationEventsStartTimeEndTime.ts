import { OpenAPIHono } from '@hono/zod-openapi'
import { getViolationEventsStartTimeEndTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const violationEventsStartTimeEndTimeHandler = app.openapi(
  getViolationEventsStartTimeEndTimeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
