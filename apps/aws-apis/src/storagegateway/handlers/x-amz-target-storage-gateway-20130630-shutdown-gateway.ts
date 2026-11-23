import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ShutdownGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ShutdownGatewayHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ShutdownGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
