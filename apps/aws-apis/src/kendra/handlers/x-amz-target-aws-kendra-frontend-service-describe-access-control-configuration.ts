import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDescribeAccessControlConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSKendraFrontendServiceDescribeAccessControlConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
