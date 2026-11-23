import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1AssetsAssetIdRoute,
  deleteV1AudiencesAudienceKeyRoute,
  deleteV1BranchesBranchSlugRoute,
  deleteV1ChannelGroupsChannelGroupKeyRoute,
  deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
  deleteV1GoalsGoalKeyRoute,
  deleteV1GuidesGuideKeyRoute,
  deleteV1MembersIdRoute,
  deleteV1PartialsPartialKeyRoute,
  deleteV1PreferenceCategoriesNameRoute,
  deleteV1ReusableRequestsReusableRequestKeyRoute,
  deleteV1TagsNameRoute,
  deleteV1VariablesKeyRoute,
  deleteV1WebhooksIdRoute,
  deleteV1WorkflowsWorkflowKeyRoute,
  getV1AssetsRoute,
  getV1AudiencesAudienceKeyRoute,
  getV1AudiencesRoute,
  getV1AuditLogsRoute,
  getV1BillingSummaryRoute,
  getV1BranchesBranchSlugRoute,
  getV1BranchesRoute,
  getV1BroadcastsBroadcastKeyRoute,
  getV1BroadcastsRoute,
  getV1ChannelGroupsChannelGroupKeyRoute,
  getV1ChannelGroupsRoute,
  getV1ChannelsChannelKeyRoute,
  getV1ChannelsRoute,
  getV1CommitsIdRoute,
  getV1CommitsRoute,
  getV1EmailLayoutsEmailLayoutKeyRoute,
  getV1EmailLayoutsRoute,
  getV1EnvironmentsEnvironmentSlugDefaultsRoute,
  getV1EnvironmentsEnvironmentSlugRoute,
  getV1EnvironmentsRoute,
  getV1GoalsGoalKeyAttachmentsRoute,
  getV1GoalsGoalKeyRoute,
  getV1GoalsRoute,
  getV1GuidesGuideKeyRoute,
  getV1GuidesRoute,
  getV1HeadlessAccountsStatusRoute,
  getV1MembersIdRoute,
  getV1MembersRoute,
  getV1MessageTypesMessageTypeKeyRoute,
  getV1MessageTypesRoute,
  getV1PartialsPartialKeyRoute,
  getV1PartialsRoute,
  getV1PreferenceCategoriesRoute,
  getV1PreferenceCenterRoute,
  getV1ReusableRequestsReusableRequestKeyRoute,
  getV1ReusableRequestsRoute,
  getV1SchemasItemTypeRoute,
  getV1SchemasRoute,
  getV1SourceProvidersKeyRoute,
  getV1SourceProvidersRoute,
  getV1SourcesKeyEventsRoute,
  getV1SourcesKeyLogsRoute,
  getV1SourcesKeyRoute,
  getV1SourcesKeyStatusRoute,
  getV1SourcesRoute,
  getV1TagsRoute,
  getV1TranslationsLocaleCodeRoute,
  getV1TranslationsRoute,
  getV1VariablesKeyRoute,
  getV1VariablesRoute,
  getV1WarehousesRoute,
  getV1WarehousesWarehouseKeyRoute,
  getV1WarehouseSyncsRoute,
  getV1WarehouseSyncsWarehouseSyncKeyRoute,
  getV1WarehouseSyncsWarehouseSyncKeyRunsRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  getV1WhoamiRoute,
  getV1WorkflowsRoute,
  getV1WorkflowsWorkflowKeyRoute,
  postV1ApiKeysExchangeRoute,
  postV1AssetsRoute,
  postV1AssetsUploadsRoute,
  postV1BranchesBranchSlugRoute,
  postV1EmailLayoutsPreviewRoute,
  postV1FeedbackRoute,
  postV1GoalsGoalKeyCloneRoute,
  postV1HeadlessAccountsClaimRoute,
  postV1HeadlessAccountsRoute,
  postV1PartialsPreviewRoute,
  postV1SourcesKeyRehearseRoute,
  postV1TemplatesPreviewRoute,
  postV1WebhooksRoute,
  postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute,
  putV1AudiencesAudienceKeyRoute,
  putV1AudiencesAudienceKeyValidateRoute,
  putV1BranchesBranchSlugRebaseRoute,
  putV1BroadcastsBroadcastKeyCancelRoute,
  putV1BroadcastsBroadcastKeyRoute,
  putV1BroadcastsBroadcastKeyRunRoute,
  putV1BroadcastsBroadcastKeySendRoute,
  putV1BroadcastsBroadcastKeyValidateRoute,
  putV1ChannelGroupsChannelGroupKeyRoute,
  putV1CommitsIdPromoteRoute,
  putV1CommitsPromoteRoute,
  putV1CommitsRoute,
  putV1EmailLayoutsEmailLayoutKeyRoute,
  putV1EmailLayoutsEmailLayoutKeyValidateRoute,
  putV1EnvironmentsEnvironmentSlugDefaultsRoute,
  putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
  putV1GoalsGoalKeyRoute,
  putV1GoalsGoalKeyValidateRoute,
  putV1GuidesGuideKeyActivateRoute,
  putV1GuidesGuideKeyRoute,
  putV1GuidesGuideKeyUnarchiveRoute,
  putV1GuidesGuideKeyValidateRoute,
  putV1MessageTypesMessageTypeKeyRoute,
  putV1MessageTypesMessageTypeKeyValidateRoute,
  putV1PartialsPartialKeyDiscardRoute,
  putV1PartialsPartialKeyRoute,
  putV1PartialsPartialKeyUnarchiveRoute,
  putV1PartialsPartialKeyValidateRoute,
  putV1PreferenceCategoriesNameRoute,
  putV1PreferenceCenterResetRoute,
  putV1PreferenceCenterRoute,
  putV1ReusableRequestsReusableRequestKeyRoute,
  putV1ReusableRequestsReusableRequestKeyUnarchiveRoute,
  putV1ReusableRequestsReusableRequestKeyValidateRoute,
  putV1SchemasItemTypeRoute,
  putV1SchemasItemTypeValidateRoute,
  putV1SourcesKeyRoute,
  putV1TagsNameRoute,
  putV1TranslationsLocaleCodeRoute,
  putV1TranslationsLocaleCodeValidateRoute,
  putV1VariablesKeyRoute,
  putV1WarehouseSyncsWarehouseSyncKeyRoute,
  putV1WarehouseSyncsWarehouseSyncKeyRunRoute,
  putV1WarehouseSyncsWarehouseSyncKeySettingsRoute,
  putV1WarehouseSyncsWarehouseSyncKeyValidateRoute,
  putV1WebhooksIdRoute,
  putV1WorkflowsWorkflowKeyActivateRoute,
  putV1WorkflowsWorkflowKeyDiscardRoute,
  putV1WorkflowsWorkflowKeyRoute,
  putV1WorkflowsWorkflowKeyRunRoute,
  putV1WorkflowsWorkflowKeyUnarchiveRoute,
  putV1WorkflowsWorkflowKeyValidateRoute,
} from '../routes'

