import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  deleteLoyaltyConfigProgramsPidContactCidRoute,
  deleteLoyaltyConfigProgramsPidRoute,
  deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  deleteLoyaltyOfferProgramsPidRewardsRevokeRoute,
  deleteLoyaltyTierProgramsPidTierGroupsGidRoute,
  deleteLoyaltyTierProgramsPidTiersTidRoute,
  getLoyaltyBalanceProgramsPidActiveBalanceRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  getLoyaltyBalanceProgramsPidContactBalancesRoute,
  getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  getLoyaltyBalanceProgramsPidTransactionHistoryRoute,
  getLoyaltyConfigProgramsPidAccountInfoRoute,
  getLoyaltyConfigProgramsPidRoute,
  getLoyaltyConfigProgramsRoute,
  getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountRoute,
  getLoyaltyOfferProgramsPidOffersRoute,
  getLoyaltyOfferProgramsPidRewardsRidRoute,
  getLoyaltyOfferProgramsPidVouchersRoute,
  getLoyaltyTierProgramsPidTierGroupsGidRoute,
  getLoyaltyTierProgramsPidTierGroupsRoute,
  getLoyaltyTierProgramsPidTiersRoute,
  patchLoyaltyConfigProgramsPidRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  postLoyaltyBalanceProgramsPidCreateOrderRoute,
  postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  postLoyaltyBalanceProgramsPidTransactionsRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute,
  postLoyaltyConfigProgramsPidPublishRoute,
  postLoyaltyConfigProgramsPidSubscriptionMembersRoute,
  postLoyaltyConfigProgramsPidSubscriptionsRoute,
  postLoyaltyConfigProgramsRoute,
  postLoyaltyOfferProgramsPidOffersRoute,
  postLoyaltyOfferProgramsPidRewardsAttributeRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemRoute,
  postLoyaltyOfferProgramsPidRewardsRedeemTidCompleteRoute,
  postLoyaltyOfferProgramsPidRewardsValidateRoute,
  postLoyaltyTierProgramsPidContactsCidTiersTidRoute,
  postLoyaltyTierProgramsPidTierGroupsGidTiersRoute,
  postLoyaltyTierProgramsPidTierGroupsRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  putLoyaltyConfigProgramsPidRoute,
  putLoyaltyTierProgramsPidTierGroupsGidRoute,
  putLoyaltyTierProgramsPidTiersTidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loyaltyHandler = app
  .openapi(getLoyaltyBalanceProgramsPidActiveBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidContactBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidCreateOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidTransactionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyConfigProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyConfigProgramsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyConfigProgramsPidAccountInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidContactCidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyConfigProgramsPidSubscriptionMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidSubscriptionMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyConfigProgramsPidSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postLoyaltyTierProgramsPidContactsCidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyTierProgramsPidTierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyTierProgramsPidTierGroupsGidTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyTierProgramsPidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyTierProgramsPidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
