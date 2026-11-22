import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityHandler,
  XAmzTargetSpencerFrontendServiceBatchDeleteImageHandler,
  XAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler,
  XAmzTargetSpencerFrontendServiceCreateRepositoryHandler,
  XAmzTargetSpencerFrontendServiceDeleteRepositoryHandler,
  XAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyHandler,
  XAmzTargetSpencerFrontendServiceDescribeImagesHandler,
  XAmzTargetSpencerFrontendServiceDescribeImageTagsHandler,
  XAmzTargetSpencerFrontendServiceDescribeRegistriesHandler,
  XAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler,
  XAmzTargetSpencerFrontendServiceGetAuthorizationTokenHandler,
  XAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler,
  XAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler,
  XAmzTargetSpencerFrontendServiceGetRepositoryPolicyHandler,
  XAmzTargetSpencerFrontendServiceInitiateLayerUploadHandler,
  XAmzTargetSpencerFrontendServiceListTagsForResourceHandler,
  XAmzTargetSpencerFrontendServicePutImageHandler,
  XAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler,
  XAmzTargetSpencerFrontendServicePutRepositoryCatalogDataHandler,
  XAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler,
  XAmzTargetSpencerFrontendServiceTagResourceHandler,
  XAmzTargetSpencerFrontendServiceUntagResourceHandler,
  XAmzTargetSpencerFrontendServiceUploadLayerPartHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityHandler)
  .route('/', XAmzTargetSpencerFrontendServiceBatchDeleteImageHandler)
  .route('/', XAmzTargetSpencerFrontendServiceCompleteLayerUploadHandler)
  .route('/', XAmzTargetSpencerFrontendServiceCreateRepositoryHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDeleteRepositoryHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDescribeImageTagsHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDescribeImagesHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDescribeRegistriesHandler)
  .route('/', XAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler)
  .route('/', XAmzTargetSpencerFrontendServiceGetAuthorizationTokenHandler)
  .route('/', XAmzTargetSpencerFrontendServiceGetRegistryCatalogDataHandler)
  .route('/', XAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataHandler)
  .route('/', XAmzTargetSpencerFrontendServiceGetRepositoryPolicyHandler)
  .route('/', XAmzTargetSpencerFrontendServiceInitiateLayerUploadHandler)
  .route('/', XAmzTargetSpencerFrontendServiceListTagsForResourceHandler)
  .route('/', XAmzTargetSpencerFrontendServicePutImageHandler)
  .route('/', XAmzTargetSpencerFrontendServicePutRegistryCatalogDataHandler)
  .route('/', XAmzTargetSpencerFrontendServicePutRepositoryCatalogDataHandler)
  .route('/', XAmzTargetSpencerFrontendServiceSetRepositoryPolicyHandler)
  .route('/', XAmzTargetSpencerFrontendServiceTagResourceHandler)
  .route('/', XAmzTargetSpencerFrontendServiceUntagResourceHandler)
  .route('/', XAmzTargetSpencerFrontendServiceUploadLayerPartHandler)

export default app
