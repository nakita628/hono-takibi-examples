import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddRoleToDBClusterRoute,
  getActionAddSourceIdentifierToSubscriptionRoute,
  getActionAddTagsToResourceRoute,
  getActionApplyPendingMaintenanceActionRoute,
  getActionCopyDBClusterParameterGroupRoute,
  getActionCopyDBClusterSnapshotRoute,
  getActionCopyDBParameterGroupRoute,
  getActionCreateDBClusterEndpointRoute,
  getActionCreateDBClusterParameterGroupRoute,
  getActionCreateDBClusterRoute,
  getActionCreateDBClusterSnapshotRoute,
  getActionCreateDBInstanceRoute,
  getActionCreateDBParameterGroupRoute,
  getActionCreateDBSubnetGroupRoute,
  getActionCreateEventSubscriptionRoute,
  getActionCreateGlobalClusterRoute,
  getActionDeleteDBClusterEndpointRoute,
  getActionDeleteDBClusterParameterGroupRoute,
  getActionDeleteDBClusterRoute,
  getActionDeleteDBClusterSnapshotRoute,
  getActionDeleteDBInstanceRoute,
  getActionDeleteDBParameterGroupRoute,
  getActionDeleteDBSubnetGroupRoute,
  getActionDeleteEventSubscriptionRoute,
  getActionDeleteGlobalClusterRoute,
  getActionDescribeDBClusterEndpointsRoute,
  getActionDescribeDBClusterParameterGroupsRoute,
  getActionDescribeDBClusterParametersRoute,
  getActionDescribeDBClusterSnapshotAttributesRoute,
  getActionDescribeDBClusterSnapshotsRoute,
  getActionDescribeDBClustersRoute,
  getActionDescribeDBEngineVersionsRoute,
  getActionDescribeDBInstancesRoute,
  getActionDescribeDBParameterGroupsRoute,
  getActionDescribeDBParametersRoute,
  getActionDescribeDBSubnetGroupsRoute,
  getActionDescribeEngineDefaultClusterParametersRoute,
  getActionDescribeEngineDefaultParametersRoute,
  getActionDescribeEventCategoriesRoute,
  getActionDescribeEventsRoute,
  getActionDescribeEventSubscriptionsRoute,
  getActionDescribeGlobalClustersRoute,
  getActionDescribeOrderableDBInstanceOptionsRoute,
  getActionDescribePendingMaintenanceActionsRoute,
  getActionDescribeValidDBInstanceModificationsRoute,
  getActionFailoverDBClusterRoute,
  getActionFailoverGlobalClusterRoute,
  getActionListTagsForResourceRoute,
  getActionModifyDBClusterEndpointRoute,
  getActionModifyDBClusterParameterGroupRoute,
  getActionModifyDBClusterRoute,
  getActionModifyDBClusterSnapshotAttributeRoute,
  getActionModifyDBInstanceRoute,
  getActionModifyDBParameterGroupRoute,
  getActionModifyDBSubnetGroupRoute,
  getActionModifyEventSubscriptionRoute,
  getActionModifyGlobalClusterRoute,
  getActionPromoteReadReplicaDBClusterRoute,
  getActionRebootDBInstanceRoute,
  getActionRemoveFromGlobalClusterRoute,
  getActionRemoveRoleFromDBClusterRoute,
  getActionRemoveSourceIdentifierFromSubscriptionRoute,
  getActionRemoveTagsFromResourceRoute,
  getActionResetDBClusterParameterGroupRoute,
  getActionResetDBParameterGroupRoute,
  getActionRestoreDBClusterFromSnapshotRoute,
  getActionRestoreDBClusterToPointInTimeRoute,
  getActionStartDBClusterRoute,
  getActionStopDBClusterRoute,
  postActionAddRoleToDBClusterRoute,
  postActionAddSourceIdentifierToSubscriptionRoute,
  postActionAddTagsToResourceRoute,
  postActionApplyPendingMaintenanceActionRoute,
  postActionCopyDBClusterParameterGroupRoute,
  postActionCopyDBClusterSnapshotRoute,
  postActionCopyDBParameterGroupRoute,
  postActionCreateDBClusterEndpointRoute,
  postActionCreateDBClusterParameterGroupRoute,
  postActionCreateDBClusterRoute,
  postActionCreateDBClusterSnapshotRoute,
  postActionCreateDBInstanceRoute,
  postActionCreateDBParameterGroupRoute,
  postActionCreateDBSubnetGroupRoute,
  postActionCreateEventSubscriptionRoute,
  postActionCreateGlobalClusterRoute,
  postActionDeleteDBClusterEndpointRoute,
  postActionDeleteDBClusterParameterGroupRoute,
  postActionDeleteDBClusterRoute,
  postActionDeleteDBClusterSnapshotRoute,
  postActionDeleteDBInstanceRoute,
  postActionDeleteDBParameterGroupRoute,
  postActionDeleteDBSubnetGroupRoute,
  postActionDeleteEventSubscriptionRoute,
  postActionDeleteGlobalClusterRoute,
  postActionDescribeDBClusterEndpointsRoute,
  postActionDescribeDBClusterParameterGroupsRoute,
  postActionDescribeDBClusterParametersRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotsRoute,
  postActionDescribeDBClustersRoute,
  postActionDescribeDBEngineVersionsRoute,
  postActionDescribeDBInstancesRoute,
  postActionDescribeDBParameterGroupsRoute,
  postActionDescribeDBParametersRoute,
  postActionDescribeDBSubnetGroupsRoute,
  postActionDescribeEngineDefaultClusterParametersRoute,
  postActionDescribeEngineDefaultParametersRoute,
  postActionDescribeEventCategoriesRoute,
  postActionDescribeEventsRoute,
  postActionDescribeEventSubscriptionsRoute,
  postActionDescribeGlobalClustersRoute,
  postActionDescribeOrderableDBInstanceOptionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
  postActionDescribeValidDBInstanceModificationsRoute,
  postActionFailoverDBClusterRoute,
  postActionFailoverGlobalClusterRoute,
  postActionListTagsForResourceRoute,
  postActionModifyDBClusterEndpointRoute,
  postActionModifyDBClusterParameterGroupRoute,
  postActionModifyDBClusterRoute,
  postActionModifyDBClusterSnapshotAttributeRoute,
  postActionModifyDBInstanceRoute,
  postActionModifyDBParameterGroupRoute,
  postActionModifyDBSubnetGroupRoute,
  postActionModifyEventSubscriptionRoute,
  postActionModifyGlobalClusterRoute,
  postActionPromoteReadReplicaDBClusterRoute,
  postActionRebootDBInstanceRoute,
  postActionRemoveFromGlobalClusterRoute,
  postActionRemoveRoleFromDBClusterRoute,
  postActionRemoveSourceIdentifierFromSubscriptionRoute,
  postActionRemoveTagsFromResourceRoute,
  postActionResetDBClusterParameterGroupRoute,
  postActionResetDBParameterGroupRoute,
  postActionRestoreDBClusterFromSnapshotRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
  postActionStartDBClusterRoute,
  postActionStopDBClusterRoute,
} from './routes'
import {
  getActionAddRoleToDBClusterRouteHandler,
  getActionAddSourceIdentifierToSubscriptionRouteHandler,
  getActionAddTagsToResourceRouteHandler,
  getActionApplyPendingMaintenanceActionRouteHandler,
  getActionCopyDBClusterParameterGroupRouteHandler,
  getActionCopyDBClusterSnapshotRouteHandler,
  getActionCopyDBParameterGroupRouteHandler,
  getActionCreateDBClusterEndpointRouteHandler,
  getActionCreateDBClusterParameterGroupRouteHandler,
  getActionCreateDBClusterRouteHandler,
  getActionCreateDBClusterSnapshotRouteHandler,
  getActionCreateDBInstanceRouteHandler,
  getActionCreateDBParameterGroupRouteHandler,
  getActionCreateDBSubnetGroupRouteHandler,
  getActionCreateEventSubscriptionRouteHandler,
  getActionCreateGlobalClusterRouteHandler,
  getActionDeleteDBClusterEndpointRouteHandler,
  getActionDeleteDBClusterParameterGroupRouteHandler,
  getActionDeleteDBClusterRouteHandler,
  getActionDeleteDBClusterSnapshotRouteHandler,
  getActionDeleteDBInstanceRouteHandler,
  getActionDeleteDBParameterGroupRouteHandler,
  getActionDeleteDBSubnetGroupRouteHandler,
  getActionDeleteEventSubscriptionRouteHandler,
  getActionDeleteGlobalClusterRouteHandler,
  getActionDescribeDBClusterEndpointsRouteHandler,
  getActionDescribeDBClusterParameterGroupsRouteHandler,
  getActionDescribeDBClusterParametersRouteHandler,
  getActionDescribeDBClusterSnapshotAttributesRouteHandler,
  getActionDescribeDBClusterSnapshotsRouteHandler,
  getActionDescribeDBClustersRouteHandler,
  getActionDescribeDBEngineVersionsRouteHandler,
  getActionDescribeDBInstancesRouteHandler,
  getActionDescribeDBParameterGroupsRouteHandler,
  getActionDescribeDBParametersRouteHandler,
  getActionDescribeDBSubnetGroupsRouteHandler,
  getActionDescribeEngineDefaultClusterParametersRouteHandler,
  getActionDescribeEngineDefaultParametersRouteHandler,
  getActionDescribeEventCategoriesRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeEventSubscriptionsRouteHandler,
  getActionDescribeGlobalClustersRouteHandler,
  getActionDescribeOrderableDBInstanceOptionsRouteHandler,
  getActionDescribePendingMaintenanceActionsRouteHandler,
  getActionDescribeValidDBInstanceModificationsRouteHandler,
  getActionFailoverDBClusterRouteHandler,
  getActionFailoverGlobalClusterRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionModifyDBClusterEndpointRouteHandler,
  getActionModifyDBClusterParameterGroupRouteHandler,
  getActionModifyDBClusterRouteHandler,
  getActionModifyDBClusterSnapshotAttributeRouteHandler,
  getActionModifyDBInstanceRouteHandler,
  getActionModifyDBParameterGroupRouteHandler,
  getActionModifyDBSubnetGroupRouteHandler,
  getActionModifyEventSubscriptionRouteHandler,
  getActionModifyGlobalClusterRouteHandler,
  getActionPromoteReadReplicaDBClusterRouteHandler,
  getActionRebootDBInstanceRouteHandler,
  getActionRemoveFromGlobalClusterRouteHandler,
  getActionRemoveRoleFromDBClusterRouteHandler,
  getActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  getActionRemoveTagsFromResourceRouteHandler,
  getActionResetDBClusterParameterGroupRouteHandler,
  getActionResetDBParameterGroupRouteHandler,
  getActionRestoreDBClusterFromSnapshotRouteHandler,
  getActionRestoreDBClusterToPointInTimeRouteHandler,
  getActionStartDBClusterRouteHandler,
  getActionStopDBClusterRouteHandler,
  postActionAddRoleToDBClusterRouteHandler,
  postActionAddSourceIdentifierToSubscriptionRouteHandler,
  postActionAddTagsToResourceRouteHandler,
  postActionApplyPendingMaintenanceActionRouteHandler,
  postActionCopyDBClusterParameterGroupRouteHandler,
  postActionCopyDBClusterSnapshotRouteHandler,
  postActionCopyDBParameterGroupRouteHandler,
  postActionCreateDBClusterEndpointRouteHandler,
  postActionCreateDBClusterParameterGroupRouteHandler,
  postActionCreateDBClusterRouteHandler,
  postActionCreateDBClusterSnapshotRouteHandler,
  postActionCreateDBInstanceRouteHandler,
  postActionCreateDBParameterGroupRouteHandler,
  postActionCreateDBSubnetGroupRouteHandler,
  postActionCreateEventSubscriptionRouteHandler,
  postActionCreateGlobalClusterRouteHandler,
  postActionDeleteDBClusterEndpointRouteHandler,
  postActionDeleteDBClusterParameterGroupRouteHandler,
  postActionDeleteDBClusterRouteHandler,
  postActionDeleteDBClusterSnapshotRouteHandler,
  postActionDeleteDBInstanceRouteHandler,
  postActionDeleteDBParameterGroupRouteHandler,
  postActionDeleteDBSubnetGroupRouteHandler,
  postActionDeleteEventSubscriptionRouteHandler,
  postActionDeleteGlobalClusterRouteHandler,
  postActionDescribeDBClusterEndpointsRouteHandler,
  postActionDescribeDBClusterParameterGroupsRouteHandler,
  postActionDescribeDBClusterParametersRouteHandler,
  postActionDescribeDBClusterSnapshotAttributesRouteHandler,
  postActionDescribeDBClusterSnapshotsRouteHandler,
  postActionDescribeDBClustersRouteHandler,
  postActionDescribeDBEngineVersionsRouteHandler,
  postActionDescribeDBInstancesRouteHandler,
  postActionDescribeDBParameterGroupsRouteHandler,
  postActionDescribeDBParametersRouteHandler,
  postActionDescribeDBSubnetGroupsRouteHandler,
  postActionDescribeEngineDefaultClusterParametersRouteHandler,
  postActionDescribeEngineDefaultParametersRouteHandler,
  postActionDescribeEventCategoriesRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeEventSubscriptionsRouteHandler,
  postActionDescribeGlobalClustersRouteHandler,
  postActionDescribeOrderableDBInstanceOptionsRouteHandler,
  postActionDescribePendingMaintenanceActionsRouteHandler,
  postActionDescribeValidDBInstanceModificationsRouteHandler,
  postActionFailoverDBClusterRouteHandler,
  postActionFailoverGlobalClusterRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionModifyDBClusterEndpointRouteHandler,
  postActionModifyDBClusterParameterGroupRouteHandler,
  postActionModifyDBClusterRouteHandler,
  postActionModifyDBClusterSnapshotAttributeRouteHandler,
  postActionModifyDBInstanceRouteHandler,
  postActionModifyDBParameterGroupRouteHandler,
  postActionModifyDBSubnetGroupRouteHandler,
  postActionModifyEventSubscriptionRouteHandler,
  postActionModifyGlobalClusterRouteHandler,
  postActionPromoteReadReplicaDBClusterRouteHandler,
  postActionRebootDBInstanceRouteHandler,
  postActionRemoveFromGlobalClusterRouteHandler,
  postActionRemoveRoleFromDBClusterRouteHandler,
  postActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  postActionRemoveTagsFromResourceRouteHandler,
  postActionResetDBClusterParameterGroupRouteHandler,
  postActionResetDBParameterGroupRouteHandler,
  postActionRestoreDBClusterFromSnapshotRouteHandler,
  postActionRestoreDBClusterToPointInTimeRouteHandler,
  postActionStartDBClusterRouteHandler,
  postActionStopDBClusterRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddRoleToDBClusterRoute, getActionAddRoleToDBClusterRouteHandler)
  .openapi(postActionAddRoleToDBClusterRoute, postActionAddRoleToDBClusterRouteHandler)
  .openapi(
    getActionAddSourceIdentifierToSubscriptionRoute,
    getActionAddSourceIdentifierToSubscriptionRouteHandler,
  )
  .openapi(
    postActionAddSourceIdentifierToSubscriptionRoute,
    postActionAddSourceIdentifierToSubscriptionRouteHandler,
  )
  .openapi(getActionAddTagsToResourceRoute, getActionAddTagsToResourceRouteHandler)
  .openapi(postActionAddTagsToResourceRoute, postActionAddTagsToResourceRouteHandler)
  .openapi(
    getActionApplyPendingMaintenanceActionRoute,
    getActionApplyPendingMaintenanceActionRouteHandler,
  )
  .openapi(
    postActionApplyPendingMaintenanceActionRoute,
    postActionApplyPendingMaintenanceActionRouteHandler,
  )
  .openapi(
    getActionCopyDBClusterParameterGroupRoute,
    getActionCopyDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionCopyDBClusterParameterGroupRoute,
    postActionCopyDBClusterParameterGroupRouteHandler,
  )
  .openapi(getActionCopyDBClusterSnapshotRoute, getActionCopyDBClusterSnapshotRouteHandler)
  .openapi(postActionCopyDBClusterSnapshotRoute, postActionCopyDBClusterSnapshotRouteHandler)
  .openapi(getActionCopyDBParameterGroupRoute, getActionCopyDBParameterGroupRouteHandler)
  .openapi(postActionCopyDBParameterGroupRoute, postActionCopyDBParameterGroupRouteHandler)
  .openapi(getActionCreateDBClusterRoute, getActionCreateDBClusterRouteHandler)
  .openapi(postActionCreateDBClusterRoute, postActionCreateDBClusterRouteHandler)
  .openapi(getActionCreateDBClusterEndpointRoute, getActionCreateDBClusterEndpointRouteHandler)
  .openapi(postActionCreateDBClusterEndpointRoute, postActionCreateDBClusterEndpointRouteHandler)
  .openapi(
    getActionCreateDBClusterParameterGroupRoute,
    getActionCreateDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionCreateDBClusterParameterGroupRoute,
    postActionCreateDBClusterParameterGroupRouteHandler,
  )
  .openapi(getActionCreateDBClusterSnapshotRoute, getActionCreateDBClusterSnapshotRouteHandler)
  .openapi(postActionCreateDBClusterSnapshotRoute, postActionCreateDBClusterSnapshotRouteHandler)
  .openapi(getActionCreateDBInstanceRoute, getActionCreateDBInstanceRouteHandler)
  .openapi(postActionCreateDBInstanceRoute, postActionCreateDBInstanceRouteHandler)
  .openapi(getActionCreateDBParameterGroupRoute, getActionCreateDBParameterGroupRouteHandler)
  .openapi(postActionCreateDBParameterGroupRoute, postActionCreateDBParameterGroupRouteHandler)
  .openapi(getActionCreateDBSubnetGroupRoute, getActionCreateDBSubnetGroupRouteHandler)
  .openapi(postActionCreateDBSubnetGroupRoute, postActionCreateDBSubnetGroupRouteHandler)
  .openapi(getActionCreateEventSubscriptionRoute, getActionCreateEventSubscriptionRouteHandler)
  .openapi(postActionCreateEventSubscriptionRoute, postActionCreateEventSubscriptionRouteHandler)
  .openapi(getActionCreateGlobalClusterRoute, getActionCreateGlobalClusterRouteHandler)
  .openapi(postActionCreateGlobalClusterRoute, postActionCreateGlobalClusterRouteHandler)
  .openapi(getActionDeleteDBClusterRoute, getActionDeleteDBClusterRouteHandler)
  .openapi(postActionDeleteDBClusterRoute, postActionDeleteDBClusterRouteHandler)
  .openapi(getActionDeleteDBClusterEndpointRoute, getActionDeleteDBClusterEndpointRouteHandler)
  .openapi(postActionDeleteDBClusterEndpointRoute, postActionDeleteDBClusterEndpointRouteHandler)
  .openapi(
    getActionDeleteDBClusterParameterGroupRoute,
    getActionDeleteDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionDeleteDBClusterParameterGroupRoute,
    postActionDeleteDBClusterParameterGroupRouteHandler,
  )
  .openapi(getActionDeleteDBClusterSnapshotRoute, getActionDeleteDBClusterSnapshotRouteHandler)
  .openapi(postActionDeleteDBClusterSnapshotRoute, postActionDeleteDBClusterSnapshotRouteHandler)
  .openapi(getActionDeleteDBInstanceRoute, getActionDeleteDBInstanceRouteHandler)
  .openapi(postActionDeleteDBInstanceRoute, postActionDeleteDBInstanceRouteHandler)
  .openapi(getActionDeleteDBParameterGroupRoute, getActionDeleteDBParameterGroupRouteHandler)
  .openapi(postActionDeleteDBParameterGroupRoute, postActionDeleteDBParameterGroupRouteHandler)
  .openapi(getActionDeleteDBSubnetGroupRoute, getActionDeleteDBSubnetGroupRouteHandler)
  .openapi(postActionDeleteDBSubnetGroupRoute, postActionDeleteDBSubnetGroupRouteHandler)
  .openapi(getActionDeleteEventSubscriptionRoute, getActionDeleteEventSubscriptionRouteHandler)
  .openapi(postActionDeleteEventSubscriptionRoute, postActionDeleteEventSubscriptionRouteHandler)
  .openapi(getActionDeleteGlobalClusterRoute, getActionDeleteGlobalClusterRouteHandler)
  .openapi(postActionDeleteGlobalClusterRoute, postActionDeleteGlobalClusterRouteHandler)
  .openapi(
    getActionDescribeDBClusterEndpointsRoute,
    getActionDescribeDBClusterEndpointsRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterEndpointsRoute,
    postActionDescribeDBClusterEndpointsRouteHandler,
  )
  .openapi(
    getActionDescribeDBClusterParameterGroupsRoute,
    getActionDescribeDBClusterParameterGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterParameterGroupsRoute,
    postActionDescribeDBClusterParameterGroupsRouteHandler,
  )
  .openapi(
    getActionDescribeDBClusterParametersRoute,
    getActionDescribeDBClusterParametersRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterParametersRoute,
    postActionDescribeDBClusterParametersRouteHandler,
  )
  .openapi(
    getActionDescribeDBClusterSnapshotAttributesRoute,
    getActionDescribeDBClusterSnapshotAttributesRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterSnapshotAttributesRoute,
    postActionDescribeDBClusterSnapshotAttributesRouteHandler,
  )
  .openapi(
    getActionDescribeDBClusterSnapshotsRoute,
    getActionDescribeDBClusterSnapshotsRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterSnapshotsRoute,
    postActionDescribeDBClusterSnapshotsRouteHandler,
  )
  .openapi(getActionDescribeDBClustersRoute, getActionDescribeDBClustersRouteHandler)
  .openapi(postActionDescribeDBClustersRoute, postActionDescribeDBClustersRouteHandler)
  .openapi(getActionDescribeDBEngineVersionsRoute, getActionDescribeDBEngineVersionsRouteHandler)
  .openapi(postActionDescribeDBEngineVersionsRoute, postActionDescribeDBEngineVersionsRouteHandler)
  .openapi(getActionDescribeDBInstancesRoute, getActionDescribeDBInstancesRouteHandler)
  .openapi(postActionDescribeDBInstancesRoute, postActionDescribeDBInstancesRouteHandler)
  .openapi(getActionDescribeDBParameterGroupsRoute, getActionDescribeDBParameterGroupsRouteHandler)
  .openapi(
    postActionDescribeDBParameterGroupsRoute,
    postActionDescribeDBParameterGroupsRouteHandler,
  )
  .openapi(getActionDescribeDBParametersRoute, getActionDescribeDBParametersRouteHandler)
  .openapi(postActionDescribeDBParametersRoute, postActionDescribeDBParametersRouteHandler)
  .openapi(getActionDescribeDBSubnetGroupsRoute, getActionDescribeDBSubnetGroupsRouteHandler)
  .openapi(postActionDescribeDBSubnetGroupsRoute, postActionDescribeDBSubnetGroupsRouteHandler)
  .openapi(
    getActionDescribeEngineDefaultClusterParametersRoute,
    getActionDescribeEngineDefaultClusterParametersRouteHandler,
  )
  .openapi(
    postActionDescribeEngineDefaultClusterParametersRoute,
    postActionDescribeEngineDefaultClusterParametersRouteHandler,
  )
  .openapi(
    getActionDescribeEngineDefaultParametersRoute,
    getActionDescribeEngineDefaultParametersRouteHandler,
  )
  .openapi(
    postActionDescribeEngineDefaultParametersRoute,
    postActionDescribeEngineDefaultParametersRouteHandler,
  )
  .openapi(getActionDescribeEventCategoriesRoute, getActionDescribeEventCategoriesRouteHandler)
  .openapi(postActionDescribeEventCategoriesRoute, postActionDescribeEventCategoriesRouteHandler)
  .openapi(
    getActionDescribeEventSubscriptionsRoute,
    getActionDescribeEventSubscriptionsRouteHandler,
  )
  .openapi(
    postActionDescribeEventSubscriptionsRoute,
    postActionDescribeEventSubscriptionsRouteHandler,
  )
  .openapi(getActionDescribeEventsRoute, getActionDescribeEventsRouteHandler)
  .openapi(postActionDescribeEventsRoute, postActionDescribeEventsRouteHandler)
  .openapi(getActionDescribeGlobalClustersRoute, getActionDescribeGlobalClustersRouteHandler)
  .openapi(postActionDescribeGlobalClustersRoute, postActionDescribeGlobalClustersRouteHandler)
  .openapi(
    getActionDescribeOrderableDBInstanceOptionsRoute,
    getActionDescribeOrderableDBInstanceOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeOrderableDBInstanceOptionsRoute,
    postActionDescribeOrderableDBInstanceOptionsRouteHandler,
  )
  .openapi(
    getActionDescribePendingMaintenanceActionsRoute,
    getActionDescribePendingMaintenanceActionsRouteHandler,
  )
  .openapi(
    postActionDescribePendingMaintenanceActionsRoute,
    postActionDescribePendingMaintenanceActionsRouteHandler,
  )
  .openapi(
    getActionDescribeValidDBInstanceModificationsRoute,
    getActionDescribeValidDBInstanceModificationsRouteHandler,
  )
  .openapi(
    postActionDescribeValidDBInstanceModificationsRoute,
    postActionDescribeValidDBInstanceModificationsRouteHandler,
  )
  .openapi(getActionFailoverDBClusterRoute, getActionFailoverDBClusterRouteHandler)
  .openapi(postActionFailoverDBClusterRoute, postActionFailoverDBClusterRouteHandler)
  .openapi(getActionFailoverGlobalClusterRoute, getActionFailoverGlobalClusterRouteHandler)
  .openapi(postActionFailoverGlobalClusterRoute, postActionFailoverGlobalClusterRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionModifyDBClusterRoute, getActionModifyDBClusterRouteHandler)
  .openapi(postActionModifyDBClusterRoute, postActionModifyDBClusterRouteHandler)
  .openapi(getActionModifyDBClusterEndpointRoute, getActionModifyDBClusterEndpointRouteHandler)
  .openapi(postActionModifyDBClusterEndpointRoute, postActionModifyDBClusterEndpointRouteHandler)
  .openapi(
    getActionModifyDBClusterParameterGroupRoute,
    getActionModifyDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionModifyDBClusterParameterGroupRoute,
    postActionModifyDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    getActionModifyDBClusterSnapshotAttributeRoute,
    getActionModifyDBClusterSnapshotAttributeRouteHandler,
  )
  .openapi(
    postActionModifyDBClusterSnapshotAttributeRoute,
    postActionModifyDBClusterSnapshotAttributeRouteHandler,
  )
  .openapi(getActionModifyDBInstanceRoute, getActionModifyDBInstanceRouteHandler)
  .openapi(postActionModifyDBInstanceRoute, postActionModifyDBInstanceRouteHandler)
  .openapi(getActionModifyDBParameterGroupRoute, getActionModifyDBParameterGroupRouteHandler)
  .openapi(postActionModifyDBParameterGroupRoute, postActionModifyDBParameterGroupRouteHandler)
  .openapi(getActionModifyDBSubnetGroupRoute, getActionModifyDBSubnetGroupRouteHandler)
  .openapi(postActionModifyDBSubnetGroupRoute, postActionModifyDBSubnetGroupRouteHandler)
  .openapi(getActionModifyEventSubscriptionRoute, getActionModifyEventSubscriptionRouteHandler)
  .openapi(postActionModifyEventSubscriptionRoute, postActionModifyEventSubscriptionRouteHandler)
  .openapi(getActionModifyGlobalClusterRoute, getActionModifyGlobalClusterRouteHandler)
  .openapi(postActionModifyGlobalClusterRoute, postActionModifyGlobalClusterRouteHandler)
  .openapi(
    getActionPromoteReadReplicaDBClusterRoute,
    getActionPromoteReadReplicaDBClusterRouteHandler,
  )
  .openapi(
    postActionPromoteReadReplicaDBClusterRoute,
    postActionPromoteReadReplicaDBClusterRouteHandler,
  )
  .openapi(getActionRebootDBInstanceRoute, getActionRebootDBInstanceRouteHandler)
  .openapi(postActionRebootDBInstanceRoute, postActionRebootDBInstanceRouteHandler)
  .openapi(getActionRemoveFromGlobalClusterRoute, getActionRemoveFromGlobalClusterRouteHandler)
  .openapi(postActionRemoveFromGlobalClusterRoute, postActionRemoveFromGlobalClusterRouteHandler)
  .openapi(getActionRemoveRoleFromDBClusterRoute, getActionRemoveRoleFromDBClusterRouteHandler)
  .openapi(postActionRemoveRoleFromDBClusterRoute, postActionRemoveRoleFromDBClusterRouteHandler)
  .openapi(
    getActionRemoveSourceIdentifierFromSubscriptionRoute,
    getActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  )
  .openapi(
    postActionRemoveSourceIdentifierFromSubscriptionRoute,
    postActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  )
  .openapi(getActionRemoveTagsFromResourceRoute, getActionRemoveTagsFromResourceRouteHandler)
  .openapi(postActionRemoveTagsFromResourceRoute, postActionRemoveTagsFromResourceRouteHandler)
  .openapi(
    getActionResetDBClusterParameterGroupRoute,
    getActionResetDBClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionResetDBClusterParameterGroupRoute,
    postActionResetDBClusterParameterGroupRouteHandler,
  )
  .openapi(getActionResetDBParameterGroupRoute, getActionResetDBParameterGroupRouteHandler)
  .openapi(postActionResetDBParameterGroupRoute, postActionResetDBParameterGroupRouteHandler)
  .openapi(
    getActionRestoreDBClusterFromSnapshotRoute,
    getActionRestoreDBClusterFromSnapshotRouteHandler,
  )
  .openapi(
    postActionRestoreDBClusterFromSnapshotRoute,
    postActionRestoreDBClusterFromSnapshotRouteHandler,
  )
  .openapi(
    getActionRestoreDBClusterToPointInTimeRoute,
    getActionRestoreDBClusterToPointInTimeRouteHandler,
  )
  .openapi(
    postActionRestoreDBClusterToPointInTimeRoute,
    postActionRestoreDBClusterToPointInTimeRouteHandler,
  )
  .openapi(getActionStartDBClusterRoute, getActionStartDBClusterRouteHandler)
  .openapi(postActionStartDBClusterRoute, postActionStartDBClusterRouteHandler)
  .openapi(getActionStopDBClusterRoute, getActionStopDBClusterRouteHandler)
  .openapi(postActionStopDBClusterRoute, postActionStopDBClusterRouteHandler)

export default app
