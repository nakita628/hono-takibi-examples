import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteFileShareRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DeleteFileShareHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteFileShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
