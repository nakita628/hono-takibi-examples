import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportingInsightIdRoute,
  getReportingInsightIdRoute,
  getReportingInsightRoute,
  patchReportingInsightIdRoute,
  postReportingInsightIdRunRoute,
  postReportingInsightPreviewRoute,
  postReportingInsightRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightHandler = app
  .openapi(postReportingInsightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingInsightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportingInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportingInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportingInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingInsightIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportingInsightPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
