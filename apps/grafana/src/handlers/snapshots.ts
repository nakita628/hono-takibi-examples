import { OpenAPIHono } from '@hono/zod-openapi'
import { getSnapshotSharedOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app.openapi(getSnapshotSharedOptionsRoute, (c) => {
  throw new Error('Not implemented')
})
