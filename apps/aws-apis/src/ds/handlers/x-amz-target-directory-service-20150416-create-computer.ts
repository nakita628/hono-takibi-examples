import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateComputerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CreateComputerHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateComputerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
