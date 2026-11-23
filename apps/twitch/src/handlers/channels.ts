import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsVipsRoute,
  getChannelsAdsRoute,
  getChannelsEditorsRoute,
  getChannelsFollowedRoute,
  getChannelsFollowersRoute,
  getChannelsRoute,
  getChannelsVipsRoute,
  patchChannelsRoute,
  postChannelsAdsScheduleSnoozeRoute,
  postChannelsCommercialRoute,
  postChannelsVipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(postChannelsCommercialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsAdsScheduleSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsEditorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsFollowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
