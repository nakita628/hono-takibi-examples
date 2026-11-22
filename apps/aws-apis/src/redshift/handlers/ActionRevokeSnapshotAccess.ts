import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRevokeSnapshotAccessRoute, postActionRevokeSnapshotAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRevokeSnapshotAccessHandler = app
  .openapi(getActionRevokeSnapshotAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeSnapshotAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
