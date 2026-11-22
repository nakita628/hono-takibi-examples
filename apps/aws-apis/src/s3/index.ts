import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  BucketAccelerateHandler,
  BucketAclHandler,
  BucketAnalyticsHandler,
  BucketAnalyticsIdHandler,
  BucketCorsHandler,
  BucketDeleteHandler,
  BucketEncryptionHandler,
  BucketHandler,
  BucketIntelligentTieringHandler,
  BucketIntelligentTieringIdHandler,
  BucketInventoryHandler,
  BucketInventoryIdHandler,
  BucketLifecycleDeprecatedHandler,
  BucketLifecycleHandler,
  BucketListType2Handler,
  BucketLocationHandler,
  BucketLoggingHandler,
  BucketMetricsHandler,
  BucketMetricsIdHandler,
  BucketNotificationDeprecatedHandler,
  BucketNotificationHandler,
  BucketObjectLockHandler,
  BucketOwnershipControlsHandler,
  BucketPolicyHandler,
  BucketPolicyStatusHandler,
  BucketPublicAccessBlockHandler,
  BucketReplicationHandler,
  BucketRequestPaymentHandler,
  BucketTaggingHandler,
  BucketUploadsHandler,
  BucketVersioningHandler,
  BucketVersionsHandler,
  BucketWebsiteHandler,
  WriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', BucketHandler)
  .route('/', BucketAnalyticsIdHandler)
  .route('/', BucketCorsHandler)
  .route('/', BucketEncryptionHandler)
  .route('/', BucketIntelligentTieringIdHandler)
  .route('/', BucketInventoryIdHandler)
  .route('/', BucketLifecycleHandler)
  .route('/', BucketMetricsIdHandler)
  .route('/', BucketOwnershipControlsHandler)
  .route('/', BucketPolicyHandler)
  .route('/', BucketReplicationHandler)
  .route('/', BucketTaggingHandler)
  .route('/', BucketWebsiteHandler)
  .route('/', BucketDeleteHandler)
  .route('/', BucketPublicAccessBlockHandler)
  .route('/', BucketAccelerateHandler)
  .route('/', BucketAclHandler)
  .route('/', BucketLifecycleDeprecatedHandler)
  .route('/', BucketLocationHandler)
  .route('/', BucketLoggingHandler)
  .route('/', BucketNotificationHandler)
  .route('/', BucketNotificationDeprecatedHandler)
  .route('/', BucketPolicyStatusHandler)
  .route('/', BucketRequestPaymentHandler)
  .route('/', BucketVersioningHandler)
  .route('/', BucketObjectLockHandler)
  .route('/', BucketAnalyticsHandler)
  .route('/', BucketIntelligentTieringHandler)
  .route('/', BucketInventoryHandler)
  .route('/', BucketMetricsHandler)
  .route('/', __rootHandler)
  .route('/', BucketUploadsHandler)
  .route('/', BucketVersionsHandler)
  .route('/', BucketListType2Handler)
  .route('/', WriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenHandler)

export default app
