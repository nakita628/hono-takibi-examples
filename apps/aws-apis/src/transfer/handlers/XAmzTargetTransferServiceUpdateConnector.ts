import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUpdateConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceUpdateConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceUpdateConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
