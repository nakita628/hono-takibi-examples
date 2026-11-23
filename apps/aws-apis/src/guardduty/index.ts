import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDetectorDetectorIdFilterFilterNameRoute,
  deleteDetectorDetectorIdIpsetIpSetIdRoute,
  deleteDetectorDetectorIdPublishingDestinationDestinationIdRoute,
  deleteDetectorDetectorIdRoute,
  deleteDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAdminRoute,
  getDetectorDetectorIdAdministratorRoute,
  getDetectorDetectorIdAdminRoute,
  getDetectorDetectorIdFilterFilterNameRoute,
  getDetectorDetectorIdFilterRoute,
  getDetectorDetectorIdIpsetIpSetIdRoute,
  getDetectorDetectorIdIpsetRoute,
  getDetectorDetectorIdMalwareScanSettingsRoute,
  getDetectorDetectorIdMasterRoute,
  getDetectorDetectorIdMemberRoute,
  getDetectorDetectorIdPublishingDestinationDestinationIdRoute,
  getDetectorDetectorIdPublishingDestinationRoute,
  getDetectorDetectorIdRoute,
  getDetectorDetectorIdThreatintelsetRoute,
  getDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
  getDetectorRoute,
  getInvitationCountRoute,
  getInvitationRoute,
  getTagsResourceArnRoute,
  postAdminDisableRoute,
  postAdminEnableRoute,
  postDetectorDetectorIdAdministratorDisassociateRoute,
  postDetectorDetectorIdAdministratorRoute,
  postDetectorDetectorIdAdminRoute,
  postDetectorDetectorIdCoverageRoute,
  postDetectorDetectorIdCoverageStatisticsRoute,
  postDetectorDetectorIdFilterFilterNameRoute,
  postDetectorDetectorIdFilterRoute,
  postDetectorDetectorIdFindingsArchiveRoute,
  postDetectorDetectorIdFindingsCreateRoute,
  postDetectorDetectorIdFindingsFeedbackRoute,
  postDetectorDetectorIdFindingsGetRoute,
  postDetectorDetectorIdFindingsRoute,
  postDetectorDetectorIdFindingsStatisticsRoute,
  postDetectorDetectorIdFindingsUnarchiveRoute,
  postDetectorDetectorIdFreeTrialDaysRemainingRoute,
  postDetectorDetectorIdIpsetIpSetIdRoute,
  postDetectorDetectorIdIpsetRoute,
  postDetectorDetectorIdMalwareScanSettingsRoute,
  postDetectorDetectorIdMalwareScansRoute,
  postDetectorDetectorIdMasterDisassociateRoute,
  postDetectorDetectorIdMasterRoute,
  postDetectorDetectorIdMemberDeleteRoute,
  postDetectorDetectorIdMemberDetectorGetRoute,
  postDetectorDetectorIdMemberDetectorUpdateRoute,
  postDetectorDetectorIdMemberDisassociateRoute,
  postDetectorDetectorIdMemberGetRoute,
  postDetectorDetectorIdMemberInviteRoute,
  postDetectorDetectorIdMemberRoute,
  postDetectorDetectorIdMemberStartRoute,
  postDetectorDetectorIdMemberStopRoute,
  postDetectorDetectorIdPublishingDestinationDestinationIdRoute,
  postDetectorDetectorIdPublishingDestinationRoute,
  postDetectorDetectorIdRoute,
  postDetectorDetectorIdThreatintelsetRoute,
  postDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
  postDetectorDetectorIdUsageStatisticsRoute,
  postDetectorRoute,
  postInvitationDeclineRoute,
  postInvitationDeleteRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteDetectorDetectorIdFilterFilterNameRouteHandler,
  deleteDetectorDetectorIdIpsetIpSetIdRouteHandler,
  deleteDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  deleteDetectorDetectorIdRouteHandler,
  deleteDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAdminRouteHandler,
  getDetectorDetectorIdAdministratorRouteHandler,
  getDetectorDetectorIdAdminRouteHandler,
  getDetectorDetectorIdFilterFilterNameRouteHandler,
  getDetectorDetectorIdFilterRouteHandler,
  getDetectorDetectorIdIpsetIpSetIdRouteHandler,
  getDetectorDetectorIdIpsetRouteHandler,
  getDetectorDetectorIdMalwareScanSettingsRouteHandler,
  getDetectorDetectorIdMasterRouteHandler,
  getDetectorDetectorIdMemberRouteHandler,
  getDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  getDetectorDetectorIdPublishingDestinationRouteHandler,
  getDetectorDetectorIdRouteHandler,
  getDetectorDetectorIdThreatintelsetRouteHandler,
  getDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  getDetectorRouteHandler,
  getInvitationCountRouteHandler,
  getInvitationRouteHandler,
  getTagsResourceArnRouteHandler,
  postAdminDisableRouteHandler,
  postAdminEnableRouteHandler,
  postDetectorDetectorIdAdministratorDisassociateRouteHandler,
  postDetectorDetectorIdAdministratorRouteHandler,
  postDetectorDetectorIdAdminRouteHandler,
  postDetectorDetectorIdCoverageRouteHandler,
  postDetectorDetectorIdCoverageStatisticsRouteHandler,
  postDetectorDetectorIdFilterFilterNameRouteHandler,
  postDetectorDetectorIdFilterRouteHandler,
  postDetectorDetectorIdFindingsArchiveRouteHandler,
  postDetectorDetectorIdFindingsCreateRouteHandler,
  postDetectorDetectorIdFindingsFeedbackRouteHandler,
  postDetectorDetectorIdFindingsGetRouteHandler,
  postDetectorDetectorIdFindingsRouteHandler,
  postDetectorDetectorIdFindingsStatisticsRouteHandler,
  postDetectorDetectorIdFindingsUnarchiveRouteHandler,
  postDetectorDetectorIdFreeTrialDaysRemainingRouteHandler,
  postDetectorDetectorIdIpsetIpSetIdRouteHandler,
  postDetectorDetectorIdIpsetRouteHandler,
  postDetectorDetectorIdMalwareScanSettingsRouteHandler,
  postDetectorDetectorIdMalwareScansRouteHandler,
  postDetectorDetectorIdMasterDisassociateRouteHandler,
  postDetectorDetectorIdMasterRouteHandler,
  postDetectorDetectorIdMemberDeleteRouteHandler,
  postDetectorDetectorIdMemberDetectorGetRouteHandler,
  postDetectorDetectorIdMemberDetectorUpdateRouteHandler,
  postDetectorDetectorIdMemberDisassociateRouteHandler,
  postDetectorDetectorIdMemberGetRouteHandler,
  postDetectorDetectorIdMemberInviteRouteHandler,
  postDetectorDetectorIdMemberRouteHandler,
  postDetectorDetectorIdMemberStartRouteHandler,
  postDetectorDetectorIdMemberStopRouteHandler,
  postDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  postDetectorDetectorIdPublishingDestinationRouteHandler,
  postDetectorDetectorIdRouteHandler,
  postDetectorDetectorIdThreatintelsetRouteHandler,
  postDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  postDetectorDetectorIdUsageStatisticsRouteHandler,
  postDetectorRouteHandler,
  postInvitationDeclineRouteHandler,
  postInvitationDeleteRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postDetectorDetectorIdAdministratorRoute,
    postDetectorDetectorIdAdministratorRouteHandler,
  )
  .openapi(getDetectorDetectorIdAdministratorRoute, getDetectorDetectorIdAdministratorRouteHandler)
  .openapi(postDetectorDetectorIdMasterRoute, postDetectorDetectorIdMasterRouteHandler)
  .openapi(getDetectorDetectorIdMasterRoute, getDetectorDetectorIdMasterRouteHandler)
  .openapi(
    postDetectorDetectorIdFindingsArchiveRoute,
    postDetectorDetectorIdFindingsArchiveRouteHandler,
  )
  .openapi(postDetectorRoute, postDetectorRouteHandler)
  .openapi(getDetectorRoute, getDetectorRouteHandler)
  .openapi(postDetectorDetectorIdFilterRoute, postDetectorDetectorIdFilterRouteHandler)
  .openapi(getDetectorDetectorIdFilterRoute, getDetectorDetectorIdFilterRouteHandler)
  .openapi(postDetectorDetectorIdIpsetRoute, postDetectorDetectorIdIpsetRouteHandler)
  .openapi(getDetectorDetectorIdIpsetRoute, getDetectorDetectorIdIpsetRouteHandler)
  .openapi(postDetectorDetectorIdMemberRoute, postDetectorDetectorIdMemberRouteHandler)
  .openapi(getDetectorDetectorIdMemberRoute, getDetectorDetectorIdMemberRouteHandler)
  .openapi(
    postDetectorDetectorIdPublishingDestinationRoute,
    postDetectorDetectorIdPublishingDestinationRouteHandler,
  )
  .openapi(
    getDetectorDetectorIdPublishingDestinationRoute,
    getDetectorDetectorIdPublishingDestinationRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdFindingsCreateRoute,
    postDetectorDetectorIdFindingsCreateRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdThreatintelsetRoute,
    postDetectorDetectorIdThreatintelsetRouteHandler,
  )
  .openapi(
    getDetectorDetectorIdThreatintelsetRoute,
    getDetectorDetectorIdThreatintelsetRouteHandler,
  )
  .openapi(postInvitationDeclineRoute, postInvitationDeclineRouteHandler)
  .openapi(deleteDetectorDetectorIdRoute, deleteDetectorDetectorIdRouteHandler)
  .openapi(getDetectorDetectorIdRoute, getDetectorDetectorIdRouteHandler)
  .openapi(postDetectorDetectorIdRoute, postDetectorDetectorIdRouteHandler)
  .openapi(
    deleteDetectorDetectorIdFilterFilterNameRoute,
    deleteDetectorDetectorIdFilterFilterNameRouteHandler,
  )
  .openapi(
    getDetectorDetectorIdFilterFilterNameRoute,
    getDetectorDetectorIdFilterFilterNameRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdFilterFilterNameRoute,
    postDetectorDetectorIdFilterFilterNameRouteHandler,
  )
  .openapi(
    deleteDetectorDetectorIdIpsetIpSetIdRoute,
    deleteDetectorDetectorIdIpsetIpSetIdRouteHandler,
  )
  .openapi(getDetectorDetectorIdIpsetIpSetIdRoute, getDetectorDetectorIdIpsetIpSetIdRouteHandler)
  .openapi(postDetectorDetectorIdIpsetIpSetIdRoute, postDetectorDetectorIdIpsetIpSetIdRouteHandler)
  .openapi(postInvitationDeleteRoute, postInvitationDeleteRouteHandler)
  .openapi(postDetectorDetectorIdMemberDeleteRoute, postDetectorDetectorIdMemberDeleteRouteHandler)
  .openapi(
    deleteDetectorDetectorIdPublishingDestinationDestinationIdRoute,
    deleteDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  )
  .openapi(
    getDetectorDetectorIdPublishingDestinationDestinationIdRoute,
    getDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdPublishingDestinationDestinationIdRoute,
    postDetectorDetectorIdPublishingDestinationDestinationIdRouteHandler,
  )
  .openapi(
    deleteDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
    deleteDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  )
  .openapi(
    getDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
    getDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdThreatintelsetThreatIntelSetIdRoute,
    postDetectorDetectorIdThreatintelsetThreatIntelSetIdRouteHandler,
  )
  .openapi(postDetectorDetectorIdMalwareScansRoute, postDetectorDetectorIdMalwareScansRouteHandler)
  .openapi(getDetectorDetectorIdAdminRoute, getDetectorDetectorIdAdminRouteHandler)
  .openapi(postDetectorDetectorIdAdminRoute, postDetectorDetectorIdAdminRouteHandler)
  .openapi(postAdminDisableRoute, postAdminDisableRouteHandler)
  .openapi(
    postDetectorDetectorIdAdministratorDisassociateRoute,
    postDetectorDetectorIdAdministratorDisassociateRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdMasterDisassociateRoute,
    postDetectorDetectorIdMasterDisassociateRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdMemberDisassociateRoute,
    postDetectorDetectorIdMemberDisassociateRouteHandler,
  )
  .openapi(postAdminEnableRoute, postAdminEnableRouteHandler)
  .openapi(
    postDetectorDetectorIdCoverageStatisticsRoute,
    postDetectorDetectorIdCoverageStatisticsRouteHandler,
  )
  .openapi(postDetectorDetectorIdFindingsGetRoute, postDetectorDetectorIdFindingsGetRouteHandler)
  .openapi(
    postDetectorDetectorIdFindingsStatisticsRoute,
    postDetectorDetectorIdFindingsStatisticsRouteHandler,
  )
  .openapi(getInvitationCountRoute, getInvitationCountRouteHandler)
  .openapi(
    getDetectorDetectorIdMalwareScanSettingsRoute,
    getDetectorDetectorIdMalwareScanSettingsRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdMalwareScanSettingsRoute,
    postDetectorDetectorIdMalwareScanSettingsRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdMemberDetectorGetRoute,
    postDetectorDetectorIdMemberDetectorGetRouteHandler,
  )
  .openapi(postDetectorDetectorIdMemberGetRoute, postDetectorDetectorIdMemberGetRouteHandler)
  .openapi(
    postDetectorDetectorIdFreeTrialDaysRemainingRoute,
    postDetectorDetectorIdFreeTrialDaysRemainingRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdUsageStatisticsRoute,
    postDetectorDetectorIdUsageStatisticsRouteHandler,
  )
  .openapi(postDetectorDetectorIdMemberInviteRoute, postDetectorDetectorIdMemberInviteRouteHandler)
  .openapi(postDetectorDetectorIdCoverageRoute, postDetectorDetectorIdCoverageRouteHandler)
  .openapi(postDetectorDetectorIdFindingsRoute, postDetectorDetectorIdFindingsRouteHandler)
  .openapi(getInvitationRoute, getInvitationRouteHandler)
  .openapi(getAdminRoute, getAdminRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postDetectorDetectorIdMemberStartRoute, postDetectorDetectorIdMemberStartRouteHandler)
  .openapi(postDetectorDetectorIdMemberStopRoute, postDetectorDetectorIdMemberStopRouteHandler)
  .openapi(
    postDetectorDetectorIdFindingsUnarchiveRoute,
    postDetectorDetectorIdFindingsUnarchiveRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    postDetectorDetectorIdFindingsFeedbackRoute,
    postDetectorDetectorIdFindingsFeedbackRouteHandler,
  )
  .openapi(
    postDetectorDetectorIdMemberDetectorUpdateRoute,
    postDetectorDetectorIdMemberDetectorUpdateRouteHandler,
  )

export default app
