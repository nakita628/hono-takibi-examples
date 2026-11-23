import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetOpsSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetOpsSummaryHandler = app.openapi(
  postXAmzTargetAmazonSSMGetOpsSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
