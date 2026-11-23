import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionsIdAction(
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].$get(args, options))
}

export async function putActionsIdAction(
  args: InferRequestType<(typeof client.actions)[':idAction']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].$put(args, options))
}

export async function deleteActionsIdAction(
  args: InferRequestType<(typeof client.actions)[':idAction']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].$delete(args, options))
}

export async function getActionsIdActionBoard(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].board.$get(args, options))
}

export async function getActionsIdActionBoardField(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].board[':field'].$get(args, options))
}

export async function getActionsIdActionCard(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].card.$get(args, options))
}

export async function getActionsIdActionCardField(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].card[':field'].$get(args, options))
}

export async function getActionsIdActionDisplay(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].display.$get(args, options))
}

export async function getActionsIdActionEntities(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].entities.$get(args, options))
}

export async function getActionsIdActionList(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].list.$get(args, options))
}

export async function getActionsIdActionListField(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].list[':field'].$get(args, options))
}

export async function getActionsIdActionMember(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].member.$get(args, options))
}

export async function getActionsIdActionMemberField(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].member[':field'].$get(args, options))
}

export async function getActionsIdActionMemberCreator(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].memberCreator.$get(args, options))
}

export async function getActionsIdActionMemberCreatorField(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.actions[':idAction'].memberCreator[':field'].$get(args, options),
  )
}

export async function getActionsIdActionOrganization(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].organization.$get(args, options))
}

export async function getActionsIdActionOrganizationField(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].organization[':field'].$get(args, options))
}

export async function putActionsIdActionText(
  args: InferRequestType<(typeof client.actions)[':idAction']['text']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'].text.$put(args, options))
}

export async function getActionsIdActionField(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actions[':idAction'][':field'].$get(args, options))
}

export async function getBatch(
  args: InferRequestType<typeof client.batch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.$get(args, options))
}

export async function postBoards(
  args: InferRequestType<typeof client.boards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards.$post(args, options))
}

export async function getBoardsIdBoard(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].$get(args, options))
}

export async function putBoardsIdBoard(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].$put(args, options))
}

export async function getBoardsIdBoardActions(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].actions.$get(args, options))
}

export async function getBoardsIdBoardBoardStars(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].boardStars.$get(args, options))
}

export async function postBoardsIdBoardCalendarKeyGenerate(
  args: InferRequestType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].calendarKey.generate.$post(args, options))
}

export async function getBoardsIdBoardCards(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].cards.$get(args, options))
}

export async function getBoardsIdBoardCardsFilter(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].cards[':filter'].$get(args, options))
}

export async function getBoardsIdBoardCardsIdCard(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].cards[':idCard'].$get(args, options))
}

export async function getBoardsIdBoardChecklists(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].checklists.$get(args, options))
}

export async function postBoardsIdBoardChecklists(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].checklists.$post(args, options))
}

export async function putBoardsIdBoardClosed(
  args: InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].closed.$put(args, options))
}

export async function getBoardsIdBoardDeltas(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].deltas.$get(args, options))
}

export async function putBoardsIdBoardDesc(
  args: InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].desc.$put(args, options))
}

export async function postBoardsIdBoardEmailKeyGenerate(
  args: InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].emailKey.generate.$post(args, options))
}

export async function putBoardsIdBoardIdOrganization(
  args: InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].idOrganization.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesBlue(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.blue.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesGreen(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.green.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesOrange(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.orange.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesPurple(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.purple.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesRed(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.red.$put(args, options))
}

export async function putBoardsIdBoardLabelNamesYellow(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labelNames.yellow.$put(args, options))
}

export async function getBoardsIdBoardLabels(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labels.$get(args, options))
}

export async function postBoardsIdBoardLabels(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labels.$post(args, options))
}

export async function getBoardsIdBoardLabelsIdLabel(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].labels[':idLabel'].$get(args, options))
}

export async function getBoardsIdBoardLists(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].lists.$get(args, options))
}

