import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrigamiServiceGatewayServiceDeleteReportDefinitionHandler = app.openapi(
  postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
