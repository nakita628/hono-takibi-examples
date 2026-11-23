import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler =
  app.openapi(postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
