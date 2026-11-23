import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListGatewaysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListGatewaysHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListGatewaysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
