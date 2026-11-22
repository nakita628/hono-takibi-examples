import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSIESnowballJobManagementServiceCancelClusterHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCancelJobHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCreateAddressHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCreateClusterHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCreateJobHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingHandler,
  XAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelHandler,
  XAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesHandler,
  XAmzTargetAWSIESnowballJobManagementServiceDescribeAddressHandler,
  XAmzTargetAWSIESnowballJobManagementServiceDescribeClusterHandler,
  XAmzTargetAWSIESnowballJobManagementServiceDescribeJobHandler,
  XAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelHandler,
  XAmzTargetAWSIESnowballJobManagementServiceGetJobManifestHandler,
  XAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeHandler,
  XAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageHandler,
  XAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListClusterJobsHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListClustersHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListJobsHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingHandler,
  XAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsHandler,
  XAmzTargetAWSIESnowballJobManagementServiceUpdateClusterHandler,
  XAmzTargetAWSIESnowballJobManagementServiceUpdateJobHandler,
  XAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateHandler,
  XAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCancelClusterHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCancelJobHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCreateAddressHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCreateClusterHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCreateJobHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceDescribeAddressHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceDescribeClusterHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceDescribeJobHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceGetJobManifestHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceGetJobUnlockCodeHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceGetSoftwareUpdatesHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListClusterJobsHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListClustersHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListJobsHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceUpdateClusterHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceUpdateJobHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceUpdateJobShipmentStateHandler)
  .route('/', XAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingHandler)

export default app
