import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDestiny2ArmorySearchTypeSearchTermIndexRoute,
  getDestiny2AwaGetActionTokenCorrelationIdIndexRoute,
  getDestiny2ClanClanBannerDictionaryIndexRoute,
  getDestiny2ClanGroupIdWeeklyRewardStateIndexRoute,
  getDestiny2ManifestEntityTypeHashIdentifierIndexRoute,
  getDestiny2ManifestIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexRoute,
  getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdIndexRoute,
  getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexRoute,
  getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexRoute,
  getDestiny2MilestonesIndexRoute,
  getDestiny2MilestonesMilestoneHashContentIndexRoute,
  getDestiny2StatsAggregateClanStatsGroupIdIndexRoute,
  getDestiny2StatsDefinitionIndexRoute,
  getDestiny2StatsLeaderboardsClansGroupIdIndexRoute,
  getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexRoute,
  getDestiny2StatsPostGameCarnageReportActivityIdIndexRoute,
  getDestiny2VendorsIndexRoute,
  postDestiny2ActionsItemsEquipItemIndexRoute,
  postDestiny2ActionsItemsEquipItemsIndexRoute,
  postDestiny2ActionsItemsInsertSocketPlugFreeIndexRoute,
  postDestiny2ActionsItemsInsertSocketPlugIndexRoute,
  postDestiny2ActionsItemsPullFromPostmasterIndexRoute,
  postDestiny2ActionsItemsSetLockStateIndexRoute,
  postDestiny2ActionsItemsSetTrackedStateIndexRoute,
  postDestiny2ActionsItemsTransferItemIndexRoute,
  postDestiny2ActionsLoadoutsClearLoadoutIndexRoute,
  postDestiny2ActionsLoadoutsEquipLoadoutIndexRoute,
  postDestiny2ActionsLoadoutsSnapshotLoadoutIndexRoute,
  postDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexRoute,
  postDestiny2AwaAwaProvideAuthorizationResultIndexRoute,
  postDestiny2AwaInitializeIndexRoute,
  postDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexRoute,
  postDestiny2StatsPostGameCarnageReportActivityIdReportIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destiny2Handler = app
  .openapi(getDestiny2ManifestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2ManifestEntityTypeHashIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2SearchDestinyPlayerByBungieNameMembershipTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2MembershipTypeProfileMembershipIdLinkedProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2MembershipTypeProfileDestinyMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDestiny2ClanGroupIdWeeklyRewardStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2ClanClanBannerDictionaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2MembershipTypeProfileDestinyMembershipIdItemItemInstanceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdVendorsVendorHashIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDestiny2VendorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2MembershipTypeProfileDestinyMembershipIdCharacterCharacterIdCollectiblesCollectiblePresentationNodeHashIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDestiny2ActionsItemsTransferItemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsPullFromPostmasterIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsEquipItemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsEquipItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsLoadoutsEquipLoadoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsLoadoutsSnapshotLoadoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsLoadoutsUpdateLoadoutIdentifiersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsLoadoutsClearLoadoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsSetLockStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsSetTrackedStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsInsertSocketPlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2ActionsItemsInsertSocketPlugFreeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2StatsPostGameCarnageReportActivityIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2StatsPostGameCarnageReportActivityIdReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2StatsDefinitionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2StatsLeaderboardsClansGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2StatsAggregateClanStatsGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2MembershipTypeAccountDestinyMembershipIdStatsLeaderboardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2StatsLeaderboardsMembershipTypeDestinyMembershipIdCharacterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDestiny2ArmorySearchTypeSearchTermIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDestiny2MembershipTypeAccountDestinyMembershipIdStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsActivitiesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsUniqueWeaponsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDestiny2MembershipTypeAccountDestinyMembershipIdCharacterCharacterIdStatsAggregateActivityStatsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDestiny2MilestonesMilestoneHashContentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2MilestonesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2AwaInitializeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDestiny2AwaAwaProvideAuthorizationResultIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDestiny2AwaGetActionTokenCorrelationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
