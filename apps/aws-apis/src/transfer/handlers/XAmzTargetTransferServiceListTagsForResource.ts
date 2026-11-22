import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTransferServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetTransferServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
