import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoyaltyOfferProgramsPidRewardsRevokeRoute,
  getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRoute,
  getLoyaltyOfferProgramsPidOffersRoute,
  getLoyaltyOfferProgramsPidRewardsRidRoute,
  getLoyaltyOfferProgramsPidVouchersRoute,
  postLoyaltyOfferProgramsPidOffersRoute,
  postLoyaltyOfferProgramsPidRewardsAttributeRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRoute,
  postLoyaltyOfferProgramsPidRewardsValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rewardHandler = app
  .openapi(getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyOfferProgramsPidOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyOfferProgramsPidOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyOfferProgramsPidRewardsAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyOfferProgramsPidRewardsRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyOfferProgramsPidRewardsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyOfferProgramsPidRewardsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyOfferProgramsPidRewardsRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyOfferProgramsPidVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
