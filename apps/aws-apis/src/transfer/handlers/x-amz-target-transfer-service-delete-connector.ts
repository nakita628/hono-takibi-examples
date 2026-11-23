import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceDeleteConnectorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceDeleteConnectorHandler = app.openapi(
  postXAmzTargetTransferServiceDeleteConnectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
