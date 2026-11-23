import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableFastSnapshotRestoresRoute,
  postActionDisableFastSnapshotRestoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableFastSnapshotRestoresHandler = app
  .openapi(getActionDisableFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
