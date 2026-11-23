import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelPointsCustomRewardsRoute,
  getChannelPointsCustomRewardsRedemptionsRoute,
  getChannelPointsCustomRewardsRoute,
  patchChannelPointsCustomRewardsRedemptionsRoute,
  patchChannelPointsCustomRewardsRoute,
  postChannelPointsCustomRewardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelPointsHandler = app
  .openapi(postChannelPointsCustomRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelPointsCustomRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelPointsCustomRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelPointsCustomRewardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelPointsCustomRewardsRedemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelPointsCustomRewardsRedemptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
