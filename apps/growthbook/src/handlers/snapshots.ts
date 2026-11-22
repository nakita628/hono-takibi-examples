import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SnapshotsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app.openapi(getV1SnapshotsIdRoute, (c) => {
  throw new Error('Not implemented')
})
