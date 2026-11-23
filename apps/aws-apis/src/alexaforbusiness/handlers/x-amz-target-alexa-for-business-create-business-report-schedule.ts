import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateBusinessReportScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessCreateBusinessReportScheduleHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateBusinessReportScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
