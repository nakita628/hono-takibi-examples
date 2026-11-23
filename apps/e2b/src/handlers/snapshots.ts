import { OpenAPIHono } from '@hono/zod-openapi'
import { getSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app.openapi(getSnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})
