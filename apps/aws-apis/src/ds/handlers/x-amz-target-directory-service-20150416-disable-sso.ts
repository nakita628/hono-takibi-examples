import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DisableSsoRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DisableSsoHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DisableSsoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
