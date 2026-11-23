import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDisassociateOpsItemRelatedItemHandler = app.openapi(
  postXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
