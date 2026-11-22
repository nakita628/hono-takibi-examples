import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionsId(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].$get(args, options))
}

export async function putActionsId(
  args: InferRequestType<(typeof client.actions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].$put(args, options))
}

export async function deleteActionsId(
  args: InferRequestType<(typeof client.actions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].$delete(args, options))
}

export async function getActionsIdField(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'][':field'].$get(args, options))
}

export async function getActionsIdBoard(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].board.$get(args, options))
}

export async function getActionsIdCard(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].card.$get(args, options))
}

export async function getActionsIdList(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].list.$get(args, options))
}

export async function getActionsIdMember(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].member.$get(args, options))
}

export async function getActionsIdMemberCreator(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].memberCreator.$get(args, options))
}

export async function getActionsIdOrganization(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].organization.$get(args, options))
}

export async function putActionsIdText(
  args: InferRequestType<(typeof client.actions)[':id']['text']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':id'].text.$put(args, options))
}

export async function getActionsIdActionReactions(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].reactions.$get(args, options))
}

export async function postActionsIdActionReactions(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].reactions.$post(args, options))
}

export async function getActionsIdActionReactionsId(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].reactions[':id'].$get(args, options))
}

export async function deleteActionsIdActionReactionsId(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].reactions[':id'].$delete(args, options))
}

export async function getActionsIdActionReactionsSummary(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].reactionsSummary.$get(args, options))
}

export async function getApplicationsKeyCompliance(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':key'].compliance.$get(args, options))
}

export async function getBatch(
  args: InferRequestType<typeof client.batch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$get(args, options))
}

export async function getBoardsIdMemberships(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].memberships.$get(args, options))
}

export async function getBoardsId(
  args: InferRequestType<(typeof client.boards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].$get(args, options))
}

export async function putBoardsId(
  args: InferRequestType<(typeof client.boards)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].$put(args, options))
}

export async function deleteBoardsId(
  args: InferRequestType<(typeof client.boards)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].$delete(args, options))
}

export async function getBoardsIdField(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'][':field'].$get(args, options))
}

export async function getBoardsBoardIdActions(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':boardId'].actions.$get(args, options))
}

export async function getBoardsBoardIdBoardStars(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':boardId'].boardStars.$get(args, options))
}

export async function getBoardsIdChecklists(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].checklists.$get(args, options))
}

export async function getBoardsIdCards(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].cards.$get(args, options))
}

export async function getBoardsIdCardsFilter(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].cards[':filter'].$get(args, options))
}

export async function getBoardsIdCustomFields(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].customFields.$get(args, options))
}

export async function getBoardsIdLabels(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].labels.$get(args, options))
}

export async function postBoardsIdLabels(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].labels.$post(args, options))
}

export async function getBoardsIdLists(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].lists.$get(args, options))
}

export async function postBoardsIdLists(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].lists.$post(args, options))
}

export async function getBoardsIdListsFilter(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].lists[':filter'].$get(args, options))
}

export async function getBoardsIdMembers(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].members.$get(args, options))
}

export async function putBoardsIdMembers(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].members.$put(args, options))
}

export async function putBoardsIdMembersIdMember(
  args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].members[':idMember'].$put(args, options))
}

export async function deleteBoardsIdMembersIdMember(
  args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].members[':idMember'].$delete(args, options))
}

export async function putBoardsIdMembershipsIdMembership(
  args: InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].memberships[':idMembership'].$put(args, options))
}

export async function putBoardsIdMyPrefsEmailPosition(
  args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].myPrefs.emailPosition.$put(args, options))
}

export async function putBoardsIdMyPrefsIdEmailList(
  args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].myPrefs.idEmailList.$put(args, options))
}

export async function putBoardsIdMyPrefsShowSidebar(
  args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].myPrefs.showSidebar.$put(args, options))
}

export async function putBoardsIdMyPrefsShowSidebarActivity(
  args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].myPrefs.showSidebarActivity.$put(args, options))
}

export async function putBoardsIdMyPrefsShowSidebarBoardActions(
  args: InferRequestType<
    (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':id'].myPrefs.showSidebarBoardActions.$put(args, options),
  )
}

export async function putBoardsIdMyPrefsShowSidebarMembers(
  args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].myPrefs.showSidebarMembers.$put(args, options))
}

