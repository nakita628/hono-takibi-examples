import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdCategoriesCategoryRoute,
  getChannelsChannelIdCategoriesRoute,
  putChannelsChannelIdCategoriesCategoryRoute,
  putChannelsChannelIdCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsCategoriesHandler = app
  .openapi(getChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