export async function postBoardsIdBoardLists(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].lists.$post(args, options))
}

export async function getBoardsIdBoardListsFilter(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].lists[':filter'].$get(args, options))
}

export async function postBoardsIdBoardMarkAsViewed(
  args: InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].markAsViewed.$post(args, options))
}

export async function getBoardsIdBoardMembers(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].members.$get(args, options))
}

export async function putBoardsIdBoardMembers(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].members.$put(args, options))
}

export async function getBoardsIdBoardMembersFilter(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].members[':filter'].$get(args, options))
}

export async function putBoardsIdBoardMembersIdMember(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].members[':idMember'].$put(args, options))
}

export async function deleteBoardsIdBoardMembersIdMember(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].members[':idMember'].$delete(args, options))
}

export async function getBoardsIdBoardMembersIdMemberCards(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].members[':idMember'].cards.$get(args, options),
  )
}

export async function getBoardsIdBoardMembersInvited(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].membersInvited.$get(args, options))
}

export async function getBoardsIdBoardMembersInvitedField(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].membersInvited[':field'].$get(args, options))
}

export async function getBoardsIdBoardMemberships(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].memberships.$get(args, options))
}

export async function getBoardsIdBoardMembershipsIdMembership(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].memberships[':idMembership'].$get(args, options),
  )
}

export async function putBoardsIdBoardMembershipsIdMembership(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].memberships[':idMembership'].$put(args, options),
  )
}

export async function getBoardsIdBoardMyPrefs(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].myPrefs.$get(args, options))
}

export async function putBoardsIdBoardMyPrefsEmailPosition(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].myPrefs.emailPosition.$put(args, options))
}

export async function putBoardsIdBoardMyPrefsIdEmailList(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].myPrefs.idEmailList.$put(args, options))
}

export async function putBoardsIdBoardMyPrefsShowListGuide(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].myPrefs.showListGuide.$put(args, options))
}

export async function putBoardsIdBoardMyPrefsShowSidebar(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].myPrefs.showSidebar.$put(args, options))
}

export async function putBoardsIdBoardMyPrefsShowSidebarActivity(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].myPrefs.showSidebarActivity.$put(args, options),
  )
}

export async function putBoardsIdBoardMyPrefsShowSidebarBoardActions(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].myPrefs.showSidebarBoardActions.$put(args, options),
  )
}

export async function putBoardsIdBoardMyPrefsShowSidebarMembers(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].myPrefs.showSidebarMembers.$put(args, options),
  )
}

export async function putBoardsIdBoardName(
  args: InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].name.$put(args, options))
}

export async function getBoardsIdBoardOrganization(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].organization.$get(args, options))
}

export async function getBoardsIdBoardOrganizationField(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].organization[':field'].$get(args, options))
}

export async function postBoardsIdBoardPowerUps(
  args: InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].powerUps.$post(args, options))
}

export async function deleteBoardsIdBoardPowerUpsPowerUp(
  args: InferRequestType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].powerUps[':powerUp'].$delete(args, options))
}

export async function putBoardsIdBoardPrefsBackground(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.background.$put(args, options))
}

export async function putBoardsIdBoardPrefsCalendarFeedEnabled(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.boards[':idBoard'].prefs.calendarFeedEnabled.$put(args, options),
  )
}

export async function putBoardsIdBoardPrefsCardAging(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.cardAging.$put(args, options))
}

export async function putBoardsIdBoardPrefsCardCovers(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.cardCovers.$put(args, options))
}

export async function putBoardsIdBoardPrefsComments(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.comments.$put(args, options))
}

export async function putBoardsIdBoardPrefsInvitations(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.invitations.$put(args, options))
}

export async function putBoardsIdBoardPrefsPermissionLevel(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.permissionLevel.$put(args, options))
}

export async function putBoardsIdBoardPrefsSelfJoin(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.selfJoin.$put(args, options))
}

