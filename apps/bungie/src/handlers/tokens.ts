import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexRoute,
  getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexRoute,
  getTokensRewardsBungieRewardsIndexRoute,
  getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexRoute,
  getTokensRewardsGetRewardsForUserMembershipIdIndexRoute,
  postTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexRoute,
  postTokensPartnerClaimOfferIndexRoute,
  postTokensPartnerForceDropsRepairIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(postTokensPartnerForceDropsRepairIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokensPartnerClaimOfferIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postTokensPartnerApplyMissingOffersPartnerApplicationIdTargetBnetMembershipIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTokensPartnerHistoryPartnerApplicationIdTargetBnetMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getTokensPartnerHistoryTargetBnetMembershipIdApplicationPartnerApplicationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getTokensRewardsGetRewardsForUserMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensRewardsGetRewardsForPlatformUserMembershipIdMembershipTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensRewardsBungieRewardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
