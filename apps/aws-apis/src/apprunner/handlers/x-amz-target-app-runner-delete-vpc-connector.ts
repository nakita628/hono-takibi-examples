import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteVpcConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDeleteVpcConnectorHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteVpcConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
