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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GoalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailLayoutsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessageTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BroadcastsBroadcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HeadlessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TranslationsLocaleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TranslationsLocaleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesKeyRehearseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SourcesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReusableRequestsReusableRequestKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HeadlessAccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessageTypesMessageTypeKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PartialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MessageTypesMessageTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MessageTypesMessageTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreferenceCenterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCenterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HeadlessAccountsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesWarehouseKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SchemasItemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchemasItemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReusableRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentSlugDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentSlugDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreferenceCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailLayoutsEmailLayoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailLayoutsEmailLayoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GoalsGoalKeyAttachmentsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartialsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssetsUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailLayoutsEmailLayoutKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReusableRequestsReusableRequestKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkflowsWorkflowKeyStepsStepRefPreviewTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TranslationsLocaleCodeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsWarehouseSyncKeyRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PreferenceCategoriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCategoriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BranchesBranchSlugRebaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BroadcastsBroadcastKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuidesGuideKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchemasItemTypeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AudiencesAudienceKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCenterResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiKeysExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsWarehouseSyncKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GoalsGoalKeyCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkflowsWorkflowKeyActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelsChannelKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailLayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceProvidersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesKeyLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GoalsGoalKeyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
