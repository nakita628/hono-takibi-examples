import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListBusinessReportSchedulesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListBusinessReportSchedulesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListBusinessReportSchedulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
