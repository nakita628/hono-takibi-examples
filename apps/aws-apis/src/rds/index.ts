import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddRoleToDbClusterHandler,
  actionAddRoleToDbInstanceHandler,
  actionAddSourceIdentifierToSubscriptionHandler,
  actionAddTagsToResourceHandler,
  actionApplyPendingMaintenanceActionHandler,
  actionAuthorizeDbSecurityGroupIngressHandler,
  actionBacktrackDbClusterHandler,
  actionCancelExportTaskHandler,
  actionCopyDbClusterParameterGroupHandler,
  actionCopyDbClusterSnapshotHandler,
  actionCopyDbParameterGroupHandler,
  actionCopyDbSnapshotHandler,
  actionCopyOptionGroupHandler,
  actionCreateBlueGreenDeploymentHandler,
  actionCreateCustomDbEngineVersionHandler,
  actionCreateDbClusterEndpointHandler,
  actionCreateDbClusterHandler,
  actionCreateDbClusterParameterGroupHandler,
  actionCreateDbClusterSnapshotHandler,
  actionCreateDbInstanceHandler,
  actionCreateDbInstanceReadReplicaHandler,
  actionCreateDbParameterGroupHandler,
  actionCreateDbProxyEndpointHandler,
  actionCreateDbProxyHandler,
  actionCreateDbSecurityGroupHandler,
  actionCreateDbSnapshotHandler,
  actionCreateDbSubnetGroupHandler,
  actionCreateEventSubscriptionHandler,
  actionCreateGlobalClusterHandler,
  actionCreateOptionGroupHandler,
  actionDeleteBlueGreenDeploymentHandler,
  actionDeleteCustomDbEngineVersionHandler,
  actionDeleteDbClusterAutomatedBackupHandler,
  actionDeleteDbClusterEndpointHandler,
  actionDeleteDbClusterHandler,
  actionDeleteDbClusterParameterGroupHandler,
  actionDeleteDbClusterSnapshotHandler,
  actionDeleteDbInstanceAutomatedBackupHandler,
  actionDeleteDbInstanceHandler,
  actionDeleteDbParameterGroupHandler,
  actionDeleteDbProxyEndpointHandler,
  actionDeleteDbProxyHandler,
  actionDeleteDbSecurityGroupHandler,
  actionDeleteDbSnapshotHandler,
  actionDeleteDbSubnetGroupHandler,
  actionDeleteEventSubscriptionHandler,
  actionDeleteGlobalClusterHandler,
  actionDeleteOptionGroupHandler,
  actionDeregisterDbProxyTargetsHandler,
  actionDescribeAccountAttributesHandler,
  actionDescribeBlueGreenDeploymentsHandler,
  actionDescribeCertificatesHandler,
  actionDescribeDbClusterAutomatedBackupsHandler,
  actionDescribeDbClusterBacktracksHandler,
  actionDescribeDbClusterEndpointsHandler,
  actionDescribeDbClusterParameterGroupsHandler,
  actionDescribeDbClusterParametersHandler,
  actionDescribeDbClustersHandler,
  actionDescribeDbClusterSnapshotAttributesHandler,
  actionDescribeDbClusterSnapshotsHandler,
  actionDescribeDbEngineVersionsHandler,
  actionDescribeDbInstanceAutomatedBackupsHandler,
  actionDescribeDbInstancesHandler,
  actionDescribeDbLogFilesHandler,
  actionDescribeDbParameterGroupsHandler,
  actionDescribeDbParametersHandler,
  actionDescribeDbProxiesHandler,
  actionDescribeDbProxyEndpointsHandler,
  actionDescribeDbProxyTargetGroupsHandler,
  actionDescribeDbProxyTargetsHandler,
  actionDescribeDbSecurityGroupsHandler,
  actionDescribeDbSnapshotAttributesHandler,
  actionDescribeDbSnapshotsHandler,
  actionDescribeDbSubnetGroupsHandler,
  actionDescribeEngineDefaultClusterParametersHandler,
  actionDescribeEngineDefaultParametersHandler,
  actionDescribeEventCategoriesHandler,
  actionDescribeEventsHandler,
  actionDescribeEventSubscriptionsHandler,
  actionDescribeExportTasksHandler,
  actionDescribeGlobalClustersHandler,
  actionDescribeOptionGroupOptionsHandler,
  actionDescribeOptionGroupsHandler,
  actionDescribeOrderableDbInstanceOptionsHandler,
  actionDescribePendingMaintenanceActionsHandler,
  actionDescribeReservedDbInstancesHandler,
  actionDescribeReservedDbInstancesOfferingsHandler,
  actionDescribeSourceRegionsHandler,
  actionDescribeValidDbInstanceModificationsHandler,
  actionDownloadDbLogFilePortionHandler,
  actionFailoverDbClusterHandler,
  actionFailoverGlobalClusterHandler,
  actionListTagsForResourceHandler,
  actionModifyActivityStreamHandler,
  actionModifyCertificatesHandler,
  actionModifyCurrentDbClusterCapacityHandler,
  actionModifyCustomDbEngineVersionHandler,
  actionModifyDbClusterEndpointHandler,
  actionModifyDbClusterHandler,
  actionModifyDbClusterParameterGroupHandler,
  actionModifyDbClusterSnapshotAttributeHandler,
  actionModifyDbInstanceHandler,
  actionModifyDbParameterGroupHandler,
  actionModifyDbProxyEndpointHandler,
  actionModifyDbProxyHandler,
  actionModifyDbProxyTargetGroupHandler,
  actionModifyDbSnapshotAttributeHandler,
  actionModifyDbSnapshotHandler,
  actionModifyDbSubnetGroupHandler,
  actionModifyEventSubscriptionHandler,
  actionModifyGlobalClusterHandler,
  actionModifyOptionGroupHandler,
  actionPromoteReadReplicaDbClusterHandler,
  actionPromoteReadReplicaHandler,
  actionPurchaseReservedDbInstancesOfferingHandler,
  actionRebootDbClusterHandler,
  actionRebootDbInstanceHandler,
  actionRegisterDbProxyTargetsHandler,
  actionRemoveFromGlobalClusterHandler,
  actionRemoveRoleFromDbClusterHandler,
  actionRemoveRoleFromDbInstanceHandler,
  actionRemoveSourceIdentifierFromSubscriptionHandler,
  actionRemoveTagsFromResourceHandler,
  actionResetDbClusterParameterGroupHandler,
  actionResetDbParameterGroupHandler,
  actionRestoreDbClusterFromS3Handler,
  actionRestoreDbClusterFromSnapshotHandler,
  actionRestoreDbClusterToPointInTimeHandler,
  actionRestoreDbInstanceFromDbSnapshotHandler,
  actionRestoreDbInstanceFromS3Handler,
  actionRestoreDbInstanceToPointInTimeHandler,
  actionRevokeDbSecurityGroupIngressHandler,
  actionStartActivityStreamHandler,
  actionStartDbClusterHandler,
  actionStartDbInstanceAutomatedBackupsReplicationHandler,
  actionStartDbInstanceHandler,
  actionStartExportTaskHandler,
  actionStopActivityStreamHandler,
  actionStopDbClusterHandler,
  actionStopDbInstanceAutomatedBackupsReplicationHandler,
  actionStopDbInstanceHandler,
  actionSwitchoverBlueGreenDeploymentHandler,
  actionSwitchoverReadReplicaHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddRoleToDbClusterHandler)
  .route('/', actionAddRoleToDbInstanceHandler)
  .route('/', actionAddSourceIdentifierToSubscriptionHandler)
  .route('/', actionAddTagsToResourceHandler)
  .route('/', actionApplyPendingMaintenanceActionHandler)
  .route('/', actionAuthorizeDbSecurityGroupIngressHandler)
  .route('/', actionBacktrackDbClusterHandler)
  .route('/', actionCancelExportTaskHandler)
  .route('/', actionCopyDbClusterParameterGroupHandler)
  .route('/', actionCopyDbClusterSnapshotHandler)
  .route('/', actionCopyDbParameterGroupHandler)
  .route('/', actionCopyDbSnapshotHandler)
  .route('/', actionCopyOptionGroupHandler)
  .route('/', actionCreateBlueGreenDeploymentHandler)
  .route('/', actionCreateCustomDbEngineVersionHandler)
  .route('/', actionCreateDbClusterHandler)
  .route('/', actionCreateDbClusterEndpointHandler)
  .route('/', actionCreateDbClusterParameterGroupHandler)
  .route('/', actionCreateDbClusterSnapshotHandler)
  .route('/', actionCreateDbInstanceHandler)
  .route('/', actionCreateDbInstanceReadReplicaHandler)
  .route('/', actionCreateDbParameterGroupHandler)
  .route('/', actionCreateDbProxyHandler)
  .route('/', actionCreateDbProxyEndpointHandler)
  .route('/', actionCreateDbSecurityGroupHandler)
  .route('/', actionCreateDbSnapshotHandler)
  .route('/', actionCreateDbSubnetGroupHandler)
  .route('/', actionCreateEventSubscriptionHandler)
  .route('/', actionCreateGlobalClusterHandler)
  .route('/', actionCreateOptionGroupHandler)
  .route('/', actionDeleteBlueGreenDeploymentHandler)
  .route('/', actionDeleteCustomDbEngineVersionHandler)
  .route('/', actionDeleteDbClusterHandler)
  .route('/', actionDeleteDbClusterAutomatedBackupHandler)
  .route('/', actionDeleteDbClusterEndpointHandler)
  .route('/', actionDeleteDbClusterParameterGroupHandler)
  .route('/', actionDeleteDbClusterSnapshotHandler)
  .route('/', actionDeleteDbInstanceHandler)
  .route('/', actionDeleteDbInstanceAutomatedBackupHandler)
  .route('/', actionDeleteDbParameterGroupHandler)
  .route('/', actionDeleteDbProxyHandler)
  .route('/', actionDeleteDbProxyEndpointHandler)
  .route('/', actionDeleteDbSecurityGroupHandler)
  .route('/', actionDeleteDbSnapshotHandler)
  .route('/', actionDeleteDbSubnetGroupHandler)
  .route('/', actionDeleteEventSubscriptionHandler)
  .route('/', actionDeleteGlobalClusterHandler)
  .route('/', actionDeleteOptionGroupHandler)
  .route('/', actionDeregisterDbProxyTargetsHandler)
  .route('/', actionDescribeAccountAttributesHandler)
  .route('/', actionDescribeBlueGreenDeploymentsHandler)
  .route('/', actionDescribeCertificatesHandler)
  .route('/', actionDescribeDbClusterAutomatedBackupsHandler)
  .route('/', actionDescribeDbClusterBacktracksHandler)
  .route('/', actionDescribeDbClusterEndpointsHandler)
  .route('/', actionDescribeDbClusterParameterGroupsHandler)
  .route('/', actionDescribeDbClusterParametersHandler)
  .route('/', actionDescribeDbClusterSnapshotAttributesHandler)
  .route('/', actionDescribeDbClusterSnapshotsHandler)
  .route('/', actionDescribeDbClustersHandler)
  .route('/', actionDescribeDbEngineVersionsHandler)
  .route('/', actionDescribeDbInstanceAutomatedBackupsHandler)
  .route('/', actionDescribeDbInstancesHandler)
  .route('/', actionDescribeDbLogFilesHandler)
  .route('/', actionDescribeDbParameterGroupsHandler)
  .route('/', actionDescribeDbParametersHandler)
  .route('/', actionDescribeDbProxiesHandler)
  .route('/', actionDescribeDbProxyEndpointsHandler)
  .route('/', actionDescribeDbProxyTargetGroupsHandler)
  .route('/', actionDescribeDbProxyTargetsHandler)
  .route('/', actionDescribeDbSecurityGroupsHandler)
  .route('/', actionDescribeDbSnapshotAttributesHandler)
  .route('/', actionDescribeDbSnapshotsHandler)
  .route('/', actionDescribeDbSubnetGroupsHandler)
  .route('/', actionDescribeEngineDefaultClusterParametersHandler)
  .route('/', actionDescribeEngineDefaultParametersHandler)
  .route('/', actionDescribeEventCategoriesHandler)
  .route('/', actionDescribeEventSubscriptionsHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeExportTasksHandler)
  .route('/', actionDescribeGlobalClustersHandler)
  .route('/', actionDescribeOptionGroupOptionsHandler)
  .route('/', actionDescribeOptionGroupsHandler)
  .route('/', actionDescribeOrderableDbInstanceOptionsHandler)
  .route('/', actionDescribePendingMaintenanceActionsHandler)
  .route('/', actionDescribeReservedDbInstancesHandler)
  .route('/', actionDescribeReservedDbInstancesOfferingsHandler)
  .route('/', actionDescribeSourceRegionsHandler)
  .route('/', actionDescribeValidDbInstanceModificationsHandler)
  .route('/', actionDownloadDbLogFilePortionHandler)
  .route('/', actionFailoverDbClusterHandler)
  .route('/', actionFailoverGlobalClusterHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionModifyActivityStreamHandler)
  .route('/', actionModifyCertificatesHandler)
  .route('/', actionModifyCurrentDbClusterCapacityHandler)
  .route('/', actionModifyCustomDbEngineVersionHandler)
  .route('/', actionModifyDbClusterHandler)
  .route('/', actionModifyDbClusterEndpointHandler)
  .route('/', actionModifyDbClusterParameterGroupHandler)
  .route('/', actionModifyDbClusterSnapshotAttributeHandler)
  .route('/', actionModifyDbInstanceHandler)
  .route('/', actionModifyDbParameterGroupHandler)
  .route('/', actionModifyDbProxyHandler)
  .route('/', actionModifyDbProxyEndpointHandler)
  .route('/', actionModifyDbProxyTargetGroupHandler)
  .route('/', actionModifyDbSnapshotHandler)
  .route('/', actionModifyDbSnapshotAttributeHandler)
  .route('/', actionModifyDbSubnetGroupHandler)
  .route('/', actionModifyEventSubscriptionHandler)
  .route('/', actionModifyGlobalClusterHandler)
  .route('/', actionModifyOptionGroupHandler)
  .route('/', actionPromoteReadReplicaHandler)
  .route('/', actionPromoteReadReplicaDbClusterHandler)
  .route('/', actionPurchaseReservedDbInstancesOfferingHandler)
  .route('/', actionRebootDbClusterHandler)
  .route('/', actionRebootDbInstanceHandler)
  .route('/', actionRegisterDbProxyTargetsHandler)
  .route('/', actionRemoveFromGlobalClusterHandler)
  .route('/', actionRemoveRoleFromDbClusterHandler)
  .route('/', actionRemoveRoleFromDbInstanceHandler)
  .route('/', actionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', actionRemoveTagsFromResourceHandler)
  .route('/', actionResetDbClusterParameterGroupHandler)
  .route('/', actionResetDbParameterGroupHandler)
  .route('/', actionRestoreDbClusterFromS3Handler)
  .route('/', actionRestoreDbClusterFromSnapshotHandler)
  .route('/', actionRestoreDbClusterToPointInTimeHandler)
  .route('/', actionRestoreDbInstanceFromDbSnapshotHandler)
  .route('/', actionRestoreDbInstanceFromS3Handler)
  .route('/', actionRestoreDbInstanceToPointInTimeHandler)
  .route('/', actionRevokeDbSecurityGroupIngressHandler)
  .route('/', actionStartActivityStreamHandler)
  .route('/', actionStartDbClusterHandler)
  .route('/', actionStartDbInstanceHandler)
  .route('/', actionStartDbInstanceAutomatedBackupsReplicationHandler)
  .route('/', actionStartExportTaskHandler)
  .route('/', actionStopActivityStreamHandler)
  .route('/', actionStopDbClusterHandler)
  .route('/', actionStopDbInstanceHandler)
  .route('/', actionStopDbInstanceAutomatedBackupsReplicationHandler)
  .route('/', actionSwitchoverBlueGreenDeploymentHandler)
  .route('/', actionSwitchoverReadReplicaHandler)

export default app
