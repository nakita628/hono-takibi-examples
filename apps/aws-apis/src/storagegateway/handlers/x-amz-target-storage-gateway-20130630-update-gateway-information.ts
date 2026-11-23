import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateGatewayInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateGatewayInformationHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateGatewayInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
