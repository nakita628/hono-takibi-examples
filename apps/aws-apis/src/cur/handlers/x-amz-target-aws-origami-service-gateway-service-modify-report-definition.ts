import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrigamiServiceGatewayServiceModifyReportDefinitionHandler = app.openapi(
  postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
