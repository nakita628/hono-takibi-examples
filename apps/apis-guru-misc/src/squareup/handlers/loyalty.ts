import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LoyaltyRewardsRewardIdRoute,
  getV2LoyaltyAccountsAccountIdRoute,
  getV2LoyaltyProgramsProgramIdRoute,
  getV2LoyaltyProgramsRoute,
  getV2LoyaltyRewardsRewardIdRoute,
  postV2LoyaltyAccountsAccountIdAccumulateRoute,
  postV2LoyaltyAccountsAccountIdAdjustRoute,
  postV2LoyaltyAccountsRoute,
  postV2LoyaltyAccountsSearchRoute,
  postV2LoyaltyEventsSearchRoute,
  postV2LoyaltyProgramsProgramIdCalculateRoute,
  postV2LoyaltyRewardsRewardIdRedeemRoute,
  postV2LoyaltyRewardsRoute,
  postV2LoyaltyRewardsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loyaltyHandler = app
  .openapi(postV2LoyaltyAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsAccountIdAccumulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyAccountsAccountIdAdjustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyProgramsProgramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyProgramsProgramIdCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2LoyaltyRewardsRewardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LoyaltyRewardsRewardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoyaltyRewardsRewardIdRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
