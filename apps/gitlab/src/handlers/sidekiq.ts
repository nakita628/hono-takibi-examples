import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute,
  deleteApiV4AdminSidekiqQueuesQueueNameRoute,
  getApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute,
  getApiV4SidekiqCompoundMetricsRoute,
  getApiV4SidekiqJobStatsRoute,
  getApiV4SidekiqProcessMetricsRoute,
  getApiV4SidekiqQueueMetricsRoute,
  putApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sidekiqHandler = app
  .openapi(getApiV4SidekiqQueueMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SidekiqProcessMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SidekiqJobStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SidekiqCompoundMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminSidekiqConcurrencyLimitsWorkerClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminSidekiqQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
