import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWikiRestApiContentIdLabelLabelRoute,
  deleteWikiRestApiContentIdLabelRoute,
  deleteWikiRestApiContentIdPageTreeRoute,
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  deleteWikiRestApiContentIdRestrictionRoute,
  deleteWikiRestApiContentIdStateRoute,
  deleteWikiRestApiContentIdVersionVersionNumberRoute,
  deleteWikiRestApiGroupByIdRoute,
  deleteWikiRestApiGroupUserByGroupIdRoute,
  deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
  deleteWikiRestApiSettingsLookandfeelCustomRoute,
  deleteWikiRestApiSpaceSpaceKeyLabelRoute,
  deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute,
  deleteWikiRestApiSpaceSpaceKeyRoute,
  deleteWikiRestApiSpaceSpaceKeyThemeRoute,
  deleteWikiRestApiTemplateContentTemplateIdRoute,
  deleteWikiRestApiUserUserIdPropertyKeyRoute,
  deleteWikiRestApiUserWatchContentContentIdRoute,
  deleteWikiRestApiUserWatchLabelLabelNameRoute,
  deleteWikiRestApiUserWatchSpaceSpaceKeyRoute,
  deleteWikiRestAtlassianConnect1AppModuleDynamicRoute,
  getWikiRestApiAnalyticsContentContentIdViewersRoute,
  getWikiRestApiAnalyticsContentContentIdViewsRoute,
  getWikiRestApiAuditExportRoute,
  getWikiRestApiAuditRetentionRoute,
  getWikiRestApiAuditRoute,
  getWikiRestApiAuditSinceRoute,
  getWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
  getWikiRestApiContentbodyConvertAsyncIdRoute,
  getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute,
  getWikiRestApiContentIdDescendantRoute,
  getWikiRestApiContentIdDescendantTypeRoute,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute,
  getWikiRestApiContentIdNotificationChildCreatedRoute,
  getWikiRestApiContentIdNotificationCreatedRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  getWikiRestApiContentIdRestrictionByOperationRoute,
  getWikiRestApiContentIdRestrictionRoute,
  getWikiRestApiContentIdStateAvailableRoute,
  getWikiRestApiContentIdStateRoute,
  getWikiRestApiContentSearchRoute,
  getWikiRestApiContentStatesRoute,
  getWikiRestApiGroupByIdRoute,
  getWikiRestApiGroupGroupIdMembersByGroupIdRoute,
  getWikiRestApiGroupPickerRoute,
  getWikiRestApiGroupRoute,
  getWikiRestApiLabelRoute,
  getWikiRestApiLongtaskIdRoute,
  getWikiRestApiLongtaskRoute,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
  getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute,
  getWikiRestApiSearchRoute,
  getWikiRestApiSearchUserRoute,
  getWikiRestApiSettingsLookandfeelRoute,
  getWikiRestApiSettingsSystemInfoRoute,
  getWikiRestApiSettingsThemeRoute,
  getWikiRestApiSettingsThemeSelectedRoute,
  getWikiRestApiSettingsThemeThemeKeyRoute,
  getWikiRestApiSpaceSpaceKeyLabelRoute,
  getWikiRestApiSpaceSpaceKeySettingsRoute,
  getWikiRestApiSpaceSpaceKeyStateContentRoute,
  getWikiRestApiSpaceSpaceKeyStateRoute,
  getWikiRestApiSpaceSpaceKeyStateSettingsRoute,
  getWikiRestApiSpaceSpaceKeyThemeRoute,
  getWikiRestApiSpaceSpaceKeyWatchRoute,
  getWikiRestApiTemplateBlueprintRoute,
  getWikiRestApiTemplateContentTemplateIdRoute,
  getWikiRestApiTemplatePageRoute,
  getWikiRestApiUserAnonymousRoute,
  getWikiRestApiUserBulkRoute,
  getWikiRestApiUserCurrentRoute,
  getWikiRestApiUserEmailBulkRoute,
  getWikiRestApiUserEmailRoute,
  getWikiRestApiUserMemberofRoute,
  getWikiRestApiUserRoute,
  getWikiRestApiUserUserIdPropertyKeyRoute,
  getWikiRestApiUserUserIdPropertyRoute,
  getWikiRestApiUserWatchContentContentIdRoute,
  getWikiRestApiUserWatchLabelLabelNameRoute,
  getWikiRestApiUserWatchSpaceSpaceKeyRoute,
  getWikiRestAtlassianConnect1AppModuleDynamicRoute,
  postWikiRestApiAuditRoute,
  postWikiRestApiContentArchiveRoute,
  postWikiRestApiContentBlueprintInstanceDraftIdRoute,
  postWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
  postWikiRestApiContentbodyConvertAsyncToRoute,
  postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute,
  postWikiRestApiContentIdChildAttachmentRoute,
  postWikiRestApiContentIdCopyRoute,
  postWikiRestApiContentIdLabelRoute,
  postWikiRestApiContentIdPagehierarchyCopyRoute,
  postWikiRestApiContentIdPermissionCheckRoute,
  postWikiRestApiContentIdRestrictionRoute,
  postWikiRestApiContentIdVersionRoute,
  postWikiRestApiGroupRoute,
  postWikiRestApiGroupUserByGroupIdRoute,
  postWikiRestApiSettingsLookandfeelCustomRoute,
  postWikiRestApiSpacePrivateRoute,
  postWikiRestApiSpaceRoute,
  postWikiRestApiSpaceSpaceKeyLabelRoute,
  postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute,
  postWikiRestApiSpaceSpaceKeyPermissionRoute,
  postWikiRestApiTemplateRoute,
  postWikiRestApiUserUserIdPropertyKeyRoute,
  postWikiRestApiUserWatchContentContentIdRoute,
  postWikiRestApiUserWatchLabelLabelNameRoute,
  postWikiRestApiUserWatchSpaceSpaceKeyRoute,
  postWikiRestAtlassianConnect1AppModuleDynamicRoute,
  putWikiRestApiAuditRetentionRoute,
  putWikiRestApiContentBlueprintInstanceDraftIdRoute,
  putWikiRestApiContentIdChildAttachmentAttachmentIdRoute,
  putWikiRestApiContentIdChildAttachmentRoute,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  putWikiRestApiContentIdRestrictionRoute,
  putWikiRestApiContentIdStateRoute,
  putWikiRestApiContentPageIdMovePositionTargetIdRoute,
  putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
  putWikiRestApiSettingsLookandfeelRoute,
  putWikiRestApiSpaceSpaceKeyRoute,
  putWikiRestApiSpaceSpaceKeySettingsRoute,
  putWikiRestApiSpaceSpaceKeyThemeRoute,
  putWikiRestApiTemplateRoute,
  putWikiRestApiUserUserIdPropertyKeyRoute,
} from '../routes'

