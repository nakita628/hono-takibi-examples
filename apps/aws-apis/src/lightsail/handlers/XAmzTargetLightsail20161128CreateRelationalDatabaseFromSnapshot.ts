import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateRelationalDatabaseFromSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
