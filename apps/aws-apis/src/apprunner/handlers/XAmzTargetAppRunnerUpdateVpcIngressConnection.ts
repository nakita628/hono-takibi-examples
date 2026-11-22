import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerUpdateVpcIngressConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerUpdateVpcIngressConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerUpdateVpcIngressConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
