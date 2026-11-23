import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAcceptReservedNodeExchangeHandler,
  actionAddPartnerHandler,
  actionAssociateDataShareConsumerHandler,
  actionAuthorizeClusterSecurityGroupIngressHandler,
  actionAuthorizeDataShareHandler,
  actionAuthorizeEndpointAccessHandler,
  actionAuthorizeSnapshotAccessHandler,
  actionBatchDeleteClusterSnapshotsHandler,
  actionBatchModifyClusterSnapshotsHandler,
  actionCancelResizeHandler,
  actionCopyClusterSnapshotHandler,
  actionCreateAuthenticationProfileHandler,
  actionCreateClusterHandler,
  actionCreateClusterParameterGroupHandler,
  actionCreateClusterSecurityGroupHandler,
  actionCreateClusterSnapshotHandler,
  actionCreateClusterSubnetGroupHandler,
  actionCreateEndpointAccessHandler,
  actionCreateEventSubscriptionHandler,
  actionCreateHsmClientCertificateHandler,
  actionCreateHsmConfigurationHandler,
  actionCreateScheduledActionHandler,
  actionCreateSnapshotCopyGrantHandler,
  actionCreateSnapshotScheduleHandler,
  actionCreateTagsHandler,
  actionCreateUsageLimitHandler,
  actionDeauthorizeDataShareHandler,
  actionDeleteAuthenticationProfileHandler,
  actionDeleteClusterHandler,
  actionDeleteClusterParameterGroupHandler,
  actionDeleteClusterSecurityGroupHandler,
  actionDeleteClusterSnapshotHandler,
  actionDeleteClusterSubnetGroupHandler,
  actionDeleteEndpointAccessHandler,
  actionDeleteEventSubscriptionHandler,
  actionDeleteHsmClientCertificateHandler,
  actionDeleteHsmConfigurationHandler,
  actionDeletePartnerHandler,
  actionDeleteScheduledActionHandler,
  actionDeleteSnapshotCopyGrantHandler,
  actionDeleteSnapshotScheduleHandler,
  actionDeleteTagsHandler,
  actionDeleteUsageLimitHandler,
  actionDescribeAccountAttributesHandler,
  actionDescribeAuthenticationProfilesHandler,
  actionDescribeClusterDbRevisionsHandler,
  actionDescribeClusterParameterGroupsHandler,
  actionDescribeClusterParametersHandler,
  actionDescribeClusterSecurityGroupsHandler,
  actionDescribeClustersHandler,
  actionDescribeClusterSnapshotsHandler,
  actionDescribeClusterSubnetGroupsHandler,
  actionDescribeClusterTracksHandler,
  actionDescribeClusterVersionsHandler,
  actionDescribeDataSharesForConsumerHandler,
  actionDescribeDataSharesForProducerHandler,
  actionDescribeDataSharesHandler,
  actionDescribeDefaultClusterParametersHandler,
  actionDescribeEndpointAccessHandler,
  actionDescribeEndpointAuthorizationHandler,
  actionDescribeEventCategoriesHandler,
  actionDescribeEventsHandler,
  actionDescribeEventSubscriptionsHandler,
  actionDescribeHsmClientCertificatesHandler,
  actionDescribeHsmConfigurationsHandler,
  actionDescribeLoggingStatusHandler,
  actionDescribeNodeConfigurationOptionsHandler,
  actionDescribeOrderableClusterOptionsHandler,
  actionDescribePartnersHandler,
  actionDescribeReservedNodeExchangeStatusHandler,
  actionDescribeReservedNodeOfferingsHandler,
  actionDescribeReservedNodesHandler,
  actionDescribeResizeHandler,
  actionDescribeScheduledActionsHandler,
  actionDescribeSnapshotCopyGrantsHandler,
  actionDescribeSnapshotSchedulesHandler,
  actionDescribeStorageHandler,
  actionDescribeTableRestoreStatusHandler,
  actionDescribeTagsHandler,
  actionDescribeUsageLimitsHandler,
  actionDisableLoggingHandler,
  actionDisableSnapshotCopyHandler,
  actionDisassociateDataShareConsumerHandler,
  actionEnableLoggingHandler,
  actionEnableSnapshotCopyHandler,
  actionGetClusterCredentialsHandler,
  actionGetClusterCredentialsWithIamHandler,
  actionGetReservedNodeExchangeConfigurationOptionsHandler,
  actionGetReservedNodeExchangeOfferingsHandler,
  actionModifyAquaConfigurationHandler,
  actionModifyAuthenticationProfileHandler,
  actionModifyClusterDbRevisionHandler,
  actionModifyClusterHandler,
  actionModifyClusterIamRolesHandler,
  actionModifyClusterMaintenanceHandler,
  actionModifyClusterParameterGroupHandler,
  actionModifyClusterSnapshotHandler,
  actionModifyClusterSnapshotScheduleHandler,
  actionModifyClusterSubnetGroupHandler,
  actionModifyEndpointAccessHandler,
  actionModifyEventSubscriptionHandler,
  actionModifyScheduledActionHandler,
  actionModifySnapshotCopyRetentionPeriodHandler,
  actionModifySnapshotScheduleHandler,
  actionModifyUsageLimitHandler,
  actionPauseClusterHandler,
  actionPurchaseReservedNodeOfferingHandler,
  actionRebootClusterHandler,
  actionRejectDataShareHandler,
  actionResetClusterParameterGroupHandler,
  actionResizeClusterHandler,
  actionRestoreFromClusterSnapshotHandler,
  actionRestoreTableFromClusterSnapshotHandler,
  actionResumeClusterHandler,
  actionRevokeClusterSecurityGroupIngressHandler,
  actionRevokeEndpointAccessHandler,
  actionRevokeSnapshotAccessHandler,
  actionRotateEncryptionKeyHandler,
  actionUpdatePartnerStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAcceptReservedNodeExchangeHandler)
  .route('/', actionAddPartnerHandler)
  .route('/', actionAssociateDataShareConsumerHandler)
  .route('/', actionAuthorizeClusterSecurityGroupIngressHandler)
  .route('/', actionAuthorizeDataShareHandler)
  .route('/', actionAuthorizeEndpointAccessHandler)
  .route('/', actionAuthorizeSnapshotAccessHandler)
  .route('/', actionBatchDeleteClusterSnapshotsHandler)
  .route('/', actionBatchModifyClusterSnapshotsHandler)
  .route('/', actionCancelResizeHandler)
  .route('/', actionCopyClusterSnapshotHandler)
  .route('/', actionCreateAuthenticationProfileHandler)
  .route('/', actionCreateClusterHandler)
  .route('/', actionCreateClusterParameterGroupHandler)
  .route('/', actionCreateClusterSecurityGroupHandler)
  .route('/', actionCreateClusterSnapshotHandler)
  .route('/', actionCreateClusterSubnetGroupHandler)
  .route('/', actionCreateEndpointAccessHandler)
  .route('/', actionCreateEventSubscriptionHandler)
  .route('/', actionCreateHsmClientCertificateHandler)
  .route('/', actionCreateHsmConfigurationHandler)
  .route('/', actionCreateScheduledActionHandler)
  .route('/', actionCreateSnapshotCopyGrantHandler)
  .route('/', actionCreateSnapshotScheduleHandler)
  .route('/', actionCreateTagsHandler)
  .route('/', actionCreateUsageLimitHandler)
  .route('/', actionDeauthorizeDataShareHandler)
  .route('/', actionDeleteAuthenticationProfileHandler)
  .route('/', actionDeleteClusterHandler)
  .route('/', actionDeleteClusterParameterGroupHandler)
  .route('/', actionDeleteClusterSecurityGroupHandler)
  .route('/', actionDeleteClusterSnapshotHandler)
  .route('/', actionDeleteClusterSubnetGroupHandler)
  .route('/', actionDeleteEndpointAccessHandler)
  .route('/', actionDeleteEventSubscriptionHandler)
  .route('/', actionDeleteHsmClientCertificateHandler)
  .route('/', actionDeleteHsmConfigurationHandler)
  .route('/', actionDeletePartnerHandler)
  .route('/', actionDeleteScheduledActionHandler)
  .route('/', actionDeleteSnapshotCopyGrantHandler)
  .route('/', actionDeleteSnapshotScheduleHandler)
  .route('/', actionDeleteTagsHandler)
  .route('/', actionDeleteUsageLimitHandler)
  .route('/', actionDescribeAccountAttributesHandler)
  .route('/', actionDescribeAuthenticationProfilesHandler)
  .route('/', actionDescribeClusterDbRevisionsHandler)
  .route('/', actionDescribeClusterParameterGroupsHandler)
  .route('/', actionDescribeClusterParametersHandler)
  .route('/', actionDescribeClusterSecurityGroupsHandler)
  .route('/', actionDescribeClusterSnapshotsHandler)
  .route('/', actionDescribeClusterSubnetGroupsHandler)
  .route('/', actionDescribeClusterTracksHandler)
  .route('/', actionDescribeClusterVersionsHandler)
  .route('/', actionDescribeClustersHandler)
  .route('/', actionDescribeDataSharesHandler)
  .route('/', actionDescribeDataSharesForConsumerHandler)
  .route('/', actionDescribeDataSharesForProducerHandler)
  .route('/', actionDescribeDefaultClusterParametersHandler)
  .route('/', actionDescribeEndpointAccessHandler)
  .route('/', actionDescribeEndpointAuthorizationHandler)
  .route('/', actionDescribeEventCategoriesHandler)
  .route('/', actionDescribeEventSubscriptionsHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeHsmClientCertificatesHandler)
  .route('/', actionDescribeHsmConfigurationsHandler)
  .route('/', actionDescribeLoggingStatusHandler)
  .route('/', actionDescribeNodeConfigurationOptionsHandler)
  .route('/', actionDescribeOrderableClusterOptionsHandler)
  .route('/', actionDescribePartnersHandler)
  .route('/', actionDescribeReservedNodeExchangeStatusHandler)
  .route('/', actionDescribeReservedNodeOfferingsHandler)
  .route('/', actionDescribeReservedNodesHandler)
  .route('/', actionDescribeResizeHandler)
  .route('/', actionDescribeScheduledActionsHandler)
  .route('/', actionDescribeSnapshotCopyGrantsHandler)
  .route('/', actionDescribeSnapshotSchedulesHandler)
  .route('/', actionDescribeStorageHandler)
  .route('/', actionDescribeTableRestoreStatusHandler)
  .route('/', actionDescribeTagsHandler)
  .route('/', actionDescribeUsageLimitsHandler)
  .route('/', actionDisableLoggingHandler)
  .route('/', actionDisableSnapshotCopyHandler)
  .route('/', actionDisassociateDataShareConsumerHandler)
  .route('/', actionEnableLoggingHandler)
  .route('/', actionEnableSnapshotCopyHandler)
  .route('/', actionGetClusterCredentialsHandler)
  .route('/', actionGetClusterCredentialsWithIamHandler)
  .route('/', actionGetReservedNodeExchangeConfigurationOptionsHandler)
  .route('/', actionGetReservedNodeExchangeOfferingsHandler)
  .route('/', actionModifyAquaConfigurationHandler)
  .route('/', actionModifyAuthenticationProfileHandler)
  .route('/', actionModifyClusterHandler)
  .route('/', actionModifyClusterDbRevisionHandler)
  .route('/', actionModifyClusterIamRolesHandler)
  .route('/', actionModifyClusterMaintenanceHandler)
  .route('/', actionModifyClusterParameterGroupHandler)
  .route('/', actionModifyClusterSnapshotHandler)
  .route('/', actionModifyClusterSnapshotScheduleHandler)
  .route('/', actionModifyClusterSubnetGroupHandler)
  .route('/', actionModifyEndpointAccessHandler)
  .route('/', actionModifyEventSubscriptionHandler)
  .route('/', actionModifyScheduledActionHandler)
  .route('/', actionModifySnapshotCopyRetentionPeriodHandler)
  .route('/', actionModifySnapshotScheduleHandler)
  .route('/', actionModifyUsageLimitHandler)
  .route('/', actionPauseClusterHandler)
  .route('/', actionPurchaseReservedNodeOfferingHandler)
  .route('/', actionRebootClusterHandler)
  .route('/', actionRejectDataShareHandler)
  .route('/', actionResetClusterParameterGroupHandler)
  .route('/', actionResizeClusterHandler)
  .route('/', actionRestoreFromClusterSnapshotHandler)
  .route('/', actionRestoreTableFromClusterSnapshotHandler)
  .route('/', actionResumeClusterHandler)
  .route('/', actionRevokeClusterSecurityGroupIngressHandler)
  .route('/', actionRevokeEndpointAccessHandler)
  .route('/', actionRevokeSnapshotAccessHandler)
  .route('/', actionRotateEncryptionKeyHandler)
  .route('/', actionUpdatePartnerStatusHandler)

export default app
