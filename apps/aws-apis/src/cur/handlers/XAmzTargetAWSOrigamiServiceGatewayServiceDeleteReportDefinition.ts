import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionHandler = app.openapi(
  postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
