import { OpenAPIHono } from '@hono/zod-openapi'
import { getSnapshotsDeleteDeleteKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsDeleteHandler = app.openapi(getSnapshotsDeleteDeleteKeyRoute, (c) => {
  throw new Error('Not implemented')
})
