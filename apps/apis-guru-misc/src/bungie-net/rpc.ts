import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppApiUsageApplicationIdIndex(
  args: InferRequestType<(typeof client.App.ApiUsage)[':applicationId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.App.ApiUsage[':applicationId'].index.$get(args, options))
}

export async function getAppFirstPartyIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.App.FirstParty.index.$get(undefined, options))
}

export async function getCommunityContentGetSortMediaFilterPageIndex(
  args: InferRequestType<
    (typeof client.CommunityContent.Get)[':sort'][':mediaFilter'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.CommunityContent.Get[':sort'][':mediaFilter'][':page'].index.$get(args, options),
  )
}

export async function getContentGetContentByIdIdLocaleIndex(
  args: InferRequestType<(typeof client.Content.GetContentById)[':id'][':locale']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Content.GetContentById[':id'][':locale'].index.$get(args, options),
  )
}

export async function getContentGetContentByTagAndTypeTagTypeLocaleIndex(
  args: InferRequestType<
    (typeof client.Content.GetContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Content.GetContentByTagAndType[':tag'][':type'][':locale'].index.$get(args, options),
  )
}

export async function getContentGetContentTypeTypeIndex(
  args: InferRequestType<(typeof client.Content.GetContentType)[':type']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Content.GetContentType[':type'].index.$get(args, options))
}

export async function getContentRssNewsArticlesPageTokenIndex(
  args: InferRequestType<(typeof client.Content.Rss.NewsArticles)[':pageToken']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Content.Rss.NewsArticles[':pageToken'].index.$get(args, options),
  )
}

export async function getContentSearchLocaleIndex(
  args: InferRequestType<(typeof client.Content.Search)[':locale']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Content.Search[':locale'].index.$get(args, options))
}

export async function getContentSearchContentByTagAndTypeTagTypeLocaleIndex(
  args: InferRequestType<
    (typeof client.Content.SearchContentByTagAndType)[':tag'][':type'][':locale']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Content.SearchContentByTagAndType[':tag'][':type'][':locale'].index.$get(args, options),
  )
}

export async function getContentSearchHelpArticlesSearchtextSizeIndex(
  args: InferRequestType<
    (typeof client.Content.SearchHelpArticles)[':searchtext'][':size']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Content.SearchHelpArticles[':searchtext'][':size'].index.$get(args, options),
  )
}

export async function postDestiny2ActionsItemsEquipItemIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Items.EquipItem.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsEquipItemsIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Items.EquipItems.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsInsertSocketPlugIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Actions.Items.InsertSocketPlug.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsInsertSocketPlugFreeIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Actions.Items.InsertSocketPlugFree.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsPullFromPostmasterIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Actions.Items.PullFromPostmaster.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsSetLockStateIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Items.SetLockState.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsSetTrackedStateIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Items.SetTrackedState.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsItemsTransferItemIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Items.TransferItem.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsLoadoutsClearLoadoutIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Loadouts.ClearLoadout.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsLoadoutsEquipLoadoutIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Actions.Loadouts.EquipLoadout.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsLoadoutsSnapshotLoadoutIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Actions.Loadouts.SnapshotLoadout.index.$post(undefined, options),
  )
}

export async function postDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Actions.Loadouts.UpdateLoadoutIdentifiers.index.$post(undefined, options),
  )
}

export async function getDestiny2ArmorySearchTypeSearchTermIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Armory.Search)[':type'][':searchTerm']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Armory.Search[':type'][':searchTerm'].index.$get(args, options),
  )
}

export async function postDestiny2AwaAwaProvideAuthorizationResultIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Awa.AwaProvideAuthorizationResult.index.$post(undefined, options),
  )
}

export async function getDestiny2AwaGetActionTokenCorrelationIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Awa.GetActionToken)[':correlationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Awa.GetActionToken[':correlationId'].index.$get(args, options),
  )
}

export async function postDestiny2AwaInitializeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Destiny2.Awa.Initialize.index.$post(undefined, options))
}

export async function getDestiny2ClanClanBannerDictionaryIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.Destiny2.Clan.ClanBannerDictionary.index.$get(undefined, options),
  )
}

