import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateAssociationBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreateAssociationBatchHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateAssociationBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
