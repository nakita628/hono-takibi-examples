import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdPrivacyUsersUserIdRoute,
  getChannelsChannelIdPrivacyUsersRoute,
  putChannelsChannelIdPrivacyUsersRoute,
  putChannelsChannelIdPrivacyUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsPrivateChannelMembersHandler = app
  .openapi(getChannelsChannelIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