export async function getDestiny2ClanGroupIdWeeklyRewardStateIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Clan)[':groupId']['WeeklyRewardState']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Clan[':groupId'].WeeklyRewardState.index.$get(args, options),
  )
}

export async function getDestiny2ManifestIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Destiny2.Manifest.index.$get(undefined, options))
}

export async function getDestiny2ManifestEntityTypeHashIdentifierIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Manifest)[':entityType'][':hashIdentifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Manifest[':entityType'][':hashIdentifier'].index.$get(args, options),
  )
}

export async function getDestiny2MilestonesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Destiny2.Milestones.index.$get(undefined, options))
}

export async function getDestiny2MilestonesMilestoneHashContentIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Milestones)[':milestoneHash']['Content']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Milestones[':milestoneHash'].Content.index.$get(args, options),
  )
}

export async function postDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndex(
  args: InferRequestType<
    (typeof client.Destiny2.SearchDestinyPlayerByBungieName)[':membershipType']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.SearchDestinyPlayerByBungieName[':membershipType'].index.$post(args, options),
  )
}

export async function getDestiny2StatsAggregateClanStatsGroupIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.AggregateClanStats)[':groupId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Stats.AggregateClanStats[':groupId'].index.$get(args, options),
  )
}

export async function getDestiny2StatsDefinitionIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Destiny2.Stats.Definition.index.$get(undefined, options))
}

export async function getDestiny2StatsLeaderboardsClansGroupIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards.Clans)[':groupId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Stats.Leaderboards.Clans[':groupId'].index.$get(args, options),
  )
}

export async function getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.Leaderboards)[':membershipType'][':destinyMembershipId'][':characterId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Stats.Leaderboards[':membershipType'][':destinyMembershipId'][
      ':characterId'
    ].index.$get(args, options),
  )
}

export async function getDestiny2StatsPostGameCarnageReportActivityIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Stats.PostGameCarnageReport[':activityId'].index.$get(args, options),
  )
}

export async function postDestiny2StatsPostGameCarnageReportActivityIdReportIndex(
  args: InferRequestType<
    (typeof client.Destiny2.Stats.PostGameCarnageReport)[':activityId']['Report']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2.Stats.PostGameCarnageReport[':activityId'].Report.index.$post(args, options),
  )
}

export async function getDestiny2VendorsIndex(
  args: InferRequestType<typeof client.Destiny2.Vendors.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Destiny2.Vendors.index.$get(args, options))
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
      ':characterId'
    ].Stats.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['Activities']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
      ':characterId'
    ].Stats.Activities.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['AggregateActivityStats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
      ':characterId'
    ].Stats.AggregateActivityStats.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Character'][':characterId']['Stats']['UniqueWeapons']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Character[
      ':characterId'
    ].Stats.UniqueWeapons.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[':destinyMembershipId'].Stats.index.$get(
      args,
      options,
    ),
  )
}

export async function getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Account'][':destinyMembershipId']['Stats']['Leaderboards']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Account[
      ':destinyMembershipId'
    ].Stats.Leaderboards.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
      ':characterId'
    ].index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Collectibles'][':collectiblePresentationNodeHash']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
      ':characterId'
    ].Collectibles[':collectiblePresentationNodeHash'].index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
      ':characterId'
    ].Vendors.index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Character'][':characterId']['Vendors'][':vendorHash']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Character[
      ':characterId'
    ].Vendors[':vendorHash'].index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':destinyMembershipId']['Item'][':itemInstanceId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':destinyMembershipId'].Item[
      ':itemInstanceId'
    ].index.$get(args, options),
  )
}

export async function getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndex(
  args: InferRequestType<
    (typeof client.Destiny2)[':membershipType']['Profile'][':membershipId']['LinkedProfiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Destiny2[':membershipType'].Profile[':membershipId'].LinkedProfiles.index.$get(
      args,
      options,
    ),
  )
}

export async function getFireteamClanGroupIdActiveCountIndex(
  args: InferRequestType<(typeof client.Fireteam.Clan)[':groupId']['ActiveCount']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Fireteam.Clan[':groupId'].ActiveCount.index.$get(args, options))
}

