import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopySnapshotRoute, postActionCopySnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCopySnapshotHandler = app
  .openapi(getActionCopySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
