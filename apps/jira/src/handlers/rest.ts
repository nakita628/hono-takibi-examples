import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRestApi3AttachmentIdRoute,
  deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  deleteRestApi3ComponentIdRoute,
  deleteRestApi3ConfigFieldschemesFieldsParametersRoute,
  deleteRestApi3ConfigFieldschemesFieldsRoute,
  deleteRestApi3ConfigFieldschemesIdRoute,
  deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  deleteRestApi3DashboardIdRoute,
  deleteRestApi3FieldAssociationRoute,
  deleteRestApi3FieldconfigurationIdRoute,
  deleteRestApi3FieldconfigurationschemeIdRoute,
  deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdIssueRoute,
  deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRoute,
  deleteRestApi3FieldFieldIdContextContextIdRoute,
  deleteRestApi3FieldFieldKeyOptionOptionIdIssueRoute,
  deleteRestApi3FieldFieldKeyOptionOptionIdRoute,
  deleteRestApi3FieldIdRoute,
  deleteRestApi3FilterIdColumnsRoute,
  deleteRestApi3FilterIdFavouriteRoute,
  deleteRestApi3FilterIdPermissionPermissionIdRoute,
  deleteRestApi3FilterIdRoute,
  deleteRestApi3GroupRoute,
  deleteRestApi3GroupUserRoute,
  deleteRestApi3IssueIssueIdOrKeyCommentIdRoute,
  deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  deleteRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  deleteRestApi3IssueIssueIdOrKeyRoute,
  deleteRestApi3IssueIssueIdOrKeyVotesRoute,
  deleteRestApi3IssueIssueIdOrKeyWatchersRoute,
  deleteRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  deleteRestApi3IssueIssueIdOrKeyWorklogRoute,
  deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  deleteRestApi3IssueLinkLinkIdRoute,
  deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  deleteRestApi3IssuePropertiesPropertyKeyRoute,
  deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberIdRoute,
  deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute,
  deleteRestApi3IssuesecurityschemesSchemeIdRoute,
  deleteRestApi3IssuetypeIdRoute,
  deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute,
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute,
  deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute,
  deleteRestApi3MypreferencesRoute,
  deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute,
  deleteRestApi3NotificationschemeNotificationSchemeIdRoute,
  deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute,
  deleteRestApi3PermissionschemeSchemeIdRoute,
  deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
  deleteRestApi3PriorityIdRoute,
  deleteRestApi3PriorityschemeSchemeIdRoute,
  deleteRestApi3ProjectCategoryIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
  deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyRoute,
  deleteRestApi3ProjectTemplateRemoveTemplateRoute,
  deleteRestApi3ResolutionIdRoute,
  deleteRestApi3RoleIdActorsRoute,
  deleteRestApi3RoleIdRoute,
  deleteRestApi3ScreenschemeScreenSchemeIdRoute,
  deleteRestApi3ScreensScreenIdRoute,
  deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRoute,
  deleteRestApi3ScreensScreenIdTabsTabIdRoute,
  deleteRestApi3StatusesRoute,
  deleteRestApi3UiModificationsUiModificationIdRoute,
  deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRoute,
  deleteRestApi3UserColumnsRoute,
  deleteRestApi3UserPropertiesPropertyKeyRoute,
  deleteRestApi3UserRoute,
  deleteRestApi3VersionIdRoute,
  deleteRestApi3VersionVersionIdRelatedworkRelatedWorkIdRoute,
  deleteRestApi3WebhookRoute,
  deleteRestApi3WorkflowEntityIdRoute,
  deleteRestApi3WorkflowschemeIdDefaultRoute,
  deleteRestApi3WorkflowschemeIdDraftDefaultRoute,
  deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  deleteRestApi3WorkflowschemeIdDraftRoute,
  deleteRestApi3WorkflowschemeIdDraftWorkflowRoute,
  deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  deleteRestApi3WorkflowschemeIdRoute,
  deleteRestApi3WorkflowschemeIdWorkflowRoute,
  deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  deleteRestAtlassianConnect1AppModuleDynamicRoute,
  deleteRestForge1AppPropertiesPropertyKeyRoute,
  getRestApi3AnnouncementBannerRoute,
  getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
  getRestApi3ApplicationPropertiesAdvancedSettingsRoute,
  getRestApi3ApplicationPropertiesRoute,
  getRestApi3ApplicationroleKeyRoute,
  getRestApi3ApplicationroleRoute,
  getRestApi3AttachmentContentIdRoute,
  getRestApi3AttachmentIdExpandHumanRoute,
  getRestApi3AttachmentIdExpandRawRoute,
  getRestApi3AttachmentIdRoute,
  getRestApi3AttachmentMetaRoute,
  getRestApi3AttachmentThumbnailIdRoute,
  getRestApi3AuditingRecordRoute,
  getRestApi3AvatarTypeSystemRoute,
  getRestApi3BulkIssuesFieldsRoute,
  getRestApi3BulkIssuesTransitionRoute,
  getRestApi3BulkQueueTaskIdRoute,
  getRestApi3ClassificationLevelsRoute,
  getRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  getRestApi3CommentCommentIdPropertiesRoute,
  getRestApi3ComponentIdRelatedIssueCountsRoute,
  getRestApi3ComponentIdRoute,
  getRestApi3ComponentRoute,
  getRestApi3ConfigFieldschemesIdFieldsFieldIdParametersRoute,
  getRestApi3ConfigFieldschemesIdFieldsRoute,
  getRestApi3ConfigFieldschemesIdProjectsRoute,
  getRestApi3ConfigFieldschemesIdRoute,
  getRestApi3ConfigFieldschemesProjectsRoute,
  getRestApi3ConfigFieldschemesRoute,
  getRestApi3ConfigurationRoute,
  getRestApi3ConfigurationTimetrackingListRoute,
  getRestApi3ConfigurationTimetrackingOptionsRoute,
  getRestApi3ConfigurationTimetrackingRoute,
  getRestApi3CustomFieldOptionIdRoute,
  getRestApi3DashboardDashboardIdGadgetRoute,
  getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  getRestApi3DashboardDashboardIdItemsItemIdPropertiesRoute,
  getRestApi3DashboardGadgetsRoute,
  getRestApi3DashboardIdRoute,
  getRestApi3DashboardRoute,
  getRestApi3DashboardSearchRoute,
  getRestApi3DataPolicyProjectRoute,
  getRestApi3DataPolicyRoute,
  getRestApi3EventsRoute,
  getRestApi3FieldconfigurationIdFieldsRoute,
  getRestApi3FieldconfigurationRoute,
  getRestApi3FieldconfigurationschemeMappingRoute,
  getRestApi3FieldconfigurationschemeProjectRoute,
  getRestApi3FieldconfigurationschemeRoute,
  getRestApi3FieldFieldIdAssociationProjectRoute,
  getRestApi3FieldFieldIdContextContextIdOptionRoute,
  getRestApi3FieldFieldIdContextDefaultValueRoute,
  getRestApi3FieldFieldIdContextDefaultValuesRoute,
  getRestApi3FieldFieldIdContextIssuetypemappingRoute,
  getRestApi3FieldFieldIdContextProjectmappingRoute,
  getRestApi3FieldFieldIdContextRoute,
  getRestApi3FieldFieldIdContextsRoute,
  getRestApi3FieldFieldIdScreensRoute,
  getRestApi3FieldFieldKeyOptionOptionIdRoute,
  getRestApi3FieldFieldKeyOptionRoute,
  getRestApi3FieldFieldKeyOptionSuggestionsEditRoute,
  getRestApi3FieldFieldKeyOptionSuggestionsSearchRoute,
  getRestApi3FieldRoute,
  getRestApi3FieldSearchRoute,
  getRestApi3FieldSearchTrashedRoute,
  getRestApi3FilterDefaultShareScopeRoute,
  getRestApi3FilterFavouriteRoute,
  getRestApi3FilterIdColumnsRoute,
  getRestApi3FilterIdPermissionPermissionIdRoute,
  getRestApi3FilterIdPermissionRoute,
  getRestApi3FilterIdRoute,
  getRestApi3FilterMyRoute,
  getRestApi3FilterSearchRoute,
  getRestApi3GroupBulkRoute,
  getRestApi3GroupMemberRoute,
  getRestApi3GroupRoute,
  getRestApi3GroupsPickerRoute,
  getRestApi3GroupuserpickerRoute,
  getRestApi3InstanceLicenseRoute,
  getRestApi3InvalidJqlsAccessLogRoute,
  getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesIssueTypeIdRoute,
  getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesRoute,
  getRestApi3IssueCreatemetaRoute,
  getRestApi3IssueIssueIdOrKeyChangelogRoute,
  getRestApi3IssueIssueIdOrKeyCommentIdRoute,
  getRestApi3IssueIssueIdOrKeyCommentRoute,
  getRestApi3IssueIssueIdOrKeyEditmetaRoute,
  getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyPropertiesRoute,
  getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  getRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  getRestApi3IssueIssueIdOrKeyRoute,
  getRestApi3IssueIssueIdOrKeyTransitionsRoute,
  getRestApi3IssueIssueIdOrKeyVotesRoute,
  getRestApi3IssueIssueIdOrKeyWatchersRoute,
  getRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  getRestApi3IssueIssueIdOrKeyWorklogRoute,
  getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRoute,
  getRestApi3IssueLimitAdfReportRoute,
  getRestApi3IssueLimitReportRoute,
  getRestApi3IssueLinkLinkIdRoute,
  getRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  getRestApi3IssueLinkTypeRoute,
  getRestApi3IssuePickerRoute,
  getRestApi3IssuesecurityschemesIdRoute,
  getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute,
  getRestApi3IssuesecurityschemesLevelMemberRoute,
  getRestApi3IssuesecurityschemesLevelRoute,
  getRestApi3IssuesecurityschemesProjectRoute,
  getRestApi3IssuesecurityschemesRoute,
  getRestApi3IssuesecurityschemesSearchRoute,
  getRestApi3IssuetypeIdAlternativesRoute,
  getRestApi3IssuetypeIdRoute,
  getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  getRestApi3IssuetypeIssueTypeIdPropertiesRoute,
  getRestApi3IssuetypeProjectRoute,
  getRestApi3IssuetypeRoute,
  getRestApi3IssuetypeschemeMappingRoute,
  getRestApi3IssuetypeschemeProjectRoute,
  getRestApi3IssuetypeschemeRoute,
  getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRoute,
  getRestApi3IssuetypescreenschemeMappingRoute,
  getRestApi3IssuetypescreenschemeProjectRoute,
  getRestApi3IssuetypescreenschemeRoute,
  getRestApi3JqlAutocompletedataRoute,
  getRestApi3JqlAutocompletedataSuggestionsRoute,
  getRestApi3JqlFunctionComputationRoute,
  getRestApi3LabelRoute,
  getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRoute,
  getRestApi3LicenseApproximateLicenseCountRoute,
  getRestApi3MypermissionsRoute,
  getRestApi3MypreferencesLocaleRoute,
  getRestApi3MypreferencesRoute,
  getRestApi3MyselfRoute,
  getRestApi3NotificationschemeIdRoute,
  getRestApi3NotificationschemeProjectRoute,
  getRestApi3NotificationschemeRoute,
  getRestApi3PermissionschemeRoute,
  getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute,
  getRestApi3PermissionschemeSchemeIdPermissionRoute,
  getRestApi3PermissionschemeSchemeIdRoute,
  getRestApi3PermissionsRoute,
  getRestApi3PlansPlanPlanIdRoute,
  getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
  getRestApi3PlansPlanPlanIdTeamRoute,
  getRestApi3PlansPlanRoute,
  getRestApi3PoliciesProjectProjectIdOrKeyRoute,
  getRestApi3PoliciesProjectProjectIdOrKeyRulesRoute,
  getRestApi3PoliciesRoute,
  getRestApi3PriorityIdRoute,
  getRestApi3PriorityRoute,
  getRestApi3PriorityschemePrioritiesAvailableRoute,
  getRestApi3PriorityschemeRoute,
  getRestApi3PriorityschemeSchemeIdPrioritiesRoute,
  getRestApi3PriorityschemeSchemeIdProjectsRoute,
  getRestApi3PrioritySearchRoute,
  getRestApi3ProjectCategoryIdRoute,
  getRestApi3ProjectCategoryRoute,
  getRestApi3ProjectProjectIdEmailRoute,
  getRestApi3ProjectProjectIdHierarchyRoute,
  getRestApi3ProjectProjectIdOrKeyAvatarsRoute,
  getRestApi3ProjectProjectIdOrKeyClassificationConfigRoute,
  getRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
  getRestApi3ProjectProjectIdOrKeyComponentRoute,
  getRestApi3ProjectProjectIdOrKeyComponentsRoute,
  getRestApi3ProjectProjectIdOrKeyFeaturesRoute,
  getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  getRestApi3ProjectProjectIdOrKeyPropertiesRoute,
  getRestApi3ProjectProjectIdOrKeyRoledetailsRoute,
  getRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  getRestApi3ProjectProjectIdOrKeyRoleRoute,
  getRestApi3ProjectProjectIdOrKeyRoute,
  getRestApi3ProjectProjectIdOrKeyStatusesRoute,
  getRestApi3ProjectProjectIdOrKeyVersionRoute,
  getRestApi3ProjectProjectIdOrKeyVersionsRoute,
  getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRoute,
  getRestApi3ProjectProjectKeyOrIdNotificationschemeRoute,
  getRestApi3ProjectProjectKeyOrIdPermissionschemeRoute,
  getRestApi3ProjectProjectKeyOrIdSecuritylevelRoute,
  getRestApi3ProjectRecentRoute,
  getRestApi3ProjectRoute,
  getRestApi3ProjectSearchRoute,
  getRestApi3ProjectsFieldsRoute,
  getRestApi3ProjectTemplateLiveTemplateRoute,
  getRestApi3ProjectTypeAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyRoute,
  getRestApi3ProjectTypeRoute,
  getRestApi3ProjectvalidateKeyRoute,
  getRestApi3ProjectvalidateValidProjectKeyRoute,
  getRestApi3ProjectvalidateValidProjectNameRoute,
  getRestApi3RedactStatusJobIdRoute,
  getRestApi3ResolutionIdRoute,
  getRestApi3ResolutionRoute,
  getRestApi3ResolutionSearchRoute,
  getRestApi3RoleIdActorsRoute,
  getRestApi3RoleIdRoute,
  getRestApi3RoleRoute,
  getRestApi3ScreenschemeRoute,
  getRestApi3ScreensRoute,
  getRestApi3ScreensScreenIdAvailableFieldsRoute,
  getRestApi3ScreensScreenIdTabsRoute,
  getRestApi3ScreensScreenIdTabsTabIdFieldsRoute,
  getRestApi3ScreensTabsRoute,
  getRestApi3SearchJqlRoute,
  getRestApi3SearchRoute,
  getRestApi3SecuritylevelIdRoute,
  getRestApi3ServerInfoRoute,
  getRestApi3SettingsColumnsRoute,
  getRestApi3StatuscategoryIdOrKeyRoute,
  getRestApi3StatuscategoryRoute,
  getRestApi3StatusesByNamesRoute,
  getRestApi3StatusesRoute,
  getRestApi3StatusesSearchRoute,
  getRestApi3StatusesStatusIdProjectProjectIdIssueTypeUsagesRoute,
  getRestApi3StatusesStatusIdProjectUsagesRoute,
  getRestApi3StatusesStatusIdWorkflowUsagesRoute,
  getRestApi3StatusIdOrNameRoute,
  getRestApi3StatusRoute,
  getRestApi3TaskTaskIdRoute,
  getRestApi3UiModificationsRoute,
  getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeAvatarIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeRoute,
  getRestApi3UserAssignableMultiProjectSearchRoute,
  getRestApi3UserAssignableSearchRoute,
  getRestApi3UserBulkMigrationRoute,
  getRestApi3UserBulkRoute,
  getRestApi3UserColumnsRoute,
  getRestApi3UserEmailBulkRoute,
  getRestApi3UserEmailRoute,
  getRestApi3UserGroupsRoute,
  getRestApi3UserPermissionSearchRoute,
  getRestApi3UserPickerRoute,
  getRestApi3UserPropertiesPropertyKeyRoute,
  getRestApi3UserPropertiesRoute,
  getRestApi3UserRoute,
  getRestApi3UserSearchQueryKeyRoute,
  getRestApi3UserSearchQueryRoute,
  getRestApi3UserSearchRoute,
  getRestApi3UsersRoute,
  getRestApi3UsersSearchRoute,
  getRestApi3UserViewissueSearchRoute,
  getRestApi3VersionIdRelatedIssueCountsRoute,
  getRestApi3VersionIdRelatedworkRoute,
  getRestApi3VersionIdRoute,
  getRestApi3VersionIdUnresolvedIssueCountRoute,
  getRestApi3WebhookFailedRoute,
  getRestApi3WebhookRoute,
  getRestApi3WorkflowRuleConfigRoute,
  getRestApi3WorkflowsCapabilitiesRoute,
  getRestApi3WorkflowschemeIdDefaultRoute,
  getRestApi3WorkflowschemeIdDraftDefaultRoute,
  getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  getRestApi3WorkflowschemeIdDraftRoute,
  getRestApi3WorkflowschemeIdDraftWorkflowRoute,
  getRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  getRestApi3WorkflowschemeIdRoute,
  getRestApi3WorkflowschemeIdWorkflowRoute,
  getRestApi3WorkflowschemeProjectRoute,
  getRestApi3WorkflowschemeRoute,
  getRestApi3WorkflowschemeWorkflowSchemeIdProjectUsagesRoute,
  getRestApi3WorkflowsDefaultEditorRoute,
  getRestApi3WorkflowSearchRoute,
  getRestApi3WorkflowsSearchRoute,
  getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsagesRoute,
  getRestApi3WorkflowWorkflowIdProjectUsagesRoute,
  getRestApi3WorkflowWorkflowIdWorkflowSchemesRoute,
  getRestApi3WorklogDeletedRoute,
  getRestApi3WorklogUpdatedRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute,
  getRestAtlassianConnect1AppModuleDynamicRoute,
  getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute,
  getRestAtlassianConnect1ServiceRegistryRoute,
  getRestForge1AppPropertiesPropertyKeyRoute,
  getRestForge1AppPropertiesRoute,
  postRestApi3AgentsBulkInvokeBatchRoute,
  postRestApi3AgentsBulkInvokeUniformRoute,
  postRestApi3AppFieldContextConfigurationListRoute,
  postRestApi3AppFieldValueRoute,
  postRestApi3BulkIssuesDeleteRoute,
  postRestApi3BulkIssuesFieldsRoute,
  postRestApi3BulkIssuesMoveRoute,
  postRestApi3BulkIssuesTransitionRoute,
  postRestApi3BulkIssuesUnwatchRoute,
  postRestApi3BulkIssuesWatchRoute,
  postRestApi3ChangelogBulkfetchRoute,
  postRestApi3CommentListRoute,
  postRestApi3ComponentRoute,
  postRestApi3ConfigFieldschemesIdCloneRoute,
  postRestApi3ConfigFieldschemesRoute,
  postRestApi3DashboardDashboardIdGadgetRoute,
  postRestApi3DashboardIdCopyRoute,
  postRestApi3DashboardRoute,
  postRestApi3ExpressionAnalyseRoute,
  postRestApi3ExpressionEvalRoute,
  postRestApi3ExpressionEvaluateRoute,
  postRestApi3FieldconfigurationRoute,
  postRestApi3FieldconfigurationschemeIdMappingDeleteRoute,
  postRestApi3FieldconfigurationschemeRoute,
  postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRoute,
  postRestApi3FieldFieldIdContextContextIdOptionRoute,
  postRestApi3FieldFieldIdContextContextIdProjectRemoveRoute,
  postRestApi3FieldFieldIdContextMappingRoute,
  postRestApi3FieldFieldIdContextRoute,
  postRestApi3FieldFieldKeyOptionRoute,
  postRestApi3FieldIdRestoreRoute,
  postRestApi3FieldIdTrashRoute,
  postRestApi3FieldRoute,
  postRestApi3FilterIdPermissionRoute,
  postRestApi3FilterRoute,
  postRestApi3ForgePanelActionBulkAsyncRoute,
  postRestApi3ForgePanelActionBulkStatusRoute,
  postRestApi3GroupRoute,
  postRestApi3GroupUserRoute,
  postRestApi3IssueArchiveRoute,
  postRestApi3IssueBulkfetchRoute,
  postRestApi3IssueBulkRoute,
  postRestApi3IssueIssueIdOrKeyAttachmentsRoute,
  postRestApi3IssueIssueIdOrKeyChangelogListRoute,
  postRestApi3IssueIssueIdOrKeyCommentRoute,
  postRestApi3IssueIssueIdOrKeyNotifyRoute,
  postRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  postRestApi3IssueIssueIdOrKeyTransitionsRoute,
  postRestApi3IssueIssueIdOrKeyVotesRoute,
  postRestApi3IssueIssueIdOrKeyWatchersRoute,
  postRestApi3IssueIssueIdOrKeyWorklogMoveRoute,
  postRestApi3IssueIssueIdOrKeyWorklogRoute,
  postRestApi3IssueLinkRoute,
  postRestApi3IssueLinkTypeRoute,
  postRestApi3IssuePropertiesMultiRoute,
  postRestApi3IssuePropertiesRoute,
  postRestApi3IssueRoute,
  postRestApi3IssuesecurityschemesRoute,
  postRestApi3IssuetypeIdAvatar2Route,
  postRestApi3IssuetypeRoute,
  postRestApi3IssuetypeschemeRoute,
  postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute,
  postRestApi3IssuetypescreenschemeRoute,
  postRestApi3IssueWatchingRoute,
  postRestApi3JqlAutocompletedataRoute,
  postRestApi3JqlFunctionComputationRoute,
  postRestApi3JqlFunctionComputationSearchRoute,
  postRestApi3JqlMatchRoute,
  postRestApi3JqlParseRoute,
  postRestApi3JqlPdcleanerRoute,
  postRestApi3JqlSanitizeRoute,
  postRestApi3NotificationschemeRoute,
  postRestApi3PermissionsCheckRoute,
  postRestApi3PermissionschemeRoute,
  postRestApi3PermissionschemeSchemeIdPermissionRoute,
  postRestApi3PermissionsProjectRoute,
  postRestApi3PlansPlanPlanIdDuplicateRoute,
  postRestApi3PlansPlanPlanIdTeamAtlassianRoute,
  postRestApi3PlansPlanPlanIdTeamPlanonlyRoute,
  postRestApi3PlansPlanRoute,
  postRestApi3PoliciesPolicyIdApplyRoute,
  postRestApi3PoliciesPolicyIdRemoveRoute,
  postRestApi3PoliciesProjectProjectIdOrKeyValidateRoute,
  postRestApi3PriorityRoute,
  postRestApi3PriorityschemeMappingsRoute,
  postRestApi3PriorityschemeRoute,
  postRestApi3ProjectCategoryRoute,
  postRestApi3ProjectProjectIdOrKeyArchiveRoute,
  postRestApi3ProjectProjectIdOrKeyAvatar2Route,
  postRestApi3ProjectProjectIdOrKeyDeleteRoute,
  postRestApi3ProjectProjectIdOrKeyRestoreRoute,
  postRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  postRestApi3ProjectRoute,
  postRestApi3ProjectTemplateRoute,
  postRestApi3ProjectTemplateSaveTemplateRoute,
  postRestApi3RedactRoute,
  postRestApi3ResolutionRoute,
  postRestApi3RoleIdActorsRoute,
  postRestApi3RoleIdRoute,
  postRestApi3RoleRoute,
  postRestApi3ScreensAddToDefaultFieldIdRoute,
  postRestApi3ScreenschemeRoute,
  postRestApi3ScreensRoute,
  postRestApi3ScreensScreenIdTabsRoute,
  postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRoute,
  postRestApi3ScreensScreenIdTabsTabIdFieldsRoute,
  postRestApi3ScreensScreenIdTabsTabIdMovePosRoute,
  postRestApi3SearchApproximateCountRoute,
  postRestApi3SearchJqlRoute,
  postRestApi3SearchRoute,
  postRestApi3StatusesRoute,
  postRestApi3TaskTaskIdCancelRoute,
  postRestApi3UiModificationsRoute,
  postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute,
  postRestApi3UserRoute,
  postRestApi3VersionIdMoveRoute,
  postRestApi3VersionIdRelatedworkRoute,
  postRestApi3VersionIdRemoveAndSwapRoute,
  postRestApi3VersionRoute,
  postRestApi3WebhookRoute,
  postRestApi3WorkflowHistoryListRoute,
  postRestApi3WorkflowHistoryRoute,
  postRestApi3WorkflowschemeIdCreatedraftRoute,
  postRestApi3WorkflowschemeIdDraftPublishRoute,
  postRestApi3WorkflowschemeProjectSwitchRoute,
  postRestApi3WorkflowschemeReadRoute,
  postRestApi3WorkflowschemeRoute,
  postRestApi3WorkflowschemeUpdateMappingsRoute,
  postRestApi3WorkflowschemeUpdateRoute,
  postRestApi3WorkflowsCopyRoute,
  postRestApi3WorkflowsCreateRoute,
  postRestApi3WorkflowsCreateValidationRoute,
  postRestApi3WorkflowsPreviewRoute,
  postRestApi3WorkflowsRoute,
  postRestApi3WorkflowsUpdateRoute,
  postRestApi3WorkflowsUpdateValidationRoute,
  postRestApi3WorklogListRoute,
  postRestAtlassianConnect1AppModuleDynamicRoute,
  postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute,
  postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute,
  postRestInternalApiLatestWorklogBulkRoute,
  putRestApi3AnnouncementBannerRoute,
  putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
  putRestApi3AppFieldFieldIdOrKeyValueRoute,
  putRestApi3ApplicationPropertiesIdRoute,
  putRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  putRestApi3ComponentIdRoute,
  putRestApi3ConfigFieldschemesFieldsParametersRoute,
  putRestApi3ConfigFieldschemesFieldsRoute,
  putRestApi3ConfigFieldschemesIdRoute,
  putRestApi3ConfigFieldschemesProjectsRoute,
  putRestApi3ConfigurationTimetrackingOptionsRoute,
  putRestApi3ConfigurationTimetrackingRoute,
  putRestApi3DashboardBulkEditRoute,
  putRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  putRestApi3DashboardIdRoute,
  putRestApi3FieldAssociationRoute,
  putRestApi3FieldconfigurationIdFieldsRoute,
  putRestApi3FieldconfigurationIdRoute,
  putRestApi3FieldconfigurationschemeIdMappingRoute,
  putRestApi3FieldconfigurationschemeIdRoute,
  putRestApi3FieldconfigurationschemeProjectRoute,
  putRestApi3FieldFieldIdContextContextIdIssuetypeRoute,
  putRestApi3FieldFieldIdContextContextIdOptionMoveRoute,
  putRestApi3FieldFieldIdContextContextIdOptionRoute,
  putRestApi3FieldFieldIdContextContextIdProjectRoute,
  putRestApi3FieldFieldIdContextContextIdRoute,
  putRestApi3FieldFieldIdContextDefaultValueRoute,
  putRestApi3FieldFieldIdContextDefaultValuesRoute,
  putRestApi3FieldFieldIdRoute,
  putRestApi3FieldFieldKeyOptionOptionIdRoute,
  putRestApi3FilterDefaultShareScopeRoute,
  putRestApi3FilterIdColumnsRoute,
  putRestApi3FilterIdFavouriteRoute,
  putRestApi3FilterIdOwnerRoute,
  putRestApi3FilterIdRoute,
  putRestApi3IssueArchiveRoute,
  putRestApi3IssueIssueIdOrKeyAssigneeRoute,
  putRestApi3IssueIssueIdOrKeyCommentIdRoute,
  putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  putRestApi3IssueIssueIdOrKeyRoute,
  putRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  putRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  putRestApi3IssuePropertiesPropertyKeyRoute,
  putRestApi3IssuesArchiveExportRoute,
  putRestApi3IssuesecurityschemesIdRoute,
  putRestApi3IssuesecurityschemesLevelDefaultRoute,
  putRestApi3IssuesecurityschemesProjectRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute,
  putRestApi3IssuesecurityschemesSchemeIdLevelRoute,
  putRestApi3IssuetypeIdRoute,
  putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRoute,
  putRestApi3IssuetypeschemeIssueTypeSchemeIdRoute,
  putRestApi3IssuetypeschemeProjectRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRoute,
  putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute,
  putRestApi3IssuetypescreenschemeProjectRoute,
  putRestApi3IssueUnarchiveRoute,
  putRestApi3MypreferencesLocaleRoute,
  putRestApi3MypreferencesRoute,
  putRestApi3NotificationschemeIdNotificationRoute,
  putRestApi3NotificationschemeIdRoute,
  putRestApi3PermissionschemeSchemeIdRoute,
  putRestApi3PlansPlanPlanIdArchiveRoute,
  putRestApi3PlansPlanPlanIdRoute,
  putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
  putRestApi3PlansPlanPlanIdTrashRoute,
  putRestApi3PoliciesProjectProjectIdOrKeyPoliciesRoute,
  putRestApi3PriorityDefaultRoute,
  putRestApi3PriorityIdRoute,
  putRestApi3PriorityMoveRoute,
  putRestApi3PriorityschemeSchemeIdRoute,
  putRestApi3ProjectCategoryIdRoute,
  putRestApi3ProjectProjectIdEmailRoute,
  putRestApi3ProjectProjectIdOrKeyAvatarRoute,
  putRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
  putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute,
  putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  putRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  putRestApi3ProjectProjectIdOrKeyRoute,
  putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute,
  putRestApi3ProjectTemplateEditTemplateRoute,
  putRestApi3ResolutionDefaultRoute,
  putRestApi3ResolutionIdRoute,
  putRestApi3ResolutionMoveRoute,
  putRestApi3RoleIdRoute,
  putRestApi3ScreenschemeScreenSchemeIdRoute,
  putRestApi3ScreensScreenIdRoute,
  putRestApi3ScreensScreenIdTabsTabIdRoute,
  putRestApi3SettingsColumnsRoute,
  putRestApi3StatusesRoute,
  putRestApi3UiModificationsUiModificationIdRoute,
  putRestApi3UserColumnsRoute,
  putRestApi3UserPropertiesPropertyKeyRoute,
  putRestApi3VersionIdMergetoMoveIssuesToRoute,
  putRestApi3VersionIdRelatedworkRoute,
  putRestApi3VersionIdRoute,
  putRestApi3WebhookRefreshRoute,
  putRestApi3WorkflowRuleConfigDeleteRoute,
  putRestApi3WorkflowRuleConfigRoute,
  putRestApi3WorkflowschemeIdDefaultRoute,
  putRestApi3WorkflowschemeIdDraftDefaultRoute,
  putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute,
  putRestApi3WorkflowschemeIdDraftRoute,
  putRestApi3WorkflowschemeIdDraftWorkflowRoute,
  putRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute,
  putRestApi3WorkflowschemeIdRoute,
  putRestApi3WorkflowschemeIdWorkflowRoute,
  putRestApi3WorkflowschemeProjectRoute,
  putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  putRestAtlassianConnect1MigrationFieldRoute,
  putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute,
  putRestForge1AppPropertiesPropertyKeyRoute,
} from '../routes'

