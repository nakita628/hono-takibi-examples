import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteRelationalDatabaseSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
