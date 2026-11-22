import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionHandler = app.openapi(
  postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
