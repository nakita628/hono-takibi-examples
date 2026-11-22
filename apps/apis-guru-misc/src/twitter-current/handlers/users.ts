import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2UsersSourceUserIdBlockingTargetUserIdRoute,
  delete2UsersSourceUserIdFollowingTargetUserIdRoute,
  delete2UsersSourceUserIdMutingTargetUserIdRoute,
  get2ListsIdFollowersRoute,
  get2ListsIdMembersRoute,
  get2TweetsIdLikingUsersRoute,
  get2TweetsIdRetweetedByRoute,
  get2UsersByRoute,
  get2UsersByUsernameUsernameRoute,
  get2UsersIdBlockingRoute,
  get2UsersIdFollowersRoute,
  get2UsersIdFollowingRoute,
  get2UsersIdMutingRoute,
  get2UsersIdRoute,
  get2UsersMeRoute,
  get2UsersRoute,
  post2UsersIdBlockingRoute,
  post2UsersIdFollowingRoute,
  post2UsersIdMutingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(get2ListsIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdLikingUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2TweetsIdRetweetedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersByUsernameUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdMutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdMutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdBlockingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdFollowingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersSourceUserIdMutingTargetUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
