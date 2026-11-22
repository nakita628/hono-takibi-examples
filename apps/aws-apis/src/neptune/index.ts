import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddRoleToDBClusterHandler,
  ActionAddSourceIdentifierToSubscriptionHandler,
  ActionAddTagsToResourceHandler,
  ActionApplyPendingMaintenanceActionHandler,
  ActionCopyDBClusterParameterGroupHandler,
  ActionCopyDBClusterSnapshotHandler,
  ActionCopyDBParameterGroupHandler,
  ActionCreateDBClusterEndpointHandler,
  ActionCreateDBClusterHandler,
  ActionCreateDBClusterParameterGroupHandler,
  ActionCreateDBClusterSnapshotHandler,
  ActionCreateDBInstanceHandler,
  ActionCreateDBParameterGroupHandler,
  ActionCreateDBSubnetGroupHandler,
  ActionCreateEventSubscriptionHandler,
  ActionCreateGlobalClusterHandler,
  ActionDeleteDBClusterEndpointHandler,
  ActionDeleteDBClusterHandler,
  ActionDeleteDBClusterParameterGroupHandler,
  ActionDeleteDBClusterSnapshotHandler,
  ActionDeleteDBInstanceHandler,
  ActionDeleteDBParameterGroupHandler,
  ActionDeleteDBSubnetGroupHandler,
  ActionDeleteEventSubscriptionHandler,
  ActionDeleteGlobalClusterHandler,
  ActionDescribeDBClusterEndpointsHandler,
  ActionDescribeDBClusterParameterGroupsHandler,
  ActionDescribeDBClusterParametersHandler,
  ActionDescribeDBClustersHandler,
  ActionDescribeDBClusterSnapshotAttributesHandler,
  ActionDescribeDBClusterSnapshotsHandler,
  ActionDescribeDBEngineVersionsHandler,
  ActionDescribeDBInstancesHandler,
  ActionDescribeDBParameterGroupsHandler,
  ActionDescribeDBParametersHandler,
  ActionDescribeDBSubnetGroupsHandler,
  ActionDescribeEngineDefaultClusterParametersHandler,
  ActionDescribeEngineDefaultParametersHandler,
  ActionDescribeEventCategoriesHandler,
  ActionDescribeEventsHandler,
  ActionDescribeEventSubscriptionsHandler,
  ActionDescribeGlobalClustersHandler,
  ActionDescribeOrderableDBInstanceOptionsHandler,
  ActionDescribePendingMaintenanceActionsHandler,
  ActionDescribeValidDBInstanceModificationsHandler,
  ActionFailoverDBClusterHandler,
  ActionFailoverGlobalClusterHandler,
  ActionListTagsForResourceHandler,
  ActionModifyDBClusterEndpointHandler,
  ActionModifyDBClusterHandler,
  ActionModifyDBClusterParameterGroupHandler,
  ActionModifyDBClusterSnapshotAttributeHandler,
  ActionModifyDBInstanceHandler,
  ActionModifyDBParameterGroupHandler,
  ActionModifyDBSubnetGroupHandler,
  ActionModifyEventSubscriptionHandler,
  ActionModifyGlobalClusterHandler,
  ActionPromoteReadReplicaDBClusterHandler,
  ActionRebootDBInstanceHandler,
  ActionRemoveFromGlobalClusterHandler,
  ActionRemoveRoleFromDBClusterHandler,
  ActionRemoveSourceIdentifierFromSubscriptionHandler,
  ActionRemoveTagsFromResourceHandler,
  ActionResetDBClusterParameterGroupHandler,
  ActionResetDBParameterGroupHandler,
  ActionRestoreDBClusterFromSnapshotHandler,
  ActionRestoreDBClusterToPointInTimeHandler,
  ActionStartDBClusterHandler,
  ActionStopDBClusterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddRoleToDBClusterHandler)
  .route('/', ActionAddSourceIdentifierToSubscriptionHandler)
  .route('/', ActionAddTagsToResourceHandler)
  .route('/', ActionApplyPendingMaintenanceActionHandler)
  .route('/', ActionCopyDBClusterParameterGroupHandler)
  .route('/', ActionCopyDBClusterSnapshotHandler)
  .route('/', ActionCopyDBParameterGroupHandler)
  .route('/', ActionCreateDBClusterHandler)
  .route('/', ActionCreateDBClusterEndpointHandler)
  .route('/', ActionCreateDBClusterParameterGroupHandler)
  .route('/', ActionCreateDBClusterSnapshotHandler)
  .route('/', ActionCreateDBInstanceHandler)
  .route('/', ActionCreateDBParameterGroupHandler)
  .route('/', ActionCreateDBSubnetGroupHandler)
  .route('/', ActionCreateEventSubscriptionHandler)
  .route('/', ActionCreateGlobalClusterHandler)
  .route('/', ActionDeleteDBClusterHandler)
  .route('/', ActionDeleteDBClusterEndpointHandler)
  .route('/', ActionDeleteDBClusterParameterGroupHandler)
  .route('/', ActionDeleteDBClusterSnapshotHandler)
  .route('/', ActionDeleteDBInstanceHandler)
  .route('/', ActionDeleteDBParameterGroupHandler)
  .route('/', ActionDeleteDBSubnetGroupHandler)
  .route('/', ActionDeleteEventSubscriptionHandler)
  .route('/', ActionDeleteGlobalClusterHandler)
  .route('/', ActionDescribeDBClusterEndpointsHandler)
  .route('/', ActionDescribeDBClusterParameterGroupsHandler)
  .route('/', ActionDescribeDBClusterParametersHandler)
  .route('/', ActionDescribeDBClusterSnapshotAttributesHandler)
  .route('/', ActionDescribeDBClusterSnapshotsHandler)
  .route('/', ActionDescribeDBClustersHandler)
  .route('/', ActionDescribeDBEngineVersionsHandler)
  .route('/', ActionDescribeDBInstancesHandler)
  .route('/', ActionDescribeDBParameterGroupsHandler)
  .route('/', ActionDescribeDBParametersHandler)
  .route('/', ActionDescribeDBSubnetGroupsHandler)
  .route('/', ActionDescribeEngineDefaultClusterParametersHandler)
  .route('/', ActionDescribeEngineDefaultParametersHandler)
  .route('/', ActionDescribeEventCategoriesHandler)
  .route('/', ActionDescribeEventSubscriptionsHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeGlobalClustersHandler)
  .route('/', ActionDescribeOrderableDBInstanceOptionsHandler)
  .route('/', ActionDescribePendingMaintenanceActionsHandler)
  .route('/', ActionDescribeValidDBInstanceModificationsHandler)
  .route('/', ActionFailoverDBClusterHandler)
  .route('/', ActionFailoverGlobalClusterHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionModifyDBClusterHandler)
  .route('/', ActionModifyDBClusterEndpointHandler)
  .route('/', ActionModifyDBClusterParameterGroupHandler)
  .route('/', ActionModifyDBClusterSnapshotAttributeHandler)
  .route('/', ActionModifyDBInstanceHandler)
  .route('/', ActionModifyDBParameterGroupHandler)
  .route('/', ActionModifyDBSubnetGroupHandler)
  .route('/', ActionModifyEventSubscriptionHandler)
  .route('/', ActionModifyGlobalClusterHandler)
  .route('/', ActionPromoteReadReplicaDBClusterHandler)
  .route('/', ActionRebootDBInstanceHandler)
  .route('/', ActionRemoveFromGlobalClusterHandler)
  .route('/', ActionRemoveRoleFromDBClusterHandler)
  .route('/', ActionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', ActionRemoveTagsFromResourceHandler)
  .route('/', ActionResetDBClusterParameterGroupHandler)
  .route('/', ActionResetDBParameterGroupHandler)
  .route('/', ActionRestoreDBClusterFromSnapshotHandler)
  .route('/', ActionRestoreDBClusterToPointInTimeHandler)
  .route('/', ActionStartDBClusterHandler)
  .route('/', ActionStopDBClusterHandler)

export default app
