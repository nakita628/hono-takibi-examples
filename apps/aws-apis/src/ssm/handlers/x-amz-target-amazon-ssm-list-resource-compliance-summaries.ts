import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListResourceComplianceSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListResourceComplianceSummariesHandler = app.openapi(
  postXAmzTargetAmazonSSMListResourceComplianceSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
