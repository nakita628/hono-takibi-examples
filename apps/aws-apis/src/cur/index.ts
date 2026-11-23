import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsOrigamiServiceGatewayServiceDeleteReportDefinitionHandler,
  xAmzTargetAwsOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler,
  xAmzTargetAwsOrigamiServiceGatewayServiceModifyReportDefinitionHandler,
  xAmzTargetAwsOrigamiServiceGatewayServicePutReportDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsOrigamiServiceGatewayServiceDeleteReportDefinitionHandler)
  .route('/', xAmzTargetAwsOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler)
  .route('/', xAmzTargetAwsOrigamiServiceGatewayServiceModifyReportDefinitionHandler)
  .route('/', xAmzTargetAwsOrigamiServiceGatewayServicePutReportDefinitionHandler)

export default app
