import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218UpdateInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