export async function getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndex(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Available'][':platform'][':activityType'][':dateRange'][':slotFilter'][':publicOnly'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Fireteam.Clan[':groupId'].Available[':platform'][':activityType'][':dateRange'][
      ':slotFilter'
    ][':publicOnly'][':page'].index.$get(args, options),
  )
}

export async function getFireteamClanGroupIdMyPlatformIncludeClosedPageIndex(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['My'][':platform'][':includeClosed'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Fireteam.Clan[':groupId'].My[':platform'][':includeClosed'][':page'].index.$get(
      args,
      options,
    ),
  )
}

export async function getFireteamClanGroupIdSummaryFireteamIdIndex(
  args: InferRequestType<
    (typeof client.Fireteam.Clan)[':groupId']['Summary'][':fireteamId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Fireteam.Clan[':groupId'].Summary[':fireteamId'].index.$get(args, options),
  )
}

export async function getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndex(
  args: InferRequestType<
    (typeof client.Fireteam.Search.Available)[':platform'][':activityType'][':dateRange'][':slotFilter'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Fireteam.Search.Available[':platform'][':activityType'][':dateRange'][':slotFilter'][
      ':page'
    ].index.$get(args, options),
  )
}

export async function getForumGetCoreTopicsPagedPageSortQuickDateCategoryFilterIndex(
  args: InferRequestType<
    (typeof client.Forum.GetCoreTopicsPaged)[':page'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetCoreTopicsPaged[':page'][':sort'][':quickDate'][':categoryFilter'].index.$get(
      args,
      options,
    ),
  )
}

export async function getForumGetForumTagSuggestionsIndex(
  args: InferRequestType<typeof client.Forum.GetForumTagSuggestions.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Forum.GetForumTagSuggestions.index.$get(args, options))
}

export async function getForumGetPostAndParentChildPostIdIndex(
  args: InferRequestType<(typeof client.Forum.GetPostAndParent)[':childPostId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetPostAndParent[':childPostId'].index.$get(args, options),
  )
}

export async function getForumGetPostAndParentAwaitingApprovalChildPostIdIndex(
  args: InferRequestType<
    (typeof client.Forum.GetPostAndParentAwaitingApproval)[':childPostId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetPostAndParentAwaitingApproval[':childPostId'].index.$get(args, options),
  )
}

export async function getForumGetPostsThreadedPagedParentPostIdPagePageSizeReplySizeGetParentPostRootThreadModeSortModeIndex(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPaged)[':parentPostId'][':page'][':pageSize'][':replySize'][':getParentPost'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetPostsThreadedPaged[':parentPostId'][':page'][':pageSize'][':replySize'][
      ':getParentPost'
    ][':rootThreadMode'][':sortMode'].index.$get(args, options),
  )
}

export async function getForumGetPostsThreadedPagedFromChildChildPostIdPagePageSizeReplySizeRootThreadModeSortModeIndex(
  args: InferRequestType<
    (typeof client.Forum.GetPostsThreadedPagedFromChild)[':childPostId'][':page'][':pageSize'][':replySize'][':rootThreadMode'][':sortMode']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetPostsThreadedPagedFromChild[':childPostId'][':page'][':pageSize'][':replySize'][
      ':rootThreadMode'
    ][':sortMode'].index.$get(args, options),
  )
}

export async function getForumGetTopicForContentContentIdIndex(
  args: InferRequestType<(typeof client.Forum.GetTopicForContent)[':contentId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetTopicForContent[':contentId'].index.$get(args, options),
  )
}

export async function getForumGetTopicsPagedPagePageSizeGroupSortQuickDateCategoryFilterIndex(
  args: InferRequestType<
    (typeof client.Forum.GetTopicsPaged)[':page'][':pageSize'][':group'][':sort'][':quickDate'][':categoryFilter']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Forum.GetTopicsPaged[':page'][':pageSize'][':group'][':sort'][':quickDate'][
      ':categoryFilter'
    ].index.$get(args, options),
  )
}

