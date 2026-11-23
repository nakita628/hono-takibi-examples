import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteWikiRestApiContentIdLabelLabelRouteHandler,
  deleteWikiRestApiContentIdLabelRouteHandler,
  deleteWikiRestApiContentIdPageTreeRouteHandler,
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  deleteWikiRestApiContentIdRestrictionRouteHandler,
  deleteWikiRestApiContentIdStateRouteHandler,
  deleteWikiRestApiContentIdVersionVersionNumberRouteHandler,
  deleteWikiRestApiGroupByIdRouteHandler,
  deleteWikiRestApiGroupUserByGroupIdRouteHandler,
  deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  deleteWikiRestApiSettingsLookandfeelCustomRouteHandler,
  deleteWikiRestApiSpaceSpaceKeyLabelRouteHandler,
  deleteWikiRestApiSpaceSpaceKeyPermissionIdRouteHandler,
  deleteWikiRestApiSpaceSpaceKeyRouteHandler,
  deleteWikiRestApiSpaceSpaceKeyThemeRouteHandler,
  deleteWikiRestApiTemplateContentTemplateIdRouteHandler,
  deleteWikiRestApiUserUserIdPropertyKeyRouteHandler,
  deleteWikiRestApiUserWatchContentContentIdRouteHandler,
  deleteWikiRestApiUserWatchLabelLabelNameRouteHandler,
  deleteWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  deleteWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  getWikiRestApiAnalyticsContentContentIdViewersRouteHandler,
  getWikiRestApiAnalyticsContentContentIdViewsRouteHandler,
  getWikiRestApiAuditExportRouteHandler,
  getWikiRestApiAuditRetentionRouteHandler,
  getWikiRestApiAuditRouteHandler,
  getWikiRestApiAuditSinceRouteHandler,
  getWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler,
  getWikiRestApiContentbodyConvertAsyncIdRouteHandler,
  getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRouteHandler,
  getWikiRestApiContentIdDescendantRouteHandler,
  getWikiRestApiContentIdDescendantTypeRouteHandler,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRouteHandler,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRouteHandler,
  getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRouteHandler,
  getWikiRestApiContentIdNotificationChildCreatedRouteHandler,
  getWikiRestApiContentIdNotificationCreatedRouteHandler,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyRouteHandler,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  getWikiRestApiContentIdRestrictionByOperationRouteHandler,
  getWikiRestApiContentIdRestrictionRouteHandler,
  getWikiRestApiContentIdStateAvailableRouteHandler,
  getWikiRestApiContentIdStateRouteHandler,
  getWikiRestApiContentSearchRouteHandler,
  getWikiRestApiContentStatesRouteHandler,
  getWikiRestApiGroupByIdRouteHandler,
  getWikiRestApiGroupGroupIdMembersByGroupIdRouteHandler,
  getWikiRestApiGroupPickerRouteHandler,
  getWikiRestApiGroupRouteHandler,
  getWikiRestApiLabelRouteHandler,
  getWikiRestApiLongtaskIdRouteHandler,
  getWikiRestApiLongtaskRouteHandler,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRouteHandler,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRouteHandler,
  getWikiRestApiSearchRouteHandler,
  getWikiRestApiSearchUserRouteHandler,
  getWikiRestApiSettingsLookandfeelRouteHandler,
  getWikiRestApiSettingsSystemInfoRouteHandler,
  getWikiRestApiSettingsThemeRouteHandler,
  getWikiRestApiSettingsThemeSelectedRouteHandler,
  getWikiRestApiSettingsThemeThemeKeyRouteHandler,
  getWikiRestApiSpaceSpaceKeyLabelRouteHandler,
  getWikiRestApiSpaceSpaceKeySettingsRouteHandler,
  getWikiRestApiSpaceSpaceKeyStateContentRouteHandler,
  getWikiRestApiSpaceSpaceKeyStateRouteHandler,
  getWikiRestApiSpaceSpaceKeyStateSettingsRouteHandler,
  getWikiRestApiSpaceSpaceKeyThemeRouteHandler,
  getWikiRestApiSpaceSpaceKeyWatchRouteHandler,
  getWikiRestApiTemplateBlueprintRouteHandler,
  getWikiRestApiTemplateContentTemplateIdRouteHandler,
  getWikiRestApiTemplatePageRouteHandler,
  getWikiRestApiUserAnonymousRouteHandler,
  getWikiRestApiUserBulkRouteHandler,
  getWikiRestApiUserCurrentRouteHandler,
  getWikiRestApiUserEmailBulkRouteHandler,
  getWikiRestApiUserEmailRouteHandler,
  getWikiRestApiUserMemberofRouteHandler,
  getWikiRestApiUserRouteHandler,
  getWikiRestApiUserUserIdPropertyKeyRouteHandler,
  getWikiRestApiUserUserIdPropertyRouteHandler,
  getWikiRestApiUserWatchContentContentIdRouteHandler,
  getWikiRestApiUserWatchLabelLabelNameRouteHandler,
  getWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  getWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  postWikiRestApiAuditRouteHandler,
  postWikiRestApiContentArchiveRouteHandler,
  postWikiRestApiContentBlueprintInstanceDraftIdRouteHandler,
  postWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler,
  postWikiRestApiContentbodyConvertAsyncToRouteHandler,
  postWikiRestApiContentIdChildAttachmentAttachmentIdDataRouteHandler,
  postWikiRestApiContentIdChildAttachmentRouteHandler,
  postWikiRestApiContentIdCopyRouteHandler,
  postWikiRestApiContentIdLabelRouteHandler,
  postWikiRestApiContentIdPagehierarchyCopyRouteHandler,
  postWikiRestApiContentIdPermissionCheckRouteHandler,
  postWikiRestApiContentIdRestrictionRouteHandler,
  postWikiRestApiContentIdVersionRouteHandler,
  postWikiRestApiGroupRouteHandler,
  postWikiRestApiGroupUserByGroupIdRouteHandler,
  postWikiRestApiSettingsLookandfeelCustomRouteHandler,
  postWikiRestApiSpacePrivateRouteHandler,
  postWikiRestApiSpaceRouteHandler,
  postWikiRestApiSpaceSpaceKeyLabelRouteHandler,
  postWikiRestApiSpaceSpaceKeyPermissionCustomContentRouteHandler,
  postWikiRestApiSpaceSpaceKeyPermissionRouteHandler,
  postWikiRestApiTemplateRouteHandler,
  postWikiRestApiUserUserIdPropertyKeyRouteHandler,
  postWikiRestApiUserWatchContentContentIdRouteHandler,
  postWikiRestApiUserWatchLabelLabelNameRouteHandler,
  postWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  postWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  putWikiRestApiAuditRetentionRouteHandler,
  putWikiRestApiContentBlueprintInstanceDraftIdRouteHandler,
  putWikiRestApiContentIdChildAttachmentAttachmentIdRouteHandler,
  putWikiRestApiContentIdChildAttachmentRouteHandler,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  putWikiRestApiContentIdRestrictionRouteHandler,
  putWikiRestApiContentIdStateRouteHandler,
  putWikiRestApiContentPageIdMovePositionTargetIdRouteHandler,
  putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  putWikiRestApiSettingsLookandfeelRouteHandler,
  putWikiRestApiSpaceSpaceKeyRouteHandler,
  putWikiRestApiSpaceSpaceKeySettingsRouteHandler,
  putWikiRestApiSpaceSpaceKeyThemeRouteHandler,
  putWikiRestApiTemplateRouteHandler,
  putWikiRestApiUserUserIdPropertyKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWikiRestApiAuditRoute, getWikiRestApiAuditRouteHandler)
  .openapi(postWikiRestApiAuditRoute, postWikiRestApiAuditRouteHandler)
  .openapi(getWikiRestApiAuditExportRoute, getWikiRestApiAuditExportRouteHandler)
  .openapi(getWikiRestApiAuditRetentionRoute, getWikiRestApiAuditRetentionRouteHandler)
  .openapi(putWikiRestApiAuditRetentionRoute, putWikiRestApiAuditRetentionRouteHandler)
  .openapi(getWikiRestApiAuditSinceRoute, getWikiRestApiAuditSinceRouteHandler)
  .openapi(postWikiRestApiContentArchiveRoute, postWikiRestApiContentArchiveRouteHandler)
  .openapi(
    putWikiRestApiContentBlueprintInstanceDraftIdRoute,
    putWikiRestApiContentBlueprintInstanceDraftIdRouteHandler,
  )
  .openapi(
    postWikiRestApiContentBlueprintInstanceDraftIdRoute,
    postWikiRestApiContentBlueprintInstanceDraftIdRouteHandler,
  )
  .openapi(getWikiRestApiContentSearchRoute, getWikiRestApiContentSearchRouteHandler)
  .openapi(deleteWikiRestApiContentIdPageTreeRoute, deleteWikiRestApiContentIdPageTreeRouteHandler)
  .openapi(
    putWikiRestApiContentPageIdMovePositionTargetIdRoute,
    putWikiRestApiContentPageIdMovePositionTargetIdRouteHandler,
  )
  .openapi(
    putWikiRestApiContentIdChildAttachmentRoute,
    putWikiRestApiContentIdChildAttachmentRouteHandler,
  )
  .openapi(
    postWikiRestApiContentIdChildAttachmentRoute,
    postWikiRestApiContentIdChildAttachmentRouteHandler,
  )
  .openapi(
    putWikiRestApiContentIdChildAttachmentAttachmentIdRoute,
    putWikiRestApiContentIdChildAttachmentAttachmentIdRouteHandler,
  )
  .openapi(
    postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute,
    postWikiRestApiContentIdChildAttachmentAttachmentIdDataRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute,
    getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRouteHandler,
  )
  .openapi(getWikiRestApiContentIdDescendantRoute, getWikiRestApiContentIdDescendantRouteHandler)
  .openapi(
    getWikiRestApiContentIdDescendantTypeRoute,
    getWikiRestApiContentIdDescendantTypeRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute,
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute,
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute,
    getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRouteHandler,
  )
  .openapi(postWikiRestApiContentIdLabelRoute, postWikiRestApiContentIdLabelRouteHandler)
  .openapi(deleteWikiRestApiContentIdLabelRoute, deleteWikiRestApiContentIdLabelRouteHandler)
  .openapi(
    deleteWikiRestApiContentIdLabelLabelRoute,
    deleteWikiRestApiContentIdLabelLabelRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdNotificationChildCreatedRoute,
    getWikiRestApiContentIdNotificationChildCreatedRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdNotificationCreatedRoute,
    getWikiRestApiContentIdNotificationCreatedRouteHandler,
  )
  .openapi(
    postWikiRestApiContentIdPagehierarchyCopyRoute,
    postWikiRestApiContentIdPagehierarchyCopyRouteHandler,
  )
  .openapi(postWikiRestApiContentIdCopyRoute, postWikiRestApiContentIdCopyRouteHandler)
  .openapi(
    postWikiRestApiContentIdPermissionCheckRoute,
    postWikiRestApiContentIdPermissionCheckRouteHandler,
  )
  .openapi(getWikiRestApiContentIdRestrictionRoute, getWikiRestApiContentIdRestrictionRouteHandler)
  .openapi(putWikiRestApiContentIdRestrictionRoute, putWikiRestApiContentIdRestrictionRouteHandler)
  .openapi(
    postWikiRestApiContentIdRestrictionRoute,
    postWikiRestApiContentIdRestrictionRouteHandler,
  )
  .openapi(
    deleteWikiRestApiContentIdRestrictionRoute,
    deleteWikiRestApiContentIdRestrictionRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdRestrictionByOperationRoute,
    getWikiRestApiContentIdRestrictionByOperationRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute,
    getWikiRestApiContentIdRestrictionByOperationOperationKeyRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
    getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  )
  .openapi(
    putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
    putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  )
  .openapi(
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRouteHandler,
  )
  .openapi(
    getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
    getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  )
  .openapi(
    putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
    putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  )
  .openapi(
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRouteHandler,
  )
  .openapi(getWikiRestApiContentIdStateRoute, getWikiRestApiContentIdStateRouteHandler)
  .openapi(putWikiRestApiContentIdStateRoute, putWikiRestApiContentIdStateRouteHandler)
  .openapi(deleteWikiRestApiContentIdStateRoute, deleteWikiRestApiContentIdStateRouteHandler)
  .openapi(
    getWikiRestApiContentIdStateAvailableRoute,
    getWikiRestApiContentIdStateAvailableRouteHandler,
  )
  .openapi(postWikiRestApiContentIdVersionRoute, postWikiRestApiContentIdVersionRouteHandler)
  .openapi(
    deleteWikiRestApiContentIdVersionVersionNumberRoute,
    deleteWikiRestApiContentIdVersionVersionNumberRouteHandler,
  )
  .openapi(getWikiRestApiContentStatesRoute, getWikiRestApiContentStatesRouteHandler)
  .openapi(
    postWikiRestApiContentbodyConvertAsyncToRoute,
    postWikiRestApiContentbodyConvertAsyncToRouteHandler,
  )
  .openapi(
    getWikiRestApiContentbodyConvertAsyncIdRoute,
    getWikiRestApiContentbodyConvertAsyncIdRouteHandler,
  )
  .openapi(
    postWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
    postWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler,
  )
  .openapi(
    getWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
    getWikiRestApiContentbodyConvertAsyncBulkTasksRouteHandler,
  )
  .openapi(getWikiRestApiLabelRoute, getWikiRestApiLabelRouteHandler)
  .openapi(getWikiRestApiGroupRoute, getWikiRestApiGroupRouteHandler)
  .openapi(postWikiRestApiGroupRoute, postWikiRestApiGroupRouteHandler)
  .openapi(getWikiRestApiGroupByIdRoute, getWikiRestApiGroupByIdRouteHandler)
  .openapi(deleteWikiRestApiGroupByIdRoute, deleteWikiRestApiGroupByIdRouteHandler)
  .openapi(getWikiRestApiGroupPickerRoute, getWikiRestApiGroupPickerRouteHandler)
  .openapi(
    getWikiRestApiGroupGroupIdMembersByGroupIdRoute,
    getWikiRestApiGroupGroupIdMembersByGroupIdRouteHandler,
  )
  .openapi(postWikiRestApiGroupUserByGroupIdRoute, postWikiRestApiGroupUserByGroupIdRouteHandler)
  .openapi(
    deleteWikiRestApiGroupUserByGroupIdRoute,
    deleteWikiRestApiGroupUserByGroupIdRouteHandler,
  )
  .openapi(getWikiRestApiLongtaskRoute, getWikiRestApiLongtaskRouteHandler)
  .openapi(getWikiRestApiLongtaskIdRoute, getWikiRestApiLongtaskIdRouteHandler)
  .openapi(
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute,
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRouteHandler,
  )
  .openapi(
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  )
  .openapi(
    putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  )
  .openapi(
    deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRouteHandler,
  )
  .openapi(
    getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute,
    getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRouteHandler,
  )
  .openapi(getWikiRestApiSearchRoute, getWikiRestApiSearchRouteHandler)
  .openapi(getWikiRestApiSearchUserRoute, getWikiRestApiSearchUserRouteHandler)
  .openapi(getWikiRestApiSettingsLookandfeelRoute, getWikiRestApiSettingsLookandfeelRouteHandler)
  .openapi(putWikiRestApiSettingsLookandfeelRoute, putWikiRestApiSettingsLookandfeelRouteHandler)
  .openapi(
    postWikiRestApiSettingsLookandfeelCustomRoute,
    postWikiRestApiSettingsLookandfeelCustomRouteHandler,
  )
  .openapi(
    deleteWikiRestApiSettingsLookandfeelCustomRoute,
    deleteWikiRestApiSettingsLookandfeelCustomRouteHandler,
  )
  .openapi(getWikiRestApiSettingsSystemInfoRoute, getWikiRestApiSettingsSystemInfoRouteHandler)
  .openapi(getWikiRestApiSettingsThemeRoute, getWikiRestApiSettingsThemeRouteHandler)
  .openapi(
    getWikiRestApiSettingsThemeSelectedRoute,
    getWikiRestApiSettingsThemeSelectedRouteHandler,
  )
  .openapi(
    getWikiRestApiSettingsThemeThemeKeyRoute,
    getWikiRestApiSettingsThemeThemeKeyRouteHandler,
  )
  .openapi(postWikiRestApiSpaceRoute, postWikiRestApiSpaceRouteHandler)
  .openapi(postWikiRestApiSpacePrivateRoute, postWikiRestApiSpacePrivateRouteHandler)
  .openapi(putWikiRestApiSpaceSpaceKeyRoute, putWikiRestApiSpaceSpaceKeyRouteHandler)
  .openapi(deleteWikiRestApiSpaceSpaceKeyRoute, deleteWikiRestApiSpaceSpaceKeyRouteHandler)
  .openapi(
    postWikiRestApiSpaceSpaceKeyPermissionRoute,
    postWikiRestApiSpaceSpaceKeyPermissionRouteHandler,
  )
  .openapi(
    postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute,
    postWikiRestApiSpaceSpaceKeyPermissionCustomContentRouteHandler,
  )
  .openapi(
    deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute,
    deleteWikiRestApiSpaceSpaceKeyPermissionIdRouteHandler,
  )
  .openapi(
    getWikiRestApiSpaceSpaceKeySettingsRoute,
    getWikiRestApiSpaceSpaceKeySettingsRouteHandler,
  )
  .openapi(
    putWikiRestApiSpaceSpaceKeySettingsRoute,
    putWikiRestApiSpaceSpaceKeySettingsRouteHandler,
  )
  .openapi(getWikiRestApiSpaceSpaceKeyStateRoute, getWikiRestApiSpaceSpaceKeyStateRouteHandler)
  .openapi(
    getWikiRestApiSpaceSpaceKeyStateSettingsRoute,
    getWikiRestApiSpaceSpaceKeyStateSettingsRouteHandler,
  )
  .openapi(
    getWikiRestApiSpaceSpaceKeyStateContentRoute,
    getWikiRestApiSpaceSpaceKeyStateContentRouteHandler,
  )
  .openapi(getWikiRestApiSpaceSpaceKeyThemeRoute, getWikiRestApiSpaceSpaceKeyThemeRouteHandler)
  .openapi(putWikiRestApiSpaceSpaceKeyThemeRoute, putWikiRestApiSpaceSpaceKeyThemeRouteHandler)
  .openapi(
    deleteWikiRestApiSpaceSpaceKeyThemeRoute,
    deleteWikiRestApiSpaceSpaceKeyThemeRouteHandler,
  )
  .openapi(getWikiRestApiSpaceSpaceKeyWatchRoute, getWikiRestApiSpaceSpaceKeyWatchRouteHandler)
  .openapi(getWikiRestApiSpaceSpaceKeyLabelRoute, getWikiRestApiSpaceSpaceKeyLabelRouteHandler)
  .openapi(postWikiRestApiSpaceSpaceKeyLabelRoute, postWikiRestApiSpaceSpaceKeyLabelRouteHandler)
  .openapi(
    deleteWikiRestApiSpaceSpaceKeyLabelRoute,
    deleteWikiRestApiSpaceSpaceKeyLabelRouteHandler,
  )
  .openapi(putWikiRestApiTemplateRoute, putWikiRestApiTemplateRouteHandler)
  .openapi(postWikiRestApiTemplateRoute, postWikiRestApiTemplateRouteHandler)
  .openapi(getWikiRestApiTemplateBlueprintRoute, getWikiRestApiTemplateBlueprintRouteHandler)
  .openapi(getWikiRestApiTemplatePageRoute, getWikiRestApiTemplatePageRouteHandler)
  .openapi(
    getWikiRestApiTemplateContentTemplateIdRoute,
    getWikiRestApiTemplateContentTemplateIdRouteHandler,
  )
  .openapi(
    deleteWikiRestApiTemplateContentTemplateIdRoute,
    deleteWikiRestApiTemplateContentTemplateIdRouteHandler,
  )
  .openapi(getWikiRestApiUserRoute, getWikiRestApiUserRouteHandler)
  .openapi(getWikiRestApiUserAnonymousRoute, getWikiRestApiUserAnonymousRouteHandler)
  .openapi(getWikiRestApiUserCurrentRoute, getWikiRestApiUserCurrentRouteHandler)
  .openapi(getWikiRestApiUserMemberofRoute, getWikiRestApiUserMemberofRouteHandler)
  .openapi(getWikiRestApiUserBulkRoute, getWikiRestApiUserBulkRouteHandler)
  .openapi(
    getWikiRestApiUserWatchContentContentIdRoute,
    getWikiRestApiUserWatchContentContentIdRouteHandler,
  )
  .openapi(
    postWikiRestApiUserWatchContentContentIdRoute,
    postWikiRestApiUserWatchContentContentIdRouteHandler,
  )
  .openapi(
    deleteWikiRestApiUserWatchContentContentIdRoute,
    deleteWikiRestApiUserWatchContentContentIdRouteHandler,
  )
  .openapi(
    getWikiRestApiUserWatchLabelLabelNameRoute,
    getWikiRestApiUserWatchLabelLabelNameRouteHandler,
  )
  .openapi(
    postWikiRestApiUserWatchLabelLabelNameRoute,
    postWikiRestApiUserWatchLabelLabelNameRouteHandler,
  )
  .openapi(
    deleteWikiRestApiUserWatchLabelLabelNameRoute,
    deleteWikiRestApiUserWatchLabelLabelNameRouteHandler,
  )
  .openapi(
    getWikiRestApiUserWatchSpaceSpaceKeyRoute,
    getWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  )
  .openapi(
    postWikiRestApiUserWatchSpaceSpaceKeyRoute,
    postWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  )
  .openapi(
    deleteWikiRestApiUserWatchSpaceSpaceKeyRoute,
    deleteWikiRestApiUserWatchSpaceSpaceKeyRouteHandler,
  )
  .openapi(getWikiRestApiUserEmailRoute, getWikiRestApiUserEmailRouteHandler)
  .openapi(getWikiRestApiUserEmailBulkRoute, getWikiRestApiUserEmailBulkRouteHandler)
  .openapi(
    getWikiRestAtlassianConnect1AppModuleDynamicRoute,
    getWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  )
  .openapi(
    postWikiRestAtlassianConnect1AppModuleDynamicRoute,
    postWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  )
  .openapi(
    deleteWikiRestAtlassianConnect1AppModuleDynamicRoute,
    deleteWikiRestAtlassianConnect1AppModuleDynamicRouteHandler,
  )
  .openapi(
    getWikiRestApiAnalyticsContentContentIdViewsRoute,
    getWikiRestApiAnalyticsContentContentIdViewsRouteHandler,
  )
  .openapi(
    getWikiRestApiAnalyticsContentContentIdViewersRoute,
    getWikiRestApiAnalyticsContentContentIdViewersRouteHandler,
  )
  .openapi(getWikiRestApiUserUserIdPropertyRoute, getWikiRestApiUserUserIdPropertyRouteHandler)
  .openapi(
    getWikiRestApiUserUserIdPropertyKeyRoute,
    getWikiRestApiUserUserIdPropertyKeyRouteHandler,
  )
  .openapi(
    putWikiRestApiUserUserIdPropertyKeyRoute,
    putWikiRestApiUserUserIdPropertyKeyRouteHandler,
  )
  .openapi(
    postWikiRestApiUserUserIdPropertyKeyRoute,
    postWikiRestApiUserUserIdPropertyKeyRouteHandler,
  )
  .openapi(
    deleteWikiRestApiUserUserIdPropertyKeyRoute,
    deleteWikiRestApiUserUserIdPropertyKeyRouteHandler,
  )

export default app