export async function postBoardsIndex(
  args: InferRequestType<typeof client.boards.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards.index.$post(args, options))
}

export async function postBoardsIdCalendarKeyGenerate(
  args: InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].calendarKey.generate.$post(args, options))
}

export async function postBoardsIdEmailKeyGenerate(
  args: InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].emailKey.generate.$post(args, options))
}

export async function postBoardsIdIdTags(
  args: InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].idTags.$post(args, options))
}

export async function postBoardsIdMarkAsViewed(
  args: InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].markAsViewed.$post(args, options))
}

export async function getBoardsIdBoardPlugins(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].boardPlugins.$get(args, options))
}

export async function postBoardsIdBoardPlugins(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].boardPlugins.$post(args, options))
}

export async function deleteBoardsIdBoardPluginsIdPlugin(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].boardPlugins[':idPlugin'].$delete(args, options))
}

export async function getBoardsIdPlugins(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].plugins.$get(args, options))
}

export async function postBoardsIdExports(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].exports.$post(args, options))
}

export async function getBoardsIdExportsIdExport(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].exports[':idExport'].$get(args, options))
}

export async function deleteBoardsIdExportsIdExport(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].exports[':idExport'].$delete(args, options))
}

export async function getBoardsIdExportsIdExportDownload(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].exports[':idExport'].download.$get(args, options))
}

export async function getBoardsIdExportsMostRecent(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':id'].exports.mostRecent.$get(args, options))
}

export async function postCards(
  args: InferRequestType<typeof client.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$post(args, options))
}

export async function getCardsId(
  args: InferRequestType<(typeof client.cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].$get(args, options))
}

export async function putCardsId(
  args: InferRequestType<(typeof client.cards)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].$put(args, options))
}

export async function deleteCardsId(
  args: InferRequestType<(typeof client.cards)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].$delete(args, options))
}

export async function getCardsIdField(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'][':field'].$get(args, options))
}

export async function getCardsIdActions(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].actions.$get(args, options))
}

export async function getCardsIdAttachments(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].attachments.$get(args, options))
}

export async function postCardsIdAttachments(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].attachments.$post(args, options))
}

export async function getCardsIdAttachmentsIdAttachment(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].attachments[':idAttachment'].$get(args, options))
}

export async function deleteCardsIdAttachmentsIdAttachment(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':id'].attachments[':idAttachment'].$delete(args, options),
  )
}

export async function getCardsIdBoard(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].board.$get(args, options))
}

export async function getCardsIdCheckItemStates(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checkItemStates.$get(args, options))
}

export async function getCardsIdChecklists(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checklists.$get(args, options))
}

export async function postCardsIdChecklists(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checklists.$post(args, options))
}

export async function getCardsIdCheckItemIdCheckItem(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$get(args, options))
}

export async function putCardsIdCheckItemIdCheckItem(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$put(args, options))
}

export async function deleteCardsIdCheckItemIdCheckItem(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$delete(args, options))
}

export async function getCardsIdList(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].list.$get(args, options))
}

export async function getCardsIdMembers(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].members.$get(args, options))
}

export async function getCardsIdMembersVoted(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].membersVoted.$get(args, options))
}

export async function postCardsIdMembersVoted(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].membersVoted.$post(args, options))
}

export async function getCardsIdPluginData(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].pluginData.$get(args, options))
}

export async function getCardsIdStickers(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].stickers.$get(args, options))
}

export async function postCardsIdStickers(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].stickers.$post(args, options))
}

export async function getCardsIdStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].stickers[':idSticker'].$get(args, options))
}

export async function putCardsIdStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].stickers[':idSticker'].$put(args, options))
}

export async function deleteCardsIdStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].stickers[':idSticker'].$delete(args, options))
}

export async function putCardsIdActionsIdActionComments(
  args: InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].actions[':idAction'].comments.$put(args, options))
}

export async function deleteCardsIdActionsIdActionComments(
  args: InferRequestType<
    (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':id'].actions[':idAction'].comments.$delete(args, options),
  )
}

export async function putCardsIdCardCustomFieldIdCustomFieldItem(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].customField[':idCustomField'].item.$put(args, options),
  )
}