export async function getForumPollTopicIdIndex(
  args: InferRequestType<(typeof client.Forum.Poll)[':topicId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Forum.Poll[':topicId'].index.$get(args, options))
}

export async function postForumRecruitSummariesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Forum.Recruit.Summaries.index.$post(undefined, options))
}

export async function getGetAvailableLocalesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.GetAvailableLocales.index.$get(undefined, options))
}

export async function getGlobalAlertsIndex(
  args: InferRequestType<typeof client.GlobalAlerts.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GlobalAlerts.index.$get(args, options))
}

export async function getGroupV2GetAvailableAvatarsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.GroupV2.GetAvailableAvatars.index.$get(undefined, options))
}

export async function getGroupV2GetAvailableThemesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.GroupV2.GetAvailableThemes.index.$get(undefined, options))
}

export async function getGroupV2GetUserClanInviteSettingMTypeIndex(
  args: InferRequestType<
    (typeof client.GroupV2.GetUserClanInviteSetting)[':mType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.GetUserClanInviteSetting[':mType'].index.$get(args, options),
  )
}

export async function getGroupV2NameGroupNameGroupTypeIndex(
  args: InferRequestType<(typeof client.GroupV2.Name)[':groupName'][':groupType']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.Name[':groupName'][':groupType'].index.$get(args, options),
  )
}

export async function postGroupV2NameV2Index(options?: ClientRequestOptions) {
  return await parseResponse(client.GroupV2.NameV2.index.$post(undefined, options))
}

export async function postGroupV2RecommendedGroupTypeCreateDateRangeIndex(
  args: InferRequestType<
    (typeof client.GroupV2.Recommended)[':groupType'][':createDateRange']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.Recommended[':groupType'][':createDateRange'].index.$post(args, options),
  )
}

export async function getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndex(
  args: InferRequestType<
    (typeof client.GroupV2.Recover)[':membershipType'][':membershipId'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.Recover[':membershipType'][':membershipId'][':groupType'].index.$get(
      args,
      options,
    ),
  )
}

export async function postGroupV2SearchIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.GroupV2.Search.index.$post(undefined, options))
}

export async function getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndex(
  args: InferRequestType<
    (typeof client.GroupV2.User.Potential)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.User.Potential[':membershipType'][':membershipId'][':filter'][
      ':groupType'
    ].index.$get(args, options),
  )
}

export async function getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndex(
  args: InferRequestType<
    (typeof client.GroupV2.User)[':membershipType'][':membershipId'][':filter'][':groupType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2.User[':membershipType'][':membershipId'][':filter'][':groupType'].index.$get(
      args,
      options,
    ),
  )
}

export async function getGroupV2GroupIdIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].index.$get(args, options))
}

export async function postGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Admin']['AbdicateFoundership'][':membershipType'][':founderIdNew']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Admin.AbdicateFoundership[':membershipType'][
      ':founderIdNew'
    ].index.$post(args, options),
  )
}

export async function getGroupV2GroupIdAdminsAndFounderIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['AdminsAndFounder']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].AdminsAndFounder.index.$get(args, options))
}

export async function getGroupV2GroupIdBannedIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Banned']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Banned.index.$get(args, options))
}

export async function postGroupV2GroupIdEditIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Edit']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Edit.index.$post(args, options))
}

export async function postGroupV2GroupIdEditClanBannerIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['EditClanBanner']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].EditClanBanner.index.$post(args, options))
}

export async function postGroupV2GroupIdEditFounderOptionsIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['EditFounderOptions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].EditFounderOptions.index.$post(args, options),
  )
}

export async function getGroupV2GroupIdMembersIndex(
  args: InferRequestType<(typeof client.GroupV2)[':groupId']['Members']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Members.index.$get(args, options))
}

export async function postGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Approve'][':membershipType'][':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.Approve[':membershipType'][':membershipId'].index.$post(
      args,
      options,
    ),
  )
}

export async function postGroupV2GroupIdMembersApproveAllIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['ApproveAll']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.ApproveAll.index.$post(args, options),
  )
}

export async function postGroupV2GroupIdMembersApproveListIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['ApproveList']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.ApproveList.index.$post(args, options),
  )
}

