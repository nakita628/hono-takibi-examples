import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddTagsToResourceHandler,
  actionAuthorizeCacheSecurityGroupIngressHandler,
  actionBatchApplyUpdateActionHandler,
  actionBatchStopUpdateActionHandler,
  actionCompleteMigrationHandler,
  actionCopySnapshotHandler,
  actionCreateCacheClusterHandler,
  actionCreateCacheParameterGroupHandler,
  actionCreateCacheSecurityGroupHandler,
  actionCreateCacheSubnetGroupHandler,
  actionCreateGlobalReplicationGroupHandler,
  actionCreateReplicationGroupHandler,
  actionCreateSnapshotHandler,
  actionCreateUserGroupHandler,
  actionCreateUserHandler,
  actionDecreaseNodeGroupsInGlobalReplicationGroupHandler,
  actionDecreaseReplicaCountHandler,
  actionDeleteCacheClusterHandler,
  actionDeleteCacheParameterGroupHandler,
  actionDeleteCacheSecurityGroupHandler,
  actionDeleteCacheSubnetGroupHandler,
  actionDeleteGlobalReplicationGroupHandler,
  actionDeleteReplicationGroupHandler,
  actionDeleteSnapshotHandler,
  actionDeleteUserGroupHandler,
  actionDeleteUserHandler,
  actionDescribeCacheClustersHandler,
  actionDescribeCacheEngineVersionsHandler,
  actionDescribeCacheParameterGroupsHandler,
  actionDescribeCacheParametersHandler,
  actionDescribeCacheSecurityGroupsHandler,
  actionDescribeCacheSubnetGroupsHandler,
  actionDescribeEngineDefaultParametersHandler,
  actionDescribeEventsHandler,
  actionDescribeGlobalReplicationGroupsHandler,
  actionDescribeReplicationGroupsHandler,
  actionDescribeReservedCacheNodesHandler,
  actionDescribeReservedCacheNodesOfferingsHandler,
  actionDescribeServiceUpdatesHandler,
  actionDescribeSnapshotsHandler,
  actionDescribeUpdateActionsHandler,
  actionDescribeUserGroupsHandler,
  actionDescribeUsersHandler,
  actionDisassociateGlobalReplicationGroupHandler,
  actionFailoverGlobalReplicationGroupHandler,
  actionIncreaseNodeGroupsInGlobalReplicationGroupHandler,
  actionIncreaseReplicaCountHandler,
  actionListAllowedNodeTypeModificationsHandler,
  actionListTagsForResourceHandler,
  actionModifyCacheClusterHandler,
  actionModifyCacheParameterGroupHandler,
  actionModifyCacheSubnetGroupHandler,
  actionModifyGlobalReplicationGroupHandler,
  actionModifyReplicationGroupHandler,
  actionModifyReplicationGroupShardConfigurationHandler,
  actionModifyUserGroupHandler,
  actionModifyUserHandler,
  actionPurchaseReservedCacheNodesOfferingHandler,
  actionRebalanceSlotsInGlobalReplicationGroupHandler,
  actionRebootCacheClusterHandler,
  actionRemoveTagsFromResourceHandler,
  actionResetCacheParameterGroupHandler,
  actionRevokeCacheSecurityGroupIngressHandler,
  actionStartMigrationHandler,
  actionTestFailoverHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddTagsToResourceHandler)
  .route('/', actionAuthorizeCacheSecurityGroupIngressHandler)
  .route('/', actionBatchApplyUpdateActionHandler)
  .route('/', actionBatchStopUpdateActionHandler)
  .route('/', actionCompleteMigrationHandler)
  .route('/', actionCopySnapshotHandler)
  .route('/', actionCreateCacheClusterHandler)
  .route('/', actionCreateCacheParameterGroupHandler)
  .route('/', actionCreateCacheSecurityGroupHandler)
  .route('/', actionCreateCacheSubnetGroupHandler)
  .route('/', actionCreateGlobalReplicationGroupHandler)
  .route('/', actionCreateReplicationGroupHandler)
  .route('/', actionCreateSnapshotHandler)
  .route('/', actionCreateUserHandler)
  .route('/', actionCreateUserGroupHandler)
  .route('/', actionDecreaseNodeGroupsInGlobalReplicationGroupHandler)
  .route('/', actionDecreaseReplicaCountHandler)
  .route('/', actionDeleteCacheClusterHandler)
  .route('/', actionDeleteCacheParameterGroupHandler)
  .route('/', actionDeleteCacheSecurityGroupHandler)
  .route('/', actionDeleteCacheSubnetGroupHandler)
  .route('/', actionDeleteGlobalReplicationGroupHandler)
  .route('/', actionDeleteReplicationGroupHandler)
  .route('/', actionDeleteSnapshotHandler)
  .route('/', actionDeleteUserHandler)
  .route('/', actionDeleteUserGroupHandler)
  .route('/', actionDescribeCacheClustersHandler)
  .route('/', actionDescribeCacheEngineVersionsHandler)
  .route('/', actionDescribeCacheParameterGroupsHandler)
  .route('/', actionDescribeCacheParametersHandler)
  .route('/', actionDescribeCacheSecurityGroupsHandler)
  .route('/', actionDescribeCacheSubnetGroupsHandler)
  .route('/', actionDescribeEngineDefaultParametersHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeGlobalReplicationGroupsHandler)
  .route('/', actionDescribeReplicationGroupsHandler)
  .route('/', actionDescribeReservedCacheNodesHandler)
  .route('/', actionDescribeReservedCacheNodesOfferingsHandler)
  .route('/', actionDescribeServiceUpdatesHandler)
  .route('/', actionDescribeSnapshotsHandler)
  .route('/', actionDescribeUpdateActionsHandler)
  .route('/', actionDescribeUserGroupsHandler)
  .route('/', actionDescribeUsersHandler)
  .route('/', actionDisassociateGlobalReplicationGroupHandler)
  .route('/', actionFailoverGlobalReplicationGroupHandler)
  .route('/', actionIncreaseNodeGroupsInGlobalReplicationGroupHandler)
  .route('/', actionIncreaseReplicaCountHandler)
  .route('/', actionListAllowedNodeTypeModificationsHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionModifyCacheClusterHandler)
  .route('/', actionModifyCacheParameterGroupHandler)
  .route('/', actionModifyCacheSubnetGroupHandler)
  .route('/', actionModifyGlobalReplicationGroupHandler)
  .route('/', actionModifyReplicationGroupHandler)
  .route('/', actionModifyReplicationGroupShardConfigurationHandler)
  .route('/', actionModifyUserHandler)
  .route('/', actionModifyUserGroupHandler)
  .route('/', actionPurchaseReservedCacheNodesOfferingHandler)
  .route('/', actionRebalanceSlotsInGlobalReplicationGroupHandler)
  .route('/', actionRebootCacheClusterHandler)
  .route('/', actionRemoveTagsFromResourceHandler)
  .route('/', actionResetCacheParameterGroupHandler)
  .route('/', actionRevokeCacheSecurityGroupIngressHandler)
  .route('/', actionStartMigrationHandler)
  .route('/', actionTestFailoverHandler)

export default app
