import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketAnalyticsIdRoute,
  deleteBucketCorsRoute,
  deleteBucketEncryptionRoute,
  deleteBucketIntelligentTieringIdRoute,
  deleteBucketInventoryIdRoute,
  deleteBucketKeyRoute,
  deleteBucketKeyTaggingRoute,
  deleteBucketKeyUploadIdRoute,
  deleteBucketLifecycleRoute,
  deleteBucketMetricsIdRoute,
  deleteBucketOwnershipControlsRoute,
  deleteBucketPolicyRoute,
  deleteBucketPublicAccessBlockRoute,
  deleteBucketReplicationRoute,
  deleteBucketRoute,
  deleteBucketTaggingRoute,
  deleteBucketWebsiteRoute,
  getBucketAccelerateRoute,
  getBucketAclRoute,
  getBucketAnalyticsIdRoute,
  getBucketAnalyticsRoute,
  getBucketCorsRoute,
  getBucketEncryptionRoute,
  getBucketIntelligentTieringIdRoute,
  getBucketIntelligentTieringRoute,
  getBucketInventoryIdRoute,
  getBucketInventoryRoute,
  getBucketKeyAclRoute,
  getBucketKeyAttributesXAmzObjectAttributesRoute,
  getBucketKeyLegalHoldRoute,
  getBucketKeyRetentionRoute,
  getBucketKeyRoute,
  getBucketKeyTaggingRoute,
  getBucketKeyTorrentRoute,
  getBucketKeyUploadIdRoute,
  getBucketLifecycleDeprecatedRoute,
  getBucketLifecycleRoute,
  getBucketListType2Route,
  getBucketLocationRoute,
  getBucketLoggingRoute,
  getBucketMetricsIdRoute,
  getBucketMetricsRoute,
  getBucketNotificationDeprecatedRoute,
  getBucketNotificationRoute,
  getBucketObjectLockRoute,
  getBucketOwnershipControlsRoute,
  getBucketPolicyRoute,
  getBucketPolicyStatusRoute,
  getBucketPublicAccessBlockRoute,
  getBucketReplicationRoute,
  getBucketRequestPaymentRoute,
  getBucketRoute,
  getBucketTaggingRoute,
  getBucketUploadsRoute,
  getBucketVersioningRoute,
  getBucketVersionsRoute,
  getBucketWebsiteRoute,
  getRoute,
  headBucketKeyRoute,
  headBucketRoute,
  postBucketDeleteRoute,
  postBucketKeyRestoreRoute,
  postBucketKeySelectSelectType2Route,
  postBucketKeyUploadIdRoute,
  postBucketKeyUploadsRoute,
  postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRoute,
  putBucketAccelerateRoute,
  putBucketAclRoute,
  putBucketAnalyticsIdRoute,
  putBucketCorsRoute,
  putBucketEncryptionRoute,
  putBucketIntelligentTieringIdRoute,
  putBucketInventoryIdRoute,
  putBucketKeyAclRoute,
  putBucketKeyLegalHoldRoute,
  putBucketKeyPartNumberUploadIdRoute,
  putBucketKeyRetentionRoute,
  putBucketKeyRoute,
  putBucketKeyTaggingRoute,
  putBucketKeyXAmzCopySourcePartNumberUploadIdRoute,
  putBucketKeyXAmzCopySourceRoute,
  putBucketLifecycleDeprecatedRoute,
  putBucketLifecycleRoute,
  putBucketLoggingRoute,
  putBucketMetricsIdRoute,
  putBucketNotificationDeprecatedRoute,
  putBucketNotificationRoute,
  putBucketObjectLockRoute,
  putBucketOwnershipControlsRoute,
  putBucketPolicyRoute,
  putBucketPublicAccessBlockRoute,
  putBucketReplicationRoute,
  putBucketRequestPaymentRoute,
  putBucketRoute,
  putBucketTaggingRoute,
  putBucketVersioningRoute,
  putBucketWebsiteRoute,
} from './routes'
import {
  deleteBucketAnalyticsIdRouteHandler,
  deleteBucketCorsRouteHandler,
  deleteBucketEncryptionRouteHandler,
  deleteBucketIntelligentTieringIdRouteHandler,
  deleteBucketInventoryIdRouteHandler,
  deleteBucketKeyRouteHandler,
  deleteBucketKeyTaggingRouteHandler,
  deleteBucketKeyUploadIdRouteHandler,
  deleteBucketLifecycleRouteHandler,
  deleteBucketMetricsIdRouteHandler,
  deleteBucketOwnershipControlsRouteHandler,
  deleteBucketPolicyRouteHandler,
  deleteBucketPublicAccessBlockRouteHandler,
  deleteBucketReplicationRouteHandler,
  deleteBucketRouteHandler,
  deleteBucketTaggingRouteHandler,
  deleteBucketWebsiteRouteHandler,
  getBucketAccelerateRouteHandler,
  getBucketAclRouteHandler,
  getBucketAnalyticsIdRouteHandler,
  getBucketAnalyticsRouteHandler,
  getBucketCorsRouteHandler,
  getBucketEncryptionRouteHandler,
  getBucketIntelligentTieringIdRouteHandler,
  getBucketIntelligentTieringRouteHandler,
  getBucketInventoryIdRouteHandler,
  getBucketInventoryRouteHandler,
  getBucketKeyAclRouteHandler,
  getBucketKeyAttributesXAmzObjectAttributesRouteHandler,
  getBucketKeyLegalHoldRouteHandler,
  getBucketKeyRetentionRouteHandler,
  getBucketKeyRouteHandler,
  getBucketKeyTaggingRouteHandler,
  getBucketKeyTorrentRouteHandler,
  getBucketKeyUploadIdRouteHandler,
  getBucketLifecycleDeprecatedRouteHandler,
  getBucketLifecycleRouteHandler,
  getBucketListType2RouteHandler,
  getBucketLocationRouteHandler,
  getBucketLoggingRouteHandler,
  getBucketMetricsIdRouteHandler,
  getBucketMetricsRouteHandler,
  getBucketNotificationDeprecatedRouteHandler,
  getBucketNotificationRouteHandler,
  getBucketObjectLockRouteHandler,
  getBucketOwnershipControlsRouteHandler,
  getBucketPolicyRouteHandler,
  getBucketPolicyStatusRouteHandler,
  getBucketPublicAccessBlockRouteHandler,
  getBucketReplicationRouteHandler,
  getBucketRequestPaymentRouteHandler,
  getBucketRouteHandler,
  getBucketTaggingRouteHandler,
  getBucketUploadsRouteHandler,
  getBucketVersioningRouteHandler,
  getBucketVersionsRouteHandler,
  getBucketWebsiteRouteHandler,
  getRouteHandler,
  headBucketKeyRouteHandler,
  headBucketRouteHandler,
  postBucketDeleteRouteHandler,
  postBucketKeyRestoreRouteHandler,
  postBucketKeySelectSelectType2RouteHandler,
  postBucketKeyUploadIdRouteHandler,
  postBucketKeyUploadsRouteHandler,
  postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRouteHandler,
  putBucketAccelerateRouteHandler,
  putBucketAclRouteHandler,
  putBucketAnalyticsIdRouteHandler,
  putBucketCorsRouteHandler,
  putBucketEncryptionRouteHandler,
  putBucketIntelligentTieringIdRouteHandler,
  putBucketInventoryIdRouteHandler,
  putBucketKeyAclRouteHandler,
  putBucketKeyLegalHoldRouteHandler,
  putBucketKeyPartNumberUploadIdRouteHandler,
  putBucketKeyRetentionRouteHandler,
  putBucketKeyRouteHandler,
  putBucketKeyTaggingRouteHandler,
  putBucketKeyXAmzCopySourcePartNumberUploadIdRouteHandler,
  putBucketKeyXAmzCopySourceRouteHandler,
  putBucketLifecycleDeprecatedRouteHandler,
  putBucketLifecycleRouteHandler,
  putBucketLoggingRouteHandler,
  putBucketMetricsIdRouteHandler,
  putBucketNotificationDeprecatedRouteHandler,
  putBucketNotificationRouteHandler,
  putBucketObjectLockRouteHandler,
  putBucketOwnershipControlsRouteHandler,
  putBucketPolicyRouteHandler,
  putBucketPublicAccessBlockRouteHandler,
  putBucketReplicationRouteHandler,
  putBucketRequestPaymentRouteHandler,
  putBucketRouteHandler,
  putBucketTaggingRouteHandler,
  putBucketVersioningRouteHandler,
  putBucketWebsiteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteBucketKeyUploadIdRoute, deleteBucketKeyUploadIdRouteHandler)
  .openapi(postBucketKeyUploadIdRoute, postBucketKeyUploadIdRouteHandler)
  .openapi(getBucketKeyUploadIdRoute, getBucketKeyUploadIdRouteHandler)
  .openapi(putBucketKeyXAmzCopySourceRoute, putBucketKeyXAmzCopySourceRouteHandler)
  .openapi(putBucketRoute, putBucketRouteHandler)
  .openapi(deleteBucketRoute, deleteBucketRouteHandler)
  .openapi(headBucketRoute, headBucketRouteHandler)
  .openapi(getBucketRoute, getBucketRouteHandler)
  .openapi(postBucketKeyUploadsRoute, postBucketKeyUploadsRouteHandler)
  .openapi(deleteBucketAnalyticsIdRoute, deleteBucketAnalyticsIdRouteHandler)
  .openapi(getBucketAnalyticsIdRoute, getBucketAnalyticsIdRouteHandler)
  .openapi(putBucketAnalyticsIdRoute, putBucketAnalyticsIdRouteHandler)
  .openapi(deleteBucketCorsRoute, deleteBucketCorsRouteHandler)
  .openapi(getBucketCorsRoute, getBucketCorsRouteHandler)
  .openapi(putBucketCorsRoute, putBucketCorsRouteHandler)
  .openapi(deleteBucketEncryptionRoute, deleteBucketEncryptionRouteHandler)
  .openapi(getBucketEncryptionRoute, getBucketEncryptionRouteHandler)
  .openapi(putBucketEncryptionRoute, putBucketEncryptionRouteHandler)
  .openapi(deleteBucketIntelligentTieringIdRoute, deleteBucketIntelligentTieringIdRouteHandler)
  .openapi(getBucketIntelligentTieringIdRoute, getBucketIntelligentTieringIdRouteHandler)
  .openapi(putBucketIntelligentTieringIdRoute, putBucketIntelligentTieringIdRouteHandler)
  .openapi(deleteBucketInventoryIdRoute, deleteBucketInventoryIdRouteHandler)
  .openapi(getBucketInventoryIdRoute, getBucketInventoryIdRouteHandler)
  .openapi(putBucketInventoryIdRoute, putBucketInventoryIdRouteHandler)
  .openapi(deleteBucketLifecycleRoute, deleteBucketLifecycleRouteHandler)
  .openapi(getBucketLifecycleRoute, getBucketLifecycleRouteHandler)
  .openapi(putBucketLifecycleRoute, putBucketLifecycleRouteHandler)
  .openapi(deleteBucketMetricsIdRoute, deleteBucketMetricsIdRouteHandler)
  .openapi(getBucketMetricsIdRoute, getBucketMetricsIdRouteHandler)
  .openapi(putBucketMetricsIdRoute, putBucketMetricsIdRouteHandler)
  .openapi(deleteBucketOwnershipControlsRoute, deleteBucketOwnershipControlsRouteHandler)
  .openapi(getBucketOwnershipControlsRoute, getBucketOwnershipControlsRouteHandler)
  .openapi(putBucketOwnershipControlsRoute, putBucketOwnershipControlsRouteHandler)
  .openapi(deleteBucketPolicyRoute, deleteBucketPolicyRouteHandler)
  .openapi(getBucketPolicyRoute, getBucketPolicyRouteHandler)
  .openapi(putBucketPolicyRoute, putBucketPolicyRouteHandler)
  .openapi(deleteBucketReplicationRoute, deleteBucketReplicationRouteHandler)
  .openapi(getBucketReplicationRoute, getBucketReplicationRouteHandler)
  .openapi(putBucketReplicationRoute, putBucketReplicationRouteHandler)
  .openapi(deleteBucketTaggingRoute, deleteBucketTaggingRouteHandler)
  .openapi(getBucketTaggingRoute, getBucketTaggingRouteHandler)
  .openapi(putBucketTaggingRoute, putBucketTaggingRouteHandler)
  .openapi(deleteBucketWebsiteRoute, deleteBucketWebsiteRouteHandler)
  .openapi(getBucketWebsiteRoute, getBucketWebsiteRouteHandler)
  .openapi(putBucketWebsiteRoute, putBucketWebsiteRouteHandler)
  .openapi(deleteBucketKeyRoute, deleteBucketKeyRouteHandler)
  .openapi(getBucketKeyRoute, getBucketKeyRouteHandler)
  .openapi(headBucketKeyRoute, headBucketKeyRouteHandler)
  .openapi(putBucketKeyRoute, putBucketKeyRouteHandler)
  .openapi(deleteBucketKeyTaggingRoute, deleteBucketKeyTaggingRouteHandler)
  .openapi(getBucketKeyTaggingRoute, getBucketKeyTaggingRouteHandler)
  .openapi(putBucketKeyTaggingRoute, putBucketKeyTaggingRouteHandler)
  .openapi(postBucketDeleteRoute, postBucketDeleteRouteHandler)
  .openapi(deleteBucketPublicAccessBlockRoute, deleteBucketPublicAccessBlockRouteHandler)
  .openapi(getBucketPublicAccessBlockRoute, getBucketPublicAccessBlockRouteHandler)
  .openapi(putBucketPublicAccessBlockRoute, putBucketPublicAccessBlockRouteHandler)
  .openapi(getBucketAccelerateRoute, getBucketAccelerateRouteHandler)
  .openapi(putBucketAccelerateRoute, putBucketAccelerateRouteHandler)
  .openapi(getBucketAclRoute, getBucketAclRouteHandler)
  .openapi(putBucketAclRoute, putBucketAclRouteHandler)
  .openapi(getBucketLifecycleDeprecatedRoute, getBucketLifecycleDeprecatedRouteHandler)
  .openapi(putBucketLifecycleDeprecatedRoute, putBucketLifecycleDeprecatedRouteHandler)
  .openapi(getBucketLocationRoute, getBucketLocationRouteHandler)
  .openapi(getBucketLoggingRoute, getBucketLoggingRouteHandler)
  .openapi(putBucketLoggingRoute, putBucketLoggingRouteHandler)
  .openapi(getBucketNotificationRoute, getBucketNotificationRouteHandler)
  .openapi(putBucketNotificationRoute, putBucketNotificationRouteHandler)
  .openapi(getBucketNotificationDeprecatedRoute, getBucketNotificationDeprecatedRouteHandler)
  .openapi(putBucketNotificationDeprecatedRoute, putBucketNotificationDeprecatedRouteHandler)
  .openapi(getBucketPolicyStatusRoute, getBucketPolicyStatusRouteHandler)
  .openapi(getBucketRequestPaymentRoute, getBucketRequestPaymentRouteHandler)
  .openapi(putBucketRequestPaymentRoute, putBucketRequestPaymentRouteHandler)
  .openapi(getBucketVersioningRoute, getBucketVersioningRouteHandler)
  .openapi(putBucketVersioningRoute, putBucketVersioningRouteHandler)
  .openapi(getBucketKeyAclRoute, getBucketKeyAclRouteHandler)
  .openapi(putBucketKeyAclRoute, putBucketKeyAclRouteHandler)
  .openapi(
    getBucketKeyAttributesXAmzObjectAttributesRoute,
    getBucketKeyAttributesXAmzObjectAttributesRouteHandler,
  )
  .openapi(getBucketKeyLegalHoldRoute, getBucketKeyLegalHoldRouteHandler)
  .openapi(putBucketKeyLegalHoldRoute, putBucketKeyLegalHoldRouteHandler)
  .openapi(getBucketObjectLockRoute, getBucketObjectLockRouteHandler)
  .openapi(putBucketObjectLockRoute, putBucketObjectLockRouteHandler)
  .openapi(getBucketKeyRetentionRoute, getBucketKeyRetentionRouteHandler)
  .openapi(putBucketKeyRetentionRoute, putBucketKeyRetentionRouteHandler)
  .openapi(getBucketKeyTorrentRoute, getBucketKeyTorrentRouteHandler)
  .openapi(getBucketAnalyticsRoute, getBucketAnalyticsRouteHandler)
  .openapi(getBucketIntelligentTieringRoute, getBucketIntelligentTieringRouteHandler)
  .openapi(getBucketInventoryRoute, getBucketInventoryRouteHandler)
  .openapi(getBucketMetricsRoute, getBucketMetricsRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getBucketUploadsRoute, getBucketUploadsRouteHandler)
  .openapi(getBucketVersionsRoute, getBucketVersionsRouteHandler)
  .openapi(getBucketListType2Route, getBucketListType2RouteHandler)
  .openapi(postBucketKeyRestoreRoute, postBucketKeyRestoreRouteHandler)
  .openapi(postBucketKeySelectSelectType2Route, postBucketKeySelectSelectType2RouteHandler)
  .openapi(putBucketKeyPartNumberUploadIdRoute, putBucketKeyPartNumberUploadIdRouteHandler)
  .openapi(
    putBucketKeyXAmzCopySourcePartNumberUploadIdRoute,
    putBucketKeyXAmzCopySourcePartNumberUploadIdRouteHandler,
  )
  .openapi(
    postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRoute,
    postWriteGetObjectResponseXAmzRequestRouteXAmzRequestTokenRouteHandler,
  )

export default app
