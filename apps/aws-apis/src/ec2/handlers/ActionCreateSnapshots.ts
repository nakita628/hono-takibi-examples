import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateSnapshotsRoute, postActionCreateSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateSnapshotsHandler = app
  .openapi(getActionCreateSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