export const postRestApi3AgentsBulkInvokeBatchRouteHandler: RouteHandler<
  typeof postRestApi3AgentsBulkInvokeBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3AgentsBulkInvokeUniformRouteHandler: RouteHandler<
  typeof postRestApi3AgentsBulkInvokeUniformRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AnnouncementBannerRouteHandler: RouteHandler<
  typeof getRestApi3AnnouncementBannerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3AnnouncementBannerRouteHandler: RouteHandler<
  typeof putRestApi3AnnouncementBannerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3AppFieldContextConfigurationListRouteHandler: RouteHandler<
  typeof postRestApi3AppFieldContextConfigurationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3AppFieldValueRouteHandler: RouteHandler<
  typeof postRestApi3AppFieldValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AppFieldFieldIdOrKeyContextConfigurationRouteHandler: RouteHandler<
  typeof getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3AppFieldFieldIdOrKeyContextConfigurationRouteHandler: RouteHandler<
  typeof putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3AppFieldFieldIdOrKeyValueRouteHandler: RouteHandler<
  typeof putRestApi3AppFieldFieldIdOrKeyValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ApplicationPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3ApplicationPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ApplicationPropertiesAdvancedSettingsRouteHandler: RouteHandler<
  typeof getRestApi3ApplicationPropertiesAdvancedSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ApplicationPropertiesIdRouteHandler: RouteHandler<
  typeof putRestApi3ApplicationPropertiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ApplicationroleRouteHandler: RouteHandler<
  typeof getRestApi3ApplicationroleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ApplicationroleKeyRouteHandler: RouteHandler<
  typeof getRestApi3ApplicationroleKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentContentIdRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentMetaRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentThumbnailIdRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentThumbnailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3AttachmentIdRouteHandler: RouteHandler<
  typeof deleteRestApi3AttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentIdRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentIdExpandHumanRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentIdExpandHumanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AttachmentIdExpandRawRouteHandler: RouteHandler<
  typeof getRestApi3AttachmentIdExpandRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AuditingRecordRouteHandler: RouteHandler<
  typeof getRestApi3AuditingRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3AvatarTypeSystemRouteHandler: RouteHandler<
  typeof getRestApi3AvatarTypeSystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesDeleteRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3BulkIssuesFieldsRouteHandler: RouteHandler<
  typeof getRestApi3BulkIssuesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesFieldsRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesMoveRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3BulkIssuesTransitionRouteHandler: RouteHandler<
  typeof getRestApi3BulkIssuesTransitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesTransitionRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesTransitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesUnwatchRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesUnwatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3BulkIssuesWatchRouteHandler: RouteHandler<
  typeof postRestApi3BulkIssuesWatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3BulkQueueTaskIdRouteHandler: RouteHandler<
  typeof getRestApi3BulkQueueTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ChangelogBulkfetchRouteHandler: RouteHandler<
  typeof postRestApi3ChangelogBulkfetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ClassificationLevelsRouteHandler: RouteHandler<
  typeof getRestApi3ClassificationLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3CommentListRouteHandler: RouteHandler<
  typeof postRestApi3CommentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3CommentCommentIdPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3CommentCommentIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3CommentCommentIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3CommentCommentIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3CommentCommentIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3CommentCommentIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3CommentCommentIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ComponentRouteHandler: RouteHandler<
  typeof getRestApi3ComponentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ComponentRouteHandler: RouteHandler<
  typeof postRestApi3ComponentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ComponentIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ComponentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ComponentIdRouteHandler: RouteHandler<
  typeof getRestApi3ComponentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ComponentIdRouteHandler: RouteHandler<
  typeof putRestApi3ComponentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ComponentIdRelatedIssueCountsRouteHandler: RouteHandler<
  typeof getRestApi3ComponentIdRelatedIssueCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ConfigFieldschemesRouteHandler: RouteHandler<
  typeof postRestApi3ConfigFieldschemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ConfigFieldschemesFieldsRouteHandler: RouteHandler<
  typeof deleteRestApi3ConfigFieldschemesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigFieldschemesFieldsRouteHandler: RouteHandler<
  typeof putRestApi3ConfigFieldschemesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ConfigFieldschemesFieldsParametersRouteHandler: RouteHandler<
  typeof deleteRestApi3ConfigFieldschemesFieldsParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigFieldschemesFieldsParametersRouteHandler: RouteHandler<
  typeof putRestApi3ConfigFieldschemesFieldsParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesProjectsRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigFieldschemesProjectsRouteHandler: RouteHandler<
  typeof putRestApi3ConfigFieldschemesProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ConfigFieldschemesIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ConfigFieldschemesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesIdRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigFieldschemesIdRouteHandler: RouteHandler<
  typeof putRestApi3ConfigFieldschemesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ConfigFieldschemesIdCloneRouteHandler: RouteHandler<
  typeof postRestApi3ConfigFieldschemesIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesIdFieldsRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesIdFieldsFieldIdParametersRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesIdFieldsFieldIdParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigFieldschemesIdProjectsRouteHandler: RouteHandler<
  typeof getRestApi3ConfigFieldschemesIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigurationRouteHandler: RouteHandler<
  typeof getRestApi3ConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigurationTimetrackingRouteHandler: RouteHandler<
  typeof getRestApi3ConfigurationTimetrackingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigurationTimetrackingRouteHandler: RouteHandler<
  typeof putRestApi3ConfigurationTimetrackingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigurationTimetrackingListRouteHandler: RouteHandler<
  typeof getRestApi3ConfigurationTimetrackingListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ConfigurationTimetrackingOptionsRouteHandler: RouteHandler<
  typeof getRestApi3ConfigurationTimetrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ConfigurationTimetrackingOptionsRouteHandler: RouteHandler<
  typeof putRestApi3ConfigurationTimetrackingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3CustomFieldOptionIdRouteHandler: RouteHandler<
  typeof getRestApi3CustomFieldOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardRouteHandler: RouteHandler<
  typeof getRestApi3DashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3DashboardRouteHandler: RouteHandler<
  typeof postRestApi3DashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3DashboardBulkEditRouteHandler: RouteHandler<
  typeof putRestApi3DashboardBulkEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardGadgetsRouteHandler: RouteHandler<
  typeof getRestApi3DashboardGadgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardSearchRouteHandler: RouteHandler<
  typeof getRestApi3DashboardSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardDashboardIdGadgetRouteHandler: RouteHandler<
  typeof getRestApi3DashboardDashboardIdGadgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3DashboardDashboardIdGadgetRouteHandler: RouteHandler<
  typeof postRestApi3DashboardDashboardIdGadgetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3DashboardDashboardIdGadgetGadgetIdRouteHandler: RouteHandler<
  typeof deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3DashboardDashboardIdGadgetGadgetIdRouteHandler: RouteHandler<
  typeof putRestApi3DashboardDashboardIdGadgetGadgetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardDashboardIdItemsItemIdPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3DashboardDashboardIdItemsItemIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3DashboardIdRouteHandler: RouteHandler<
  typeof deleteRestApi3DashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DashboardIdRouteHandler: RouteHandler<
  typeof getRestApi3DashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3DashboardIdRouteHandler: RouteHandler<
  typeof putRestApi3DashboardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3DashboardIdCopyRouteHandler: RouteHandler<
  typeof postRestApi3DashboardIdCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DataPolicyRouteHandler: RouteHandler<
  typeof getRestApi3DataPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3DataPolicyProjectRouteHandler: RouteHandler<
  typeof getRestApi3DataPolicyProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3EventsRouteHandler: RouteHandler<typeof getRestApi3EventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3ExpressionAnalyseRouteHandler: RouteHandler<
  typeof postRestApi3ExpressionAnalyseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ExpressionEvalRouteHandler: RouteHandler<
  typeof postRestApi3ExpressionEvalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ExpressionEvaluateRouteHandler: RouteHandler<
  typeof postRestApi3ExpressionEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldRouteHandler: RouteHandler<typeof getRestApi3FieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldRouteHandler: RouteHandler<typeof postRestApi3FieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldAssociationRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldAssociationRouteHandler: RouteHandler<
  typeof putRestApi3FieldAssociationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldSearchRouteHandler: RouteHandler<
  typeof getRestApi3FieldSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldSearchTrashedRouteHandler: RouteHandler<
  typeof getRestApi3FieldSearchTrashedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdAssociationProjectRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdAssociationProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldIdContextRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldIdContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextDefaultValueRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextDefaultValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextDefaultValueRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextDefaultValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextDefaultValuesRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextDefaultValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextDefaultValuesRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextDefaultValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextIssuetypemappingRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextIssuetypemappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldIdContextMappingRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldIdContextMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextProjectmappingRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextProjectmappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldFieldIdContextContextIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldFieldIdContextContextIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextContextIdRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextContextIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextContextIdIssuetypeRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextContextIdIssuetypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextContextIdOptionRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextContextIdOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldIdContextContextIdOptionRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldIdContextContextIdOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextContextIdOptionRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextContextIdOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextContextIdOptionMoveRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextContextIdOptionMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdIssueRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdIssueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldIdContextContextIdProjectRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldIdContextContextIdProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldIdContextContextIdProjectRemoveRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldIdContextContextIdProjectRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdContextsRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldIdScreensRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldIdScreensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldKeyOptionRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldKeyOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldFieldKeyOptionRouteHandler: RouteHandler<
  typeof postRestApi3FieldFieldKeyOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldKeyOptionSuggestionsEditRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldKeyOptionSuggestionsEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldKeyOptionSuggestionsSearchRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldKeyOptionSuggestionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldFieldKeyOptionOptionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldFieldKeyOptionOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldFieldKeyOptionOptionIdRouteHandler: RouteHandler<
  typeof getRestApi3FieldFieldKeyOptionOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldFieldKeyOptionOptionIdRouteHandler: RouteHandler<
  typeof putRestApi3FieldFieldKeyOptionOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldFieldKeyOptionOptionIdIssueRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldFieldKeyOptionOptionIdIssueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldIdRestoreRouteHandler: RouteHandler<
  typeof postRestApi3FieldIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldIdTrashRouteHandler: RouteHandler<
  typeof postRestApi3FieldIdTrashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldconfigurationRouteHandler: RouteHandler<
  typeof getRestApi3FieldconfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldconfigurationRouteHandler: RouteHandler<
  typeof postRestApi3FieldconfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldconfigurationIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldconfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldconfigurationIdRouteHandler: RouteHandler<
  typeof putRestApi3FieldconfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldconfigurationIdFieldsRouteHandler: RouteHandler<
  typeof getRestApi3FieldconfigurationIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldconfigurationIdFieldsRouteHandler: RouteHandler<
  typeof putRestApi3FieldconfigurationIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldconfigurationschemeRouteHandler: RouteHandler<
  typeof getRestApi3FieldconfigurationschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldconfigurationschemeRouteHandler: RouteHandler<
  typeof postRestApi3FieldconfigurationschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldconfigurationschemeMappingRouteHandler: RouteHandler<
  typeof getRestApi3FieldconfigurationschemeMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FieldconfigurationschemeProjectRouteHandler: RouteHandler<
  typeof getRestApi3FieldconfigurationschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldconfigurationschemeProjectRouteHandler: RouteHandler<
  typeof putRestApi3FieldconfigurationschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FieldconfigurationschemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FieldconfigurationschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldconfigurationschemeIdRouteHandler: RouteHandler<
  typeof putRestApi3FieldconfigurationschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FieldconfigurationschemeIdMappingRouteHandler: RouteHandler<
  typeof putRestApi3FieldconfigurationschemeIdMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FieldconfigurationschemeIdMappingDeleteRouteHandler: RouteHandler<
  typeof postRestApi3FieldconfigurationschemeIdMappingDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FilterRouteHandler: RouteHandler<typeof postRestApi3FilterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterDefaultShareScopeRouteHandler: RouteHandler<
  typeof getRestApi3FilterDefaultShareScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FilterDefaultShareScopeRouteHandler: RouteHandler<
  typeof putRestApi3FilterDefaultShareScopeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterFavouriteRouteHandler: RouteHandler<
  typeof getRestApi3FilterFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterMyRouteHandler: RouteHandler<
  typeof getRestApi3FilterMyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterSearchRouteHandler: RouteHandler<
  typeof getRestApi3FilterSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FilterIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterIdRouteHandler: RouteHandler<
  typeof getRestApi3FilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FilterIdRouteHandler: RouteHandler<
  typeof putRestApi3FilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FilterIdColumnsRouteHandler: RouteHandler<
  typeof deleteRestApi3FilterIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterIdColumnsRouteHandler: RouteHandler<
  typeof getRestApi3FilterIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FilterIdColumnsRouteHandler: RouteHandler<
  typeof putRestApi3FilterIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FilterIdFavouriteRouteHandler: RouteHandler<
  typeof deleteRestApi3FilterIdFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FilterIdFavouriteRouteHandler: RouteHandler<
  typeof putRestApi3FilterIdFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3FilterIdOwnerRouteHandler: RouteHandler<
  typeof putRestApi3FilterIdOwnerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterIdPermissionRouteHandler: RouteHandler<
  typeof getRestApi3FilterIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3FilterIdPermissionRouteHandler: RouteHandler<
  typeof postRestApi3FilterIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3FilterIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3FilterIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3FilterIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof getRestApi3FilterIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ForgePanelActionBulkAsyncRouteHandler: RouteHandler<
  typeof postRestApi3ForgePanelActionBulkAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ForgePanelActionBulkStatusRouteHandler: RouteHandler<
  typeof postRestApi3ForgePanelActionBulkStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3GroupRouteHandler: RouteHandler<
  typeof deleteRestApi3GroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3GroupRouteHandler: RouteHandler<typeof getRestApi3GroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3GroupRouteHandler: RouteHandler<typeof postRestApi3GroupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3GroupBulkRouteHandler: RouteHandler<
  typeof getRestApi3GroupBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3GroupMemberRouteHandler: RouteHandler<
  typeof getRestApi3GroupMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3GroupUserRouteHandler: RouteHandler<
  typeof deleteRestApi3GroupUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3GroupUserRouteHandler: RouteHandler<
  typeof postRestApi3GroupUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3GroupsPickerRouteHandler: RouteHandler<
  typeof getRestApi3GroupsPickerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3GroupuserpickerRouteHandler: RouteHandler<
  typeof getRestApi3GroupuserpickerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3InstanceLicenseRouteHandler: RouteHandler<
  typeof getRestApi3InstanceLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3InvalidJqlsAccessLogRouteHandler: RouteHandler<
  typeof getRestApi3InvalidJqlsAccessLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueRouteHandler: RouteHandler<typeof postRestApi3IssueRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueArchiveRouteHandler: RouteHandler<
  typeof postRestApi3IssueArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueArchiveRouteHandler: RouteHandler<
  typeof putRestApi3IssueArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueBulkRouteHandler: RouteHandler<
  typeof postRestApi3IssueBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueBulkfetchRouteHandler: RouteHandler<
  typeof postRestApi3IssueBulkfetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueCreatemetaRouteHandler: RouteHandler<
  typeof getRestApi3IssueCreatemetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesRouteHandler: RouteHandler<
  typeof getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesIssueTypeIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueCreatemetaProjectIdOrKeyIssuetypesIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueLimitAdfReportRouteHandler: RouteHandler<
  typeof getRestApi3IssueLimitAdfReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueLimitReportRouteHandler: RouteHandler<
  typeof getRestApi3IssueLimitReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuePickerRouteHandler: RouteHandler<
  typeof getRestApi3IssuePickerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuePropertiesRouteHandler: RouteHandler<
  typeof postRestApi3IssuePropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuePropertiesMultiRouteHandler: RouteHandler<
  typeof postRestApi3IssuePropertiesMultiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuePropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuePropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuePropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3IssuePropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueUnarchiveRouteHandler: RouteHandler<
  typeof putRestApi3IssueUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueWatchingRouteHandler: RouteHandler<
  typeof postRestApi3IssueWatchingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyAssigneeRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyAssigneeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyAttachmentsRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyChangelogRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyChangelogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyChangelogListRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyChangelogListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyCommentRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyCommentRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyCommentIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyCommentIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyCommentIdRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyEditmetaRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyEditmetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyNotifyRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyRemotelinkRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyRemotelinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyRemotelinkRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyRemotelinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyRemotelinkRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyRemotelinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyTransitionsRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyTransitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyTransitionsRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyTransitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyVotesRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyVotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyVotesRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyVotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyVotesRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyVotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyWatchersRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyWatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyWatchersRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyWatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyWatchersRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyWatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyWorklogRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyWorklogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyWorklogRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyWorklogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyWorklogRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyWorklogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueIssueIdOrKeyWorklogMoveRouteHandler: RouteHandler<
  typeof postRestApi3IssueIssueIdOrKeyWorklogMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyWorklogIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyWorklogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyWorklogIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyWorklogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyWorklogIdRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyWorklogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueLinkRouteHandler: RouteHandler<
  typeof postRestApi3IssueLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueLinkLinkIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueLinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueLinkLinkIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueLinkLinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueLinkTypeRouteHandler: RouteHandler<
  typeof getRestApi3IssueLinkTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssueLinkTypeRouteHandler: RouteHandler<
  typeof postRestApi3IssueLinkTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssueLinkTypeIssueLinkTypeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssueLinkTypeIssueLinkTypeIdRouteHandler: RouteHandler<
  typeof getRestApi3IssueLinkTypeIssueLinkTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssueLinkTypeIssueLinkTypeIdRouteHandler: RouteHandler<
  typeof putRestApi3IssueLinkTypeIssueLinkTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesArchiveExportRouteHandler: RouteHandler<
  typeof putRestApi3IssuesArchiveExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuesecurityschemesRouteHandler: RouteHandler<
  typeof postRestApi3IssuesecurityschemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesLevelRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesLevelDefaultRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesLevelDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesLevelMemberRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesLevelMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesProjectRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesProjectRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesSearchRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesIdRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesIdRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRouteHandler: RouteHandler<
  typeof getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuesecurityschemesSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuesecurityschemesSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesSchemeIdLevelRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesSchemeIdLevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberRouteHandler: RouteHandler<
  typeof putRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuesecurityschemesSchemeIdLevelLevelIdMemberMemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuetypeRouteHandler: RouteHandler<
  typeof postRestApi3IssuetypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeProjectRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuetypeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuetypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeIdRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeIdRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeIdAlternativesRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeIdAlternativesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuetypeIdAvatar2RouteHandler: RouteHandler<
  typeof postRestApi3IssuetypeIdAvatar2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeIssueTypeIdPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeIssueTypeIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeschemeRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuetypeschemeRouteHandler: RouteHandler<
  typeof postRestApi3IssuetypeschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeschemeMappingRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeschemeMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypeschemeProjectRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypeschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeschemeProjectRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeschemeIssueTypeSchemeIdRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeschemeIssueTypeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypescreenschemeRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypescreenschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuetypescreenschemeRouteHandler: RouteHandler<
  typeof postRestApi3IssuetypescreenschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypescreenschemeMappingRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypescreenschemeMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypescreenschemeProjectRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypescreenschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypescreenschemeProjectRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypescreenschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRouteHandler: RouteHandler<
  typeof putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRouteHandler: RouteHandler<
  typeof postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRouteHandler: RouteHandler<
  typeof getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3JqlAutocompletedataRouteHandler: RouteHandler<
  typeof getRestApi3JqlAutocompletedataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlAutocompletedataRouteHandler: RouteHandler<
  typeof postRestApi3JqlAutocompletedataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3JqlAutocompletedataSuggestionsRouteHandler: RouteHandler<
  typeof getRestApi3JqlAutocompletedataSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3JqlFunctionComputationRouteHandler: RouteHandler<
  typeof getRestApi3JqlFunctionComputationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlFunctionComputationRouteHandler: RouteHandler<
  typeof postRestApi3JqlFunctionComputationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlFunctionComputationSearchRouteHandler: RouteHandler<
  typeof postRestApi3JqlFunctionComputationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlMatchRouteHandler: RouteHandler<
  typeof postRestApi3JqlMatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlParseRouteHandler: RouteHandler<
  typeof postRestApi3JqlParseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlPdcleanerRouteHandler: RouteHandler<
  typeof postRestApi3JqlPdcleanerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3JqlSanitizeRouteHandler: RouteHandler<
  typeof postRestApi3JqlSanitizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3LabelRouteHandler: RouteHandler<typeof getRestApi3LabelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3LicenseApproximateLicenseCountRouteHandler: RouteHandler<
  typeof getRestApi3LicenseApproximateLicenseCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRouteHandler: RouteHandler<
  typeof getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3MypermissionsRouteHandler: RouteHandler<
  typeof getRestApi3MypermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3MypreferencesRouteHandler: RouteHandler<
  typeof deleteRestApi3MypreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3MypreferencesRouteHandler: RouteHandler<
  typeof getRestApi3MypreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3MypreferencesRouteHandler: RouteHandler<
  typeof putRestApi3MypreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3MypreferencesLocaleRouteHandler: RouteHandler<
  typeof getRestApi3MypreferencesLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3MypreferencesLocaleRouteHandler: RouteHandler<
  typeof putRestApi3MypreferencesLocaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3MyselfRouteHandler: RouteHandler<typeof getRestApi3MyselfRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3NotificationschemeRouteHandler: RouteHandler<
  typeof getRestApi3NotificationschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3NotificationschemeRouteHandler: RouteHandler<
  typeof postRestApi3NotificationschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3NotificationschemeProjectRouteHandler: RouteHandler<
  typeof getRestApi3NotificationschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3NotificationschemeIdRouteHandler: RouteHandler<
  typeof getRestApi3NotificationschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3NotificationschemeIdRouteHandler: RouteHandler<
  typeof putRestApi3NotificationschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3NotificationschemeIdNotificationRouteHandler: RouteHandler<
  typeof putRestApi3NotificationschemeIdNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3NotificationschemeNotificationSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3NotificationschemeNotificationSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRouteHandler: RouteHandler<
  typeof deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PermissionsRouteHandler: RouteHandler<
  typeof getRestApi3PermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PermissionsCheckRouteHandler: RouteHandler<
  typeof postRestApi3PermissionsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PermissionsProjectRouteHandler: RouteHandler<
  typeof postRestApi3PermissionsProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PermissionschemeRouteHandler: RouteHandler<
  typeof getRestApi3PermissionschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PermissionschemeRouteHandler: RouteHandler<
  typeof postRestApi3PermissionschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PermissionschemeSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PermissionschemeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PermissionschemeSchemeIdRouteHandler: RouteHandler<
  typeof getRestApi3PermissionschemeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PermissionschemeSchemeIdRouteHandler: RouteHandler<
  typeof putRestApi3PermissionschemeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PermissionschemeSchemeIdPermissionRouteHandler: RouteHandler<
  typeof getRestApi3PermissionschemeSchemeIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PermissionschemeSchemeIdPermissionRouteHandler: RouteHandler<
  typeof postRestApi3PermissionschemeSchemeIdPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRouteHandler: RouteHandler<
  typeof getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PlansPlanRouteHandler: RouteHandler<
  typeof getRestApi3PlansPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PlansPlanRouteHandler: RouteHandler<
  typeof postRestApi3PlansPlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PlansPlanPlanIdRouteHandler: RouteHandler<
  typeof getRestApi3PlansPlanPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PlansPlanPlanIdRouteHandler: RouteHandler<
  typeof putRestApi3PlansPlanPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PlansPlanPlanIdArchiveRouteHandler: RouteHandler<
  typeof putRestApi3PlansPlanPlanIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PlansPlanPlanIdDuplicateRouteHandler: RouteHandler<
  typeof postRestApi3PlansPlanPlanIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PlansPlanPlanIdTeamRouteHandler: RouteHandler<
  typeof getRestApi3PlansPlanPlanIdTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PlansPlanPlanIdTeamAtlassianRouteHandler: RouteHandler<
  typeof postRestApi3PlansPlanPlanIdTeamAtlassianRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRouteHandler: RouteHandler<
  typeof getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRouteHandler: RouteHandler<
  typeof putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PlansPlanPlanIdTeamPlanonlyRouteHandler: RouteHandler<
  typeof postRestApi3PlansPlanPlanIdTeamPlanonlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRouteHandler: RouteHandler<
  typeof getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRouteHandler: RouteHandler<
  typeof putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PlansPlanPlanIdTrashRouteHandler: RouteHandler<
  typeof putRestApi3PlansPlanPlanIdTrashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PoliciesRouteHandler: RouteHandler<
  typeof getRestApi3PoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PoliciesProjectProjectIdOrKeyRouteHandler: RouteHandler<
  typeof getRestApi3PoliciesProjectProjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PoliciesProjectProjectIdOrKeyPoliciesRouteHandler: RouteHandler<
  typeof putRestApi3PoliciesProjectProjectIdOrKeyPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PoliciesProjectProjectIdOrKeyRulesRouteHandler: RouteHandler<
  typeof getRestApi3PoliciesProjectProjectIdOrKeyRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PoliciesProjectProjectIdOrKeyValidateRouteHandler: RouteHandler<
  typeof postRestApi3PoliciesProjectProjectIdOrKeyValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PoliciesPolicyIdApplyRouteHandler: RouteHandler<
  typeof postRestApi3PoliciesPolicyIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PoliciesPolicyIdRemoveRouteHandler: RouteHandler<
  typeof postRestApi3PoliciesPolicyIdRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityRouteHandler: RouteHandler<
  typeof getRestApi3PriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PriorityRouteHandler: RouteHandler<
  typeof postRestApi3PriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PriorityDefaultRouteHandler: RouteHandler<
  typeof putRestApi3PriorityDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PriorityMoveRouteHandler: RouteHandler<
  typeof putRestApi3PriorityMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PrioritySearchRouteHandler: RouteHandler<
  typeof getRestApi3PrioritySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PriorityIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PriorityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityIdRouteHandler: RouteHandler<
  typeof getRestApi3PriorityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PriorityIdRouteHandler: RouteHandler<
  typeof putRestApi3PriorityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityschemeRouteHandler: RouteHandler<
  typeof getRestApi3PriorityschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PriorityschemeRouteHandler: RouteHandler<
  typeof postRestApi3PriorityschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3PriorityschemeMappingsRouteHandler: RouteHandler<
  typeof postRestApi3PriorityschemeMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityschemePrioritiesAvailableRouteHandler: RouteHandler<
  typeof getRestApi3PriorityschemePrioritiesAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3PriorityschemeSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3PriorityschemeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3PriorityschemeSchemeIdRouteHandler: RouteHandler<
  typeof putRestApi3PriorityschemeSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityschemeSchemeIdPrioritiesRouteHandler: RouteHandler<
  typeof getRestApi3PriorityschemeSchemeIdPrioritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3PriorityschemeSchemeIdProjectsRouteHandler: RouteHandler<
  typeof getRestApi3PriorityschemeSchemeIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectRouteHandler: RouteHandler<typeof getRestApi3ProjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectRouteHandler: RouteHandler<
  typeof postRestApi3ProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectTemplateRouteHandler: RouteHandler<
  typeof postRestApi3ProjectTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectTemplateEditTemplateRouteHandler: RouteHandler<
  typeof putRestApi3ProjectTemplateEditTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectTemplateLiveTemplateRouteHandler: RouteHandler<
  typeof getRestApi3ProjectTemplateLiveTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectTemplateRemoveTemplateRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectTemplateRemoveTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectTemplateSaveTemplateRouteHandler: RouteHandler<
  typeof postRestApi3ProjectTemplateSaveTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectRecentRouteHandler: RouteHandler<
  typeof getRestApi3ProjectRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectSearchRouteHandler: RouteHandler<
  typeof getRestApi3ProjectSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectTypeRouteHandler: RouteHandler<
  typeof getRestApi3ProjectTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectTypeAccessibleRouteHandler: RouteHandler<
  typeof getRestApi3ProjectTypeAccessibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectTypeProjectTypeKeyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectTypeProjectTypeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectTypeProjectTypeKeyAccessibleRouteHandler: RouteHandler<
  typeof getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectProjectIdOrKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectProjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectProjectIdOrKeyArchiveRouteHandler: RouteHandler<
  typeof postRestApi3ProjectProjectIdOrKeyArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyAvatarRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectProjectIdOrKeyAvatarIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectProjectIdOrKeyAvatar2RouteHandler: RouteHandler<
  typeof postRestApi3ProjectProjectIdOrKeyAvatar2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyAvatarsRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyAvatarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyClassificationConfigRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyClassificationConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyComponentRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyComponentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyComponentsRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectProjectIdOrKeyDeleteRouteHandler: RouteHandler<
  typeof postRestApi3ProjectProjectIdOrKeyDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyFeaturesRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectProjectIdOrKeyRestoreRouteHandler: RouteHandler<
  typeof postRestApi3ProjectProjectIdOrKeyRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyRoleRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectProjectIdOrKeyRoleIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyRoleIdRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectProjectIdOrKeyRoleIdRouteHandler: RouteHandler<
  typeof postRestApi3ProjectProjectIdOrKeyRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdOrKeyRoleIdRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdOrKeyRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyRoledetailsRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyRoledetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyStatusesRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyVersionRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdOrKeyVersionsRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdOrKeyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdEmailRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectIdEmailRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectIdEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectIdHierarchyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectIdHierarchyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectKeyOrIdNotificationschemeRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectKeyOrIdNotificationschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectKeyOrIdPermissionschemeRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectKeyOrIdPermissionschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectProjectKeyOrIdPermissionschemeRouteHandler: RouteHandler<
  typeof putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectProjectKeyOrIdSecuritylevelRouteHandler: RouteHandler<
  typeof getRestApi3ProjectProjectKeyOrIdSecuritylevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectCategoryRouteHandler: RouteHandler<
  typeof getRestApi3ProjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ProjectCategoryRouteHandler: RouteHandler<
  typeof postRestApi3ProjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ProjectCategoryIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ProjectCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectCategoryIdRouteHandler: RouteHandler<
  typeof getRestApi3ProjectCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ProjectCategoryIdRouteHandler: RouteHandler<
  typeof putRestApi3ProjectCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectsFieldsRouteHandler: RouteHandler<
  typeof getRestApi3ProjectsFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectvalidateKeyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectvalidateKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectvalidateValidProjectKeyRouteHandler: RouteHandler<
  typeof getRestApi3ProjectvalidateValidProjectKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ProjectvalidateValidProjectNameRouteHandler: RouteHandler<
  typeof getRestApi3ProjectvalidateValidProjectNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3RedactRouteHandler: RouteHandler<typeof postRestApi3RedactRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3RedactStatusJobIdRouteHandler: RouteHandler<
  typeof getRestApi3RedactStatusJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ResolutionRouteHandler: RouteHandler<
  typeof getRestApi3ResolutionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ResolutionRouteHandler: RouteHandler<
  typeof postRestApi3ResolutionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ResolutionDefaultRouteHandler: RouteHandler<
  typeof putRestApi3ResolutionDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ResolutionMoveRouteHandler: RouteHandler<
  typeof putRestApi3ResolutionMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ResolutionSearchRouteHandler: RouteHandler<
  typeof getRestApi3ResolutionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ResolutionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ResolutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ResolutionIdRouteHandler: RouteHandler<
  typeof getRestApi3ResolutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ResolutionIdRouteHandler: RouteHandler<
  typeof putRestApi3ResolutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3RoleRouteHandler: RouteHandler<typeof getRestApi3RoleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3RoleRouteHandler: RouteHandler<typeof postRestApi3RoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3RoleIdRouteHandler: RouteHandler<
  typeof deleteRestApi3RoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3RoleIdRouteHandler: RouteHandler<typeof getRestApi3RoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3RoleIdRouteHandler: RouteHandler<typeof postRestApi3RoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRestApi3RoleIdRouteHandler: RouteHandler<typeof putRestApi3RoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3RoleIdActorsRouteHandler: RouteHandler<
  typeof deleteRestApi3RoleIdActorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3RoleIdActorsRouteHandler: RouteHandler<
  typeof getRestApi3RoleIdActorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3RoleIdActorsRouteHandler: RouteHandler<
  typeof postRestApi3RoleIdActorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreensRouteHandler: RouteHandler<typeof getRestApi3ScreensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensRouteHandler: RouteHandler<
  typeof postRestApi3ScreensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensAddToDefaultFieldIdRouteHandler: RouteHandler<
  typeof postRestApi3ScreensAddToDefaultFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreensTabsRouteHandler: RouteHandler<
  typeof getRestApi3ScreensTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ScreensScreenIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ScreensScreenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ScreensScreenIdRouteHandler: RouteHandler<
  typeof putRestApi3ScreensScreenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreensScreenIdAvailableFieldsRouteHandler: RouteHandler<
  typeof getRestApi3ScreensScreenIdAvailableFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreensScreenIdTabsRouteHandler: RouteHandler<
  typeof getRestApi3ScreensScreenIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensScreenIdTabsRouteHandler: RouteHandler<
  typeof postRestApi3ScreensScreenIdTabsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ScreensScreenIdTabsTabIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ScreensScreenIdTabsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ScreensScreenIdTabsTabIdRouteHandler: RouteHandler<
  typeof putRestApi3ScreensScreenIdTabsTabIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreensScreenIdTabsTabIdFieldsRouteHandler: RouteHandler<
  typeof getRestApi3ScreensScreenIdTabsTabIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensScreenIdTabsTabIdFieldsRouteHandler: RouteHandler<
  typeof postRestApi3ScreensScreenIdTabsTabIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRouteHandler: RouteHandler<
  typeof postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreensScreenIdTabsTabIdMovePosRouteHandler: RouteHandler<
  typeof postRestApi3ScreensScreenIdTabsTabIdMovePosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ScreenschemeRouteHandler: RouteHandler<
  typeof getRestApi3ScreenschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3ScreenschemeRouteHandler: RouteHandler<
  typeof postRestApi3ScreenschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3ScreenschemeScreenSchemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3ScreenschemeScreenSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3ScreenschemeScreenSchemeIdRouteHandler: RouteHandler<
  typeof putRestApi3ScreenschemeScreenSchemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3SearchRouteHandler: RouteHandler<typeof getRestApi3SearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3SearchRouteHandler: RouteHandler<typeof postRestApi3SearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3SearchApproximateCountRouteHandler: RouteHandler<
  typeof postRestApi3SearchApproximateCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3SearchJqlRouteHandler: RouteHandler<
  typeof getRestApi3SearchJqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3SearchJqlRouteHandler: RouteHandler<
  typeof postRestApi3SearchJqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3SecuritylevelIdRouteHandler: RouteHandler<
  typeof getRestApi3SecuritylevelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3ServerInfoRouteHandler: RouteHandler<
  typeof getRestApi3ServerInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3SettingsColumnsRouteHandler: RouteHandler<
  typeof getRestApi3SettingsColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3SettingsColumnsRouteHandler: RouteHandler<
  typeof putRestApi3SettingsColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusRouteHandler: RouteHandler<typeof getRestApi3StatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusIdOrNameRouteHandler: RouteHandler<
  typeof getRestApi3StatusIdOrNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatuscategoryRouteHandler: RouteHandler<
  typeof getRestApi3StatuscategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatuscategoryIdOrKeyRouteHandler: RouteHandler<
  typeof getRestApi3StatuscategoryIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3StatusesRouteHandler: RouteHandler<
  typeof deleteRestApi3StatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesRouteHandler: RouteHandler<
  typeof getRestApi3StatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3StatusesRouteHandler: RouteHandler<
  typeof postRestApi3StatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3StatusesRouteHandler: RouteHandler<
  typeof putRestApi3StatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesByNamesRouteHandler: RouteHandler<
  typeof getRestApi3StatusesByNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesSearchRouteHandler: RouteHandler<
  typeof getRestApi3StatusesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesStatusIdProjectProjectIdIssueTypeUsagesRouteHandler: RouteHandler<
  typeof getRestApi3StatusesStatusIdProjectProjectIdIssueTypeUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesStatusIdProjectUsagesRouteHandler: RouteHandler<
  typeof getRestApi3StatusesStatusIdProjectUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3StatusesStatusIdWorkflowUsagesRouteHandler: RouteHandler<
  typeof getRestApi3StatusesStatusIdWorkflowUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3TaskTaskIdRouteHandler: RouteHandler<
  typeof getRestApi3TaskTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3TaskTaskIdCancelRouteHandler: RouteHandler<
  typeof postRestApi3TaskTaskIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UiModificationsRouteHandler: RouteHandler<
  typeof getRestApi3UiModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3UiModificationsRouteHandler: RouteHandler<
  typeof postRestApi3UiModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3UiModificationsUiModificationIdRouteHandler: RouteHandler<
  typeof deleteRestApi3UiModificationsUiModificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3UiModificationsUiModificationIdRouteHandler: RouteHandler<
  typeof putRestApi3UiModificationsUiModificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRouteHandler: RouteHandler<
  typeof getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRouteHandler: RouteHandler<
  typeof postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRouteHandler: RouteHandler<
  typeof deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UniversalAvatarViewTypeTypeRouteHandler: RouteHandler<
  typeof getRestApi3UniversalAvatarViewTypeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UniversalAvatarViewTypeTypeAvatarIdRouteHandler: RouteHandler<
  typeof getRestApi3UniversalAvatarViewTypeTypeAvatarIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRouteHandler: RouteHandler<
  typeof getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3UserRouteHandler: RouteHandler<typeof deleteRestApi3UserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserRouteHandler: RouteHandler<typeof getRestApi3UserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3UserRouteHandler: RouteHandler<typeof postRestApi3UserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserAssignableMultiProjectSearchRouteHandler: RouteHandler<
  typeof getRestApi3UserAssignableMultiProjectSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserAssignableSearchRouteHandler: RouteHandler<
  typeof getRestApi3UserAssignableSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserBulkRouteHandler: RouteHandler<
  typeof getRestApi3UserBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserBulkMigrationRouteHandler: RouteHandler<
  typeof getRestApi3UserBulkMigrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3UserColumnsRouteHandler: RouteHandler<
  typeof deleteRestApi3UserColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserColumnsRouteHandler: RouteHandler<
  typeof getRestApi3UserColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3UserColumnsRouteHandler: RouteHandler<
  typeof putRestApi3UserColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserEmailRouteHandler: RouteHandler<
  typeof getRestApi3UserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserEmailBulkRouteHandler: RouteHandler<
  typeof getRestApi3UserEmailBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserGroupsRouteHandler: RouteHandler<
  typeof getRestApi3UserGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserPermissionSearchRouteHandler: RouteHandler<
  typeof getRestApi3UserPermissionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserPickerRouteHandler: RouteHandler<
  typeof getRestApi3UserPickerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserPropertiesRouteHandler: RouteHandler<
  typeof getRestApi3UserPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3UserPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestApi3UserPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestApi3UserPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3UserPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestApi3UserPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserSearchRouteHandler: RouteHandler<
  typeof getRestApi3UserSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserSearchQueryRouteHandler: RouteHandler<
  typeof getRestApi3UserSearchQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserSearchQueryKeyRouteHandler: RouteHandler<
  typeof getRestApi3UserSearchQueryKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UserViewissueSearchRouteHandler: RouteHandler<
  typeof getRestApi3UserViewissueSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3UsersRouteHandler: RouteHandler<typeof getRestApi3UsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRestApi3UsersSearchRouteHandler: RouteHandler<
  typeof getRestApi3UsersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3VersionRouteHandler: RouteHandler<
  typeof postRestApi3VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3VersionIdRouteHandler: RouteHandler<
  typeof deleteRestApi3VersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3VersionIdRouteHandler: RouteHandler<
  typeof getRestApi3VersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3VersionIdRouteHandler: RouteHandler<
  typeof putRestApi3VersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3VersionIdMergetoMoveIssuesToRouteHandler: RouteHandler<
  typeof putRestApi3VersionIdMergetoMoveIssuesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3VersionIdMoveRouteHandler: RouteHandler<
  typeof postRestApi3VersionIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3VersionIdRelatedIssueCountsRouteHandler: RouteHandler<
  typeof getRestApi3VersionIdRelatedIssueCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3VersionIdRelatedworkRouteHandler: RouteHandler<
  typeof getRestApi3VersionIdRelatedworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3VersionIdRelatedworkRouteHandler: RouteHandler<
  typeof postRestApi3VersionIdRelatedworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3VersionIdRelatedworkRouteHandler: RouteHandler<
  typeof putRestApi3VersionIdRelatedworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3VersionIdRemoveAndSwapRouteHandler: RouteHandler<
  typeof postRestApi3VersionIdRemoveAndSwapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3VersionIdUnresolvedIssueCountRouteHandler: RouteHandler<
  typeof getRestApi3VersionIdUnresolvedIssueCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3VersionVersionIdRelatedworkRelatedWorkIdRouteHandler: RouteHandler<
  typeof deleteRestApi3VersionVersionIdRelatedworkRelatedWorkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WebhookRouteHandler: RouteHandler<
  typeof deleteRestApi3WebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WebhookRouteHandler: RouteHandler<typeof getRestApi3WebhookRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestApi3WebhookRouteHandler: RouteHandler<
  typeof postRestApi3WebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WebhookFailedRouteHandler: RouteHandler<
  typeof getRestApi3WebhookFailedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WebhookRefreshRouteHandler: RouteHandler<
  typeof putRestApi3WebhookRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowHistoryRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowHistoryListRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowHistoryListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowRuleConfigRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowRuleConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowRuleConfigRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowRuleConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowRuleConfigDeleteRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowRuleConfigDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowSearchRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowEntityIdRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsagesRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowWorkflowIdProjectProjectIdIssueTypeUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowWorkflowIdProjectUsagesRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowWorkflowIdProjectUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowWorkflowIdWorkflowSchemesRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowWorkflowIdWorkflowSchemesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowsCapabilitiesRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowsCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsCopyRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsCreateRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsCreateValidationRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsCreateValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowsDefaultEditorRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowsDefaultEditorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsPreviewRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowsSearchRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsUpdateRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowsUpdateValidationRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowsUpdateValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeProjectRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeProjectRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeProjectSwitchRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeProjectSwitchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeReadRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeUpdateRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeUpdateMappingsRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeUpdateMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeIdCreatedraftRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeIdCreatedraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdDefaultRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdDefaultRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdDefaultRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdDraftRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdDraftRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdDraftRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdDraftDefaultRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdDraftDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdDraftDefaultRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdDraftDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdDraftDefaultRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdDraftDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorkflowschemeIdDraftPublishRouteHandler: RouteHandler<
  typeof postRestApi3WorkflowschemeIdDraftPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdDraftWorkflowRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdDraftWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdDraftWorkflowRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdDraftWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdDraftWorkflowRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdDraftWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdIssuetypeIssueTypeRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestApi3WorkflowschemeIdWorkflowRouteHandler: RouteHandler<
  typeof deleteRestApi3WorkflowschemeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeIdWorkflowRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestApi3WorkflowschemeIdWorkflowRouteHandler: RouteHandler<
  typeof putRestApi3WorkflowschemeIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorkflowschemeWorkflowSchemeIdProjectUsagesRouteHandler: RouteHandler<
  typeof getRestApi3WorkflowschemeWorkflowSchemeIdProjectUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorklogDeletedRouteHandler: RouteHandler<
  typeof getRestApi3WorklogDeletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestApi3WorklogListRouteHandler: RouteHandler<
  typeof postRestApi3WorklogListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestApi3WorklogUpdatedRouteHandler: RouteHandler<
  typeof getRestApi3WorklogUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestAtlassianConnect1AddonsAddonKeyPropertiesRouteHandler: RouteHandler<
  typeof getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof deleteRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof getRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof postRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestAtlassianConnect1MigrationFieldRouteHandler: RouteHandler<
  typeof putRestAtlassianConnect1MigrationFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestAtlassianConnect1MigrationPropertiesEntityTypeRouteHandler: RouteHandler<
  typeof putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestAtlassianConnect1MigrationWorkflowRuleSearchRouteHandler: RouteHandler<
  typeof postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRouteHandler: RouteHandler<
  typeof getRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRouteHandler: RouteHandler<
  typeof postRestAtlassianConnect1MigrationConnectKeyJiraIssueFieldsKeyTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestAtlassianConnect1ServiceRegistryRouteHandler: RouteHandler<
  typeof getRestAtlassianConnect1ServiceRegistryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestForge1AppPropertiesRouteHandler: RouteHandler<
  typeof getRestForge1AppPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRestForge1AppPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof deleteRestForge1AppPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRestForge1AppPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof getRestForge1AppPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRestForge1AppPropertiesPropertyKeyRouteHandler: RouteHandler<
  typeof putRestForge1AppPropertiesPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRestInternalApiLatestWorklogBulkRouteHandler: RouteHandler<
  typeof postRestInternalApiLatestWorklogBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
