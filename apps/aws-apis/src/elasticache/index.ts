import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddTagsToResourceHandler,
  ActionAuthorizeCacheSecurityGroupIngressHandler,
  ActionBatchApplyUpdateActionHandler,
  ActionBatchStopUpdateActionHandler,
  ActionCompleteMigrationHandler,
  ActionCopySnapshotHandler,
  ActionCreateCacheClusterHandler,
  ActionCreateCacheParameterGroupHandler,
  ActionCreateCacheSecurityGroupHandler,
  ActionCreateCacheSubnetGroupHandler,
  ActionCreateGlobalReplicationGroupHandler,
  ActionCreateReplicationGroupHandler,
  ActionCreateSnapshotHandler,
  ActionCreateUserGroupHandler,
  ActionCreateUserHandler,
  ActionDecreaseNodeGroupsInGlobalReplicationGroupHandler,
  ActionDecreaseReplicaCountHandler,
  ActionDeleteCacheClusterHandler,
  ActionDeleteCacheParameterGroupHandler,
  ActionDeleteCacheSecurityGroupHandler,
  ActionDeleteCacheSubnetGroupHandler,
  ActionDeleteGlobalReplicationGroupHandler,
  ActionDeleteReplicationGroupHandler,
  ActionDeleteSnapshotHandler,
  ActionDeleteUserGroupHandler,
  ActionDeleteUserHandler,
  ActionDescribeCacheClustersHandler,
  ActionDescribeCacheEngineVersionsHandler,
  ActionDescribeCacheParameterGroupsHandler,
  ActionDescribeCacheParametersHandler,
  ActionDescribeCacheSecurityGroupsHandler,
  ActionDescribeCacheSubnetGroupsHandler,
  ActionDescribeEngineDefaultParametersHandler,
  ActionDescribeEventsHandler,
  ActionDescribeGlobalReplicationGroupsHandler,
  ActionDescribeReplicationGroupsHandler,
  ActionDescribeReservedCacheNodesHandler,
  ActionDescribeReservedCacheNodesOfferingsHandler,
  ActionDescribeServiceUpdatesHandler,
  ActionDescribeSnapshotsHandler,
  ActionDescribeUpdateActionsHandler,
  ActionDescribeUserGroupsHandler,
  ActionDescribeUsersHandler,
  ActionDisassociateGlobalReplicationGroupHandler,
  ActionFailoverGlobalReplicationGroupHandler,
  ActionIncreaseNodeGroupsInGlobalReplicationGroupHandler,
  ActionIncreaseReplicaCountHandler,
  ActionListAllowedNodeTypeModificationsHandler,
  ActionListTagsForResourceHandler,
  ActionModifyCacheClusterHandler,
  ActionModifyCacheParameterGroupHandler,
  ActionModifyCacheSubnetGroupHandler,
  ActionModifyGlobalReplicationGroupHandler,
  ActionModifyReplicationGroupHandler,
  ActionModifyReplicationGroupShardConfigurationHandler,
  ActionModifyUserGroupHandler,
  ActionModifyUserHandler,
  ActionPurchaseReservedCacheNodesOfferingHandler,
  ActionRebalanceSlotsInGlobalReplicationGroupHandler,
  ActionRebootCacheClusterHandler,
  ActionRemoveTagsFromResourceHandler,
  ActionResetCacheParameterGroupHandler,
  ActionRevokeCacheSecurityGroupIngressHandler,
  ActionStartMigrationHandler,
  ActionTestFailoverHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddTagsToResourceHandler)
  .route('/', ActionAuthorizeCacheSecurityGroupIngressHandler)
  .route('/', ActionBatchApplyUpdateActionHandler)
  .route('/', ActionBatchStopUpdateActionHandler)
  .route('/', ActionCompleteMigrationHandler)
  .route('/', ActionCopySnapshotHandler)
  .route('/', ActionCreateCacheClusterHandler)
  .route('/', ActionCreateCacheParameterGroupHandler)
  .route('/', ActionCreateCacheSecurityGroupHandler)
  .route('/', ActionCreateCacheSubnetGroupHandler)
  .route('/', ActionCreateGlobalReplicationGroupHandler)
  .route('/', ActionCreateReplicationGroupHandler)
  .route('/', ActionCreateSnapshotHandler)
  .route('/', ActionCreateUserHandler)
  .route('/', ActionCreateUserGroupHandler)
  .route('/', ActionDecreaseNodeGroupsInGlobalReplicationGroupHandler)
  .route('/', ActionDecreaseReplicaCountHandler)
  .route('/', ActionDeleteCacheClusterHandler)
  .route('/', ActionDeleteCacheParameterGroupHandler)
  .route('/', ActionDeleteCacheSecurityGroupHandler)
  .route('/', ActionDeleteCacheSubnetGroupHandler)
  .route('/', ActionDeleteGlobalReplicationGroupHandler)
  .route('/', ActionDeleteReplicationGroupHandler)
  .route('/', ActionDeleteSnapshotHandler)
  .route('/', ActionDeleteUserHandler)
  .route('/', ActionDeleteUserGroupHandler)
  .route('/', ActionDescribeCacheClustersHandler)
  .route('/', ActionDescribeCacheEngineVersionsHandler)
  .route('/', ActionDescribeCacheParameterGroupsHandler)
  .route('/', ActionDescribeCacheParametersHandler)
  .route('/', ActionDescribeCacheSecurityGroupsHandler)
  .route('/', ActionDescribeCacheSubnetGroupsHandler)
  .route('/', ActionDescribeEngineDefaultParametersHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeGlobalReplicationGroupsHandler)
  .route('/', ActionDescribeReplicationGroupsHandler)
  .route('/', ActionDescribeReservedCacheNodesHandler)
  .route('/', ActionDescribeReservedCacheNodesOfferingsHandler)
  .route('/', ActionDescribeServiceUpdatesHandler)
  .route('/', ActionDescribeSnapshotsHandler)
  .route('/', ActionDescribeUpdateActionsHandler)
  .route('/', ActionDescribeUserGroupsHandler)
  .route('/', ActionDescribeUsersHandler)
  .route('/', ActionDisassociateGlobalReplicationGroupHandler)
  .route('/', ActionFailoverGlobalReplicationGroupHandler)
  .route('/', ActionIncreaseNodeGroupsInGlobalReplicationGroupHandler)
  .route('/', ActionIncreaseReplicaCountHandler)
  .route('/', ActionListAllowedNodeTypeModificationsHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionModifyCacheClusterHandler)
  .route('/', ActionModifyCacheParameterGroupHandler)
  .route('/', ActionModifyCacheSubnetGroupHandler)
  .route('/', ActionModifyGlobalReplicationGroupHandler)
  .route('/', ActionModifyReplicationGroupHandler)
  .route('/', ActionModifyReplicationGroupShardConfigurationHandler)
  .route('/', ActionModifyUserHandler)
  .route('/', ActionModifyUserGroupHandler)
  .route('/', ActionPurchaseReservedCacheNodesOfferingHandler)
  .route('/', ActionRebalanceSlotsInGlobalReplicationGroupHandler)
  .route('/', ActionRebootCacheClusterHandler)
  .route('/', ActionRemoveTagsFromResourceHandler)
  .route('/', ActionResetCacheParameterGroupHandler)
  .route('/', ActionRevokeCacheSecurityGroupIngressHandler)
  .route('/', ActionStartMigrationHandler)
  .route('/', ActionTestFailoverHandler)

export default app