export async function putBoardsIdBoardPrefsVoting(
  args: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].prefs.voting.$put(args, options))
}

export async function putBoardsIdBoardSubscribed(
  args: InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'].subscribed.$put(args, options))
}

export async function getBoardsIdBoardField(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.boards[':idBoard'][':field'].$get(args, options))
}

export async function postCards(
  args: InferRequestType<typeof client.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$post(args, options))
}

export async function getCardsIdCard(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].$get(args, options))
}

export async function putCardsIdCard(
  args: InferRequestType<(typeof client.cards)[':idCard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].$put(args, options))
}

export async function deleteCardsIdCard(
  args: InferRequestType<(typeof client.cards)[':idCard']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].$delete(args, options))
}

export async function getCardsIdCardActions(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].actions.$get(args, options))
}

export async function postCardsIdCardActionsComments(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].actions.comments.$post(args, options))
}

export async function putCardsIdCardActionsIdActionComments(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].actions[':idAction'].comments.$put(args, options),
  )
}

export async function deleteCardsIdCardActionsIdActionComments(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].actions[':idAction'].comments.$delete(args, options),
  )
}

export async function getCardsIdCardAttachments(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].attachments.$get(args, options))
}

export async function postCardsIdCardAttachments(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].attachments.$post(args, options))
}

export async function getCardsIdCardAttachmentsIdAttachment(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].attachments[':idAttachment'].$get(args, options),
  )
}

export async function deleteCardsIdCardAttachmentsIdAttachment(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].attachments[':idAttachment'].$delete(args, options),
  )
}

export async function getCardsIdCardBoard(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].board.$get(args, options))
}

export async function getCardsIdCardBoardField(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].board[':field'].$get(args, options))
}

export async function getCardsIdCardCheckItemStates(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].checkItemStates.$get(args, options))
}

export async function putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItem(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklistCurrent'].checkItem[':idCheckItem'].$put(
      args,
      options,
    ),
  )
}

export async function postCardsIdCardChecklistIdChecklistCheckItem(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem.$post(args, options),
  )
}

export async function deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItem(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$delete(
      args,
      options,
    ),
  )
}

export async function postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCard(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].convertToCard.$post(
      args,
      options,
    ),
  )
}

export async function putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemName(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].name.$put(
      args,
      options,
    ),
  )
}

export async function putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPos(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].pos.$put(
      args,
      options,
    ),
  )
}

export async function putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemState(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].state.$put(
      args,
      options,
    ),
  )
}

export async function getCardsIdCardChecklists(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].checklists.$get(args, options))
}

export async function postCardsIdCardChecklists(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].checklists.$post(args, options))
}

export async function deleteCardsIdCardChecklistsIdChecklist(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].checklists[':idChecklist'].$delete(args, options),
  )
}

export async function putCardsIdCardClosed(
  args: InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].closed.$put(args, options))
}

export async function putCardsIdCardDesc(
  args: InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].desc.$put(args, options))
}

export async function putCardsIdCardDue(
  args: InferRequestType<(typeof client.cards)[':idCard']['due']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].due.$put(args, options))
}

export async function putCardsIdCardIdAttachmentCover(
  args: InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idAttachmentCover.$put(args, options))
}

export async function putCardsIdCardIdBoard(
  args: InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idBoard.$put(args, options))
}

export async function postCardsIdCardIdLabels(
  args: InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idLabels.$post(args, options))
}

export async function deleteCardsIdCardIdLabelsIdLabel(
  args: InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idLabels[':idLabel'].$delete(args, options))
}

export async function putCardsIdCardIdList(
  args: InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idList.$put(args, options))
}

export async function putCardsIdCardIdMembers(
  args: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idMembers.$put(args, options))
}

export async function postCardsIdCardIdMembers(
  args: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idMembers.$post(args, options))
}

