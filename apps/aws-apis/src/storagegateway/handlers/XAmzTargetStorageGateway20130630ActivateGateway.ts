import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ActivateGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630ActivateGatewayHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ActivateGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
