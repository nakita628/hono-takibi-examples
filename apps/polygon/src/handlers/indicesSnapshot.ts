import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3SnapshotIndicesRoute } from '../routes'

const app = new OpenAPIHono()

export const indicesSnapshotHandler = app.openapi(getV3SnapshotIndicesRoute, (c) => {
  throw new Error('Not implemented')
})
