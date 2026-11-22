import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler =
  app.openapi(postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
