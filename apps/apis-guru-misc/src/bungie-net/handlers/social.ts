import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSocialFriendsIndexRoute,
  getSocialFriendsRequestsIndexRoute,
  getSocialPlatformFriendsFriendPlatformPageIndexRoute,
  postSocialFriendsAddMembershipIdIndexRoute,
  postSocialFriendsRemoveMembershipIdIndexRoute,
  postSocialFriendsRequestsAcceptMembershipIdIndexRoute,
  postSocialFriendsRequestsDeclineMembershipIdIndexRoute,
  postSocialFriendsRequestsRemoveMembershipIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const socialHandler = app
  .openapi(getSocialFriendsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSocialFriendsAddMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSocialFriendsRemoveMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSocialFriendsRequestsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSocialFriendsRequestsAcceptMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSocialFriendsRequestsDeclineMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSocialFriendsRequestsRemoveMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSocialPlatformFriendsFriendPlatformPageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
