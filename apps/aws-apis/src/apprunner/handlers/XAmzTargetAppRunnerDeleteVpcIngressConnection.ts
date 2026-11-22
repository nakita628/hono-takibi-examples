import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteVpcIngressConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDeleteVpcIngressConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteVpcIngressConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
