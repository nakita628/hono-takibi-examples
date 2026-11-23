import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DeleteGatewayHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteGatewayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
