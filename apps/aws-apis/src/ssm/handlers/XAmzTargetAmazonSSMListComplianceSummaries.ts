import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListComplianceSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListComplianceSummariesHandler = app.openapi(
  postXAmzTargetAmazonSSMListComplianceSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