export const getWikiRestApiAuditRouteHandler: RouteHandler<
  typeof getWikiRestApiAuditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiAuditRouteHandler: RouteHandler<
  typeof postWikiRestApiAuditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiAuditExportRouteHandler: RouteHandler<
  typeof getWikiRestApiAuditExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiAuditRetentionRouteHandler: RouteHandler<
  typeof getWikiRestApiAuditRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiAuditRetentionRouteHandler: RouteHandler<
  typeof putWikiRestApiAuditRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiAuditSinceRouteHandler: RouteHandler<
  typeof getWikiRestApiAuditSinceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentArchiveRouteHandler: RouteHandler<
  typeof postWikiRestApiContentArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentBlueprintInstanceDraftIdRouteHandler: RouteHandler<
  typeof putWikiRestApiContentBlueprintInstanceDraftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentBlueprintInstanceDraftIdRouteHandler: RouteHandler<
  typeof postWikiRestApiContentBlueprintInstanceDraftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentSearchRouteHandler: RouteHandler<
  typeof getWikiRestApiContentSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdPageTreeRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdPageTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentPageIdMovePositionTargetIdRouteHandler: RouteHandler<
  typeof putWikiRestApiContentPageIdMovePositionTargetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdChildAttachmentRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdChildAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdChildAttachmentRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdChildAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdChildAttachmentAttachmentIdRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdChildAttachmentAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdChildAttachmentAttachmentIdDataRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdDescendantRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdDescendantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdDescendantTypeRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdDescendantTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdLabelRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdLabelRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdLabelLabelRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdLabelLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdNotificationChildCreatedRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdNotificationChildCreatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdNotificationCreatedRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdNotificationCreatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdPagehierarchyCopyRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdPagehierarchyCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdCopyRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdPermissionCheckRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdPermissionCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdRestrictionRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdRestrictionRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdRestrictionRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdRestrictionRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdRestrictionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdRestrictionByOperationRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdRestrictionByOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdStateRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiContentIdStateRouteHandler: RouteHandler<
  typeof putWikiRestApiContentIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdStateRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentIdStateAvailableRouteHandler: RouteHandler<
  typeof getWikiRestApiContentIdStateAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentIdVersionRouteHandler: RouteHandler<
  typeof postWikiRestApiContentIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiContentIdVersionVersionNumberRouteHandler: RouteHandler<
  typeof deleteWikiRestApiContentIdVersionVersionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentStatesRouteHandler: RouteHandler<
  typeof getWikiRestApiContentStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentbodyConvertAsyncToRouteHandler: RouteHandler<
  typeof postWikiRestApiContentbodyConvertAsyncToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentbodyConvertAsyncIdRouteHandler: RouteHandler<
  typeof getWikiRestApiContentbodyConvertAsyncIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler: RouteHandler<
  typeof postWikiRestApiContentbodyConvertAsyncBulkTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler: RouteHandler<
  typeof getWikiRestApiContentbodyConvertAsyncBulkTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiLabelRouteHandler: RouteHandler<
  typeof getWikiRestApiLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiGroupRouteHandler: RouteHandler<
  typeof getWikiRestApiGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiGroupRouteHandler: RouteHandler<
  typeof postWikiRestApiGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiGroupByIdRouteHandler: RouteHandler<
  typeof getWikiRestApiGroupByIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiGroupByIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiGroupByIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiGroupPickerRouteHandler: RouteHandler<
  typeof getWikiRestApiGroupPickerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiGroupGroupIdMembersByGroupIdRouteHandler: RouteHandler<
  typeof getWikiRestApiGroupGroupIdMembersByGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiGroupUserByGroupIdRouteHandler: RouteHandler<
  typeof postWikiRestApiGroupUserByGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiGroupUserByGroupIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiGroupUserByGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiLongtaskRouteHandler: RouteHandler<
  typeof getWikiRestApiLongtaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiLongtaskIdRouteHandler: RouteHandler<
  typeof getWikiRestApiLongtaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRouteHandler: RouteHandler<
  typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler: RouteHandler<
  typeof getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler: RouteHandler<
  typeof putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler: RouteHandler<
  typeof deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRouteHandler: RouteHandler<
  typeof getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSearchRouteHandler: RouteHandler<
  typeof getWikiRestApiSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSearchUserRouteHandler: RouteHandler<
  typeof getWikiRestApiSearchUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSettingsLookandfeelRouteHandler: RouteHandler<
  typeof getWikiRestApiSettingsLookandfeelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiSettingsLookandfeelRouteHandler: RouteHandler<
  typeof putWikiRestApiSettingsLookandfeelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSettingsLookandfeelCustomRouteHandler: RouteHandler<
  typeof postWikiRestApiSettingsLookandfeelCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiSettingsLookandfeelCustomRouteHandler: RouteHandler<
  typeof deleteWikiRestApiSettingsLookandfeelCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSettingsSystemInfoRouteHandler: RouteHandler<
  typeof getWikiRestApiSettingsSystemInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSettingsThemeRouteHandler: RouteHandler<
  typeof getWikiRestApiSettingsThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSettingsThemeSelectedRouteHandler: RouteHandler<
  typeof getWikiRestApiSettingsThemeSelectedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSettingsThemeThemeKeyRouteHandler: RouteHandler<
  typeof getWikiRestApiSettingsThemeThemeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSpaceRouteHandler: RouteHandler<
  typeof postWikiRestApiSpaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSpacePrivateRouteHandler: RouteHandler<
  typeof postWikiRestApiSpacePrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiSpaceSpaceKeyRouteHandler: RouteHandler<
  typeof putWikiRestApiSpaceSpaceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiSpaceSpaceKeyRouteHandler: RouteHandler<
  typeof deleteWikiRestApiSpaceSpaceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSpaceSpaceKeyPermissionRouteHandler: RouteHandler<
  typeof postWikiRestApiSpaceSpaceKeyPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSpaceSpaceKeyPermissionCustomContentRouteHandler: RouteHandler<
  typeof postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiSpaceSpaceKeyPermissionIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeySettingsRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiSpaceSpaceKeySettingsRouteHandler: RouteHandler<
  typeof putWikiRestApiSpaceSpaceKeySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyStateRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyStateSettingsRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyStateSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyStateContentRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyStateContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyThemeRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiSpaceSpaceKeyThemeRouteHandler: RouteHandler<
  typeof putWikiRestApiSpaceSpaceKeyThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiSpaceSpaceKeyThemeRouteHandler: RouteHandler<
  typeof deleteWikiRestApiSpaceSpaceKeyThemeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyWatchRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyWatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiSpaceSpaceKeyLabelRouteHandler: RouteHandler<
  typeof getWikiRestApiSpaceSpaceKeyLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiSpaceSpaceKeyLabelRouteHandler: RouteHandler<
  typeof postWikiRestApiSpaceSpaceKeyLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiSpaceSpaceKeyLabelRouteHandler: RouteHandler<
  typeof deleteWikiRestApiSpaceSpaceKeyLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiTemplateRouteHandler: RouteHandler<
  typeof putWikiRestApiTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiTemplateRouteHandler: RouteHandler<
  typeof postWikiRestApiTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiTemplateBlueprintRouteHandler: RouteHandler<
  typeof getWikiRestApiTemplateBlueprintRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiTemplatePageRouteHandler: RouteHandler<
  typeof getWikiRestApiTemplatePageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiTemplateContentTemplateIdRouteHandler: RouteHandler<
  typeof getWikiRestApiTemplateContentTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiTemplateContentTemplateIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiTemplateContentTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserRouteHandler: RouteHandler<typeof getWikiRestApiUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserAnonymousRouteHandler: RouteHandler<
  typeof getWikiRestApiUserAnonymousRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserCurrentRouteHandler: RouteHandler<
  typeof getWikiRestApiUserCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserMemberofRouteHandler: RouteHandler<
  typeof getWikiRestApiUserMemberofRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserBulkRouteHandler: RouteHandler<
  typeof getWikiRestApiUserBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserWatchContentContentIdRouteHandler: RouteHandler<
  typeof getWikiRestApiUserWatchContentContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiUserWatchContentContentIdRouteHandler: RouteHandler<
  typeof postWikiRestApiUserWatchContentContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiUserWatchContentContentIdRouteHandler: RouteHandler<
  typeof deleteWikiRestApiUserWatchContentContentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserWatchLabelLabelNameRouteHandler: RouteHandler<
  typeof getWikiRestApiUserWatchLabelLabelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiUserWatchLabelLabelNameRouteHandler: RouteHandler<
  typeof postWikiRestApiUserWatchLabelLabelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiUserWatchLabelLabelNameRouteHandler: RouteHandler<
  typeof deleteWikiRestApiUserWatchLabelLabelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserWatchSpaceSpaceKeyRouteHandler: RouteHandler<
  typeof getWikiRestApiUserWatchSpaceSpaceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiUserWatchSpaceSpaceKeyRouteHandler: RouteHandler<
  typeof postWikiRestApiUserWatchSpaceSpaceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiUserWatchSpaceSpaceKeyRouteHandler: RouteHandler<
  typeof deleteWikiRestApiUserWatchSpaceSpaceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserEmailRouteHandler: RouteHandler<
  typeof getWikiRestApiUserEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserEmailBulkRouteHandler: RouteHandler<
  typeof getWikiRestApiUserEmailBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof getWikiRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof postWikiRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestAtlassianConnect1AppModuleDynamicRouteHandler: RouteHandler<
  typeof deleteWikiRestAtlassianConnect1AppModuleDynamicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiAnalyticsContentContentIdViewsRouteHandler: RouteHandler<
  typeof getWikiRestApiAnalyticsContentContentIdViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiAnalyticsContentContentIdViewersRouteHandler: RouteHandler<
  typeof getWikiRestApiAnalyticsContentContentIdViewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserUserIdPropertyRouteHandler: RouteHandler<
  typeof getWikiRestApiUserUserIdPropertyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWikiRestApiUserUserIdPropertyKeyRouteHandler: RouteHandler<
  typeof getWikiRestApiUserUserIdPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWikiRestApiUserUserIdPropertyKeyRouteHandler: RouteHandler<
  typeof putWikiRestApiUserUserIdPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWikiRestApiUserUserIdPropertyKeyRouteHandler: RouteHandler<
  typeof postWikiRestApiUserUserIdPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWikiRestApiUserUserIdPropertyKeyRouteHandler: RouteHandler<
  typeof deleteWikiRestApiUserUserIdPropertyKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