export async function deleteCardsIdCardIdMembersIdMember(
  args: InferRequestType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].idMembers[':idMember'].$delete(args, options))
}

export async function putCardsIdCardLabels(
  args: InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].labels.$put(args, options))
}

export async function postCardsIdCardLabels(
  args: InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].labels.$post(args, options))
}

export async function deleteCardsIdCardLabelsColor(
  args: InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].labels[':color'].$delete(args, options))
}

export async function getCardsIdCardList(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].list.$get(args, options))
}

export async function getCardsIdCardListField(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].list[':field'].$get(args, options))
}

export async function postCardsIdCardMarkAssociatedNotificationsRead(
  args: InferRequestType<
    (typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].markAssociatedNotificationsRead.$post(args, options),
  )
}

export async function getCardsIdCardMembers(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].members.$get(args, options))
}

export async function getCardsIdCardMembersVoted(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].membersVoted.$get(args, options))
}

export async function postCardsIdCardMembersVoted(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].membersVoted.$post(args, options))
}

export async function deleteCardsIdCardMembersVotedIdMember(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cards[':idCard'].membersVoted[':idMember'].$delete(args, options),
  )
}

export async function putCardsIdCardName(
  args: InferRequestType<(typeof client.cards)[':idCard']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].name.$put(args, options))
}

export async function putCardsIdCardPos(
  args: InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].pos.$put(args, options))
}

export async function getCardsIdCardStickers(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].stickers.$get(args, options))
}

export async function postCardsIdCardStickers(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].stickers.$post(args, options))
}

export async function getCardsIdCardStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].stickers[':idSticker'].$get(args, options))
}

export async function putCardsIdCardStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].stickers[':idSticker'].$put(args, options))
}

export async function deleteCardsIdCardStickersIdSticker(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].stickers[':idSticker'].$delete(args, options))
}

export async function putCardsIdCardSubscribed(
  args: InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'].subscribed.$put(args, options))
}

export async function getCardsIdCardField(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':idCard'][':field'].$get(args, options))
}

export async function postChecklists(
  args: InferRequestType<typeof client.checklists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists.$post(args, options))
}

export async function getChecklistsIdChecklist(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].$get(args, options))
}

export async function putChecklistsIdChecklist(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].$put(args, options))
}

export async function deleteChecklistsIdChecklist(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].$delete(args, options))
}

export async function getChecklistsIdChecklistBoard(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].board.$get(args, options))
}

export async function getChecklistsIdChecklistBoardField(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].board[':field'].$get(args, options))
}

export async function getChecklistsIdChecklistCards(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].cards.$get(args, options))
}

export async function getChecklistsIdChecklistCardsFilter(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].cards[':filter'].$get(args, options))
}

export async function getChecklistsIdChecklistCheckItems(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].checkItems.$get(args, options))
}

export async function postChecklistsIdChecklistCheckItems(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].checkItems.$post(args, options))
}

export async function getChecklistsIdChecklistCheckItemsIdCheckItem(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(args, options),
  )
}

export async function deleteChecklistsIdChecklistCheckItemsIdCheckItem(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.checklists[':idChecklist'].checkItems[':idCheckItem'].$delete(args, options),
  )
}

export async function putChecklistsIdChecklistIdCard(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].idCard.$put(args, options))
}

export async function putChecklistsIdChecklistName(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].name.$put(args, options))
}

export async function putChecklistsIdChecklistPos(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'].pos.$put(args, options))
}

export async function getChecklistsIdChecklistField(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checklists[':idChecklist'][':field'].$get(args, options))
}

export async function postLabels(
  args: InferRequestType<typeof client.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$post(args, options))
}

export async function getLabelsIdLabel(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].$get(args, options))
}

export async function putLabelsIdLabel(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].$put(args, options))
}

export async function deleteLabelsIdLabel(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].$delete(args, options))
}

export async function getLabelsIdLabelBoard(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].board.$get(args, options))
}

