import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkersCustomTagsRoute,
  getWorkersDevWorkspaceIsolationRoute,
  getWorkersExistsWorkersWithTagsRoute,
  getWorkersGetDefaultTagsRoute,
  getWorkersIsDefaultTagsPerWorkspaceRoute,
  getWorkersListRoute,
  getWorkersQueueCountsRoute,
  getWorkersQueueMetricsRoute,
  getWorkersQueueMetricsSeriesRoute,
  getWorkersQueueRunningCountsRoute,
  getWorkersQueueStatusRoute,
  getWorkersRunnableStatsRoute,
  getWorkersWorkspaceFairnessEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersHandler = app
  .openapi(getWorkersCustomTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersGetDefaultTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersIsDefaultTagsPerWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersDevWorkspaceIsolationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersExistsWorkersWithTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersQueueMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersRunnableStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersQueueMetricsSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersQueueStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersQueueCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersQueueRunningCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkersWorkspaceFairnessEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
