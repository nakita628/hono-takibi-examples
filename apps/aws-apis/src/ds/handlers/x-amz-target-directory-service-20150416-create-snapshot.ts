import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CreateSnapshotHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
