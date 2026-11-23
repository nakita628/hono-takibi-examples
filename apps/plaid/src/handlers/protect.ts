import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProtectCashAdvanceDecisionCreateRoute,
  postProtectCashAdvanceFeedbackUploadRoute,
  postProtectCashAdvanceRepaymentCreateRoute,
  postProtectComputeRoute,
  postProtectEventGetRoute,
  postProtectEventSendRoute,
  postProtectReportCreateRoute,
  postProtectUserInsightsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const protectHandler = app
  .openapi(postProtectUserInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceDecisionCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceRepaymentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectCashAdvanceFeedbackUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectComputeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectEventSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProtectEventGetRoute, (c) => {
    throw new Error('Not implemented')
  })
