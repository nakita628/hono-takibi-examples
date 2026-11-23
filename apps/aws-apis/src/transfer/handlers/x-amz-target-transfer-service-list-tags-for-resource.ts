import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetTransferServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
