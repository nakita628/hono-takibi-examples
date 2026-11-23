import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityHandler,
  xAmzTargetSpencerFrontendServiceBatchDeleteImageHandler,
  xAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler,
  xAmzTargetSpencerFrontendServiceCreateRepositoryHandler,
  xAmzTargetSpencerFrontendServiceDeleteRepositoryHandler,
  xAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyHandler,
  xAmzTargetSpencerFrontendServiceDescribeImagesHandler,
  xAmzTargetSpencerFrontendServiceDescribeImageTagsHandler,
  xAmzTargetSpencerFrontendServiceDescribeRegistriesHandler,
  xAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler,
  xAmzTargetSpencerFrontendServiceGetAuthorizationTokenHandler,
  xAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler,
  xAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler,
  xAmzTargetSpencerFrontendServiceGetRepositoryPolicyHandler,
  xAmzTargetSpencerFrontendServiceInitiateLayerUploadHandler,
  xAmzTargetSpencerFrontendServiceListTagsForResourceHandler,
  xAmzTargetSpencerFrontendServicePutImageHandler,
  xAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler,
  xAmzTargetSpencerFrontendServicePutRepositoryCatalogDataHandler,
  xAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler,
  xAmzTargetSpencerFrontendServiceTagResourceHandler,
  xAmzTargetSpencerFrontendServiceUntagResourceHandler,
  xAmzTargetSpencerFrontendServiceUploadLayerPartHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityHandler)
  .route('/', xAmzTargetSpencerFrontendServiceBatchDeleteImageHandler)
  .route('/', xAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler)
  .route('/', xAmzTargetSpencerFrontendServiceCreateRepositoryHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDeleteRepositoryHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDescribeImageTagsHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDescribeImagesHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDescribeRegistriesHandler)
  .route('/', xAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler)
  .route('/', xAmzTargetSpencerFrontendServiceGetAuthorizationTokenHandler)
  .route('/', xAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler)
  .route('/', xAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler)
  .route('/', xAmzTargetSpencerFrontendServiceGetRepositoryPolicyHandler)
  .route('/', xAmzTargetSpencerFrontendServiceInitiateLayerUploadHandler)
  .route('/', xAmzTargetSpencerFrontendServiceListTagsForResourceHandler)
  .route('/', xAmzTargetSpencerFrontendServicePutImageHandler)
  .route('/', xAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler)
  .route('/', xAmzTargetSpencerFrontendServicePutRepositoryCatalogDataHandler)
  .route('/', xAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler)
  .route('/', xAmzTargetSpencerFrontendServiceTagResourceHandler)
  .route('/', xAmzTargetSpencerFrontendServiceUntagResourceHandler)
  .route('/', xAmzTargetSpencerFrontendServiceUploadLayerPartHandler)

export default app
