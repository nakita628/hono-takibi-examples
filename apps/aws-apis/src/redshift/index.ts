import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptReservedNodeExchangeRoute,
  getActionAddPartnerRoute,
  getActionAssociateDataShareConsumerRoute,
  getActionAuthorizeClusterSecurityGroupIngressRoute,
  getActionAuthorizeDataShareRoute,
  getActionAuthorizeEndpointAccessRoute,
  getActionAuthorizeSnapshotAccessRoute,
  getActionBatchDeleteClusterSnapshotsRoute,
  getActionBatchModifyClusterSnapshotsRoute,
  getActionCancelResizeRoute,
  getActionCopyClusterSnapshotRoute,
  getActionCreateAuthenticationProfileRoute,
  getActionCreateClusterParameterGroupRoute,
  getActionCreateClusterRoute,
  getActionCreateClusterSecurityGroupRoute,
  getActionCreateClusterSnapshotRoute,
  getActionCreateClusterSubnetGroupRoute,
  getActionCreateEndpointAccessRoute,
  getActionCreateEventSubscriptionRoute,
  getActionCreateHsmClientCertificateRoute,
  getActionCreateHsmConfigurationRoute,
  getActionCreateScheduledActionRoute,
  getActionCreateSnapshotCopyGrantRoute,
  getActionCreateSnapshotScheduleRoute,
  getActionCreateTagsRoute,
  getActionCreateUsageLimitRoute,
  getActionDeauthorizeDataShareRoute,
  getActionDeleteAuthenticationProfileRoute,
  getActionDeleteClusterParameterGroupRoute,
  getActionDeleteClusterRoute,
  getActionDeleteClusterSecurityGroupRoute,
  getActionDeleteClusterSnapshotRoute,
  getActionDeleteClusterSubnetGroupRoute,
  getActionDeleteEndpointAccessRoute,
  getActionDeleteEventSubscriptionRoute,
  getActionDeleteHsmClientCertificateRoute,
  getActionDeleteHsmConfigurationRoute,
  getActionDeletePartnerRoute,
  getActionDeleteScheduledActionRoute,
  getActionDeleteSnapshotCopyGrantRoute,
  getActionDeleteSnapshotScheduleRoute,
  getActionDeleteTagsRoute,
  getActionDeleteUsageLimitRoute,
  getActionDescribeAccountAttributesRoute,
  getActionDescribeAuthenticationProfilesRoute,
  getActionDescribeClusterDbRevisionsRoute,
  getActionDescribeClusterParameterGroupsRoute,
  getActionDescribeClusterParametersRoute,
  getActionDescribeClusterSecurityGroupsRoute,
  getActionDescribeClusterSnapshotsRoute,
  getActionDescribeClustersRoute,
  getActionDescribeClusterSubnetGroupsRoute,
  getActionDescribeClusterTracksRoute,
  getActionDescribeClusterVersionsRoute,
  getActionDescribeDataSharesForConsumerRoute,
  getActionDescribeDataSharesForProducerRoute,
  getActionDescribeDataSharesRoute,
  getActionDescribeDefaultClusterParametersRoute,
  getActionDescribeEndpointAccessRoute,
  getActionDescribeEndpointAuthorizationRoute,
  getActionDescribeEventCategoriesRoute,
  getActionDescribeEventsRoute,
  getActionDescribeEventSubscriptionsRoute,
  getActionDescribeHsmClientCertificatesRoute,
  getActionDescribeHsmConfigurationsRoute,
  getActionDescribeLoggingStatusRoute,
  getActionDescribeNodeConfigurationOptionsRoute,
  getActionDescribeOrderableClusterOptionsRoute,
  getActionDescribePartnersRoute,
  getActionDescribeReservedNodeExchangeStatusRoute,
  getActionDescribeReservedNodeOfferingsRoute,
  getActionDescribeReservedNodesRoute,
  getActionDescribeResizeRoute,
  getActionDescribeScheduledActionsRoute,
  getActionDescribeSnapshotCopyGrantsRoute,
  getActionDescribeSnapshotSchedulesRoute,
  getActionDescribeStorageRoute,
  getActionDescribeTableRestoreStatusRoute,
  getActionDescribeTagsRoute,
  getActionDescribeUsageLimitsRoute,
  getActionDisableLoggingRoute,
  getActionDisableSnapshotCopyRoute,
  getActionDisassociateDataShareConsumerRoute,
  getActionEnableLoggingRoute,
  getActionEnableSnapshotCopyRoute,
  getActionGetClusterCredentialsRoute,
  getActionGetClusterCredentialsWithIAMRoute,
  getActionGetReservedNodeExchangeConfigurationOptionsRoute,
  getActionGetReservedNodeExchangeOfferingsRoute,
  getActionModifyAquaConfigurationRoute,
  getActionModifyAuthenticationProfileRoute,
  getActionModifyClusterDbRevisionRoute,
  getActionModifyClusterIamRolesRoute,
  getActionModifyClusterMaintenanceRoute,
  getActionModifyClusterParameterGroupRoute,
  getActionModifyClusterRoute,
  getActionModifyClusterSnapshotRoute,
  getActionModifyClusterSnapshotScheduleRoute,
  getActionModifyClusterSubnetGroupRoute,
  getActionModifyEndpointAccessRoute,
  getActionModifyEventSubscriptionRoute,
  getActionModifyScheduledActionRoute,
  getActionModifySnapshotCopyRetentionPeriodRoute,
  getActionModifySnapshotScheduleRoute,
  getActionModifyUsageLimitRoute,
  getActionPauseClusterRoute,
  getActionPurchaseReservedNodeOfferingRoute,
  getActionRebootClusterRoute,
  getActionRejectDataShareRoute,
  getActionResetClusterParameterGroupRoute,
  getActionResizeClusterRoute,
  getActionRestoreFromClusterSnapshotRoute,
  getActionRestoreTableFromClusterSnapshotRoute,
  getActionResumeClusterRoute,
  getActionRevokeClusterSecurityGroupIngressRoute,
  getActionRevokeEndpointAccessRoute,
  getActionRevokeSnapshotAccessRoute,
  getActionRotateEncryptionKeyRoute,
  getActionUpdatePartnerStatusRoute,
  postActionAcceptReservedNodeExchangeRoute,
  postActionAddPartnerRoute,
  postActionAssociateDataShareConsumerRoute,
  postActionAuthorizeClusterSecurityGroupIngressRoute,
  postActionAuthorizeDataShareRoute,
  postActionAuthorizeEndpointAccessRoute,
  postActionAuthorizeSnapshotAccessRoute,
  postActionBatchDeleteClusterSnapshotsRoute,
  postActionBatchModifyClusterSnapshotsRoute,
  postActionCancelResizeRoute,
  postActionCopyClusterSnapshotRoute,
  postActionCreateAuthenticationProfileRoute,
  postActionCreateClusterParameterGroupRoute,
  postActionCreateClusterRoute,
  postActionCreateClusterSecurityGroupRoute,
  postActionCreateClusterSnapshotRoute,
  postActionCreateClusterSubnetGroupRoute,
  postActionCreateEndpointAccessRoute,
  postActionCreateEventSubscriptionRoute,
  postActionCreateHsmClientCertificateRoute,
  postActionCreateHsmConfigurationRoute,
  postActionCreateScheduledActionRoute,
  postActionCreateSnapshotCopyGrantRoute,
  postActionCreateSnapshotScheduleRoute,
  postActionCreateTagsRoute,
  postActionCreateUsageLimitRoute,
  postActionDeauthorizeDataShareRoute,
  postActionDeleteAuthenticationProfileRoute,
  postActionDeleteClusterParameterGroupRoute,
  postActionDeleteClusterRoute,
  postActionDeleteClusterSecurityGroupRoute,
  postActionDeleteClusterSnapshotRoute,
  postActionDeleteClusterSubnetGroupRoute,
  postActionDeleteEndpointAccessRoute,
  postActionDeleteEventSubscriptionRoute,
  postActionDeleteHsmClientCertificateRoute,
  postActionDeleteHsmConfigurationRoute,
  postActionDeletePartnerRoute,
  postActionDeleteScheduledActionRoute,
  postActionDeleteSnapshotCopyGrantRoute,
  postActionDeleteSnapshotScheduleRoute,
  postActionDeleteTagsRoute,
  postActionDeleteUsageLimitRoute,
  postActionDescribeAccountAttributesRoute,
  postActionDescribeAuthenticationProfilesRoute,
  postActionDescribeClusterDbRevisionsRoute,
  postActionDescribeClusterParameterGroupsRoute,
  postActionDescribeClusterParametersRoute,
  postActionDescribeClusterSecurityGroupsRoute,
  postActionDescribeClusterSnapshotsRoute,
  postActionDescribeClustersRoute,
  postActionDescribeClusterSubnetGroupsRoute,
  postActionDescribeClusterTracksRoute,
  postActionDescribeClusterVersionsRoute,
  postActionDescribeDataSharesForConsumerRoute,
  postActionDescribeDataSharesForProducerRoute,
  postActionDescribeDataSharesRoute,
  postActionDescribeDefaultClusterParametersRoute,
  postActionDescribeEndpointAccessRoute,
  postActionDescribeEndpointAuthorizationRoute,
  postActionDescribeEventCategoriesRoute,
  postActionDescribeEventsRoute,
  postActionDescribeEventSubscriptionsRoute,
  postActionDescribeHsmClientCertificatesRoute,
  postActionDescribeHsmConfigurationsRoute,
  postActionDescribeLoggingStatusRoute,
  postActionDescribeNodeConfigurationOptionsRoute,
  postActionDescribeOrderableClusterOptionsRoute,
  postActionDescribePartnersRoute,
  postActionDescribeReservedNodeExchangeStatusRoute,
  postActionDescribeReservedNodeOfferingsRoute,
  postActionDescribeReservedNodesRoute,
  postActionDescribeResizeRoute,
  postActionDescribeScheduledActionsRoute,
  postActionDescribeSnapshotCopyGrantsRoute,
  postActionDescribeSnapshotSchedulesRoute,
  postActionDescribeStorageRoute,
  postActionDescribeTableRestoreStatusRoute,
  postActionDescribeTagsRoute,
  postActionDescribeUsageLimitsRoute,
  postActionDisableLoggingRoute,
  postActionDisableSnapshotCopyRoute,
  postActionDisassociateDataShareConsumerRoute,
  postActionEnableLoggingRoute,
  postActionEnableSnapshotCopyRoute,
  postActionGetClusterCredentialsRoute,
  postActionGetClusterCredentialsWithIAMRoute,
  postActionGetReservedNodeExchangeConfigurationOptionsRoute,
  postActionGetReservedNodeExchangeOfferingsRoute,
  postActionModifyAquaConfigurationRoute,
  postActionModifyAuthenticationProfileRoute,
  postActionModifyClusterDbRevisionRoute,
  postActionModifyClusterIamRolesRoute,
  postActionModifyClusterMaintenanceRoute,
  postActionModifyClusterParameterGroupRoute,
  postActionModifyClusterRoute,
  postActionModifyClusterSnapshotRoute,
  postActionModifyClusterSnapshotScheduleRoute,
  postActionModifyClusterSubnetGroupRoute,
  postActionModifyEndpointAccessRoute,
  postActionModifyEventSubscriptionRoute,
  postActionModifyScheduledActionRoute,
  postActionModifySnapshotCopyRetentionPeriodRoute,
  postActionModifySnapshotScheduleRoute,
  postActionModifyUsageLimitRoute,
  postActionPauseClusterRoute,
  postActionPurchaseReservedNodeOfferingRoute,
  postActionRebootClusterRoute,
  postActionRejectDataShareRoute,
  postActionResetClusterParameterGroupRoute,
  postActionResizeClusterRoute,
  postActionRestoreFromClusterSnapshotRoute,
  postActionRestoreTableFromClusterSnapshotRoute,
  postActionResumeClusterRoute,
  postActionRevokeClusterSecurityGroupIngressRoute,
  postActionRevokeEndpointAccessRoute,
  postActionRevokeSnapshotAccessRoute,
  postActionRotateEncryptionKeyRoute,
  postActionUpdatePartnerStatusRoute,
} from './routes'
import {
  getActionAcceptReservedNodeExchangeRouteHandler,
  getActionAddPartnerRouteHandler,
  getActionAssociateDataShareConsumerRouteHandler,
  getActionAuthorizeClusterSecurityGroupIngressRouteHandler,
  getActionAuthorizeDataShareRouteHandler,
  getActionAuthorizeEndpointAccessRouteHandler,
  getActionAuthorizeSnapshotAccessRouteHandler,
  getActionBatchDeleteClusterSnapshotsRouteHandler,
  getActionBatchModifyClusterSnapshotsRouteHandler,
  getActionCancelResizeRouteHandler,
  getActionCopyClusterSnapshotRouteHandler,
  getActionCreateAuthenticationProfileRouteHandler,
  getActionCreateClusterParameterGroupRouteHandler,
  getActionCreateClusterRouteHandler,
  getActionCreateClusterSecurityGroupRouteHandler,
  getActionCreateClusterSnapshotRouteHandler,
  getActionCreateClusterSubnetGroupRouteHandler,
  getActionCreateEndpointAccessRouteHandler,
  getActionCreateEventSubscriptionRouteHandler,
  getActionCreateHsmClientCertificateRouteHandler,
  getActionCreateHsmConfigurationRouteHandler,
  getActionCreateScheduledActionRouteHandler,
  getActionCreateSnapshotCopyGrantRouteHandler,
  getActionCreateSnapshotScheduleRouteHandler,
  getActionCreateTagsRouteHandler,
  getActionCreateUsageLimitRouteHandler,
  getActionDeauthorizeDataShareRouteHandler,
  getActionDeleteAuthenticationProfileRouteHandler,
  getActionDeleteClusterParameterGroupRouteHandler,
  getActionDeleteClusterRouteHandler,
  getActionDeleteClusterSecurityGroupRouteHandler,
  getActionDeleteClusterSnapshotRouteHandler,
  getActionDeleteClusterSubnetGroupRouteHandler,
  getActionDeleteEndpointAccessRouteHandler,
  getActionDeleteEventSubscriptionRouteHandler,
  getActionDeleteHsmClientCertificateRouteHandler,
  getActionDeleteHsmConfigurationRouteHandler,
  getActionDeletePartnerRouteHandler,
  getActionDeleteScheduledActionRouteHandler,
  getActionDeleteSnapshotCopyGrantRouteHandler,
  getActionDeleteSnapshotScheduleRouteHandler,
  getActionDeleteTagsRouteHandler,
  getActionDeleteUsageLimitRouteHandler,
  getActionDescribeAccountAttributesRouteHandler,
  getActionDescribeAuthenticationProfilesRouteHandler,
  getActionDescribeClusterDbRevisionsRouteHandler,
  getActionDescribeClusterParameterGroupsRouteHandler,
  getActionDescribeClusterParametersRouteHandler,
  getActionDescribeClusterSecurityGroupsRouteHandler,
  getActionDescribeClusterSnapshotsRouteHandler,
  getActionDescribeClustersRouteHandler,
  getActionDescribeClusterSubnetGroupsRouteHandler,
  getActionDescribeClusterTracksRouteHandler,
  getActionDescribeClusterVersionsRouteHandler,
  getActionDescribeDataSharesForConsumerRouteHandler,
  getActionDescribeDataSharesForProducerRouteHandler,
  getActionDescribeDataSharesRouteHandler,
  getActionDescribeDefaultClusterParametersRouteHandler,
  getActionDescribeEndpointAccessRouteHandler,
  getActionDescribeEndpointAuthorizationRouteHandler,
  getActionDescribeEventCategoriesRouteHandler,
  getActionDescribeEventsRouteHandler,
  getActionDescribeEventSubscriptionsRouteHandler,
  getActionDescribeHsmClientCertificatesRouteHandler,
  getActionDescribeHsmConfigurationsRouteHandler,
  getActionDescribeLoggingStatusRouteHandler,
  getActionDescribeNodeConfigurationOptionsRouteHandler,
  getActionDescribeOrderableClusterOptionsRouteHandler,
  getActionDescribePartnersRouteHandler,
  getActionDescribeReservedNodeExchangeStatusRouteHandler,
  getActionDescribeReservedNodeOfferingsRouteHandler,
  getActionDescribeReservedNodesRouteHandler,
  getActionDescribeResizeRouteHandler,
  getActionDescribeScheduledActionsRouteHandler,
  getActionDescribeSnapshotCopyGrantsRouteHandler,
  getActionDescribeSnapshotSchedulesRouteHandler,
  getActionDescribeStorageRouteHandler,
  getActionDescribeTableRestoreStatusRouteHandler,
  getActionDescribeTagsRouteHandler,
  getActionDescribeUsageLimitsRouteHandler,
  getActionDisableLoggingRouteHandler,
  getActionDisableSnapshotCopyRouteHandler,
  getActionDisassociateDataShareConsumerRouteHandler,
  getActionEnableLoggingRouteHandler,
  getActionEnableSnapshotCopyRouteHandler,
  getActionGetClusterCredentialsRouteHandler,
  getActionGetClusterCredentialsWithIAMRouteHandler,
  getActionGetReservedNodeExchangeConfigurationOptionsRouteHandler,
  getActionGetReservedNodeExchangeOfferingsRouteHandler,
  getActionModifyAquaConfigurationRouteHandler,
  getActionModifyAuthenticationProfileRouteHandler,
  getActionModifyClusterDbRevisionRouteHandler,
  getActionModifyClusterIamRolesRouteHandler,
  getActionModifyClusterMaintenanceRouteHandler,
  getActionModifyClusterParameterGroupRouteHandler,
  getActionModifyClusterRouteHandler,
  getActionModifyClusterSnapshotRouteHandler,
  getActionModifyClusterSnapshotScheduleRouteHandler,
  getActionModifyClusterSubnetGroupRouteHandler,
  getActionModifyEndpointAccessRouteHandler,
  getActionModifyEventSubscriptionRouteHandler,
  getActionModifyScheduledActionRouteHandler,
  getActionModifySnapshotCopyRetentionPeriodRouteHandler,
  getActionModifySnapshotScheduleRouteHandler,
  getActionModifyUsageLimitRouteHandler,
  getActionPauseClusterRouteHandler,
  getActionPurchaseReservedNodeOfferingRouteHandler,
  getActionRebootClusterRouteHandler,
  getActionRejectDataShareRouteHandler,
  getActionResetClusterParameterGroupRouteHandler,
  getActionResizeClusterRouteHandler,
  getActionRestoreFromClusterSnapshotRouteHandler,
  getActionRestoreTableFromClusterSnapshotRouteHandler,
  getActionResumeClusterRouteHandler,
  getActionRevokeClusterSecurityGroupIngressRouteHandler,
  getActionRevokeEndpointAccessRouteHandler,
  getActionRevokeSnapshotAccessRouteHandler,
  getActionRotateEncryptionKeyRouteHandler,
  getActionUpdatePartnerStatusRouteHandler,
  postActionAcceptReservedNodeExchangeRouteHandler,
  postActionAddPartnerRouteHandler,
  postActionAssociateDataShareConsumerRouteHandler,
  postActionAuthorizeClusterSecurityGroupIngressRouteHandler,
  postActionAuthorizeDataShareRouteHandler,
  postActionAuthorizeEndpointAccessRouteHandler,
  postActionAuthorizeSnapshotAccessRouteHandler,
  postActionBatchDeleteClusterSnapshotsRouteHandler,
  postActionBatchModifyClusterSnapshotsRouteHandler,
  postActionCancelResizeRouteHandler,
  postActionCopyClusterSnapshotRouteHandler,
  postActionCreateAuthenticationProfileRouteHandler,
  postActionCreateClusterParameterGroupRouteHandler,
  postActionCreateClusterRouteHandler,
  postActionCreateClusterSecurityGroupRouteHandler,
  postActionCreateClusterSnapshotRouteHandler,
  postActionCreateClusterSubnetGroupRouteHandler,
  postActionCreateEndpointAccessRouteHandler,
  postActionCreateEventSubscriptionRouteHandler,
  postActionCreateHsmClientCertificateRouteHandler,
  postActionCreateHsmConfigurationRouteHandler,
  postActionCreateScheduledActionRouteHandler,
  postActionCreateSnapshotCopyGrantRouteHandler,
  postActionCreateSnapshotScheduleRouteHandler,
  postActionCreateTagsRouteHandler,
  postActionCreateUsageLimitRouteHandler,
  postActionDeauthorizeDataShareRouteHandler,
  postActionDeleteAuthenticationProfileRouteHandler,
  postActionDeleteClusterParameterGroupRouteHandler,
  postActionDeleteClusterRouteHandler,
  postActionDeleteClusterSecurityGroupRouteHandler,
  postActionDeleteClusterSnapshotRouteHandler,
  postActionDeleteClusterSubnetGroupRouteHandler,
  postActionDeleteEndpointAccessRouteHandler,
  postActionDeleteEventSubscriptionRouteHandler,
  postActionDeleteHsmClientCertificateRouteHandler,
  postActionDeleteHsmConfigurationRouteHandler,
  postActionDeletePartnerRouteHandler,
  postActionDeleteScheduledActionRouteHandler,
  postActionDeleteSnapshotCopyGrantRouteHandler,
  postActionDeleteSnapshotScheduleRouteHandler,
  postActionDeleteTagsRouteHandler,
  postActionDeleteUsageLimitRouteHandler,
  postActionDescribeAccountAttributesRouteHandler,
  postActionDescribeAuthenticationProfilesRouteHandler,
  postActionDescribeClusterDbRevisionsRouteHandler,
  postActionDescribeClusterParameterGroupsRouteHandler,
  postActionDescribeClusterParametersRouteHandler,
  postActionDescribeClusterSecurityGroupsRouteHandler,
  postActionDescribeClusterSnapshotsRouteHandler,
  postActionDescribeClustersRouteHandler,
  postActionDescribeClusterSubnetGroupsRouteHandler,
  postActionDescribeClusterTracksRouteHandler,
  postActionDescribeClusterVersionsRouteHandler,
  postActionDescribeDataSharesForConsumerRouteHandler,
  postActionDescribeDataSharesForProducerRouteHandler,
  postActionDescribeDataSharesRouteHandler,
  postActionDescribeDefaultClusterParametersRouteHandler,
  postActionDescribeEndpointAccessRouteHandler,
  postActionDescribeEndpointAuthorizationRouteHandler,
  postActionDescribeEventCategoriesRouteHandler,
  postActionDescribeEventsRouteHandler,
  postActionDescribeEventSubscriptionsRouteHandler,
  postActionDescribeHsmClientCertificatesRouteHandler,
  postActionDescribeHsmConfigurationsRouteHandler,
  postActionDescribeLoggingStatusRouteHandler,
  postActionDescribeNodeConfigurationOptionsRouteHandler,
  postActionDescribeOrderableClusterOptionsRouteHandler,
  postActionDescribePartnersRouteHandler,
  postActionDescribeReservedNodeExchangeStatusRouteHandler,
  postActionDescribeReservedNodeOfferingsRouteHandler,
  postActionDescribeReservedNodesRouteHandler,
  postActionDescribeResizeRouteHandler,
  postActionDescribeScheduledActionsRouteHandler,
  postActionDescribeSnapshotCopyGrantsRouteHandler,
  postActionDescribeSnapshotSchedulesRouteHandler,
  postActionDescribeStorageRouteHandler,
  postActionDescribeTableRestoreStatusRouteHandler,
  postActionDescribeTagsRouteHandler,
  postActionDescribeUsageLimitsRouteHandler,
  postActionDisableLoggingRouteHandler,
  postActionDisableSnapshotCopyRouteHandler,
  postActionDisassociateDataShareConsumerRouteHandler,
  postActionEnableLoggingRouteHandler,
  postActionEnableSnapshotCopyRouteHandler,
  postActionGetClusterCredentialsRouteHandler,
  postActionGetClusterCredentialsWithIAMRouteHandler,
  postActionGetReservedNodeExchangeConfigurationOptionsRouteHandler,
  postActionGetReservedNodeExchangeOfferingsRouteHandler,
  postActionModifyAquaConfigurationRouteHandler,
  postActionModifyAuthenticationProfileRouteHandler,
  postActionModifyClusterDbRevisionRouteHandler,
  postActionModifyClusterIamRolesRouteHandler,
  postActionModifyClusterMaintenanceRouteHandler,
  postActionModifyClusterParameterGroupRouteHandler,
  postActionModifyClusterRouteHandler,
  postActionModifyClusterSnapshotRouteHandler,
  postActionModifyClusterSnapshotScheduleRouteHandler,
  postActionModifyClusterSubnetGroupRouteHandler,
  postActionModifyEndpointAccessRouteHandler,
  postActionModifyEventSubscriptionRouteHandler,
  postActionModifyScheduledActionRouteHandler,
  postActionModifySnapshotCopyRetentionPeriodRouteHandler,
  postActionModifySnapshotScheduleRouteHandler,
  postActionModifyUsageLimitRouteHandler,
  postActionPauseClusterRouteHandler,
  postActionPurchaseReservedNodeOfferingRouteHandler,
  postActionRebootClusterRouteHandler,
  postActionRejectDataShareRouteHandler,
  postActionResetClusterParameterGroupRouteHandler,
  postActionResizeClusterRouteHandler,
  postActionRestoreFromClusterSnapshotRouteHandler,
  postActionRestoreTableFromClusterSnapshotRouteHandler,
  postActionResumeClusterRouteHandler,
  postActionRevokeClusterSecurityGroupIngressRouteHandler,
  postActionRevokeEndpointAccessRouteHandler,
  postActionRevokeSnapshotAccessRouteHandler,
  postActionRotateEncryptionKeyRouteHandler,
  postActionUpdatePartnerStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getActionAcceptReservedNodeExchangeRoute,
    getActionAcceptReservedNodeExchangeRouteHandler,
  )
  .openapi(
    postActionAcceptReservedNodeExchangeRoute,
    postActionAcceptReservedNodeExchangeRouteHandler,
  )
  .openapi(getActionAddPartnerRoute, getActionAddPartnerRouteHandler)
  .openapi(postActionAddPartnerRoute, postActionAddPartnerRouteHandler)
  .openapi(
    getActionAssociateDataShareConsumerRoute,
    getActionAssociateDataShareConsumerRouteHandler,
  )
  .openapi(
    postActionAssociateDataShareConsumerRoute,
    postActionAssociateDataShareConsumerRouteHandler,
  )
  .openapi(
    getActionAuthorizeClusterSecurityGroupIngressRoute,
    getActionAuthorizeClusterSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionAuthorizeClusterSecurityGroupIngressRoute,
    postActionAuthorizeClusterSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionAuthorizeDataShareRoute, getActionAuthorizeDataShareRouteHandler)
  .openapi(postActionAuthorizeDataShareRoute, postActionAuthorizeDataShareRouteHandler)
  .openapi(getActionAuthorizeEndpointAccessRoute, getActionAuthorizeEndpointAccessRouteHandler)
  .openapi(postActionAuthorizeEndpointAccessRoute, postActionAuthorizeEndpointAccessRouteHandler)
  .openapi(getActionAuthorizeSnapshotAccessRoute, getActionAuthorizeSnapshotAccessRouteHandler)
  .openapi(postActionAuthorizeSnapshotAccessRoute, postActionAuthorizeSnapshotAccessRouteHandler)
  .openapi(
    getActionBatchDeleteClusterSnapshotsRoute,
    getActionBatchDeleteClusterSnapshotsRouteHandler,
  )
  .openapi(
    postActionBatchDeleteClusterSnapshotsRoute,
    postActionBatchDeleteClusterSnapshotsRouteHandler,
  )
  .openapi(
    getActionBatchModifyClusterSnapshotsRoute,
    getActionBatchModifyClusterSnapshotsRouteHandler,
  )
  .openapi(
    postActionBatchModifyClusterSnapshotsRoute,
    postActionBatchModifyClusterSnapshotsRouteHandler,
  )
  .openapi(getActionCancelResizeRoute, getActionCancelResizeRouteHandler)
  .openapi(postActionCancelResizeRoute, postActionCancelResizeRouteHandler)
  .openapi(getActionCopyClusterSnapshotRoute, getActionCopyClusterSnapshotRouteHandler)
  .openapi(postActionCopyClusterSnapshotRoute, postActionCopyClusterSnapshotRouteHandler)
  .openapi(
    getActionCreateAuthenticationProfileRoute,
    getActionCreateAuthenticationProfileRouteHandler,
  )
  .openapi(
    postActionCreateAuthenticationProfileRoute,
    postActionCreateAuthenticationProfileRouteHandler,
  )
  .openapi(getActionCreateClusterRoute, getActionCreateClusterRouteHandler)
  .openapi(postActionCreateClusterRoute, postActionCreateClusterRouteHandler)
  .openapi(
    getActionCreateClusterParameterGroupRoute,
    getActionCreateClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionCreateClusterParameterGroupRoute,
    postActionCreateClusterParameterGroupRouteHandler,
  )
  .openapi(
    getActionCreateClusterSecurityGroupRoute,
    getActionCreateClusterSecurityGroupRouteHandler,
  )
  .openapi(
    postActionCreateClusterSecurityGroupRoute,
    postActionCreateClusterSecurityGroupRouteHandler,
  )
  .openapi(getActionCreateClusterSnapshotRoute, getActionCreateClusterSnapshotRouteHandler)
  .openapi(postActionCreateClusterSnapshotRoute, postActionCreateClusterSnapshotRouteHandler)
  .openapi(getActionCreateClusterSubnetGroupRoute, getActionCreateClusterSubnetGroupRouteHandler)
  .openapi(postActionCreateClusterSubnetGroupRoute, postActionCreateClusterSubnetGroupRouteHandler)
  .openapi(getActionCreateEndpointAccessRoute, getActionCreateEndpointAccessRouteHandler)
  .openapi(postActionCreateEndpointAccessRoute, postActionCreateEndpointAccessRouteHandler)
  .openapi(getActionCreateEventSubscriptionRoute, getActionCreateEventSubscriptionRouteHandler)
  .openapi(postActionCreateEventSubscriptionRoute, postActionCreateEventSubscriptionRouteHandler)
  .openapi(
    getActionCreateHsmClientCertificateRoute,
    getActionCreateHsmClientCertificateRouteHandler,
  )
  .openapi(
    postActionCreateHsmClientCertificateRoute,
    postActionCreateHsmClientCertificateRouteHandler,
  )
  .openapi(getActionCreateHsmConfigurationRoute, getActionCreateHsmConfigurationRouteHandler)
  .openapi(postActionCreateHsmConfigurationRoute, postActionCreateHsmConfigurationRouteHandler)
  .openapi(getActionCreateScheduledActionRoute, getActionCreateScheduledActionRouteHandler)
  .openapi(postActionCreateScheduledActionRoute, postActionCreateScheduledActionRouteHandler)
  .openapi(getActionCreateSnapshotCopyGrantRoute, getActionCreateSnapshotCopyGrantRouteHandler)
  .openapi(postActionCreateSnapshotCopyGrantRoute, postActionCreateSnapshotCopyGrantRouteHandler)
  .openapi(getActionCreateSnapshotScheduleRoute, getActionCreateSnapshotScheduleRouteHandler)
  .openapi(postActionCreateSnapshotScheduleRoute, postActionCreateSnapshotScheduleRouteHandler)
  .openapi(getActionCreateTagsRoute, getActionCreateTagsRouteHandler)
  .openapi(postActionCreateTagsRoute, postActionCreateTagsRouteHandler)
  .openapi(getActionCreateUsageLimitRoute, getActionCreateUsageLimitRouteHandler)
  .openapi(postActionCreateUsageLimitRoute, postActionCreateUsageLimitRouteHandler)
  .openapi(getActionDeauthorizeDataShareRoute, getActionDeauthorizeDataShareRouteHandler)
  .openapi(postActionDeauthorizeDataShareRoute, postActionDeauthorizeDataShareRouteHandler)
  .openapi(
    getActionDeleteAuthenticationProfileRoute,
    getActionDeleteAuthenticationProfileRouteHandler,
  )
  .openapi(
    postActionDeleteAuthenticationProfileRoute,
    postActionDeleteAuthenticationProfileRouteHandler,
  )
  .openapi(getActionDeleteClusterRoute, getActionDeleteClusterRouteHandler)
  .openapi(postActionDeleteClusterRoute, postActionDeleteClusterRouteHandler)
  .openapi(
    getActionDeleteClusterParameterGroupRoute,
    getActionDeleteClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionDeleteClusterParameterGroupRoute,
    postActionDeleteClusterParameterGroupRouteHandler,
  )
  .openapi(
    getActionDeleteClusterSecurityGroupRoute,
    getActionDeleteClusterSecurityGroupRouteHandler,
  )
  .openapi(
    postActionDeleteClusterSecurityGroupRoute,
    postActionDeleteClusterSecurityGroupRouteHandler,
  )
  .openapi(getActionDeleteClusterSnapshotRoute, getActionDeleteClusterSnapshotRouteHandler)
  .openapi(postActionDeleteClusterSnapshotRoute, postActionDeleteClusterSnapshotRouteHandler)
  .openapi(getActionDeleteClusterSubnetGroupRoute, getActionDeleteClusterSubnetGroupRouteHandler)
  .openapi(postActionDeleteClusterSubnetGroupRoute, postActionDeleteClusterSubnetGroupRouteHandler)
  .openapi(getActionDeleteEndpointAccessRoute, getActionDeleteEndpointAccessRouteHandler)
  .openapi(postActionDeleteEndpointAccessRoute, postActionDeleteEndpointAccessRouteHandler)
  .openapi(getActionDeleteEventSubscriptionRoute, getActionDeleteEventSubscriptionRouteHandler)
  .openapi(postActionDeleteEventSubscriptionRoute, postActionDeleteEventSubscriptionRouteHandler)
  .openapi(
    getActionDeleteHsmClientCertificateRoute,
    getActionDeleteHsmClientCertificateRouteHandler,
  )
  .openapi(
    postActionDeleteHsmClientCertificateRoute,
    postActionDeleteHsmClientCertificateRouteHandler,
  )
  .openapi(getActionDeleteHsmConfigurationRoute, getActionDeleteHsmConfigurationRouteHandler)
  .openapi(postActionDeleteHsmConfigurationRoute, postActionDeleteHsmConfigurationRouteHandler)
  .openapi(getActionDeletePartnerRoute, getActionDeletePartnerRouteHandler)
  .openapi(postActionDeletePartnerRoute, postActionDeletePartnerRouteHandler)
  .openapi(getActionDeleteScheduledActionRoute, getActionDeleteScheduledActionRouteHandler)
  .openapi(postActionDeleteScheduledActionRoute, postActionDeleteScheduledActionRouteHandler)
  .openapi(getActionDeleteSnapshotCopyGrantRoute, getActionDeleteSnapshotCopyGrantRouteHandler)
  .openapi(postActionDeleteSnapshotCopyGrantRoute, postActionDeleteSnapshotCopyGrantRouteHandler)
  .openapi(getActionDeleteSnapshotScheduleRoute, getActionDeleteSnapshotScheduleRouteHandler)
  .openapi(postActionDeleteSnapshotScheduleRoute, postActionDeleteSnapshotScheduleRouteHandler)
  .openapi(getActionDeleteTagsRoute, getActionDeleteTagsRouteHandler)
  .openapi(postActionDeleteTagsRoute, postActionDeleteTagsRouteHandler)
  .openapi(getActionDeleteUsageLimitRoute, getActionDeleteUsageLimitRouteHandler)
  .openapi(postActionDeleteUsageLimitRoute, postActionDeleteUsageLimitRouteHandler)
  .openapi(getActionDescribeAccountAttributesRoute, getActionDescribeAccountAttributesRouteHandler)
  .openapi(
    postActionDescribeAccountAttributesRoute,
    postActionDescribeAccountAttributesRouteHandler,
  )
  .openapi(
    getActionDescribeAuthenticationProfilesRoute,
    getActionDescribeAuthenticationProfilesRouteHandler,
  )
  .openapi(
    postActionDescribeAuthenticationProfilesRoute,
    postActionDescribeAuthenticationProfilesRouteHandler,
  )
  .openapi(
    getActionDescribeClusterDbRevisionsRoute,
    getActionDescribeClusterDbRevisionsRouteHandler,
  )
  .openapi(
    postActionDescribeClusterDbRevisionsRoute,
    postActionDescribeClusterDbRevisionsRouteHandler,
  )
  .openapi(
    getActionDescribeClusterParameterGroupsRoute,
    getActionDescribeClusterParameterGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeClusterParameterGroupsRoute,
    postActionDescribeClusterParameterGroupsRouteHandler,
  )
  .openapi(getActionDescribeClusterParametersRoute, getActionDescribeClusterParametersRouteHandler)
  .openapi(
    postActionDescribeClusterParametersRoute,
    postActionDescribeClusterParametersRouteHandler,
  )
  .openapi(
    getActionDescribeClusterSecurityGroupsRoute,
    getActionDescribeClusterSecurityGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeClusterSecurityGroupsRoute,
    postActionDescribeClusterSecurityGroupsRouteHandler,
  )
  .openapi(getActionDescribeClusterSnapshotsRoute, getActionDescribeClusterSnapshotsRouteHandler)
  .openapi(postActionDescribeClusterSnapshotsRoute, postActionDescribeClusterSnapshotsRouteHandler)
  .openapi(
    getActionDescribeClusterSubnetGroupsRoute,
    getActionDescribeClusterSubnetGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeClusterSubnetGroupsRoute,
    postActionDescribeClusterSubnetGroupsRouteHandler,
  )
  .openapi(getActionDescribeClusterTracksRoute, getActionDescribeClusterTracksRouteHandler)
  .openapi(postActionDescribeClusterTracksRoute, postActionDescribeClusterTracksRouteHandler)
  .openapi(getActionDescribeClusterVersionsRoute, getActionDescribeClusterVersionsRouteHandler)
  .openapi(postActionDescribeClusterVersionsRoute, postActionDescribeClusterVersionsRouteHandler)
  .openapi(getActionDescribeClustersRoute, getActionDescribeClustersRouteHandler)
  .openapi(postActionDescribeClustersRoute, postActionDescribeClustersRouteHandler)
  .openapi(getActionDescribeDataSharesRoute, getActionDescribeDataSharesRouteHandler)
  .openapi(postActionDescribeDataSharesRoute, postActionDescribeDataSharesRouteHandler)
  .openapi(
    getActionDescribeDataSharesForConsumerRoute,
    getActionDescribeDataSharesForConsumerRouteHandler,
  )
  .openapi(
    postActionDescribeDataSharesForConsumerRoute,
    postActionDescribeDataSharesForConsumerRouteHandler,
  )
  .openapi(
    getActionDescribeDataSharesForProducerRoute,
    getActionDescribeDataSharesForProducerRouteHandler,
  )
  .openapi(
    postActionDescribeDataSharesForProducerRoute,
    postActionDescribeDataSharesForProducerRouteHandler,
  )
  .openapi(
    getActionDescribeDefaultClusterParametersRoute,
    getActionDescribeDefaultClusterParametersRouteHandler,
  )
  .openapi(
    postActionDescribeDefaultClusterParametersRoute,
    postActionDescribeDefaultClusterParametersRouteHandler,
  )
  .openapi(getActionDescribeEndpointAccessRoute, getActionDescribeEndpointAccessRouteHandler)
  .openapi(postActionDescribeEndpointAccessRoute, postActionDescribeEndpointAccessRouteHandler)
  .openapi(
    getActionDescribeEndpointAuthorizationRoute,
    getActionDescribeEndpointAuthorizationRouteHandler,
  )
  .openapi(
    postActionDescribeEndpointAuthorizationRoute,
    postActionDescribeEndpointAuthorizationRouteHandler,
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
  .openapi(
    getActionDescribeHsmClientCertificatesRoute,
    getActionDescribeHsmClientCertificatesRouteHandler,
  )
  .openapi(
    postActionDescribeHsmClientCertificatesRoute,
    postActionDescribeHsmClientCertificatesRouteHandler,
  )
  .openapi(getActionDescribeHsmConfigurationsRoute, getActionDescribeHsmConfigurationsRouteHandler)
  .openapi(
    postActionDescribeHsmConfigurationsRoute,
    postActionDescribeHsmConfigurationsRouteHandler,
  )
  .openapi(getActionDescribeLoggingStatusRoute, getActionDescribeLoggingStatusRouteHandler)
  .openapi(postActionDescribeLoggingStatusRoute, postActionDescribeLoggingStatusRouteHandler)
  .openapi(
    getActionDescribeNodeConfigurationOptionsRoute,
    getActionDescribeNodeConfigurationOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeNodeConfigurationOptionsRoute,
    postActionDescribeNodeConfigurationOptionsRouteHandler,
  )
  .openapi(
    getActionDescribeOrderableClusterOptionsRoute,
    getActionDescribeOrderableClusterOptionsRouteHandler,
  )
  .openapi(
    postActionDescribeOrderableClusterOptionsRoute,
    postActionDescribeOrderableClusterOptionsRouteHandler,
  )
  .openapi(getActionDescribePartnersRoute, getActionDescribePartnersRouteHandler)
  .openapi(postActionDescribePartnersRoute, postActionDescribePartnersRouteHandler)
  .openapi(
    getActionDescribeReservedNodeExchangeStatusRoute,
    getActionDescribeReservedNodeExchangeStatusRouteHandler,
  )
  .openapi(
    postActionDescribeReservedNodeExchangeStatusRoute,
    postActionDescribeReservedNodeExchangeStatusRouteHandler,
  )
  .openapi(
    getActionDescribeReservedNodeOfferingsRoute,
    getActionDescribeReservedNodeOfferingsRouteHandler,
  )
  .openapi(
    postActionDescribeReservedNodeOfferingsRoute,
    postActionDescribeReservedNodeOfferingsRouteHandler,
  )
  .openapi(getActionDescribeReservedNodesRoute, getActionDescribeReservedNodesRouteHandler)
  .openapi(postActionDescribeReservedNodesRoute, postActionDescribeReservedNodesRouteHandler)
  .openapi(getActionDescribeResizeRoute, getActionDescribeResizeRouteHandler)
  .openapi(postActionDescribeResizeRoute, postActionDescribeResizeRouteHandler)
  .openapi(getActionDescribeScheduledActionsRoute, getActionDescribeScheduledActionsRouteHandler)
  .openapi(postActionDescribeScheduledActionsRoute, postActionDescribeScheduledActionsRouteHandler)
  .openapi(
    getActionDescribeSnapshotCopyGrantsRoute,
    getActionDescribeSnapshotCopyGrantsRouteHandler,
  )
  .openapi(
    postActionDescribeSnapshotCopyGrantsRoute,
    postActionDescribeSnapshotCopyGrantsRouteHandler,
  )
  .openapi(getActionDescribeSnapshotSchedulesRoute, getActionDescribeSnapshotSchedulesRouteHandler)
  .openapi(
    postActionDescribeSnapshotSchedulesRoute,
    postActionDescribeSnapshotSchedulesRouteHandler,
  )
  .openapi(getActionDescribeStorageRoute, getActionDescribeStorageRouteHandler)
  .openapi(postActionDescribeStorageRoute, postActionDescribeStorageRouteHandler)
  .openapi(
    getActionDescribeTableRestoreStatusRoute,
    getActionDescribeTableRestoreStatusRouteHandler,
  )
  .openapi(
    postActionDescribeTableRestoreStatusRoute,
    postActionDescribeTableRestoreStatusRouteHandler,
  )
  .openapi(getActionDescribeTagsRoute, getActionDescribeTagsRouteHandler)
  .openapi(postActionDescribeTagsRoute, postActionDescribeTagsRouteHandler)
  .openapi(getActionDescribeUsageLimitsRoute, getActionDescribeUsageLimitsRouteHandler)
  .openapi(postActionDescribeUsageLimitsRoute, postActionDescribeUsageLimitsRouteHandler)
  .openapi(getActionDisableLoggingRoute, getActionDisableLoggingRouteHandler)
  .openapi(postActionDisableLoggingRoute, postActionDisableLoggingRouteHandler)
  .openapi(getActionDisableSnapshotCopyRoute, getActionDisableSnapshotCopyRouteHandler)
  .openapi(postActionDisableSnapshotCopyRoute, postActionDisableSnapshotCopyRouteHandler)
  .openapi(
    getActionDisassociateDataShareConsumerRoute,
    getActionDisassociateDataShareConsumerRouteHandler,
  )
  .openapi(
    postActionDisassociateDataShareConsumerRoute,
    postActionDisassociateDataShareConsumerRouteHandler,
  )
  .openapi(getActionEnableLoggingRoute, getActionEnableLoggingRouteHandler)
  .openapi(postActionEnableLoggingRoute, postActionEnableLoggingRouteHandler)
  .openapi(getActionEnableSnapshotCopyRoute, getActionEnableSnapshotCopyRouteHandler)
  .openapi(postActionEnableSnapshotCopyRoute, postActionEnableSnapshotCopyRouteHandler)
  .openapi(getActionGetClusterCredentialsRoute, getActionGetClusterCredentialsRouteHandler)
  .openapi(postActionGetClusterCredentialsRoute, postActionGetClusterCredentialsRouteHandler)
  .openapi(
    getActionGetClusterCredentialsWithIAMRoute,
    getActionGetClusterCredentialsWithIAMRouteHandler,
  )
  .openapi(
    postActionGetClusterCredentialsWithIAMRoute,
    postActionGetClusterCredentialsWithIAMRouteHandler,
  )
  .openapi(
    getActionGetReservedNodeExchangeConfigurationOptionsRoute,
    getActionGetReservedNodeExchangeConfigurationOptionsRouteHandler,
  )
  .openapi(
    postActionGetReservedNodeExchangeConfigurationOptionsRoute,
    postActionGetReservedNodeExchangeConfigurationOptionsRouteHandler,
  )
  .openapi(
    getActionGetReservedNodeExchangeOfferingsRoute,
    getActionGetReservedNodeExchangeOfferingsRouteHandler,
  )
  .openapi(
    postActionGetReservedNodeExchangeOfferingsRoute,
    postActionGetReservedNodeExchangeOfferingsRouteHandler,
  )
  .openapi(getActionModifyAquaConfigurationRoute, getActionModifyAquaConfigurationRouteHandler)
  .openapi(postActionModifyAquaConfigurationRoute, postActionModifyAquaConfigurationRouteHandler)
  .openapi(
    getActionModifyAuthenticationProfileRoute,
    getActionModifyAuthenticationProfileRouteHandler,
  )
  .openapi(
    postActionModifyAuthenticationProfileRoute,
    postActionModifyAuthenticationProfileRouteHandler,
  )
  .openapi(getActionModifyClusterRoute, getActionModifyClusterRouteHandler)
  .openapi(postActionModifyClusterRoute, postActionModifyClusterRouteHandler)
  .openapi(getActionModifyClusterDbRevisionRoute, getActionModifyClusterDbRevisionRouteHandler)
  .openapi(postActionModifyClusterDbRevisionRoute, postActionModifyClusterDbRevisionRouteHandler)
  .openapi(getActionModifyClusterIamRolesRoute, getActionModifyClusterIamRolesRouteHandler)
  .openapi(postActionModifyClusterIamRolesRoute, postActionModifyClusterIamRolesRouteHandler)
  .openapi(getActionModifyClusterMaintenanceRoute, getActionModifyClusterMaintenanceRouteHandler)
  .openapi(postActionModifyClusterMaintenanceRoute, postActionModifyClusterMaintenanceRouteHandler)
  .openapi(
    getActionModifyClusterParameterGroupRoute,
    getActionModifyClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionModifyClusterParameterGroupRoute,
    postActionModifyClusterParameterGroupRouteHandler,
  )
  .openapi(getActionModifyClusterSnapshotRoute, getActionModifyClusterSnapshotRouteHandler)
  .openapi(postActionModifyClusterSnapshotRoute, postActionModifyClusterSnapshotRouteHandler)
  .openapi(
    getActionModifyClusterSnapshotScheduleRoute,
    getActionModifyClusterSnapshotScheduleRouteHandler,
  )
  .openapi(
    postActionModifyClusterSnapshotScheduleRoute,
    postActionModifyClusterSnapshotScheduleRouteHandler,
  )
  .openapi(getActionModifyClusterSubnetGroupRoute, getActionModifyClusterSubnetGroupRouteHandler)
  .openapi(postActionModifyClusterSubnetGroupRoute, postActionModifyClusterSubnetGroupRouteHandler)
  .openapi(getActionModifyEndpointAccessRoute, getActionModifyEndpointAccessRouteHandler)
  .openapi(postActionModifyEndpointAccessRoute, postActionModifyEndpointAccessRouteHandler)
  .openapi(getActionModifyEventSubscriptionRoute, getActionModifyEventSubscriptionRouteHandler)
  .openapi(postActionModifyEventSubscriptionRoute, postActionModifyEventSubscriptionRouteHandler)
  .openapi(getActionModifyScheduledActionRoute, getActionModifyScheduledActionRouteHandler)
  .openapi(postActionModifyScheduledActionRoute, postActionModifyScheduledActionRouteHandler)
  .openapi(
    getActionModifySnapshotCopyRetentionPeriodRoute,
    getActionModifySnapshotCopyRetentionPeriodRouteHandler,
  )
  .openapi(
    postActionModifySnapshotCopyRetentionPeriodRoute,
    postActionModifySnapshotCopyRetentionPeriodRouteHandler,
  )
  .openapi(getActionModifySnapshotScheduleRoute, getActionModifySnapshotScheduleRouteHandler)
  .openapi(postActionModifySnapshotScheduleRoute, postActionModifySnapshotScheduleRouteHandler)
  .openapi(getActionModifyUsageLimitRoute, getActionModifyUsageLimitRouteHandler)
  .openapi(postActionModifyUsageLimitRoute, postActionModifyUsageLimitRouteHandler)
  .openapi(getActionPauseClusterRoute, getActionPauseClusterRouteHandler)
  .openapi(postActionPauseClusterRoute, postActionPauseClusterRouteHandler)
  .openapi(
    getActionPurchaseReservedNodeOfferingRoute,
    getActionPurchaseReservedNodeOfferingRouteHandler,
  )
  .openapi(
    postActionPurchaseReservedNodeOfferingRoute,
    postActionPurchaseReservedNodeOfferingRouteHandler,
  )
  .openapi(getActionRebootClusterRoute, getActionRebootClusterRouteHandler)
  .openapi(postActionRebootClusterRoute, postActionRebootClusterRouteHandler)
  .openapi(getActionRejectDataShareRoute, getActionRejectDataShareRouteHandler)
  .openapi(postActionRejectDataShareRoute, postActionRejectDataShareRouteHandler)
  .openapi(
    getActionResetClusterParameterGroupRoute,
    getActionResetClusterParameterGroupRouteHandler,
  )
  .openapi(
    postActionResetClusterParameterGroupRoute,
    postActionResetClusterParameterGroupRouteHandler,
  )
  .openapi(getActionResizeClusterRoute, getActionResizeClusterRouteHandler)
  .openapi(postActionResizeClusterRoute, postActionResizeClusterRouteHandler)
  .openapi(
    getActionRestoreFromClusterSnapshotRoute,
    getActionRestoreFromClusterSnapshotRouteHandler,
  )
  .openapi(
    postActionRestoreFromClusterSnapshotRoute,
    postActionRestoreFromClusterSnapshotRouteHandler,
  )
  .openapi(
    getActionRestoreTableFromClusterSnapshotRoute,
    getActionRestoreTableFromClusterSnapshotRouteHandler,
  )
  .openapi(
    postActionRestoreTableFromClusterSnapshotRoute,
    postActionRestoreTableFromClusterSnapshotRouteHandler,
  )
  .openapi(getActionResumeClusterRoute, getActionResumeClusterRouteHandler)
  .openapi(postActionResumeClusterRoute, postActionResumeClusterRouteHandler)
  .openapi(
    getActionRevokeClusterSecurityGroupIngressRoute,
    getActionRevokeClusterSecurityGroupIngressRouteHandler,
  )
  .openapi(
    postActionRevokeClusterSecurityGroupIngressRoute,
    postActionRevokeClusterSecurityGroupIngressRouteHandler,
  )
  .openapi(getActionRevokeEndpointAccessRoute, getActionRevokeEndpointAccessRouteHandler)
  .openapi(postActionRevokeEndpointAccessRoute, postActionRevokeEndpointAccessRouteHandler)
  .openapi(getActionRevokeSnapshotAccessRoute, getActionRevokeSnapshotAccessRouteHandler)
  .openapi(postActionRevokeSnapshotAccessRoute, postActionRevokeSnapshotAccessRouteHandler)
  .openapi(getActionRotateEncryptionKeyRoute, getActionRotateEncryptionKeyRouteHandler)
  .openapi(postActionRotateEncryptionKeyRoute, postActionRotateEncryptionKeyRouteHandler)
  .openapi(getActionUpdatePartnerStatusRoute, getActionUpdatePartnerStatusRouteHandler)
  .openapi(postActionUpdatePartnerStatusRoute, postActionUpdatePartnerStatusRouteHandler)

export default app
