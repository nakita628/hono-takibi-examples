import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateGatewaySoftwareNowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
