import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RestoreFromSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416RestoreFromSnapshotHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RestoreFromSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
