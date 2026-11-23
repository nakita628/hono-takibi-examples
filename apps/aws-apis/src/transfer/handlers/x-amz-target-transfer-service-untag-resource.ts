import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceUntagResourceHandler = app.openapi(
  postXAmzTargetTransferServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
