import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifySnapshotCopyRetentionPeriodRoute,
  postActionModifySnapshotCopyRetentionPeriodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifySnapshotCopyRetentionPeriodHandler = app
  .openapi(getActionModifySnapshotCopyRetentionPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySnapshotCopyRetentionPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
