import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DisableGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DisableGatewayHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DisableGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