export const deleteV1VariablesKeyRouteHandler: RouteHandler<
  typeof deleteV1VariablesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VariablesKeyRouteHandler: RouteHandler<typeof getV1VariablesKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1VariablesKeyRouteHandler: RouteHandler<typeof putV1VariablesKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1GoalsRouteHandler: RouteHandler<typeof getV1GoalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkflowsWorkflowKeyRouteHandler: RouteHandler<
  typeof deleteV1WorkflowsWorkflowKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsWorkflowKeyRouteHandler: RouteHandler<
  typeof getV1WorkflowsWorkflowKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CommitsIdRouteHandler: RouteHandler<typeof getV1CommitsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesKeyStatusRouteHandler: RouteHandler<
  typeof getV1SourcesKeyStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PartialsPartialKeyValidateRouteHandler: RouteHandler<
  typeof putV1PartialsPartialKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WhoamiRouteHandler: RouteHandler<typeof getV1WhoamiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesRouteHandler: RouteHandler<typeof getV1SourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EmailLayoutsPreviewRouteHandler: RouteHandler<
  typeof postV1EmailLayoutsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyValidateRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessageTypesRouteHandler: RouteHandler<typeof getV1MessageTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1GoalsGoalKeyRouteHandler: RouteHandler<
  typeof deleteV1GoalsGoalKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GoalsGoalKeyRouteHandler: RouteHandler<typeof getV1GoalsGoalKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1GoalsGoalKeyRouteHandler: RouteHandler<typeof putV1GoalsGoalKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1EnvironmentsRouteHandler: RouteHandler<typeof getV1EnvironmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1AssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteV1AssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AssetsRouteHandler: RouteHandler<typeof getV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AssetsRouteHandler: RouteHandler<typeof postV1AssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BroadcastsBroadcastKeyRouteHandler: RouteHandler<
  typeof getV1BroadcastsBroadcastKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BroadcastsBroadcastKeyRouteHandler: RouteHandler<
  typeof putV1BroadcastsBroadcastKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FeedbackRouteHandler: RouteHandler<typeof postV1FeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesPreviewRouteHandler: RouteHandler<
  typeof postV1TemplatesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuidesGuideKeyActivateRouteHandler: RouteHandler<
  typeof putV1GuidesGuideKeyActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CommitsPromoteRouteHandler: RouteHandler<
  typeof putV1CommitsPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WarehouseSyncsWarehouseSyncKeyRunRouteHandler: RouteHandler<
  typeof putV1WarehouseSyncsWarehouseSyncKeyRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuidesRouteHandler: RouteHandler<typeof getV1GuidesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HeadlessAccountsRouteHandler: RouteHandler<
  typeof postV1HeadlessAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudiencesRouteHandler: RouteHandler<typeof getV1AudiencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TranslationsRouteHandler: RouteHandler<typeof getV1TranslationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TranslationsLocaleCodeRouteHandler: RouteHandler<
  typeof getV1TranslationsLocaleCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TranslationsLocaleCodeRouteHandler: RouteHandler<
  typeof putV1TranslationsLocaleCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GoalsGoalKeyValidateRouteHandler: RouteHandler<
  typeof putV1GoalsGoalKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TagsNameRouteHandler: RouteHandler<typeof deleteV1TagsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1TagsNameRouteHandler: RouteHandler<typeof putV1TagsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SourcesKeyRehearseRouteHandler: RouteHandler<
  typeof postV1SourcesKeyRehearseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SchemasRouteHandler: RouteHandler<typeof getV1SchemasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChannelGroupsRouteHandler: RouteHandler<typeof getV1ChannelGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1PartialsPartialKeyRouteHandler: RouteHandler<
  typeof deleteV1PartialsPartialKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PartialsPartialKeyRouteHandler: RouteHandler<
  typeof getV1PartialsPartialKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PartialsPartialKeyRouteHandler: RouteHandler<
  typeof putV1PartialsPartialKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VariablesRouteHandler: RouteHandler<typeof getV1VariablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GuidesGuideKeyRouteHandler: RouteHandler<
  typeof deleteV1GuidesGuideKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuidesGuideKeyRouteHandler: RouteHandler<
  typeof getV1GuidesGuideKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuidesGuideKeyRouteHandler: RouteHandler<
  typeof putV1GuidesGuideKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesKeyRouteHandler: RouteHandler<typeof getV1SourcesKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SourcesKeyRouteHandler: RouteHandler<typeof putV1SourcesKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReusableRequestsReusableRequestKeyValidateRouteHandler: RouteHandler<
  typeof putV1ReusableRequestsReusableRequestKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CommitsIdPromoteRouteHandler: RouteHandler<
  typeof putV1CommitsIdPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HeadlessAccountsStatusRouteHandler: RouteHandler<
  typeof getV1HeadlessAccountsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessageTypesMessageTypeKeyValidateRouteHandler: RouteHandler<
  typeof putV1MessageTypesMessageTypeKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyUnarchiveRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChannelsRouteHandler: RouteHandler<typeof getV1ChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EnvironmentsEnvironmentSlugRouteHandler: RouteHandler<
  typeof getV1EnvironmentsEnvironmentSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PartialsRouteHandler: RouteHandler<typeof getV1PartialsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WarehouseSyncsWarehouseSyncKeySettingsRouteHandler: RouteHandler<
  typeof putV1WarehouseSyncsWarehouseSyncKeySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MessageTypesMessageTypeKeyRouteHandler: RouteHandler<
  typeof getV1MessageTypesMessageTypeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1MessageTypesMessageTypeKeyRouteHandler: RouteHandler<
  typeof putV1MessageTypesMessageTypeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1MembersIdRouteHandler: RouteHandler<typeof deleteV1MembersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1MembersIdRouteHandler: RouteHandler<typeof getV1MembersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AudiencesAudienceKeyRouteHandler: RouteHandler<
  typeof deleteV1AudiencesAudienceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AudiencesAudienceKeyRouteHandler: RouteHandler<
  typeof getV1AudiencesAudienceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AudiencesAudienceKeyRouteHandler: RouteHandler<
  typeof putV1AudiencesAudienceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksRouteHandler: RouteHandler<typeof getV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WebhooksRouteHandler: RouteHandler<typeof postV1WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PartialsPartialKeyDiscardRouteHandler: RouteHandler<
  typeof putV1PartialsPartialKeyDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreferenceCenterRouteHandler: RouteHandler<
  typeof getV1PreferenceCenterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PreferenceCenterRouteHandler: RouteHandler<
  typeof putV1PreferenceCenterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CommitsRouteHandler: RouteHandler<typeof getV1CommitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CommitsRouteHandler: RouteHandler<typeof putV1CommitsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HeadlessAccountsClaimRouteHandler: RouteHandler<
  typeof postV1HeadlessAccountsClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WarehousesWarehouseKeyRouteHandler: RouteHandler<
  typeof getV1WarehousesWarehouseKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BillingSummaryRouteHandler: RouteHandler<
  typeof getV1BillingSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WarehouseSyncsRouteHandler: RouteHandler<
  typeof getV1WarehouseSyncsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SchemasItemTypeRouteHandler: RouteHandler<
  typeof getV1SchemasItemTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SchemasItemTypeRouteHandler: RouteHandler<
  typeof putV1SchemasItemTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BroadcastsBroadcastKeyCancelRouteHandler: RouteHandler<
  typeof putV1BroadcastsBroadcastKeyCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReusableRequestsRouteHandler: RouteHandler<
  typeof getV1ReusableRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EnvironmentsEnvironmentSlugDefaultsRouteHandler: RouteHandler<
  typeof getV1EnvironmentsEnvironmentSlugDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EnvironmentsEnvironmentSlugDefaultsRouteHandler: RouteHandler<
  typeof putV1EnvironmentsEnvironmentSlugDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BranchesRouteHandler: RouteHandler<typeof getV1BranchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PartialsPartialKeyUnarchiveRouteHandler: RouteHandler<
  typeof putV1PartialsPartialKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReusableRequestsReusableRequestKeyRouteHandler: RouteHandler<
  typeof deleteV1ReusableRequestsReusableRequestKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReusableRequestsReusableRequestKeyRouteHandler: RouteHandler<
  typeof getV1ReusableRequestsReusableRequestKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReusableRequestsReusableRequestKeyRouteHandler: RouteHandler<
  typeof putV1ReusableRequestsReusableRequestKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PreferenceCategoriesRouteHandler: RouteHandler<
  typeof getV1PreferenceCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AuditLogsRouteHandler: RouteHandler<typeof getV1AuditLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EmailLayoutsEmailLayoutKeyRouteHandler: RouteHandler<
  typeof getV1EmailLayoutsEmailLayoutKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EmailLayoutsEmailLayoutKeyRouteHandler: RouteHandler<
  typeof putV1EmailLayoutsEmailLayoutKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler: RouteHandler<
  typeof deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler: RouteHandler<
  typeof putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BroadcastsBroadcastKeyRunRouteHandler: RouteHandler<
  typeof putV1BroadcastsBroadcastKeyRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PartialsPreviewRouteHandler: RouteHandler<
  typeof postV1PartialsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AssetsUploadsRouteHandler: RouteHandler<
  typeof postV1AssetsUploadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WarehousesRouteHandler: RouteHandler<typeof getV1WarehousesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EmailLayoutsEmailLayoutKeyValidateRouteHandler: RouteHandler<
  typeof putV1EmailLayoutsEmailLayoutKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReusableRequestsReusableRequestKeyUnarchiveRouteHandler: RouteHandler<
  typeof putV1ReusableRequestsReusableRequestKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MembersRouteHandler: RouteHandler<typeof getV1MembersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRouteHandler: RouteHandler<
  typeof postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TranslationsLocaleCodeValidateRouteHandler: RouteHandler<
  typeof putV1TranslationsLocaleCodeValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WarehouseSyncsWarehouseSyncKeyRunsRouteHandler: RouteHandler<
  typeof getV1WarehouseSyncsWarehouseSyncKeyRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PreferenceCategoriesNameRouteHandler: RouteHandler<
  typeof deleteV1PreferenceCategoriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PreferenceCategoriesNameRouteHandler: RouteHandler<
  typeof putV1PreferenceCategoriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BranchesBranchSlugRebaseRouteHandler: RouteHandler<
  typeof putV1BranchesBranchSlugRebaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BroadcastsRouteHandler: RouteHandler<typeof getV1BroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkflowsRouteHandler: RouteHandler<typeof getV1WorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyDiscardRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyDiscardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuidesGuideKeyValidateRouteHandler: RouteHandler<
  typeof putV1GuidesGuideKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyRunRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BroadcastsBroadcastKeySendRouteHandler: RouteHandler<
  typeof putV1BroadcastsBroadcastKeySendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BroadcastsBroadcastKeyValidateRouteHandler: RouteHandler<
  typeof putV1BroadcastsBroadcastKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuidesGuideKeyUnarchiveRouteHandler: RouteHandler<
  typeof putV1GuidesGuideKeyUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SchemasItemTypeValidateRouteHandler: RouteHandler<
  typeof putV1SchemasItemTypeValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ChannelGroupsChannelGroupKeyRouteHandler: RouteHandler<
  typeof deleteV1ChannelGroupsChannelGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChannelGroupsChannelGroupKeyRouteHandler: RouteHandler<
  typeof getV1ChannelGroupsChannelGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ChannelGroupsChannelGroupKeyRouteHandler: RouteHandler<
  typeof putV1ChannelGroupsChannelGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesKeyEventsRouteHandler: RouteHandler<
  typeof getV1SourcesKeyEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WarehouseSyncsWarehouseSyncKeyValidateRouteHandler: RouteHandler<
  typeof putV1WarehouseSyncsWarehouseSyncKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourceProvidersRouteHandler: RouteHandler<
  typeof getV1SourceProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AudiencesAudienceKeyValidateRouteHandler: RouteHandler<
  typeof putV1AudiencesAudienceKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TagsRouteHandler: RouteHandler<typeof getV1TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PreferenceCenterResetRouteHandler: RouteHandler<
  typeof putV1PreferenceCenterResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ApiKeysExchangeRouteHandler: RouteHandler<
  typeof postV1ApiKeysExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WebhooksIdRouteHandler: RouteHandler<typeof deleteV1WebhooksIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1WebhooksIdRouteHandler: RouteHandler<typeof getV1WebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WebhooksIdRouteHandler: RouteHandler<typeof putV1WebhooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WarehouseSyncsWarehouseSyncKeyRouteHandler: RouteHandler<
  typeof getV1WarehouseSyncsWarehouseSyncKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WarehouseSyncsWarehouseSyncKeyRouteHandler: RouteHandler<
  typeof putV1WarehouseSyncsWarehouseSyncKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GoalsGoalKeyCloneRouteHandler: RouteHandler<
  typeof postV1GoalsGoalKeyCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkflowsWorkflowKeyActivateRouteHandler: RouteHandler<
  typeof putV1WorkflowsWorkflowKeyActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ChannelsChannelKeyRouteHandler: RouteHandler<
  typeof getV1ChannelsChannelKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EmailLayoutsRouteHandler: RouteHandler<typeof getV1EmailLayoutsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SourceProvidersKeyRouteHandler: RouteHandler<
  typeof getV1SourceProvidersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BranchesBranchSlugRouteHandler: RouteHandler<
  typeof deleteV1BranchesBranchSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BranchesBranchSlugRouteHandler: RouteHandler<
  typeof getV1BranchesBranchSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BranchesBranchSlugRouteHandler: RouteHandler<
  typeof postV1BranchesBranchSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesKeyLogsRouteHandler: RouteHandler<
  typeof getV1SourcesKeyLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GoalsGoalKeyAttachmentsRouteHandler: RouteHandler<
  typeof getV1GoalsGoalKeyAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