export async function getLabelsIdLabelBoardField(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].board[':field'].$get(args, options))
}

export async function putLabelsIdLabelColor(
  args: InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].color.$put(args, options))
}

export async function putLabelsIdLabelName(
  args: InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels[':idLabel'].name.$put(args, options))
}

export async function postLists(
  args: InferRequestType<typeof client.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists.$post(args, options))
}

export async function getListsIdList(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].$get(args, options))
}

export async function putListsIdList(
  args: InferRequestType<(typeof client.lists)[':idList']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].$put(args, options))
}

export async function getListsIdListActions(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].actions.$get(args, options))
}

export async function postListsIdListArchiveAllCards(
  args: InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].archiveAllCards.$post(args, options))
}

export async function getListsIdListBoard(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].board.$get(args, options))
}

export async function getListsIdListBoardField(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].board[':field'].$get(args, options))
}

export async function getListsIdListCards(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].cards.$get(args, options))
}

export async function postListsIdListCards(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].cards.$post(args, options))
}

export async function getListsIdListCardsFilter(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].cards[':filter'].$get(args, options))
}

export async function putListsIdListClosed(
  args: InferRequestType<(typeof client.lists)[':idList']['closed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].closed.$put(args, options))
}

export async function putListsIdListIdBoard(
  args: InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].idBoard.$put(args, options))
}

export async function postListsIdListMoveAllCards(
  args: InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].moveAllCards.$post(args, options))
}

export async function putListsIdListName(
  args: InferRequestType<(typeof client.lists)[':idList']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].name.$put(args, options))
}

export async function putListsIdListPos(
  args: InferRequestType<(typeof client.lists)[':idList']['pos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].pos.$put(args, options))
}

export async function putListsIdListSubscribed(
  args: InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'].subscribed.$put(args, options))
}

export async function getListsIdListField(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lists[':idList'][':field'].$get(args, options))
}

export async function getMembersIdMember(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].$get(args, options))
}

export async function putMembersIdMember(
  args: InferRequestType<(typeof client.members)[':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].$put(args, options))
}

export async function getMembersIdMemberActions(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].actions.$get(args, options))
}

export async function postMembersIdMemberAvatar(
  args: InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].avatar.$post(args, options))
}

export async function putMembersIdMemberAvatarSource(
  args: InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].avatarSource.$put(args, options))
}

export async function putMembersIdMemberBio(
  args: InferRequestType<(typeof client.members)[':idMember']['bio']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].bio.$put(args, options))
}

export async function getMembersIdMemberBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boardBackgrounds.$get(args, options))
}

export async function postMembersIdMemberBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boardBackgrounds.$post(args, options))
}

export async function getMembersIdMemberBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(args, options),
  )
}

export async function putMembersIdMemberBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$put(args, options),
  )
}

export async function deleteMembersIdMemberBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$delete(args, options),
  )
}

export async function getMembersIdMemberBoardStars(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boardStars.$get(args, options))
}

export async function postMembersIdMemberBoardStars(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boardStars.$post(args, options))
}

export async function getMembersIdMemberBoardStarsIdBoardStar(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardStars[':idBoardStar'].$get(args, options),
  )
}

export async function putMembersIdMemberBoardStarsIdBoardStar(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardStars[':idBoardStar'].$put(args, options),
  )
}

export async function deleteMembersIdMemberBoardStarsIdBoardStar(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardStars[':idBoardStar'].$delete(args, options),
  )
}

export async function putMembersIdMemberBoardStarsIdBoardStarIdBoard(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardStars[':idBoardStar'].idBoard.$put(args, options),
  )
}

export async function putMembersIdMemberBoardStarsIdBoardStarPos(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardStars[':idBoardStar'].pos.$put(args, options),
  )
}

export async function getMembersIdMemberBoards(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boards.$get(args, options))
}

export async function getMembersIdMemberBoardsFilter(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boards[':filter'].$get(args, options))
}

