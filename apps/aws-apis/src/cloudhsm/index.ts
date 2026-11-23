import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCloudHsmFrontendServiceAddTagsToResourceHandler,
  xAmzTargetCloudHsmFrontendServiceCreateHapgHandler,
  xAmzTargetCloudHsmFrontendServiceCreateHsmHandler,
  xAmzTargetCloudHsmFrontendServiceCreateLunaClientHandler,
  xAmzTargetCloudHsmFrontendServiceDeleteHapgHandler,
  xAmzTargetCloudHsmFrontendServiceDeleteHsmHandler,
  xAmzTargetCloudHsmFrontendServiceDeleteLunaClientHandler,
  xAmzTargetCloudHsmFrontendServiceDescribeHapgHandler,
  xAmzTargetCloudHsmFrontendServiceDescribeHsmHandler,
  xAmzTargetCloudHsmFrontendServiceDescribeLunaClientHandler,
  xAmzTargetCloudHsmFrontendServiceGetConfigHandler,
  xAmzTargetCloudHsmFrontendServiceListAvailableZonesHandler,
  xAmzTargetCloudHsmFrontendServiceListHapgsHandler,
  xAmzTargetCloudHsmFrontendServiceListHsmsHandler,
  xAmzTargetCloudHsmFrontendServiceListLunaClientsHandler,
  xAmzTargetCloudHsmFrontendServiceListTagsForResourceHandler,
  xAmzTargetCloudHsmFrontendServiceModifyHapgHandler,
  xAmzTargetCloudHsmFrontendServiceModifyHsmHandler,
  xAmzTargetCloudHsmFrontendServiceModifyLunaClientHandler,
  xAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCloudHsmFrontendServiceAddTagsToResourceHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceCreateHapgHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceCreateHsmHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceCreateLunaClientHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDeleteHapgHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDeleteHsmHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDeleteLunaClientHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDescribeHapgHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDescribeHsmHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceDescribeLunaClientHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceGetConfigHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceListAvailableZonesHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceListHapgsHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceListHsmsHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceListLunaClientsHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceListTagsForResourceHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceModifyHapgHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceModifyHsmHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceModifyLunaClientHandler)
  .route('/', xAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceHandler)

export default app
