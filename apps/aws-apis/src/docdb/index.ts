import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddSourceIdentifierToSubscriptionRoute,
  getActionAddTagsToResourceRoute,
  getActionApplyPendingMaintenanceActionRoute,
  getActionCopyDBClusterParameterGroupRoute,
  getActionCopyDBClusterSnapshotRoute,
  getActionCreateDBClusterParameterGroupRoute,
  getActionCreateDBClusterRoute,
  getActionCreateDBClusterSnapshotRoute,
  getActionCreateDBInstanceRoute,
  getActionCreateDBSubnetGroupRoute,
  getActionCreateEventSubscriptionRoute,
  getActionCreateGlobalClusterRoute,
  getActionDeleteDBClusterParameterGroupRoute,
  getActionDeleteDBClusterRoute,
  getActionDeleteDBClusterSnapshotRoute,
  getActionDeleteDBInstanceRoute,
  getActionDeleteDBSubnetGroupRoute,
  getActionDeleteEventSubscriptionRoute,
  getActionDeleteGlobalClusterRoute,
  getActionDescribeCertificatesRoute,
  getActionDescribeDBClusterParameterGroupsRoute,
  getActionDescribeDBClusterParametersRoute,
  getActionDescribeDBClusterSnapshotAttributesRoute,
  getActionDescribeDBClusterSnapshotsRoute,
  getActionDescribeDBClustersRoute,
  getActionDescribeDBEngineVersionsRoute,
  getActionDescribeDBInstancesRoute,
  getActionDescribeDBSubnetGroupsRoute,
  getActionDescribeEngineDefaultClusterParametersRoute,
  getActionDescribeEventCategoriesRoute,
  getActionDescribeEventsRoute,
  getActionDescribeEventSubscriptionsRoute,
  getActionDescribeGlobalClustersRoute,
  getActionDescribeOrderableDBInstanceOptionsRoute,
  getActionDescribePendingMaintenanceActionsRoute,
  getActionFailoverDBClusterRoute,
  getActionListTagsForResourceRoute,
  getActionModifyDBClusterParameterGroupRoute,
  getActionModifyDBClusterRoute,
  getActionModifyDBClusterSnapshotAttributeRoute,
  getActionModifyDBInstanceRoute,
  getActionModifyDBSubnetGroupRoute,
  getActionModifyEventSubscriptionRoute,
  getActionModifyGlobalClusterRoute,
  getActionRebootDBInstanceRoute,
  getActionRemoveFromGlobalClusterRoute,
  getActionRemoveSourceIdentifierFromSubscriptionRoute,
  getActionRemoveTagsFromResourceRoute,
  getActionResetDBClusterParameterGroupRoute,
  getActionRestoreDBClusterFromSnapshotRoute,
  getActionRestoreDBClusterToPointInTimeRoute,
  getActionStartDBClusterRoute,
  getActionStopDBClusterRoute,
  postActionAddSourceIdentifierToSubscriptionRoute,
  postActionAddTagsToResourceRoute,
  postActionApplyPendingMaintenanceActionRoute,
  postActionCopyDBClusterParameterGroupRoute,
  postActionCopyDBClusterSnapshotRoute,
  postActionCreateDBClusterParameterGroupRoute,
  postActionCreateDBClusterRoute,
  postActionCreateDBClusterSnapshotRoute,
  postActionCreateDBInstanceRoute,
  postActionCreateDBSubnetGroupRoute,
  postActionCreateEventSubscriptionRoute,
  postActionCreateGlobalClusterRoute,
  postActionDeleteDBClusterParameterGroupRoute,
  postActionDeleteDBClusterRoute,
  postActionDeleteDBClusterSnapshotRoute,
  postActionDeleteDBInstanceRoute,
  postActionDeleteDBSubnetGroupRoute,
  postActionDeleteEventSubscriptionRoute,
  postActionDeleteGlobalClusterRoute,
  postActionDescribeCertificatesRoute,
  postActionDescribeDBClusterParameterGroupsRoute,
  postActionDescribeDBClusterParametersRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotsRoute,
  postActionDescribeDBClustersRoute,
  postActionDescribeDBEngineVersionsRoute,
  postActionDescribeDBInstancesRoute,
  postActionDescribeDBSubnetGroupsRoute,
  postActionDescribeEngineDefaultClusterParametersRoute,
  postActionDescribeEventCategoriesRoute,
  postActionDescribeEventsRoute,
  postActionDescribeEventSubscriptionsRoute,
  postActionDescribeGlobalClustersRoute,
  postActionDescribeOrderableDBInstanceOptionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
  postActionFailoverDBClusterRoute,
  postActionListTagsForResourceRoute,
  postActionModifyDBClusterParameterGroupRoute,
  postActionModifyDBClusterRoute,
  postActionModifyDBClusterSnapshotAttributeRoute,
  postActionModifyDBInstanceRoute,
  postActionModifyDBSubnetGroupRoute,
  postActionModifyEventSubscriptionRoute,
  postActionModifyGlobalClusterRoute,
  postActionRebootDBInstanceRoute,
  postActionRemoveFromGlobalClusterRoute,
  postActionRemoveSourceIdentifierFromSubscriptionRoute,
  postActionRemoveTagsFromResourceRoute,
  postActionResetDBClusterParameterGroupRoute,
  postActionRestoreDBClusterFromSnapshotRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
  postActionStartDBClusterRoute,
  postActionStopDBClusterRoute,
} from './routes'
import {
  getActionAddSourceIdentifierToSubscriptionRouteHandler,
  getActionAddTagsToResourceRouteHandler,
  getActionApplyPendingMaintenanceActionRouteHandler,
  getActionCopyDBClusterParameterGroupRouteHandler,
  getActionCopyDBClusterSnapshotRouteHandler,
  getActionCreateDBClusterParameterGroupRouteHandler,
  getActionCreateDBClusterRouteHandler,
  getActionCreateDBClusterSnapshotRouteHandler,
  getActionCreateDBInstanceRouteHandler,
  getActionCreateDBSubnetGroupRouteHandler,
  getActionCreateEventSubscriptionRouteHandler,
  getActionCreateGlobalClusterRouteHandler,
  getActionDeleteDBClusterParameterGroupRouteHandler,
  getActionDeleteDBClusterRouteHandler,
  getActionDeleteDBClusterSnapshotRouteHandler,
  getActionDeleteDBInstanceRouteHandler,
  getActionDeleteDBSubnetGroupRouteHandler,
  getActionDeleteEventSubscriptionRouteHandler,
  getActionDeleteGlobalClusterRouteHandler,
  getActionDescribeCertificatesRouteHandler,
  getActionDescribeDBClusterParameterGroupsRouteHandler,
  getActionDescribeDBClusterParametersRouteHandler,
  getActionDescribeDBClusterSnapshotAttributesRouteHandler,
  getActionDescribeDBClusterSnapshotsRouteHandler,
  getActionDescribeDBClustersRouteHandler,
  getActionDescribeDBEngineVersionsRouteHandler,
  getActionDescribeDBInstancesRouteHandler,
  getActionDescribeDBSubnetGroupsRouteHandler,
  getActionDescribeEngineDefaultClusterParametersRouteHandler,
  getActionDescribeEventCategoriesRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeEventSubscriptionsRouteHandler,
  getActionDescribeGlobalClustersRouteHandler,
  getActionDescribeOrderableDBInstanceOptionsRouteHandler,
  getActionDescribePendingMaintenanceActionsRouteHandler,
  getActionFailoverDBClusterRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionModifyDBClusterParameterGroupRouteHandler,
  getActionModifyDBClusterRouteHandler,
  getActionModifyDBClusterSnapshotAttributeRouteHandler,
  getActionModifyDBInstanceRouteHandler,
  getActionModifyDBSubnetGroupRouteHandler,
  getActionModifyEventSubscriptionRouteHandler,
  getActionModifyGlobalClusterRouteHandler,
  getActionRebootDBInstanceRouteHandler,
  getActionRemoveFromGlobalClusterRouteHandler,
  getActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  getActionRemoveTagsFromResourceRouteHandler,
  getActionResetDBClusterParameterGroupRouteHandler,
  getActionRestoreDBClusterFromSnapshotRouteHandler,
  getActionRestoreDBClusterToPointInTimeRouteHandler,
  getActionStartDBClusterRouteHandler,
  getActionStopDBClusterRouteHandler,
  postActionAddSourceIdentifierToSubscriptionRouteHandler,
  postActionAddTagsToResourceRouteHandler,
  postActionApplyPendingMaintenanceActionRouteHandler,
  postActionCopyDBClusterParameterGroupRouteHandler,
  postActionCopyDBClusterSnapshotRouteHandler,
  postActionCreateDBClusterParameterGroupRouteHandler,
  postActionCreateDBClusterRouteHandler,
  postActionCreateDBClusterSnapshotRouteHandler,
  postActionCreateDBInstanceRouteHandler,
  postActionCreateDBSubnetGroupRouteHandler,
  postActionCreateEventSubscriptionRouteHandler,
  postActionCreateGlobalClusterRouteHandler,
  postActionDeleteDBClusterParameterGroupRouteHandler,
  postActionDeleteDBClusterRouteHandler,
  postActionDeleteDBClusterSnapshotRouteHandler,
  postActionDeleteDBInstanceRouteHandler,
  postActionDeleteDBSubnetGroupRouteHandler,
  postActionDeleteEventSubscriptionRouteHandler,
  postActionDeleteGlobalClusterRouteHandler,
  postActionDescribeCertificatesRouteHandler,
  postActionDescribeDBClusterParameterGroupsRouteHandler,
  postActionDescribeDBClusterParametersRouteHandler,
  postActionDescribeDBClusterSnapshotAttributesRouteHandler,
  postActionDescribeDBClusterSnapshotsRouteHandler,
  postActionDescribeDBClustersRouteHandler,
  postActionDescribeDBEngineVersionsRouteHandler,
  postActionDescribeDBInstancesRouteHandler,
  postActionDescribeDBSubnetGroupsRouteHandler,
  postActionDescribeEngineDefaultClusterParametersRouteHandler,
  postActionDescribeEventCategoriesRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeEventSubscriptionsRouteHandler,
  postActionDescribeGlobalClustersRouteHandler,
  postActionDescribeOrderableDBInstanceOptionsRouteHandler,
  postActionDescribePendingMaintenanceActionsRouteHandler,
  postActionFailoverDBClusterRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionModifyDBClusterParameterGroupRouteHandler,
  postActionModifyDBClusterRouteHandler,
  postActionModifyDBClusterSnapshotAttributeRouteHandler,
  postActionModifyDBInstanceRouteHandler,
  postActionModifyDBSubnetGroupRouteHandler,
  postActionModifyEventSubscriptionRouteHandler,
  postActionModifyGlobalClusterRouteHandler,
  postActionRebootDBInstanceRouteHandler,
  postActionRemoveFromGlobalClusterRouteHandler,
  postActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  postActionRemoveTagsFromResourceRouteHandler,
  postActionResetDBClusterParameterGroupRouteHandler,
  postActionRestoreDBClusterFromSnapshotRouteHandler,
  postActionRestoreDBClusterToPointInTimeRouteHandler,
  postActionStartDBClusterRouteHandler,
  postActionStopDBClusterRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
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
  .openapi(getActionCreateDBClusterRoute, getActionCreateDBClusterRouteHandler)
  .openapi(postActionCreateDBClusterRoute, postActionCreateDBClusterRouteHandler)
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
  .openapi(getActionCreateDBSubnetGroupRoute, getActionCreateDBSubnetGroupRouteHandler)
  .openapi(postActionCreateDBSubnetGroupRoute, postActionCreateDBSubnetGroupRouteHandler)
  .openapi(getActionCreateEventSubscriptionRoute, getActionCreateEventSubscriptionRouteHandler)
  .openapi(postActionCreateEventSubscriptionRoute, postActionCreateEventSubscriptionRouteHandler)
  .openapi(getActionCreateGlobalClusterRoute, getActionCreateGlobalClusterRouteHandler)
  .openapi(postActionCreateGlobalClusterRoute, postActionCreateGlobalClusterRouteHandler)
  .openapi(getActionDeleteDBClusterRoute, getActionDeleteDBClusterRouteHandler)
  .openapi(postActionDeleteDBClusterRoute, postActionDeleteDBClusterRouteHandler)
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
  .openapi(getActionDeleteDBSubnetGroupRoute, getActionDeleteDBSubnetGroupRouteHandler)
  .openapi(postActionDeleteDBSubnetGroupRoute, postActionDeleteDBSubnetGroupRouteHandler)
  .openapi(getActionDeleteEventSubscriptionRoute, getActionDeleteEventSubscriptionRouteHandler)
  .openapi(postActionDeleteEventSubscriptionRoute, postActionDeleteEventSubscriptionRouteHandler)
  .openapi(getActionDeleteGlobalClusterRoute, getActionDeleteGlobalClusterRouteHandler)
  .openapi(postActionDeleteGlobalClusterRoute, postActionDeleteGlobalClusterRouteHandler)
  .openapi(getActionDescribeCertificatesRoute, getActionDescribeCertificatesRouteHandler)
  .openapi(postActionDescribeCertificatesRoute, postActionDescribeCertificatesRouteHandler)
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
  .openapi(getActionFailoverDBClusterRoute, getActionFailoverDBClusterRouteHandler)
  .openapi(postActionFailoverDBClusterRoute, postActionFailoverDBClusterRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionModifyDBClusterRoute, getActionModifyDBClusterRouteHandler)
  .openapi(postActionModifyDBClusterRoute, postActionModifyDBClusterRouteHandler)
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
  .openapi(getActionModifyDBSubnetGroupRoute, getActionModifyDBSubnetGroupRouteHandler)
  .openapi(postActionModifyDBSubnetGroupRoute, postActionModifyDBSubnetGroupRouteHandler)
  .openapi(getActionModifyEventSubscriptionRoute, getActionModifyEventSubscriptionRouteHandler)
  .openapi(postActionModifyEventSubscriptionRoute, postActionModifyEventSubscriptionRouteHandler)
  .openapi(getActionModifyGlobalClusterRoute, getActionModifyGlobalClusterRouteHandler)
  .openapi(postActionModifyGlobalClusterRoute, postActionModifyGlobalClusterRouteHandler)
  .openapi(getActionRebootDBInstanceRoute, getActionRebootDBInstanceRouteHandler)
  .openapi(postActionRebootDBInstanceRoute, postActionRebootDBInstanceRouteHandler)
  .openapi(getActionRemoveFromGlobalClusterRoute, getActionRemoveFromGlobalClusterRouteHandler)
  .openapi(postActionRemoveFromGlobalClusterRoute, postActionRemoveFromGlobalClusterRouteHandler)
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
