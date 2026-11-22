import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteBusinessReportScheduleHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
