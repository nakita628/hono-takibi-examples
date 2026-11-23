import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWikiRestApiAudit(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.audit.$get(args, options))
}

export async function postWikiRestApiAudit(
  args: InferRequestType<typeof client.wiki.rest.api.audit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.audit.$post(args, options))
}

export async function getWikiRestApiAuditExport(
  args: InferRequestType<typeof client.wiki.rest.api.audit.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.audit.export.$get(args, options))
}

export async function getWikiRestApiAuditRetention(options?: ClientRequestOptions) {
  return await parseResponse(client.wiki.rest.api.audit.retention.$get(undefined, options))
}

export async function putWikiRestApiAuditRetention(
  args: InferRequestType<typeof client.wiki.rest.api.audit.retention.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.audit.retention.$put(args, options))
}

export async function getWikiRestApiAuditSince(
  args: InferRequestType<typeof client.wiki.rest.api.audit.since.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.audit.since.$get(args, options))
}

export async function postWikiRestApiContentArchive(
  args: InferRequestType<typeof client.wiki.rest.api.content.archive.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content.archive.$post(args, options))
}

export async function putWikiRestApiContentBlueprintInstanceDraftId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content.blueprint.instance[':draftId'].$put(args, options),
  )
}

export async function postWikiRestApiContentBlueprintInstanceDraftId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content.blueprint.instance)[':draftId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content.blueprint.instance[':draftId'].$post(args, options),
  )
}

export async function getWikiRestApiContentSearch(
  args: InferRequestType<typeof client.wiki.rest.api.content.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content.search.$get(args, options))
}

export async function deleteWikiRestApiContentIdPageTree(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['pageTree']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].pageTree.$delete(args, options))
}

export async function putWikiRestApiContentPageIdMovePositionTargetId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':pageId']['move'][':position'][':targetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':pageId'].move[':position'][':targetId'].$put(args, options),
  )
}

export async function putWikiRestApiContentIdChildAttachment(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].child.attachment.$put(args, options),
  )
}

export async function postWikiRestApiContentIdChildAttachment(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].child.attachment.$post(args, options),
  )
}

export async function putWikiRestApiContentIdChildAttachmentAttachmentId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].$put(args, options),
  )
}

export async function postWikiRestApiContentIdChildAttachmentAttachmentIdData(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['data']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].data.$post(args, options),
  )
}

export async function getWikiRestApiContentIdChildAttachmentAttachmentIdDownload(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['child']['attachment'][':attachmentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].child.attachment[':attachmentId'].download.$get(
      args,
      options,
    ),
  )
}

export async function getWikiRestApiContentIdDescendant(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['descendant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].descendant.$get(args, options))
}

export async function getWikiRestApiContentIdDescendantType(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['descendant'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].descendant[':type'].$get(args, options),
  )
}

export async function getWikiRestApiContentIdHistoryVersionMacroIdMacroId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].$get(
      args,
      options,
    ),
  )
}

export async function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertTo(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert[
      ':to'
    ].$get(args, options),
  )
}

export async function getWikiRestApiContentIdHistoryVersionMacroIdMacroIdConvertAsyncTo(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['history'][':version']['macro']['id'][':macroId']['convert']['async'][':to']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].history[':version'].macro.id[':macroId'].convert.async[
      ':to'
    ].$get(args, options),
  )
}

export async function postWikiRestApiContentIdLabel(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].label.$post(args, options))
}

export async function deleteWikiRestApiContentIdLabel(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['label']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].label.$delete(args, options))
}

export async function deleteWikiRestApiContentIdLabelLabel(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['label'][':label']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].label[':label'].$delete(args, options),
  )
}

export async function getWikiRestApiContentIdNotificationChildCreated(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['child-created']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].notification['child-created'].$get(args, options),
  )
}

export async function getWikiRestApiContentIdNotificationCreated(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['notification']['created']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].notification.created.$get(args, options),
  )
}

export async function postWikiRestApiContentIdPagehierarchyCopy(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['pagehierarchy']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].pagehierarchy.copy.$post(args, options),
  )
}

export async function postWikiRestApiContentIdCopy(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].copy.$post(args, options))
}

export async function postWikiRestApiContentIdPermissionCheck(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['permission']['check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].permission.check.$post(args, options),
  )
}

export async function getWikiRestApiContentIdRestriction(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].restriction.$get(args, options))
}

export async function putWikiRestApiContentIdRestriction(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].restriction.$put(args, options))
}

export async function postWikiRestApiContentIdRestriction(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].restriction.$post(args, options))
}

export async function deleteWikiRestApiContentIdRestriction(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['restriction']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].restriction.$delete(args, options))
}

