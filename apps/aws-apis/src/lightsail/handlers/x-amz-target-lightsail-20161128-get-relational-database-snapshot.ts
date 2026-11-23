import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetRelationalDatabaseSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
