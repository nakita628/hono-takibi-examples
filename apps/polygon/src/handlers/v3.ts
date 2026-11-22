import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3SnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app.openapi(getV3SnapshotRoute, (c) => {
  throw new Error('Not implemented')
})
