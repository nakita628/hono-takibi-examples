import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableSnapshotCopyRoute, postActionEnableSnapshotCopyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionEnableSnapshotCopyHandler = app
  .openapi(getActionEnableSnapshotCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableSnapshotCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
