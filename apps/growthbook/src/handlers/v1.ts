import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ArchetypesIdRoute,
  deleteV1AttributesPropertyRoute,
  deleteV1ConfigsKeyRoute,
  deleteV1ConfigsRevisionsKeyVersionProjectionRoute,
  deleteV1ConfigsRevisionsKeyVersionPropertyRoute,
  deleteV1ConstantsKeyRoute,
  deleteV1ContextualBanditQueriesIdRoute,
  deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  deleteV1ContextualBanditsIdRoute,
  deleteV1CustomFieldsIdRoute,
  deleteV1CustomHooksIdRoute,
  deleteV1DashboardsIdRoute,
  deleteV1DataSourcesIdRoute,
  deleteV1DimensionsIdRoute,
  deleteV1EnvironmentsIdRoute,
  deleteV1EventWebhooksIdRoute,
  deleteV1ExperimentsIdRoute,
  deleteV1ExperimentsIdVariationVariationIdScreenshotRoute,
  deleteV1ExperimentTemplatesIdRoute,
  deleteV1FactMetricsIdRoute,
  deleteV1FactTablesFactTableIdFiltersIdRoute,
  deleteV1FactTablesFactTableIdVirtualColumnsIdRoute,
  deleteV1FactTablesIdRoute,
  deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  deleteV1FeaturesIdRevisionsVersionRulesRuleIdRoute,
  deleteV1FeaturesIdRoute,
  deleteV1InterleavingExposureQueriesIdRoute,
  deleteV1InterleavingsIdRoute,
  deleteV1LearningsIdRoute,
  deleteV1MembersIdRoute,
  deleteV1MetricGroupsIdRoute,
  deleteV1MetricsIdRoute,
  deleteV1NamespacesIdRoute,
  deleteV1PopulationsIdRoute,
  deleteV1ProjectsIdRoute,
  deleteV1RampSchedulesIdRoute,
  deleteV1RampScheduleTemplatesIdRoute,
  deleteV1SavedGroupsIdRoute,
  deleteV1SavedGroupsIdUploadsVersionRoute,
  deleteV1SdkConnectionsIdRoute,
  deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute,
  deleteV1SdkWebhooksIdRoute,
  deleteV1SegmentsIdRoute,
  deleteV1TeamsIdMembersRoute,
  deleteV1TeamsIdRoute,
  deleteV1WebhookSecretsIdRoute,
  getV1ArchetypesIdRoute,
  getV1ArchetypesRoute,
  getV1AttributesRoute,
  getV1AuditsRoute,
  getV1AutoRunsIdRoute,
  getV1AutoRunsRoute,
  getV1CodeRefsIdRoute,
  getV1CodeRefsRoute,
  getV1ConfigsKeyKeyUsageRoute,
  getV1ConfigsKeyLineageRoute,
  getV1ConfigsKeyReferencesRoute,
  getV1ConfigsKeyRoute,
  getV1ConfigsKeySchemaRoute,
  getV1ConfigsRevisionsKeyLatestRoute,
  getV1ConfigsRevisionsKeyRoute,
  getV1ConfigsRevisionsKeyVersionMergeStatusRoute,
  getV1ConfigsRevisionsKeyVersionRoute,
  getV1ConfigsRevisionsRoute,
  getV1ConfigsRoute,
  getV1ConfirmationsIdRoute,
  getV1ConfirmationsRoute,
  getV1ConstantsKeyReferencesRoute,
  getV1ConstantsKeyRoute,
  getV1ConstantsRevisionsKeyLatestRoute,
  getV1ConstantsRevisionsKeyRoute,
  getV1ConstantsRevisionsKeyVersionMergeStatusRoute,
  getV1ConstantsRevisionsKeyVersionRoute,
  getV1ConstantsRevisionsRoute,
  getV1ConstantsRoute,
  getV1ContextualBanditQueriesIdRoute,
  getV1ContextualBanditQueriesRoute,
  getV1ContextualBanditsIdCurrentRoute,
  getV1ContextualBanditsIdEventsEventIdRoute,
  getV1ContextualBanditsIdEventsRoute,
  getV1ContextualBanditsIdLinkedFeaturesRoute,
  getV1ContextualBanditsIdResultsRoute,
  getV1ContextualBanditsIdRoute,
  getV1ContextualBanditsIdSnapshotsRoute,
  getV1ContextualBanditsIdSnapshotsSnapshotIdRoute,
  getV1ContextualBanditsIdStatusRoute,
  getV1ContextualBanditsIdVisualChangesetsRoute,
  getV1ContextualBanditsRoute,
  getV1CustomFieldsIdRoute,
  getV1CustomFieldsRoute,
  getV1CustomHooksIdHistoryRoute,
  getV1CustomHooksIdRoute,
  getV1CustomHooksRoute,
  getV1DashboardsByExperimentExperimentIdRoute,
  getV1DashboardsIdRoute,
  getV1DashboardsRoute,
  getV1DataSourcesDataSourceIdInformationSchemaRoute,
  getV1DataSourcesIdQueriesRoute,
  getV1DataSourcesIdRoute,
  getV1DataSourcesRoute,
  getV1DimensionsIdRoute,
  getV1DimensionsRoute,
  getV1EnvironmentsRoute,
  getV1EventsIdRoute,
  getV1EventsRoute,
  getV1EventWebhooksIdLogsRoute,
  getV1EventWebhooksIdRoute,
  getV1EventWebhooksRoute,
  getV1ExperimentNamesRoute,
  getV1ExperimentsIdResultsRoute,
  getV1ExperimentsIdRoute,
  getV1ExperimentsIdStartChecklistRoute,
  getV1ExperimentsIdVisualChangesetsRoute,
  getV1ExperimentsResultsRoute,
  getV1ExperimentsRoute,
  getV1ExperimentTemplatesIdRoute,
  getV1ExperimentTemplatesRoute,
  getV1FactMetricsIdRoute,
  getV1FactMetricsRoute,
  getV1FactTablesFactTableIdFiltersIdRoute,
  getV1FactTablesFactTableIdFiltersRoute,
  getV1FactTablesIdAggregatedTablesRoute,
  getV1FactTablesIdAggregatedTablesRunsRoute,
  getV1FactTablesIdAggregatedTablesRunsRunIdRoute,
  getV1FactTablesIdRoute,
  getV1FactTablesRoute,
  getV1FeatureKeysRoute,
  getV1FeaturesIdRevisionsLatestRoute,
  getV1FeaturesIdRevisionsRoute,
  getV1FeaturesIdRevisionsVersionMergeStatusRoute,
  getV1FeaturesIdRevisionsVersionRoute,
  getV1FeaturesIdRoute,
  getV1FeaturesRoute,
  getV1HoldoutsIdRoute,
  getV1HoldoutsRoute,
  getV1InformationSchemaTablesTableIdRoute,
  getV1InterleavingExposureQueriesIdRoute,
  getV1InterleavingExposureQueriesRoute,
  getV1InterleavingsIdResultsRoute,
  getV1InterleavingsIdRoute,
  getV1InterleavingsIdSnapshotsRoute,
  getV1InterleavingsIdSnapshotsSnapshotIdRoute,
  getV1InterleavingsIdStatusRoute,
  getV1InterleavingsRoute,
  getV1LearningsIdRoute,
  getV1LearningsRoute,
  getV1MembersRoute,
  getV1MetricGroupsIdRoute,
  getV1MetricGroupsRoute,
  getV1MetricsIdExperimentsRoute,
  getV1MetricsIdRoute,
  getV1MetricsRoute,
  getV1NamespacesIdMembershipsRoute,
  getV1NamespacesIdRoute,
  getV1NamespacesRoute,
  getV1OrganizationsRoute,
  getV1PopulationsIdRoute,
  getV1PopulationsRoute,
  getV1ProductAnalyticsColumnsRoute,
  getV1ProductAnalyticsExplorationsIdRoute,
  getV1ProductAnalyticsSearchRoute,
  getV1ProjectsIdRoute,
  getV1ProjectsRoute,
  getV1QueriesIdRoute,
  getV1RampSchedulesIdRoute,
  getV1RampSchedulesIdStatusRoute,
  getV1RampSchedulesRoute,
  getV1RampScheduleTemplatesIdRoute,
  getV1RampScheduleTemplatesRoute,
  getV1ReportsIdRoute,
  getV1ReportsRoute,
  getV1RevisionsRoute,
  getV1SavedGroupsIdReferencesRoute,
  getV1SavedGroupsIdRoute,
  getV1SavedGroupsIdUploadsRoute,
  getV1SavedGroupsIdUploadsVersionRoute,
  getV1SavedGroupsRevisionsRoute,
  getV1SavedGroupsRevisionsSavedGroupIdLatestRoute,
  getV1SavedGroupsRevisionsSavedGroupIdRoute,
  getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRoute,
  getV1SavedGroupsRevisionsSavedGroupIdVersionRoute,
  getV1SavedGroupsRoute,
  getV1SdkConnectionsIdRoute,
  getV1SdkConnectionsIdWebhooksRoute,
  getV1SdkConnectionsLookupKeyRoute,
  getV1SdkConnectionsRevisionsIdLatestRoute,
  getV1SdkConnectionsRevisionsIdRoute,
  getV1SdkConnectionsRevisionsIdVersionMergeStatusRoute,
  getV1SdkConnectionsRevisionsIdVersionRoute,
  getV1SdkConnectionsRevisionsRoute,
  getV1SdkConnectionsRoute,
  getV1SdkPayloadKeyRoute,
  getV1SegmentsIdRoute,
  getV1SegmentsRoute,
  getV1SettingsRoute,
  getV1SnapshotsIdRoute,
  getV1StaleFeaturesRoute,
  getV1TeamsIdRoute,
  getV1TeamsRoute,
  getV1UsageMetricsRoute,
  getV1VersionRoute,
  getV1VisualChangesetsIdRoute,
  getV1WebhookSecretsIdRoute,
  getV1WebhookSecretsRoute,
  postV1ArchetypesRoute,
  postV1AttributesRoute,
  postV1AutoRunsIdArtifactsRoute,
  postV1AutoRunsRoute,
  postV1BulkImportFactsRoute,
  postV1CodeRefsRoute,
  postV1ConfigsKeyArchiveRoute,
  postV1ConfigsKeyLockRoute,
  postV1ConfigsKeyRoute,
  postV1ConfigsKeySchemaVerifyRoute,
  postV1ConfigsKeyUnarchiveRoute,
  postV1ConfigsKeyUnlockRoute,
  postV1ConfigsRevisionsKeyRoute,
  postV1ConfigsRevisionsKeyVersionDiscardRoute,
  postV1ConfigsRevisionsKeyVersionPublishRoute,
  postV1ConfigsRevisionsKeyVersionRebaseRoute,
  postV1ConfigsRevisionsKeyVersionRecallReviewRoute,
  postV1ConfigsRevisionsKeyVersionReopenRoute,
  postV1ConfigsRevisionsKeyVersionRequestReviewRoute,
  postV1ConfigsRevisionsKeyVersionRevertRoute,
  postV1ConfigsRevisionsKeyVersionSchedulePublishRoute,
  postV1ConfigsRevisionsKeyVersionSubmitReviewRoute,
  postV1ConfigsRevisionsKeyVersionUndoReviewRoute,
  postV1ConfigsRoute,
  postV1ConstantsKeyArchiveRoute,
  postV1ConstantsKeyRoute,
  postV1ConstantsKeyUnarchiveRoute,
  postV1ConstantsRevisionsKeyRoute,
  postV1ConstantsRevisionsKeyVersionDiscardRoute,
  postV1ConstantsRevisionsKeyVersionPublishRoute,
  postV1ConstantsRevisionsKeyVersionRebaseRoute,
  postV1ConstantsRevisionsKeyVersionRecallReviewRoute,
  postV1ConstantsRevisionsKeyVersionReopenRoute,
  postV1ConstantsRevisionsKeyVersionRequestReviewRoute,
  postV1ConstantsRevisionsKeyVersionRevertRoute,
  postV1ConstantsRevisionsKeyVersionSchedulePublishRoute,
  postV1ConstantsRevisionsKeyVersionSubmitReviewRoute,
  postV1ConstantsRevisionsKeyVersionUndoReviewRoute,
  postV1ConstantsRoute,
  postV1ContextualBanditQueriesRoute,
  postV1ContextualBanditsIdCancelRoute,
  postV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  postV1ContextualBanditsIdRefreshRoute,
  postV1ContextualBanditsIdStartRoute,
  postV1ContextualBanditsIdStopRoute,
  postV1ContextualBanditsIdVariationsRoute,
  postV1ContextualBanditsIdVisualChangesetsRoute,
  postV1ContextualBanditsRoute,
  postV1CustomFieldsRoute,
  postV1CustomHooksIdRevertRoute,
  postV1CustomHooksIdRoute,
  postV1CustomHooksRoute,
  postV1CustomHooksTestRoute,
  postV1DashboardsRoute,
  postV1DataSourcesIdInformationSchemaRefreshRoute,
  postV1DataSourcesIdRoute,
  postV1DataSourcesIdSqlPreviewValuesRoute,
  postV1DataSourcesIdSqlRunQueryRoute,
  postV1DataSourcesIdSqlSearchTablesRoute,
  postV1DataSourcesIdSqlTableSchemaRoute,
  postV1DataSourcesRoute,
  postV1DimensionsIdRoute,
  postV1DimensionsRoute,
  postV1EnvironmentsRoute,
  postV1EventWebhooksIdTestRoute,
  postV1EventWebhooksRoute,
  postV1ExperimentsIdArchiveRoute,
  postV1ExperimentsIdCommentRoute,
  postV1ExperimentsIdModifyTemporaryRolloutRoute,
  postV1ExperimentsIdRoute,
  postV1ExperimentsIdSnapshotRoute,
  postV1ExperimentsIdStartChecklistManualCompleteRoute,
  postV1ExperimentsIdStartRoute,
  postV1ExperimentsIdStopRoute,
  postV1ExperimentsIdUnarchiveRoute,
  postV1ExperimentsIdVariationVariationIdScreenshotUploadRoute,
  postV1ExperimentsIdVisualChangesetsRoute,
  postV1ExperimentsRoute,
  postV1ExperimentTemplatesBulkImportRoute,
  postV1ExperimentTemplatesRoute,
  postV1FactMetricsIdAnalysisRoute,
  postV1FactMetricsIdRoute,
  postV1FactMetricsRoute,
  postV1FactTablesFactTableIdFiltersIdRoute,
  postV1FactTablesFactTableIdFiltersRoute,
  postV1FactTablesFactTableIdVirtualColumnsIdRoute,
  postV1FactTablesFactTableIdVirtualColumnsRoute,
  postV1FactTablesIdAggregatedTablesRefreshRoute,
  postV1FactTablesIdRoute,
  postV1FactTablesRoute,
  postV1FeaturesIdRevertRoute,
  postV1FeaturesIdRevisionsRoute,
  postV1FeaturesIdRevisionsVersionDiscardRoute,
  postV1FeaturesIdRevisionsVersionPublishRoute,
  postV1FeaturesIdRevisionsVersionRebaseRoute,
  postV1FeaturesIdRevisionsVersionRequestReviewRoute,
  postV1FeaturesIdRevisionsVersionRevertRoute,
  postV1FeaturesIdRevisionsVersionRulesReorderRoute,
  postV1FeaturesIdRevisionsVersionRulesRoute,
  postV1FeaturesIdRevisionsVersionSubmitReviewRoute,
  postV1FeaturesIdRevisionsVersionToggleRoute,
  postV1FeaturesIdRoute,
  postV1FeaturesIdToggleRoute,
  postV1FeaturesRoute,
  postV1HoldoutsIdStartAnalysisRoute,
  postV1HoldoutsIdStartRoute,
  postV1HoldoutsIdStopRoute,
  postV1HoldoutsRoute,
  postV1InformationSchemaTablesTableIdRefreshRoute,
  postV1InterleavingExposureQueriesRoute,
  postV1InterleavingsIdRefreshRoute,
  postV1InterleavingsIdStartRoute,
  postV1InterleavingsIdStopRoute,
  postV1InterleavingsRoute,
  postV1LearningsRoute,
  postV1LearningsSearchRoute,
  postV1MembersIdRoleRoute,
  postV1MetricGroupsRoute,
  postV1MetricsRoute,
  postV1NamespacesIdRotateSeedRoute,
  postV1NamespacesRoute,
  postV1OrganizationsRoute,
  postV1PopulationsRoute,
  postV1ProductAnalyticsColumnValuesRoute,
  postV1ProductAnalyticsDataSourceExplorationRoute,
  postV1ProductAnalyticsFactTableExplorationRoute,
  postV1ProductAnalyticsFunnelExplorationRoute,
  postV1ProductAnalyticsJourneyExplorationRoute,
  postV1ProductAnalyticsMetricExplorationRoute,
  postV1ProductAnalyticsSqlExplorationRoute,
  postV1ProjectsRoute,
  postV1QueriesIdCancelRoute,
  postV1RampSchedulesActionsPauseRoute,
  postV1RampSchedulesActionsRollbackRoute,
  postV1RampSchedulesIdActionsAddTargetRoute,
  postV1RampSchedulesIdActionsAdvanceRoute,
  postV1RampSchedulesIdActionsApproveStepRoute,
  postV1RampSchedulesIdActionsCompleteRoute,
  postV1RampSchedulesIdActionsEjectTargetRoute,
  postV1RampSchedulesIdActionsJumpRoute,
  postV1RampSchedulesIdActionsPauseRoute,
  postV1RampSchedulesIdActionsRefreshMonitoringRoute,
  postV1RampSchedulesIdActionsRestartRoute,
  postV1RampSchedulesIdActionsResumeRoute,
  postV1RampSchedulesIdActionsRetryRoute,
  postV1RampSchedulesIdActionsRollbackRoute,
  postV1RampSchedulesIdActionsSetAutoUpdateRoute,
  postV1RampSchedulesIdActionsSetMonitoringModeRoute,
  postV1RampSchedulesIdActionsStartRoute,
  postV1RampSchedulesRoute,
  postV1RampScheduleTemplatesRoute,
  postV1ReleasesPublishRevisionsRoute,
  postV1ReportsIdRefreshRoute,
  postV1ReportsRoute,
  postV1SavedGroupsIdArchiveRoute,
  postV1SavedGroupsIdRoute,
  postV1SavedGroupsIdUnarchiveRoute,
  postV1SavedGroupsIdUploadsRoute,
  postV1SavedGroupsIdUploadsVersionLoadsRoute,
  postV1SavedGroupsIdUploadUrlRoute,
  postV1SavedGroupsRevisionsSavedGroupIdRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRoute,
  postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRoute,
  postV1SavedGroupsRoute,
  postV1SdkConnectionsIdWebhooksRoute,
  postV1SdkConnectionsRevisionsIdRoute,
  postV1SdkConnectionsRevisionsIdVersionDiscardRoute,
  postV1SdkConnectionsRevisionsIdVersionPublishRoute,
  postV1SdkConnectionsRevisionsIdVersionRebaseRoute,
  postV1SdkConnectionsRevisionsIdVersionRecallReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionReopenRoute,
  postV1SdkConnectionsRevisionsIdVersionRequestReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionRevertRoute,
  postV1SdkConnectionsRevisionsIdVersionSchedulePublishRoute,
  postV1SdkConnectionsRevisionsIdVersionSubmitReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionUndoReviewRoute,
  postV1SdkConnectionsRevisionsIdVersionWebhooksRoute,
  postV1SdkConnectionsRoute,
  postV1SdkWebhooksIdTestRoute,
  postV1SegmentsIdRoute,
  postV1SegmentsRoute,
  postV1TeamsIdMembersRoute,
  postV1TeamsRoute,
  postV1TransformCopyRoute,
  postV1VisualChangesetsIdVisualChangeRoute,
  putV1ArchetypesIdRoute,
  putV1AttributesPropertyRoute,
  putV1AutoRunsIdRoute,
  putV1ConfigsRevisionsKeyVersionArchiveRoute,
  putV1ConfigsRevisionsKeyVersionMetadataRoute,
  putV1ConfigsRevisionsKeyVersionProjectionRoute,
  putV1ConfigsRevisionsKeyVersionPropertyRoute,
  putV1ConfigsRevisionsKeyVersionSchemaRoute,
  putV1ConfigsRevisionsKeyVersionValueRoute,
  putV1ConstantsRevisionsKeyVersionArchiveRoute,
  putV1ConstantsRevisionsKeyVersionMetadataRoute,
  putV1ConstantsRevisionsKeyVersionValueRoute,
  putV1ContextualBanditQueriesIdRoute,
  putV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  putV1ContextualBanditsIdRoute,
  putV1CustomFieldsIdRoute,
  putV1DashboardsIdRoute,
  putV1EnvironmentsIdRoute,
  putV1EventWebhooksIdRoute,
  putV1ExperimentsIdScheduleRoute,
  putV1ExperimentTemplatesIdRoute,
  putV1FeaturesIdRevisionsVersionArchiveRoute,
  putV1FeaturesIdRevisionsVersionDefaultValueRoute,
  putV1FeaturesIdRevisionsVersionHoldoutRoute,
  putV1FeaturesIdRevisionsVersionMetadataRoute,
  putV1FeaturesIdRevisionsVersionPrerequisitesRoute,
  putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute,
  putV1FeaturesIdRevisionsVersionRulesRuleIdRoute,
  putV1HoldoutsIdRoute,
  putV1InterleavingExposureQueriesIdRoute,
  putV1InterleavingsIdRoute,
  putV1LearningsIdRoute,
  putV1MetricGroupsIdRoute,
  putV1MetricsIdRoute,
  putV1NamespacesIdRoute,
  putV1OrganizationsIdRoute,
  putV1PopulationsIdRoute,
  putV1ProjectsIdRoute,
  putV1RampSchedulesIdLockdownRoute,
  putV1RampSchedulesIdMonitoringRoute,
  putV1RampSchedulesIdRoute,
  putV1RampSchedulesIdStepsRoute,
  putV1RampScheduleTemplatesIdRoute,
  putV1ReportsIdMetadataRoute,
  putV1ReportsIdSettingsRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRoute,
  putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRoute,
  putV1SdkConnectionsIdRoute,
  putV1SdkConnectionsRevisionsIdVersionArchiveRoute,
  putV1SdkConnectionsRevisionsIdVersionSettingsRoute,
  putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute,
  putV1SdkWebhooksIdRoute,
  putV1SettingsApprovalsRoute,
  putV1TeamsIdRoute,
  putV1VisualChangesetsIdRoute,
  putV1VisualChangesetsIdVisualChangeVisualChangeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeatureKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StaleFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionPrerequisitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionHoldoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRevisionsVersionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FeaturesIdRevisionsVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeaturesIdRevisionsVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ArchetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ArchetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdStartChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStartChecklistManualCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ExperimentsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdModifyTemporaryRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdVariationVariationIdScreenshotUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentsIdVariationVariationIdScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdLinkedFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SnapshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricsIdExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsageMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AttributesPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AttributesPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsLookupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsRevisionsIdVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsRevisionsIdVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesDataSourceIdInformationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdInformationSchemaRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlSearchTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlTableSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlPreviewValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlRunQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VisualChangesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VisualChangesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VisualChangesetsIdVisualChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VisualChangesetsIdVisualChangeVisualChangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SavedGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsIdUploadsVersionLoadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsIdUploadsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SavedGroupsIdUploadsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConstantsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConstantsRevisionsKeyVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConstantsRevisionsKeyVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConstantsRevisionsKeyVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyLineageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeySchemaVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsRevisionsKeyVersionPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionProjectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsRevisionsKeyVersionProjectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigsRevisionsKeyVersionArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRequestReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionSubmitReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionUndoReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRecallReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionSchedulePublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsRevisionsKeyVersionMergeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRevisionsKeyVersionRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReleasesPublishRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomHooksIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomHooksIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkPayloadKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesFactTableIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdVirtualColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdVirtualColumnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesFactTableIdVirtualColumnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesIdAggregatedTablesRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactMetricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactMetricsIdAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkImportFactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CodeRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CodeRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CodeRefsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MembersIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1QueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesIdQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QueriesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SettingsApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfirmationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InformationSchemaTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InformationSchemaTablesTableIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsJumpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsApproveStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsAddTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsEjectTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampSchedulesIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsSetMonitoringModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsSetAutoUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdLockdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesIdActionsRefreshMonitoringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesActionsRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampSchedulesActionsPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReportsIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReportsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamespacesIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamespacesIdRotateSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventWebhooksIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventWebhooksIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransformCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DashboardsByExperimentExperimentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingExposureQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingExposureQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InterleavingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingsIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MetricGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MetricGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentTemplatesBulkImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsMetricExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsFactTableExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsDataSourceExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsSqlExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsFunnelExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsJourneyExplorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductAnalyticsColumnValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductAnalyticsExplorationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampScheduleTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RampScheduleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampScheduleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RampSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LearningsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HoldoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1HoldoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStartAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AutoRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutoRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutoRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AutoRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AutoRunsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PopulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PopulationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhookSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhookSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhookSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SdkConnectionsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkConnectionsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SdkWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SdkWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SdkWebhooksIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
