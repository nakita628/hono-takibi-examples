import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMPutComplianceItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMPutComplianceItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMPutComplianceItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
