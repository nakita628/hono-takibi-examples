import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSignalDecisionReportRoute,
  postSignalEvaluateRoute,
  postSignalPrepareRoute,
  postSignalReturnReportRoute,
  postSignalScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signalHandler = app
  .openapi(postSignalEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalDecisionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalReturnReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignalPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
