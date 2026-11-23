import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeEffectiveInstanceAssociationsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeEffectiveInstanceAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
