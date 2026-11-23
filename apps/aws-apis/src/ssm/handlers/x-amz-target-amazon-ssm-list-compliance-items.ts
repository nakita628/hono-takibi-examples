import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListComplianceItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListComplianceItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMListComplianceItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
