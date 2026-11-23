import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsChannelIdFeaturesRoute,
  getChannelsChannelIdItemsRoute,
  getChannelsFeaturesRoute,
  getChannelsItemsLatestRoute,
  getChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsItemsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
