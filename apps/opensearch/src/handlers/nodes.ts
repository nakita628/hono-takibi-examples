import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNodesHotthreadsRoute,
  getNodesHotThreadsRoute,
  getNodesNodeIdHotthreadsRoute,
  getNodesNodeIdHotThreadsRoute,
  getNodesNodeIdMetricRoute,
  getNodesNodeIdOrMetricRoute,
  getNodesNodeIdStatsMetricIndexMetricRoute,
  getNodesNodeIdStatsMetricRoute,
  getNodesNodeIdStatsRoute,
  getNodesNodeIdUsageMetricRoute,
  getNodesNodeIdUsageRoute,
  getNodesRoute,
  getNodesStatsMetricIndexMetricRoute,
  getNodesStatsMetricRoute,
  getNodesStatsRoute,
  getNodesUsageMetricRoute,
  getNodesUsageRoute,
  postNodesNodeIdReloadSecureSettingsRoute,
  postNodesReloadSecureSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdOrMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdReloadSecureSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdStatsMetricIndexMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdUsageMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesHotThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesReloadSecureSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesStatsMetricIndexMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesUsageMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdHotthreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesHotthreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
