import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  bucketAccelerateHandler,
  bucketAclHandler,
  bucketAnalyticsHandler,
  bucketAnalyticsIdHandler,
  bucketCorsHandler,
  bucketDeleteHandler,
  bucketEncryptionHandler,
  bucketHandler,
  bucketIntelligentTieringHandler,
  bucketIntelligentTieringIdHandler,
  bucketInventoryHandler,
  bucketInventoryIdHandler,
  bucketLifecycleDeprecatedHandler,
  bucketLifecycleHandler,
  bucketListType2Handler,
  bucketLocationHandler,
  bucketLoggingHandler,
  bucketMetricsHandler,
  bucketMetricsIdHandler,
  bucketNotificationDeprecatedHandler,
  bucketNotificationHandler,
  bucketObjectLockHandler,
  bucketOwnershipControlsHandler,
  bucketPolicyHandler,
  bucketPolicyStatusHandler,
  bucketPublicAccessBlockHandler,
  bucketReplicationHandler,
  bucketRequestPaymentHandler,
  bucketTaggingHandler,
  bucketUploadsHandler,
  bucketVersioningHandler,
  bucketVersionsHandler,
  bucketWebsiteHandler,
  writeGetObjectResponseXAmzRequestRouteXAmzRequestTokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bucketHandler)
  .route('/', bucketAnalyticsIdHandler)
  .route('/', bucketCorsHandler)
  .route('/', bucketEncryptionHandler)
  .route('/', bucketIntelligentTieringIdHandler)
  .route('/', bucketInventoryIdHandler)
  .route('/', bucketLifecycleHandler)
  .route('/', bucketMetricsIdHandler)
  .route('/', bucketOwnershipControlsHandler)
  .route('/', bucketPolicyHandler)
  .route('/', bucketReplicationHandler)
  .route('/', bucketTaggingHandler)
  .route('/', bucketWebsiteHandler)
  .route('/', bucketDeleteHandler)
  .route('/', bucketPublicAccessBlockHandler)
  .route('/', bucketAccelerateHandler)
  .route('/', bucketAclHandler)
  .route('/', bucketLifecycleDeprecatedHandler)
  .route('/', bucketLocationHandler)
  .route('/', bucketLoggingHandler)
  .route('/', bucketNotificationHandler)
  .route('/', bucketNotificationDeprecatedHandler)
  .route('/', bucketPolicyStatusHandler)
  .route('/', bucketRequestPaymentHandler)
  .route('/', bucketVersioningHandler)
  .route('/', bucketObjectLockHandler)
  .route('/', bucketAnalyticsHandler)
  .route('/', bucketIntelligentTieringHandler)
  .route('/', bucketInventoryHandler)
  .route('/', bucketMetricsHandler)
  .route('/', __rootHandler)
  .route('/', bucketUploadsHandler)
  .route('/', bucketVersionsHandler)
  .route('/', bucketListType2Handler)
  .route('/', writeGetObjectResponseXAmzRequestRouteXAmzRequestTokenHandler)

export default app
