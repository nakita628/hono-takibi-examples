import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AddUploadBufferRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630AddUploadBufferHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AddUploadBufferRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
