import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateAssociationBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateAssociationBatchHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateAssociationBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
