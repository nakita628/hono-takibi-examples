import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRestoreSnapshotTierRoute, postActionRestoreSnapshotTierRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreSnapshotTierHandler = app
  .openapi(getActionRestoreSnapshotTierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreSnapshotTierRoute, (c) => {
    throw new Error('Not implemented')
  })
