import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSMPMeteringServiceBatchMeterUsageHandler,
  XAmzTargetAWSMPMeteringServiceMeterUsageHandler,
  XAmzTargetAWSMPMeteringServiceRegisterUsageHandler,
  XAmzTargetAWSMPMeteringServiceResolveCustomerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSMPMeteringServiceBatchMeterUsageHandler)
  .route('/', XAmzTargetAWSMPMeteringServiceMeterUsageHandler)
  .route('/', XAmzTargetAWSMPMeteringServiceRegisterUsageHandler)
  .route('/', XAmzTargetAWSMPMeteringServiceResolveCustomerHandler)

export default app
