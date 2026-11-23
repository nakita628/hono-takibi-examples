import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
