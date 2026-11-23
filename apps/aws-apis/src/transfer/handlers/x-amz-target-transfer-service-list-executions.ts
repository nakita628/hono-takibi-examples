import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListExecutionsHandler = app.openapi(
  postXAmzTargetTransferServiceListExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
