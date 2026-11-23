import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteV1AssetsAssetIdRouteHandler,
  deleteV1AudiencesAudienceKeyRouteHandler,
  deleteV1BranchesBranchSlugRouteHandler,
  deleteV1ChannelGroupsChannelGroupKeyRouteHandler,
  deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler,
  deleteV1GoalsGoalKeyRouteHandler,
  deleteV1GuidesGuideKeyRouteHandler,
  deleteV1MembersIdRouteHandler,
  deleteV1PartialsPartialKeyRouteHandler,
  deleteV1PreferenceCategoriesNameRouteHandler,
  deleteV1ReusableRequestsReusableRequestKeyRouteHandler,
  deleteV1TagsNameRouteHandler,
  deleteV1VariablesKeyRouteHandler,
  deleteV1WebhooksIdRouteHandler,
  deleteV1WorkflowsWorkflowKeyRouteHandler,
  getV1AssetsRouteHandler,
  getV1AudiencesAudienceKeyRouteHandler,
  getV1AudiencesRouteHandler,
  getV1AuditLogsRouteHandler,
  getV1BillingSummaryRouteHandler,
  getV1BranchesBranchSlugRouteHandler,
  getV1BranchesRouteHandler,
  getV1BroadcastsBroadcastKeyRouteHandler,
  getV1BroadcastsRouteHandler,
  getV1ChannelGroupsChannelGroupKeyRouteHandler,
  getV1ChannelGroupsRouteHandler,
  getV1ChannelsChannelKeyRouteHandler,
  getV1ChannelsRouteHandler,
  getV1CommitsIdRouteHandler,
  getV1CommitsRouteHandler,
  getV1EmailLayoutsEmailLayoutKeyRouteHandler,
  getV1EmailLayoutsRouteHandler,
  getV1EnvironmentsEnvironmentSlugDefaultsRouteHandler,
  getV1EnvironmentsEnvironmentSlugRouteHandler,
  getV1EnvironmentsRouteHandler,
  getV1GoalsGoalKeyAttachmentsRouteHandler,
  getV1GoalsGoalKeyRouteHandler,
  getV1GoalsRouteHandler,
  getV1GuidesGuideKeyRouteHandler,
  getV1GuidesRouteHandler,
  getV1HeadlessAccountsStatusRouteHandler,
  getV1MembersIdRouteHandler,
  getV1MembersRouteHandler,
  getV1MessageTypesMessageTypeKeyRouteHandler,
  getV1MessageTypesRouteHandler,
  getV1PartialsPartialKeyRouteHandler,
  getV1PartialsRouteHandler,
  getV1PreferenceCategoriesRouteHandler,
  getV1PreferenceCenterRouteHandler,
  getV1ReusableRequestsReusableRequestKeyRouteHandler,
  getV1ReusableRequestsRouteHandler,
  getV1SchemasItemTypeRouteHandler,
  getV1SchemasRouteHandler,
  getV1SourceProvidersKeyRouteHandler,
  getV1SourceProvidersRouteHandler,
  getV1SourcesKeyEventsRouteHandler,
  getV1SourcesKeyLogsRouteHandler,
  getV1SourcesKeyRouteHandler,
  getV1SourcesKeyStatusRouteHandler,
  getV1SourcesRouteHandler,
  getV1TagsRouteHandler,
  getV1TranslationsLocaleCodeRouteHandler,
  getV1TranslationsRouteHandler,
  getV1VariablesKeyRouteHandler,
  getV1VariablesRouteHandler,
  getV1WarehousesRouteHandler,
  getV1WarehousesWarehouseKeyRouteHandler,
  getV1WarehouseSyncsRouteHandler,
  getV1WarehouseSyncsWarehouseSyncKeyRouteHandler,
  getV1WarehouseSyncsWarehouseSyncKeyRunsRouteHandler,
  getV1WebhooksIdRouteHandler,
  getV1WebhooksRouteHandler,
  getV1WhoamiRouteHandler,
  getV1WorkflowsRouteHandler,
  getV1WorkflowsWorkflowKeyRouteHandler,
  postV1ApiKeysExchangeRouteHandler,
  postV1AssetsRouteHandler,
  postV1AssetsUploadsRouteHandler,
  postV1BranchesBranchSlugRouteHandler,
  postV1EmailLayoutsPreviewRouteHandler,
  postV1FeedbackRouteHandler,
  postV1GoalsGoalKeyCloneRouteHandler,
  postV1HeadlessAccountsClaimRouteHandler,
  postV1HeadlessAccountsRouteHandler,
  postV1PartialsPreviewRouteHandler,
  postV1SourcesKeyRehearseRouteHandler,
  postV1TemplatesPreviewRouteHandler,
  postV1WebhooksRouteHandler,
  postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRouteHandler,
  putV1AudiencesAudienceKeyRouteHandler,
  putV1AudiencesAudienceKeyValidateRouteHandler,
  putV1BranchesBranchSlugRebaseRouteHandler,
  putV1BroadcastsBroadcastKeyCancelRouteHandler,
  putV1BroadcastsBroadcastKeyRouteHandler,
  putV1BroadcastsBroadcastKeyRunRouteHandler,
  putV1BroadcastsBroadcastKeySendRouteHandler,
  putV1BroadcastsBroadcastKeyValidateRouteHandler,
  putV1ChannelGroupsChannelGroupKeyRouteHandler,
  putV1CommitsIdPromoteRouteHandler,
  putV1CommitsPromoteRouteHandler,
  putV1CommitsRouteHandler,
  putV1EmailLayoutsEmailLayoutKeyRouteHandler,
  putV1EmailLayoutsEmailLayoutKeyValidateRouteHandler,
  putV1EnvironmentsEnvironmentSlugDefaultsRouteHandler,
  putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler,
  putV1GoalsGoalKeyRouteHandler,
  putV1GoalsGoalKeyValidateRouteHandler,
  putV1GuidesGuideKeyActivateRouteHandler,
  putV1GuidesGuideKeyRouteHandler,
  putV1GuidesGuideKeyUnarchiveRouteHandler,
  putV1GuidesGuideKeyValidateRouteHandler,
  putV1MessageTypesMessageTypeKeyRouteHandler,
  putV1MessageTypesMessageTypeKeyValidateRouteHandler,
  putV1PartialsPartialKeyDiscardRouteHandler,
  putV1PartialsPartialKeyRouteHandler,
  putV1PartialsPartialKeyUnarchiveRouteHandler,
  putV1PartialsPartialKeyValidateRouteHandler,
  putV1PreferenceCategoriesNameRouteHandler,
  putV1PreferenceCenterResetRouteHandler,
  putV1PreferenceCenterRouteHandler,
  putV1ReusableRequestsReusableRequestKeyRouteHandler,
  putV1ReusableRequestsReusableRequestKeyUnarchiveRouteHandler,
  putV1ReusableRequestsReusableRequestKeyValidateRouteHandler,
  putV1SchemasItemTypeRouteHandler,
  putV1SchemasItemTypeValidateRouteHandler,
  putV1SourcesKeyRouteHandler,
  putV1TagsNameRouteHandler,
  putV1TranslationsLocaleCodeRouteHandler,
  putV1TranslationsLocaleCodeValidateRouteHandler,
  putV1VariablesKeyRouteHandler,
  putV1WarehouseSyncsWarehouseSyncKeyRouteHandler,
  putV1WarehouseSyncsWarehouseSyncKeyRunRouteHandler,
  putV1WarehouseSyncsWarehouseSyncKeySettingsRouteHandler,
  putV1WarehouseSyncsWarehouseSyncKeyValidateRouteHandler,
  putV1WebhooksIdRouteHandler,
  putV1WorkflowsWorkflowKeyActivateRouteHandler,
  putV1WorkflowsWorkflowKeyDiscardRouteHandler,
  putV1WorkflowsWorkflowKeyRouteHandler,
  putV1WorkflowsWorkflowKeyRunRouteHandler,
  putV1WorkflowsWorkflowKeyUnarchiveRouteHandler,
  putV1WorkflowsWorkflowKeyValidateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1VariablesKeyRoute, deleteV1VariablesKeyRouteHandler)
  .openapi(getV1VariablesKeyRoute, getV1VariablesKeyRouteHandler)
  .openapi(putV1VariablesKeyRoute, putV1VariablesKeyRouteHandler)
  .openapi(getV1GoalsRoute, getV1GoalsRouteHandler)
  .openapi(deleteV1WorkflowsWorkflowKeyRoute, deleteV1WorkflowsWorkflowKeyRouteHandler)
  .openapi(getV1WorkflowsWorkflowKeyRoute, getV1WorkflowsWorkflowKeyRouteHandler)
  .openapi(putV1WorkflowsWorkflowKeyRoute, putV1WorkflowsWorkflowKeyRouteHandler)
  .openapi(getV1CommitsIdRoute, getV1CommitsIdRouteHandler)
  .openapi(getV1SourcesKeyStatusRoute, getV1SourcesKeyStatusRouteHandler)
  .openapi(putV1PartialsPartialKeyValidateRoute, putV1PartialsPartialKeyValidateRouteHandler)
  .openapi(getV1WhoamiRoute, getV1WhoamiRouteHandler)
  .openapi(getV1SourcesRoute, getV1SourcesRouteHandler)
  .openapi(postV1EmailLayoutsPreviewRoute, postV1EmailLayoutsPreviewRouteHandler)
  .openapi(putV1WorkflowsWorkflowKeyValidateRoute, putV1WorkflowsWorkflowKeyValidateRouteHandler)
  .openapi(getV1MessageTypesRoute, getV1MessageTypesRouteHandler)
  .openapi(deleteV1GoalsGoalKeyRoute, deleteV1GoalsGoalKeyRouteHandler)
  .openapi(getV1GoalsGoalKeyRoute, getV1GoalsGoalKeyRouteHandler)
  .openapi(putV1GoalsGoalKeyRoute, putV1GoalsGoalKeyRouteHandler)
  .openapi(getV1EnvironmentsRoute, getV1EnvironmentsRouteHandler)
  .openapi(deleteV1AssetsAssetIdRoute, deleteV1AssetsAssetIdRouteHandler)
  .openapi(getV1AssetsRoute, getV1AssetsRouteHandler)
  .openapi(postV1AssetsRoute, postV1AssetsRouteHandler)
  .openapi(getV1BroadcastsBroadcastKeyRoute, getV1BroadcastsBroadcastKeyRouteHandler)
  .openapi(putV1BroadcastsBroadcastKeyRoute, putV1BroadcastsBroadcastKeyRouteHandler)
  .openapi(postV1FeedbackRoute, postV1FeedbackRouteHandler)
  .openapi(postV1TemplatesPreviewRoute, postV1TemplatesPreviewRouteHandler)
  .openapi(putV1GuidesGuideKeyActivateRoute, putV1GuidesGuideKeyActivateRouteHandler)
  .openapi(putV1CommitsPromoteRoute, putV1CommitsPromoteRouteHandler)
  .openapi(
    putV1WarehouseSyncsWarehouseSyncKeyRunRoute,
    putV1WarehouseSyncsWarehouseSyncKeyRunRouteHandler,
  )
  .openapi(getV1GuidesRoute, getV1GuidesRouteHandler)
  .openapi(postV1HeadlessAccountsRoute, postV1HeadlessAccountsRouteHandler)
  .openapi(getV1AudiencesRoute, getV1AudiencesRouteHandler)
  .openapi(getV1TranslationsRoute, getV1TranslationsRouteHandler)
  .openapi(getV1TranslationsLocaleCodeRoute, getV1TranslationsLocaleCodeRouteHandler)
  .openapi(putV1TranslationsLocaleCodeRoute, putV1TranslationsLocaleCodeRouteHandler)
  .openapi(putV1GoalsGoalKeyValidateRoute, putV1GoalsGoalKeyValidateRouteHandler)
  .openapi(deleteV1TagsNameRoute, deleteV1TagsNameRouteHandler)
  .openapi(putV1TagsNameRoute, putV1TagsNameRouteHandler)
  .openapi(postV1SourcesKeyRehearseRoute, postV1SourcesKeyRehearseRouteHandler)
  .openapi(getV1SchemasRoute, getV1SchemasRouteHandler)
  .openapi(getV1ChannelGroupsRoute, getV1ChannelGroupsRouteHandler)
  .openapi(deleteV1PartialsPartialKeyRoute, deleteV1PartialsPartialKeyRouteHandler)
  .openapi(getV1PartialsPartialKeyRoute, getV1PartialsPartialKeyRouteHandler)
  .openapi(putV1PartialsPartialKeyRoute, putV1PartialsPartialKeyRouteHandler)
  .openapi(getV1VariablesRoute, getV1VariablesRouteHandler)
  .openapi(deleteV1GuidesGuideKeyRoute, deleteV1GuidesGuideKeyRouteHandler)
  .openapi(getV1GuidesGuideKeyRoute, getV1GuidesGuideKeyRouteHandler)
  .openapi(putV1GuidesGuideKeyRoute, putV1GuidesGuideKeyRouteHandler)
  .openapi(getV1SourcesKeyRoute, getV1SourcesKeyRouteHandler)
  .openapi(putV1SourcesKeyRoute, putV1SourcesKeyRouteHandler)
  .openapi(
    putV1ReusableRequestsReusableRequestKeyValidateRoute,
    putV1ReusableRequestsReusableRequestKeyValidateRouteHandler,
  )
  .openapi(putV1CommitsIdPromoteRoute, putV1CommitsIdPromoteRouteHandler)
  .openapi(getV1HeadlessAccountsStatusRoute, getV1HeadlessAccountsStatusRouteHandler)
  .openapi(
    putV1MessageTypesMessageTypeKeyValidateRoute,
    putV1MessageTypesMessageTypeKeyValidateRouteHandler,
  )
  .openapi(putV1WorkflowsWorkflowKeyUnarchiveRoute, putV1WorkflowsWorkflowKeyUnarchiveRouteHandler)
  .openapi(getV1ChannelsRoute, getV1ChannelsRouteHandler)
  .openapi(getV1EnvironmentsEnvironmentSlugRoute, getV1EnvironmentsEnvironmentSlugRouteHandler)
  .openapi(getV1PartialsRoute, getV1PartialsRouteHandler)
  .openapi(
    putV1WarehouseSyncsWarehouseSyncKeySettingsRoute,
    putV1WarehouseSyncsWarehouseSyncKeySettingsRouteHandler,
  )
  .openapi(getV1MessageTypesMessageTypeKeyRoute, getV1MessageTypesMessageTypeKeyRouteHandler)
  .openapi(putV1MessageTypesMessageTypeKeyRoute, putV1MessageTypesMessageTypeKeyRouteHandler)
  .openapi(deleteV1MembersIdRoute, deleteV1MembersIdRouteHandler)
  .openapi(getV1MembersIdRoute, getV1MembersIdRouteHandler)
  .openapi(deleteV1AudiencesAudienceKeyRoute, deleteV1AudiencesAudienceKeyRouteHandler)
  .openapi(getV1AudiencesAudienceKeyRoute, getV1AudiencesAudienceKeyRouteHandler)
  .openapi(putV1AudiencesAudienceKeyRoute, putV1AudiencesAudienceKeyRouteHandler)
  .openapi(getV1WebhooksRoute, getV1WebhooksRouteHandler)
  .openapi(postV1WebhooksRoute, postV1WebhooksRouteHandler)
  .openapi(putV1PartialsPartialKeyDiscardRoute, putV1PartialsPartialKeyDiscardRouteHandler)
  .openapi(getV1PreferenceCenterRoute, getV1PreferenceCenterRouteHandler)
  .openapi(putV1PreferenceCenterRoute, putV1PreferenceCenterRouteHandler)
  .openapi(getV1CommitsRoute, getV1CommitsRouteHandler)
  .openapi(putV1CommitsRoute, putV1CommitsRouteHandler)
  .openapi(postV1HeadlessAccountsClaimRoute, postV1HeadlessAccountsClaimRouteHandler)
  .openapi(getV1WarehousesWarehouseKeyRoute, getV1WarehousesWarehouseKeyRouteHandler)
  .openapi(getV1BillingSummaryRoute, getV1BillingSummaryRouteHandler)
  .openapi(getV1WarehouseSyncsRoute, getV1WarehouseSyncsRouteHandler)
  .openapi(getV1SchemasItemTypeRoute, getV1SchemasItemTypeRouteHandler)
  .openapi(putV1SchemasItemTypeRoute, putV1SchemasItemTypeRouteHandler)
  .openapi(putV1BroadcastsBroadcastKeyCancelRoute, putV1BroadcastsBroadcastKeyCancelRouteHandler)
  .openapi(getV1ReusableRequestsRoute, getV1ReusableRequestsRouteHandler)
  .openapi(
    getV1EnvironmentsEnvironmentSlugDefaultsRoute,
    getV1EnvironmentsEnvironmentSlugDefaultsRouteHandler,
  )
  .openapi(
    putV1EnvironmentsEnvironmentSlugDefaultsRoute,
    putV1EnvironmentsEnvironmentSlugDefaultsRouteHandler,
  )
  .openapi(getV1BranchesRoute, getV1BranchesRouteHandler)
  .openapi(putV1PartialsPartialKeyUnarchiveRoute, putV1PartialsPartialKeyUnarchiveRouteHandler)
  .openapi(
    deleteV1ReusableRequestsReusableRequestKeyRoute,
    deleteV1ReusableRequestsReusableRequestKeyRouteHandler,
  )
  .openapi(
    getV1ReusableRequestsReusableRequestKeyRoute,
    getV1ReusableRequestsReusableRequestKeyRouteHandler,
  )
  .openapi(
    putV1ReusableRequestsReusableRequestKeyRoute,
    putV1ReusableRequestsReusableRequestKeyRouteHandler,
  )
  .openapi(getV1PreferenceCategoriesRoute, getV1PreferenceCategoriesRouteHandler)
  .openapi(getV1AuditLogsRoute, getV1AuditLogsRouteHandler)
  .openapi(getV1EmailLayoutsEmailLayoutKeyRoute, getV1EmailLayoutsEmailLayoutKeyRouteHandler)
  .openapi(putV1EmailLayoutsEmailLayoutKeyRoute, putV1EmailLayoutsEmailLayoutKeyRouteHandler)
  .openapi(
    deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
    deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler,
  )
  .openapi(
    putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute,
    putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRouteHandler,
  )
  .openapi(putV1BroadcastsBroadcastKeyRunRoute, putV1BroadcastsBroadcastKeyRunRouteHandler)
  .openapi(postV1PartialsPreviewRoute, postV1PartialsPreviewRouteHandler)
  .openapi(postV1AssetsUploadsRoute, postV1AssetsUploadsRouteHandler)
  .openapi(getV1WarehousesRoute, getV1WarehousesRouteHandler)
  .openapi(
    putV1EmailLayoutsEmailLayoutKeyValidateRoute,
    putV1EmailLayoutsEmailLayoutKeyValidateRouteHandler,
  )
  .openapi(
    putV1ReusableRequestsReusableRequestKeyUnarchiveRoute,
    putV1ReusableRequestsReusableRequestKeyUnarchiveRouteHandler,
  )
  .openapi(getV1MembersRoute, getV1MembersRouteHandler)
  .openapi(
    postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute,
    postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRouteHandler,
  )
  .openapi(
    putV1TranslationsLocaleCodeValidateRoute,
    putV1TranslationsLocaleCodeValidateRouteHandler,
  )
  .openapi(
    getV1WarehouseSyncsWarehouseSyncKeyRunsRoute,
    getV1WarehouseSyncsWarehouseSyncKeyRunsRouteHandler,
  )
  .openapi(deleteV1PreferenceCategoriesNameRoute, deleteV1PreferenceCategoriesNameRouteHandler)
  .openapi(putV1PreferenceCategoriesNameRoute, putV1PreferenceCategoriesNameRouteHandler)
  .openapi(putV1BranchesBranchSlugRebaseRoute, putV1BranchesBranchSlugRebaseRouteHandler)
  .openapi(getV1BroadcastsRoute, getV1BroadcastsRouteHandler)
  .openapi(getV1WorkflowsRoute, getV1WorkflowsRouteHandler)
  .openapi(putV1WorkflowsWorkflowKeyDiscardRoute, putV1WorkflowsWorkflowKeyDiscardRouteHandler)
  .openapi(putV1GuidesGuideKeyValidateRoute, putV1GuidesGuideKeyValidateRouteHandler)
  .openapi(putV1WorkflowsWorkflowKeyRunRoute, putV1WorkflowsWorkflowKeyRunRouteHandler)
  .openapi(putV1BroadcastsBroadcastKeySendRoute, putV1BroadcastsBroadcastKeySendRouteHandler)
  .openapi(
    putV1BroadcastsBroadcastKeyValidateRoute,
    putV1BroadcastsBroadcastKeyValidateRouteHandler,
  )
  .openapi(putV1GuidesGuideKeyUnarchiveRoute, putV1GuidesGuideKeyUnarchiveRouteHandler)
  .openapi(putV1SchemasItemTypeValidateRoute, putV1SchemasItemTypeValidateRouteHandler)
  .openapi(
    deleteV1ChannelGroupsChannelGroupKeyRoute,
    deleteV1ChannelGroupsChannelGroupKeyRouteHandler,
  )
  .openapi(getV1ChannelGroupsChannelGroupKeyRoute, getV1ChannelGroupsChannelGroupKeyRouteHandler)
  .openapi(putV1ChannelGroupsChannelGroupKeyRoute, putV1ChannelGroupsChannelGroupKeyRouteHandler)
  .openapi(getV1SourcesKeyEventsRoute, getV1SourcesKeyEventsRouteHandler)
  .openapi(
    putV1WarehouseSyncsWarehouseSyncKeyValidateRoute,
    putV1WarehouseSyncsWarehouseSyncKeyValidateRouteHandler,
  )
  .openapi(getV1SourceProvidersRoute, getV1SourceProvidersRouteHandler)
  .openapi(putV1AudiencesAudienceKeyValidateRoute, putV1AudiencesAudienceKeyValidateRouteHandler)
  .openapi(getV1TagsRoute, getV1TagsRouteHandler)
  .openapi(putV1PreferenceCenterResetRoute, putV1PreferenceCenterResetRouteHandler)
  .openapi(postV1ApiKeysExchangeRoute, postV1ApiKeysExchangeRouteHandler)
  .openapi(deleteV1WebhooksIdRoute, deleteV1WebhooksIdRouteHandler)
  .openapi(getV1WebhooksIdRoute, getV1WebhooksIdRouteHandler)
  .openapi(putV1WebhooksIdRoute, putV1WebhooksIdRouteHandler)
  .openapi(
    getV1WarehouseSyncsWarehouseSyncKeyRoute,
    getV1WarehouseSyncsWarehouseSyncKeyRouteHandler,
  )
  .openapi(
    putV1WarehouseSyncsWarehouseSyncKeyRoute,
    putV1WarehouseSyncsWarehouseSyncKeyRouteHandler,
  )
  .openapi(postV1GoalsGoalKeyCloneRoute, postV1GoalsGoalKeyCloneRouteHandler)
  .openapi(putV1WorkflowsWorkflowKeyActivateRoute, putV1WorkflowsWorkflowKeyActivateRouteHandler)
  .openapi(getV1ChannelsChannelKeyRoute, getV1ChannelsChannelKeyRouteHandler)
  .openapi(getV1EmailLayoutsRoute, getV1EmailLayoutsRouteHandler)
  .openapi(getV1SourceProvidersKeyRoute, getV1SourceProvidersKeyRouteHandler)
  .openapi(deleteV1BranchesBranchSlugRoute, deleteV1BranchesBranchSlugRouteHandler)
  .openapi(getV1BranchesBranchSlugRoute, getV1BranchesBranchSlugRouteHandler)
  .openapi(postV1BranchesBranchSlugRoute, postV1BranchesBranchSlugRouteHandler)
  .openapi(getV1SourcesKeyLogsRoute, getV1SourcesKeyLogsRouteHandler)
  .openapi(getV1GoalsGoalKeyAttachmentsRoute, getV1GoalsGoalKeyAttachmentsRouteHandler)

export default app
