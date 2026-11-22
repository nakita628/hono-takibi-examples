import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserChannelsChannelIdCategoriesRoute,
  getV2UserChannelsChannelIdRoute,
  getV2UserChannelsIndexRoute,
  postV2UserChannelsChannelIdColumnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channels__ChannelsGlobalHandler = app
  .openapi(getV2UserChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelsChannelIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
