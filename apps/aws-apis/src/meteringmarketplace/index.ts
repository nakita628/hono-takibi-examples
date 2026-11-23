import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute,
  postXAmzTargetAWSMPMeteringServiceMeterUsageRoute,
  postXAmzTargetAWSMPMeteringServiceRegisterUsageRoute,
  postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute,
} from './routes'
import {
  postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRouteHandler,
  postXAmzTargetAWSMPMeteringServiceMeterUsageRouteHandler,
  postXAmzTargetAWSMPMeteringServiceRegisterUsageRouteHandler,
  postXAmzTargetAWSMPMeteringServiceResolveCustomerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute,
    postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMPMeteringServiceMeterUsageRoute,
    postXAmzTargetAWSMPMeteringServiceMeterUsageRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMPMeteringServiceRegisterUsageRoute,
    postXAmzTargetAWSMPMeteringServiceRegisterUsageRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute,
    postXAmzTargetAWSMPMeteringServiceResolveCustomerRouteHandler,
  )

export default app
