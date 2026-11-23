import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutComplianceItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmPutComplianceItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMPutComplianceItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