export async function getWikiRestApiContentIdRestrictionByOperation(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation.$get(args, options),
  )
}

export async function getWikiRestApiContentIdRestrictionByOperationOperationKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].$get(
      args,
      options,
    ),
  )
}

export async function getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
      ':groupId'
    ].$get(args, options),
  )
}

export async function putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
      ':groupId'
    ].$put(args, options),
  )
}

export async function deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['byGroupId'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].byGroupId[
      ':groupId'
    ].$delete(args, options),
  )
}

export async function getWikiRestApiContentIdRestrictionByOperationOperationKeyUser(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$get(
      args,
      options,
    ),
  )
}

export async function putWikiRestApiContentIdRestrictionByOperationOperationKeyUser(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$put(
      args,
      options,
    ),
  )
}

export async function deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUser(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['restriction']['byOperation'][':operationKey']['user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].restriction.byOperation[':operationKey'].user.$delete(
      args,
      options,
    ),
  )
}

export async function getWikiRestApiContentIdState(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].state.$get(args, options))
}

export async function putWikiRestApiContentIdState(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].state.$put(args, options))
}

export async function deleteWikiRestApiContentIdState(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['state']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].state.$delete(args, options))
}

export async function getWikiRestApiContentIdStateAvailable(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['state']['available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].state.available.$get(args, options),
  )
}

export async function postWikiRestApiContentIdVersion(
  args: InferRequestType<(typeof client.wiki.rest.api.content)[':id']['version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.content[':id'].version.$post(args, options))
}

export async function deleteWikiRestApiContentIdVersionVersionNumber(
  args: InferRequestType<
    (typeof client.wiki.rest.api.content)[':id']['version'][':versionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.content[':id'].version[':versionNumber'].$delete(args, options),
  )
}

export async function getWikiRestApiContentStates(options?: ClientRequestOptions) {
  return await parseResponse(client.wiki.rest.api['content-states'].$get(undefined, options))
}

export async function postWikiRestApiContentbodyConvertAsyncTo(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.contentbody.convert.async[':to'].$post(args, options),
  )
}

export async function getWikiRestApiContentbodyConvertAsyncId(
  args: InferRequestType<(typeof client.wiki.rest.api.contentbody.convert.async)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.contentbody.convert.async[':id'].$get(args, options),
  )
}

export async function getWikiRestApiContentbodyConvertAsyncBulkTasks(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$get(args, options),
  )
}

export async function postWikiRestApiContentbodyConvertAsyncBulkTasks(
  args: InferRequestType<typeof client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.contentbody.convert.async.bulk.tasks.$post(args, options),
  )
}

export async function getWikiRestApiLabel(
  args: InferRequestType<typeof client.wiki.rest.api.label.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.label.$get(args, options))
}

export async function getWikiRestApiGroup(
  args: InferRequestType<typeof client.wiki.rest.api.group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group.$get(args, options))
}

export async function postWikiRestApiGroup(
  args: InferRequestType<typeof client.wiki.rest.api.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group.$post(args, options))
}

export async function getWikiRestApiGroupById(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group['by-id'].$get(args, options))
}

export async function deleteWikiRestApiGroupById(
  args: InferRequestType<(typeof client.wiki.rest.api.group)['by-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group['by-id'].$delete(args, options))
}

export async function getWikiRestApiGroupPicker(
  args: InferRequestType<typeof client.wiki.rest.api.group.picker.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group.picker.$get(args, options))
}

export async function getWikiRestApiGroupGroupIdMembersByGroupId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.group)[':groupId']['membersByGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.group[':groupId'].membersByGroupId.$get(args, options),
  )
}

export async function postWikiRestApiGroupUserByGroupId(
  args: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group.userByGroupId.$post(args, options))
}

export async function deleteWikiRestApiGroupUserByGroupId(
  args: InferRequestType<typeof client.wiki.rest.api.group.userByGroupId.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.group.userByGroupId.$delete(args, options))
}

export async function getWikiRestApiLongtask(
  args: InferRequestType<typeof client.wiki.rest.api.longtask.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.longtask.$get(args, options))
}

export async function getWikiRestApiLongtaskId(
  args: InferRequestType<(typeof client.wiki.rest.api.longtask)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.longtask[':id'].$get(args, options))
}

export async function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetType(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
      ':targetType'
    ].$get(args, options),
  )
}

export async function getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
      ':targetType'
    ][':targetKey'].$get(args, options),
  )
}

export async function putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
      ':targetType'
    ][':targetKey'].$put(args, options),
  )
}

export async function deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['from'][':sourceType'][':sourceKey']['to'][':targetType'][':targetKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.relation[':relationName'].from[':sourceType'][':sourceKey'].to[
      ':targetType'
    ][':targetKey'].$delete(args, options),
  )
}

