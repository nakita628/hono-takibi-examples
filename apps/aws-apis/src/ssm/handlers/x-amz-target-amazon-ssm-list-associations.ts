import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMListAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmListAssociationsHandler = app.openapi(
  postXAmzTargetAmazonSSMListAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
