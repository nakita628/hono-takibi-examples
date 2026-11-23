import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListTapePoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListTapePoolsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListTapePoolsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