export async function getMembersIdMemberBoardsInvited(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].boardsInvited.$get(args, options))
}

export async function getMembersIdMemberBoardsInvitedField(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].boardsInvited[':field'].$get(args, options),
  )
}

export async function getMembersIdMemberCards(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].cards.$get(args, options))
}

export async function getMembersIdMemberCardsFilter(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].cards[':filter'].$get(args, options))
}

export async function getMembersIdMemberCustomBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].customBoardBackgrounds.$get(args, options))
}

export async function postMembersIdMemberCustomBoardBackgrounds(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customBoardBackgrounds.$post(args, options),
  )
}

export async function getMembersIdMemberCustomBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(args, options),
  )
}

export async function putMembersIdMemberCustomBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$put(args, options),
  )
}

export async function deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackground(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$delete(args, options),
  )
}

export async function getMembersIdMemberCustomEmoji(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].customEmoji.$get(args, options))
}

export async function postMembersIdMemberCustomEmoji(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].customEmoji.$post(args, options))
}

export async function getMembersIdMemberCustomEmojiIdCustomEmoji(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(args, options),
  )
}

export async function getMembersIdMemberCustomStickers(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].customStickers.$get(args, options))
}

export async function postMembersIdMemberCustomStickers(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].customStickers.$post(args, options))
}

export async function getMembersIdMemberCustomStickersIdCustomSticker(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customStickers[':idCustomSticker'].$get(args, options),
  )
}

export async function deleteMembersIdMemberCustomStickersIdCustomSticker(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].customStickers[':idCustomSticker'].$delete(args, options),
  )
}

export async function getMembersIdMemberDeltas(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].deltas.$get(args, options))
}

export async function putMembersIdMemberFullName(
  args: InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].fullName.$put(args, options))
}

export async function putMembersIdMemberInitials(
  args: InferRequestType<(typeof client.members)[':idMember']['initials']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].initials.$put(args, options))
}

export async function getMembersIdMemberNotifications(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].notifications.$get(args, options))
}

export async function getMembersIdMemberNotificationsFilter(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].notifications[':filter'].$get(args, options),
  )
}

export async function postMembersIdMemberOneTimeMessagesDismissed(
  args: InferRequestType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].oneTimeMessagesDismissed.$post(args, options),
  )
}

export async function getMembersIdMemberOrganizations(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].organizations.$get(args, options))
}

export async function getMembersIdMemberOrganizationsFilter(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].organizations[':filter'].$get(args, options),
  )
}

export async function getMembersIdMemberOrganizationsInvited(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].organizationsInvited.$get(args, options))
}

export async function getMembersIdMemberOrganizationsInvitedField(
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].organizationsInvited[':field'].$get(args, options),
  )
}

export async function putMembersIdMemberPrefsColorBlind(
  args: InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].prefs.colorBlind.$put(args, options))
}

export async function putMembersIdMemberPrefsLocale(
  args: InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].prefs.locale.$put(args, options))
}

export async function putMembersIdMemberPrefsMinutesBetweenSummaries(
  args: InferRequestType<
    (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].prefs.minutesBetweenSummaries.$put(args, options),
  )
}

export async function getMembersIdMemberSavedSearches(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].savedSearches.$get(args, options))
}

export async function postMembersIdMemberSavedSearches(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].savedSearches.$post(args, options))
}

export async function getMembersIdMemberSavedSearchesIdSavedSearch(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].$get(args, options),
  )
}

export async function putMembersIdMemberSavedSearchesIdSavedSearch(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].$put(args, options),
  )
}

export async function deleteMembersIdMemberSavedSearchesIdSavedSearch(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].$delete(args, options),
  )
}

export async function putMembersIdMemberSavedSearchesIdSavedSearchName(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].name.$put(args, options),
  )
}

export async function putMembersIdMemberSavedSearchesIdSavedSearchPos(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].pos.$put(args, options),
  )
}

