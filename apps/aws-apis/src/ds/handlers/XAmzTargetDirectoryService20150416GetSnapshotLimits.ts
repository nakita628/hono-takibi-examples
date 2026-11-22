import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416GetSnapshotLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416GetSnapshotLimitsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416GetSnapshotLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