export async function putCardsIdCardCustomFields(
  args: InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].customFields.$put(args, options))
}

export async function getCardsIdCustomFieldItems(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].customFieldItems.$get(args, options))
}

export async function postCardsIdActionsComments(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].actions.comments.$post(args, options))
}

export async function postCardsIdIdLabels(
  args: InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].idLabels.$post(args, options))
}

export async function postCardsIdIdMembers(
  args: InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].idMembers.$post(args, options))
}

export async function postCardsIdLabels(
  args: InferRequestType<(typeof client.cards)[':id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].labels.$post(args, options))
}

export async function postCardsIdMarkAssociatedNotificationsRead(
  args: InferRequestType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':id'].markAssociatedNotificationsRead.$post(args, options),
  )
}

export async function deleteCardsIdIdLabelsIdLabel(
  args: InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].idLabels[':idLabel'].$delete(args, options))
}

export async function deleteCardsIdIdMembersIdMember(
  args: InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].idMembers[':idMember'].$delete(args, options))
}

export async function deleteCardsIdMembersVotedIdMember(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].membersVoted[':idMember'].$delete(args, options))
}

export async function putCardsIdCardChecklistIdChecklistCheckItemIdCheckItem(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$put(args, options),
  )
}

export async function deleteCardsIdChecklistsIdChecklist(
  args: InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':id'].checklists[':idChecklist'].$delete(args, options))
}

export async function postChecklists(
  args: InferRequestType<typeof client.checklists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists.$post(args, options))
}

export async function getChecklistsId(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].$get(args, options))
}

export async function putChecklistsId(
  args: InferRequestType<(typeof client.checklists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].$put(args, options))
}

export async function deleteChecklistsId(
  args: InferRequestType<(typeof client.checklists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].$delete(args, options))
}

export async function getChecklistsIdField(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'][':field'].$get(args, options))
}

export async function putChecklistsIdField(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'][':field'].$put(args, options))
}

export async function getChecklistsIdBoard(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].board.$get(args, options))
}

export async function getChecklistsIdCards(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].cards.$get(args, options))
}

export async function getChecklistsIdCheckItems(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].checkItems.$get(args, options))
}

export async function postChecklistsIdCheckItems(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':id'].checkItems.$post(args, options))
}

export async function getChecklistsIdCheckItemsIdCheckItem(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checklists[':id'].checkItems[':idCheckItem'].$get(args, options),
  )
}

export async function deleteChecklistsIdCheckItemsIdCheckItem(
  args: InferRequestType<
    (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checklists[':id'].checkItems[':idCheckItem'].$delete(args, options),
  )
}

export async function postCustomFields(
  args: InferRequestType<typeof client.customFields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields.$post(args, options))
}

export async function getCustomFieldsId(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields[':id'].$get(args, options))
}

export async function putCustomFieldsId(
  args: InferRequestType<(typeof client.customFields)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields[':id'].$put(args, options))
}

export async function deleteCustomFieldsId(
  args: InferRequestType<(typeof client.customFields)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields[':id'].$delete(args, options))
}

export async function getCustomFieldsIdOptions(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields[':id'].options.$get(args, options))
}

export async function postCustomFieldsIdOptions(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customFields[':id'].options.$post(args, options))
}

export async function getCustomFieldsIdOptionsIdCustomFieldOption(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customFields[':id'].options[':idCustomFieldOption'].$get(args, options),
  )
}

export async function deleteCustomFieldsIdOptionsIdCustomFieldOption(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customFields[':id'].options[':idCustomFieldOption'].$delete(args, options),
  )
}

export async function getEmoji(
  args: InferRequestType<typeof client.emoji.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emoji.$get(args, options))
}

export async function getEnterprisesId(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].$get(args, options))
}

export async function getEnterprisesIdAuditlog(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].auditlog.$get(args, options))
}

export async function getEnterprisesIdAdmins(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].admins.$get(args, options))
}

export async function getEnterprisesIdSignupUrl(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].signupUrl.$get(args, options))
}

export async function getEnterprisesIdMembersQuery(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].members.query.$get(args, options))
}

export async function getEnterprisesIdMembers(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].members.$get(args, options))
}