export async function putMembersIdMemberSavedSearchesIdSavedSearchQuery(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.members[':idMember'].savedSearches[':idSavedSearch'].query.$put(args, options),
  )
}

export async function getMembersIdMemberTokens(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].tokens.$get(args, options))
}

export async function putMembersIdMemberUsername(
  args: InferRequestType<(typeof client.members)[':idMember']['username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'].username.$put(args, options))
}

export async function getMembersIdMemberField(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':idMember'][':field'].$get(args, options))
}

export async function postNotificationsAllRead(
  args: InferRequestType<typeof client.notifications.all.read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.all.read.$post(args, options))
}

export async function getNotificationsIdNotification(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].$get(args, options))
}

export async function putNotificationsIdNotification(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].$put(args, options))
}

export async function getNotificationsIdNotificationBoard(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].board.$get(args, options))
}

export async function getNotificationsIdNotificationBoardField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].board[':field'].$get(args, options),
  )
}

export async function getNotificationsIdNotificationCard(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].card.$get(args, options))
}

export async function getNotificationsIdNotificationCardField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].card[':field'].$get(args, options),
  )
}

export async function getNotificationsIdNotificationDisplay(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].display.$get(args, options))
}

export async function getNotificationsIdNotificationEntities(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].entities.$get(args, options))
}

export async function getNotificationsIdNotificationList(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].list.$get(args, options))
}

export async function getNotificationsIdNotificationListField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].list[':field'].$get(args, options),
  )
}

export async function getNotificationsIdNotificationMember(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].member.$get(args, options))
}

export async function getNotificationsIdNotificationMemberField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].member[':field'].$get(args, options),
  )
}

export async function getNotificationsIdNotificationMemberCreator(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].memberCreator.$get(args, options),
  )
}

export async function getNotificationsIdNotificationMemberCreatorField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].memberCreator[':field'].$get(args, options),
  )
}

export async function getNotificationsIdNotificationOrganization(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].organization.$get(args, options),
  )
}

export async function getNotificationsIdNotificationOrganizationField(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications[':idNotification'].organization[':field'].$get(args, options),
  )
}

export async function putNotificationsIdNotificationUnread(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'].unread.$put(args, options))
}

export async function getNotificationsIdNotificationField(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':idNotification'][':field'].$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsIdOrg(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].$get(args, options))
}

export async function putOrganizationsIdOrg(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].$put(args, options))
}

export async function deleteOrganizationsIdOrg(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].$delete(args, options))
}

export async function getOrganizationsIdOrgActions(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].actions.$get(args, options))
}

export async function getOrganizationsIdOrgBoards(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].boards.$get(args, options))
}

export async function getOrganizationsIdOrgBoardsFilter(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].boards[':filter'].$get(args, options))
}

export async function getOrganizationsIdOrgDeltas(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].deltas.$get(args, options))
}

export async function putOrganizationsIdOrgDesc(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].desc.$put(args, options))
}

export async function putOrganizationsIdOrgDisplayName(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].displayName.$put(args, options))
}

export async function postOrganizationsIdOrgLogo(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].logo.$post(args, options))
}

export async function deleteOrganizationsIdOrgLogo(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].logo.$delete(args, options))
}

export async function getOrganizationsIdOrgMembers(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].members.$get(args, options))
}

export async function putOrganizationsIdOrgMembers(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].members.$put(args, options))
}

export async function getOrganizationsIdOrgMembersFilter(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].members[':filter'].$get(args, options))
}

export async function putOrganizationsIdOrgMembersIdMember(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].members[':idMember'].$put(args, options),
  )
}

export async function deleteOrganizationsIdOrgMembersIdMember(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].members[':idMember'].$delete(args, options),
  )
}

export async function deleteOrganizationsIdOrgMembersIdMemberAll(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].members[':idMember'].all.$delete(args, options),
  )
}

