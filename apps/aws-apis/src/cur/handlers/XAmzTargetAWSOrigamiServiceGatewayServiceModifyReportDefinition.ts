import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionHandler = app.openapi(
  postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
