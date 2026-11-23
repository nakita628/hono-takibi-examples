import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DeregisterRdsDbInstanceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeregisterRdsDbInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
