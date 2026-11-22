import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630StartGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630StartGatewayHandler = app.openapi(
  postXAmzTargetStorageGateway20130630StartGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
