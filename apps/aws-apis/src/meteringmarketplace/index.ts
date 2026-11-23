import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsmpMeteringServiceBatchMeterUsageHandler,
  xAmzTargetAwsmpMeteringServiceMeterUsageHandler,
  xAmzTargetAwsmpMeteringServiceRegisterUsageHandler,
  xAmzTargetAwsmpMeteringServiceResolveCustomerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsmpMeteringServiceBatchMeterUsageHandler)
  .route('/', xAmzTargetAwsmpMeteringServiceMeterUsageHandler)
  .route('/', xAmzTargetAwsmpMeteringServiceRegisterUsageHandler)
  .route('/', xAmzTargetAwsmpMeteringServiceResolveCustomerHandler)

export default app
