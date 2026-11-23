import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApiTokensIdRoute,
  deleteApiV2AttachmentsAttachmentIdRoute,
  deleteApiV2AutomationsAutomationIdRoute,
  deleteApiV2AutomationsDestroyManyRoute,
  deleteApiV2BookmarksBookmarkIdRoute,
  deleteApiV2BrandAgentsBrandAgentIdRoute,
  deleteApiV2BrandsBrandIdLogoRoute,
  deleteApiV2BrandsBrandIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute,
  deleteApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  deleteApiV2CustomObjectsCustomObjectKeyRoute,
  deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRoute,
  deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  deleteApiV2CustomRolesCustomRoleIdRoute,
  deleteApiV2CustomStatusesCustomStatusIdRoute,
  deleteApiV2DeletedTicketsDestroyManyRoute,
  deleteApiV2DeletedTicketsTicketIdRoute,
  deleteApiV2DeletedUsersDeletedUserIdRoute,
  deleteApiV2DeletionSchedulesDeletionScheduleIdRoute,
  deleteApiV2DynamicContentItemsDynamicContentItemIdRoute,
  deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute,
  deleteApiV2GroupMembershipsDestroyManyRoute,
  deleteApiV2GroupMembershipsGroupMembershipIdRoute,
  deleteApiV2GroupsGroupIdRoute,
  deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  deleteApiV2ItAssetManagementAssetsAssetIdRoute,
  deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  deleteApiV2ItAssetManagementFieldsIdRoute,
  deleteApiV2ItAssetManagementLocationsLocationIdRoute,
  deleteApiV2ItAssetManagementStatusesStatusIdRoute,
  deleteApiV2MacrosDestroyManyRoute,
  deleteApiV2MacrosMacroIdRoute,
  deleteApiV2OauthClientsOauthClientIdRoute,
  deleteApiV2OauthTokensCurrentRoute,
  deleteApiV2OauthTokensOauthTokenIdRoute,
  deleteApiV2OrganizationFieldsOrganizationFieldIdRoute,
  deleteApiV2OrganizationMembershipsDestroyManyRoute,
  deleteApiV2OrganizationMembershipsOrganizationMembershipIdRoute,
  deleteApiV2OrganizationsDestroyManyRoute,
  deleteApiV2OrganizationsOrganizationIdRoute,
  deleteApiV2OrganizationsOrganizationIdTagsRoute,
  deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute,
  deleteApiV2QueuesQueueIdRoute,
  deleteApiV2RecipientAddressesSupportAddressIdRoute,
  deleteApiV2ResourceCollectionsResourceCollectionIdRoute,
  deleteApiV2RoutingAttributesAttributeIdRoute,
  deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  deleteApiV2SavedSearchesIdRoute,
  deleteApiV2SharingAgreementsSharingAgreementIdRoute,
  deleteApiV2SlasPoliciesSlaPolicyIdRoute,
  deleteApiV2SuspendedTicketsDestroyManyRoute,
  deleteApiV2SuspendedTicketsIdRoute,
  deleteApiV2TargetsTargetIdRoute,
  deleteApiV2TaskListsTaskListIdRoute,
  deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
  deleteApiV2TaskListTemplatesTaskListTemplateIdRoute,
  deleteApiV2TicketContentPinsContentPinIdRoute,
  deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute,
  deleteApiV2TicketFieldsTicketFieldIdRoute,
  deleteApiV2TicketFormsTicketFormIdRoute,
  deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute,
  deleteApiV2TicketsDestroyManyRoute,
  deleteApiV2TicketsTicketIdRoute,
  deleteApiV2TicketsTicketIdTagsRoute,
  deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRoute,
  deleteApiV2TriggerCategoriesTriggerCategoryIdRoute,
  deleteApiV2TriggersDestroyManyRoute,
  deleteApiV2TriggersTriggerIdRoute,
  deleteApiV2UploadsTokenRoute,
  deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute,
  deleteApiV2UserFieldsUserFieldIdRoute,
  deleteApiV2UsersDestroyManyRoute,
  deleteApiV2UsersMeLogoutRoute,
  deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute,
  deleteApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute,
  deleteApiV2UsersUserIdOrganizationsOrganizationIdRoute,
  deleteApiV2UsersUserIdRoute,
  deleteApiV2UsersUserIdSessionsRoute,
  deleteApiV2UsersUserIdSessionsSessionIdRoute,
  deleteApiV2UsersUserIdSuspensionRoute,
  deleteApiV2UsersUserIdTagsRoute,
  deleteApiV2ViewsDestroyManyRoute,
  deleteApiV2ViewsViewIdRoute,
  deleteApiV2WorkspacesDestroyManyRoute,
  deleteApiV2WorkspacesWorkspaceIdRoute,
  getApiV2AccountEmailSettingsRoute,
  getApiV2AccountsAvailableRoute,
  getApiV2AccountSettingsRoute,
  getApiV2ActivitiesActivityIdRoute,
  getApiV2ActivitiesCountRoute,
  getApiV2ActivitiesRoute,
  getApiV2ApiTokensRoute,
  getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRoute,
  getApiV2ApprovalRequestsRoute,
  getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRoute,
  getApiV2AttachmentsAttachmentIdRoute,
  getApiV2AuditLogsAuditLogIdRoute,
  getApiV2AuditLogsRoute,
  getApiV2AutocompleteTagsRoute,
  getApiV2AutomationsActiveRoute,
  getApiV2AutomationsAutomationIdRoute,
  getApiV2AutomationsRoute,
  getApiV2AutomationsSearchRoute,
  getApiV2BookmarksRoute,
  getApiV2BrandAgentsBrandAgentIdRoute,
  getApiV2BrandAgentsRoute,
  getApiV2BrandsBrandIdAgentsRoute,
  getApiV2BrandsBrandIdCheckHostMappingRoute,
  getApiV2BrandsBrandIdRoute,
  getApiV2BrandsBrandIdUserMigrationsMigrationIdRoute,
  getApiV2BrandsBrandIdUserMigrationsRoute,
  getApiV2BrandsCheckHostMappingRoute,
  getApiV2BrandsRoute,
  getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRoute,
  getApiV2ChannelsTwitterMonitoredTwitterHandlesRoute,
  getApiV2ChannelsTwitterTicketsCommentIdStatusesRoute,
  getApiV2ChannelsWhatsappTemplatesLanguagesRoute,
  getApiV2ChannelsWhatsappTemplatesRoute,
  getApiV2CountriesIdJsonRoute,
  getApiV2CountriesJsonRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  getApiV2CustomObjectsCustomObjectKeyAccessRulesRoute,
  getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  getApiV2CustomObjectsCustomObjectKeyFieldsRoute,
  getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRoute,
  getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute,
  getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsCountRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute,
  getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRoute,
  getApiV2CustomObjectsCustomObjectKeyRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersActiveRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersSearchRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  getApiV2CustomObjectsLimitsObjectLimitRoute,
  getApiV2CustomObjectsLimitsRecordLimitRoute,
  getApiV2CustomObjectsRoute,
  getApiV2CustomRolesCustomRoleIdRoute,
  getApiV2CustomRolesRoute,
  getApiV2CustomStatusesCustomStatusIdRoute,
  getApiV2CustomStatusesRoute,
  getApiV2CustomStatusesShowManyRoute,
  getApiV2DeletedTicketsRoute,
  getApiV2DeletedUsersCountRoute,
  getApiV2DeletedUsersDeletedUserIdRoute,
  getApiV2DeletedUsersRoute,
  getApiV2DeletionSchedulesDeletionScheduleIdRoute,
  getApiV2DeletionSchedulesRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  getApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute,
  getApiV2DynamicContentItemsRoute,
  getApiV2DynamicContentItemsShowManyRoute,
  getApiV2EmailNotificationsNotificationIdRoute,
  getApiV2EmailNotificationsRoute,
  getApiV2EmailNotificationsShowManyRoute,
  getApiV2EndUsersUserIdIdentitiesRoute,
  getApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute,
  getApiV2GroupMembershipsAssignableRoute,
  getApiV2GroupMembershipsGroupMembershipIdRoute,
  getApiV2GroupMembershipsRoute,
  getApiV2GroupsAssignableRoute,
  getApiV2GroupsAutocompleteRoute,
  getApiV2GroupsAvailableAgentsRoute,
  getApiV2GroupsCountRoute,
  getApiV2GroupsDefaultRoute,
  getApiV2GroupsGroupIdMembershipsAssignableRoute,
  getApiV2GroupsGroupIdMembershipsRoute,
  getApiV2GroupsGroupIdRoute,
  getApiV2GroupsGroupIdUsersCountRoute,
  getApiV2GroupsGroupIdUsersRoute,
  getApiV2GroupSlasPoliciesDefinitionsRoute,
  getApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  getApiV2GroupSlasPoliciesRoute,
  getApiV2GroupsRoute,
  getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRoute,
  getApiV2IncrementalIncrementalResourceSampleRoute,
  getApiV2IncrementalOrganizationsRoute,
  getApiV2IncrementalRoutingAttributesRoute,
  getApiV2IncrementalRoutingAttributeValuesRoute,
  getApiV2IncrementalRoutingInstanceValuesRoute,
  getApiV2IncrementalTicketEventsRoute,
  getApiV2IncrementalTicketMetricEventsRoute,
  getApiV2IncrementalTicketsCursorRoute,
  getApiV2IncrementalTicketsRoute,
  getApiV2IncrementalUsersCursorRoute,
  getApiV2IncrementalUsersRoute,
  getApiV2ItAssetManagementAssetsAssetIdRoute,
  getApiV2ItAssetManagementAssetsRoute,
  getApiV2ItAssetManagementAssetsSearchRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRoute,
  getApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  getApiV2ItAssetManagementAssetTypesRoute,
  getApiV2ItAssetManagementFieldsIdRoute,
  getApiV2ItAssetManagementFieldsRoute,
  getApiV2ItAssetManagementLocationsLocationIdRoute,
  getApiV2ItAssetManagementLocationsRoute,
  getApiV2ItAssetManagementStatusesRoute,
  getApiV2ItAssetManagementStatusesStatusIdRoute,
  getApiV2JobStatusesJobStatusIdRoute,
  getApiV2JobStatusesRoute,
  getApiV2JobStatusesShowManyRoute,
  getApiV2LocalesAgentRoute,
  getApiV2LocalesCurrentRoute,
  getApiV2LocalesDetectBestLocaleRoute,
  getApiV2LocalesLocaleIdRoute,
  getApiV2LocalesPublicRoute,
  getApiV2LocalesRoute,
  getApiV2MacrosActionsRoute,
  getApiV2MacrosActiveRoute,
  getApiV2MacrosAttachmentsAttachmentIdContentRoute,
  getApiV2MacrosAttachmentsAttachmentIdRoute,
  getApiV2MacrosCategoriesRoute,
  getApiV2MacrosDefinitionsRoute,
  getApiV2MacrosGroupsRoute,
  getApiV2MacrosMacroIdApplyRoute,
  getApiV2MacrosMacroIdAttachmentsRoute,
  getApiV2MacrosMacroIdRoute,
  getApiV2MacrosMostUsedRoute,
  getApiV2MacrosNewRoute,
  getApiV2MacrosRoute,
  getApiV2MacrosSearchRoute,
  getApiV2OauthClientsOauthClientIdRoute,
  getApiV2OauthClientsRoute,
  getApiV2OauthGlobalClientsGlobalClientIdRoute,
  getApiV2OauthGlobalClientsRoute,
  getApiV2OauthGlobalClientsTokenSummaryRoute,
  getApiV2OauthTokensCurrentRoute,
  getApiV2OauthTokensOauthTokenIdRoute,
  getApiV2OauthTokensRoute,
  getApiV2OrganizationFieldsOrganizationFieldIdRoute,
  getApiV2OrganizationFieldsRoute,
  getApiV2OrganizationMembershipsOrganizationMembershipIdRoute,
  getApiV2OrganizationMembershipsRoute,
  getApiV2OrganizationMergesOrganizationMergeIdRoute,
  getApiV2OrganizationsAutocompleteRoute,
  getApiV2OrganizationsCountRoute,
  getApiV2OrganizationsOrganizationIdMergesRoute,
  getApiV2OrganizationsOrganizationIdOrganizationMembershipsRoute,
  getApiV2OrganizationsOrganizationIdRelatedRoute,
  getApiV2OrganizationsOrganizationIdRequestsRoute,
  getApiV2OrganizationsOrganizationIdRoute,
  getApiV2OrganizationsOrganizationIdSubscriptionsRoute,
  getApiV2OrganizationsOrganizationIdTagsRoute,
  getApiV2OrganizationsOrganizationIdTicketsCountRoute,
  getApiV2OrganizationsOrganizationIdTicketsRoute,
  getApiV2OrganizationsOrganizationIdUsersCountRoute,
  getApiV2OrganizationsOrganizationIdUsersRoute,
  getApiV2OrganizationsRoute,
  getApiV2OrganizationsSearchRoute,
  getApiV2OrganizationsShowManyRoute,
  getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute,
  getApiV2OrganizationSubscriptionsRoute,
  getApiV2ProblemsRoute,
  getApiV2QueuesDefinitionsRoute,
  getApiV2QueuesQueueIdRoute,
  getApiV2QueuesRoute,
  getApiV2RecipientAddressesRoute,
  getApiV2RecipientAddressesSupportAddressIdRoute,
  getApiV2RelationshipsDefinitionsTargetTypeRoute,
  getApiV2RemoteAuthenticationsRoute,
  getApiV2RequestsCcdRoute,
  getApiV2RequestsOpenRoute,
  getApiV2RequestsRequestIdCommentsRoute,
  getApiV2RequestsRequestIdCommentsTicketCommentIdRoute,
  getApiV2RequestsRequestIdRoute,
  getApiV2RequestsRoute,
  getApiV2RequestsSearchRoute,
  getApiV2RequestsSolvedRoute,
  getApiV2ResourceCollectionsResourceCollectionIdRoute,
  getApiV2ResourceCollectionsRoute,
  getApiV2RoutingAgentsInstanceValuesRoute,
  getApiV2RoutingAgentsUserIdInstanceValuesRoute,
  getApiV2RoutingAttributesAttributeIdRoute,
  getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  getApiV2RoutingAttributesAttributeIdValuesRoute,
  getApiV2RoutingAttributesDefinitionsRoute,
  getApiV2RoutingAttributesRoute,
  getApiV2RoutingRequirementsFulfilledRoute,
  getApiV2RoutingTicketsTicketIdInstanceValuesRoute,
  getApiV2SatisfactionRatingsCountRoute,
  getApiV2SatisfactionRatingsRoute,
  getApiV2SatisfactionRatingsSatisfactionRatingIdRoute,
  getApiV2SatisfactionReasonsRoute,
  getApiV2SatisfactionReasonsSatisfactionReasonIdRoute,
  getApiV2SavedSearchesRoute,
  getApiV2SearchCountRoute,
  getApiV2SearchExportRoute,
  getApiV2SearchRoute,
  getApiV2SecuritySettingsRoute,
  getApiV2SessionsRoute,
  getApiV2SharingAgreementsRoute,
  getApiV2SharingAgreementsSharingAgreementIdRoute,
  getApiV2SkipsRoute,
  getApiV2SlasPoliciesDefinitionsRoute,
  getApiV2SlasPoliciesRoute,
  getApiV2SlasPoliciesSlaPolicyIdRoute,
  getApiV2SuspendedTicketsIdRoute,
  getApiV2SuspendedTicketsRoute,
  getApiV2TagsCountRoute,
  getApiV2TagsRoute,
  getApiV2TargetFailuresRoute,
  getApiV2TargetFailuresTargetFailureIdRoute,
  getApiV2TargetsRoute,
  getApiV2TargetsTargetIdRoute,
  getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRoute,
  getApiV2TaskListsTaskListIdRoute,
  getApiV2TaskListsTaskListIdTaskItemsRoute,
  getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
  getApiV2TaskListTemplatesRoute,
  getApiV2TaskListTemplatesTaskListTemplateIdRoute,
  getApiV2TaskListTemplatesTaskListTemplateIdTasksRoute,
  getApiV2TicketAuditsRoute,
  getApiV2TicketContentPinsRoute,
  getApiV2TicketFieldsCountRoute,
  getApiV2TicketFieldsRoute,
  getApiV2TicketFieldsShowManyRoute,
  getApiV2TicketFieldsTicketFieldIdOptionsRoute,
  getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute,
  getApiV2TicketFieldsTicketFieldIdRoute,
  getApiV2TicketFormsRoute,
  getApiV2TicketFormsShowManyRoute,
  getApiV2TicketFormStatusesRoute,
  getApiV2TicketFormStatusesShowManyRoute,
  getApiV2TicketFormsTicketFormIdRoute,
  getApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  getApiV2TicketMetricsRoute,
  getApiV2TicketMetricsTicketMetricIdRoute,
  getApiV2TicketsAutocompleteRoute,
  getApiV2TicketsCountRoute,
  getApiV2TicketsMessagingConversationsConversationIdTicketRoute,
  getApiV2TicketsRecentRoute,
  getApiV2TicketsRoute,
  getApiV2TicketsShowManyRoute,
  getApiV2TicketsTicketIdAuditsCountRoute,
  getApiV2TicketsTicketIdAuditsRoute,
  getApiV2TicketsTicketIdAuditsTicketAuditIdRoute,
  getApiV2TicketsTicketIdCollaboratorsRoute,
  getApiV2TicketsTicketIdCommentsCountRoute,
  getApiV2TicketsTicketIdCommentsRoute,
  getApiV2TicketsTicketIdConversationLogRoute,
  getApiV2TicketsTicketIdEmailCcsRoute,
  getApiV2TicketsTicketIdFollowersRoute,
  getApiV2TicketsTicketIdGroupSlasPolicyMetricsRoute,
  getApiV2TicketsTicketIdIncidentsRoute,
  getApiV2TicketsTicketIdMacrosMacroIdApplyRoute,
  getApiV2TicketsTicketIdMetricEventsRoute,
  getApiV2TicketsTicketIdMetricsRoute,
  getApiV2TicketsTicketIdParentTicketTasksRoute,
  getApiV2TicketsTicketIdRelatedRoute,
  getApiV2TicketsTicketIdRoute,
  getApiV2TicketsTicketIdSkipsRoute,
  getApiV2TicketsTicketIdSlasPolicyMetricsRoute,
  getApiV2TicketsTicketIdTagsRoute,
  getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute,
  getApiV2TicketsTicketIdTaskListsRoute,
  getApiV2TriggerCategoriesRoute,
  getApiV2TriggerCategoriesTriggerCategoryIdRoute,
  getApiV2TriggersActiveRoute,
  getApiV2TriggersDefinitionsRoute,
  getApiV2TriggersLimitsRoute,
  getApiV2TriggersRoute,
  getApiV2TriggersSearchRoute,
  getApiV2TriggersTriggerIdRevisionsRoute,
  getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRoute,
  getApiV2TriggersTriggerIdRoute,
  getApiV2UserFieldsRoute,
  getApiV2UserFieldsShowManyRoute,
  getApiV2UserFieldsUserFieldIdOptionsRoute,
  getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute,
  getApiV2UserFieldsUserFieldIdRoute,
  getApiV2UsersAutocompleteRoute,
  getApiV2UsersCountRoute,
  getApiV2UsersMeOauthClientsRoute,
  getApiV2UsersMeRoute,
  getApiV2UsersMeSessionRenewRoute,
  getApiV2UsersMeSessionRoute,
  getApiV2UsersMeSettingsRoute,
  getApiV2UsersRoute,
  getApiV2UsersSearchRoute,
  getApiV2UsersShowManyRoute,
  getApiV2UsersUserIdBrandAgentsBrandAgentIdRoute,
  getApiV2UsersUserIdBrandAgentsRoute,
  getApiV2UsersUserIdComplianceDeletionStatusesRoute,
  getApiV2UsersUserIdEntitlementsFullRoute,
  getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute,
  getApiV2UsersUserIdGroupMembershipsRoute,
  getApiV2UsersUserIdGroupsCountRoute,
  getApiV2UsersUserIdGroupsRoute,
  getApiV2UsersUserIdIdentitiesRoute,
  getApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute,
  getApiV2UsersUserIdOrganizationMembershipsRoute,
  getApiV2UsersUserIdOrganizationsCountRoute,
  getApiV2UsersUserIdOrganizationsRoute,
  getApiV2UsersUserIdOrganizationSubscriptionsRoute,
  getApiV2UsersUserIdPasswordRequirementsRoute,
  getApiV2UsersUserIdRelatedRoute,
  getApiV2UsersUserIdRequestsRoute,
  getApiV2UsersUserIdRoute,
  getApiV2UsersUserIdSessionsRoute,
  getApiV2UsersUserIdSessionsSessionIdRoute,
  getApiV2UsersUserIdSkipsRoute,
  getApiV2UsersUserIdSuspensionRoute,
  getApiV2UsersUserIdTagsRoute,
  getApiV2UsersUserIdTicketsAssignedCountRoute,
  getApiV2UsersUserIdTicketsAssignedRoute,
  getApiV2UsersUserIdTicketsCcdCountRoute,
  getApiV2UsersUserIdTicketsCcdRoute,
  getApiV2UsersUserIdTicketsFollowedRoute,
  getApiV2UsersUserIdTicketsRequestedRoute,
  getApiV2ViewsActiveRoute,
  getApiV2ViewsCompactRoute,
  getApiV2ViewsCountManyRoute,
  getApiV2ViewsCountRoute,
  getApiV2ViewsDefinitionsRoute,
  getApiV2ViewsRoute,
  getApiV2ViewsSearchRoute,
  getApiV2ViewsShowManyRoute,
  getApiV2ViewsViewIdCountRoute,
  getApiV2ViewsViewIdExecuteRoute,
  getApiV2ViewsViewIdExportRoute,
  getApiV2ViewsViewIdRoute,
  getApiV2ViewsViewIdTicketsRoute,
  getApiV2WorkspacesRoute,
  getApiV2WorkspacesWorkspaceIdRoute,
  patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRoute,
  patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRoute,
  patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute,
  patchApiV2CustomObjectsCustomObjectKeyRoute,
  patchApiV2ItAssetManagementAssetsAssetIdRoute,
  patchApiV2ItAssetManagementAssetTypesAssetTypeIdRoute,
  patchApiV2ItAssetManagementFieldsIdRoute,
  patchApiV2ItAssetManagementLocationsLocationIdRoute,
  patchApiV2ItAssetManagementStatusesStatusIdRoute,
  patchApiV2QueuesOrderRoute,
  patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  patchApiV2TriggerCategoriesTriggerCategoryIdRoute,
  postApiV2AccountsRoute,
  postApiV2AnyChannelChannelbackReportErrorRoute,
  postApiV2AnyChannelPushRoute,
  postApiV2AnyChannelValidateTokenRoute,
  postApiV2ApiTokensRoute,
  postApiV2ApprovalClarificationFlowMessagesRoute,
  postApiV2ApprovalRequestsRoute,
  postApiV2AuditLogsExportRoute,
  postApiV2AutocompleteTagsRoute,
  postApiV2AutomationsRoute,
  postApiV2BookmarksRoute,
  postApiV2BrandAgentsRoute,
  postApiV2BrandsBrandIdUserMigrationsRoute,
  postApiV2BrandsRoute,
  postApiV2ChannelsTwitterTicketsRoute,
  postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRoute,
  postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRoute,
  postApiV2ChannelsVoiceTicketsRoute,
  postApiV2CustomObjectsCustomObjectKeyAccessRulesRoute,
  postApiV2CustomObjectsCustomObjectKeyFieldsRoute,
  postApiV2CustomObjectsCustomObjectKeyJobsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsRoute,
  postApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute,
  postApiV2CustomObjectsCustomObjectKeyTriggersRoute,
  postApiV2CustomObjectsRoute,
  postApiV2CustomRolesRoute,
  postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRoute,
  postApiV2CustomStatusesRoute,
  postApiV2DeletionSchedulesRoute,
  postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRoute,
  postApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute,
  postApiV2DynamicContentItemsRoute,
  postApiV2EndUsersUserIdIdentitiesRoute,
  postApiV2GroupMembershipsCreateManyRoute,
  postApiV2GroupMembershipsRoute,
  postApiV2GroupSlasPoliciesRoute,
  postApiV2GroupsRoute,
  postApiV2ImportsTicketsCreateManyRoute,
  postApiV2ImportsTicketsRoute,
  postApiV2ItAssetManagementAssetsJobsRoute,
  postApiV2ItAssetManagementAssetsRoute,
  postApiV2ItAssetManagementAssetsSearchRoute,
  postApiV2ItAssetManagementAssetTypesRoute,
  postApiV2ItAssetManagementFieldsRoute,
  postApiV2ItAssetManagementLocationsRoute,
  postApiV2ItAssetManagementStatusesRoute,
  postApiV2MacrosAttachmentsRoute,
  postApiV2MacrosMacroIdAttachmentsRoute,
  postApiV2MacrosRoute,
  postApiV2OauthClientsRoute,
  postApiV2OauthTokensDeleteManyRoute,
  postApiV2OrganizationFieldsRoute,
  postApiV2OrganizationMembershipsCreateManyRoute,
  postApiV2OrganizationMembershipsRoute,
  postApiV2OrganizationsCreateManyRoute,
  postApiV2OrganizationsCreateOrUpdateRoute,
  postApiV2OrganizationsOrganizationIdMergeRoute,
  postApiV2OrganizationsOrganizationIdTagsRoute,
  postApiV2OrganizationsRoute,
  postApiV2OrganizationSubscriptionsRoute,
  postApiV2ProblemsAutocompleteRoute,
  postApiV2PushNotificationDevicesDestroyManyRoute,
  postApiV2QueuesRoute,
  postApiV2RecipientAddressesRoute,
  postApiV2RequestsRoute,
  postApiV2ResourceCollectionsRoute,
  postApiV2RoutingAgentsInstanceValuesJobsRoute,
  postApiV2RoutingAgentsUserIdInstanceValuesRoute,
  postApiV2RoutingAttributesAttributeIdValuesRoute,
  postApiV2RoutingAttributesRoute,
  postApiV2RoutingTicketsTicketIdInstanceValuesRoute,
  postApiV2SavedSearchesRoute,
  postApiV2SharingAgreementsRoute,
  postApiV2SkipsRoute,
  postApiV2SlasPoliciesRoute,
  postApiV2SuspendedTicketsAttachmentsRoute,
  postApiV2SuspendedTicketsExportRoute,
  postApiV2TargetsRoute,
  postApiV2TaskListsTaskListIdTaskItemsRoute,
  postApiV2TaskListTemplatesRoute,
  postApiV2TicketContentPinsRoute,
  postApiV2TicketFieldsRoute,
  postApiV2TicketFieldsTicketFieldIdOptionsRoute,
  postApiV2TicketFormsRoute,
  postApiV2TicketFormsTicketFormIdCloneRoute,
  postApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  postApiV2TicketsCreateManyRoute,
  postApiV2TicketsRoute,
  postApiV2TicketsTicketIdMergeRoute,
  postApiV2TicketsTicketIdSatisfactionRatingRoute,
  postApiV2TicketsTicketIdTagsRoute,
  postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRoute,
  postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute,
  postApiV2TicketsTicketIdTaskListsRoute,
  postApiV2TriggerCategoriesJobsRoute,
  postApiV2TriggerCategoriesRoute,
  postApiV2TriggersRoute,
  postApiV2TriggersValidateRoute,
  postApiV2UploadsRoute,
  postApiV2UserFieldsRoute,
  postApiV2UserFieldsUserFieldIdOptionsRoute,
  postApiV2UsersAutocompleteRoute,
  postApiV2UsersCreateManyRoute,
  postApiV2UsersCreateOrUpdateManyRoute,
  postApiV2UsersCreateOrUpdateRoute,
  postApiV2UsersLogoutManyRoute,
  postApiV2UsersRequestCreateRoute,
  postApiV2UsersRoute,
  postApiV2UsersUserIdGroupMembershipsRoute,
  postApiV2UsersUserIdIdentitiesRoute,
  postApiV2UsersUserIdOrganizationMembershipsRoute,
  postApiV2UsersUserIdPasswordRoute,
  postApiV2UsersUserIdSuspensionRoute,
  postApiV2UsersUserIdTagsRoute,
  postApiV2ViewsPreviewCountRoute,
  postApiV2ViewsPreviewRoute,
  postApiV2ViewsRoute,
  postApiV2WorkspacesRoute,
  putApiV2AccountEmailSettingsRoute,
  putApiV2AccountSettingsRoute,
  putApiV2ApiTokensIdRoute,
  putApiV2AttachmentsAttachmentIdRoute,
  putApiV2AutomationsAutomationIdRoute,
  putApiV2AutomationsUpdateManyRoute,
  putApiV2BrandsBrandIdLogoRoute,
  putApiV2BrandsBrandIdRoute,
  putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRoute,
  putApiV2ChannelsWhatsappTemplatesToggleManyRoute,
  putApiV2ChatFileRedactionsTicketIdRoute,
  putApiV2ChatRedactionsTicketIdRoute,
  putApiV2CommentRedactionsTicketCommentIdRoute,
  putApiV2CustomObjectsCustomObjectKeyFieldsReorderRoute,
  putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute,
  putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute,
  putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRoute,
  putApiV2CustomRolesCustomRoleIdRoute,
  putApiV2CustomStatusDefaultRoute,
  putApiV2CustomStatusesCustomStatusIdRoute,
  putApiV2DeletedTicketsRestoreManyRoute,
  putApiV2DeletedTicketsTicketIdRestoreRoute,
  putApiV2DeletionSchedulesDeletionScheduleIdRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
  putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRoute,
  putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute,
  putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute,
  putApiV2GroupsGroupIdRoute,
  putApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute,
  putApiV2GroupSlasPoliciesReorderRoute,
  putApiV2MacrosMacroIdRoute,
  putApiV2MacrosUpdateManyRoute,
  putApiV2OauthClientsOauthClientIdGenerateSecretRoute,
  putApiV2OauthClientsOauthClientIdRoute,
  putApiV2OrganizationFieldsOrganizationFieldIdRoute,
  putApiV2OrganizationFieldsReorderRoute,
  putApiV2OrganizationsOrganizationIdRoute,
  putApiV2OrganizationsOrganizationIdTagsRoute,
  putApiV2OrganizationsUpdateManyRoute,
  putApiV2QueuesQueueIdRoute,
  putApiV2RecipientAddressesSupportAddressIdRoute,
  putApiV2RecipientAddressesSupportAddressIdVerifyRoute,
  putApiV2RequestsRequestIdRoute,
  putApiV2ResourceCollectionsResourceCollectionIdRoute,
  putApiV2RoutingAttributesAttributeIdRoute,
  putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute,
  putApiV2SavedSearchesIdRoute,
  putApiV2SharingAgreementsSharingAgreementIdRoute,
  putApiV2SlasPoliciesReorderRoute,
  putApiV2SlasPoliciesSlaPolicyIdRoute,
  putApiV2SuspendedTicketsBulkRecoverRoute,
  putApiV2SuspendedTicketsIdRecoverRoute,
  putApiV2SuspendedTicketsRecoverManyRoute,
  putApiV2TargetsTargetIdRoute,
  putApiV2TaskListsTaskListIdRoute,
  putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute,
  putApiV2TaskListTemplatesTaskListTemplateIdRoute,
  putApiV2TicketFieldsReorderRoute,
  putApiV2TicketFieldsTicketFieldIdRoute,
  putApiV2TicketFormsReorderRoute,
  putApiV2TicketFormsTicketFormIdRoute,
  putApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute,
  putApiV2TicketsMarkManyAsSpamRoute,
  putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRoute,
  putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRoute,
  putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRoute,
  putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRoute,
  putApiV2TicketsTicketIdMarkAsSpamRoute,
  putApiV2TicketsTicketIdRoute,
  putApiV2TicketsTicketIdTagsRoute,
  putApiV2TicketsUpdateManyRoute,
  putApiV2TriggersReorderRoute,
  putApiV2TriggersTriggerIdRoute,
  putApiV2TriggersUpdateManyRoute,
  putApiV2UserFieldsReorderRoute,
  putApiV2UserFieldsUserFieldIdRoute,
  putApiV2UsersMeSettingsRoute,
  putApiV2UsersUpdateManyRoute,
  putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdRoute,
  putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRoute,
  putApiV2UsersUserIdMergeRoute,
  putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRoute,
  putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRoute,
  putApiV2UsersUserIdPasswordRoute,
  putApiV2UsersUserIdRoute,
  putApiV2UsersUserIdSuspensionRoute,
  putApiV2UsersUserIdTagsRoute,
  putApiV2ViewsUpdateManyRoute,
  putApiV2ViewsViewIdRoute,
  putApiV2WorkspacesReorderRoute,
  putApiV2WorkspacesWorkspaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AccountEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnyChannelChannelbackReportErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnyChannelPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AnyChannelValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ApiTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApiTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalClarificationFlowMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuditLogsAuditLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuditLogsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutocompleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AutocompleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AutomationsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AutomationsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdCheckHostMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BrandsBrandIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandsBrandIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandsBrandIdUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdUserMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsCheckHostMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsTwitterMonitoredTwitterHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsTwitterTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsTwitterTicketsCommentIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsVoiceTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsWhatsappTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsWhatsappTemplatesLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChannelsWhatsappTemplatesToggleManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChatFileRedactionsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ChatRedactionsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CommentRedactionsTicketCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CountriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CountriesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyAccessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsLimitsObjectLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsLimitsRecordLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomRolesCustomRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomStatusDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletedTicketsTicketIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedTicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletedTicketsRestoreManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedUsersDeletedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletedUsersDeletedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletedUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DeletionSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeletionSchedulesDeletionScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DynamicContentItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DynamicContentItemsDynamicContentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DynamicContentItemsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EmailNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EmailNotificationsNotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EmailNotificationsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EndUsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2EndUsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupMembershipsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupMembershipsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupMembershipsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupSlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupSlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupSlasPoliciesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupSlasPoliciesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdMembershipsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAvailableAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ImportsTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ImportsTicketsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalIncrementalResourceSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalRoutingAttributeValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalRoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalRoutingInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketMetricEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalTicketsCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncrementalUsersCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ItAssetManagementStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ItAssetManagementStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobStatusesJobStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesLocaleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesDetectBestLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LocalesPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MacrosMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMacroIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosMacroIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2MacrosAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosAttachmentsAttachmentIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2MacrosDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosMostUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MacrosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2MacrosUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OauthClientsOauthClientIdGenerateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthGlobalClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthGlobalClientsGlobalClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthGlobalClientsTokenSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthTokensOauthTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthTokensOauthTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthTokensCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthTokensCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthTokensDeleteManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationMembershipsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationMembershipsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationMergesOrganizationMergeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsOrganizationIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsOrganizationIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsOrganizationIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationsCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProblemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProblemsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PushNotificationDevicesDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QueuesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2QueuesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RecipientAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RecipientAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RecipientAddressesSupportAddressIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RelationshipsDefinitionsTargetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RemoteAuthenticationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsRequestIdCommentsTicketCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsCcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequestsSolvedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ResourceCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ResourceCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ResourceCollectionsResourceCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAgentsUserIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAgentsUserIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAgentsInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAgentsInstanceValuesJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RoutingAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingAttributesAttributeIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingAttributesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingRequirementsFulfilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingTicketsTicketIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingTicketsTicketIdInstanceValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionRatingsSatisfactionRatingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionRatingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionReasonsSatisfactionReasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SavedSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SavedSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SharingAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SharingAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SlasPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SlasPoliciesSlaPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SlasPoliciesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SlasPoliciesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuspendedTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SuspendedTicketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SuspendedTicketsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SuspendedTicketsAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsBulkRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SuspendedTicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SuspendedTicketsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SuspendedTicketsRecoverManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetFailuresTargetFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TaskListTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListTemplatesTaskListTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListTemplatesTaskListTemplateIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListsTaskListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListsTaskListIdTaskItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TaskListsTaskListIdTaskItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketContentPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketContentPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketContentPinsContentPinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFieldsTicketFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsTicketFormIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketMetricsTicketMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsTicketAuditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdAuditsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdCommentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdConversationLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdEmailCcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdGroupSlasPolicyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMacrosMacroIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdMarkAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMetricEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdParentTicketTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdSatisfactionRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdSkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdSlasPolicyMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsTicketIdTaskListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdTaskListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsMarkManyAsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsMessagingConversationsConversationIdTicketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggerCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggerCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggerCategoriesTriggerCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggerCategoriesJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserFieldsUserFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UserFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdBrandAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdBrandAgentsBrandAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdComplianceDeletionStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdEntitlementsFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdIdentitiesUserIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdOrganizationMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2UsersUserIdOrganizationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdOrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdPasswordRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSkipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSuspensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsAssignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsAssignedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsCcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsCcdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsFollowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdTicketsRequestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersCreateOrUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersLogoutManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersMeLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSessionRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersRequestCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsViewIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCompactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsCountManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ViewsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ViewsPreviewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ViewsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ViewsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WorkspacesDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2WorkspacesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
