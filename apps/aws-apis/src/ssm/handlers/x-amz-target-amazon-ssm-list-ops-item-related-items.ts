import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListOpsItemRelatedItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListOpsItemRelatedItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMListOpsItemRelatedItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