export async function getEnterprisesIdMembersIdMember(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].members[':idMember'].$get(args, options))
}

export async function getEnterprisesIdTransferrableOrganizationIdOrganization(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(args, options),
  )
}

export async function getEnterprisesIdTransferrableBulkIdOrganizations(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(args, options),
  )
}

export async function putEnterprisesIdEnterpriseJoinRequestBulk(
  args: InferRequestType<
    (typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises['$:id'].enterpriseJoinRequest.bulk.$put(args, options),
  )
}

export async function getEnterprisesIdClaimableOrganizations(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].claimableOrganizations.$get(args, options))
}

export async function getEnterprisesIdPendingOrganizations(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].pendingOrganizations.$get(args, options))
}

export async function postEnterprisesIdTokens(
  args: InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].tokens.$post(args, options))
}

export async function getEnterprisesIdOrganizations(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].organizations.$get(args, options))
}

export async function putEnterprisesIdOrganizations(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].organizations.$put(args, options))
}

export async function putEnterprisesIdMembersIdMemberLicensed(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].members[':idMember'].licensed.$put(args, options),
  )
}

export async function putEnterprisesIdMembersIdMemberDeactivated(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].members[':idMember'].deactivated.$put(args, options),
  )
}

export async function putEnterprisesIdAdminsIdMember(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].admins[':idMember'].$put(args, options))
}

export async function deleteEnterprisesIdAdminsIdMember(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprises[':id'].admins[':idMember'].$delete(args, options))
}

export async function deleteEnterprisesIdOrganizationsIdOrg(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].organizations[':idOrg'].$delete(args, options),
  )
}

export async function getEnterprisesIdOrganizationsBulkIdOrganizations(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(args, options),
  )
}

export async function getLabelsId(
  args: InferRequestType<(typeof client.labels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].$get(args, options))
}

export async function putLabelsId(
  args: InferRequestType<(typeof client.labels)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].$put(args, options))
}

export async function deleteLabelsId(
  args: InferRequestType<(typeof client.labels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'].$delete(args, options))
}

export async function putLabelsIdField(
  args: InferRequestType<(typeof client.labels)[':id'][':field']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':id'][':field'].$put(args, options))
}

export async function postLabels(
  args: InferRequestType<typeof client.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$post(args, options))
}

export async function getListsId(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].$get(args, options))
}

export async function putListsId(
  args: InferRequestType<(typeof client.lists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].$put(args, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function postListsIdArchiveAllCards(
  args: InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].archiveAllCards.$post(args, options))
}

export async function postListsIdMoveAllCards(
  args: InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].moveAllCards.$post(args, options))
}

export async function putListsIdClosed(
  args: InferRequestType<(typeof client.lists)[':id']['closed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].closed.$put(args, options))
}

export async function putListsIdIdBoard(
  args: InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].idBoard.$put(args, options))
}

export async function putListsIdField(
  args: InferRequestType<(typeof client.lists)[':id'][':field']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'][':field'].$put(args, options))
}

export async function getListsIdActions(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].actions.$get(args, options))
}

export async function getListsIdBoard(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].board.$get(args, options))
}

export async function getListsIdCards(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':id'].cards.$get(args, options))
}

export async function getMembersId(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].$get(args, options))
}

export async function putMembersId(
  args: InferRequestType<(typeof client.members)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].$put(args, options))
}

export async function getMembersIdField(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'][':field'].$get(args, options))
}

export async function getMembersIdActions(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].actions.$get(args, options))
}

export async function getMembersIdBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardBackgrounds.$get(args, options))
}

export async function postMembersIdBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardBackgrounds.$post(args, options))
}

export async function getMembersIdBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].boardBackgrounds[':idBackground'].$get(args, options),
  )
}

export async function putMembersIdBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].boardBackgrounds[':idBackground'].$put(args, options),
  )
}

export async function deleteMembersIdBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].boardBackgrounds[':idBackground'].$delete(args, options),
  )
}

export async function getMembersIdBoardStars(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardStars.$get(args, options))
}

export async function postMembersIdBoardStars(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardStars.$post(args, options))
}

export async function getMembersIdBoardStarsIdStar(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardStars[':idStar'].$get(args, options))
}

