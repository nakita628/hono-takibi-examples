import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218StopInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218StopInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218StopInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
