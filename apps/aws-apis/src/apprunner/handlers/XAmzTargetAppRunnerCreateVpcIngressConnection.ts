import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateVpcIngressConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerCreateVpcIngressConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerCreateVpcIngressConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
