import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateDirectorySetupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416UpdateDirectorySetupHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateDirectorySetupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
