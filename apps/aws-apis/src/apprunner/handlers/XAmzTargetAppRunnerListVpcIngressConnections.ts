import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListVpcIngressConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerListVpcIngressConnectionsHandler = app.openapi(
  postXAmzTargetAppRunnerListVpcIngressConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
