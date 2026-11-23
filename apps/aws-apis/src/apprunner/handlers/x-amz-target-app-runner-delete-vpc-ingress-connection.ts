import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteVpcIngressConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDeleteVpcIngressConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteVpcIngressConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
