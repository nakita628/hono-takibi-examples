import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateRelationalDatabaseSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
