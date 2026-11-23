import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableFastSnapshotRestoresRoute,
  postActionEnableFastSnapshotRestoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableFastSnapshotRestoresHandler = app
  .openapi(getActionEnableFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableFastSnapshotRestoresRoute, (c) => {
    throw new Error('Not implemented')
  })
