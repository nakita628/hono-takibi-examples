import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeleteStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DeleteStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeleteStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
