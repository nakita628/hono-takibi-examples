import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUsernameTokensTokenRoute,
  getUsersSearchRoute,
  getUsersUsernameActivitiesFeedsRoute,
  getUsersUsernameFollowersRoute,
  getUsersUsernameFollowingRoute,
  getUsersUsernameFollowingTargetRoute,
  getUsersUsernameGpgKeysRoute,
  getUsersUsernameHeatmapRoute,
  getUsersUsernameKeysRoute,
  getUsersUsernameOrgsOrgPermissionsRoute,
  getUsersUsernameOrgsRoute,
  getUsersUsernameProjectsRoute,
  getUsersUsernameReposRoute,
  getUsersUsernameRoute,
  getUsersUsernameStarredRoute,
  getUsersUsernameSubscriptionsRoute,
  getUsersUsernameTokensRoute,
  postUsersUsernameTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameActivitiesFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFollowingTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameHeatmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameOrgsOrgPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
