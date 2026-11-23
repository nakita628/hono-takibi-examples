import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddTagsToResourceRoute,
  getActionAuthorizeCacheSecurityGroupIngressRoute,
  getActionBatchApplyUpdateActionRoute,
  getActionBatchStopUpdateActionRoute,
  getActionCompleteMigrationRoute,
  getActionCopySnapshotRoute,
  getActionCreateCacheClusterRoute,
  getActionCreateCacheParameterGroupRoute,
  getActionCreateCacheSecurityGroupRoute,
  getActionCreateCacheSubnetGroupRoute,
  getActionCreateGlobalReplicationGroupRoute,
  getActionCreateReplicationGroupRoute,
  getActionCreateSnapshotRoute,
  getActionCreateUserGroupRoute,
  getActionCreateUserRoute,
  getActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
  getActionDecreaseReplicaCountRoute,
  getActionDeleteCacheClusterRoute,
  getActionDeleteCacheParameterGroupRoute,
  getActionDeleteCacheSecurityGroupRoute,
  getActionDeleteCacheSubnetGroupRoute,
  getActionDeleteGlobalReplicationGroupRoute,
  getActionDeleteReplicationGroupRoute,
  getActionDeleteSnapshotRoute,
  getActionDeleteUserGroupRoute,
  getActionDeleteUserRoute,
  getActionDescribeCacheClustersRoute,
  getActionDescribeCacheEngineVersionsRoute,
  getActionDescribeCacheParameterGroupsRoute,
  getActionDescribeCacheParametersRoute,
  getActionDescribeCacheSecurityGroupsRoute,
  getActionDescribeCacheSubnetGroupsRoute,
  getActionDescribeEngineDefaultParametersRoute,
  getActionDescribeEventsRoute,
  getActionDescribeGlobalReplicationGroupsRoute,
  getActionDescribeReplicationGroupsRoute,
  getActionDescribeReservedCacheNodesOfferingsRoute,
  getActionDescribeReservedCacheNodesRoute,
  getActionDescribeServiceUpdatesRoute,
  getActionDescribeSnapshotsRoute,
  getActionDescribeUpdateActionsRoute,
  getActionDescribeUserGroupsRoute,
  getActionDescribeUsersRoute,
  getActionDisassociateGlobalReplicationGroupRoute,
  getActionFailoverGlobalReplicationGroupRoute,
  getActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
  getActionIncreaseReplicaCountRoute,
  getActionListAllowedNodeTypeModificationsRoute,
  getActionListTagsForResourceRoute,
  getActionModifyCacheClusterRoute,
  getActionModifyCacheParameterGroupRoute,
  getActionModifyCacheSubnetGroupRoute,
  getActionModifyGlobalReplicationGroupRoute,
  getActionModifyReplicationGroupRoute,
  getActionModifyReplicationGroupShardConfigurationRoute,
  getActionModifyUserGroupRoute,
  getActionModifyUserRoute,
  getActionPurchaseReservedCacheNodesOfferingRoute,
  getActionRebalanceSlotsInGlobalReplicationGroupRoute,
  getActionRebootCacheClusterRoute,
  getActionRemoveTagsFromResourceRoute,
  getActionResetCacheParameterGroupRoute,
  getActionRevokeCacheSecurityGroupIngressRoute,
  getActionStartMigrationRoute,
  getActionTestFailoverRoute,
  postActionAddTagsToResourceRoute,
  postActionAuthorizeCacheSecurityGroupIngressRoute,
  postActionBatchApplyUpdateActionRoute,
  postActionBatchStopUpdateActionRoute,
  postActionCompleteMigrationRoute,
  postActionCopySnapshotRoute,
  postActionCreateCacheClusterRoute,
  postActionCreateCacheParameterGroupRoute,
  postActionCreateCacheSecurityGroupRoute,
  postActionCreateCacheSubnetGroupRoute,
  postActionCreateGlobalReplicationGroupRoute,
  postActionCreateReplicationGroupRoute,
  postActionCreateSnapshotRoute,
  postActionCreateUserGroupRoute,
  postActionCreateUserRoute,
  postActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
  postActionDecreaseReplicaCountRoute,
  postActionDeleteCacheClusterRoute,
  postActionDeleteCacheParameterGroupRoute,
  postActionDeleteCacheSecurityGroupRoute,
  postActionDeleteCacheSubnetGroupRoute,
  postActionDeleteGlobalReplicationGroupRoute,
  postActionDeleteReplicationGroupRoute,
  postActionDeleteSnapshotRoute,
  postActionDeleteUserGroupRoute,
  postActionDeleteUserRoute,
  postActionDescribeCacheClustersRoute,
  postActionDescribeCacheEngineVersionsRoute,
  postActionDescribeCacheParameterGroupsRoute,
  postActionDescribeCacheParametersRoute,
  postActionDescribeCacheSecurityGroupsRoute,
  postActionDescribeCacheSubnetGroupsRoute,
  postActionDescribeEngineDefaultParametersRoute,
  postActionDescribeEventsRoute,
  postActionDescribeGlobalReplicationGroupsRoute,
  postActionDescribeReplicationGroupsRoute,
  postActionDescribeReservedCacheNodesOfferingsRoute,
  postActionDescribeReservedCacheNodesRoute,
  postActionDescribeServiceUpdatesRoute,
  postActionDescribeSnapshotsRoute,
  postActionDescribeUpdateActionsRoute,
  postActionDescribeUserGroupsRoute,
  postActionDescribeUsersRoute,
  postActionDisassociateGlobalReplicationGroupRoute,
  postActionFailoverGlobalReplicationGroupRoute,
  postActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
  postActionIncreaseReplicaCountRoute,
  postActionListAllowedNodeTypeModificationsRoute,
  postActionListTagsForResourceRoute,
  postActionModifyCacheClusterRoute,
  postActionModifyCacheParameterGroupRoute,
  postActionModifyCacheSubnetGroupRoute,
  postActionModifyGlobalReplicationGroupRoute,
  postActionModifyReplicationGroupRoute,
  postActionModifyReplicationGroupShardConfigurationRoute,
  postActionModifyUserGroupRoute,
  postActionModifyUserRoute,
  postActionPurchaseReservedCacheNodesOfferingRoute,
  postActionRebalanceSlotsInGlobalReplicationGroupRoute,
  postActionRebootCacheClusterRoute,
  postActionRemoveTagsFromResourceRoute,
  postActionResetCacheParameterGroupRoute,
  postActionRevokeCacheSecurityGroupIngressRoute,
  postActionStartMigrationRoute,
  postActionTestFailoverRoute,
} from './routes'
import {
  getActionAddTagsToResourceRouteHandler,
  getActionAuthorizeCacheSecurityGroupIngressRouteHandler,
  getActionBatchApplyUpdateActionRouteHandler,
  getActionBatchStopUpdateActionRouteHandler,
  getActionCompleteMigrationRouteHandler,
  getActionCopySnapshotRouteHandler,
  getActionCreateCacheClusterRouteHandler,
  getActionCreateCacheParameterGroupRouteHandler,
  getActionCreateCacheSecurityGroupRouteHandler,
  getActionCreateCacheSubnetGroupRouteHandler,
  getActionCreateGlobalReplicationGroupRouteHandler,
  getActionCreateReplicationGroupRouteHandler,
  getActionCreateSnapshotRouteHandler,
  getActionCreateUserGroupRouteHandler,
  getActionCreateUserRouteHandler,
  getActionDecreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  getActionDecreaseReplicaCountRouteHandler,
  getActionDeleteCacheClusterRouteHandler,
  getActionDeleteCacheParameterGroupRouteHandler,
  getActionDeleteCacheSecurityGroupRouteHandler,
  getActionDeleteCacheSubnetGroupRouteHandler,
  getActionDeleteGlobalReplicationGroupRouteHandler,
  getActionDeleteReplicationGroupRouteHandler,
  getActionDeleteSnapshotRouteHandler,
  getActionDeleteUserGroupRouteHandler,
  getActionDeleteUserRouteHandler,
  getActionDescribeCacheClustersRouteHandler,
  getActionDescribeCacheEngineVersionsRouteHandler,
  getActionDescribeCacheParameterGroupsRouteHandler,
  getActionDescribeCacheParametersRouteHandler,
  getActionDescribeCacheSecurityGroupsRouteHandler,
  getActionDescribeCacheSubnetGroupsRouteHandler,
  getActionDescribeEngineDefaultParametersRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeGlobalReplicationGroupsRouteHandler,
  getActionDescribeReplicationGroupsRouteHandler,
  getActionDescribeReservedCacheNodesOfferingsRouteHandler,
  getActionDescribeReservedCacheNodesRouteHandler,
  getActionDescribeServiceUpdatesRouteHandler,
  getActionDescribeSnapshotsRouteHandler,
  getActionDescribeUpdateActionsRouteHandler,
  getActionDescribeUserGroupsRouteHandler,
  getActionDescribeUsersRouteHandler,
  getActionDisassociateGlobalReplicationGroupRouteHandler,
  getActionFailoverGlobalReplicationGroupRouteHandler,
  getActionIncreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  getActionIncreaseReplicaCountRouteHandler,
  getActionListAllowedNodeTypeModificationsRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionModifyCacheClusterRouteHandler,
  getActionModifyCacheParameterGroupRouteHandler,
  getActionModifyCacheSubnetGroupRouteHandler,
  getActionModifyGlobalReplicationGroupRouteHandler,
  getActionModifyReplicationGroupRouteHandler,
  getActionModifyReplicationGroupShardConfigurationRouteHandler,
  getActionModifyUserGroupRouteHandler,
  getActionModifyUserRouteHandler,
  getActionPurchaseReservedCacheNodesOfferingRouteHandler,
  getActionRebalanceSlotsInGlobalReplicationGroupRouteHandler,
  getActionRebootCacheClusterRouteHandler,
  getActionRemoveTagsFromResourceRouteHandler,
  getActionResetCacheParameterGroupRouteHandler,
  getActionRevokeCacheSecurityGroupIngressRouteHandler,
  getActionStartMigrationRouteHandler,
  getActionTestFailoverRouteHandler,
  postActionAddTagsToResourceRouteHandler,
  postActionAuthorizeCacheSecurityGroupIngressRouteHandler,
  postActionBatchApplyUpdateActionRouteHandler,
  postActionBatchStopUpdateActionRouteHandler,
  postActionCompleteMigrationRouteHandler,
  postActionCopySnapshotRouteHandler,
  postActionCreateCacheClusterRouteHandler,
  postActionCreateCacheParameterGroupRouteHandler,
  postActionCreateCacheSecurityGroupRouteHandler,
  postActionCreateCacheSubnetGroupRouteHandler,
  postActionCreateGlobalReplicationGroupRouteHandler,
  postActionCreateReplicationGroupRouteHandler,
  postActionCreateSnapshotRouteHandler,
  postActionCreateUserGroupRouteHandler,
  postActionCreateUserRouteHandler,
  postActionDecreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  postActionDecreaseReplicaCountRouteHandler,
  postActionDeleteCacheClusterRouteHandler,
  postActionDeleteCacheParameterGroupRouteHandler,
  postActionDeleteCacheSecurityGroupRouteHandler,
  postActionDeleteCacheSubnetGroupRouteHandler,
  postActionDeleteGlobalReplicationGroupRouteHandler,
  postActionDeleteReplicationGroupRouteHandler,
  postActionDeleteSnapshotRouteHandler,
  postActionDeleteUserGroupRouteHandler,
  postActionDeleteUserRouteHandler,
  postActionDescribeCacheClustersRouteHandler,
  postActionDescribeCacheEngineVersionsRouteHandler,
  postActionDescribeCacheParameterGroupsRouteHandler,
  postActionDescribeCacheParametersRouteHandler,
  postActionDescribeCacheSecurityGroupsRouteHandler,
  postActionDescribeCacheSubnetGroupsRouteHandler,
  postActionDescribeEngineDefaultParametersRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeGlobalReplicationGroupsRouteHandler,
  postActionDescribeReplicationGroupsRouteHandler,
  postActionDescribeReservedCacheNodesOfferingsRouteHandler,
  postActionDescribeReservedCacheNodesRouteHandler,
  postActionDescribeServiceUpdatesRouteHandler,
  postActionDescribeSnapshotsRouteHandler,
  postActionDescribeUpdateActionsRouteHandler,
  postActionDescribeUserGroupsRouteHandler,
  postActionDescribeUsersRouteHandler,
  postActionDisassociateGlobalReplicationGroupRouteHandler,
  postActionFailoverGlobalReplicationGroupRouteHandler,
  postActionIncreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  postActionIncreaseReplicaCountRouteHandler,
  postActionListAllowedNodeTypeModificationsRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionModifyCacheClusterRouteHandler,
  postActionModifyCacheParameterGroupRouteHandler,
  postActionModifyCacheSubnetGroupRouteHandler,
  postActionModifyGlobalReplicationGroupRouteHandler,
  postActionModifyReplicationGroupRouteHandler,
  postActionModifyReplicationGroupShardConfigurationRouteHandler,
  postActionModifyUserGroupRouteHandler,
  postActionModifyUserRouteHandler,
  postActionPurchaseReservedCacheNodesOfferingRouteHandler,
  postActionRebalanceSlotsInGlobalReplicationGroupRouteHandler,
  postActionRebootCacheClusterRouteHandler,
  postActionRemoveTagsFromResourceRouteHandler,
  postActionResetCacheParameterGroupRouteHandler,
  postActionRevokeCacheSecurityGroupIngressRouteHandler,
  postActionStartMigrationRouteHandler,
  postActionTestFailoverRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddTagsToResourceRoute, getActionAddTagsToResourceRouteHandler)
  .openapi(postActionAddTagsToResourceRoute, postActionAddTagsToResourceRouteHandler)
  .openapi(
    getActionAuthorizeCacheSecurityGroupIngressRoute,
    getActionAuthorizeCacheSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionAuthorizeCacheSecurityGroupIngressRoute,
    postActionAuthorizeCacheSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionBatchApplyUpdateActionRoute, getActionBatchApplyUpdateActionRouteHandler)
  .openapi(postActionBatchApplyUpdateActionRoute, postActionBatchApplyUpdateActionRouteHandler)
  .openapi(getActionBatchStopUpdateActionRoute, getActionBatchStopUpdateActionRouteHandler)
  .openapi(postActionBatchStopUpdateActionRoute, postActionBatchStopUpdateActionRouteHandler)
  .openapi(getActionCompleteMigrationRoute, getActionCompleteMigrationRouteHandler)
  .openapi(postActionCompleteMigrationRoute, postActionCompleteMigrationRouteHandler)
  .openapi(getActionCopySnapshotRoute, getActionCopySnapshotRouteHandler)
  .openapi(postActionCopySnapshotRoute, postActionCopySnapshotRouteHandler)
  .openapi(getActionCreateCacheClusterRoute, getActionCreateCacheClusterRouteHandler)
  .openapi(postActionCreateCacheClusterRoute, postActionCreateCacheClusterRouteHandler)
  .openapi(getActionCreateCacheParameterGroupRoute, getActionCreateCacheParameterGroupRouteHandler)
  .openapi(
    postActionCreateCacheParameterGroupRoute,
    postActionCreateCacheParameterGroupRouteHandler,
  )
  .openapi(getActionCreateCacheSecurityGroupRoute, getActionCreateCacheSecurityGroupRouteHandler)
  .openapi(postActionCreateCacheSecurityGroupRoute, postActionCreateCacheSecurityGroupRouteHandler)
  .openapi(getActionCreateCacheSubnetGroupRoute, getActionCreateCacheSubnetGroupRouteHandler)
  .openapi(postActionCreateCacheSubnetGroupRoute, postActionCreateCacheSubnetGroupRouteHandler)
  .openapi(
    getActionCreateGlobalReplicationGroupRoute,
    getActionCreateGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionCreateGlobalReplicationGroupRoute,
    postActionCreateGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionCreateReplicationGroupRoute, getActionCreateReplicationGroupRouteHandler)
  .openapi(postActionCreateReplicationGroupRoute, postActionCreateReplicationGroupRouteHandler)
  .openapi(getActionCreateSnapshotRoute, getActionCreateSnapshotRouteHandler)
  .openapi(postActionCreateSnapshotRoute, postActionCreateSnapshotRouteHandler)
  .openapi(getActionCreateUserRoute, getActionCreateUserRouteHandler)
  .openapi(postActionCreateUserRoute, postActionCreateUserRouteHandler)
  .openapi(getActionCreateUserGroupRoute, getActionCreateUserGroupRouteHandler)
  .openapi(postActionCreateUserGroupRoute, postActionCreateUserGroupRouteHandler)
  .openapi(
    getActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
    getActionDecreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionDecreaseNodeGroupsInGlobalReplicationGroupRoute,
    postActionDecreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionDecreaseReplicaCountRoute, getActionDecreaseReplicaCountRouteHandler)
  .openapi(postActionDecreaseReplicaCountRoute, postActionDecreaseReplicaCountRouteHandler)
  .openapi(getActionDeleteCacheClusterRoute, getActionDeleteCacheClusterRouteHandler)
  .openapi(postActionDeleteCacheClusterRoute, postActionDeleteCacheClusterRouteHandler)
  .openapi(getActionDeleteCacheParameterGroupRoute, getActionDeleteCacheParameterGroupRouteHandler)
  .openapi(
    postActionDeleteCacheParameterGroupRoute,
    postActionDeleteCacheParameterGroupRouteHandler,
  )
  .openapi(getActionDeleteCacheSecurityGroupRoute, getActionDeleteCacheSecurityGroupRouteHandler)
  .openapi(postActionDeleteCacheSecurityGroupRoute, postActionDeleteCacheSecurityGroupRouteHandler)
  .openapi(getActionDeleteCacheSubnetGroupRoute, getActionDeleteCacheSubnetGroupRouteHandler)
  .openapi(postActionDeleteCacheSubnetGroupRoute, postActionDeleteCacheSubnetGroupRouteHandler)
  .openapi(
    getActionDeleteGlobalReplicationGroupRoute,
    getActionDeleteGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionDeleteGlobalReplicationGroupRoute,
    postActionDeleteGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionDeleteReplicationGroupRoute, getActionDeleteReplicationGroupRouteHandler)
  .openapi(postActionDeleteReplicationGroupRoute, postActionDeleteReplicationGroupRouteHandler)
  .openapi(getActionDeleteSnapshotRoute, getActionDeleteSnapshotRouteHandler)
  .openapi(postActionDeleteSnapshotRoute, postActionDeleteSnapshotRouteHandler)
  .openapi(getActionDeleteUserRoute, getActionDeleteUserRouteHandler)
  .openapi(postActionDeleteUserRoute, postActionDeleteUserRouteHandler)
  .openapi(getActionDeleteUserGroupRoute, getActionDeleteUserGroupRouteHandler)
  .openapi(postActionDeleteUserGroupRoute, postActionDeleteUserGroupRouteHandler)
  .openapi(getActionDescribeCacheClustersRoute, getActionDescribeCacheClustersRouteHandler)
  .openapi(postActionDescribeCacheClustersRoute, postActionDescribeCacheClustersRouteHandler)
  .openapi(
    getActionDescribeCacheEngineVersionsRoute,
    getActionDescribeCacheEngineVersionsRouteHandler,
  )
  .openapi(
    postActionDescribeCacheEngineVersionsRoute,
    postActionDescribeCacheEngineVersionsRouteHandler,
  )
  .openapi(
    getActionDescribeCacheParameterGroupsRoute,
    getActionDescribeCacheParameterGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeCacheParameterGroupsRoute,
    postActionDescribeCacheParameterGroupsRouteHandler,
  )
  .openapi(getActionDescribeCacheParametersRoute, getActionDescribeCacheParametersRouteHandler)
  .openapi(postActionDescribeCacheParametersRoute, postActionDescribeCacheParametersRouteHandler)
  .openapi(
    getActionDescribeCacheSecurityGroupsRoute,
    getActionDescribeCacheSecurityGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeCacheSecurityGroupsRoute,
    postActionDescribeCacheSecurityGroupsRouteHandler,
  )
  .openapi(getActionDescribeCacheSubnetGroupsRoute, getActionDescribeCacheSubnetGroupsRouteHandler)
  .openapi(
    postActionDescribeCacheSubnetGroupsRoute,
    postActionDescribeCacheSubnetGroupsRouteHandler,
  )
  .openapi(
    getActionDescribeEngineDefaultParametersRoute,
    getActionDescribeEngineDefaultParametersRouteHandler,
  )
  .openapi(
    postActionDescribeEngineDefaultParametersRoute,
    postActionDescribeEngineDefaultParametersRouteHandler,
  )
  .openapi(getActionDescribeEventsRoute, getActionDescribeEventsRouteHandler)
  .openapi(postActionDescribeEventsRoute, postActionDescribeEventsRouteHandler)
  .openapi(
    getActionDescribeGlobalReplicationGroupsRoute,
    getActionDescribeGlobalReplicationGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeGlobalReplicationGroupsRoute,
    postActionDescribeGlobalReplicationGroupsRouteHandler,
  )
  .openapi(getActionDescribeReplicationGroupsRoute, getActionDescribeReplicationGroupsRouteHandler)
  .openapi(
    postActionDescribeReplicationGroupsRoute,
    postActionDescribeReplicationGroupsRouteHandler,
  )
  .openapi(
    getActionDescribeReservedCacheNodesRoute,
    getActionDescribeReservedCacheNodesRouteHandler,
  )
  .openapi(
    postActionDescribeReservedCacheNodesRoute,
    postActionDescribeReservedCacheNodesRouteHandler,
  )
  .openapi(
    getActionDescribeReservedCacheNodesOfferingsRoute,
    getActionDescribeReservedCacheNodesOfferingsRouteHandler,
  )
  .openapi(
    postActionDescribeReservedCacheNodesOfferingsRoute,
    postActionDescribeReservedCacheNodesOfferingsRouteHandler,
  )
  .openapi(getActionDescribeServiceUpdatesRoute, getActionDescribeServiceUpdatesRouteHandler)
  .openapi(postActionDescribeServiceUpdatesRoute, postActionDescribeServiceUpdatesRouteHandler)
  .openapi(getActionDescribeSnapshotsRoute, getActionDescribeSnapshotsRouteHandler)
  .openapi(postActionDescribeSnapshotsRoute, postActionDescribeSnapshotsRouteHandler)
  .openapi(getActionDescribeUpdateActionsRoute, getActionDescribeUpdateActionsRouteHandler)
  .openapi(postActionDescribeUpdateActionsRoute, postActionDescribeUpdateActionsRouteHandler)
  .openapi(getActionDescribeUserGroupsRoute, getActionDescribeUserGroupsRouteHandler)
  .openapi(postActionDescribeUserGroupsRoute, postActionDescribeUserGroupsRouteHandler)
  .openapi(getActionDescribeUsersRoute, getActionDescribeUsersRouteHandler)
  .openapi(postActionDescribeUsersRoute, postActionDescribeUsersRouteHandler)
  .openapi(
    getActionDisassociateGlobalReplicationGroupRoute,
    getActionDisassociateGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionDisassociateGlobalReplicationGroupRoute,
    postActionDisassociateGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    getActionFailoverGlobalReplicationGroupRoute,
    getActionFailoverGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionFailoverGlobalReplicationGroupRoute,
    postActionFailoverGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    getActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
    getActionIncreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionIncreaseNodeGroupsInGlobalReplicationGroupRoute,
    postActionIncreaseNodeGroupsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionIncreaseReplicaCountRoute, getActionIncreaseReplicaCountRouteHandler)
  .openapi(postActionIncreaseReplicaCountRoute, postActionIncreaseReplicaCountRouteHandler)
  .openapi(
    getActionListAllowedNodeTypeModificationsRoute,
    getActionListAllowedNodeTypeModificationsRouteHandler,
  )
  .openapi(
    postActionListAllowedNodeTypeModificationsRoute,
    postActionListAllowedNodeTypeModificationsRouteHandler,
  )
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionModifyCacheClusterRoute, getActionModifyCacheClusterRouteHandler)
  .openapi(postActionModifyCacheClusterRoute, postActionModifyCacheClusterRouteHandler)
  .openapi(getActionModifyCacheParameterGroupRoute, getActionModifyCacheParameterGroupRouteHandler)
  .openapi(
    postActionModifyCacheParameterGroupRoute,
    postActionModifyCacheParameterGroupRouteHandler,
  )
  .openapi(getActionModifyCacheSubnetGroupRoute, getActionModifyCacheSubnetGroupRouteHandler)
  .openapi(postActionModifyCacheSubnetGroupRoute, postActionModifyCacheSubnetGroupRouteHandler)
  .openapi(
    getActionModifyGlobalReplicationGroupRoute,
    getActionModifyGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionModifyGlobalReplicationGroupRoute,
    postActionModifyGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionModifyReplicationGroupRoute, getActionModifyReplicationGroupRouteHandler)
  .openapi(postActionModifyReplicationGroupRoute, postActionModifyReplicationGroupRouteHandler)
  .openapi(
    getActionModifyReplicationGroupShardConfigurationRoute,
    getActionModifyReplicationGroupShardConfigurationRouteHandler,
  )
  .openapi(
    postActionModifyReplicationGroupShardConfigurationRoute,
    postActionModifyReplicationGroupShardConfigurationRouteHandler,
  )
  .openapi(getActionModifyUserRoute, getActionModifyUserRouteHandler)
  .openapi(postActionModifyUserRoute, postActionModifyUserRouteHandler)
  .openapi(getActionModifyUserGroupRoute, getActionModifyUserGroupRouteHandler)
  .openapi(postActionModifyUserGroupRoute, postActionModifyUserGroupRouteHandler)
  .openapi(
    getActionPurchaseReservedCacheNodesOfferingRoute,
    getActionPurchaseReservedCacheNodesOfferingRouteHandler,
  )
  .openapi(
    postActionPurchaseReservedCacheNodesOfferingRoute,
    postActionPurchaseReservedCacheNodesOfferingRouteHandler,
  )
  .openapi(
    getActionRebalanceSlotsInGlobalReplicationGroupRoute,
    getActionRebalanceSlotsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(
    postActionRebalanceSlotsInGlobalReplicationGroupRoute,
    postActionRebalanceSlotsInGlobalReplicationGroupRouteHandler,
  )
  .openapi(getActionRebootCacheClusterRoute, getActionRebootCacheClusterRouteHandler)
  .openapi(postActionRebootCacheClusterRoute, postActionRebootCacheClusterRouteHandler)
  .openapi(getActionRemoveTagsFromResourceRoute, getActionRemoveTagsFromResourceRouteHandler)
  .openapi(postActionRemoveTagsFromResourceRoute, postActionRemoveTagsFromResourceRouteHandler)
  .openapi(getActionResetCacheParameterGroupRoute, getActionResetCacheParameterGroupRouteHandler)
  .openapi(postActionResetCacheParameterGroupRoute, postActionResetCacheParameterGroupRouteHandler)
  .openapi(
    getActionRevokeCacheSecurityGroupIngressRoute,
    getActionRevokeCacheSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionRevokeCacheSecurityGroupIngressRoute,
    postActionRevokeCacheSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionStartMigrationRoute, getActionStartMigrationRouteHandler)
  .openapi(postActionStartMigrationRoute, postActionStartMigrationRouteHandler)
  .openapi(getActionTestFailoverRoute, getActionTestFailoverRouteHandler)
  .openapi(postActionTestFailoverRoute, postActionTestFailoverRouteHandler)

export default app
