import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3AttachmentIdRoute,
  deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  deleteRestApi3ComponentIdRoute,
  deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  deleteRestApi3DashboardIdRoute,
  deleteRestApi3FieldconfigurationIdRoute,
  deleteRestApi3FieldconfigurationschemeIdRoute,
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
  deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  deleteRestApi3IssueLinkLinkIdRoute,
  deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  deleteRestApi3IssuePropertiesPropertyKeyRoute,
  deleteRestApi3IssuetypeIdRoute,
  deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute,
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute,
  deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute,
  deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute,
  deleteRestApi3MypreferencesLocaleRoute,
  deleteRestApi3MypreferencesRoute,
  deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute,
  deleteRestApi3NotificationschemeNotificationSchemeIdRoute,
  deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute,
  deleteRestApi3PermissionschemeSchemeIdRoute,
  deleteRestApi3PriorityIdRoute,
  deleteRestApi3ProjectCategoryIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  deleteRestApi3ProjectProjectIdOrKeyRoute,
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
  deleteRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  deleteRestAtlassianConnect1AppModuleDynamicRoute,
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
  getRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  getRestApi3CommentCommentIdPropertiesRoute,
  getRestApi3ComponentIdRelatedIssueCountsRoute,
  getRestApi3ComponentIdRoute,
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
  getRestApi3EventsRoute,
  getRestApi3FieldconfigurationIdFieldsRoute,
  getRestApi3FieldconfigurationRoute,
  getRestApi3FieldconfigurationschemeMappingRoute,
  getRestApi3FieldconfigurationschemeProjectRoute,
  getRestApi3FieldconfigurationschemeRoute,
  getRestApi3FieldFieldIdContextContextIdOptionRoute,
  getRestApi3FieldFieldIdContextDefaultValueRoute,
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
  getRestApi3FilterRoute,
  getRestApi3FilterSearchRoute,
  getRestApi3GroupBulkRoute,
  getRestApi3GroupMemberRoute,
  getRestApi3GroupRoute,
  getRestApi3GroupsPickerRoute,
  getRestApi3GroupuserpickerRoute,
  getRestApi3InstanceLicenseRoute,
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
  getRestApi3IssueLinkLinkIdRoute,
  getRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  getRestApi3IssueLinkTypeRoute,
  getRestApi3IssuePickerRoute,
  getRestApi3IssuesecurityschemesIdRoute,
  getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute,
  getRestApi3IssuesecurityschemesRoute,
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
  getRestApi3PriorityIdRoute,
  getRestApi3PriorityRoute,
  getRestApi3PrioritySearchRoute,
  getRestApi3ProjectCategoryIdRoute,
  getRestApi3ProjectCategoryRoute,
  getRestApi3ProjectProjectIdEmailRoute,
  getRestApi3ProjectProjectIdHierarchyRoute,
  getRestApi3ProjectProjectIdOrKeyAvatarsRoute,
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
  getRestApi3ProjectTypeAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyRoute,
  getRestApi3ProjectTypeRoute,
  getRestApi3ProjectvalidateKeyRoute,
  getRestApi3ProjectvalidateValidProjectKeyRoute,
  getRestApi3ProjectvalidateValidProjectNameRoute,
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
  getRestApi3SearchRoute,
  getRestApi3SecuritylevelIdRoute,
  getRestApi3ServerInfoRoute,
  getRestApi3SettingsColumnsRoute,
  getRestApi3StatuscategoryIdOrKeyRoute,
  getRestApi3StatuscategoryRoute,
  getRestApi3StatusesRoute,
  getRestApi3StatusesSearchRoute,
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
  getRestApi3VersionIdRoute,
  getRestApi3VersionIdUnresolvedIssueCountRoute,
  getRestApi3WebhookFailedRoute,
  getRestApi3WebhookRoute,
  getRestApi3WorkflowRoute,
  getRestApi3WorkflowRuleConfigRoute,
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
  getRestApi3WorkflowSearchRoute,
  getRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  getRestApi3WorklogDeletedRoute,
  getRestApi3WorklogUpdatedRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute,
  getRestAtlassianConnect1AppModuleDynamicRoute,
  postRestApi3AppFieldValueRoute,
  postRestApi3CommentListRoute,
  postRestApi3ComponentRoute,
  postRestApi3DashboardDashboardIdGadgetRoute,
  postRestApi3DashboardIdCopyRoute,
  postRestApi3DashboardRoute,
  postRestApi3ExpressionAnalyseRoute,
  postRestApi3ExpressionEvalRoute,
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
  postRestApi3GroupRoute,
  postRestApi3GroupUserRoute,
  postRestApi3IssueBulkRoute,
  postRestApi3IssueIssueIdOrKeyAttachmentsRoute,
  postRestApi3IssueIssueIdOrKeyChangelogListRoute,
  postRestApi3IssueIssueIdOrKeyCommentRoute,
  postRestApi3IssueIssueIdOrKeyNotifyRoute,
  postRestApi3IssueIssueIdOrKeyRemotelinkRoute,
  postRestApi3IssueIssueIdOrKeyTransitionsRoute,
  postRestApi3IssueIssueIdOrKeyVotesRoute,
  postRestApi3IssueIssueIdOrKeyWatchersRoute,
  postRestApi3IssueIssueIdOrKeyWorklogRoute,
  postRestApi3IssueLinkRoute,
  postRestApi3IssueLinkTypeRoute,
  postRestApi3IssuePropertiesMultiRoute,
  postRestApi3IssuePropertiesRoute,
  postRestApi3IssueRoute,
  postRestApi3IssuetypeIdAvatar2Route,
  postRestApi3IssuetypeRoute,
  postRestApi3IssuetypeschemeRoute,
  postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute,
  postRestApi3IssuetypescreenschemeRoute,
  postRestApi3IssueWatchingRoute,
  postRestApi3JqlAutocompletedataRoute,
  postRestApi3JqlFunctionComputationRoute,
  postRestApi3JqlMatchRoute,
  postRestApi3JqlParseRoute,
  postRestApi3JqlPdcleanerRoute,
  postRestApi3JqlSanitizeRoute,
  postRestApi3NotificationschemeRoute,
  postRestApi3PermissionsCheckRoute,
  postRestApi3PermissionschemeRoute,
  postRestApi3PermissionschemeSchemeIdPermissionRoute,
  postRestApi3PermissionsProjectRoute,
  postRestApi3PriorityRoute,
  postRestApi3ProjectCategoryRoute,
  postRestApi3ProjectProjectIdOrKeyArchiveRoute,
  postRestApi3ProjectProjectIdOrKeyAvatar2Route,
  postRestApi3ProjectProjectIdOrKeyDeleteRoute,
  postRestApi3ProjectProjectIdOrKeyRestoreRoute,
  postRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  postRestApi3ProjectRoute,
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
  postRestApi3SearchRoute,
  postRestApi3StatusesRoute,
  postRestApi3TaskTaskIdCancelRoute,
  postRestApi3UiModificationsRoute,
  postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute,
  postRestApi3UserRoute,
  postRestApi3VersionIdMoveRoute,
  postRestApi3VersionIdRemoveAndSwapRoute,
  postRestApi3VersionRoute,
  postRestApi3WebhookRoute,
  postRestApi3WorkflowRoute,
  postRestApi3WorkflowschemeIdCreatedraftRoute,
  postRestApi3WorkflowschemeIdDraftPublishRoute,
  postRestApi3WorkflowschemeRoute,
  postRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  postRestApi3WorklogListRoute,
  postRestAtlassianConnect1AppModuleDynamicRoute,
  postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute,
  putRestApi3AnnouncementBannerRoute,
  putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute,
  putRestApi3AppFieldFieldIdOrKeyValueRoute,
  putRestApi3ApplicationPropertiesIdRoute,
  putRestApi3CommentCommentIdPropertiesPropertyKeyRoute,
  putRestApi3ComponentIdRoute,
  putRestApi3ConfigurationTimetrackingOptionsRoute,
  putRestApi3ConfigurationTimetrackingRoute,
  putRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  putRestApi3DashboardIdRoute,
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
  putRestApi3FieldFieldIdRoute,
  putRestApi3FieldFieldKeyOptionOptionIdRoute,
  putRestApi3FilterDefaultShareScopeRoute,
  putRestApi3FilterIdColumnsRoute,
  putRestApi3FilterIdFavouriteRoute,
  putRestApi3FilterIdOwnerRoute,
  putRestApi3FilterIdRoute,
  putRestApi3IssueIssueIdOrKeyAssigneeRoute,
  putRestApi3IssueIssueIdOrKeyCommentIdRoute,
  putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute,
  putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute,
  putRestApi3IssueIssueIdOrKeyRoute,
  putRestApi3IssueIssueIdOrKeyWorklogIdRoute,
  putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute,
  putRestApi3IssueLinkTypeIssueLinkTypeIdRoute,
  putRestApi3IssuePropertiesPropertyKeyRoute,
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
  putRestApi3MypreferencesLocaleRoute,
  putRestApi3MypreferencesRoute,
  putRestApi3NotificationschemeIdNotificationRoute,
  putRestApi3NotificationschemeIdRoute,
  putRestApi3PermissionschemeSchemeIdRoute,
  putRestApi3PriorityDefaultRoute,
  putRestApi3PriorityIdRoute,
  putRestApi3PriorityMoveRoute,
  putRestApi3ProjectCategoryIdRoute,
  putRestApi3ProjectProjectIdEmailRoute,
  putRestApi3ProjectProjectIdOrKeyAvatarRoute,
  putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute,
  putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  putRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  putRestApi3ProjectProjectIdOrKeyRoute,
  putRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyRoute,
  putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute,
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
  putRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  putRestAtlassianConnect1MigrationFieldRoute,
  putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restHandler = app
  .openapi(getRestApi3AnnouncementBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AnnouncementBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3AppFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AppFieldFieldIdOrKeyContextConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3AppFieldFieldIdOrKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationPropertiesAdvancedSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ApplicationPropertiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationroleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ApplicationroleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3AttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdExpandHumanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AttachmentIdExpandRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AuditingRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3AvatarTypeSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3CommentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3CommentCommentIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3CommentCommentIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ComponentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ComponentIdRelatedIssueCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationTimetrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigurationTimetrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationTimetrackingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigurationTimetrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigurationTimetrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3CustomFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardGadgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdGadgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardDashboardIdGadgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardDashboardIdGadgetGadgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdItemsItemIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ExpressionAnalyseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ExpressionEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldSearchTrashedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextIssuetypemappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextProjectmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldIdContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdIssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdOptionMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdProjectRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldKeyOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionSuggestionsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionSuggestionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldKeyOptionOptionIdIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldconfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldconfigurationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeIdMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationschemeIdMappingDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterDefaultShareScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterDefaultShareScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterMyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FilterIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3GroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3GroupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3GroupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupsPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3GroupuserpickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3InstanceLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueCreatemetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuePickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuePropertiesMultiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuePropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuePropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyChangelogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyEditmetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyRemotelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyRemotelinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyVotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueIssueIdOrKeyWorklogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyWorklogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueLinkTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssueLinkTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssueLinkTypeIssueLinkTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIdAlternativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeIdAvatar2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIssueTypeIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypeschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypeschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeschemeIssueTypeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypescreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3JqlAutocompletedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlAutocompletedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3JqlAutocompletedataSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlFunctionComputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlPdcleanerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlSanitizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3LabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3LicenseApproximateLicenseCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MypermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3MypreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3MypreferencesLocaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3MyselfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3NotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3NotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3NotificationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3NotificationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3NotificationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3NotificationschemeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3NotificationschemeNotificationSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRestApi3PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionsProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PermissionschemeSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PermissionschemeSchemeIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PermissionschemeSchemeIdPermissionPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PrioritySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeAccessibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeProjectTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyAvatar2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyComponentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoledetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdNotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdPermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectKeyOrIdPermissionschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdSecuritylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectvalidateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectvalidateValidProjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectvalidateValidProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ResolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ResolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ResolutionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensAddToDefaultFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreensScreenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensScreenIdAvailableFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensScreenIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdTabsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreensScreenIdTabsTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreensScreenIdTabsTabIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreensScreenIdTabsTabIdFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreensScreenIdTabsTabIdMovePosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ScreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreenschemeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreenschemeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3SecuritylevelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ServerInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3SettingsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3SettingsColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatuscategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatuscategoryIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3TaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3TaskTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UiModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UiModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UiModificationsUiModificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UiModificationsUiModificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserAssignableMultiProjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserAssignableSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserBulkMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UserColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserEmailBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPermissionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchQueryKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserViewissueSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3VersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3VersionIdMergetoMoveIssuesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdRelatedIssueCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3VersionIdRemoveAndSwapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3VersionIdUnresolvedIssueCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WebhookFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WebhookRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowRuleConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowRuleConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowRuleConfigDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowschemeIdCreatedraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowschemeIdDraftPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdDraftWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdIssuetypeIssueTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeIdWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorklogDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorklogListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorklogUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestAtlassianConnect1MigrationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestAtlassianConnect1MigrationPropertiesEntityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestAtlassianConnect1MigrationWorkflowRuleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
