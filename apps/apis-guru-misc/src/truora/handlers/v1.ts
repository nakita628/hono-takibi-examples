import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigRoute,
  deleteV1HooksHookIdRoute,
  getV1ChecksCheckIdDetailsRoute,
  getV1ChecksCheckIdPdfRoute,
  getV1ChecksCheckIdRoute,
  getV1ChecksHealthRoute,
  getV1ChecksRoute,
  getV1ConfigRoute,
  getV1ContinuousChecksContinuousCheckIdHistoryRoute,
  getV1ContinuousChecksContinuousCheckIdRoute,
  getV1ContinuousChecksRoute,
  getV1HooksRoute,
  getV1ReportsReportIdRoute,
  getV1ReportsRoute,
  postV1BehaviorRoute,
  postV1ChecksCheckIdPdfRoute,
  postV1ChecksRoute,
  postV1ConfigRoute,
  postV1ContinuousChecksRoute,
  postV1HooksRoute,
  postV1ReportsReportIdUploadRoute,
  postV1ReportsRoute,
  putV1ConfigRoute,
  putV1ContinuousChecksContinuousCheckIdRoute,
  putV1HooksHookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1BehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksCheckIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksCheckIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChecksCheckIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContinuousChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContinuousChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContinuousChecksContinuousCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContinuousChecksContinuousCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContinuousChecksContinuousCheckIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1HooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsReportIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