export async function putMembersIdBoardStarsIdStar(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardStars[':idStar'].$put(args, options))
}

export async function deleteMembersIdBoardStarsIdStar(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardStars[':idStar'].$delete(args, options))
}

export async function getMembersIdBoards(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boards.$get(args, options))
}

export async function getMembersIdBoardsInvited(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].boardsInvited.$get(args, options))
}

export async function getMembersIdCards(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].cards.$get(args, options))
}

export async function getMembersIdCustomBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customBoardBackgrounds.$get(args, options))
}

export async function postMembersIdCustomBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customBoardBackgrounds.$post(args, options))
}

export async function getMembersIdCustomBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].customBoardBackgrounds[':idBackground'].$get(args, options),
  )
}

export async function putMembersIdCustomBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].customBoardBackgrounds[':idBackground'].$put(args, options),
  )
}

export async function deleteMembersIdCustomBoardBackgroundsIdBackground(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].customBoardBackgrounds[':idBackground'].$delete(args, options),
  )
}

export async function getMembersIdCustomEmoji(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customEmoji.$get(args, options))
}

export async function postMembersIdCustomEmoji(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customEmoji.$post(args, options))
}

export async function getMembersIdCustomEmojiIdEmoji(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customEmoji[':idEmoji'].$get(args, options))
}

export async function getMembersIdCustomStickers(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customStickers.$get(args, options))
}

export async function postMembersIdCustomStickers(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customStickers.$post(args, options))
}

export async function getMembersIdCustomStickersIdSticker(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].customStickers[':idSticker'].$get(args, options))
}

export async function deleteMembersIdCustomStickersIdSticker(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].customStickers[':idSticker'].$delete(args, options),
  )
}

export async function getMembersIdNotifications(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].notifications.$get(args, options))
}

export async function getMembersIdOrganizations(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].organizations.$get(args, options))
}

export async function getMembersIdOrganizationsInvited(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].organizationsInvited.$get(args, options))
}

export async function getMembersIdSavedSearches(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].savedSearches.$get(args, options))
}

export async function postMembersIdSavedSearches(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].savedSearches.$post(args, options))
}

export async function getMembersIdSavedSearchesIdSearch(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].savedSearches[':idSearch'].$get(args, options))
}

export async function putMembersIdSavedSearchesIdSearch(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].savedSearches[':idSearch'].$put(args, options))
}

export async function deleteMembersIdSavedSearchesIdSearch(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].savedSearches[':idSearch'].$delete(args, options),
  )
}

export async function getMembersIdTokens(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].tokens.$get(args, options))
}

export async function postMembersIdAvatar(
  args: InferRequestType<(typeof client.members)[':id']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].avatar.$post(args, options))
}

export async function postMembersIdOneTimeMessagesDismissed(
  args: InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].oneTimeMessagesDismissed.$post(args, options))
}

export async function getMembersIdNotificationChannelSettings(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].notificationChannelSettings.$get(args, options))
}

export async function putMembersIdNotificationChannelSettings(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].notificationChannelSettings.$put(args, options))
}

export async function getMembersIdNotificationChannelSettingsChannel(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].notificationChannelSettings[':channel'].$get(args, options),
  )
}

export async function putMembersIdNotificationChannelSettingsChannel(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].notificationChannelSettings[':channel'].$put(args, options),
  )
}

export async function putMembersIdNotificationChannelSettingsChannelBlockedKeys(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':id'].notificationChannelSettings[':channel'][':blockedKeys'].$put(
      args,
      options,
    ),
  )
}

export async function getNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$get(args, options))
}

export async function putNotificationsId(
  args: InferRequestType<(typeof client.notifications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].$put(args, options))
}

export async function getNotificationsIdField(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'][':field'].$get(args, options))
}

export async function postNotificationsAllRead(
  args: InferRequestType<typeof client.notifications.all.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.all.read.$post(args, options))
}

export async function putNotificationsIdUnread(
  args: InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].unread.$put(args, options))
}

export async function getNotificationsIdBoard(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].board.$get(args, options))
}

export async function getNotificationsIdCard(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].card.$get(args, options))
}

export async function getNotificationsIdList(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].list.$get(args, options))
}

export async function getNotificationsIdMember(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].member.$get(args, options))
}

