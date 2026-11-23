import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceCreateConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceCreateConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