export async function getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceType(
  args: InferRequestType<
    (typeof client.wiki.rest.api.relation)[':relationName']['to'][':targetType'][':targetKey']['from'][':sourceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.relation[':relationName'].to[':targetType'][':targetKey'].from[
      ':sourceType'
    ].$get(args, options),
  )
}

export async function getWikiRestApiSearch(
  args: InferRequestType<typeof client.wiki.rest.api.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.search.$get(args, options))
}

export async function getWikiRestApiSearchUser(
  args: InferRequestType<typeof client.wiki.rest.api.search.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.search.user.$get(args, options))
}

export async function getWikiRestApiSettingsLookandfeel(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.settings.lookandfeel.$get(args, options))
}

export async function putWikiRestApiSettingsLookandfeel(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.settings.lookandfeel.$put(args, options))
}

export async function postWikiRestApiSettingsLookandfeelCustom(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.settings.lookandfeel.custom.$post(args, options))
}

export async function deleteWikiRestApiSettingsLookandfeelCustom(
  args: InferRequestType<typeof client.wiki.rest.api.settings.lookandfeel.custom.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.settings.lookandfeel.custom.$delete(args, options),
  )
}

export async function getWikiRestApiSettingsSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.wiki.rest.api.settings.systemInfo.$get(undefined, options))
}

export async function getWikiRestApiSettingsTheme(
  args: InferRequestType<typeof client.wiki.rest.api.settings.theme.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.settings.theme.$get(args, options))
}

export async function getWikiRestApiSettingsThemeSelected(options?: ClientRequestOptions) {
  return await parseResponse(client.wiki.rest.api.settings.theme.selected.$get(undefined, options))
}

export async function getWikiRestApiSettingsThemeThemeKey(
  args: InferRequestType<(typeof client.wiki.rest.api.settings.theme)[':themeKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.settings.theme[':themeKey'].$get(args, options))
}

export async function postWikiRestApiSpace(
  args: InferRequestType<typeof client.wiki.rest.api.space.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space.$post(args, options))
}

export async function postWikiRestApiSpacePrivate(
  args: InferRequestType<typeof client.wiki.rest.api.space._private.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space._private.$post(args, options))
}

export async function putWikiRestApiSpaceSpaceKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].$put(args, options))
}

export async function deleteWikiRestApiSpaceSpaceKey(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].$delete(args, options))
}

export async function postWikiRestApiSpaceSpaceKeyPermission(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['permission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.space[':spaceKey'].permission.$post(args, options),
  )
}

export async function postWikiRestApiSpaceSpaceKeyPermissionCustomContent(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['permission']['custom-content']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.space[':spaceKey'].permission['custom-content'].$post(args, options),
  )
}

export async function deleteWikiRestApiSpaceSpaceKeyPermissionId(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['permission'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.space[':spaceKey'].permission[':id'].$delete(args, options),
  )
}

export async function getWikiRestApiSpaceSpaceKeySettings(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$get(args, options))
}

export async function putWikiRestApiSpaceSpaceKeySettings(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].settings.$put(args, options))
}

export async function getWikiRestApiSpaceSpaceKeyState(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].state.$get(args, options))
}

export async function getWikiRestApiSpaceSpaceKeyStateSettings(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.space[':spaceKey'].state.settings.$get(args, options),
  )
}

export async function getWikiRestApiSpaceSpaceKeyStateContent(
  args: InferRequestType<
    (typeof client.wiki.rest.api.space)[':spaceKey']['state']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.space[':spaceKey'].state.content.$get(args, options),
  )
}

export async function getWikiRestApiSpaceSpaceKeyTheme(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$get(args, options))
}

export async function putWikiRestApiSpaceSpaceKeyTheme(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$put(args, options))
}

export async function deleteWikiRestApiSpaceSpaceKeyTheme(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['theme']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].theme.$delete(args, options))
}

export async function getWikiRestApiSpaceSpaceKeyWatch(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['watch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].watch.$get(args, options))
}

export async function getWikiRestApiSpaceSpaceKeyLabel(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$get(args, options))
}

export async function postWikiRestApiSpaceSpaceKeyLabel(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$post(args, options))
}

export async function deleteWikiRestApiSpaceSpaceKeyLabel(
  args: InferRequestType<(typeof client.wiki.rest.api.space)[':spaceKey']['label']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.space[':spaceKey'].label.$delete(args, options))
}

export async function putWikiRestApiTemplate(
  args: InferRequestType<typeof client.wiki.rest.api.template.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.template.$put(args, options))
}

export async function postWikiRestApiTemplate(
  args: InferRequestType<typeof client.wiki.rest.api.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.template.$post(args, options))
}

