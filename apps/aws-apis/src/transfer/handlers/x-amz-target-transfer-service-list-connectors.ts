import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListConnectorsHandler = app.openapi(
  postXAmzTargetTransferServiceListConnectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
