import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCloudHsmFrontendServiceAddTagsToResourceHandler,
  XAmzTargetCloudHsmFrontendServiceCreateHapgHandler,
  XAmzTargetCloudHsmFrontendServiceCreateHsmHandler,
  XAmzTargetCloudHsmFrontendServiceCreateLunaClientHandler,
  XAmzTargetCloudHsmFrontendServiceDeleteHapgHandler,
  XAmzTargetCloudHsmFrontendServiceDeleteHsmHandler,
  XAmzTargetCloudHsmFrontendServiceDeleteLunaClientHandler,
  XAmzTargetCloudHsmFrontendServiceDescribeHapgHandler,
  XAmzTargetCloudHsmFrontendServiceDescribeHsmHandler,
  XAmzTargetCloudHsmFrontendServiceDescribeLunaClientHandler,
  XAmzTargetCloudHsmFrontendServiceGetConfigHandler,
  XAmzTargetCloudHsmFrontendServiceListAvailableZonesHandler,
  XAmzTargetCloudHsmFrontendServiceListHapgsHandler,
  XAmzTargetCloudHsmFrontendServiceListHsmsHandler,
  XAmzTargetCloudHsmFrontendServiceListLunaClientsHandler,
  XAmzTargetCloudHsmFrontendServiceListTagsForResourceHandler,
  XAmzTargetCloudHsmFrontendServiceModifyHapgHandler,
  XAmzTargetCloudHsmFrontendServiceModifyHsmHandler,
  XAmzTargetCloudHsmFrontendServiceModifyLunaClientHandler,
  XAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCloudHsmFrontendServiceAddTagsToResourceHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceCreateHapgHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceCreateHsmHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceCreateLunaClientHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDeleteHapgHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDeleteHsmHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDeleteLunaClientHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDescribeHapgHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDescribeHsmHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceDescribeLunaClientHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceGetConfigHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceListAvailableZonesHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceListHapgsHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceListHsmsHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceListLunaClientsHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceListTagsForResourceHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceModifyHapgHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceModifyHsmHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceModifyLunaClientHandler)
  .route('/', XAmzTargetCloudHsmFrontendServiceRemoveTagsFromResourceHandler)

export default app
