import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProcessorApexProcessorTokenCreateRoute,
  postProcessorAuthGetRoute,
  postProcessorBalanceGetRoute,
  postProcessorBankTransferCreateRoute,
  postProcessorIdentityGetRoute,
  postProcessorSignalDecisionReportRoute,
  postProcessorSignalEvaluateRoute,
  postProcessorSignalReturnReportRoute,
  postProcessorStripeBankAccountTokenCreateRoute,
  postProcessorTokenCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const processorHandler = app
  .openapi(postProcessorApexProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorBalanceGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorBankTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorIdentityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalDecisionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorSignalReturnReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorStripeBankAccountTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcessorTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
