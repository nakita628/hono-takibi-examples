import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218StartStackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218StartStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218StartStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
