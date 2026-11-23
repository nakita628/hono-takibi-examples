import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsieSnowballJobManagementServiceCancelClusterHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCancelJobHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCreateAddressHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCreateClusterHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCreateJobHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCreateLongTermPricingHandler,
  xAmzTargetAwsieSnowballJobManagementServiceCreateReturnShippingLabelHandler,
  xAmzTargetAwsieSnowballJobManagementServiceDescribeAddressesHandler,
  xAmzTargetAwsieSnowballJobManagementServiceDescribeAddressHandler,
  xAmzTargetAwsieSnowballJobManagementServiceDescribeClusterHandler,
  xAmzTargetAwsieSnowballJobManagementServiceDescribeJobHandler,
  xAmzTargetAwsieSnowballJobManagementServiceDescribeReturnShippingLabelHandler,
  xAmzTargetAwsieSnowballJobManagementServiceGetJobManifestHandler,
  xAmzTargetAwsieSnowballJobManagementServiceGetJobUnlockCodeHandler,
  xAmzTargetAwsieSnowballJobManagementServiceGetSnowballUsageHandler,
  xAmzTargetAwsieSnowballJobManagementServiceGetSoftwareUpdatesHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListClusterJobsHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListClustersHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListCompatibleImagesHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListJobsHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListLongTermPricingHandler,
  xAmzTargetAwsieSnowballJobManagementServiceListServiceVersionsHandler,
  xAmzTargetAwsieSnowballJobManagementServiceUpdateClusterHandler,
  xAmzTargetAwsieSnowballJobManagementServiceUpdateJobHandler,
  xAmzTargetAwsieSnowballJobManagementServiceUpdateJobShipmentStateHandler,
  xAmzTargetAwsieSnowballJobManagementServiceUpdateLongTermPricingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCancelClusterHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCancelJobHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCreateAddressHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCreateClusterHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCreateJobHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCreateLongTermPricingHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceCreateReturnShippingLabelHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceDescribeAddressHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceDescribeAddressesHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceDescribeClusterHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceDescribeJobHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceDescribeReturnShippingLabelHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceGetJobManifestHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceGetJobUnlockCodeHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceGetSnowballUsageHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceGetSoftwareUpdatesHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListClusterJobsHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListClustersHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListCompatibleImagesHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListJobsHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListLongTermPricingHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceListServiceVersionsHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceUpdateClusterHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceUpdateJobHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceUpdateJobShipmentStateHandler)
  .route('/', xAmzTargetAwsieSnowballJobManagementServiceUpdateLongTermPricingHandler)

export default app
