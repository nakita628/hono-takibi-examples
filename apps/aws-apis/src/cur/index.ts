import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute,
  postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute,
  postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute,
  postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRoute,
} from './routes'
import {
  postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRouteHandler,
  postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRouteHandler,
  postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRouteHandler,
  postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRoute,
    postXAmzTargetAWSOrigamiServiceGatewayServiceDeleteReportDefinitionRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRoute,
    postXAmzTargetAWSOrigamiServiceGatewayServiceDescribeReportDefinitionsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRoute,
    postXAmzTargetAWSOrigamiServiceGatewayServiceModifyReportDefinitionRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRoute,
    postXAmzTargetAWSOrigamiServiceGatewayServicePutReportDefinitionRouteHandler,
  )

export default app
