import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceDeleteConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