export async function postGroupV2GroupIdMembersDenyAllIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['DenyAll']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Members.DenyAll.index.$post(args, options))
}

export async function postGroupV2GroupIdMembersDenyListIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['DenyList']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Members.DenyList.index.$post(args, options))
}

export async function postGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['IndividualInvite'][':membershipType'][':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.IndividualInvite[':membershipType'][
      ':membershipId'
    ].index.$post(args, options),
  )
}

export async function postGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['IndividualInviteCancel'][':membershipType'][':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.IndividualInviteCancel[':membershipType'][
      ':membershipId'
    ].index.$post(args, options),
  )
}

export async function getGroupV2GroupIdMembersInvitedIndividualsIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['InvitedIndividuals']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members.InvitedIndividuals.index.$get(args, options),
  )
}

export async function getGroupV2GroupIdMembersPendingIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members']['Pending']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.GroupV2[':groupId'].Members.Pending.index.$get(args, options))
}

export async function postGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Ban']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Ban.index.$post(
      args,
      options,
    ),
  )
}

export async function postGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Kick']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Kick.index.$post(
      args,
      options,
    ),
  )
}

export async function postGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['SetMembershipType'][':memberType']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].SetMembershipType[
      ':memberType'
    ].index.$post(args, options),
  )
}

export async function postGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['Members'][':membershipType'][':membershipId']['Unban']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].Members[':membershipType'][':membershipId'].Unban.index.$post(
      args,
      options,
    ),
  )
}

export async function getGroupV2GroupIdOptionalConversationsIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].OptionalConversations.index.$get(args, options),
  )
}

export async function postGroupV2GroupIdOptionalConversationsAddIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['Add']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].OptionalConversations.Add.index.$post(args, options),
  )
}

export async function postGroupV2GroupIdOptionalConversationsEditConversationIdIndex(
  args: InferRequestType<
    (typeof client.GroupV2)[':groupId']['OptionalConversations']['Edit'][':conversationId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.GroupV2[':groupId'].OptionalConversations.Edit[':conversationId'].index.$post(
      args,
      options,
    ),
  )
}

export async function getSettingsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Settings.index.$get(undefined, options))
}

export async function getSocialFriendsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Social.Friends.index.$get(undefined, options))
}

export async function postSocialFriendsAddMembershipIdIndex(
  args: InferRequestType<(typeof client.Social.Friends.Add)[':membershipId']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Social.Friends.Add[':membershipId'].index.$post(args, options))
}

export async function postSocialFriendsRemoveMembershipIdIndex(
  args: InferRequestType<(typeof client.Social.Friends.Remove)[':membershipId']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Social.Friends.Remove[':membershipId'].index.$post(args, options),
  )
}

export async function getSocialFriendsRequestsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Social.Friends.Requests.index.$get(undefined, options))
}

export async function postSocialFriendsRequestsAcceptMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Social.Friends.Requests.Accept)[':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Social.Friends.Requests.Accept[':membershipId'].index.$post(args, options),
  )
}

export async function postSocialFriendsRequestsDeclineMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Social.Friends.Requests.Decline)[':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Social.Friends.Requests.Decline[':membershipId'].index.$post(args, options),
  )
}

export async function postSocialFriendsRequestsRemoveMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Social.Friends.Requests.Remove)[':membershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Social.Friends.Requests.Remove[':membershipId'].index.$post(args, options),
  )
}

export async function getSocialPlatformFriendsFriendPlatformPageIndex(
  args: InferRequestType<
    (typeof client.Social.PlatformFriends)[':friendPlatform'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Social.PlatformFriends[':friendPlatform'][':page'].index.$get(args, options),
  )
}

export async function postTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Tokens.Partner.ApplyMissingOffers)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Tokens.Partner.ApplyMissingOffers[':partnerApplicationId'][
      ':targetBnetMembershipId'
    ].index.$post(args, options),
  )
}

export async function postTokensPartnerClaimOfferIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Tokens.Partner.ClaimOffer.index.$post(undefined, options))
}

export async function postTokensPartnerForceDropsRepairIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Tokens.Partner.ForceDropsRepair.index.$post(undefined, options))
}

