import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDisableSnapshotCopyRoute, postActionDisableSnapshotCopyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDisableSnapshotCopyHandler = app
  .openapi(getActionDisableSnapshotCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableSnapshotCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
