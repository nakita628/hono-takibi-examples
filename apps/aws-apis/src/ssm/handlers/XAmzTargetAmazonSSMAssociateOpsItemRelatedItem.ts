import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMAssociateOpsItemRelatedItemRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMAssociateOpsItemRelatedItemHandler = app.openapi(
  postXAmzTargetAmazonSSMAssociateOpsItemRelatedItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
