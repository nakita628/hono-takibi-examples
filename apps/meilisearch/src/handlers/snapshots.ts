import { OpenAPIHono } from '@hono/zod-openapi'
import { postSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app.openapi(postSnapshotsRoute, (c) => {
  throw new Error('Not implemented')
})
