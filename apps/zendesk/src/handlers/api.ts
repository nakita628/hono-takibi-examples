import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRouteHandler: RouteHandler<
  typeof getApiV2TargetTypeTargetIdRelationshipFieldsFieldIdSourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountEmailSettingsRouteHandler: RouteHandler<
  typeof getApiV2AccountEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AccountEmailSettingsRouteHandler: RouteHandler<
  typeof putApiV2AccountEmailSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountSettingsRouteHandler: RouteHandler<
  typeof getApiV2AccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AccountSettingsRouteHandler: RouteHandler<
  typeof putApiV2AccountSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AccountsRouteHandler: RouteHandler<typeof postApiV2AccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2AccountsAvailableRouteHandler: RouteHandler<
  typeof getApiV2AccountsAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivitiesRouteHandler: RouteHandler<typeof getApiV2ActivitiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivitiesActivityIdRouteHandler: RouteHandler<
  typeof getApiV2ActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ActivitiesCountRouteHandler: RouteHandler<
  typeof getApiV2ActivitiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AnyChannelChannelbackReportErrorRouteHandler: RouteHandler<
  typeof postApiV2AnyChannelChannelbackReportErrorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AnyChannelPushRouteHandler: RouteHandler<
  typeof postApiV2AnyChannelPushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AnyChannelValidateTokenRouteHandler: RouteHandler<
  typeof postApiV2AnyChannelValidateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApiTokensRouteHandler: RouteHandler<typeof getApiV2ApiTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2ApiTokensRouteHandler: RouteHandler<typeof postApiV2ApiTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV2ApiTokensIdRouteHandler: RouteHandler<
  typeof putApiV2ApiTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ApiTokensIdRouteHandler: RouteHandler<
  typeof deleteApiV2ApiTokensIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ApprovalClarificationFlowMessagesRouteHandler: RouteHandler<
  typeof postApiV2ApprovalClarificationFlowMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRouteHandler: RouteHandler<
  typeof getApiV2ApprovalClarificationFlowMessagesApprovalRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalRequestsRouteHandler: RouteHandler<
  typeof getApiV2ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ApprovalRequestsRouteHandler: RouteHandler<
  typeof postApiV2ApprovalRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRouteHandler: RouteHandler<
  typeof getApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRouteHandler: RouteHandler<
  typeof patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdApprovalRequestsIdDecisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRouteHandler: RouteHandler<
  typeof patchApiV2ApprovalWorkflowInstancesWorkflowInstanceIdWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getApiV2AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof putApiV2AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteApiV2AttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AuditLogsRouteHandler: RouteHandler<typeof getApiV2AuditLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2AuditLogsAuditLogIdRouteHandler: RouteHandler<
  typeof getApiV2AuditLogsAuditLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AuditLogsExportRouteHandler: RouteHandler<
  typeof postApiV2AuditLogsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AutocompleteTagsRouteHandler: RouteHandler<
  typeof getApiV2AutocompleteTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AutocompleteTagsRouteHandler: RouteHandler<
  typeof postApiV2AutocompleteTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AutomationsRouteHandler: RouteHandler<
  typeof getApiV2AutomationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2AutomationsRouteHandler: RouteHandler<
  typeof postApiV2AutomationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AutomationsAutomationIdRouteHandler: RouteHandler<
  typeof getApiV2AutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AutomationsAutomationIdRouteHandler: RouteHandler<
  typeof putApiV2AutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AutomationsAutomationIdRouteHandler: RouteHandler<
  typeof deleteApiV2AutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AutomationsActiveRouteHandler: RouteHandler<
  typeof getApiV2AutomationsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2AutomationsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2AutomationsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2AutomationsSearchRouteHandler: RouteHandler<
  typeof getApiV2AutomationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2AutomationsUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2AutomationsUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BookmarksRouteHandler: RouteHandler<typeof getApiV2BookmarksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2BookmarksRouteHandler: RouteHandler<typeof postApiV2BookmarksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2BookmarksBookmarkIdRouteHandler: RouteHandler<
  typeof deleteApiV2BookmarksBookmarkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandAgentsRouteHandler: RouteHandler<
  typeof getApiV2BrandAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2BrandAgentsRouteHandler: RouteHandler<
  typeof postApiV2BrandAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandAgentsBrandAgentIdRouteHandler: RouteHandler<
  typeof getApiV2BrandAgentsBrandAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2BrandAgentsBrandAgentIdRouteHandler: RouteHandler<
  typeof deleteApiV2BrandAgentsBrandAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsRouteHandler: RouteHandler<typeof getApiV2BrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2BrandsRouteHandler: RouteHandler<typeof postApiV2BrandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsBrandIdRouteHandler: RouteHandler<
  typeof getApiV2BrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2BrandsBrandIdRouteHandler: RouteHandler<
  typeof putApiV2BrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2BrandsBrandIdRouteHandler: RouteHandler<
  typeof deleteApiV2BrandsBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsBrandIdAgentsRouteHandler: RouteHandler<
  typeof getApiV2BrandsBrandIdAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsBrandIdCheckHostMappingRouteHandler: RouteHandler<
  typeof getApiV2BrandsBrandIdCheckHostMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2BrandsBrandIdLogoRouteHandler: RouteHandler<
  typeof putApiV2BrandsBrandIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2BrandsBrandIdLogoRouteHandler: RouteHandler<
  typeof deleteApiV2BrandsBrandIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsBrandIdUserMigrationsRouteHandler: RouteHandler<
  typeof getApiV2BrandsBrandIdUserMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2BrandsBrandIdUserMigrationsRouteHandler: RouteHandler<
  typeof postApiV2BrandsBrandIdUserMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsBrandIdUserMigrationsMigrationIdRouteHandler: RouteHandler<
  typeof getApiV2BrandsBrandIdUserMigrationsMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2BrandsCheckHostMappingRouteHandler: RouteHandler<
  typeof getApiV2BrandsCheckHostMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesRouteHandler: RouteHandler<
  typeof getApiV2ChannelsTwitterMonitoredTwitterHandlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRouteHandler: RouteHandler<
  typeof getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ChannelsTwitterTicketsRouteHandler: RouteHandler<
  typeof postApiV2ChannelsTwitterTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ChannelsTwitterTicketsCommentIdStatusesRouteHandler: RouteHandler<
  typeof getApiV2ChannelsTwitterTicketsCommentIdStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRouteHandler: RouteHandler<
  typeof postApiV2ChannelsVoiceAgentsAgentIdTicketsTicketIdDisplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRouteHandler: RouteHandler<
  typeof postApiV2ChannelsVoiceAgentsAgentIdUsersUserIdDisplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ChannelsVoiceTicketsRouteHandler: RouteHandler<
  typeof postApiV2ChannelsVoiceTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ChannelsWhatsappTemplatesRouteHandler: RouteHandler<
  typeof getApiV2ChannelsWhatsappTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRouteHandler: RouteHandler<
  typeof putApiV2ChannelsWhatsappTemplatesTemplateIdToggleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ChannelsWhatsappTemplatesLanguagesRouteHandler: RouteHandler<
  typeof getApiV2ChannelsWhatsappTemplatesLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ChannelsWhatsappTemplatesToggleManyRouteHandler: RouteHandler<
  typeof putApiV2ChannelsWhatsappTemplatesToggleManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ChatFileRedactionsTicketIdRouteHandler: RouteHandler<
  typeof putApiV2ChatFileRedactionsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ChatRedactionsTicketIdRouteHandler: RouteHandler<
  typeof putApiV2ChatRedactionsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CommentRedactionsTicketCommentIdRouteHandler: RouteHandler<
  typeof putApiV2CommentRedactionsTicketCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CountriesJsonRouteHandler: RouteHandler<
  typeof getApiV2CountriesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CountriesIdJsonRouteHandler: RouteHandler<
  typeof getApiV2CountriesIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyAccessRulesRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyAccessRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyAccessRulesRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyAccessRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyAccessRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyAccessRulesDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyFieldsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyFieldsRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyFieldsCustomObjectFieldKeyOrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomObjectsCustomObjectKeyFieldsReorderRouteHandler: RouteHandler<
  typeof putApiV2CustomObjectsCustomObjectKeyFieldsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyJobsRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyLimitsFieldLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyPermissionPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyRecordsRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyRecordsRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyRecordsRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyRecordsCustomObjectRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRouteHandler: RouteHandler<
  typeof putApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsRecordIdAttachmentsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsCountRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsSearchRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyRecordsSearchRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyRecordsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyRecordsShowByUniqueIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRouteHandler: RouteHandler<
  typeof putApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRouteHandler: RouteHandler<
  typeof patchApiV2CustomObjectsCustomObjectKeyRecordsUpdateByUniqueIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyTriggersRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomObjectsCustomObjectKeyTriggersRouteHandler: RouteHandler<
  typeof postApiV2CustomObjectsCustomObjectKeyTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRouteHandler: RouteHandler<
  typeof putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyTriggersActiveRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyTriggersActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsCustomObjectKeyTriggersSearchRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsCustomObjectKeyTriggersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsLimitsObjectLimitRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsLimitsObjectLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomObjectsLimitsRecordLimitRouteHandler: RouteHandler<
  typeof getApiV2CustomObjectsLimitsRecordLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomRolesRouteHandler: RouteHandler<
  typeof getApiV2CustomRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomRolesRouteHandler: RouteHandler<
  typeof postApiV2CustomRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomRolesCustomRoleIdRouteHandler: RouteHandler<
  typeof getApiV2CustomRolesCustomRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomRolesCustomRoleIdRouteHandler: RouteHandler<
  typeof putApiV2CustomRolesCustomRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomRolesCustomRoleIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomRolesCustomRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomStatusDefaultRouteHandler: RouteHandler<
  typeof putApiV2CustomStatusDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomStatusesRouteHandler: RouteHandler<
  typeof getApiV2CustomStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomStatusesRouteHandler: RouteHandler<
  typeof postApiV2CustomStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomStatusesCustomStatusIdRouteHandler: RouteHandler<
  typeof getApiV2CustomStatusesCustomStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomStatusesCustomStatusIdRouteHandler: RouteHandler<
  typeof putApiV2CustomStatusesCustomStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomStatusesCustomStatusIdRouteHandler: RouteHandler<
  typeof deleteApiV2CustomStatusesCustomStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRouteHandler: RouteHandler<
  typeof postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomStatusesShowManyRouteHandler: RouteHandler<
  typeof getApiV2CustomStatusesShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletedTicketsRouteHandler: RouteHandler<
  typeof getApiV2DeletedTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DeletedTicketsTicketIdRouteHandler: RouteHandler<
  typeof deleteApiV2DeletedTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DeletedTicketsTicketIdRestoreRouteHandler: RouteHandler<
  typeof putApiV2DeletedTicketsTicketIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DeletedTicketsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2DeletedTicketsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DeletedTicketsRestoreManyRouteHandler: RouteHandler<
  typeof putApiV2DeletedTicketsRestoreManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletedUsersRouteHandler: RouteHandler<
  typeof getApiV2DeletedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletedUsersDeletedUserIdRouteHandler: RouteHandler<
  typeof getApiV2DeletedUsersDeletedUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DeletedUsersDeletedUserIdRouteHandler: RouteHandler<
  typeof deleteApiV2DeletedUsersDeletedUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletedUsersCountRouteHandler: RouteHandler<
  typeof getApiV2DeletedUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletionSchedulesRouteHandler: RouteHandler<
  typeof getApiV2DeletionSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DeletionSchedulesRouteHandler: RouteHandler<
  typeof postApiV2DeletionSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DeletionSchedulesDeletionScheduleIdRouteHandler: RouteHandler<
  typeof getApiV2DeletionSchedulesDeletionScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DeletionSchedulesDeletionScheduleIdRouteHandler: RouteHandler<
  typeof putApiV2DeletionSchedulesDeletionScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DeletionSchedulesDeletionScheduleIdRouteHandler: RouteHandler<
  typeof deleteApiV2DeletionSchedulesDeletionScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DynamicContentItemsRouteHandler: RouteHandler<
  typeof getApiV2DynamicContentItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DynamicContentItemsRouteHandler: RouteHandler<
  typeof postApiV2DynamicContentItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DynamicContentItemsDynamicContentItemIdRouteHandler: RouteHandler<
  typeof getApiV2DynamicContentItemsDynamicContentItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DynamicContentItemsDynamicContentItemIdRouteHandler: RouteHandler<
  typeof putApiV2DynamicContentItemsDynamicContentItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DynamicContentItemsDynamicContentItemIdRouteHandler: RouteHandler<
  typeof deleteApiV2DynamicContentItemsDynamicContentItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DynamicContentItemsDynamicContentItemIdVariantsRouteHandler: RouteHandler<
  typeof getApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DynamicContentItemsDynamicContentItemIdVariantsRouteHandler: RouteHandler<
  typeof postApiV2DynamicContentItemsDynamicContentItemIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRouteHandler: RouteHandler<
  typeof getApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRouteHandler: RouteHandler<
  typeof putApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRouteHandler: RouteHandler<
  typeof deleteApiV2DynamicContentItemsDynamicContentItemIdVariantsDynamicContentVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2DynamicContentItemsDynamicContentItemIdVariantsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2DynamicContentItemsDynamicContentItemIdVariantsUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2DynamicContentItemsShowManyRouteHandler: RouteHandler<
  typeof getApiV2DynamicContentItemsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EmailNotificationsRouteHandler: RouteHandler<
  typeof getApiV2EmailNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EmailNotificationsNotificationIdRouteHandler: RouteHandler<
  typeof getApiV2EmailNotificationsNotificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EmailNotificationsShowManyRouteHandler: RouteHandler<
  typeof getApiV2EmailNotificationsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EndUsersUserIdIdentitiesRouteHandler: RouteHandler<
  typeof getApiV2EndUsersUserIdIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2EndUsersUserIdIdentitiesRouteHandler: RouteHandler<
  typeof postApiV2EndUsersUserIdIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EndUsersUserIdIdentitiesUserIdentityIdRouteHandler: RouteHandler<
  typeof getApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRouteHandler: RouteHandler<
  typeof deleteApiV2EndUsersUserIdIdentitiesUserIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRouteHandler: RouteHandler<
  typeof putApiV2EndUsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRouteHandler: RouteHandler<
  typeof putApiV2EndUsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupMembershipsRouteHandler: RouteHandler<
  typeof getApiV2GroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GroupMembershipsRouteHandler: RouteHandler<
  typeof postApiV2GroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof getApiV2GroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2GroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof deleteApiV2GroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupMembershipsAssignableRouteHandler: RouteHandler<
  typeof getApiV2GroupMembershipsAssignableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GroupMembershipsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2GroupMembershipsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2GroupMembershipsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2GroupMembershipsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupSlasPoliciesRouteHandler: RouteHandler<
  typeof getApiV2GroupSlasPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GroupSlasPoliciesRouteHandler: RouteHandler<
  typeof postApiV2GroupSlasPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupSlasPoliciesGroupSlaPolicyIdRouteHandler: RouteHandler<
  typeof getApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2GroupSlasPoliciesGroupSlaPolicyIdRouteHandler: RouteHandler<
  typeof putApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRouteHandler: RouteHandler<
  typeof deleteApiV2GroupSlasPoliciesGroupSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupSlasPoliciesDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2GroupSlasPoliciesDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2GroupSlasPoliciesReorderRouteHandler: RouteHandler<
  typeof putApiV2GroupSlasPoliciesReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsRouteHandler: RouteHandler<typeof getApiV2GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2GroupsRouteHandler: RouteHandler<typeof postApiV2GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof getApiV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof putApiV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2GroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteApiV2GroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsGroupIdMembershipsRouteHandler: RouteHandler<
  typeof getApiV2GroupsGroupIdMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsGroupIdMembershipsAssignableRouteHandler: RouteHandler<
  typeof getApiV2GroupsGroupIdMembershipsAssignableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsGroupIdUsersRouteHandler: RouteHandler<
  typeof getApiV2GroupsGroupIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsGroupIdUsersCountRouteHandler: RouteHandler<
  typeof getApiV2GroupsGroupIdUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsAssignableRouteHandler: RouteHandler<
  typeof getApiV2GroupsAssignableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV2GroupsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsAvailableAgentsRouteHandler: RouteHandler<
  typeof getApiV2GroupsAvailableAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsCountRouteHandler: RouteHandler<
  typeof getApiV2GroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GroupsDefaultRouteHandler: RouteHandler<
  typeof getApiV2GroupsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ImportsTicketsRouteHandler: RouteHandler<
  typeof postApiV2ImportsTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ImportsTicketsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2ImportsTicketsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalIncrementalResourceSampleRouteHandler: RouteHandler<
  typeof getApiV2IncrementalIncrementalResourceSampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRouteHandler: RouteHandler<
  typeof getApiV2IncrementalCustomObjectsCustomObjectKeyCursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalOrganizationsRouteHandler: RouteHandler<
  typeof getApiV2IncrementalOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalRoutingAttributeValuesRouteHandler: RouteHandler<
  typeof getApiV2IncrementalRoutingAttributeValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalRoutingAttributesRouteHandler: RouteHandler<
  typeof getApiV2IncrementalRoutingAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalRoutingInstanceValuesRouteHandler: RouteHandler<
  typeof getApiV2IncrementalRoutingInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalTicketEventsRouteHandler: RouteHandler<
  typeof getApiV2IncrementalTicketEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalTicketMetricEventsRouteHandler: RouteHandler<
  typeof getApiV2IncrementalTicketMetricEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalTicketsRouteHandler: RouteHandler<
  typeof getApiV2IncrementalTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalTicketsCursorRouteHandler: RouteHandler<
  typeof getApiV2IncrementalTicketsCursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalUsersRouteHandler: RouteHandler<
  typeof getApiV2IncrementalUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2IncrementalUsersCursorRouteHandler: RouteHandler<
  typeof getApiV2IncrementalUsersCursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetTypesRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementAssetTypesRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementAssetTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetTypesAssetTypeIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetTypesAssetTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ItAssetManagementAssetTypesAssetTypeIdRouteHandler: RouteHandler<
  typeof patchApiV2ItAssetManagementAssetTypesAssetTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRouteHandler: RouteHandler<
  typeof deleteApiV2ItAssetManagementAssetTypesAssetTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetTypesAssetTypeIdFieldsAssetTypeFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetsRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementAssetsRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetsAssetIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ItAssetManagementAssetsAssetIdRouteHandler: RouteHandler<
  typeof patchApiV2ItAssetManagementAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ItAssetManagementAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteApiV2ItAssetManagementAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementAssetsJobsRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementAssetsJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementAssetsSearchRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementAssetsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementAssetsSearchRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementAssetsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementFieldsRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementFieldsRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementFieldsIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ItAssetManagementFieldsIdRouteHandler: RouteHandler<
  typeof patchApiV2ItAssetManagementFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ItAssetManagementFieldsIdRouteHandler: RouteHandler<
  typeof deleteApiV2ItAssetManagementFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementLocationsRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementLocationsRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementLocationsLocationIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ItAssetManagementLocationsLocationIdRouteHandler: RouteHandler<
  typeof patchApiV2ItAssetManagementLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ItAssetManagementLocationsLocationIdRouteHandler: RouteHandler<
  typeof deleteApiV2ItAssetManagementLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementStatusesRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ItAssetManagementStatusesRouteHandler: RouteHandler<
  typeof postApiV2ItAssetManagementStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ItAssetManagementStatusesStatusIdRouteHandler: RouteHandler<
  typeof getApiV2ItAssetManagementStatusesStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2ItAssetManagementStatusesStatusIdRouteHandler: RouteHandler<
  typeof patchApiV2ItAssetManagementStatusesStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ItAssetManagementStatusesStatusIdRouteHandler: RouteHandler<
  typeof deleteApiV2ItAssetManagementStatusesStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobStatusesRouteHandler: RouteHandler<
  typeof getApiV2JobStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobStatusesJobStatusIdRouteHandler: RouteHandler<
  typeof getApiV2JobStatusesJobStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2JobStatusesShowManyRouteHandler: RouteHandler<
  typeof getApiV2JobStatusesShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesRouteHandler: RouteHandler<typeof getApiV2LocalesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesLocaleIdRouteHandler: RouteHandler<
  typeof getApiV2LocalesLocaleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesAgentRouteHandler: RouteHandler<
  typeof getApiV2LocalesAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesCurrentRouteHandler: RouteHandler<
  typeof getApiV2LocalesCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesDetectBestLocaleRouteHandler: RouteHandler<
  typeof getApiV2LocalesDetectBestLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2LocalesPublicRouteHandler: RouteHandler<
  typeof getApiV2LocalesPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosRouteHandler: RouteHandler<typeof getApiV2MacrosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MacrosRouteHandler: RouteHandler<typeof postApiV2MacrosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosMacroIdRouteHandler: RouteHandler<
  typeof getApiV2MacrosMacroIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2MacrosMacroIdRouteHandler: RouteHandler<
  typeof putApiV2MacrosMacroIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2MacrosMacroIdRouteHandler: RouteHandler<
  typeof deleteApiV2MacrosMacroIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosMacroIdApplyRouteHandler: RouteHandler<
  typeof getApiV2MacrosMacroIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosMacroIdAttachmentsRouteHandler: RouteHandler<
  typeof getApiV2MacrosMacroIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MacrosMacroIdAttachmentsRouteHandler: RouteHandler<
  typeof postApiV2MacrosMacroIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosActionsRouteHandler: RouteHandler<
  typeof getApiV2MacrosActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosActiveRouteHandler: RouteHandler<
  typeof getApiV2MacrosActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2MacrosAttachmentsRouteHandler: RouteHandler<
  typeof postApiV2MacrosAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getApiV2MacrosAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosAttachmentsAttachmentIdContentRouteHandler: RouteHandler<
  typeof getApiV2MacrosAttachmentsAttachmentIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosCategoriesRouteHandler: RouteHandler<
  typeof getApiV2MacrosCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2MacrosDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2MacrosDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2MacrosDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosGroupsRouteHandler: RouteHandler<
  typeof getApiV2MacrosGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosMostUsedRouteHandler: RouteHandler<
  typeof getApiV2MacrosMostUsedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosNewRouteHandler: RouteHandler<typeof getApiV2MacrosNewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2MacrosSearchRouteHandler: RouteHandler<
  typeof getApiV2MacrosSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2MacrosUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2MacrosUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthClientsRouteHandler: RouteHandler<
  typeof getApiV2OauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OauthClientsRouteHandler: RouteHandler<
  typeof postApiV2OauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthClientsOauthClientIdRouteHandler: RouteHandler<
  typeof getApiV2OauthClientsOauthClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OauthClientsOauthClientIdRouteHandler: RouteHandler<
  typeof putApiV2OauthClientsOauthClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OauthClientsOauthClientIdRouteHandler: RouteHandler<
  typeof deleteApiV2OauthClientsOauthClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OauthClientsOauthClientIdGenerateSecretRouteHandler: RouteHandler<
  typeof putApiV2OauthClientsOauthClientIdGenerateSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthGlobalClientsRouteHandler: RouteHandler<
  typeof getApiV2OauthGlobalClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthGlobalClientsGlobalClientIdRouteHandler: RouteHandler<
  typeof getApiV2OauthGlobalClientsGlobalClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthGlobalClientsTokenSummaryRouteHandler: RouteHandler<
  typeof getApiV2OauthGlobalClientsTokenSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthTokensRouteHandler: RouteHandler<
  typeof getApiV2OauthTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthTokensOauthTokenIdRouteHandler: RouteHandler<
  typeof getApiV2OauthTokensOauthTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OauthTokensOauthTokenIdRouteHandler: RouteHandler<
  typeof deleteApiV2OauthTokensOauthTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OauthTokensCurrentRouteHandler: RouteHandler<
  typeof getApiV2OauthTokensCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OauthTokensCurrentRouteHandler: RouteHandler<
  typeof deleteApiV2OauthTokensCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OauthTokensDeleteManyRouteHandler: RouteHandler<
  typeof postApiV2OauthTokensDeleteManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationFieldsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationFieldsRouteHandler: RouteHandler<
  typeof postApiV2OrganizationFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationFieldsOrganizationFieldIdRouteHandler: RouteHandler<
  typeof getApiV2OrganizationFieldsOrganizationFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OrganizationFieldsOrganizationFieldIdRouteHandler: RouteHandler<
  typeof putApiV2OrganizationFieldsOrganizationFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationFieldsOrganizationFieldIdRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationFieldsOrganizationFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OrganizationFieldsReorderRouteHandler: RouteHandler<
  typeof putApiV2OrganizationFieldsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationMembershipsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationMembershipsRouteHandler: RouteHandler<
  typeof postApiV2OrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationMembershipsOrganizationMembershipIdRouteHandler: RouteHandler<
  typeof getApiV2OrganizationMembershipsOrganizationMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationMembershipsOrganizationMembershipIdRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationMembershipsOrganizationMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationMembershipsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2OrganizationMembershipsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationMembershipsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationMembershipsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationMergesOrganizationMergeIdRouteHandler: RouteHandler<
  typeof getApiV2OrganizationMergesOrganizationMergeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV2OrganizationSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRouteHandler: RouteHandler<
  typeof getApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationSubscriptionsOrganizationSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationsRouteHandler: RouteHandler<
  typeof postApiV2OrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof putApiV2OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationsOrganizationIdMergeRouteHandler: RouteHandler<
  typeof postApiV2OrganizationsOrganizationIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdMergesRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdMergesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdOrganizationMembershipsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdOrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdRelatedRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdRequestsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdTagsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationsOrganizationIdTagsRouteHandler: RouteHandler<
  typeof postApiV2OrganizationsOrganizationIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OrganizationsOrganizationIdTagsRouteHandler: RouteHandler<
  typeof putApiV2OrganizationsOrganizationIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationsOrganizationIdTagsRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationsOrganizationIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdTicketsRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdTicketsCountRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdTicketsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdUsersRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsOrganizationIdUsersCountRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsOrganizationIdUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsCountRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2OrganizationsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2OrganizationsCreateOrUpdateRouteHandler: RouteHandler<
  typeof postApiV2OrganizationsCreateOrUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2OrganizationsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2OrganizationsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsSearchRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2OrganizationsShowManyRouteHandler: RouteHandler<
  typeof getApiV2OrganizationsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2OrganizationsUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2OrganizationsUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ProblemsRouteHandler: RouteHandler<typeof getApiV2ProblemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2ProblemsAutocompleteRouteHandler: RouteHandler<
  typeof postApiV2ProblemsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2PushNotificationDevicesDestroyManyRouteHandler: RouteHandler<
  typeof postApiV2PushNotificationDevicesDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2QueuesRouteHandler: RouteHandler<typeof getApiV2QueuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2QueuesRouteHandler: RouteHandler<typeof postApiV2QueuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2QueuesQueueIdRouteHandler: RouteHandler<
  typeof getApiV2QueuesQueueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2QueuesQueueIdRouteHandler: RouteHandler<
  typeof putApiV2QueuesQueueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2QueuesQueueIdRouteHandler: RouteHandler<
  typeof deleteApiV2QueuesQueueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2QueuesDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2QueuesDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2QueuesOrderRouteHandler: RouteHandler<
  typeof patchApiV2QueuesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RecipientAddressesRouteHandler: RouteHandler<
  typeof getApiV2RecipientAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RecipientAddressesRouteHandler: RouteHandler<
  typeof postApiV2RecipientAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RecipientAddressesSupportAddressIdRouteHandler: RouteHandler<
  typeof getApiV2RecipientAddressesSupportAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RecipientAddressesSupportAddressIdRouteHandler: RouteHandler<
  typeof putApiV2RecipientAddressesSupportAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2RecipientAddressesSupportAddressIdRouteHandler: RouteHandler<
  typeof deleteApiV2RecipientAddressesSupportAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RecipientAddressesSupportAddressIdVerifyRouteHandler: RouteHandler<
  typeof putApiV2RecipientAddressesSupportAddressIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RelationshipsDefinitionsTargetTypeRouteHandler: RouteHandler<
  typeof getApiV2RelationshipsDefinitionsTargetTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RemoteAuthenticationsRouteHandler: RouteHandler<
  typeof getApiV2RemoteAuthenticationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsRouteHandler: RouteHandler<typeof getApiV2RequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2RequestsRouteHandler: RouteHandler<typeof postApiV2RequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsRequestIdRouteHandler: RouteHandler<
  typeof getApiV2RequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RequestsRequestIdRouteHandler: RouteHandler<
  typeof putApiV2RequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsRequestIdCommentsRouteHandler: RouteHandler<
  typeof getApiV2RequestsRequestIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsRequestIdCommentsTicketCommentIdRouteHandler: RouteHandler<
  typeof getApiV2RequestsRequestIdCommentsTicketCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsCcdRouteHandler: RouteHandler<
  typeof getApiV2RequestsCcdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsOpenRouteHandler: RouteHandler<
  typeof getApiV2RequestsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsSearchRouteHandler: RouteHandler<
  typeof getApiV2RequestsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RequestsSolvedRouteHandler: RouteHandler<
  typeof getApiV2RequestsSolvedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ResourceCollectionsRouteHandler: RouteHandler<
  typeof getApiV2ResourceCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ResourceCollectionsRouteHandler: RouteHandler<
  typeof postApiV2ResourceCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ResourceCollectionsResourceCollectionIdRouteHandler: RouteHandler<
  typeof getApiV2ResourceCollectionsResourceCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ResourceCollectionsResourceCollectionIdRouteHandler: RouteHandler<
  typeof putApiV2ResourceCollectionsResourceCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ResourceCollectionsResourceCollectionIdRouteHandler: RouteHandler<
  typeof deleteApiV2ResourceCollectionsResourceCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAgentsUserIdInstanceValuesRouteHandler: RouteHandler<
  typeof getApiV2RoutingAgentsUserIdInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RoutingAgentsUserIdInstanceValuesRouteHandler: RouteHandler<
  typeof postApiV2RoutingAgentsUserIdInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAgentsInstanceValuesRouteHandler: RouteHandler<
  typeof getApiV2RoutingAgentsInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RoutingAgentsInstanceValuesJobsRouteHandler: RouteHandler<
  typeof postApiV2RoutingAgentsInstanceValuesJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAttributesRouteHandler: RouteHandler<
  typeof getApiV2RoutingAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RoutingAttributesRouteHandler: RouteHandler<
  typeof postApiV2RoutingAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAttributesAttributeIdRouteHandler: RouteHandler<
  typeof getApiV2RoutingAttributesAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RoutingAttributesAttributeIdRouteHandler: RouteHandler<
  typeof putApiV2RoutingAttributesAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2RoutingAttributesAttributeIdRouteHandler: RouteHandler<
  typeof deleteApiV2RoutingAttributesAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAttributesAttributeIdValuesRouteHandler: RouteHandler<
  typeof getApiV2RoutingAttributesAttributeIdValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RoutingAttributesAttributeIdValuesRouteHandler: RouteHandler<
  typeof postApiV2RoutingAttributesAttributeIdValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRouteHandler: RouteHandler<
  typeof getApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRouteHandler: RouteHandler<
  typeof putApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRouteHandler: RouteHandler<
  typeof patchApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRouteHandler: RouteHandler<
  typeof deleteApiV2RoutingAttributesAttributeIdValuesAttributeValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingAttributesDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2RoutingAttributesDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingRequirementsFulfilledRouteHandler: RouteHandler<
  typeof getApiV2RoutingRequirementsFulfilledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2RoutingTicketsTicketIdInstanceValuesRouteHandler: RouteHandler<
  typeof getApiV2RoutingTicketsTicketIdInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2RoutingTicketsTicketIdInstanceValuesRouteHandler: RouteHandler<
  typeof postApiV2RoutingTicketsTicketIdInstanceValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SatisfactionRatingsRouteHandler: RouteHandler<
  typeof getApiV2SatisfactionRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SatisfactionRatingsSatisfactionRatingIdRouteHandler: RouteHandler<
  typeof getApiV2SatisfactionRatingsSatisfactionRatingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SatisfactionRatingsCountRouteHandler: RouteHandler<
  typeof getApiV2SatisfactionRatingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SatisfactionReasonsRouteHandler: RouteHandler<
  typeof getApiV2SatisfactionReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SatisfactionReasonsSatisfactionReasonIdRouteHandler: RouteHandler<
  typeof getApiV2SatisfactionReasonsSatisfactionReasonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SavedSearchesRouteHandler: RouteHandler<
  typeof getApiV2SavedSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SavedSearchesRouteHandler: RouteHandler<
  typeof postApiV2SavedSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SavedSearchesIdRouteHandler: RouteHandler<
  typeof putApiV2SavedSearchesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SavedSearchesIdRouteHandler: RouteHandler<
  typeof deleteApiV2SavedSearchesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SearchRouteHandler: RouteHandler<typeof getApiV2SearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SearchCountRouteHandler: RouteHandler<
  typeof getApiV2SearchCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SearchExportRouteHandler: RouteHandler<
  typeof getApiV2SearchExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SecuritySettingsRouteHandler: RouteHandler<
  typeof getApiV2SecuritySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SessionsRouteHandler: RouteHandler<typeof getApiV2SessionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2SharingAgreementsRouteHandler: RouteHandler<
  typeof getApiV2SharingAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SharingAgreementsRouteHandler: RouteHandler<
  typeof postApiV2SharingAgreementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SharingAgreementsSharingAgreementIdRouteHandler: RouteHandler<
  typeof getApiV2SharingAgreementsSharingAgreementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SharingAgreementsSharingAgreementIdRouteHandler: RouteHandler<
  typeof putApiV2SharingAgreementsSharingAgreementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SharingAgreementsSharingAgreementIdRouteHandler: RouteHandler<
  typeof deleteApiV2SharingAgreementsSharingAgreementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SkipsRouteHandler: RouteHandler<typeof getApiV2SkipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SkipsRouteHandler: RouteHandler<typeof postApiV2SkipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SlasPoliciesRouteHandler: RouteHandler<
  typeof getApiV2SlasPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SlasPoliciesRouteHandler: RouteHandler<
  typeof postApiV2SlasPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SlasPoliciesSlaPolicyIdRouteHandler: RouteHandler<
  typeof getApiV2SlasPoliciesSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SlasPoliciesSlaPolicyIdRouteHandler: RouteHandler<
  typeof putApiV2SlasPoliciesSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SlasPoliciesSlaPolicyIdRouteHandler: RouteHandler<
  typeof deleteApiV2SlasPoliciesSlaPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SlasPoliciesDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2SlasPoliciesDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SlasPoliciesReorderRouteHandler: RouteHandler<
  typeof putApiV2SlasPoliciesReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SuspendedTicketsRouteHandler: RouteHandler<
  typeof getApiV2SuspendedTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2SuspendedTicketsIdRouteHandler: RouteHandler<
  typeof getApiV2SuspendedTicketsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SuspendedTicketsIdRouteHandler: RouteHandler<
  typeof deleteApiV2SuspendedTicketsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SuspendedTicketsIdRecoverRouteHandler: RouteHandler<
  typeof putApiV2SuspendedTicketsIdRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SuspendedTicketsAttachmentsRouteHandler: RouteHandler<
  typeof postApiV2SuspendedTicketsAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SuspendedTicketsBulkRecoverRouteHandler: RouteHandler<
  typeof putApiV2SuspendedTicketsBulkRecoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2SuspendedTicketsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2SuspendedTicketsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2SuspendedTicketsExportRouteHandler: RouteHandler<
  typeof postApiV2SuspendedTicketsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2SuspendedTicketsRecoverManyRouteHandler: RouteHandler<
  typeof putApiV2SuspendedTicketsRecoverManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TagsRouteHandler: RouteHandler<typeof getApiV2TagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TagsCountRouteHandler: RouteHandler<typeof getApiV2TagsCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2TargetFailuresRouteHandler: RouteHandler<
  typeof getApiV2TargetFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TargetFailuresTargetFailureIdRouteHandler: RouteHandler<
  typeof getApiV2TargetFailuresTargetFailureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TargetsRouteHandler: RouteHandler<typeof getApiV2TargetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TargetsRouteHandler: RouteHandler<typeof postApiV2TargetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2TargetsTargetIdRouteHandler: RouteHandler<
  typeof getApiV2TargetsTargetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TargetsTargetIdRouteHandler: RouteHandler<
  typeof putApiV2TargetsTargetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TargetsTargetIdRouteHandler: RouteHandler<
  typeof deleteApiV2TargetsTargetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListTemplatesRouteHandler: RouteHandler<
  typeof getApiV2TaskListTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TaskListTemplatesRouteHandler: RouteHandler<
  typeof postApiV2TaskListTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListTemplatesTaskListTemplateIdRouteHandler: RouteHandler<
  typeof getApiV2TaskListTemplatesTaskListTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TaskListTemplatesTaskListTemplateIdRouteHandler: RouteHandler<
  typeof putApiV2TaskListTemplatesTaskListTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TaskListTemplatesTaskListTemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV2TaskListTemplatesTaskListTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListTemplatesTaskListTemplateIdTasksRouteHandler: RouteHandler<
  typeof getApiV2TaskListTemplatesTaskListTemplateIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListsTaskListIdRouteHandler: RouteHandler<
  typeof getApiV2TaskListsTaskListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TaskListsTaskListIdRouteHandler: RouteHandler<
  typeof putApiV2TaskListsTaskListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TaskListsTaskListIdRouteHandler: RouteHandler<
  typeof deleteApiV2TaskListsTaskListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListsTaskListIdTaskItemsRouteHandler: RouteHandler<
  typeof getApiV2TaskListsTaskListIdTaskItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TaskListsTaskListIdTaskItemsRouteHandler: RouteHandler<
  typeof postApiV2TaskListsTaskListIdTaskItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRouteHandler: RouteHandler<
  typeof getApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRouteHandler: RouteHandler<
  typeof putApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRouteHandler: RouteHandler<
  typeof deleteApiV2TaskListsTaskListIdTaskItemsTaskItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketAuditsRouteHandler: RouteHandler<
  typeof getApiV2TicketAuditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketContentPinsRouteHandler: RouteHandler<
  typeof getApiV2TicketContentPinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketContentPinsRouteHandler: RouteHandler<
  typeof postApiV2TicketContentPinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketContentPinsContentPinIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketContentPinsContentPinIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketFieldsRouteHandler: RouteHandler<
  typeof postApiV2TicketFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsTicketFieldIdRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsTicketFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFieldsTicketFieldIdRouteHandler: RouteHandler<
  typeof putApiV2TicketFieldsTicketFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketFieldsTicketFieldIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketFieldsTicketFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsTicketFieldIdOptionsRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsTicketFieldIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketFieldsTicketFieldIdOptionsRouteHandler: RouteHandler<
  typeof postApiV2TicketFieldsTicketFieldIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsCountRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFieldsReorderRouteHandler: RouteHandler<
  typeof putApiV2TicketFieldsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFieldsShowManyRouteHandler: RouteHandler<
  typeof getApiV2TicketFieldsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormStatusesRouteHandler: RouteHandler<
  typeof getApiV2TicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormStatusesShowManyRouteHandler: RouteHandler<
  typeof getApiV2TicketFormStatusesShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormsRouteHandler: RouteHandler<
  typeof getApiV2TicketFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketFormsRouteHandler: RouteHandler<
  typeof postApiV2TicketFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormsTicketFormIdRouteHandler: RouteHandler<
  typeof getApiV2TicketFormsTicketFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFormsTicketFormIdRouteHandler: RouteHandler<
  typeof putApiV2TicketFormsTicketFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketFormsTicketFormIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketFormsTicketFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketFormsTicketFormIdCloneRouteHandler: RouteHandler<
  typeof postApiV2TicketFormsTicketFormIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormsTicketFormIdTicketFormStatusesRouteHandler: RouteHandler<
  typeof getApiV2TicketFormsTicketFormIdTicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketFormsTicketFormIdTicketFormStatusesRouteHandler: RouteHandler<
  typeof postApiV2TicketFormsTicketFormIdTicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFormsTicketFormIdTicketFormStatusesRouteHandler: RouteHandler<
  typeof putApiV2TicketFormsTicketFormIdTicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRouteHandler: RouteHandler<
  typeof deleteApiV2TicketFormsTicketFormIdTicketFormStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRouteHandler: RouteHandler<
  typeof putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketFormsReorderRouteHandler: RouteHandler<
  typeof putApiV2TicketFormsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketFormsShowManyRouteHandler: RouteHandler<
  typeof getApiV2TicketFormsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketMetricsRouteHandler: RouteHandler<
  typeof getApiV2TicketMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketMetricsTicketMetricIdRouteHandler: RouteHandler<
  typeof getApiV2TicketMetricsTicketMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsRouteHandler: RouteHandler<typeof getApiV2TicketsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsRouteHandler: RouteHandler<typeof postApiV2TicketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketsTicketIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdAuditsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdAuditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdAuditsTicketAuditIdRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdAuditsTicketAuditIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdAuditsTicketAuditIdMakePrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdAuditsCountRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdAuditsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdCollaboratorsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdCommentsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdCommentsCommentIdAttachmentsAttachmentIdRedactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdCommentsTicketCommentIdMakePrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdCommentsTicketCommentIdRedactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdCommentsCountRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdCommentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdConversationLogRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdConversationLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdEmailCcsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdEmailCcsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdFollowersRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdGroupSlasPolicyMetricsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdGroupSlasPolicyMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdIncidentsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdIncidentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdMacrosMacroIdApplyRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdMacrosMacroIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdMarkAsSpamRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdMarkAsSpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdMergeRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdMetricEventsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdMetricEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdMetricsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdParentTicketTasksRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdParentTicketTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdRelatedRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdSatisfactionRatingRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdSatisfactionRatingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdSkipsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdSkipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdSlasPolicyMetricsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdSlasPolicyMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdTagsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdTagsRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsTicketIdTagsRouteHandler: RouteHandler<
  typeof putApiV2TicketsTicketIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketsTicketIdTagsRouteHandler: RouteHandler<
  typeof deleteApiV2TicketsTicketIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdTaskItemsTaskItemIdSubticketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRouteHandler: RouteHandler<
  typeof deleteApiV2TicketsTicketIdTaskItemsTaskItemIdTaskLinksTaskObjectLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsTicketIdTaskListsRouteHandler: RouteHandler<
  typeof getApiV2TicketsTicketIdTaskListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsTicketIdTaskListsRouteHandler: RouteHandler<
  typeof postApiV2TicketsTicketIdTaskListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsAutocompleteRouteHandler: RouteHandler<
  typeof getApiV2TicketsAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsCountRouteHandler: RouteHandler<
  typeof getApiV2TicketsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TicketsCreateManyRouteHandler: RouteHandler<
  typeof postApiV2TicketsCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TicketsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2TicketsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsMarkManyAsSpamRouteHandler: RouteHandler<
  typeof putApiV2TicketsMarkManyAsSpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsMessagingConversationsConversationIdTicketRouteHandler: RouteHandler<
  typeof getApiV2TicketsMessagingConversationsConversationIdTicketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsRecentRouteHandler: RouteHandler<
  typeof getApiV2TicketsRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TicketsShowManyRouteHandler: RouteHandler<
  typeof getApiV2TicketsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TicketsUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2TicketsUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggerCategoriesRouteHandler: RouteHandler<
  typeof getApiV2TriggerCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TriggerCategoriesRouteHandler: RouteHandler<
  typeof postApiV2TriggerCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggerCategoriesTriggerCategoryIdRouteHandler: RouteHandler<
  typeof getApiV2TriggerCategoriesTriggerCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV2TriggerCategoriesTriggerCategoryIdRouteHandler: RouteHandler<
  typeof patchApiV2TriggerCategoriesTriggerCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TriggerCategoriesTriggerCategoryIdRouteHandler: RouteHandler<
  typeof deleteApiV2TriggerCategoriesTriggerCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TriggerCategoriesJobsRouteHandler: RouteHandler<
  typeof postApiV2TriggerCategoriesJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersRouteHandler: RouteHandler<typeof getApiV2TriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2TriggersRouteHandler: RouteHandler<typeof postApiV2TriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersTriggerIdRouteHandler: RouteHandler<
  typeof getApiV2TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TriggersTriggerIdRouteHandler: RouteHandler<
  typeof putApiV2TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TriggersTriggerIdRouteHandler: RouteHandler<
  typeof deleteApiV2TriggersTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersTriggerIdRevisionsRouteHandler: RouteHandler<
  typeof getApiV2TriggersTriggerIdRevisionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRouteHandler: RouteHandler<
  typeof getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersActiveRouteHandler: RouteHandler<
  typeof getApiV2TriggersActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2TriggersDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2TriggersDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2TriggersDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersLimitsRouteHandler: RouteHandler<
  typeof getApiV2TriggersLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TriggersReorderRouteHandler: RouteHandler<
  typeof putApiV2TriggersReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2TriggersSearchRouteHandler: RouteHandler<
  typeof getApiV2TriggersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2TriggersUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2TriggersUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2TriggersValidateRouteHandler: RouteHandler<
  typeof postApiV2TriggersValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UploadsRouteHandler: RouteHandler<typeof postApiV2UploadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UploadsTokenRouteHandler: RouteHandler<
  typeof deleteApiV2UploadsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserFieldsRouteHandler: RouteHandler<typeof getApiV2UserFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2UserFieldsRouteHandler: RouteHandler<
  typeof postApiV2UserFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserFieldsUserFieldIdRouteHandler: RouteHandler<
  typeof getApiV2UserFieldsUserFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UserFieldsUserFieldIdRouteHandler: RouteHandler<
  typeof putApiV2UserFieldsUserFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UserFieldsUserFieldIdRouteHandler: RouteHandler<
  typeof deleteApiV2UserFieldsUserFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserFieldsUserFieldIdOptionsRouteHandler: RouteHandler<
  typeof getApiV2UserFieldsUserFieldIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UserFieldsUserFieldIdOptionsRouteHandler: RouteHandler<
  typeof postApiV2UserFieldsUserFieldIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRouteHandler: RouteHandler<
  typeof getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRouteHandler: RouteHandler<
  typeof deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UserFieldsReorderRouteHandler: RouteHandler<
  typeof putApiV2UserFieldsReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UserFieldsShowManyRouteHandler: RouteHandler<
  typeof getApiV2UserFieldsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersRouteHandler: RouteHandler<typeof getApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersRouteHandler: RouteHandler<typeof postApiV2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdBrandAgentsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdBrandAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdBrandAgentsBrandAgentIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdBrandAgentsBrandAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdComplianceDeletionStatusesRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdComplianceDeletionStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdEntitlementsFullRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdEntitlementsFullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdGroupMembershipsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdGroupMembershipsRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdGroupsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdGroupsCountRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdIdentitiesRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdIdentitiesRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdIdentitiesUserIdentityIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdIdentitiesUserIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdIdentitiesUserIdentityIdRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdIdentitiesUserIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdIdentitiesUserIdentityIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdIdentitiesUserIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdIdentitiesUserIdentityIdMakePrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdIdentitiesUserIdentityIdRequestVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdIdentitiesUserIdentityIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdMergeRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdOrganizationMembershipsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdOrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdOrganizationMembershipsRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdOrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdOrganizationMembershipsOrganizationMembershipIdMakeDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdOrganizationSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdOrganizationSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdOrganizationsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdOrganizationsOrganizationIdMakeDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdOrganizationsCountRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdOrganizationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdPasswordRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdPasswordRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdPasswordRequirementsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdPasswordRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdRelatedRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdRequestsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdSessionsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdSessionsRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdSkipsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdSkipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdSuspensionRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdSuspensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdSuspensionRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdSuspensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdSuspensionRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdSuspensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdSuspensionRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdSuspensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTagsRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersUserIdTagsRouteHandler: RouteHandler<
  typeof postApiV2UsersUserIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUserIdTagsRouteHandler: RouteHandler<
  typeof putApiV2UsersUserIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersUserIdTagsRouteHandler: RouteHandler<
  typeof deleteApiV2UsersUserIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsAssignedRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsAssignedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsAssignedCountRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsAssignedCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsCcdRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsCcdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsCcdCountRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsCcdCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsFollowedRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsFollowedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersUserIdTicketsRequestedRouteHandler: RouteHandler<
  typeof getApiV2UsersUserIdTicketsRequestedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersAutocompleteRouteHandler: RouteHandler<
  typeof getApiV2UsersAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersAutocompleteRouteHandler: RouteHandler<
  typeof postApiV2UsersAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersCountRouteHandler: RouteHandler<typeof getApiV2UsersCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersCreateManyRouteHandler: RouteHandler<
  typeof postApiV2UsersCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersCreateOrUpdateRouteHandler: RouteHandler<
  typeof postApiV2UsersCreateOrUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersCreateOrUpdateManyRouteHandler: RouteHandler<
  typeof postApiV2UsersCreateOrUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2UsersDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersLogoutManyRouteHandler: RouteHandler<
  typeof postApiV2UsersLogoutManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeRouteHandler: RouteHandler<typeof getApiV2UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2UsersMeLogoutRouteHandler: RouteHandler<
  typeof deleteApiV2UsersMeLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeOauthClientsRouteHandler: RouteHandler<
  typeof getApiV2UsersMeOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeSessionRouteHandler: RouteHandler<
  typeof getApiV2UsersMeSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeSessionRenewRouteHandler: RouteHandler<
  typeof getApiV2UsersMeSessionRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersMeSettingsRouteHandler: RouteHandler<
  typeof getApiV2UsersMeSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersMeSettingsRouteHandler: RouteHandler<
  typeof putApiV2UsersMeSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2UsersRequestCreateRouteHandler: RouteHandler<
  typeof postApiV2UsersRequestCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersSearchRouteHandler: RouteHandler<
  typeof getApiV2UsersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2UsersShowManyRouteHandler: RouteHandler<
  typeof getApiV2UsersShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2UsersUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2UsersUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsRouteHandler: RouteHandler<typeof getApiV2ViewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ViewsRouteHandler: RouteHandler<typeof postApiV2ViewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsViewIdRouteHandler: RouteHandler<
  typeof getApiV2ViewsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ViewsViewIdRouteHandler: RouteHandler<
  typeof putApiV2ViewsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ViewsViewIdRouteHandler: RouteHandler<
  typeof deleteApiV2ViewsViewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsViewIdCountRouteHandler: RouteHandler<
  typeof getApiV2ViewsViewIdCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsViewIdExecuteRouteHandler: RouteHandler<
  typeof getApiV2ViewsViewIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsViewIdExportRouteHandler: RouteHandler<
  typeof getApiV2ViewsViewIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsViewIdTicketsRouteHandler: RouteHandler<
  typeof getApiV2ViewsViewIdTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsActiveRouteHandler: RouteHandler<
  typeof getApiV2ViewsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsCompactRouteHandler: RouteHandler<
  typeof getApiV2ViewsCompactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsCountRouteHandler: RouteHandler<typeof getApiV2ViewsCountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsCountManyRouteHandler: RouteHandler<
  typeof getApiV2ViewsCountManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsDefinitionsRouteHandler: RouteHandler<
  typeof getApiV2ViewsDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2ViewsDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2ViewsDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ViewsPreviewRouteHandler: RouteHandler<
  typeof postApiV2ViewsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2ViewsPreviewCountRouteHandler: RouteHandler<
  typeof postApiV2ViewsPreviewCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsSearchRouteHandler: RouteHandler<
  typeof getApiV2ViewsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ViewsShowManyRouteHandler: RouteHandler<
  typeof getApiV2ViewsShowManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2ViewsUpdateManyRouteHandler: RouteHandler<
  typeof putApiV2ViewsUpdateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2WorkspacesRouteHandler: RouteHandler<typeof getApiV2WorkspacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV2WorkspacesRouteHandler: RouteHandler<
  typeof postApiV2WorkspacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2WorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof getApiV2WorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2WorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof putApiV2WorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2WorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof deleteApiV2WorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2WorkspacesDestroyManyRouteHandler: RouteHandler<
  typeof deleteApiV2WorkspacesDestroyManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2WorkspacesReorderRouteHandler: RouteHandler<
  typeof putApiV2WorkspacesReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