export async function getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':partnerApplicationId'][':targetBnetMembershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Tokens.Partner.History[':partnerApplicationId'][':targetBnetMembershipId'].index.$get(
      args,
      options,
    ),
  )
}

export async function getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndex(
  args: InferRequestType<
    (typeof client.Tokens.Partner.History)[':targetBnetMembershipId']['Application'][':partnerApplicationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Tokens.Partner.History[':targetBnetMembershipId'].Application[
      ':partnerApplicationId'
    ].index.$get(args, options),
  )
}

export async function getTokensRewardsBungieRewardsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Tokens.Rewards.BungieRewards.index.$get(undefined, options))
}

export async function getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndex(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForPlatformUser)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Tokens.Rewards.GetRewardsForPlatformUser[':membershipId'][':membershipType'].index.$get(
      args,
      options,
    ),
  )
}

export async function getTokensRewardsGetRewardsForUserMembershipIdIndex(
  args: InferRequestType<
    (typeof client.Tokens.Rewards.GetRewardsForUser)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Tokens.Rewards.GetRewardsForUser[':membershipId'].index.$get(args, options),
  )
}

export async function getTrendingCategoriesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.Trending.Categories.index.$get(undefined, options))
}

export async function getTrendingCategoriesCategoryIdPageNumberIndex(
  args: InferRequestType<
    (typeof client.Trending.Categories)[':categoryId'][':pageNumber']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Trending.Categories[':categoryId'][':pageNumber'].index.$get(args, options),
  )
}

export async function getTrendingDetailsTrendingEntryTypeIdentifierIndex(
  args: InferRequestType<
    (typeof client.Trending.Details)[':trendingEntryType'][':identifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Trending.Details[':trendingEntryType'][':identifier'].index.$get(args, options),
  )
}

export async function getUserGetAvailableThemesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.User.GetAvailableThemes.index.$get(undefined, options))
}

export async function getUserGetBungieNetUserByIdIdIndex(
  args: InferRequestType<(typeof client.User.GetBungieNetUserById)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User.GetBungieNetUserById[':id'].index.$get(args, options))
}

export async function getUserGetCredentialTypesForTargetAccountMembershipIdIndex(
  args: InferRequestType<
    (typeof client.User.GetCredentialTypesForTargetAccount)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.User.GetCredentialTypesForTargetAccount[':membershipId'].index.$get(args, options),
  )
}

export async function getUserGetMembershipFromHardLinkedCredentialCrTypeCredentialIndex(
  args: InferRequestType<
    (typeof client.User.GetMembershipFromHardLinkedCredential)[':crType'][':credential']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.User.GetMembershipFromHardLinkedCredential[':crType'][':credential'].index.$get(
      args,
      options,
    ),
  )
}

export async function getUserGetMembershipsByIdMembershipIdMembershipTypeIndex(
  args: InferRequestType<
    (typeof client.User.GetMembershipsById)[':membershipId'][':membershipType']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.User.GetMembershipsById[':membershipId'][':membershipType'].index.$get(args, options),
  )
}

export async function getUserGetMembershipsForCurrentUserIndex(options?: ClientRequestOptions) {
  return await parseResponse(
    client.User.GetMembershipsForCurrentUser.index.$get(undefined, options),
  )
}

export async function getUserGetSanitizedPlatformDisplayNamesMembershipIdIndex(
  args: InferRequestType<
    (typeof client.User.GetSanitizedPlatformDisplayNames)[':membershipId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.User.GetSanitizedPlatformDisplayNames[':membershipId'].index.$get(args, options),
  )
}

export async function postUserSearchGlobalNamePageIndex(
  args: InferRequestType<(typeof client.User.Search.GlobalName)[':page']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.User.Search.GlobalName[':page'].index.$post(args, options))
}

export async function getUserSearchPrefixDisplayNamePrefixPageIndex(
  args: InferRequestType<
    (typeof client.User.Search.Prefix)[':displayNamePrefix'][':page']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.User.Search.Prefix[':displayNamePrefix'][':page'].index.$get(args, options),
  )
}

export async function getUserSystemOverridesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.UserSystemOverrides.index.$get(undefined, options))
}
