import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddRoleToDBClusterHandler,
  ActionAddRoleToDBInstanceHandler,
  ActionAddSourceIdentifierToSubscriptionHandler,
  ActionAddTagsToResourceHandler,
  ActionApplyPendingMaintenanceActionHandler,
  ActionAuthorizeDBSecurityGroupIngressHandler,
  ActionBacktrackDBClusterHandler,
  ActionCancelExportTaskHandler,
  ActionCopyDBClusterParameterGroupHandler,
  ActionCopyDBClusterSnapshotHandler,
  ActionCopyDBParameterGroupHandler,
  ActionCopyDBSnapshotHandler,
  ActionCopyOptionGroupHandler,
  ActionCreateBlueGreenDeploymentHandler,
  ActionCreateCustomDBEngineVersionHandler,
  ActionCreateDBClusterEndpointHandler,
  ActionCreateDBClusterHandler,
  ActionCreateDBClusterParameterGroupHandler,
  ActionCreateDBClusterSnapshotHandler,
  ActionCreateDBInstanceHandler,
  ActionCreateDBInstanceReadReplicaHandler,
  ActionCreateDBParameterGroupHandler,
  ActionCreateDBProxyEndpointHandler,
  ActionCreateDBProxyHandler,
  ActionCreateDBSecurityGroupHandler,
  ActionCreateDBSnapshotHandler,
  ActionCreateDBSubnetGroupHandler,
  ActionCreateEventSubscriptionHandler,
  ActionCreateGlobalClusterHandler,
  ActionCreateOptionGroupHandler,
  ActionDeleteBlueGreenDeploymentHandler,
  ActionDeleteCustomDBEngineVersionHandler,
  ActionDeleteDBClusterAutomatedBackupHandler,
  ActionDeleteDBClusterEndpointHandler,
  ActionDeleteDBClusterHandler,
  ActionDeleteDBClusterParameterGroupHandler,
  ActionDeleteDBClusterSnapshotHandler,
  ActionDeleteDBInstanceAutomatedBackupHandler,
  ActionDeleteDBInstanceHandler,
  ActionDeleteDBParameterGroupHandler,
  ActionDeleteDBProxyEndpointHandler,
  ActionDeleteDBProxyHandler,
  ActionDeleteDBSecurityGroupHandler,
  ActionDeleteDBSnapshotHandler,
  ActionDeleteDBSubnetGroupHandler,
  ActionDeleteEventSubscriptionHandler,
  ActionDeleteGlobalClusterHandler,
  ActionDeleteOptionGroupHandler,
  ActionDeregisterDBProxyTargetsHandler,
  ActionDescribeAccountAttributesHandler,
  ActionDescribeBlueGreenDeploymentsHandler,
  ActionDescribeCertificatesHandler,
  ActionDescribeDBClusterAutomatedBackupsHandler,
  ActionDescribeDBClusterBacktracksHandler,
  ActionDescribeDBClusterEndpointsHandler,
  ActionDescribeDBClusterParameterGroupsHandler,
  ActionDescribeDBClusterParametersHandler,
  ActionDescribeDBClustersHandler,
  ActionDescribeDBClusterSnapshotAttributesHandler,
  ActionDescribeDBClusterSnapshotsHandler,
  ActionDescribeDBEngineVersionsHandler,
  ActionDescribeDBInstanceAutomatedBackupsHandler,
  ActionDescribeDBInstancesHandler,
  ActionDescribeDBLogFilesHandler,
  ActionDescribeDBParameterGroupsHandler,
  ActionDescribeDBParametersHandler,
  ActionDescribeDBProxiesHandler,
  ActionDescribeDBProxyEndpointsHandler,
  ActionDescribeDBProxyTargetGroupsHandler,
  ActionDescribeDBProxyTargetsHandler,
  ActionDescribeDBSecurityGroupsHandler,
  ActionDescribeDBSnapshotAttributesHandler,
  ActionDescribeDBSnapshotsHandler,
  ActionDescribeDBSubnetGroupsHandler,
  ActionDescribeEngineDefaultClusterParametersHandler,
  ActionDescribeEngineDefaultParametersHandler,
  ActionDescribeEventCategoriesHandler,
  ActionDescribeEventsHandler,
  ActionDescribeEventSubscriptionsHandler,
  ActionDescribeExportTasksHandler,
  ActionDescribeGlobalClustersHandler,
  ActionDescribeOptionGroupOptionsHandler,
  ActionDescribeOptionGroupsHandler,
  ActionDescribeOrderableDBInstanceOptionsHandler,
  ActionDescribePendingMaintenanceActionsHandler,
  ActionDescribeReservedDBInstancesHandler,
  ActionDescribeReservedDBInstancesOfferingsHandler,
  ActionDescribeSourceRegionsHandler,
  ActionDescribeValidDBInstanceModificationsHandler,
  ActionDownloadDBLogFilePortionHandler,
  ActionFailoverDBClusterHandler,
  ActionFailoverGlobalClusterHandler,
  ActionListTagsForResourceHandler,
  ActionModifyActivityStreamHandler,
  ActionModifyCertificatesHandler,
  ActionModifyCurrentDBClusterCapacityHandler,
  ActionModifyCustomDBEngineVersionHandler,
  ActionModifyDBClusterEndpointHandler,
  ActionModifyDBClusterHandler,
  ActionModifyDBClusterParameterGroupHandler,
  ActionModifyDBClusterSnapshotAttributeHandler,
  ActionModifyDBInstanceHandler,
  ActionModifyDBParameterGroupHandler,
  ActionModifyDBProxyEndpointHandler,
  ActionModifyDBProxyHandler,
  ActionModifyDBProxyTargetGroupHandler,
  ActionModifyDBSnapshotAttributeHandler,
  ActionModifyDBSnapshotHandler,
  ActionModifyDBSubnetGroupHandler,
  ActionModifyEventSubscriptionHandler,
  ActionModifyGlobalClusterHandler,
  ActionModifyOptionGroupHandler,
  ActionPromoteReadReplicaDBClusterHandler,
  ActionPromoteReadReplicaHandler,
  ActionPurchaseReservedDBInstancesOfferingHandler,
  ActionRebootDBClusterHandler,
  ActionRebootDBInstanceHandler,
  ActionRegisterDBProxyTargetsHandler,
  ActionRemoveFromGlobalClusterHandler,
  ActionRemoveRoleFromDBClusterHandler,
  ActionRemoveRoleFromDBInstanceHandler,
  ActionRemoveSourceIdentifierFromSubscriptionHandler,
  ActionRemoveTagsFromResourceHandler,
  ActionResetDBClusterParameterGroupHandler,
  ActionResetDBParameterGroupHandler,
  ActionRestoreDBClusterFromS3Handler,
  ActionRestoreDBClusterFromSnapshotHandler,
  ActionRestoreDBClusterToPointInTimeHandler,
  ActionRestoreDBInstanceFromDBSnapshotHandler,
  ActionRestoreDBInstanceFromS3Handler,
  ActionRestoreDBInstanceToPointInTimeHandler,
  ActionRevokeDBSecurityGroupIngressHandler,
  ActionStartActivityStreamHandler,
  ActionStartDBClusterHandler,
  ActionStartDBInstanceAutomatedBackupsReplicationHandler,
  ActionStartDBInstanceHandler,
  ActionStartExportTaskHandler,
  ActionStopActivityStreamHandler,
  ActionStopDBClusterHandler,
  ActionStopDBInstanceAutomatedBackupsReplicationHandler,
  ActionStopDBInstanceHandler,
  ActionSwitchoverBlueGreenDeploymentHandler,
  ActionSwitchoverReadReplicaHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddRoleToDBClusterHandler)
  .route('/', ActionAddRoleToDBInstanceHandler)
  .route('/', ActionAddSourceIdentifierToSubscriptionHandler)
  .route('/', ActionAddTagsToResourceHandler)
  .route('/', ActionApplyPendingMaintenanceActionHandler)
  .route('/', ActionAuthorizeDBSecurityGroupIngressHandler)
  .route('/', ActionBacktrackDBClusterHandler)
  .route('/', ActionCancelExportTaskHandler)
  .route('/', ActionCopyDBClusterParameterGroupHandler)
  .route('/', ActionCopyDBClusterSnapshotHandler)
  .route('/', ActionCopyDBParameterGroupHandler)
  .route('/', ActionCopyDBSnapshotHandler)
  .route('/', ActionCopyOptionGroupHandler)
  .route('/', ActionCreateBlueGreenDeploymentHandler)
  .route('/', ActionCreateCustomDBEngineVersionHandler)
  .route('/', ActionCreateDBClusterHandler)
  .route('/', ActionCreateDBClusterEndpointHandler)
  .route('/', ActionCreateDBClusterParameterGroupHandler)
  .route('/', ActionCreateDBClusterSnapshotHandler)
  .route('/', ActionCreateDBInstanceHandler)
  .route('/', ActionCreateDBInstanceReadReplicaHandler)
  .route('/', ActionCreateDBParameterGroupHandler)
  .route('/', ActionCreateDBProxyHandler)
  .route('/', ActionCreateDBProxyEndpointHandler)
  .route('/', ActionCreateDBSecurityGroupHandler)
  .route('/', ActionCreateDBSnapshotHandler)
  .route('/', ActionCreateDBSubnetGroupHandler)
  .route('/', ActionCreateEventSubscriptionHandler)
  .route('/', ActionCreateGlobalClusterHandler)
  .route('/', ActionCreateOptionGroupHandler)
  .route('/', ActionDeleteBlueGreenDeploymentHandler)
  .route('/', ActionDeleteCustomDBEngineVersionHandler)
  .route('/', ActionDeleteDBClusterHandler)
  .route('/', ActionDeleteDBClusterAutomatedBackupHandler)
  .route('/', ActionDeleteDBClusterEndpointHandler)
  .route('/', ActionDeleteDBClusterParameterGroupHandler)
  .route('/', ActionDeleteDBClusterSnapshotHandler)
  .route('/', ActionDeleteDBInstanceHandler)
  .route('/', ActionDeleteDBInstanceAutomatedBackupHandler)
  .route('/', ActionDeleteDBParameterGroupHandler)
  .route('/', ActionDeleteDBProxyHandler)
  .route('/', ActionDeleteDBProxyEndpointHandler)
  .route('/', ActionDeleteDBSecurityGroupHandler)
  .route('/', ActionDeleteDBSnapshotHandler)
  .route('/', ActionDeleteDBSubnetGroupHandler)
  .route('/', ActionDeleteEventSubscriptionHandler)
  .route('/', ActionDeleteGlobalClusterHandler)
  .route('/', ActionDeleteOptionGroupHandler)
  .route('/', ActionDeregisterDBProxyTargetsHandler)
  .route('/', ActionDescribeAccountAttributesHandler)
  .route('/', ActionDescribeBlueGreenDeploymentsHandler)
  .route('/', ActionDescribeCertificatesHandler)
  .route('/', ActionDescribeDBClusterAutomatedBackupsHandler)
  .route('/', ActionDescribeDBClusterBacktracksHandler)
  .route('/', ActionDescribeDBClusterEndpointsHandler)
  .route('/', ActionDescribeDBClusterParameterGroupsHandler)
  .route('/', ActionDescribeDBClusterParametersHandler)
  .route('/', ActionDescribeDBClusterSnapshotAttributesHandler)
  .route('/', ActionDescribeDBClusterSnapshotsHandler)
  .route('/', ActionDescribeDBClustersHandler)
  .route('/', ActionDescribeDBEngineVersionsHandler)
  .route('/', ActionDescribeDBInstanceAutomatedBackupsHandler)
  .route('/', ActionDescribeDBInstancesHandler)
  .route('/', ActionDescribeDBLogFilesHandler)
  .route('/', ActionDescribeDBParameterGroupsHandler)
  .route('/', ActionDescribeDBParametersHandler)
  .route('/', ActionDescribeDBProxiesHandler)
  .route('/', ActionDescribeDBProxyEndpointsHandler)
  .route('/', ActionDescribeDBProxyTargetGroupsHandler)
  .route('/', ActionDescribeDBProxyTargetsHandler)
  .route('/', ActionDescribeDBSecurityGroupsHandler)
  .route('/', ActionDescribeDBSnapshotAttributesHandler)
  .route('/', ActionDescribeDBSnapshotsHandler)
  .route('/', ActionDescribeDBSubnetGroupsHandler)
  .route('/', ActionDescribeEngineDefaultClusterParametersHandler)
  .route('/', ActionDescribeEngineDefaultParametersHandler)
  .route('/', ActionDescribeEventCategoriesHandler)
  .route('/', ActionDescribeEventSubscriptionsHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeExportTasksHandler)
  .route('/', ActionDescribeGlobalClustersHandler)
  .route('/', ActionDescribeOptionGroupOptionsHandler)
  .route('/', ActionDescribeOptionGroupsHandler)
  .route('/', ActionDescribeOrderableDBInstanceOptionsHandler)
  .route('/', ActionDescribePendingMaintenanceActionsHandler)
  .route('/', ActionDescribeReservedDBInstancesHandler)
  .route('/', ActionDescribeReservedDBInstancesOfferingsHandler)
  .route('/', ActionDescribeSourceRegionsHandler)
  .route('/', ActionDescribeValidDBInstanceModificationsHandler)
  .route('/', ActionDownloadDBLogFilePortionHandler)
  .route('/', ActionFailoverDBClusterHandler)
  .route('/', ActionFailoverGlobalClusterHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionModifyActivityStreamHandler)
  .route('/', ActionModifyCertificatesHandler)
  .route('/', ActionModifyCurrentDBClusterCapacityHandler)
  .route('/', ActionModifyCustomDBEngineVersionHandler)
  .route('/', ActionModifyDBClusterHandler)
  .route('/', ActionModifyDBClusterEndpointHandler)
  .route('/', ActionModifyDBClusterParameterGroupHandler)
  .route('/', ActionModifyDBClusterSnapshotAttributeHandler)
  .route('/', ActionModifyDBInstanceHandler)
  .route('/', ActionModifyDBParameterGroupHandler)
  .route('/', ActionModifyDBProxyHandler)
  .route('/', ActionModifyDBProxyEndpointHandler)
  .route('/', ActionModifyDBProxyTargetGroupHandler)
  .route('/', ActionModifyDBSnapshotHandler)
  .route('/', ActionModifyDBSnapshotAttributeHandler)
  .route('/', ActionModifyDBSubnetGroupHandler)
  .route('/', ActionModifyEventSubscriptionHandler)
  .route('/', ActionModifyGlobalClusterHandler)
  .route('/', ActionModifyOptionGroupHandler)
  .route('/', ActionPromoteReadReplicaHandler)
  .route('/', ActionPromoteReadReplicaDBClusterHandler)
  .route('/', ActionPurchaseReservedDBInstancesOfferingHandler)
  .route('/', ActionRebootDBClusterHandler)
  .route('/', ActionRebootDBInstanceHandler)
  .route('/', ActionRegisterDBProxyTargetsHandler)
  .route('/', ActionRemoveFromGlobalClusterHandler)
  .route('/', ActionRemoveRoleFromDBClusterHandler)
  .route('/', ActionRemoveRoleFromDBInstanceHandler)
  .route('/', ActionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', ActionRemoveTagsFromResourceHandler)
  .route('/', ActionResetDBClusterParameterGroupHandler)
  .route('/', ActionResetDBParameterGroupHandler)
  .route('/', ActionRestoreDBClusterFromS3Handler)
  .route('/', ActionRestoreDBClusterFromSnapshotHandler)
  .route('/', ActionRestoreDBClusterToPointInTimeHandler)
  .route('/', ActionRestoreDBInstanceFromDBSnapshotHandler)
  .route('/', ActionRestoreDBInstanceFromS3Handler)
  .route('/', ActionRestoreDBInstanceToPointInTimeHandler)
  .route('/', ActionRevokeDBSecurityGroupIngressHandler)
  .route('/', ActionStartActivityStreamHandler)
  .route('/', ActionStartDBClusterHandler)
  .route('/', ActionStartDBInstanceHandler)
  .route('/', ActionStartDBInstanceAutomatedBackupsReplicationHandler)
  .route('/', ActionStartExportTaskHandler)
  .route('/', ActionStopActivityStreamHandler)
  .route('/', ActionStopDBClusterHandler)
  .route('/', ActionStopDBInstanceHandler)
  .route('/', ActionStopDBInstanceAutomatedBackupsReplicationHandler)
  .route('/', ActionSwitchoverBlueGreenDeploymentHandler)
  .route('/', ActionSwitchoverReadReplicaHandler)

export default app
