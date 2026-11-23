import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteTapeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DeleteTapeHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteTapeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
