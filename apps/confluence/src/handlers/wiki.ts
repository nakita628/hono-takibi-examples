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
} from '../routes'

const app = new OpenAPIHono()

export const wikiHandler = app
  .openapi(getWikiRestApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiAuditRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditSinceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentBlueprintInstanceDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentBlueprintInstanceDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdPageTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentPageIdMovePositionTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdChildAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdChildAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdChildAttachmentAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdDescendantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdDescendantTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdLabelLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdNotificationChildCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdNotificationCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdPagehierarchyCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdPermissionCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdStateAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdVersionVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentbodyConvertAsyncToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentbodyConvertAsyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentbodyConvertAsyncBulkTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentbodyConvertAsyncBulkTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiGroupByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupGroupIdMembersByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiGroupUserByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiGroupUserByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiLongtaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiLongtaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSearchUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsLookandfeelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSettingsLookandfeelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSettingsLookandfeelCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSettingsLookandfeelCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsThemeSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSettingsThemeThemeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpacePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceSpaceKeyPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceSpaceKeyPermissionCustomContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyStateContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplateBlueprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplatePageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiTemplateContentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiTemplateContentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserAnonymousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserMemberofRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserEmailBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAnalyticsContentContentIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAnalyticsContentContentIdViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserUserIdPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
