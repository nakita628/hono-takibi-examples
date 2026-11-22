import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateChapCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateChapCredentialsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateChapCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
