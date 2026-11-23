import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ResetUserPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416ResetUserPasswordHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ResetUserPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
