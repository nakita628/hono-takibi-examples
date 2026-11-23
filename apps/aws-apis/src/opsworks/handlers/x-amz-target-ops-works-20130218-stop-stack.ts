import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218StopStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218StopStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218StopStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
