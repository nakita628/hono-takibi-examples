import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FactMetricsIdRoute,
  getV1FactMetricsIdRoute,
  getV1FactMetricsRoute,
  postV1FactMetricsIdAnalysisRoute,
  postV1FactMetricsIdRoute,
  postV1FactMetricsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const factMetricsHandler = app
  .openapi(getV1FactMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsIdAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
