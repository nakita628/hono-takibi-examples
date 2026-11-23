import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrganisationsDeleteOrganisationIdRoute,
  deleteAdminUsersDeleteUserIdRoute,
  deleteAnalystDataDeleteAnalystTypeAnalystDataIDRoute,
  deleteAttributesDeleteAttributeIdRoute,
  deleteAuthKeysDeleteAuthKeyIdRoute,
  deleteCollectionsDeleteCollectionIdRoute,
  deleteEventsDeleteEventIdRoute,
  deleteGalaxiesDeleteGalaxyIdRoute,
  deleteObjectsDeleteObjectIdHardDeleteRoute,
  deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRoute,
  deleteSharingGroupsDeleteSharingGroupIdRoute,
  deleteUserSettingsDeleteUserSettingIdRoute,
  deleteUsersTotpDeleteUserIdRoute,
  getAdminUsersRoute,
  getAdminUsersViewUserIdRoute,
  getAnalystDataIndexAnalystTypeRoute,
  getAnalystDataViewAnalystTypeAnalystDataIDRoute,
  getAttributesAttributeStatisticsContextPercentageRoute,
  getAttributesDescribeTypesRoute,
  getAttributesGetAttributeByB64ValueBase64ValueRoute,
  getAttributesRoute,
  getAttributesViewAttributeIdRoute,
  getAuthKeysRoute,
  getAuthKeysViewAuthKeyIdRoute,
  getCollectionsViewCollectionIdRoute,
  getEventReportsIndexRoute,
  getEventReportsViewEventReportIdRoute,
  getEventsRoute,
  getEventsViewEventIdRoute,
  getFeedsRoute,
  getFeedsViewFeedIdRoute,
  getGalaxiesRoute,
  getGalaxiesViewGalaxyIdRoute,
  getGalaxyClustersIndexGalaxyIdRoute,
  getGalaxyClustersViewGalaxyClusterIdRoute,
  getNoticelistsRoute,
  getNoticelistsViewNoticelistIdRoute,
  getObjectsViewObjectIdRoute,
  getOrganisationsRoute,
  getOrganisationsViewOrganisationIdRoute,
  getServersGetInstanceUUIDRoute,
  getServersGetPyMISPVersionRoute,
  getServersGetSettingSettingNameRoute,
  getServersGetVersionRoute,
  getServersGetWorkersRoute,
  getServersPullServerIdPullTechniqueRoute,
  getServersPushServerIdPushTechniqueRoute,
  getServersRoute,
  getServersServerSettingsRoute,
  getSharingGroupBlueprintsIndexRoute,
  getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRoute,
  getSharingGroupBlueprintsViewSharingGroupBlueprintIdRoute,
  getSharingGroupsRoute,
  getSharingGroupsViewSharingGroupIdRoute,
  getSightingsIndexEventIdRoute,
  getTagsRoute,
  getTagsSearchTagSearchTermRoute,
  getTagsViewTagIdRoute,
  getTaxonomiesExportTaxonomyIdRoute,
  getTaxonomiesRoute,
  getTaxonomiesTaxonomyTagsTaxonomyIdRoute,
  getTaxonomiesViewTaxonomyIdRoute,
  getUserSettingsGetSettingUserIdUserSettingNameRoute,
  getUserSettingsRoute,
  getUserSettingsViewUserSettingIdRoute,
  getWarninglistsRoute,
  getWarninglistsViewWarninglistIdRoute,
  postAdminLogsRoute,
  postAdminOrganisationsAddRoute,
  postAdminUsersAddRoute,
  postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRoute,
  postAnalystDataEditAnalystTypeAnalystDataIDRoute,
  postAnalystDataIndexMinimalRoute,
  postAttributesAddEventIdRoute,
  postAttributesAddTagAttributeIdTagIdLocalLocalRoute,
  postAttributesEnrichAttributeIdRoute,
  postAttributesRemoveTagAttributeIdTagIdRoute,
  postAttributesRestoreAttributeIdRoute,
  postAttributesRestSearchRoute,
  postAuthKeysAddUserIdRoute,
  postAuthKeysEditAuthKeyIdRoute,
  postAuthKeysRoute,
  postCollectionsAddRoute,
  postCollectionsEditCollectionIdRoute,
  postCollectionsIndexFilterRoute,
  postEventReportsAddEventIdRoute,
  postEventReportsDeleteEventReportIdHardDeleteRoute,
  postEventReportsDeleteEventReportIdRoute,
  postEventReportsEditEventReportIdRoute,
  postEventReportsImportReportFromUrlEventIdRoute,
  postEventReportsRestoreEventReportIdRoute,
  postEventsAddRoute,
  postEventsAddTagEventIdTagIdLocalLocalRoute,
  postEventsEnrichEventEventIdRoute,
  postEventsIndexRoute,
  postEventsPublishEventIdRoute,
  postEventsRemoveTagEventIdTagIdRoute,
  postEventsRestSearchRoute,
  postEventsUnpublishEventIdRoute,
  postFeedsAddRoute,
  postFeedsCacheFeedsCacheFeedsScopeRoute,
  postFeedsDisableFeedIdRoute,
  postFeedsEnableFeedIdRoute,
  postFeedsFetchFromAllFeedsRoute,
  postFeedsFetchFromFeedFeedIdRoute,
  postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute,
  postGalaxiesExportGalaxyIdRoute,
  postGalaxiesImportRoute,
  postGalaxiesRoute,
  postGalaxiesUpdateRoute,
  postGalaxyClustersAddGalaxyIdRoute,
  postGalaxyClustersDeleteGalaxyClusterIdRoute,
  postGalaxyClustersIndexGalaxyIdRoute,
  postGalaxyClustersPublishGalaxyClusterIdRoute,
  postGalaxyClustersRestoreGalaxyClusterIdRoute,
  postGalaxyClustersUnpublishGalaxyClusterIdRoute,
  postNoticelistsToggleEnableNoticelistIdRoute,
  postNoticelistsUpdateRoute,
  postObjectsAddEventIdObjectTemplateIdRoute,
  postObjectsRestsearchRoute,
  postServersAddRoute,
  postServersCacheRoute,
  postServersCreateSyncRoute,
  postServersDeleteServerIdRoute,
  postServersImportRoute,
  postServersKillAllWorkersRoute,
  postServersRestartDeadWorkersRoute,
  postServersRestartWorkersRoute,
  postServersServerSettingsEditSettingNameRoute,
  postServersStartWorkerWorkerTypeRoute,
  postServersStopWorkerWorkerPidRoute,
  postServersUpdateJSONRoute,
  postServersUpdateRoute,
  postSharingGroupBlueprintsAddRoute,
  postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRoute,
  postSharingGroupBlueprintsEditSharingGroupBlueprintIdRoute,
  postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRoute,
  postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute,
  postSharingGroupsAddRoute,
  postSharingGroupsAddServerSharingGroupIdServerIdRoute,
  postSharingGroupsEditSharingGroupIdRoute,
  postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute,
  postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute,
  postSightingsAddAttributeIdRoute,
  postSightingsAddRoute,
  postSightingsDeleteSightingIdRoute,
  postTagsAddRoute,
  postTagsDeleteTagIdRoute,
  postTagsEditTagIdRoute,
  postTaxonomiesDisableTaxonomyIdRoute,
  postTaxonomiesEnableTaxonomyIdRoute,
  postTaxonomiesUpdateRoute,
  postUserSettingsRoute,
  postUserSettingsSetSettingUserIdUserSettingNameRoute,
  postUsersInitiatePasswordResetUserIdFirstTimeResetRoute,
  postWarninglistsCheckValueRoute,
  postWarninglistsRoute,
  postWarninglistsToggleEnableRoute,
  postWarninglistsUpdateRoute,
  putAdminOrganisationsEditOrganisationIdRoute,
  putAdminUsersEditUserIdRoute,
  putAttributesEditAttributeIdRoute,
  putEventsEditEventIdRoute,
  putFeedsEditFeedIdRoute,
  putGalaxyClustersEditGalaxyClusterIdRoute,
  putServersEditServerIdRoute,
} from './routes'
import {
  deleteAdminOrganisationsDeleteOrganisationIdRouteHandler,
  deleteAdminUsersDeleteUserIdRouteHandler,
  deleteAnalystDataDeleteAnalystTypeAnalystDataIDRouteHandler,
  deleteAttributesDeleteAttributeIdRouteHandler,
  deleteAuthKeysDeleteAuthKeyIdRouteHandler,
  deleteCollectionsDeleteCollectionIdRouteHandler,
  deleteEventsDeleteEventIdRouteHandler,
  deleteGalaxiesDeleteGalaxyIdRouteHandler,
  deleteObjectsDeleteObjectIdHardDeleteRouteHandler,
  deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRouteHandler,
  deleteSharingGroupsDeleteSharingGroupIdRouteHandler,
  deleteUserSettingsDeleteUserSettingIdRouteHandler,
  deleteUsersTotpDeleteUserIdRouteHandler,
  getAdminUsersRouteHandler,
  getAdminUsersViewUserIdRouteHandler,
  getAnalystDataIndexAnalystTypeRouteHandler,
  getAnalystDataViewAnalystTypeAnalystDataIDRouteHandler,
  getAttributesAttributeStatisticsContextPercentageRouteHandler,
  getAttributesDescribeTypesRouteHandler,
  getAttributesGetAttributeByB64ValueBase64ValueRouteHandler,
  getAttributesRouteHandler,
  getAttributesViewAttributeIdRouteHandler,
  getAuthKeysRouteHandler,
  getAuthKeysViewAuthKeyIdRouteHandler,
  getCollectionsViewCollectionIdRouteHandler,
  getEventReportsIndexRouteHandler,
  getEventReportsViewEventReportIdRouteHandler,
  getEventsRouteHandler,
  getEventsViewEventIdRouteHandler,
  getFeedsRouteHandler,
  getFeedsViewFeedIdRouteHandler,
  getGalaxiesRouteHandler,
  getGalaxiesViewGalaxyIdRouteHandler,
  getGalaxyClustersIndexGalaxyIdRouteHandler,
  getGalaxyClustersViewGalaxyClusterIdRouteHandler,
  getNoticelistsRouteHandler,
  getNoticelistsViewNoticelistIdRouteHandler,
  getObjectsViewObjectIdRouteHandler,
  getOrganisationsRouteHandler,
  getOrganisationsViewOrganisationIdRouteHandler,
  getServersGetInstanceUUIDRouteHandler,
  getServersGetPyMISPVersionRouteHandler,
  getServersGetSettingSettingNameRouteHandler,
  getServersGetVersionRouteHandler,
  getServersGetWorkersRouteHandler,
  getServersPullServerIdPullTechniqueRouteHandler,
  getServersPushServerIdPushTechniqueRouteHandler,
  getServersRouteHandler,
  getServersServerSettingsRouteHandler,
  getSharingGroupBlueprintsIndexRouteHandler,
  getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRouteHandler,
  getSharingGroupBlueprintsViewSharingGroupBlueprintIdRouteHandler,
  getSharingGroupsRouteHandler,
  getSharingGroupsViewSharingGroupIdRouteHandler,
  getSightingsIndexEventIdRouteHandler,
  getTagsRouteHandler,
  getTagsSearchTagSearchTermRouteHandler,
  getTagsViewTagIdRouteHandler,
  getTaxonomiesExportTaxonomyIdRouteHandler,
  getTaxonomiesRouteHandler,
  getTaxonomiesTaxonomyTagsTaxonomyIdRouteHandler,
  getTaxonomiesViewTaxonomyIdRouteHandler,
  getUserSettingsGetSettingUserIdUserSettingNameRouteHandler,
  getUserSettingsRouteHandler,
  getUserSettingsViewUserSettingIdRouteHandler,
  getWarninglistsRouteHandler,
  getWarninglistsViewWarninglistIdRouteHandler,
  postAdminLogsRouteHandler,
  postAdminOrganisationsAddRouteHandler,
  postAdminUsersAddRouteHandler,
  postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRouteHandler,
  postAnalystDataEditAnalystTypeAnalystDataIDRouteHandler,
  postAnalystDataIndexMinimalRouteHandler,
  postAttributesAddEventIdRouteHandler,
  postAttributesAddTagAttributeIdTagIdLocalLocalRouteHandler,
  postAttributesEnrichAttributeIdRouteHandler,
  postAttributesRemoveTagAttributeIdTagIdRouteHandler,
  postAttributesRestoreAttributeIdRouteHandler,
  postAttributesRestSearchRouteHandler,
  postAuthKeysAddUserIdRouteHandler,
  postAuthKeysEditAuthKeyIdRouteHandler,
  postAuthKeysRouteHandler,
  postCollectionsAddRouteHandler,
  postCollectionsEditCollectionIdRouteHandler,
  postCollectionsIndexFilterRouteHandler,
  postEventReportsAddEventIdRouteHandler,
  postEventReportsDeleteEventReportIdHardDeleteRouteHandler,
  postEventReportsDeleteEventReportIdRouteHandler,
  postEventReportsEditEventReportIdRouteHandler,
  postEventReportsImportReportFromUrlEventIdRouteHandler,
  postEventReportsRestoreEventReportIdRouteHandler,
  postEventsAddRouteHandler,
  postEventsAddTagEventIdTagIdLocalLocalRouteHandler,
  postEventsEnrichEventEventIdRouteHandler,
  postEventsIndexRouteHandler,
  postEventsPublishEventIdRouteHandler,
  postEventsRemoveTagEventIdTagIdRouteHandler,
  postEventsRestSearchRouteHandler,
  postEventsUnpublishEventIdRouteHandler,
  postFeedsAddRouteHandler,
  postFeedsCacheFeedsCacheFeedsScopeRouteHandler,
  postFeedsDisableFeedIdRouteHandler,
  postFeedsEnableFeedIdRouteHandler,
  postFeedsFetchFromAllFeedsRouteHandler,
  postFeedsFetchFromFeedFeedIdRouteHandler,
  postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRouteHandler,
  postGalaxiesExportGalaxyIdRouteHandler,
  postGalaxiesImportRouteHandler,
  postGalaxiesRouteHandler,
  postGalaxiesUpdateRouteHandler,
  postGalaxyClustersAddGalaxyIdRouteHandler,
  postGalaxyClustersDeleteGalaxyClusterIdRouteHandler,
  postGalaxyClustersIndexGalaxyIdRouteHandler,
  postGalaxyClustersPublishGalaxyClusterIdRouteHandler,
  postGalaxyClustersRestoreGalaxyClusterIdRouteHandler,
  postGalaxyClustersUnpublishGalaxyClusterIdRouteHandler,
  postNoticelistsToggleEnableNoticelistIdRouteHandler,
  postNoticelistsUpdateRouteHandler,
  postObjectsAddEventIdObjectTemplateIdRouteHandler,
  postObjectsRestsearchRouteHandler,
  postServersAddRouteHandler,
  postServersCacheRouteHandler,
  postServersCreateSyncRouteHandler,
  postServersDeleteServerIdRouteHandler,
  postServersImportRouteHandler,
  postServersKillAllWorkersRouteHandler,
  postServersRestartDeadWorkersRouteHandler,
  postServersRestartWorkersRouteHandler,
  postServersServerSettingsEditSettingNameRouteHandler,
  postServersStartWorkerWorkerTypeRouteHandler,
  postServersStopWorkerWorkerPidRouteHandler,
  postServersUpdateJSONRouteHandler,
  postServersUpdateRouteHandler,
  postSharingGroupBlueprintsAddRouteHandler,
  postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRouteHandler,
  postSharingGroupBlueprintsEditSharingGroupBlueprintIdRouteHandler,
  postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRouteHandler,
  postSharingGroupsAddOrgSharingGroupIdOrganisationIdRouteHandler,
  postSharingGroupsAddRouteHandler,
  postSharingGroupsAddServerSharingGroupIdServerIdRouteHandler,
  postSharingGroupsEditSharingGroupIdRouteHandler,
  postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRouteHandler,
  postSharingGroupsRemoveServerSharingGroupServerIdServerIdRouteHandler,
  postSightingsAddAttributeIdRouteHandler,
  postSightingsAddRouteHandler,
  postSightingsDeleteSightingIdRouteHandler,
  postTagsAddRouteHandler,
  postTagsDeleteTagIdRouteHandler,
  postTagsEditTagIdRouteHandler,
  postTaxonomiesDisableTaxonomyIdRouteHandler,
  postTaxonomiesEnableTaxonomyIdRouteHandler,
  postTaxonomiesUpdateRouteHandler,
  postUserSettingsRouteHandler,
  postUserSettingsSetSettingUserIdUserSettingNameRouteHandler,
  postUsersInitiatePasswordResetUserIdFirstTimeResetRouteHandler,
  postWarninglistsCheckValueRouteHandler,
  postWarninglistsRouteHandler,
  postWarninglistsToggleEnableRouteHandler,
  postWarninglistsUpdateRouteHandler,
  putAdminOrganisationsEditOrganisationIdRouteHandler,
  putAdminUsersEditUserIdRouteHandler,
  putAttributesEditAttributeIdRouteHandler,
  putEventsEditEventIdRouteHandler,
  putFeedsEditFeedIdRouteHandler,
  putGalaxyClustersEditGalaxyClusterIdRouteHandler,
  putServersEditServerIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRoute,
    postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRouteHandler,
  )
  .openapi(
    postAnalystDataEditAnalystTypeAnalystDataIDRoute,
    postAnalystDataEditAnalystTypeAnalystDataIDRouteHandler,
  )
  .openapi(
    deleteAnalystDataDeleteAnalystTypeAnalystDataIDRoute,
    deleteAnalystDataDeleteAnalystTypeAnalystDataIDRouteHandler,
  )
  .openapi(getAnalystDataIndexAnalystTypeRoute, getAnalystDataIndexAnalystTypeRouteHandler)
  .openapi(
    getAnalystDataViewAnalystTypeAnalystDataIDRoute,
    getAnalystDataViewAnalystTypeAnalystDataIDRouteHandler,
  )
  .openapi(postAnalystDataIndexMinimalRoute, postAnalystDataIndexMinimalRouteHandler)
  .openapi(postAttributesRestSearchRoute, postAttributesRestSearchRouteHandler)
  .openapi(postAttributesAddEventIdRoute, postAttributesAddEventIdRouteHandler)
  .openapi(putAttributesEditAttributeIdRoute, putAttributesEditAttributeIdRouteHandler)
  .openapi(deleteAttributesDeleteAttributeIdRoute, deleteAttributesDeleteAttributeIdRouteHandler)
  .openapi(postAttributesRestoreAttributeIdRoute, postAttributesRestoreAttributeIdRouteHandler)
  .openapi(
    postAttributesAddTagAttributeIdTagIdLocalLocalRoute,
    postAttributesAddTagAttributeIdTagIdLocalLocalRouteHandler,
  )
  .openapi(
    postAttributesRemoveTagAttributeIdTagIdRoute,
    postAttributesRemoveTagAttributeIdTagIdRouteHandler,
  )
  .openapi(getAttributesRoute, getAttributesRouteHandler)
  .openapi(getAttributesViewAttributeIdRoute, getAttributesViewAttributeIdRouteHandler)
  .openapi(
    getAttributesGetAttributeByB64ValueBase64ValueRoute,
    getAttributesGetAttributeByB64ValueBase64ValueRouteHandler,
  )
  .openapi(
    getAttributesAttributeStatisticsContextPercentageRoute,
    getAttributesAttributeStatisticsContextPercentageRouteHandler,
  )
  .openapi(getAttributesDescribeTypesRoute, getAttributesDescribeTypesRouteHandler)
  .openapi(postAttributesEnrichAttributeIdRoute, postAttributesEnrichAttributeIdRouteHandler)
  .openapi(postCollectionsAddRoute, postCollectionsAddRouteHandler)
  .openapi(postCollectionsEditCollectionIdRoute, postCollectionsEditCollectionIdRouteHandler)
  .openapi(
    deleteCollectionsDeleteCollectionIdRoute,
    deleteCollectionsDeleteCollectionIdRouteHandler,
  )
  .openapi(getCollectionsViewCollectionIdRoute, getCollectionsViewCollectionIdRouteHandler)
  .openapi(postCollectionsIndexFilterRoute, postCollectionsIndexFilterRouteHandler)
  .openapi(getEventReportsViewEventReportIdRoute, getEventReportsViewEventReportIdRouteHandler)
  .openapi(postEventReportsAddEventIdRoute, postEventReportsAddEventIdRouteHandler)
  .openapi(postEventReportsEditEventReportIdRoute, postEventReportsEditEventReportIdRouteHandler)
  .openapi(
    postEventReportsDeleteEventReportIdRoute,
    postEventReportsDeleteEventReportIdRouteHandler,
  )
  .openapi(
    postEventReportsDeleteEventReportIdHardDeleteRoute,
    postEventReportsDeleteEventReportIdHardDeleteRouteHandler,
  )
  .openapi(
    postEventReportsRestoreEventReportIdRoute,
    postEventReportsRestoreEventReportIdRouteHandler,
  )
  .openapi(getEventReportsIndexRoute, getEventReportsIndexRouteHandler)
  .openapi(
    postEventReportsImportReportFromUrlEventIdRoute,
    postEventReportsImportReportFromUrlEventIdRouteHandler,
  )
  .openapi(postEventsRestSearchRoute, postEventsRestSearchRouteHandler)
  .openapi(postEventsAddRoute, postEventsAddRouteHandler)
  .openapi(putEventsEditEventIdRoute, putEventsEditEventIdRouteHandler)
  .openapi(deleteEventsDeleteEventIdRoute, deleteEventsDeleteEventIdRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsIndexRoute, postEventsIndexRouteHandler)
  .openapi(getEventsViewEventIdRoute, getEventsViewEventIdRouteHandler)
  .openapi(postEventsPublishEventIdRoute, postEventsPublishEventIdRouteHandler)
  .openapi(postEventsUnpublishEventIdRoute, postEventsUnpublishEventIdRouteHandler)
  .openapi(
    postEventsAddTagEventIdTagIdLocalLocalRoute,
    postEventsAddTagEventIdTagIdLocalLocalRouteHandler,
  )
  .openapi(postEventsRemoveTagEventIdTagIdRoute, postEventsRemoveTagEventIdTagIdRouteHandler)
  .openapi(postEventsEnrichEventEventIdRoute, postEventsEnrichEventEventIdRouteHandler)
  .openapi(getGalaxiesRoute, getGalaxiesRouteHandler)
  .openapi(postGalaxiesRoute, postGalaxiesRouteHandler)
  .openapi(getGalaxiesViewGalaxyIdRoute, getGalaxiesViewGalaxyIdRouteHandler)
  .openapi(postGalaxiesUpdateRoute, postGalaxiesUpdateRouteHandler)
  .openapi(deleteGalaxiesDeleteGalaxyIdRoute, deleteGalaxiesDeleteGalaxyIdRouteHandler)
  .openapi(postGalaxiesImportRoute, postGalaxiesImportRouteHandler)
  .openapi(postGalaxiesExportGalaxyIdRoute, postGalaxiesExportGalaxyIdRouteHandler)
  .openapi(
    postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute,
    postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRouteHandler,
  )
  .openapi(postGalaxyClustersAddGalaxyIdRoute, postGalaxyClustersAddGalaxyIdRouteHandler)
  .openapi(
    putGalaxyClustersEditGalaxyClusterIdRoute,
    putGalaxyClustersEditGalaxyClusterIdRouteHandler,
  )
  .openapi(getGalaxyClustersIndexGalaxyIdRoute, getGalaxyClustersIndexGalaxyIdRouteHandler)
  .openapi(postGalaxyClustersIndexGalaxyIdRoute, postGalaxyClustersIndexGalaxyIdRouteHandler)
  .openapi(
    getGalaxyClustersViewGalaxyClusterIdRoute,
    getGalaxyClustersViewGalaxyClusterIdRouteHandler,
  )
  .openapi(
    postGalaxyClustersPublishGalaxyClusterIdRoute,
    postGalaxyClustersPublishGalaxyClusterIdRouteHandler,
  )
  .openapi(
    postGalaxyClustersUnpublishGalaxyClusterIdRoute,
    postGalaxyClustersUnpublishGalaxyClusterIdRouteHandler,
  )
  .openapi(
    postGalaxyClustersDeleteGalaxyClusterIdRoute,
    postGalaxyClustersDeleteGalaxyClusterIdRouteHandler,
  )
  .openapi(
    postGalaxyClustersRestoreGalaxyClusterIdRoute,
    postGalaxyClustersRestoreGalaxyClusterIdRouteHandler,
  )
  .openapi(
    postUsersInitiatePasswordResetUserIdFirstTimeResetRoute,
    postUsersInitiatePasswordResetUserIdFirstTimeResetRouteHandler,
  )
  .openapi(postAdminUsersAddRoute, postAdminUsersAddRouteHandler)
  .openapi(putAdminUsersEditUserIdRoute, putAdminUsersEditUserIdRouteHandler)
  .openapi(deleteAdminUsersDeleteUserIdRoute, deleteAdminUsersDeleteUserIdRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(getAdminUsersViewUserIdRoute, getAdminUsersViewUserIdRouteHandler)
  .openapi(deleteUsersTotpDeleteUserIdRoute, deleteUsersTotpDeleteUserIdRouteHandler)
  .openapi(postAdminOrganisationsAddRoute, postAdminOrganisationsAddRouteHandler)
  .openapi(
    putAdminOrganisationsEditOrganisationIdRoute,
    putAdminOrganisationsEditOrganisationIdRouteHandler,
  )
  .openapi(
    deleteAdminOrganisationsDeleteOrganisationIdRoute,
    deleteAdminOrganisationsDeleteOrganisationIdRouteHandler,
  )
  .openapi(postAdminLogsRoute, postAdminLogsRouteHandler)
  .openapi(getOrganisationsRoute, getOrganisationsRouteHandler)
  .openapi(getOrganisationsViewOrganisationIdRoute, getOrganisationsViewOrganisationIdRouteHandler)
  .openapi(postServersAddRoute, postServersAddRouteHandler)
  .openapi(putServersEditServerIdRoute, putServersEditServerIdRouteHandler)
  .openapi(postServersDeleteServerIdRoute, postServersDeleteServerIdRouteHandler)
  .openapi(getServersRoute, getServersRouteHandler)
  .openapi(
    getServersPullServerIdPullTechniqueRoute,
    getServersPullServerIdPullTechniqueRouteHandler,
  )
  .openapi(
    getServersPushServerIdPushTechniqueRoute,
    getServersPushServerIdPushTechniqueRouteHandler,
  )
  .openapi(getServersGetVersionRoute, getServersGetVersionRouteHandler)
  .openapi(getServersGetPyMISPVersionRoute, getServersGetPyMISPVersionRouteHandler)
  .openapi(getServersServerSettingsRoute, getServersServerSettingsRouteHandler)
  .openapi(getServersGetWorkersRoute, getServersGetWorkersRouteHandler)
  .openapi(postServersStartWorkerWorkerTypeRoute, postServersStartWorkerWorkerTypeRouteHandler)
  .openapi(postServersStopWorkerWorkerPidRoute, postServersStopWorkerWorkerPidRouteHandler)
  .openapi(postServersKillAllWorkersRoute, postServersKillAllWorkersRouteHandler)
  .openapi(postServersRestartWorkersRoute, postServersRestartWorkersRouteHandler)
  .openapi(postServersRestartDeadWorkersRoute, postServersRestartDeadWorkersRouteHandler)
  .openapi(postServersUpdateRoute, postServersUpdateRouteHandler)
  .openapi(postServersUpdateJSONRoute, postServersUpdateJSONRouteHandler)
  .openapi(postServersCacheRoute, postServersCacheRouteHandler)
  .openapi(postServersCreateSyncRoute, postServersCreateSyncRouteHandler)
  .openapi(getServersGetInstanceUUIDRoute, getServersGetInstanceUUIDRouteHandler)
  .openapi(getServersGetSettingSettingNameRoute, getServersGetSettingSettingNameRouteHandler)
  .openapi(
    postServersServerSettingsEditSettingNameRoute,
    postServersServerSettingsEditSettingNameRouteHandler,
  )
  .openapi(postServersImportRoute, postServersImportRouteHandler)
  .openapi(postSharingGroupsAddRoute, postSharingGroupsAddRouteHandler)
  .openapi(
    postSharingGroupsEditSharingGroupIdRoute,
    postSharingGroupsEditSharingGroupIdRouteHandler,
  )
  .openapi(
    deleteSharingGroupsDeleteSharingGroupIdRoute,
    deleteSharingGroupsDeleteSharingGroupIdRouteHandler,
  )
  .openapi(getSharingGroupsRoute, getSharingGroupsRouteHandler)
  .openapi(getSharingGroupsViewSharingGroupIdRoute, getSharingGroupsViewSharingGroupIdRouteHandler)
  .openapi(
    postSharingGroupsAddOrgSharingGroupIdOrganisationIdRoute,
    postSharingGroupsAddOrgSharingGroupIdOrganisationIdRouteHandler,
  )
  .openapi(
    postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRoute,
    postSharingGroupsRemoveOrgSharingGroupIdOrganisationIdRouteHandler,
  )
  .openapi(
    postSharingGroupsAddServerSharingGroupIdServerIdRoute,
    postSharingGroupsAddServerSharingGroupIdServerIdRouteHandler,
  )
  .openapi(
    postSharingGroupsRemoveServerSharingGroupServerIdServerIdRoute,
    postSharingGroupsRemoveServerSharingGroupServerIdServerIdRouteHandler,
  )
  .openapi(postSharingGroupBlueprintsAddRoute, postSharingGroupBlueprintsAddRouteHandler)
  .openapi(
    deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRoute,
    deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(
    postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRoute,
    postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(
    postSharingGroupBlueprintsEditSharingGroupBlueprintIdRoute,
    postSharingGroupBlueprintsEditSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(
    postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRoute,
    postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(getSharingGroupBlueprintsIndexRoute, getSharingGroupBlueprintsIndexRouteHandler)
  .openapi(
    getSharingGroupBlueprintsViewSharingGroupBlueprintIdRoute,
    getSharingGroupBlueprintsViewSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(
    getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRoute,
    getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRouteHandler,
  )
  .openapi(getFeedsRoute, getFeedsRouteHandler)
  .openapi(getFeedsViewFeedIdRoute, getFeedsViewFeedIdRouteHandler)
  .openapi(postFeedsAddRoute, postFeedsAddRouteHandler)
  .openapi(putFeedsEditFeedIdRoute, putFeedsEditFeedIdRouteHandler)
  .openapi(postFeedsEnableFeedIdRoute, postFeedsEnableFeedIdRouteHandler)
  .openapi(postFeedsDisableFeedIdRoute, postFeedsDisableFeedIdRouteHandler)
  .openapi(postFeedsCacheFeedsCacheFeedsScopeRoute, postFeedsCacheFeedsCacheFeedsScopeRouteHandler)
  .openapi(postFeedsFetchFromFeedFeedIdRoute, postFeedsFetchFromFeedFeedIdRouteHandler)
  .openapi(postFeedsFetchFromAllFeedsRoute, postFeedsFetchFromAllFeedsRouteHandler)
  .openapi(getWarninglistsRoute, getWarninglistsRouteHandler)
  .openapi(postWarninglistsRoute, postWarninglistsRouteHandler)
  .openapi(postWarninglistsToggleEnableRoute, postWarninglistsToggleEnableRouteHandler)
  .openapi(getWarninglistsViewWarninglistIdRoute, getWarninglistsViewWarninglistIdRouteHandler)
  .openapi(postWarninglistsCheckValueRoute, postWarninglistsCheckValueRouteHandler)
  .openapi(postWarninglistsUpdateRoute, postWarninglistsUpdateRouteHandler)
  .openapi(getNoticelistsRoute, getNoticelistsRouteHandler)
  .openapi(getNoticelistsViewNoticelistIdRoute, getNoticelistsViewNoticelistIdRouteHandler)
  .openapi(
    postNoticelistsToggleEnableNoticelistIdRoute,
    postNoticelistsToggleEnableNoticelistIdRouteHandler,
  )
  .openapi(postNoticelistsUpdateRoute, postNoticelistsUpdateRouteHandler)
  .openapi(postObjectsRestsearchRoute, postObjectsRestsearchRouteHandler)
  .openapi(
    postObjectsAddEventIdObjectTemplateIdRoute,
    postObjectsAddEventIdObjectTemplateIdRouteHandler,
  )
  .openapi(getObjectsViewObjectIdRoute, getObjectsViewObjectIdRouteHandler)
  .openapi(
    deleteObjectsDeleteObjectIdHardDeleteRoute,
    deleteObjectsDeleteObjectIdHardDeleteRouteHandler,
  )
  .openapi(getSightingsIndexEventIdRoute, getSightingsIndexEventIdRouteHandler)
  .openapi(postSightingsAddRoute, postSightingsAddRouteHandler)
  .openapi(postSightingsAddAttributeIdRoute, postSightingsAddAttributeIdRouteHandler)
  .openapi(postSightingsDeleteSightingIdRoute, postSightingsDeleteSightingIdRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTagsViewTagIdRoute, getTagsViewTagIdRouteHandler)
  .openapi(postTagsAddRoute, postTagsAddRouteHandler)
  .openapi(postTagsDeleteTagIdRoute, postTagsDeleteTagIdRouteHandler)
  .openapi(postTagsEditTagIdRoute, postTagsEditTagIdRouteHandler)
  .openapi(getTagsSearchTagSearchTermRoute, getTagsSearchTagSearchTermRouteHandler)
  .openapi(getAuthKeysRoute, getAuthKeysRouteHandler)
  .openapi(postAuthKeysRoute, postAuthKeysRouteHandler)
  .openapi(postAuthKeysAddUserIdRoute, postAuthKeysAddUserIdRouteHandler)
  .openapi(getAuthKeysViewAuthKeyIdRoute, getAuthKeysViewAuthKeyIdRouteHandler)
  .openapi(postAuthKeysEditAuthKeyIdRoute, postAuthKeysEditAuthKeyIdRouteHandler)
  .openapi(deleteAuthKeysDeleteAuthKeyIdRoute, deleteAuthKeysDeleteAuthKeyIdRouteHandler)
  .openapi(getUserSettingsRoute, getUserSettingsRouteHandler)
  .openapi(postUserSettingsRoute, postUserSettingsRouteHandler)
  .openapi(getUserSettingsViewUserSettingIdRoute, getUserSettingsViewUserSettingIdRouteHandler)
  .openapi(
    postUserSettingsSetSettingUserIdUserSettingNameRoute,
    postUserSettingsSetSettingUserIdUserSettingNameRouteHandler,
  )
  .openapi(
    getUserSettingsGetSettingUserIdUserSettingNameRoute,
    getUserSettingsGetSettingUserIdUserSettingNameRouteHandler,
  )
  .openapi(
    deleteUserSettingsDeleteUserSettingIdRoute,
    deleteUserSettingsDeleteUserSettingIdRouteHandler,
  )
  .openapi(getTaxonomiesRoute, getTaxonomiesRouteHandler)
  .openapi(getTaxonomiesViewTaxonomyIdRoute, getTaxonomiesViewTaxonomyIdRouteHandler)
  .openapi(postTaxonomiesEnableTaxonomyIdRoute, postTaxonomiesEnableTaxonomyIdRouteHandler)
  .openapi(postTaxonomiesDisableTaxonomyIdRoute, postTaxonomiesDisableTaxonomyIdRouteHandler)
  .openapi(postTaxonomiesUpdateRoute, postTaxonomiesUpdateRouteHandler)
  .openapi(
    getTaxonomiesTaxonomyTagsTaxonomyIdRoute,
    getTaxonomiesTaxonomyTagsTaxonomyIdRouteHandler,
  )
  .openapi(getTaxonomiesExportTaxonomyIdRoute, getTaxonomiesExportTaxonomyIdRouteHandler)

export default app
