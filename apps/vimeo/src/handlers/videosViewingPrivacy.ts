import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdPrivacyUsersUserIdRoute,
  getChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  getVideosVideoIdPrivacyUsersRoute,
  putChannelsChannelIdVideosVideoIdPrivacyUsersRoute,
  putVideosVideoIdPrivacyUsersRoute,
  putVideosVideoIdPrivacyUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosViewingPrivacyHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
