import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteTapePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DeleteTapePoolHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteTapePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
