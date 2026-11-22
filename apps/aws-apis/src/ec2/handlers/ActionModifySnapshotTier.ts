import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifySnapshotTierRoute, postActionModifySnapshotTierRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifySnapshotTierHandler = app
  .openapi(getActionModifySnapshotTierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifySnapshotTierRoute, (c) => {
    throw new Error('Not implemented')
  })
