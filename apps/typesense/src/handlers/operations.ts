import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsJsonRoute,
  getOperationsSchemaChangesRoute,
  getStatsJsonRoute,
  postConfigRoute,
  postOperationsCacheClearRoute,
  postOperationsDbCompactRoute,
  postOperationsSnapshotRoute,
  postOperationsVoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getOperationsSchemaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationsVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationsDbCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