export async function getOrganizationsIdOrgMembersIdMemberCards(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].members[':idMember'].cards.$get(args, options),
  )
}

export async function putOrganizationsIdOrgMembersIdMemberDeactivated(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].members[':idMember'].deactivated.$put(args, options),
  )
}

export async function getOrganizationsIdOrgMembersInvited(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].membersInvited.$get(args, options))
}

export async function getOrganizationsIdOrgMembersInvitedField(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].membersInvited[':field'].$get(args, options),
  )
}

export async function getOrganizationsIdOrgMemberships(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].memberships.$get(args, options))
}

export async function getOrganizationsIdOrgMembershipsIdMembership(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].memberships[':idMembership'].$get(args, options),
  )
}

export async function putOrganizationsIdOrgMembershipsIdMembership(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].memberships[':idMembership'].$put(args, options),
  )
}

export async function putOrganizationsIdOrgName(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].name.$put(args, options))
}

export async function putOrganizationsIdOrgPrefsAssociatedDomain(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.associatedDomain.$put(args, options),
  )
}

export async function deleteOrganizationsIdOrgPrefsAssociatedDomain(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.associatedDomain.$delete(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrg(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.boardVisibilityRestrict.org.$put(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivate(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.boardVisibilityRestrict.private.$put(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublic(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.boardVisibilityRestrict.public.$put(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsExternalMembersDisabled(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.externalMembersDisabled.$put(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsGoogleAppsVersion(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.googleAppsVersion.$put(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsOrgInviteRestrict(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.orgInviteRestrict.$put(args, options),
  )
}

export async function deleteOrganizationsIdOrgPrefsOrgInviteRestrict(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.orgInviteRestrict.$delete(args, options),
  )
}

export async function putOrganizationsIdOrgPrefsPermissionLevel(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':idOrg'].prefs.permissionLevel.$put(args, options),
  )
}

export async function putOrganizationsIdOrgWebsite(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'].website.$put(args, options))
}

export async function getOrganizationsIdOrgField(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':idOrg'][':field'].$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchMembers(
  args: InferRequestType<typeof client.search.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.members.$get(args, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function getSessionsSocket(
  args: InferRequestType<typeof client.sessions.socket.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.socket.$get(args, options))
}

export async function putSessionsIdSession(
  args: InferRequestType<(typeof client.sessions)[':idSession']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':idSession'].$put(args, options))
}

export async function putSessionsIdSessionStatus(
  args: InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':idSession'].status.$put(args, options))
}

export async function getTokensToken(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].$get(args, options))
}

export async function deleteTokensToken(
  args: InferRequestType<(typeof client.tokens)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].$delete(args, options))
}

export async function getTokensTokenMember(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].member.$get(args, options))
}

export async function getTokensTokenMemberField(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].member[':field'].$get(args, options))
}

export async function getTokensTokenWebhooks(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks.$get(args, options))
}

export async function putTokensTokenWebhooks(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks.$put(args, options))
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

export async function deleteTokensTokenWebhooksIdWebhook(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$delete(args, options))
}

export async function getTokensTokenField(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'][':field'].$get(args, options))
}

export async function getTypesId(
  args: InferRequestType<(typeof client.types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.types[':id'].$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function putWebhooksIndex(
  args: InferRequestType<typeof client.webhooks.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.index.$put(args, options))
}

export async function getWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].$get(args, options))
}

export async function putWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].$put(args, options))
}

export async function deleteWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].$delete(args, options))
}

export async function putWebhooksIdWebhookActive(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].active.$put(args, options))
}

export async function putWebhooksIdWebhookCallbackURL(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].callbackURL.$put(args, options))
}

export async function putWebhooksIdWebhookDescription(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].description.$put(args, options))
}

export async function putWebhooksIdWebhookIdModel(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'].idModel.$put(args, options))
}

export async function getWebhooksIdWebhookField(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':idWebhook'][':field'].$get(args, options))
}
