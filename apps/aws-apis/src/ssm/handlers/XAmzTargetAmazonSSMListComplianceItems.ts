import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListComplianceItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMListComplianceItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMListComplianceItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