export async function getWikiRestApiTemplateBlueprint(
  args: InferRequestType<typeof client.wiki.rest.api.template.blueprint.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.template.blueprint.$get(args, options))
}

export async function getWikiRestApiTemplatePage(
  args: InferRequestType<typeof client.wiki.rest.api.template.page.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.template.page.$get(args, options))
}

export async function getWikiRestApiTemplateContentTemplateId(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.template[':contentTemplateId'].$get(args, options),
  )
}

export async function deleteWikiRestApiTemplateContentTemplateId(
  args: InferRequestType<(typeof client.wiki.rest.api.template)[':contentTemplateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.template[':contentTemplateId'].$delete(args, options),
  )
}

export async function getWikiRestApiUser(
  args: InferRequestType<typeof client.wiki.rest.api.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.$get(args, options))
}

export async function getWikiRestApiUserAnonymous(
  args: InferRequestType<typeof client.wiki.rest.api.user.anonymous.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.anonymous.$get(args, options))
}

export async function getWikiRestApiUserCurrent(
  args: InferRequestType<typeof client.wiki.rest.api.user.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.current.$get(args, options))
}

export async function getWikiRestApiUserMemberof(
  args: InferRequestType<typeof client.wiki.rest.api.user.memberof.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.memberof.$get(args, options))
}

export async function getWikiRestApiUserBulk(
  args: InferRequestType<typeof client.wiki.rest.api.user.bulk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.bulk.$get(args, options))
}

export async function getWikiRestApiUserWatchContentContentId(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.content[':contentId'].$get(args, options),
  )
}

export async function postWikiRestApiUserWatchContentContentId(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.content[':contentId'].$post(args, options),
  )
}

export async function deleteWikiRestApiUserWatchContentContentId(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.content)[':contentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.content[':contentId'].$delete(args, options),
  )
}

export async function getWikiRestApiUserWatchLabelLabelName(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.label[':labelName'].$get(args, options),
  )
}

export async function postWikiRestApiUserWatchLabelLabelName(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.label[':labelName'].$post(args, options),
  )
}

export async function deleteWikiRestApiUserWatchLabelLabelName(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.label)[':labelName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.label[':labelName'].$delete(args, options),
  )
}

export async function getWikiRestApiUserWatchSpaceSpaceKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.watch.space[':spaceKey'].$get(args, options))
}

export async function postWikiRestApiUserWatchSpaceSpaceKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.space[':spaceKey'].$post(args, options),
  )
}

export async function deleteWikiRestApiUserWatchSpaceSpaceKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user.watch.space)[':spaceKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user.watch.space[':spaceKey'].$delete(args, options),
  )
}

export async function getWikiRestApiUserEmail(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.email.$get(args, options))
}

export async function getWikiRestApiUserEmailBulk(
  args: InferRequestType<typeof client.wiki.rest.api.user.email.bulk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user.email.bulk.$get(args, options))
}

export async function getWikiRestAtlassianConnect1AppModuleDynamic(options?: ClientRequestOptions) {
  return await parseResponse(
    client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, options),
  )
}

export async function postWikiRestAtlassianConnect1AppModuleDynamic(
  args: InferRequestType<
    (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$post(args, options),
  )
}

export async function deleteWikiRestAtlassianConnect1AppModuleDynamic(
  args: InferRequestType<
    (typeof client.wiki.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest['atlassian-connect']['1'].app.module.dynamic.$delete(args, options),
  )
}

export async function getWikiRestApiAnalyticsContentContentIdViews(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['views']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.analytics.content[':contentId'].views.$get(args, options),
  )
}

export async function getWikiRestApiAnalyticsContentContentIdViewers(
  args: InferRequestType<
    (typeof client.wiki.rest.api.analytics.content)[':contentId']['viewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.analytics.content[':contentId'].viewers.$get(args, options),
  )
}

export async function getWikiRestApiUserUserIdProperty(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wiki.rest.api.user[':userId'].property.$get(args, options))
}

export async function getWikiRestApiUserUserIdPropertyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user[':userId'].property[':key'].$get(args, options),
  )
}

export async function putWikiRestApiUserUserIdPropertyKey(
  args: InferRequestType<(typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user[':userId'].property[':key'].$put(args, options),
  )
}

export async function postWikiRestApiUserUserIdPropertyKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user[':userId'].property[':key'].$post(args, options),
  )
}

export async function deleteWikiRestApiUserUserIdPropertyKey(
  args: InferRequestType<
    (typeof client.wiki.rest.api.user)[':userId']['property'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wiki.rest.api.user[':userId'].property[':key'].$delete(args, options),
  )
}
