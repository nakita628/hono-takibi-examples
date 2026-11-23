import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListInventoryEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListInventoryEntriesHandler = app.openapi(
  postXAmzTargetAmazonSSMListInventoryEntriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