export async function getNotificationsIdMemberCreator(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].memberCreator.$get(args, options))
}

export async function getNotificationsIdOrganization(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':id'].organization.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$get(args, options))
}

export async function putOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$put(args, options))
}

export async function deleteOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$delete(args, options))
}

export async function getOrganizationsIdField(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'][':field'].$get(args, options))
}

export async function getOrganizationsIdActions(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].actions.$get(args, options))
}

export async function getOrganizationsIdBoards(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].boards.$get(args, options))
}

export async function getOrganizationsIdExports(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].exports.$get(args, options))
}

export async function postOrganizationsIdExports(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].exports.$post(args, options))
}

export async function getOrganizationsIdMembers(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].members.$get(args, options))
}

export async function putOrganizationsIdMembers(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].members.$put(args, options))
}

export async function getOrganizationsIdMemberships(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].memberships.$get(args, options))
}

export async function getOrganizationsIdMembershipsIdMembership(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].memberships[':idMembership'].$get(args, options),
  )
}

export async function getOrganizationsIdPluginData(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].pluginData.$get(args, options))
}

export async function getOrganizationsIdTags(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].tags.$get(args, options))
}

export async function postOrganizationsIdTags(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].tags.$post(args, options))
}

export async function putOrganizationsIdMembersIdMember(
  args: InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].members[':idMember'].$put(args, options))
}

export async function deleteOrganizationsIdMembersIdMember(
  args: InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].members[':idMember'].$delete(args, options),
  )
}

export async function putOrganizationsIdMembersIdMemberDeactivated(
  args: InferRequestType<
    (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].members[':idMember'].deactivated.$put(args, options),
  )
}

export async function postOrganizationsIdLogo(
  args: InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].logo.$post(args, options))
}

export async function deleteOrganizationsIdLogo(
  args: InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].logo.$delete(args, options))
}

export async function deleteOrganizationsIdMembersIdMemberAll(
  args: InferRequestType<
    (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].members[':idMember'].all.$delete(args, options),
  )
}

export async function deleteOrganizationsIdPrefsAssociatedDomain(
  args: InferRequestType<
    (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].prefs.associatedDomain.$delete(args, options),
  )
}

export async function deleteOrganizationsIdPrefsOrgInviteRestrict(
  args: InferRequestType<
    (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].prefs.orgInviteRestrict.$delete(args, options),
  )
}

export async function deleteOrganizationsIdTagsIdTag(
  args: InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].tags[':idTag'].$delete(args, options))
}

export async function getOrganizationsIdNewBillableGuestsIdBoard(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':id'].newBillableGuests[':idBoard'].$get(args, options),
  )
}

export async function getPluginsIdIndex(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':id'].index.$get(args, options))
}

export async function putPluginsIdIndex(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':id'].index.$put(args, options))
}

export async function postPluginsIdPluginListings(
  args: InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':idPlugin'].listings.$post(args, options))
}

export async function getPluginsIdComplianceMemberPrivacy(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':id'].compliance.memberPrivacy.$get(args, options))
}

export async function putPluginsIdPluginListingsIdListing(
  args: InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':idPlugin'].listings[':idListing'].$put(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchMembersIndex(
  args: InferRequestType<typeof client.search.members.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.members.index.$get(args, options))
}

export async function getTokensToken(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].$get(args, options))
}

export async function getTokensTokenMember(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].member.$get(args, options))
}

export async function getTokensTokenWebhooks(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks.$get(args, options))
}

export async function postTokensTokenWebhooks(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks.$post(args, options))
}

export async function getTokensTokenWebhooksIdWebhook(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$get(args, options))
}

export async function putTokensTokenWebhooksIdWebhook(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$put(args, options))
}

export async function deleteTokensTokenWebhooksIdWebhook(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$delete(args, options))
}

export async function deleteTokensTokenIndex(
  args: InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].index.$delete(args, options))
}

export async function postWebhooksIndex(
  args: InferRequestType<typeof client.webhooks.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.index.$post(args, options))
}

export async function getWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$get(args, options))
}

export async function putWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$put(args, options))
}

export async function deleteWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$delete(args, options))
}

export async function getWebhooksIdField(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'][':field'].$get(args, options))
}
