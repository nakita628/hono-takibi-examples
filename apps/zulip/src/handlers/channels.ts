import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDefaultStreamsRoute,
  deleteStreamsStreamIdRoute,
  deleteUsersMeSubscriptionsRoute,
  getCallsBigbluebuttonCreateRoute,
  getChannelFoldersRoute,
  getGetStreamIdRoute,
  getStreamsRoute,
  getStreamsStreamIdEmailAddressRoute,
  getStreamsStreamIdMembersRoute,
  getStreamsStreamIdRoute,
  getUsersMeStreamIdTopicsRoute,
  getUsersMeSubscriptionsRoute,
  getUsersUserIdChannelsRoute,
  getUsersUserIdSubscriptionsStreamIdRoute,
  patchChannelFoldersChannelFolderIdRoute,
  patchChannelFoldersRoute,
  patchStreamsStreamIdRoute,
  patchUsersMeSubscriptionsMutedTopicsRoute,
  patchUsersMeSubscriptionsStreamIdRoute,
  postCallsConstructorgroupsCreateRoute,
  postCallsGoogleMeetCreateRoute,
  postCallsNextcloudTalkCreateRoute,
  postCallsWebexCreateRoute,
  postChannelFoldersCreateRoute,
  postChannelsCreateRoute,
  postDefaultStreamsRoute,
  postStreamsStreamIdDeleteTopicRoute,
  postUsersMeSubscriptionsPropertiesRoute,
  postUsersMeSubscriptionsRoute,
  postUserTopicsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getGetStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDefaultStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDefaultStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeStreamIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeSubscriptionsMutedTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSubscriptionsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSubscriptionsPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeSubscriptionsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStreamsStreamIdDeleteTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelFoldersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelFoldersChannelFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsBigbluebuttonCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsNextcloudTalkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsWebexCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsGoogleMeetCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsConstructorgroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
