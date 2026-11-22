import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionHandler,
  XAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler,
  XAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionHandler,
  XAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionHandler)
  .route('/', XAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsHandler)
  .route('/', XAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionHandler)
  .route('/', XAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionHandler)

export default app
