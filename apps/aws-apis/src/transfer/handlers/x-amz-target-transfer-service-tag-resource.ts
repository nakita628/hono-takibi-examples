import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceTagResourceHandler = app.openapi(
  postXAmzTargetTransferServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
