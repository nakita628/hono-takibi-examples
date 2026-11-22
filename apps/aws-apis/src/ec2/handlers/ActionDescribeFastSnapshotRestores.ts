import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeFastSnapshotRestoresRoute,
  postActionDescribeFastSnapshotRestoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeFastSnapshotRestoresHandler = app
  .openapi(getActionDescribeFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
