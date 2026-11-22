import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateBusinessReportScheduleHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
