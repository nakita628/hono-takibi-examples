import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV1FeaturesRouteHandler: RouteHandler<typeof getV1FeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesRouteHandler: RouteHandler<typeof postV1FeaturesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeaturesIdRouteHandler: RouteHandler<typeof getV1FeaturesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRouteHandler: RouteHandler<typeof postV1FeaturesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1FeaturesIdRouteHandler: RouteHandler<typeof deleteV1FeaturesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdToggleRouteHandler: RouteHandler<
  typeof postV1FeaturesIdToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevertRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeatureKeysRouteHandler: RouteHandler<typeof getV1FeatureKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1StaleFeaturesRouteHandler: RouteHandler<typeof getV1StaleFeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1RevisionsRouteHandler: RouteHandler<typeof getV1RevisionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeaturesIdRevisionsRouteHandler: RouteHandler<
  typeof getV1FeaturesIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeaturesIdRevisionsLatestRouteHandler: RouteHandler<
  typeof getV1FeaturesIdRevisionsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeaturesIdRevisionsVersionRouteHandler: RouteHandler<
  typeof getV1FeaturesIdRevisionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionMetadataRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionDefaultValueRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionDefaultValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionPrerequisitesRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionPrerequisitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionHoldoutRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionHoldoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionArchiveRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionToggleRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionRulesRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionRulesRuleIdRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FeaturesIdRevisionsVersionRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1FeaturesIdRevisionsVersionRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionRulesReorderRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionRulesReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRouteHandler: RouteHandler<
  typeof putV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRouteHandler: RouteHandler<
  typeof deleteV1FeaturesIdRevisionsVersionRulesRuleIdRampScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionRequestReviewRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionRequestReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionSubmitReviewRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionSubmitReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FeaturesIdRevisionsVersionMergeStatusRouteHandler: RouteHandler<
  typeof getV1FeaturesIdRevisionsVersionMergeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionRebaseRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionPublishRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionDiscardRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeaturesIdRevisionsVersionRevertRouteHandler: RouteHandler<
  typeof postV1FeaturesIdRevisionsVersionRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ArchetypesRouteHandler: RouteHandler<typeof getV1ArchetypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ArchetypesRouteHandler: RouteHandler<typeof postV1ArchetypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ArchetypesIdRouteHandler: RouteHandler<typeof getV1ArchetypesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ArchetypesIdRouteHandler: RouteHandler<typeof putV1ArchetypesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ArchetypesIdRouteHandler: RouteHandler<
  typeof deleteV1ArchetypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsRouteHandler: RouteHandler<typeof getV1ExperimentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsRouteHandler: RouteHandler<typeof postV1ExperimentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsResultsRouteHandler: RouteHandler<
  typeof getV1ExperimentsResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsIdRouteHandler: RouteHandler<typeof getV1ExperimentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ExperimentsIdRouteHandler: RouteHandler<
  typeof deleteV1ExperimentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsIdStartChecklistRouteHandler: RouteHandler<
  typeof getV1ExperimentsIdStartChecklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsIdResultsRouteHandler: RouteHandler<
  typeof getV1ExperimentsIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdArchiveRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdUnarchiveRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdStartRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdStartChecklistManualCompleteRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdStartChecklistManualCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdStopRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ExperimentsIdScheduleRouteHandler: RouteHandler<
  typeof putV1ExperimentsIdScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdModifyTemporaryRolloutRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdModifyTemporaryRolloutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdSnapshotRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdVariationVariationIdScreenshotUploadRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdVariationVariationIdScreenshotUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ExperimentsIdVariationVariationIdScreenshotRouteHandler: RouteHandler<
  typeof deleteV1ExperimentsIdVariationVariationIdScreenshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentNamesRouteHandler: RouteHandler<
  typeof getV1ExperimentNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdCommentRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentsIdVisualChangesetsRouteHandler: RouteHandler<
  typeof getV1ExperimentsIdVisualChangesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentsIdVisualChangesetsRouteHandler: RouteHandler<
  typeof postV1ExperimentsIdVisualChangesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdCurrentRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdSnapshotsRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdEventsRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdEventsEventIdRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdResultsRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdStatusRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdLinkedFeaturesRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdLinkedFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdLinkedFeatureFeatureIdRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdLinkedFeatureFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ContextualBanditsIdLinkedFeatureFeatureIdRouteHandler: RouteHandler<
  typeof putV1ContextualBanditsIdLinkedFeatureFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRouteHandler: RouteHandler<
  typeof deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SnapshotsIdRouteHandler: RouteHandler<typeof getV1SnapshotsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1MetricsRouteHandler: RouteHandler<typeof getV1MetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MetricsRouteHandler: RouteHandler<typeof postV1MetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MetricsIdRouteHandler: RouteHandler<typeof getV1MetricsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MetricsIdRouteHandler: RouteHandler<typeof putV1MetricsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MetricsIdRouteHandler: RouteHandler<typeof deleteV1MetricsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1MetricsIdExperimentsRouteHandler: RouteHandler<
  typeof getV1MetricsIdExperimentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1UsageMetricsRouteHandler: RouteHandler<typeof getV1UsageMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SegmentsRouteHandler: RouteHandler<typeof getV1SegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SegmentsRouteHandler: RouteHandler<typeof postV1SegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SegmentsIdRouteHandler: RouteHandler<typeof getV1SegmentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SegmentsIdRouteHandler: RouteHandler<typeof postV1SegmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1SegmentsIdRouteHandler: RouteHandler<typeof deleteV1SegmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DimensionsRouteHandler: RouteHandler<typeof getV1DimensionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DimensionsRouteHandler: RouteHandler<typeof postV1DimensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DimensionsIdRouteHandler: RouteHandler<typeof getV1DimensionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DimensionsIdRouteHandler: RouteHandler<typeof postV1DimensionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1DimensionsIdRouteHandler: RouteHandler<
  typeof deleteV1DimensionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsRouteHandler: RouteHandler<typeof getV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsRouteHandler: RouteHandler<typeof postV1ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsIdRouteHandler: RouteHandler<typeof getV1ProjectsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProjectsIdRouteHandler: RouteHandler<typeof putV1ProjectsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProjectsIdRouteHandler: RouteHandler<typeof deleteV1ProjectsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1EnvironmentsRouteHandler: RouteHandler<typeof getV1EnvironmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1EnvironmentsRouteHandler: RouteHandler<typeof postV1EnvironmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1EnvironmentsIdRouteHandler: RouteHandler<
  typeof putV1EnvironmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EnvironmentsIdRouteHandler: RouteHandler<
  typeof deleteV1EnvironmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributesRouteHandler: RouteHandler<typeof getV1AttributesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AttributesRouteHandler: RouteHandler<typeof postV1AttributesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1AttributesPropertyRouteHandler: RouteHandler<
  typeof putV1AttributesPropertyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AttributesPropertyRouteHandler: RouteHandler<
  typeof deleteV1AttributesPropertyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsIdRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SdkConnectionsIdRouteHandler: RouteHandler<
  typeof putV1SdkConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SdkConnectionsIdRouteHandler: RouteHandler<
  typeof deleteV1SdkConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsLookupKeyRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsLookupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRevisionsRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRevisionsIdRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRevisionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRevisionsIdLatestRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRevisionsIdLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRevisionsIdVersionRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRevisionsIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsRevisionsIdVersionMergeStatusRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsRevisionsIdVersionMergeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SdkConnectionsRevisionsIdVersionSettingsRouteHandler: RouteHandler<
  typeof putV1SdkConnectionsRevisionsIdVersionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SdkConnectionsRevisionsIdVersionArchiveRouteHandler: RouteHandler<
  typeof putV1SdkConnectionsRevisionsIdVersionArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionWebhooksRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteV1SdkConnectionsRevisionsIdVersionWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionRequestReviewRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionRequestReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionSubmitReviewRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionSubmitReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionRecallReviewRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionRecallReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionUndoReviewRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionUndoReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionReopenRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionSchedulePublishRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionSchedulePublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionRebaseRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionPublishRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionDiscardRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsRevisionsIdVersionRevertRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsRevisionsIdVersionRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DataSourcesRouteHandler: RouteHandler<typeof getV1DataSourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesRouteHandler: RouteHandler<typeof postV1DataSourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DataSourcesIdRouteHandler: RouteHandler<typeof getV1DataSourcesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DataSourcesIdRouteHandler: RouteHandler<
  typeof deleteV1DataSourcesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DataSourcesDataSourceIdInformationSchemaRouteHandler: RouteHandler<
  typeof getV1DataSourcesDataSourceIdInformationSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdInformationSchemaRefreshRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdInformationSchemaRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdSqlSearchTablesRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdSqlSearchTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdSqlTableSchemaRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdSqlTableSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdSqlPreviewValuesRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdSqlPreviewValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataSourcesIdSqlRunQueryRouteHandler: RouteHandler<
  typeof postV1DataSourcesIdSqlRunQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VisualChangesetsIdRouteHandler: RouteHandler<
  typeof getV1VisualChangesetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1VisualChangesetsIdRouteHandler: RouteHandler<
  typeof putV1VisualChangesetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1VisualChangesetsIdVisualChangeRouteHandler: RouteHandler<
  typeof postV1VisualChangesetsIdVisualChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1VisualChangesetsIdVisualChangeVisualChangeIdRouteHandler: RouteHandler<
  typeof putV1VisualChangesetsIdVisualChangeVisualChangeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRouteHandler: RouteHandler<typeof getV1SavedGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRouteHandler: RouteHandler<typeof postV1SavedGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRevisionsRouteHandler: RouteHandler<
  typeof getV1SavedGroupsRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsIdRouteHandler: RouteHandler<typeof getV1SavedGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SavedGroupsIdRouteHandler: RouteHandler<
  typeof deleteV1SavedGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdArchiveRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdUnarchiveRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsIdReferencesRouteHandler: RouteHandler<
  typeof getV1SavedGroupsIdReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsIdUploadsRouteHandler: RouteHandler<
  typeof getV1SavedGroupsIdUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdUploadsRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdUploadUrlRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdUploadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsIdUploadsVersionLoadsRouteHandler: RouteHandler<
  typeof postV1SavedGroupsIdUploadsVersionLoadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsIdUploadsVersionRouteHandler: RouteHandler<
  typeof getV1SavedGroupsIdUploadsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SavedGroupsIdUploadsVersionRouteHandler: RouteHandler<
  typeof deleteV1SavedGroupsIdUploadsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRevisionsSavedGroupIdRouteHandler: RouteHandler<
  typeof getV1SavedGroupsRevisionsSavedGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRevisionsSavedGroupIdLatestRouteHandler: RouteHandler<
  typeof getV1SavedGroupsRevisionsSavedGroupIdLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRevisionsSavedGroupIdVersionRouteHandler: RouteHandler<
  typeof getV1SavedGroupsRevisionsSavedGroupIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRouteHandler: RouteHandler<
  typeof putV1SavedGroupsRevisionsSavedGroupIdVersionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRouteHandler: RouteHandler<
  typeof putV1SavedGroupsRevisionsSavedGroupIdVersionConditionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRouteHandler: RouteHandler<
  typeof putV1SavedGroupsRevisionsSavedGroupIdVersionValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRouteHandler: RouteHandler<
  typeof putV1SavedGroupsRevisionsSavedGroupIdVersionUploadVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRouteHandler: RouteHandler<
  typeof putV1SavedGroupsRevisionsSavedGroupIdVersionArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionItemsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionItemsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionRequestReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionSubmitReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionRecallReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionSchedulePublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionUndoReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRouteHandler: RouteHandler<
  typeof getV1SavedGroupsRevisionsSavedGroupIdVersionMergeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRouteHandler: RouteHandler<
  typeof postV1SavedGroupsRevisionsSavedGroupIdVersionRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRouteHandler: RouteHandler<typeof getV1ConstantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRouteHandler: RouteHandler<typeof postV1ConstantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRevisionsRouteHandler: RouteHandler<
  typeof getV1ConstantsRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsKeyReferencesRouteHandler: RouteHandler<
  typeof getV1ConstantsKeyReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsKeyRouteHandler: RouteHandler<typeof getV1ConstantsKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsKeyRouteHandler: RouteHandler<typeof postV1ConstantsKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ConstantsKeyRouteHandler: RouteHandler<
  typeof deleteV1ConstantsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsKeyArchiveRouteHandler: RouteHandler<
  typeof postV1ConstantsKeyArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsKeyUnarchiveRouteHandler: RouteHandler<
  typeof postV1ConstantsKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRevisionsKeyRouteHandler: RouteHandler<
  typeof getV1ConstantsRevisionsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRevisionsKeyLatestRouteHandler: RouteHandler<
  typeof getV1ConstantsRevisionsKeyLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRevisionsKeyVersionRouteHandler: RouteHandler<
  typeof getV1ConstantsRevisionsKeyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConstantsRevisionsKeyVersionMetadataRouteHandler: RouteHandler<
  typeof putV1ConstantsRevisionsKeyVersionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConstantsRevisionsKeyVersionValueRouteHandler: RouteHandler<
  typeof putV1ConstantsRevisionsKeyVersionValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConstantsRevisionsKeyVersionArchiveRouteHandler: RouteHandler<
  typeof putV1ConstantsRevisionsKeyVersionArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionRequestReviewRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionRequestReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionSubmitReviewRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionSubmitReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionRecallReviewRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionRecallReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionReopenRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionSchedulePublishRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionSchedulePublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionUndoReviewRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionUndoReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConstantsRevisionsKeyVersionMergeStatusRouteHandler: RouteHandler<
  typeof getV1ConstantsRevisionsKeyVersionMergeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionRebaseRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionPublishRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionDiscardRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConstantsRevisionsKeyVersionRevertRouteHandler: RouteHandler<
  typeof postV1ConstantsRevisionsKeyVersionRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRouteHandler: RouteHandler<typeof getV1ConfigsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRouteHandler: RouteHandler<typeof postV1ConfigsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRevisionsRouteHandler: RouteHandler<
  typeof getV1ConfigsRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsKeyReferencesRouteHandler: RouteHandler<
  typeof getV1ConfigsKeyReferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsKeyKeyUsageRouteHandler: RouteHandler<
  typeof getV1ConfigsKeyKeyUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsKeyLineageRouteHandler: RouteHandler<
  typeof getV1ConfigsKeyLineageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeySchemaVerifyRouteHandler: RouteHandler<
  typeof postV1ConfigsKeySchemaVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsKeySchemaRouteHandler: RouteHandler<
  typeof getV1ConfigsKeySchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsKeyRouteHandler: RouteHandler<typeof getV1ConfigsKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeyRouteHandler: RouteHandler<typeof postV1ConfigsKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1ConfigsKeyRouteHandler: RouteHandler<typeof deleteV1ConfigsKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeyArchiveRouteHandler: RouteHandler<
  typeof postV1ConfigsKeyArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeyUnarchiveRouteHandler: RouteHandler<
  typeof postV1ConfigsKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeyLockRouteHandler: RouteHandler<
  typeof postV1ConfigsKeyLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsKeyUnlockRouteHandler: RouteHandler<
  typeof postV1ConfigsKeyUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRevisionsKeyRouteHandler: RouteHandler<
  typeof getV1ConfigsRevisionsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRevisionsKeyLatestRouteHandler: RouteHandler<
  typeof getV1ConfigsRevisionsKeyLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRevisionsKeyVersionRouteHandler: RouteHandler<
  typeof getV1ConfigsRevisionsKeyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionMetadataRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionValueRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionPropertyRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionPropertyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConfigsRevisionsKeyVersionPropertyRouteHandler: RouteHandler<
  typeof deleteV1ConfigsRevisionsKeyVersionPropertyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionSchemaRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionProjectionRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionProjectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConfigsRevisionsKeyVersionProjectionRouteHandler: RouteHandler<
  typeof deleteV1ConfigsRevisionsKeyVersionProjectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigsRevisionsKeyVersionArchiveRouteHandler: RouteHandler<
  typeof putV1ConfigsRevisionsKeyVersionArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionRequestReviewRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionRequestReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionSubmitReviewRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionSubmitReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionUndoReviewRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionUndoReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionRecallReviewRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionRecallReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionReopenRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionReopenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionSchedulePublishRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionSchedulePublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigsRevisionsKeyVersionMergeStatusRouteHandler: RouteHandler<
  typeof getV1ConfigsRevisionsKeyVersionMergeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionRebaseRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionPublishRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionDiscardRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigsRevisionsKeyVersionRevertRouteHandler: RouteHandler<
  typeof postV1ConfigsRevisionsKeyVersionRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReleasesPublishRevisionsRouteHandler: RouteHandler<
  typeof postV1ReleasesPublishRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomHooksRouteHandler: RouteHandler<typeof getV1CustomHooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CustomHooksRouteHandler: RouteHandler<typeof postV1CustomHooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CustomHooksTestRouteHandler: RouteHandler<
  typeof postV1CustomHooksTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomHooksIdRouteHandler: RouteHandler<typeof getV1CustomHooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CustomHooksIdRouteHandler: RouteHandler<
  typeof postV1CustomHooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomHooksIdRouteHandler: RouteHandler<
  typeof deleteV1CustomHooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomHooksIdHistoryRouteHandler: RouteHandler<
  typeof getV1CustomHooksIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomHooksIdRevertRouteHandler: RouteHandler<
  typeof postV1CustomHooksIdRevertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrganizationsRouteHandler: RouteHandler<typeof getV1OrganizationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1OrganizationsRouteHandler: RouteHandler<
  typeof postV1OrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrganizationsIdRouteHandler: RouteHandler<
  typeof putV1OrganizationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkPayloadKeyRouteHandler: RouteHandler<typeof getV1SdkPayloadKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesRouteHandler: RouteHandler<typeof getV1FactTablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesRouteHandler: RouteHandler<typeof postV1FactTablesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesIdRouteHandler: RouteHandler<typeof getV1FactTablesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesIdRouteHandler: RouteHandler<typeof postV1FactTablesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1FactTablesIdRouteHandler: RouteHandler<
  typeof deleteV1FactTablesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesFactTableIdFiltersRouteHandler: RouteHandler<
  typeof getV1FactTablesFactTableIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesFactTableIdFiltersRouteHandler: RouteHandler<
  typeof postV1FactTablesFactTableIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesFactTableIdFiltersIdRouteHandler: RouteHandler<
  typeof getV1FactTablesFactTableIdFiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesFactTableIdFiltersIdRouteHandler: RouteHandler<
  typeof postV1FactTablesFactTableIdFiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FactTablesFactTableIdFiltersIdRouteHandler: RouteHandler<
  typeof deleteV1FactTablesFactTableIdFiltersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesFactTableIdVirtualColumnsRouteHandler: RouteHandler<
  typeof postV1FactTablesFactTableIdVirtualColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesFactTableIdVirtualColumnsIdRouteHandler: RouteHandler<
  typeof postV1FactTablesFactTableIdVirtualColumnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FactTablesFactTableIdVirtualColumnsIdRouteHandler: RouteHandler<
  typeof deleteV1FactTablesFactTableIdVirtualColumnsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesIdAggregatedTablesRouteHandler: RouteHandler<
  typeof getV1FactTablesIdAggregatedTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactTablesIdAggregatedTablesRefreshRouteHandler: RouteHandler<
  typeof postV1FactTablesIdAggregatedTablesRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesIdAggregatedTablesRunsRouteHandler: RouteHandler<
  typeof getV1FactTablesIdAggregatedTablesRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactTablesIdAggregatedTablesRunsRunIdRouteHandler: RouteHandler<
  typeof getV1FactTablesIdAggregatedTablesRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FactMetricsRouteHandler: RouteHandler<typeof getV1FactMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1FactMetricsRouteHandler: RouteHandler<typeof postV1FactMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1FactMetricsIdRouteHandler: RouteHandler<typeof getV1FactMetricsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1FactMetricsIdRouteHandler: RouteHandler<
  typeof postV1FactMetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1FactMetricsIdRouteHandler: RouteHandler<
  typeof deleteV1FactMetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FactMetricsIdAnalysisRouteHandler: RouteHandler<
  typeof postV1FactMetricsIdAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BulkImportFactsRouteHandler: RouteHandler<
  typeof postV1BulkImportFactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CodeRefsRouteHandler: RouteHandler<typeof postV1CodeRefsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CodeRefsRouteHandler: RouteHandler<typeof getV1CodeRefsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CodeRefsIdRouteHandler: RouteHandler<typeof getV1CodeRefsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MembersRouteHandler: RouteHandler<typeof getV1MembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MembersIdRoleRouteHandler: RouteHandler<
  typeof postV1MembersIdRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MembersIdRouteHandler: RouteHandler<typeof deleteV1MembersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1QueriesIdRouteHandler: RouteHandler<typeof getV1QueriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DataSourcesIdQueriesRouteHandler: RouteHandler<
  typeof getV1DataSourcesIdQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QueriesIdCancelRouteHandler: RouteHandler<
  typeof postV1QueriesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SettingsRouteHandler: RouteHandler<typeof getV1SettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SettingsApprovalsRouteHandler: RouteHandler<
  typeof putV1SettingsApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VersionRouteHandler: RouteHandler<typeof getV1VersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfirmationsRouteHandler: RouteHandler<typeof getV1ConfirmationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ConfirmationsIdRouteHandler: RouteHandler<
  typeof getV1ConfirmationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InformationSchemaTablesTableIdRouteHandler: RouteHandler<
  typeof getV1InformationSchemaTablesTableIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InformationSchemaTablesTableIdRefreshRouteHandler: RouteHandler<
  typeof postV1InformationSchemaTablesTableIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampSchedulesRouteHandler: RouteHandler<typeof getV1RampSchedulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesRouteHandler: RouteHandler<
  typeof postV1RampSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsStartRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsPauseRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsResumeRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsRetryRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsRollbackRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsRestartRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsJumpRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsJumpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsCompleteRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsApproveStepRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsApproveStepRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsAddTargetRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsAddTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsEjectTargetRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsEjectTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsAdvanceRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsAdvanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampSchedulesIdStatusRouteHandler: RouteHandler<
  typeof getV1RampSchedulesIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsSetMonitoringModeRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsSetMonitoringModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsSetAutoUpdateRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsSetAutoUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RampSchedulesIdMonitoringRouteHandler: RouteHandler<
  typeof putV1RampSchedulesIdMonitoringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RampSchedulesIdLockdownRouteHandler: RouteHandler<
  typeof putV1RampSchedulesIdLockdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RampSchedulesIdStepsRouteHandler: RouteHandler<
  typeof putV1RampSchedulesIdStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesIdActionsRefreshMonitoringRouteHandler: RouteHandler<
  typeof postV1RampSchedulesIdActionsRefreshMonitoringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesActionsRollbackRouteHandler: RouteHandler<
  typeof postV1RampSchedulesActionsRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampSchedulesActionsPauseRouteHandler: RouteHandler<
  typeof postV1RampSchedulesActionsPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsRouteHandler: RouteHandler<typeof getV1ReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReportsRouteHandler: RouteHandler<typeof postV1ReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsIdRouteHandler: RouteHandler<typeof getV1ReportsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReportsIdRefreshRouteHandler: RouteHandler<
  typeof postV1ReportsIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReportsIdMetadataRouteHandler: RouteHandler<
  typeof putV1ReportsIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReportsIdSettingsRouteHandler: RouteHandler<
  typeof putV1ReportsIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NamespacesRouteHandler: RouteHandler<typeof getV1NamespacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NamespacesRouteHandler: RouteHandler<typeof postV1NamespacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NamespacesIdRouteHandler: RouteHandler<typeof getV1NamespacesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1NamespacesIdRouteHandler: RouteHandler<typeof putV1NamespacesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1NamespacesIdRouteHandler: RouteHandler<
  typeof deleteV1NamespacesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NamespacesIdMembershipsRouteHandler: RouteHandler<
  typeof getV1NamespacesIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NamespacesIdRotateSeedRouteHandler: RouteHandler<
  typeof postV1NamespacesIdRotateSeedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventWebhooksRouteHandler: RouteHandler<typeof getV1EventWebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1EventWebhooksRouteHandler: RouteHandler<
  typeof postV1EventWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventWebhooksIdRouteHandler: RouteHandler<
  typeof getV1EventWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EventWebhooksIdRouteHandler: RouteHandler<
  typeof putV1EventWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EventWebhooksIdRouteHandler: RouteHandler<
  typeof deleteV1EventWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventWebhooksIdLogsRouteHandler: RouteHandler<
  typeof getV1EventWebhooksIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EventWebhooksIdTestRouteHandler: RouteHandler<
  typeof postV1EventWebhooksIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AuditsRouteHandler: RouteHandler<typeof getV1AuditsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsRouteHandler: RouteHandler<typeof getV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EventsIdRouteHandler: RouteHandler<typeof getV1EventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TransformCopyRouteHandler: RouteHandler<
  typeof postV1TransformCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DashboardsIdRouteHandler: RouteHandler<typeof getV1DashboardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1DashboardsIdRouteHandler: RouteHandler<
  typeof deleteV1DashboardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DashboardsIdRouteHandler: RouteHandler<typeof putV1DashboardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1DashboardsRouteHandler: RouteHandler<typeof postV1DashboardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DashboardsRouteHandler: RouteHandler<typeof getV1DashboardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DashboardsByExperimentExperimentIdRouteHandler: RouteHandler<
  typeof getV1DashboardsByExperimentExperimentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ContextualBanditsIdRouteHandler: RouteHandler<
  typeof putV1ContextualBanditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ContextualBanditsIdRouteHandler: RouteHandler<
  typeof deleteV1ContextualBanditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdStartRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdStopRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdRefreshRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdVariationsRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdVariationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdCancelRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditsIdVisualChangesetsRouteHandler: RouteHandler<
  typeof postV1ContextualBanditsIdVisualChangesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditsIdVisualChangesetsRouteHandler: RouteHandler<
  typeof getV1ContextualBanditsIdVisualChangesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditQueriesIdRouteHandler: RouteHandler<
  typeof getV1ContextualBanditQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ContextualBanditQueriesIdRouteHandler: RouteHandler<
  typeof deleteV1ContextualBanditQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ContextualBanditQueriesIdRouteHandler: RouteHandler<
  typeof putV1ContextualBanditQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ContextualBanditQueriesRouteHandler: RouteHandler<
  typeof postV1ContextualBanditQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ContextualBanditQueriesRouteHandler: RouteHandler<
  typeof getV1ContextualBanditQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingExposureQueriesIdRouteHandler: RouteHandler<
  typeof getV1InterleavingExposureQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InterleavingExposureQueriesIdRouteHandler: RouteHandler<
  typeof deleteV1InterleavingExposureQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InterleavingExposureQueriesIdRouteHandler: RouteHandler<
  typeof putV1InterleavingExposureQueriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InterleavingExposureQueriesRouteHandler: RouteHandler<
  typeof postV1InterleavingExposureQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingExposureQueriesRouteHandler: RouteHandler<
  typeof getV1InterleavingExposureQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsIdRouteHandler: RouteHandler<
  typeof getV1InterleavingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1InterleavingsIdRouteHandler: RouteHandler<
  typeof putV1InterleavingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1InterleavingsIdRouteHandler: RouteHandler<
  typeof deleteV1InterleavingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InterleavingsRouteHandler: RouteHandler<
  typeof postV1InterleavingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsRouteHandler: RouteHandler<typeof getV1InterleavingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1InterleavingsIdStartRouteHandler: RouteHandler<
  typeof postV1InterleavingsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InterleavingsIdStopRouteHandler: RouteHandler<
  typeof postV1InterleavingsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InterleavingsIdRefreshRouteHandler: RouteHandler<
  typeof postV1InterleavingsIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsIdResultsRouteHandler: RouteHandler<
  typeof getV1InterleavingsIdResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsIdStatusRouteHandler: RouteHandler<
  typeof getV1InterleavingsIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsIdSnapshotsRouteHandler: RouteHandler<
  typeof getV1InterleavingsIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InterleavingsIdSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV1InterleavingsIdSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomFieldsRouteHandler: RouteHandler<typeof postV1CustomFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CustomFieldsRouteHandler: RouteHandler<typeof getV1CustomFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomFieldsIdRouteHandler: RouteHandler<
  typeof deleteV1CustomFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomFieldsIdRouteHandler: RouteHandler<
  typeof getV1CustomFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomFieldsIdRouteHandler: RouteHandler<
  typeof putV1CustomFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MetricGroupsIdRouteHandler: RouteHandler<
  typeof getV1MetricGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MetricGroupsIdRouteHandler: RouteHandler<
  typeof deleteV1MetricGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MetricGroupsIdRouteHandler: RouteHandler<
  typeof putV1MetricGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MetricGroupsRouteHandler: RouteHandler<typeof postV1MetricGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1MetricGroupsRouteHandler: RouteHandler<typeof getV1MetricGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TeamsIdRouteHandler: RouteHandler<typeof getV1TeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TeamsIdRouteHandler: RouteHandler<typeof putV1TeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsIdRouteHandler: RouteHandler<typeof deleteV1TeamsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsRouteHandler: RouteHandler<typeof postV1TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TeamsRouteHandler: RouteHandler<typeof getV1TeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamsIdMembersRouteHandler: RouteHandler<
  typeof postV1TeamsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamsIdMembersRouteHandler: RouteHandler<
  typeof deleteV1TeamsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof getV1ExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof deleteV1ExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof putV1ExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentTemplatesRouteHandler: RouteHandler<
  typeof postV1ExperimentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExperimentTemplatesRouteHandler: RouteHandler<
  typeof getV1ExperimentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExperimentTemplatesBulkImportRouteHandler: RouteHandler<
  typeof postV1ExperimentTemplatesBulkImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsMetricExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsMetricExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsFactTableExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsFactTableExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsDataSourceExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsDataSourceExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsSqlExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsSqlExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsFunnelExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsFunnelExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsJourneyExplorationRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsJourneyExplorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductAnalyticsSearchRouteHandler: RouteHandler<
  typeof getV1ProductAnalyticsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductAnalyticsColumnsRouteHandler: RouteHandler<
  typeof getV1ProductAnalyticsColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductAnalyticsColumnValuesRouteHandler: RouteHandler<
  typeof postV1ProductAnalyticsColumnValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductAnalyticsExplorationsIdRouteHandler: RouteHandler<
  typeof getV1ProductAnalyticsExplorationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampScheduleTemplatesIdRouteHandler: RouteHandler<
  typeof getV1RampScheduleTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RampScheduleTemplatesIdRouteHandler: RouteHandler<
  typeof deleteV1RampScheduleTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RampScheduleTemplatesIdRouteHandler: RouteHandler<
  typeof putV1RampScheduleTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RampScheduleTemplatesRouteHandler: RouteHandler<
  typeof postV1RampScheduleTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampScheduleTemplatesRouteHandler: RouteHandler<
  typeof getV1RampScheduleTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RampSchedulesIdRouteHandler: RouteHandler<
  typeof getV1RampSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RampSchedulesIdRouteHandler: RouteHandler<
  typeof deleteV1RampSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RampSchedulesIdRouteHandler: RouteHandler<
  typeof putV1RampSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LearningsIdRouteHandler: RouteHandler<typeof getV1LearningsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1LearningsIdRouteHandler: RouteHandler<
  typeof deleteV1LearningsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1LearningsIdRouteHandler: RouteHandler<typeof putV1LearningsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1LearningsRouteHandler: RouteHandler<typeof postV1LearningsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LearningsRouteHandler: RouteHandler<typeof getV1LearningsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LearningsSearchRouteHandler: RouteHandler<
  typeof postV1LearningsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HoldoutsIdRouteHandler: RouteHandler<typeof getV1HoldoutsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1HoldoutsIdRouteHandler: RouteHandler<typeof putV1HoldoutsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldoutsRouteHandler: RouteHandler<typeof postV1HoldoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HoldoutsRouteHandler: RouteHandler<typeof getV1HoldoutsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldoutsIdStartRouteHandler: RouteHandler<
  typeof postV1HoldoutsIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldoutsIdStartAnalysisRouteHandler: RouteHandler<
  typeof postV1HoldoutsIdStartAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldoutsIdStopRouteHandler: RouteHandler<
  typeof postV1HoldoutsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AutoRunsRouteHandler: RouteHandler<typeof postV1AutoRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AutoRunsRouteHandler: RouteHandler<typeof getV1AutoRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AutoRunsIdRouteHandler: RouteHandler<typeof getV1AutoRunsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AutoRunsIdRouteHandler: RouteHandler<typeof putV1AutoRunsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AutoRunsIdArtifactsRouteHandler: RouteHandler<
  typeof postV1AutoRunsIdArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PopulationsRouteHandler: RouteHandler<typeof getV1PopulationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1PopulationsRouteHandler: RouteHandler<typeof postV1PopulationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PopulationsIdRouteHandler: RouteHandler<typeof getV1PopulationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1PopulationsIdRouteHandler: RouteHandler<typeof putV1PopulationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1PopulationsIdRouteHandler: RouteHandler<
  typeof deleteV1PopulationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhookSecretsIdRouteHandler: RouteHandler<
  typeof getV1WebhookSecretsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WebhookSecretsIdRouteHandler: RouteHandler<
  typeof deleteV1WebhookSecretsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhookSecretsRouteHandler: RouteHandler<
  typeof getV1WebhookSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SdkConnectionsIdWebhooksRouteHandler: RouteHandler<
  typeof getV1SdkConnectionsIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkConnectionsIdWebhooksRouteHandler: RouteHandler<
  typeof postV1SdkConnectionsIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SdkWebhooksIdRouteHandler: RouteHandler<typeof putV1SdkWebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1SdkWebhooksIdRouteHandler: RouteHandler<
  typeof deleteV1SdkWebhooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SdkWebhooksIdTestRouteHandler: RouteHandler<
  typeof postV1SdkWebhooksIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
