import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCopilotReportsRoute,
  getCopilotReportsGetMicrosoft365CopilotUsageUserDetailPeriodPeriodVersionVersionRoute,
  getCopilotReportsGetMicrosoft365CopilotUserCountSummaryPeriodPeriodVersionVersionRoute,
  getCopilotReportsGetMicrosoft365CopilotUserCountTrendPeriodPeriodVersionVersionRoute,
  getCopilotReportsRoute,
  patchCopilotReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const copilotCopilotReportRootHandler = app
  .openapi(getCopilotReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCopilotReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCopilotReportsGetMicrosoft365CopilotUsageUserDetailPeriodPeriodVersionVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCopilotReportsGetMicrosoft365CopilotUserCountSummaryPeriodPeriodVersionVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCopilotReportsGetMicrosoft365CopilotUserCountTrendPeriodPeriodVersionVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
