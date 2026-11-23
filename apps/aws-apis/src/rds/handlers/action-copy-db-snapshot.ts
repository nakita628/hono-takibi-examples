import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyDBSnapshotRoute, postActionCopyDBSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCopyDbSnapshotHandler = app
  .openapi(getActionCopyDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
