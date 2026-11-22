import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateVpcConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerCreateVpcConnectorHandler = app.openapi(
  postXAmzTargetAppRunnerCreateVpcConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
