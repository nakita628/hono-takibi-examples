import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListVpcConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerListVpcConnectorsHandler = app.openapi(
  postXAmzTargetAppRunnerListVpcConnectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
