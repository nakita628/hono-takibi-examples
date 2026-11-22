import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDisassociateOpsItemRelatedItemHandler = app.openapi(
  postXAmzTargetAmazonSSMDisassociateOpsItemRelatedItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
