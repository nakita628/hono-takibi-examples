import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationHandler =
  app.openapi(
    postXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
