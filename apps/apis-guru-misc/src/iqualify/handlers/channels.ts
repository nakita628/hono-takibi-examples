import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute,
  getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute,
  getOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  getOfferingsOfferingIdChannelsRoute,
  patchOfferingsOfferingIdChannelsChannelIdRoute,
  postOfferingsOfferingIdChannelsChannelIdLearnersRoute,
  postOfferingsOfferingIdChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOfferingsOfferingIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdChannelsChannelIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
