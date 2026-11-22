import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddSourceIdentifierToSubscriptionHandler,
  ActionAddTagsToResourceHandler,
  ActionApplyPendingMaintenanceActionHandler,
  ActionCopyDBClusterParameterGroupHandler,
  ActionCopyDBClusterSnapshotHandler,
  ActionCreateDBClusterHandler,
  ActionCreateDBClusterParameterGroupHandler,
  ActionCreateDBClusterSnapshotHandler,
  ActionCreateDBInstanceHandler,
  ActionCreateDBSubnetGroupHandler,
  ActionCreateEventSubscriptionHandler,
  ActionCreateGlobalClusterHandler,
  ActionDeleteDBClusterHandler,
  ActionDeleteDBClusterParameterGroupHandler,
  ActionDeleteDBClusterSnapshotHandler,
  ActionDeleteDBInstanceHandler,
  ActionDeleteDBSubnetGroupHandler,
  ActionDeleteEventSubscriptionHandler,
  ActionDeleteGlobalClusterHandler,
  ActionDescribeCertificatesHandler,
  ActionDescribeDBClusterParameterGroupsHandler,
  ActionDescribeDBClusterParametersHandler,
  ActionDescribeDBClustersHandler,
  ActionDescribeDBClusterSnapshotAttributesHandler,
  ActionDescribeDBClusterSnapshotsHandler,
  ActionDescribeDBEngineVersionsHandler,
  ActionDescribeDBInstancesHandler,
  ActionDescribeDBSubnetGroupsHandler,
  ActionDescribeEngineDefaultClusterParametersHandler,
  ActionDescribeEventCategoriesHandler,
  ActionDescribeEventsHandler,
  ActionDescribeEventSubscriptionsHandler,
  ActionDescribeGlobalClustersHandler,
  ActionDescribeOrderableDBInstanceOptionsHandler,
  ActionDescribePendingMaintenanceActionsHandler,
  ActionFailoverDBClusterHandler,
  ActionListTagsForResourceHandler,
  ActionModifyDBClusterHandler,
  ActionModifyDBClusterParameterGroupHandler,
  ActionModifyDBClusterSnapshotAttributeHandler,
  ActionModifyDBInstanceHandler,
  ActionModifyDBSubnetGroupHandler,
  ActionModifyEventSubscriptionHandler,
  ActionModifyGlobalClusterHandler,
  ActionRebootDBInstanceHandler,
  ActionRemoveFromGlobalClusterHandler,
  ActionRemoveSourceIdentifierFromSubscriptionHandler,
  ActionRemoveTagsFromResourceHandler,
  ActionResetDBClusterParameterGroupHandler,
  ActionRestoreDBClusterFromSnapshotHandler,
  ActionRestoreDBClusterToPointInTimeHandler,
  ActionStartDBClusterHandler,
  ActionStopDBClusterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddSourceIdentifierToSubscriptionHandler)
  .route('/', ActionAddTagsToResourceHandler)
  .route('/', ActionApplyPendingMaintenanceActionHandler)
  .route('/', ActionCopyDBClusterParameterGroupHandler)
  .route('/', ActionCopyDBClusterSnapshotHandler)
  .route('/', ActionCreateDBClusterHandler)
  .route('/', ActionCreateDBClusterParameterGroupHandler)
  .route('/', ActionCreateDBClusterSnapshotHandler)
  .route('/', ActionCreateDBInstanceHandler)
  .route('/', ActionCreateDBSubnetGroupHandler)
  .route('/', ActionCreateEventSubscriptionHandler)
  .route('/', ActionCreateGlobalClusterHandler)
  .route('/', ActionDeleteDBClusterHandler)
  .route('/', ActionDeleteDBClusterParameterGroupHandler)
  .route('/', ActionDeleteDBClusterSnapshotHandler)
  .route('/', ActionDeleteDBInstanceHandler)
  .route('/', ActionDeleteDBSubnetGroupHandler)
  .route('/', ActionDeleteEventSubscriptionHandler)
  .route('/', ActionDeleteGlobalClusterHandler)
  .route('/', ActionDescribeCertificatesHandler)
  .route('/', ActionDescribeDBClusterParameterGroupsHandler)
  .route('/', ActionDescribeDBClusterParametersHandler)
  .route('/', ActionDescribeDBClusterSnapshotAttributesHandler)
  .route('/', ActionDescribeDBClusterSnapshotsHandler)
  .route('/', ActionDescribeDBClustersHandler)
  .route('/', ActionDescribeDBEngineVersionsHandler)
  .route('/', ActionDescribeDBInstancesHandler)
  .route('/', ActionDescribeDBSubnetGroupsHandler)
  .route('/', ActionDescribeEngineDefaultClusterParametersHandler)
  .route('/', ActionDescribeEventCategoriesHandler)
  .route('/', ActionDescribeEventSubscriptionsHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeGlobalClustersHandler)
  .route('/', ActionDescribeOrderableDBInstanceOptionsHandler)
  .route('/', ActionDescribePendingMaintenanceActionsHandler)
  .route('/', ActionFailoverDBClusterHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionModifyDBClusterHandler)
  .route('/', ActionModifyDBClusterParameterGroupHandler)
  .route('/', ActionModifyDBClusterSnapshotAttributeHandler)
  .route('/', ActionModifyDBInstanceHandler)
  .route('/', ActionModifyDBSubnetGroupHandler)
  .route('/', ActionModifyEventSubscriptionHandler)
  .route('/', ActionModifyGlobalClusterHandler)
  .route('/', ActionRebootDBInstanceHandler)
  .route('/', ActionRemoveFromGlobalClusterHandler)
  .route('/', ActionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', ActionRemoveTagsFromResourceHandler)
  .route('/', ActionResetDBClusterParameterGroupHandler)
  .route('/', ActionRestoreDBClusterFromSnapshotHandler)
  .route('/', ActionRestoreDBClusterToPointInTimeHandler)
  .route('/', ActionStartDBClusterHandler)
  .route('/', ActionStopDBClusterHandler)

export default app
