import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddRoleToDbClusterHandler,
  actionAddSourceIdentifierToSubscriptionHandler,
  actionAddTagsToResourceHandler,
  actionApplyPendingMaintenanceActionHandler,
  actionCopyDbClusterParameterGroupHandler,
  actionCopyDbClusterSnapshotHandler,
  actionCopyDbParameterGroupHandler,
  actionCreateDbClusterEndpointHandler,
  actionCreateDbClusterHandler,
  actionCreateDbClusterParameterGroupHandler,
  actionCreateDbClusterSnapshotHandler,
  actionCreateDbInstanceHandler,
  actionCreateDbParameterGroupHandler,
  actionCreateDbSubnetGroupHandler,
  actionCreateEventSubscriptionHandler,
  actionCreateGlobalClusterHandler,
  actionDeleteDbClusterEndpointHandler,
  actionDeleteDbClusterHandler,
  actionDeleteDbClusterParameterGroupHandler,
  actionDeleteDbClusterSnapshotHandler,
  actionDeleteDbInstanceHandler,
  actionDeleteDbParameterGroupHandler,
  actionDeleteDbSubnetGroupHandler,
  actionDeleteEventSubscriptionHandler,
  actionDeleteGlobalClusterHandler,
  actionDescribeDbClusterEndpointsHandler,
  actionDescribeDbClusterParameterGroupsHandler,
  actionDescribeDbClusterParametersHandler,
  actionDescribeDbClustersHandler,
  actionDescribeDbClusterSnapshotAttributesHandler,
  actionDescribeDbClusterSnapshotsHandler,
  actionDescribeDbEngineVersionsHandler,
  actionDescribeDbInstancesHandler,
  actionDescribeDbParameterGroupsHandler,
  actionDescribeDbParametersHandler,
  actionDescribeDbSubnetGroupsHandler,
  actionDescribeEngineDefaultClusterParametersHandler,
  actionDescribeEngineDefaultParametersHandler,
  actionDescribeEventCategoriesHandler,
  actionDescribeEventsHandler,
  actionDescribeEventSubscriptionsHandler,
  actionDescribeGlobalClustersHandler,
  actionDescribeOrderableDbInstanceOptionsHandler,
  actionDescribePendingMaintenanceActionsHandler,
  actionDescribeValidDbInstanceModificationsHandler,
  actionFailoverDbClusterHandler,
  actionFailoverGlobalClusterHandler,
  actionListTagsForResourceHandler,
  actionModifyDbClusterEndpointHandler,
  actionModifyDbClusterHandler,
  actionModifyDbClusterParameterGroupHandler,
  actionModifyDbClusterSnapshotAttributeHandler,
  actionModifyDbInstanceHandler,
  actionModifyDbParameterGroupHandler,
  actionModifyDbSubnetGroupHandler,
  actionModifyEventSubscriptionHandler,
  actionModifyGlobalClusterHandler,
  actionPromoteReadReplicaDbClusterHandler,
  actionRebootDbInstanceHandler,
  actionRemoveFromGlobalClusterHandler,
  actionRemoveRoleFromDbClusterHandler,
  actionRemoveSourceIdentifierFromSubscriptionHandler,
  actionRemoveTagsFromResourceHandler,
  actionResetDbClusterParameterGroupHandler,
  actionResetDbParameterGroupHandler,
  actionRestoreDbClusterFromSnapshotHandler,
  actionRestoreDbClusterToPointInTimeHandler,
  actionStartDbClusterHandler,
  actionStopDbClusterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddRoleToDbClusterHandler)
  .route('/', actionAddSourceIdentifierToSubscriptionHandler)
  .route('/', actionAddTagsToResourceHandler)
  .route('/', actionApplyPendingMaintenanceActionHandler)
  .route('/', actionCopyDbClusterParameterGroupHandler)
  .route('/', actionCopyDbClusterSnapshotHandler)
  .route('/', actionCopyDbParameterGroupHandler)
  .route('/', actionCreateDbClusterHandler)
  .route('/', actionCreateDbClusterEndpointHandler)
  .route('/', actionCreateDbClusterParameterGroupHandler)
  .route('/', actionCreateDbClusterSnapshotHandler)
  .route('/', actionCreateDbInstanceHandler)
  .route('/', actionCreateDbParameterGroupHandler)
  .route('/', actionCreateDbSubnetGroupHandler)
  .route('/', actionCreateEventSubscriptionHandler)
  .route('/', actionCreateGlobalClusterHandler)
  .route('/', actionDeleteDbClusterHandler)
  .route('/', actionDeleteDbClusterEndpointHandler)
  .route('/', actionDeleteDbClusterParameterGroupHandler)
  .route('/', actionDeleteDbClusterSnapshotHandler)
  .route('/', actionDeleteDbInstanceHandler)
  .route('/', actionDeleteDbParameterGroupHandler)
  .route('/', actionDeleteDbSubnetGroupHandler)
  .route('/', actionDeleteEventSubscriptionHandler)
  .route('/', actionDeleteGlobalClusterHandler)
  .route('/', actionDescribeDbClusterEndpointsHandler)
  .route('/', actionDescribeDbClusterParameterGroupsHandler)
  .route('/', actionDescribeDbClusterParametersHandler)
  .route('/', actionDescribeDbClusterSnapshotAttributesHandler)
  .route('/', actionDescribeDbClusterSnapshotsHandler)
  .route('/', actionDescribeDbClustersHandler)
  .route('/', actionDescribeDbEngineVersionsHandler)
  .route('/', actionDescribeDbInstancesHandler)
  .route('/', actionDescribeDbParameterGroupsHandler)
  .route('/', actionDescribeDbParametersHandler)
  .route('/', actionDescribeDbSubnetGroupsHandler)
  .route('/', actionDescribeEngineDefaultClusterParametersHandler)
  .route('/', actionDescribeEngineDefaultParametersHandler)
  .route('/', actionDescribeEventCategoriesHandler)
  .route('/', actionDescribeEventSubscriptionsHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeGlobalClustersHandler)
  .route('/', actionDescribeOrderableDbInstanceOptionsHandler)
  .route('/', actionDescribePendingMaintenanceActionsHandler)
  .route('/', actionDescribeValidDbInstanceModificationsHandler)
  .route('/', actionFailoverDbClusterHandler)
  .route('/', actionFailoverGlobalClusterHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionModifyDbClusterHandler)
  .route('/', actionModifyDbClusterEndpointHandler)
  .route('/', actionModifyDbClusterParameterGroupHandler)
  .route('/', actionModifyDbClusterSnapshotAttributeHandler)
  .route('/', actionModifyDbInstanceHandler)
  .route('/', actionModifyDbParameterGroupHandler)
  .route('/', actionModifyDbSubnetGroupHandler)
  .route('/', actionModifyEventSubscriptionHandler)
  .route('/', actionModifyGlobalClusterHandler)
  .route('/', actionPromoteReadReplicaDbClusterHandler)
  .route('/', actionRebootDbInstanceHandler)
  .route('/', actionRemoveFromGlobalClusterHandler)
  .route('/', actionRemoveRoleFromDbClusterHandler)
  .route('/', actionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', actionRemoveTagsFromResourceHandler)
  .route('/', actionResetDbClusterParameterGroupHandler)
  .route('/', actionResetDbParameterGroupHandler)
  .route('/', actionRestoreDbClusterFromSnapshotHandler)
  .route('/', actionRestoreDbClusterToPointInTimeHandler)
  .route('/', actionStartDbClusterHandler)
  .route('/', actionStopDbClusterHandler)

export default app
