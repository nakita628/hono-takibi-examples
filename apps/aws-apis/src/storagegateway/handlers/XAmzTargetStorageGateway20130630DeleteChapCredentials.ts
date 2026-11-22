import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteChapCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DeleteChapCredentialsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteChapCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
