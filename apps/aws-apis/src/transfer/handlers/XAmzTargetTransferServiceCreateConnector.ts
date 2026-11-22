import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceCreateConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceCreateConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceCreateConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
