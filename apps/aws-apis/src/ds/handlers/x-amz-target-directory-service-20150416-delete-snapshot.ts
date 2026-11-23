import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeleteSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeleteSnapshotHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeleteSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
