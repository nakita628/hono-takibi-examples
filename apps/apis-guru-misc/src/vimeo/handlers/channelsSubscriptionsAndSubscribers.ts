import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeChannelsChannelIdRoute,
  deleteUsersUserIdChannelsChannelIdRoute,
  getChannelsChannelIdUsersRoute,
  getMeChannelsChannelIdRoute,
  getUsersUserIdChannelsChannelIdRoute,
  putMeChannelsChannelIdRoute,
  putUsersUserIdChannelsChannelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsSubscriptionsAndSubscribersHandler = app
  .openapi(getChannelsChannelIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
