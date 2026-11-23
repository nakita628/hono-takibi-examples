import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddRoleToDBClusterRoute,
  getActionAddRoleToDBInstanceRoute,
  getActionAddSourceIdentifierToSubscriptionRoute,
  getActionAddTagsToResourceRoute,
  getActionApplyPendingMaintenanceActionRoute,
  getActionAuthorizeDBSecurityGroupIngressRoute,
  getActionBacktrackDBClusterRoute,
  getActionCancelExportTaskRoute,
  getActionCopyDBClusterParameterGroupRoute,
  getActionCopyDBClusterSnapshotRoute,
  getActionCopyDBParameterGroupRoute,
  getActionCopyDBSnapshotRoute,
  getActionCopyOptionGroupRoute,
  getActionCreateBlueGreenDeploymentRoute,
  getActionCreateCustomDBEngineVersionRoute,
  getActionCreateDBClusterEndpointRoute,
  getActionCreateDBClusterParameterGroupRoute,
  getActionCreateDBClusterRoute,
  getActionCreateDBClusterSnapshotRoute,
  getActionCreateDBInstanceReadReplicaRoute,
  getActionCreateDBInstanceRoute,
  getActionCreateDBParameterGroupRoute,
  getActionCreateDBProxyEndpointRoute,
  getActionCreateDBProxyRoute,
  getActionCreateDBSecurityGroupRoute,
  getActionCreateDBSnapshotRoute,
  getActionCreateDBSubnetGroupRoute,
  getActionCreateEventSubscriptionRoute,
  getActionCreateGlobalClusterRoute,
  getActionCreateOptionGroupRoute,
  getActionDeleteBlueGreenDeploymentRoute,
  getActionDeleteCustomDBEngineVersionRoute,
  getActionDeleteDBClusterAutomatedBackupRoute,
  getActionDeleteDBClusterEndpointRoute,
  getActionDeleteDBClusterParameterGroupRoute,
  getActionDeleteDBClusterRoute,
  getActionDeleteDBClusterSnapshotRoute,
  getActionDeleteDBInstanceAutomatedBackupRoute,
  getActionDeleteDBInstanceRoute,
  getActionDeleteDBParameterGroupRoute,
  getActionDeleteDBProxyEndpointRoute,
  getActionDeleteDBProxyRoute,
  getActionDeleteDBSecurityGroupRoute,
  getActionDeleteDBSnapshotRoute,
  getActionDeleteDBSubnetGroupRoute,
  getActionDeleteEventSubscriptionRoute,
  getActionDeleteGlobalClusterRoute,
  getActionDeleteOptionGroupRoute,
  getActionDeregisterDBProxyTargetsRoute,
  getActionDescribeAccountAttributesRoute,
  getActionDescribeBlueGreenDeploymentsRoute,
  getActionDescribeCertificatesRoute,
  getActionDescribeDBClusterAutomatedBackupsRoute,
  getActionDescribeDBClusterBacktracksRoute,
  getActionDescribeDBClusterEndpointsRoute,
  getActionDescribeDBClusterParameterGroupsRoute,
  getActionDescribeDBClusterParametersRoute,
  getActionDescribeDBClusterSnapshotAttributesRoute,
  getActionDescribeDBClusterSnapshotsRoute,
  getActionDescribeDBClustersRoute,
  getActionDescribeDBEngineVersionsRoute,
  getActionDescribeDBInstanceAutomatedBackupsRoute,
  getActionDescribeDBInstancesRoute,
  getActionDescribeDBLogFilesRoute,
  getActionDescribeDBParameterGroupsRoute,
  getActionDescribeDBParametersRoute,
  getActionDescribeDBProxiesRoute,
  getActionDescribeDBProxyEndpointsRoute,
  getActionDescribeDBProxyTargetGroupsRoute,
  getActionDescribeDBProxyTargetsRoute,
  getActionDescribeDBSecurityGroupsRoute,
  getActionDescribeDBSnapshotAttributesRoute,
  getActionDescribeDBSnapshotsRoute,
  getActionDescribeDBSubnetGroupsRoute,
  getActionDescribeEngineDefaultClusterParametersRoute,
  getActionDescribeEngineDefaultParametersRoute,
  getActionDescribeEventCategoriesRoute,
  getActionDescribeEventsRoute,
  getActionDescribeEventSubscriptionsRoute,
  getActionDescribeExportTasksRoute,
  getActionDescribeGlobalClustersRoute,
  getActionDescribeOptionGroupOptionsRoute,
  getActionDescribeOptionGroupsRoute,
  getActionDescribeOrderableDBInstanceOptionsRoute,
  getActionDescribePendingMaintenanceActionsRoute,
  getActionDescribeReservedDBInstancesOfferingsRoute,
  getActionDescribeReservedDBInstancesRoute,
  getActionDescribeSourceRegionsRoute,
  getActionDescribeValidDBInstanceModificationsRoute,
  getActionDownloadDBLogFilePortionRoute,
  getActionFailoverDBClusterRoute,
  getActionFailoverGlobalClusterRoute,
  getActionListTagsForResourceRoute,
  getActionModifyActivityStreamRoute,
  getActionModifyCertificatesRoute,
  getActionModifyCurrentDBClusterCapacityRoute,
  getActionModifyCustomDBEngineVersionRoute,
  getActionModifyDBClusterEndpointRoute,
  getActionModifyDBClusterParameterGroupRoute,
  getActionModifyDBClusterRoute,
  getActionModifyDBClusterSnapshotAttributeRoute,
  getActionModifyDBInstanceRoute,
  getActionModifyDBParameterGroupRoute,
  getActionModifyDBProxyEndpointRoute,
  getActionModifyDBProxyRoute,
  getActionModifyDBProxyTargetGroupRoute,
  getActionModifyDBSnapshotAttributeRoute,
  getActionModifyDBSnapshotRoute,
  getActionModifyDBSubnetGroupRoute,
  getActionModifyEventSubscriptionRoute,
  getActionModifyGlobalClusterRoute,
  getActionModifyOptionGroupRoute,
  getActionPromoteReadReplicaDBClusterRoute,
  getActionPromoteReadReplicaRoute,
  getActionPurchaseReservedDBInstancesOfferingRoute,
  getActionRebootDBClusterRoute,
  getActionRebootDBInstanceRoute,
  getActionRegisterDBProxyTargetsRoute,
  getActionRemoveFromGlobalClusterRoute,
  getActionRemoveRoleFromDBClusterRoute,
  getActionRemoveRoleFromDBInstanceRoute,
  getActionRemoveSourceIdentifierFromSubscriptionRoute,
  getActionRemoveTagsFromResourceRoute,
  getActionResetDBClusterParameterGroupRoute,
  getActionResetDBParameterGroupRoute,
  getActionRestoreDBClusterFromS3Route,
  getActionRestoreDBClusterFromSnapshotRoute,
  getActionRestoreDBClusterToPointInTimeRoute,
  getActionRestoreDBInstanceFromDBSnapshotRoute,
  getActionRestoreDBInstanceFromS3Route,
  getActionRestoreDBInstanceToPointInTimeRoute,
  getActionRevokeDBSecurityGroupIngressRoute,
  getActionStartActivityStreamRoute,
  getActionStartDBClusterRoute,
  getActionStartDBInstanceAutomatedBackupsReplicationRoute,
  getActionStartDBInstanceRoute,
  getActionStartExportTaskRoute,
  getActionStopActivityStreamRoute,
  getActionStopDBClusterRoute,
  getActionStopDBInstanceAutomatedBackupsReplicationRoute,
  getActionStopDBInstanceRoute,
  getActionSwitchoverBlueGreenDeploymentRoute,
  getActionSwitchoverReadReplicaRoute,
  postActionAddRoleToDBClusterRoute,
  postActionAddRoleToDBInstanceRoute,
  postActionAddSourceIdentifierToSubscriptionRoute,
  postActionAddTagsToResourceRoute,
  postActionApplyPendingMaintenanceActionRoute,
  postActionAuthorizeDBSecurityGroupIngressRoute,
  postActionBacktrackDBClusterRoute,
  postActionCancelExportTaskRoute,
  postActionCopyDBClusterParameterGroupRoute,
  postActionCopyDBClusterSnapshotRoute,
  postActionCopyDBParameterGroupRoute,
  postActionCopyDBSnapshotRoute,
  postActionCopyOptionGroupRoute,
  postActionCreateBlueGreenDeploymentRoute,
  postActionCreateCustomDBEngineVersionRoute,
  postActionCreateDBClusterEndpointRoute,
  postActionCreateDBClusterParameterGroupRoute,
  postActionCreateDBClusterRoute,
  postActionCreateDBClusterSnapshotRoute,
  postActionCreateDBInstanceReadReplicaRoute,
  postActionCreateDBInstanceRoute,
  postActionCreateDBParameterGroupRoute,
  postActionCreateDBProxyEndpointRoute,
  postActionCreateDBProxyRoute,
  postActionCreateDBSecurityGroupRoute,
  postActionCreateDBSnapshotRoute,
  postActionCreateDBSubnetGroupRoute,
  postActionCreateEventSubscriptionRoute,
  postActionCreateGlobalClusterRoute,
  postActionCreateOptionGroupRoute,
  postActionDeleteBlueGreenDeploymentRoute,
  postActionDeleteCustomDBEngineVersionRoute,
  postActionDeleteDBClusterAutomatedBackupRoute,
  postActionDeleteDBClusterEndpointRoute,
  postActionDeleteDBClusterParameterGroupRoute,
  postActionDeleteDBClusterRoute,
  postActionDeleteDBClusterSnapshotRoute,
  postActionDeleteDBInstanceAutomatedBackupRoute,
  postActionDeleteDBInstanceRoute,
  postActionDeleteDBParameterGroupRoute,
  postActionDeleteDBProxyEndpointRoute,
  postActionDeleteDBProxyRoute,
  postActionDeleteDBSecurityGroupRoute,
  postActionDeleteDBSnapshotRoute,
  postActionDeleteDBSubnetGroupRoute,
  postActionDeleteEventSubscriptionRoute,
  postActionDeleteGlobalClusterRoute,
  postActionDeleteOptionGroupRoute,
  postActionDeregisterDBProxyTargetsRoute,
  postActionDescribeAccountAttributesRoute,
  postActionDescribeBlueGreenDeploymentsRoute,
  postActionDescribeCertificatesRoute,
  postActionDescribeDBClusterAutomatedBackupsRoute,
  postActionDescribeDBClusterBacktracksRoute,
  postActionDescribeDBClusterEndpointsRoute,
  postActionDescribeDBClusterParameterGroupsRoute,
  postActionDescribeDBClusterParametersRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotsRoute,
  postActionDescribeDBClustersRoute,
  postActionDescribeDBEngineVersionsRoute,
  postActionDescribeDBInstanceAutomatedBackupsRoute,
  postActionDescribeDBInstancesRoute,
  postActionDescribeDBLogFilesRoute,
  postActionDescribeDBParameterGroupsRoute,
  postActionDescribeDBParametersRoute,
  postActionDescribeDBProxiesRoute,
  postActionDescribeDBProxyEndpointsRoute,
  postActionDescribeDBProxyTargetGroupsRoute,
  postActionDescribeDBProxyTargetsRoute,
  postActionDescribeDBSecurityGroupsRoute,
  postActionDescribeDBSnapshotAttributesRoute,
  postActionDescribeDBSnapshotsRoute,
  postActionDescribeDBSubnetGroupsRoute,
  postActionDescribeEngineDefaultClusterParametersRoute,
  postActionDescribeEngineDefaultParametersRoute,
  postActionDescribeEventCategoriesRoute,
  postActionDescribeEventsRoute,
  postActionDescribeEventSubscriptionsRoute,
  postActionDescribeExportTasksRoute,
  postActionDescribeGlobalClustersRoute,
  postActionDescribeOptionGroupOptionsRoute,
  postActionDescribeOptionGroupsRoute,
  postActionDescribeOrderableDBInstanceOptionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
  postActionDescribeReservedDBInstancesOfferingsRoute,
  postActionDescribeReservedDBInstancesRoute,
  postActionDescribeSourceRegionsRoute,
  postActionDescribeValidDBInstanceModificationsRoute,
  postActionDownloadDBLogFilePortionRoute,
  postActionFailoverDBClusterRoute,
  postActionFailoverGlobalClusterRoute,
  postActionListTagsForResourceRoute,
  postActionModifyActivityStreamRoute,
  postActionModifyCertificatesRoute,
  postActionModifyCurrentDBClusterCapacityRoute,
  postActionModifyCustomDBEngineVersionRoute,
  postActionModifyDBClusterEndpointRoute,
  postActionModifyDBClusterParameterGroupRoute,
  postActionModifyDBClusterRoute,
  postActionModifyDBClusterSnapshotAttributeRoute,
  postActionModifyDBInstanceRoute,
  postActionModifyDBParameterGroupRoute,
  postActionModifyDBProxyEndpointRoute,
  postActionModifyDBProxyRoute,
  postActionModifyDBProxyTargetGroupRoute,
  postActionModifyDBSnapshotAttributeRoute,
  postActionModifyDBSnapshotRoute,
  postActionModifyDBSubnetGroupRoute,
  postActionModifyEventSubscriptionRoute,
  postActionModifyGlobalClusterRoute,
  postActionModifyOptionGroupRoute,
  postActionPromoteReadReplicaDBClusterRoute,
  postActionPromoteReadReplicaRoute,
  postActionPurchaseReservedDBInstancesOfferingRoute,
  postActionRebootDBClusterRoute,
  postActionRebootDBInstanceRoute,
  postActionRegisterDBProxyTargetsRoute,
  postActionRemoveFromGlobalClusterRoute,
  postActionRemoveRoleFromDBClusterRoute,
  postActionRemoveRoleFromDBInstanceRoute,
  postActionRemoveSourceIdentifierFromSubscriptionRoute,
  postActionRemoveTagsFromResourceRoute,
  postActionResetDBClusterParameterGroupRoute,
  postActionResetDBParameterGroupRoute,
  postActionRestoreDBClusterFromS3Route,
  postActionRestoreDBClusterFromSnapshotRoute,
  postActionRestoreDBClusterToPointInTimeRoute,
  postActionRestoreDBInstanceFromDBSnapshotRoute,
  postActionRestoreDBInstanceFromS3Route,
  postActionRestoreDBInstanceToPointInTimeRoute,
  postActionRevokeDBSecurityGroupIngressRoute,
  postActionStartActivityStreamRoute,
  postActionStartDBClusterRoute,
  postActionStartDBInstanceAutomatedBackupsReplicationRoute,
  postActionStartDBInstanceRoute,
  postActionStartExportTaskRoute,
  postActionStopActivityStreamRoute,
  postActionStopDBClusterRoute,
  postActionStopDBInstanceAutomatedBackupsReplicationRoute,
  postActionStopDBInstanceRoute,
  postActionSwitchoverBlueGreenDeploymentRoute,
  postActionSwitchoverReadReplicaRoute,
} from './routes'
import {
  getActionAddRoleToDBClusterRouteHandler,
  getActionAddRoleToDBInstanceRouteHandler,
  getActionAddSourceIdentifierToSubscriptionRouteHandler,
  getActionAddTagsToResourceRouteHandler,
  getActionApplyPendingMaintenanceActionRouteHandler,
  getActionAuthorizeDBSecurityGroupIngressRouteHandler,
  getActionBacktrackDBClusterRouteHandler,
  getActionCancelExportTaskRouteHandler,
  getActionCopyDBClusterParameterGroupRouteHandler,
  getActionCopyDBClusterSnapshotRouteHandler,
  getActionCopyDBParameterGroupRouteHandler,
  getActionCopyDBSnapshotRouteHandler,
  getActionCopyOptionGroupRouteHandler,
  getActionCreateBlueGreenDeploymentRouteHandler,
  getActionCreateCustomDBEngineVersionRouteHandler,
  getActionCreateDBClusterEndpointRouteHandler,
  getActionCreateDBClusterParameterGroupRouteHandler,
  getActionCreateDBClusterRouteHandler,
  getActionCreateDBClusterSnapshotRouteHandler,
  getActionCreateDBInstanceReadReplicaRouteHandler,
  getActionCreateDBInstanceRouteHandler,
  getActionCreateDBParameterGroupRouteHandler,
  getActionCreateDBProxyEndpointRouteHandler,
  getActionCreateDBProxyRouteHandler,
  getActionCreateDBSecurityGroupRouteHandler,
  getActionCreateDBSnapshotRouteHandler,
  getActionCreateDBSubnetGroupRouteHandler,
  getActionCreateEventSubscriptionRouteHandler,
  getActionCreateGlobalClusterRouteHandler,
  getActionCreateOptionGroupRouteHandler,
  getActionDeleteBlueGreenDeploymentRouteHandler,
  getActionDeleteCustomDBEngineVersionRouteHandler,
  getActionDeleteDBClusterAutomatedBackupRouteHandler,
  getActionDeleteDBClusterEndpointRouteHandler,
  getActionDeleteDBClusterParameterGroupRouteHandler,
  getActionDeleteDBClusterRouteHandler,
  getActionDeleteDBClusterSnapshotRouteHandler,
  getActionDeleteDBInstanceAutomatedBackupRouteHandler,
  getActionDeleteDBInstanceRouteHandler,
  getActionDeleteDBParameterGroupRouteHandler,
  getActionDeleteDBProxyEndpointRouteHandler,
  getActionDeleteDBProxyRouteHandler,
  getActionDeleteDBSecurityGroupRouteHandler,
  getActionDeleteDBSnapshotRouteHandler,
  getActionDeleteDBSubnetGroupRouteHandler,
  getActionDeleteEventSubscriptionRouteHandler,
  getActionDeleteGlobalClusterRouteHandler,
  getActionDeleteOptionGroupRouteHandler,
  getActionDeregisterDBProxyTargetsRouteHandler,
  getActionDescribeAccountAttributesRouteHandler,
  getActionDescribeBlueGreenDeploymentsRouteHandler,
  getActionDescribeCertificatesRouteHandler,
  getActionDescribeDBClusterAutomatedBackupsRouteHandler,
  getActionDescribeDBClusterBacktracksRouteHandler,
  getActionDescribeDBClusterEndpointsRouteHandler,
  getActionDescribeDBClusterParameterGroupsRouteHandler,
  getActionDescribeDBClusterParametersRouteHandler,
  getActionDescribeDBClusterSnapshotAttributesRouteHandler,
  getActionDescribeDBClusterSnapshotsRouteHandler,
  getActionDescribeDBClustersRouteHandler,
  getActionDescribeDBEngineVersionsRouteHandler,
  getActionDescribeDBInstanceAutomatedBackupsRouteHandler,
  getActionDescribeDBInstancesRouteHandler,
  getActionDescribeDBLogFilesRouteHandler,
  getActionDescribeDBParameterGroupsRouteHandler,
  getActionDescribeDBParametersRouteHandler,
  getActionDescribeDBProxiesRouteHandler,
  getActionDescribeDBProxyEndpointsRouteHandler,
  getActionDescribeDBProxyTargetGroupsRouteHandler,
  getActionDescribeDBProxyTargetsRouteHandler,
  getActionDescribeDBSecurityGroupsRouteHandler,
  getActionDescribeDBSnapshotAttributesRouteHandler,
  getActionDescribeDBSnapshotsRouteHandler,
  getActionDescribeDBSubnetGroupsRouteHandler,
  getActionDescribeEngineDefaultClusterParametersRouteHandler,
  getActionDescribeEngineDefaultParametersRouteHandler,
  getActionDescribeEventCategoriesRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeEventSubscriptionsRouteHandler,
  getActionDescribeExportTasksRouteHandler,
  getActionDescribeGlobalClustersRouteHandler,
  getActionDescribeOptionGroupOptionsRouteHandler,
  getActionDescribeOptionGroupsRouteHandler,
  getActionDescribeOrderableDBInstanceOptionsRouteHandler,
  getActionDescribePendingMaintenanceActionsRouteHandler,
  getActionDescribeReservedDBInstancesOfferingsRouteHandler,
  getActionDescribeReservedDBInstancesRouteHandler,
  getActionDescribeSourceRegionsRouteHandler,
  getActionDescribeValidDBInstanceModificationsRouteHandler,
  getActionDownloadDBLogFilePortionRouteHandler,
  getActionFailoverDBClusterRouteHandler,
  getActionFailoverGlobalClusterRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionModifyActivityStreamRouteHandler,
  getActionModifyCertificatesRouteHandler,
  getActionModifyCurrentDBClusterCapacityRouteHandler,
  getActionModifyCustomDBEngineVersionRouteHandler,
  getActionModifyDBClusterEndpointRouteHandler,
  getActionModifyDBClusterParameterGroupRouteHandler,
  getActionModifyDBClusterRouteHandler,
  getActionModifyDBClusterSnapshotAttributeRouteHandler,
  getActionModifyDBInstanceRouteHandler,
  getActionModifyDBParameterGroupRouteHandler,
  getActionModifyDBProxyEndpointRouteHandler,
  getActionModifyDBProxyRouteHandler,
  getActionModifyDBProxyTargetGroupRouteHandler,
  getActionModifyDBSnapshotAttributeRouteHandler,
  getActionModifyDBSnapshotRouteHandler,
  getActionModifyDBSubnetGroupRouteHandler,
  getActionModifyEventSubscriptionRouteHandler,
  getActionModifyGlobalClusterRouteHandler,
  getActionModifyOptionGroupRouteHandler,
  getActionPromoteReadReplicaDBClusterRouteHandler,
  getActionPromoteReadReplicaRouteHandler,
  getActionPurchaseReservedDBInstancesOfferingRouteHandler,
  getActionRebootDBClusterRouteHandler,
  getActionRebootDBInstanceRouteHandler,
  getActionRegisterDBProxyTargetsRouteHandler,
  getActionRemoveFromGlobalClusterRouteHandler,
  getActionRemoveRoleFromDBClusterRouteHandler,
  getActionRemoveRoleFromDBInstanceRouteHandler,
  getActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  getActionRemoveTagsFromResourceRouteHandler,
  getActionResetDBClusterParameterGroupRouteHandler,
  getActionResetDBParameterGroupRouteHandler,
  getActionRestoreDBClusterFromS3RouteHandler,
  getActionRestoreDBClusterFromSnapshotRouteHandler,
  getActionRestoreDBClusterToPointInTimeRouteHandler,
  getActionRestoreDBInstanceFromDBSnapshotRouteHandler,
  getActionRestoreDBInstanceFromS3RouteHandler,
  getActionRestoreDBInstanceToPointInTimeRouteHandler,
  getActionRevokeDBSecurityGroupIngressRouteHandler,
  getActionStartActivityStreamRouteHandler,
  getActionStartDBClusterRouteHandler,
  getActionStartDBInstanceAutomatedBackupsReplicationRouteHandler,
  getActionStartDBInstanceRouteHandler,
  getActionStartExportTaskRouteHandler,
  getActionStopActivityStreamRouteHandler,
  getActionStopDBClusterRouteHandler,
  getActionStopDBInstanceAutomatedBackupsReplicationRouteHandler,
  getActionStopDBInstanceRouteHandler,
  getActionSwitchoverBlueGreenDeploymentRouteHandler,
  getActionSwitchoverReadReplicaRouteHandler,
  postActionAddRoleToDBClusterRouteHandler,
  postActionAddRoleToDBInstanceRouteHandler,
  postActionAddSourceIdentifierToSubscriptionRouteHandler,
  postActionAddTagsToResourceRouteHandler,
  postActionApplyPendingMaintenanceActionRouteHandler,
  postActionAuthorizeDBSecurityGroupIngressRouteHandler,
  postActionBacktrackDBClusterRouteHandler,
  postActionCancelExportTaskRouteHandler,
  postActionCopyDBClusterParameterGroupRouteHandler,
  postActionCopyDBClusterSnapshotRouteHandler,
  postActionCopyDBParameterGroupRouteHandler,
  postActionCopyDBSnapshotRouteHandler,
  postActionCopyOptionGroupRouteHandler,
  postActionCreateBlueGreenDeploymentRouteHandler,
  postActionCreateCustomDBEngineVersionRouteHandler,
  postActionCreateDBClusterEndpointRouteHandler,
  postActionCreateDBClusterParameterGroupRouteHandler,
  postActionCreateDBClusterRouteHandler,
  postActionCreateDBClusterSnapshotRouteHandler,
  postActionCreateDBInstanceReadReplicaRouteHandler,
  postActionCreateDBInstanceRouteHandler,
  postActionCreateDBParameterGroupRouteHandler,
  postActionCreateDBProxyEndpointRouteHandler,
  postActionCreateDBProxyRouteHandler,
  postActionCreateDBSecurityGroupRouteHandler,
  postActionCreateDBSnapshotRouteHandler,
  postActionCreateDBSubnetGroupRouteHandler,
  postActionCreateEventSubscriptionRouteHandler,
  postActionCreateGlobalClusterRouteHandler,
  postActionCreateOptionGroupRouteHandler,
  postActionDeleteBlueGreenDeploymentRouteHandler,
  postActionDeleteCustomDBEngineVersionRouteHandler,
  postActionDeleteDBClusterAutomatedBackupRouteHandler,
  postActionDeleteDBClusterEndpointRouteHandler,
  postActionDeleteDBClusterParameterGroupRouteHandler,
  postActionDeleteDBClusterRouteHandler,
  postActionDeleteDBClusterSnapshotRouteHandler,
  postActionDeleteDBInstanceAutomatedBackupRouteHandler,
  postActionDeleteDBInstanceRouteHandler,
  postActionDeleteDBParameterGroupRouteHandler,
  postActionDeleteDBProxyEndpointRouteHandler,
  postActionDeleteDBProxyRouteHandler,
  postActionDeleteDBSecurityGroupRouteHandler,
  postActionDeleteDBSnapshotRouteHandler,
  postActionDeleteDBSubnetGroupRouteHandler,
  postActionDeleteEventSubscriptionRouteHandler,
  postActionDeleteGlobalClusterRouteHandler,
  postActionDeleteOptionGroupRouteHandler,
  postActionDeregisterDBProxyTargetsRouteHandler,
  postActionDescribeAccountAttributesRouteHandler,
  postActionDescribeBlueGreenDeploymentsRouteHandler,
  postActionDescribeCertificatesRouteHandler,
  postActionDescribeDBClusterAutomatedBackupsRouteHandler,
  postActionDescribeDBClusterBacktracksRouteHandler,
  postActionDescribeDBClusterEndpointsRouteHandler,
  postActionDescribeDBClusterParameterGroupsRouteHandler,
  postActionDescribeDBClusterParametersRouteHandler,
  postActionDescribeDBClusterSnapshotAttributesRouteHandler,
  postActionDescribeDBClusterSnapshotsRouteHandler,
  postActionDescribeDBClustersRouteHandler,
  postActionDescribeDBEngineVersionsRouteHandler,
  postActionDescribeDBInstanceAutomatedBackupsRouteHandler,
  postActionDescribeDBInstancesRouteHandler,
  postActionDescribeDBLogFilesRouteHandler,
  postActionDescribeDBParameterGroupsRouteHandler,
  postActionDescribeDBParametersRouteHandler,
  postActionDescribeDBProxiesRouteHandler,
  postActionDescribeDBProxyEndpointsRouteHandler,
  postActionDescribeDBProxyTargetGroupsRouteHandler,
  postActionDescribeDBProxyTargetsRouteHandler,
  postActionDescribeDBSecurityGroupsRouteHandler,
  postActionDescribeDBSnapshotAttributesRouteHandler,
  postActionDescribeDBSnapshotsRouteHandler,
  postActionDescribeDBSubnetGroupsRouteHandler,
  postActionDescribeEngineDefaultClusterParametersRouteHandler,
  postActionDescribeEngineDefaultParametersRouteHandler,
  postActionDescribeEventCategoriesRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeEventSubscriptionsRouteHandler,
  postActionDescribeExportTasksRouteHandler,
  postActionDescribeGlobalClustersRouteHandler,
  postActionDescribeOptionGroupOptionsRouteHandler,
  postActionDescribeOptionGroupsRouteHandler,
  postActionDescribeOrderableDBInstanceOptionsRouteHandler,
  postActionDescribePendingMaintenanceActionsRouteHandler,
  postActionDescribeReservedDBInstancesOfferingsRouteHandler,
  postActionDescribeReservedDBInstancesRouteHandler,
  postActionDescribeSourceRegionsRouteHandler,
  postActionDescribeValidDBInstanceModificationsRouteHandler,
  postActionDownloadDBLogFilePortionRouteHandler,
  postActionFailoverDBClusterRouteHandler,
  postActionFailoverGlobalClusterRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionModifyActivityStreamRouteHandler,
  postActionModifyCertificatesRouteHandler,
  postActionModifyCurrentDBClusterCapacityRouteHandler,
  postActionModifyCustomDBEngineVersionRouteHandler,
  postActionModifyDBClusterEndpointRouteHandler,
  postActionModifyDBClusterParameterGroupRouteHandler,
  postActionModifyDBClusterRouteHandler,
  postActionModifyDBClusterSnapshotAttributeRouteHandler,
  postActionModifyDBInstanceRouteHandler,
  postActionModifyDBParameterGroupRouteHandler,
  postActionModifyDBProxyEndpointRouteHandler,
  postActionModifyDBProxyRouteHandler,
  postActionModifyDBProxyTargetGroupRouteHandler,
  postActionModifyDBSnapshotAttributeRouteHandler,
  postActionModifyDBSnapshotRouteHandler,
  postActionModifyDBSubnetGroupRouteHandler,
  postActionModifyEventSubscriptionRouteHandler,
  postActionModifyGlobalClusterRouteHandler,
  postActionModifyOptionGroupRouteHandler,
  postActionPromoteReadReplicaDBClusterRouteHandler,
  postActionPromoteReadReplicaRouteHandler,
  postActionPurchaseReservedDBInstancesOfferingRouteHandler,
  postActionRebootDBClusterRouteHandler,
  postActionRebootDBInstanceRouteHandler,
  postActionRegisterDBProxyTargetsRouteHandler,
  postActionRemoveFromGlobalClusterRouteHandler,
  postActionRemoveRoleFromDBClusterRouteHandler,
  postActionRemoveRoleFromDBInstanceRouteHandler,
  postActionRemoveSourceIdentifierFromSubscriptionRouteHandler,
  postActionRemoveTagsFromResourceRouteHandler,
  postActionResetDBClusterParameterGroupRouteHandler,
  postActionResetDBParameterGroupRouteHandler,
  postActionRestoreDBClusterFromS3RouteHandler,
  postActionRestoreDBClusterFromSnapshotRouteHandler,
  postActionRestoreDBClusterToPointInTimeRouteHandler,
  postActionRestoreDBInstanceFromDBSnapshotRouteHandler,
  postActionRestoreDBInstanceFromS3RouteHandler,
  postActionRestoreDBInstanceToPointInTimeRouteHandler,
  postActionRevokeDBSecurityGroupIngressRouteHandler,
  postActionStartActivityStreamRouteHandler,
  postActionStartDBClusterRouteHandler,
  postActionStartDBInstanceAutomatedBackupsReplicationRouteHandler,
  postActionStartDBInstanceRouteHandler,
  postActionStartExportTaskRouteHandler,
  postActionStopActivityStreamRouteHandler,
  postActionStopDBClusterRouteHandler,
  postActionStopDBInstanceAutomatedBackupsReplicationRouteHandler,
  postActionStopDBInstanceRouteHandler,
  postActionSwitchoverBlueGreenDeploymentRouteHandler,
  postActionSwitchoverReadReplicaRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddRoleToDBClusterRoute, getActionAddRoleToDBClusterRouteHandler)
  .openapi(postActionAddRoleToDBClusterRoute, postActionAddRoleToDBClusterRouteHandler)
  .openapi(getActionAddRoleToDBInstanceRoute, getActionAddRoleToDBInstanceRouteHandler)
  .openapi(postActionAddRoleToDBInstanceRoute, postActionAddRoleToDBInstanceRouteHandler)
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
    getActionAuthorizeDBSecurityGroupIngressRoute,
    getActionAuthorizeDBSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionAuthorizeDBSecurityGroupIngressRoute,
    postActionAuthorizeDBSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionBacktrackDBClusterRoute, getActionBacktrackDBClusterRouteHandler)
  .openapi(postActionBacktrackDBClusterRoute, postActionBacktrackDBClusterRouteHandler)
  .openapi(getActionCancelExportTaskRoute, getActionCancelExportTaskRouteHandler)
  .openapi(postActionCancelExportTaskRoute, postActionCancelExportTaskRouteHandler)
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
  .openapi(getActionCopyDBSnapshotRoute, getActionCopyDBSnapshotRouteHandler)
  .openapi(postActionCopyDBSnapshotRoute, postActionCopyDBSnapshotRouteHandler)
  .openapi(getActionCopyOptionGroupRoute, getActionCopyOptionGroupRouteHandler)
  .openapi(postActionCopyOptionGroupRoute, postActionCopyOptionGroupRouteHandler)
  .openapi(getActionCreateBlueGreenDeploymentRoute, getActionCreateBlueGreenDeploymentRouteHandler)
  .openapi(
    postActionCreateBlueGreenDeploymentRoute,
    postActionCreateBlueGreenDeploymentRouteHandler,
  )
  .openapi(
    getActionCreateCustomDBEngineVersionRoute,
    getActionCreateCustomDBEngineVersionRouteHandler,
  )
  .openapi(
    postActionCreateCustomDBEngineVersionRoute,
    postActionCreateCustomDBEngineVersionRouteHandler,
  )
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
  .openapi(
    getActionCreateDBInstanceReadReplicaRoute,
    getActionCreateDBInstanceReadReplicaRouteHandler,
  )
  .openapi(
    postActionCreateDBInstanceReadReplicaRoute,
    postActionCreateDBInstanceReadReplicaRouteHandler,
  )
  .openapi(getActionCreateDBParameterGroupRoute, getActionCreateDBParameterGroupRouteHandler)
  .openapi(postActionCreateDBParameterGroupRoute, postActionCreateDBParameterGroupRouteHandler)
  .openapi(getActionCreateDBProxyRoute, getActionCreateDBProxyRouteHandler)
  .openapi(postActionCreateDBProxyRoute, postActionCreateDBProxyRouteHandler)
  .openapi(getActionCreateDBProxyEndpointRoute, getActionCreateDBProxyEndpointRouteHandler)
  .openapi(postActionCreateDBProxyEndpointRoute, postActionCreateDBProxyEndpointRouteHandler)
  .openapi(getActionCreateDBSecurityGroupRoute, getActionCreateDBSecurityGroupRouteHandler)
  .openapi(postActionCreateDBSecurityGroupRoute, postActionCreateDBSecurityGroupRouteHandler)
  .openapi(getActionCreateDBSnapshotRoute, getActionCreateDBSnapshotRouteHandler)
  .openapi(postActionCreateDBSnapshotRoute, postActionCreateDBSnapshotRouteHandler)
  .openapi(getActionCreateDBSubnetGroupRoute, getActionCreateDBSubnetGroupRouteHandler)
  .openapi(postActionCreateDBSubnetGroupRoute, postActionCreateDBSubnetGroupRouteHandler)
  .openapi(getActionCreateEventSubscriptionRoute, getActionCreateEventSubscriptionRouteHandler)
  .openapi(postActionCreateEventSubscriptionRoute, postActionCreateEventSubscriptionRouteHandler)
  .openapi(getActionCreateGlobalClusterRoute, getActionCreateGlobalClusterRouteHandler)
  .openapi(postActionCreateGlobalClusterRoute, postActionCreateGlobalClusterRouteHandler)
  .openapi(getActionCreateOptionGroupRoute, getActionCreateOptionGroupRouteHandler)
  .openapi(postActionCreateOptionGroupRoute, postActionCreateOptionGroupRouteHandler)
  .openapi(getActionDeleteBlueGreenDeploymentRoute, getActionDeleteBlueGreenDeploymentRouteHandler)
  .openapi(
    postActionDeleteBlueGreenDeploymentRoute,
    postActionDeleteBlueGreenDeploymentRouteHandler,
  )
  .openapi(
    getActionDeleteCustomDBEngineVersionRoute,
    getActionDeleteCustomDBEngineVersionRouteHandler,
  )
  .openapi(
    postActionDeleteCustomDBEngineVersionRoute,
    postActionDeleteCustomDBEngineVersionRouteHandler,
  )
  .openapi(getActionDeleteDBClusterRoute, getActionDeleteDBClusterRouteHandler)
  .openapi(postActionDeleteDBClusterRoute, postActionDeleteDBClusterRouteHandler)
  .openapi(
    getActionDeleteDBClusterAutomatedBackupRoute,
    getActionDeleteDBClusterAutomatedBackupRouteHandler,
  )
  .openapi(
    postActionDeleteDBClusterAutomatedBackupRoute,
    postActionDeleteDBClusterAutomatedBackupRouteHandler,
  )
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
  .openapi(
    getActionDeleteDBInstanceAutomatedBackupRoute,
    getActionDeleteDBInstanceAutomatedBackupRouteHandler,
  )
  .openapi(
    postActionDeleteDBInstanceAutomatedBackupRoute,
    postActionDeleteDBInstanceAutomatedBackupRouteHandler,
  )
  .openapi(getActionDeleteDBParameterGroupRoute, getActionDeleteDBParameterGroupRouteHandler)
  .openapi(postActionDeleteDBParameterGroupRoute, postActionDeleteDBParameterGroupRouteHandler)
  .openapi(getActionDeleteDBProxyRoute, getActionDeleteDBProxyRouteHandler)
  .openapi(postActionDeleteDBProxyRoute, postActionDeleteDBProxyRouteHandler)
  .openapi(getActionDeleteDBProxyEndpointRoute, getActionDeleteDBProxyEndpointRouteHandler)
  .openapi(postActionDeleteDBProxyEndpointRoute, postActionDeleteDBProxyEndpointRouteHandler)
  .openapi(getActionDeleteDBSecurityGroupRoute, getActionDeleteDBSecurityGroupRouteHandler)
  .openapi(postActionDeleteDBSecurityGroupRoute, postActionDeleteDBSecurityGroupRouteHandler)
  .openapi(getActionDeleteDBSnapshotRoute, getActionDeleteDBSnapshotRouteHandler)
  .openapi(postActionDeleteDBSnapshotRoute, postActionDeleteDBSnapshotRouteHandler)
  .openapi(getActionDeleteDBSubnetGroupRoute, getActionDeleteDBSubnetGroupRouteHandler)
  .openapi(postActionDeleteDBSubnetGroupRoute, postActionDeleteDBSubnetGroupRouteHandler)
  .openapi(getActionDeleteEventSubscriptionRoute, getActionDeleteEventSubscriptionRouteHandler)
  .openapi(postActionDeleteEventSubscriptionRoute, postActionDeleteEventSubscriptionRouteHandler)
  .openapi(getActionDeleteGlobalClusterRoute, getActionDeleteGlobalClusterRouteHandler)
  .openapi(postActionDeleteGlobalClusterRoute, postActionDeleteGlobalClusterRouteHandler)
  .openapi(getActionDeleteOptionGroupRoute, getActionDeleteOptionGroupRouteHandler)
  .openapi(postActionDeleteOptionGroupRoute, postActionDeleteOptionGroupRouteHandler)
  .openapi(getActionDeregisterDBProxyTargetsRoute, getActionDeregisterDBProxyTargetsRouteHandler)
  .openapi(postActionDeregisterDBProxyTargetsRoute, postActionDeregisterDBProxyTargetsRouteHandler)
  .openapi(getActionDescribeAccountAttributesRoute, getActionDescribeAccountAttributesRouteHandler)
  .openapi(
    postActionDescribeAccountAttributesRoute,
    postActionDescribeAccountAttributesRouteHandler,
  )
  .openapi(
    getActionDescribeBlueGreenDeploymentsRoute,
    getActionDescribeBlueGreenDeploymentsRouteHandler,
  )
  .openapi(
    postActionDescribeBlueGreenDeploymentsRoute,
    postActionDescribeBlueGreenDeploymentsRouteHandler,
  )
  .openapi(getActionDescribeCertificatesRoute, getActionDescribeCertificatesRouteHandler)
  .openapi(postActionDescribeCertificatesRoute, postActionDescribeCertificatesRouteHandler)
  .openapi(
    getActionDescribeDBClusterAutomatedBackupsRoute,
    getActionDescribeDBClusterAutomatedBackupsRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterAutomatedBackupsRoute,
    postActionDescribeDBClusterAutomatedBackupsRouteHandler,
  )
  .openapi(
    getActionDescribeDBClusterBacktracksRoute,
    getActionDescribeDBClusterBacktracksRouteHandler,
  )
  .openapi(
    postActionDescribeDBClusterBacktracksRoute,
    postActionDescribeDBClusterBacktracksRouteHandler,
  )
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
  .openapi(
    getActionDescribeDBInstanceAutomatedBackupsRoute,
    getActionDescribeDBInstanceAutomatedBackupsRouteHandler,
  )
  .openapi(
    postActionDescribeDBInstanceAutomatedBackupsRoute,
    postActionDescribeDBInstanceAutomatedBackupsRouteHandler,
  )
  .openapi(getActionDescribeDBInstancesRoute, getActionDescribeDBInstancesRouteHandler)
  .openapi(postActionDescribeDBInstancesRoute, postActionDescribeDBInstancesRouteHandler)
  .openapi(getActionDescribeDBLogFilesRoute, getActionDescribeDBLogFilesRouteHandler)
  .openapi(postActionDescribeDBLogFilesRoute, postActionDescribeDBLogFilesRouteHandler)
  .openapi(getActionDescribeDBParameterGroupsRoute, getActionDescribeDBParameterGroupsRouteHandler)
  .openapi(
    postActionDescribeDBParameterGroupsRoute,
    postActionDescribeDBParameterGroupsRouteHandler,
  )
  .openapi(getActionDescribeDBParametersRoute, getActionDescribeDBParametersRouteHandler)
  .openapi(postActionDescribeDBParametersRoute, postActionDescribeDBParametersRouteHandler)
  .openapi(getActionDescribeDBProxiesRoute, getActionDescribeDBProxiesRouteHandler)
  .openapi(postActionDescribeDBProxiesRoute, postActionDescribeDBProxiesRouteHandler)
  .openapi(getActionDescribeDBProxyEndpointsRoute, getActionDescribeDBProxyEndpointsRouteHandler)
  .openapi(postActionDescribeDBProxyEndpointsRoute, postActionDescribeDBProxyEndpointsRouteHandler)
  .openapi(
    getActionDescribeDBProxyTargetGroupsRoute,
    getActionDescribeDBProxyTargetGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeDBProxyTargetGroupsRoute,
    postActionDescribeDBProxyTargetGroupsRouteHandler,
  )
  .openapi(getActionDescribeDBProxyTargetsRoute, getActionDescribeDBProxyTargetsRouteHandler)
  .openapi(postActionDescribeDBProxyTargetsRoute, postActionDescribeDBProxyTargetsRouteHandler)
  .openapi(getActionDescribeDBSecurityGroupsRoute, getActionDescribeDBSecurityGroupsRouteHandler)
  .openapi(postActionDescribeDBSecurityGroupsRoute, postActionDescribeDBSecurityGroupsRouteHandler)
  .openapi(
    getActionDescribeDBSnapshotAttributesRoute,
    getActionDescribeDBSnapshotAttributesRouteHandler,
  )
  .openapi(
    postActionDescribeDBSnapshotAttributesRoute,
    postActionDescribeDBSnapshotAttributesRouteHandler,
  )
  .openapi(getActionDescribeDBSnapshotsRoute, getActionDescribeDBSnapshotsRouteHandler)
  .openapi(postActionDescribeDBSnapshotsRoute, postActionDescribeDBSnapshotsRouteHandler)
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
  .openapi(getActionDescribeExportTasksRoute, getActionDescribeExportTasksRouteHandler)
  .openapi(postActionDescribeExportTasksRoute, postActionDescribeExportTasksRouteHandler)
  .openapi(getActionDescribeGlobalClustersRoute, getActionDescribeGlobalClustersRouteHandler)
  .openapi(postActionDescribeGlobalClustersRoute, postActionDescribeGlobalClustersRouteHandler)
  .openapi(
    getActionDescribeOptionGroupOptionsRoute,
    getActionDescribeOptionGroupOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeOptionGroupOptionsRoute,
    postActionDescribeOptionGroupOptionsRouteHandler,
  )
  .openapi(getActionDescribeOptionGroupsRoute, getActionDescribeOptionGroupsRouteHandler)
  .openapi(postActionDescribeOptionGroupsRoute, postActionDescribeOptionGroupsRouteHandler)
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
    getActionDescribeReservedDBInstancesRoute,
    getActionDescribeReservedDBInstancesRouteHandler,
  )
  .openapi(
    postActionDescribeReservedDBInstancesRoute,
    postActionDescribeReservedDBInstancesRouteHandler,
  )
  .openapi(
    getActionDescribeReservedDBInstancesOfferingsRoute,
    getActionDescribeReservedDBInstancesOfferingsRouteHandler,
  )
  .openapi(
    postActionDescribeReservedDBInstancesOfferingsRoute,
    postActionDescribeReservedDBInstancesOfferingsRouteHandler,
  )
  .openapi(getActionDescribeSourceRegionsRoute, getActionDescribeSourceRegionsRouteHandler)
  .openapi(postActionDescribeSourceRegionsRoute, postActionDescribeSourceRegionsRouteHandler)
  .openapi(
    getActionDescribeValidDBInstanceModificationsRoute,
    getActionDescribeValidDBInstanceModificationsRouteHandler,
  )
  .openapi(
    postActionDescribeValidDBInstanceModificationsRoute,
    postActionDescribeValidDBInstanceModificationsRouteHandler,
  )
  .openapi(getActionDownloadDBLogFilePortionRoute, getActionDownloadDBLogFilePortionRouteHandler)
  .openapi(postActionDownloadDBLogFilePortionRoute, postActionDownloadDBLogFilePortionRouteHandler)
  .openapi(getActionFailoverDBClusterRoute, getActionFailoverDBClusterRouteHandler)
  .openapi(postActionFailoverDBClusterRoute, postActionFailoverDBClusterRouteHandler)
  .openapi(getActionFailoverGlobalClusterRoute, getActionFailoverGlobalClusterRouteHandler)
  .openapi(postActionFailoverGlobalClusterRoute, postActionFailoverGlobalClusterRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionModifyActivityStreamRoute, getActionModifyActivityStreamRouteHandler)
  .openapi(postActionModifyActivityStreamRoute, postActionModifyActivityStreamRouteHandler)
  .openapi(getActionModifyCertificatesRoute, getActionModifyCertificatesRouteHandler)
  .openapi(postActionModifyCertificatesRoute, postActionModifyCertificatesRouteHandler)
  .openapi(
    getActionModifyCurrentDBClusterCapacityRoute,
    getActionModifyCurrentDBClusterCapacityRouteHandler,
  )
  .openapi(
    postActionModifyCurrentDBClusterCapacityRoute,
    postActionModifyCurrentDBClusterCapacityRouteHandler,
  )
  .openapi(
    getActionModifyCustomDBEngineVersionRoute,
    getActionModifyCustomDBEngineVersionRouteHandler,
  )
  .openapi(
    postActionModifyCustomDBEngineVersionRoute,
    postActionModifyCustomDBEngineVersionRouteHandler,
  )
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
  .openapi(getActionModifyDBProxyRoute, getActionModifyDBProxyRouteHandler)
  .openapi(postActionModifyDBProxyRoute, postActionModifyDBProxyRouteHandler)
  .openapi(getActionModifyDBProxyEndpointRoute, getActionModifyDBProxyEndpointRouteHandler)
  .openapi(postActionModifyDBProxyEndpointRoute, postActionModifyDBProxyEndpointRouteHandler)
  .openapi(getActionModifyDBProxyTargetGroupRoute, getActionModifyDBProxyTargetGroupRouteHandler)
  .openapi(postActionModifyDBProxyTargetGroupRoute, postActionModifyDBProxyTargetGroupRouteHandler)
  .openapi(getActionModifyDBSnapshotRoute, getActionModifyDBSnapshotRouteHandler)
  .openapi(postActionModifyDBSnapshotRoute, postActionModifyDBSnapshotRouteHandler)
  .openapi(getActionModifyDBSnapshotAttributeRoute, getActionModifyDBSnapshotAttributeRouteHandler)
  .openapi(
    postActionModifyDBSnapshotAttributeRoute,
    postActionModifyDBSnapshotAttributeRouteHandler,
  )
  .openapi(getActionModifyDBSubnetGroupRoute, getActionModifyDBSubnetGroupRouteHandler)
  .openapi(postActionModifyDBSubnetGroupRoute, postActionModifyDBSubnetGroupRouteHandler)
  .openapi(getActionModifyEventSubscriptionRoute, getActionModifyEventSubscriptionRouteHandler)
  .openapi(postActionModifyEventSubscriptionRoute, postActionModifyEventSubscriptionRouteHandler)
  .openapi(getActionModifyGlobalClusterRoute, getActionModifyGlobalClusterRouteHandler)
  .openapi(postActionModifyGlobalClusterRoute, postActionModifyGlobalClusterRouteHandler)
  .openapi(getActionModifyOptionGroupRoute, getActionModifyOptionGroupRouteHandler)
  .openapi(postActionModifyOptionGroupRoute, postActionModifyOptionGroupRouteHandler)
  .openapi(getActionPromoteReadReplicaRoute, getActionPromoteReadReplicaRouteHandler)
  .openapi(postActionPromoteReadReplicaRoute, postActionPromoteReadReplicaRouteHandler)
  .openapi(
    getActionPromoteReadReplicaDBClusterRoute,
    getActionPromoteReadReplicaDBClusterRouteHandler,
  )
  .openapi(
    postActionPromoteReadReplicaDBClusterRoute,
    postActionPromoteReadReplicaDBClusterRouteHandler,
  )
  .openapi(
    getActionPurchaseReservedDBInstancesOfferingRoute,
    getActionPurchaseReservedDBInstancesOfferingRouteHandler,
  )
  .openapi(
    postActionPurchaseReservedDBInstancesOfferingRoute,
    postActionPurchaseReservedDBInstancesOfferingRouteHandler,
  )
  .openapi(getActionRebootDBClusterRoute, getActionRebootDBClusterRouteHandler)
  .openapi(postActionRebootDBClusterRoute, postActionRebootDBClusterRouteHandler)
  .openapi(getActionRebootDBInstanceRoute, getActionRebootDBInstanceRouteHandler)
  .openapi(postActionRebootDBInstanceRoute, postActionRebootDBInstanceRouteHandler)
  .openapi(getActionRegisterDBProxyTargetsRoute, getActionRegisterDBProxyTargetsRouteHandler)
  .openapi(postActionRegisterDBProxyTargetsRoute, postActionRegisterDBProxyTargetsRouteHandler)
  .openapi(getActionRemoveFromGlobalClusterRoute, getActionRemoveFromGlobalClusterRouteHandler)
  .openapi(postActionRemoveFromGlobalClusterRoute, postActionRemoveFromGlobalClusterRouteHandler)
  .openapi(getActionRemoveRoleFromDBClusterRoute, getActionRemoveRoleFromDBClusterRouteHandler)
  .openapi(postActionRemoveRoleFromDBClusterRoute, postActionRemoveRoleFromDBClusterRouteHandler)
  .openapi(getActionRemoveRoleFromDBInstanceRoute, getActionRemoveRoleFromDBInstanceRouteHandler)
  .openapi(postActionRemoveRoleFromDBInstanceRoute, postActionRemoveRoleFromDBInstanceRouteHandler)
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
  .openapi(getActionRestoreDBClusterFromS3Route, getActionRestoreDBClusterFromS3RouteHandler)
  .openapi(postActionRestoreDBClusterFromS3Route, postActionRestoreDBClusterFromS3RouteHandler)
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
  .openapi(
    getActionRestoreDBInstanceFromDBSnapshotRoute,
    getActionRestoreDBInstanceFromDBSnapshotRouteHandler,
  )
  .openapi(
    postActionRestoreDBInstanceFromDBSnapshotRoute,
    postActionRestoreDBInstanceFromDBSnapshotRouteHandler,
  )
  .openapi(getActionRestoreDBInstanceFromS3Route, getActionRestoreDBInstanceFromS3RouteHandler)
  .openapi(postActionRestoreDBInstanceFromS3Route, postActionRestoreDBInstanceFromS3RouteHandler)
  .openapi(
    getActionRestoreDBInstanceToPointInTimeRoute,
    getActionRestoreDBInstanceToPointInTimeRouteHandler,
  )
  .openapi(
    postActionRestoreDBInstanceToPointInTimeRoute,
    postActionRestoreDBInstanceToPointInTimeRouteHandler,
  )
  .openapi(
    getActionRevokeDBSecurityGroupIngressRoute,
    getActionRevokeDBSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionRevokeDBSecurityGroupIngressRoute,
    postActionRevokeDBSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionStartActivityStreamRoute, getActionStartActivityStreamRouteHandler)
  .openapi(postActionStartActivityStreamRoute, postActionStartActivityStreamRouteHandler)
  .openapi(getActionStartDBClusterRoute, getActionStartDBClusterRouteHandler)
  .openapi(postActionStartDBClusterRoute, postActionStartDBClusterRouteHandler)
  .openapi(getActionStartDBInstanceRoute, getActionStartDBInstanceRouteHandler)
  .openapi(postActionStartDBInstanceRoute, postActionStartDBInstanceRouteHandler)
  .openapi(
    getActionStartDBInstanceAutomatedBackupsReplicationRoute,
    getActionStartDBInstanceAutomatedBackupsReplicationRouteHandler,
  )
  .openapi(
    postActionStartDBInstanceAutomatedBackupsReplicationRoute,
    postActionStartDBInstanceAutomatedBackupsReplicationRouteHandler,
  )
  .openapi(getActionStartExportTaskRoute, getActionStartExportTaskRouteHandler)
  .openapi(postActionStartExportTaskRoute, postActionStartExportTaskRouteHandler)
  .openapi(getActionStopActivityStreamRoute, getActionStopActivityStreamRouteHandler)
  .openapi(postActionStopActivityStreamRoute, postActionStopActivityStreamRouteHandler)
  .openapi(getActionStopDBClusterRoute, getActionStopDBClusterRouteHandler)
  .openapi(postActionStopDBClusterRoute, postActionStopDBClusterRouteHandler)
  .openapi(getActionStopDBInstanceRoute, getActionStopDBInstanceRouteHandler)
  .openapi(postActionStopDBInstanceRoute, postActionStopDBInstanceRouteHandler)
  .openapi(
    getActionStopDBInstanceAutomatedBackupsReplicationRoute,
    getActionStopDBInstanceAutomatedBackupsReplicationRouteHandler,
  )
  .openapi(
    postActionStopDBInstanceAutomatedBackupsReplicationRoute,
    postActionStopDBInstanceAutomatedBackupsReplicationRouteHandler,
  )
  .openapi(
    getActionSwitchoverBlueGreenDeploymentRoute,
    getActionSwitchoverBlueGreenDeploymentRouteHandler,
  )
  .openapi(
    postActionSwitchoverBlueGreenDeploymentRoute,
    postActionSwitchoverBlueGreenDeploymentRouteHandler,
  )
  .openapi(getActionSwitchoverReadReplicaRoute, getActionSwitchoverReadReplicaRouteHandler)
  .openapi(postActionSwitchoverReadReplicaRoute, postActionSwitchoverReadReplicaRouteHandler)

export default app
