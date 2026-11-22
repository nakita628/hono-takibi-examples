import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetRelationalDatabaseSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
