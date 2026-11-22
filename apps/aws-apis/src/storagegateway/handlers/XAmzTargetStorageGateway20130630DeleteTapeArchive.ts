import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteTapeArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DeleteTapeArchiveHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteTapeArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
