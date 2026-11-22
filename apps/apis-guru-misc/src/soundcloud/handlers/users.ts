import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdCommentsRoute,
  getUsersUserIdFavoritesRoute,
  getUsersUserIdFollowersRoute,
  getUsersUserIdFollowingsFollowingIdRoute,
  getUsersUserIdFollowingsRoute,
  getUsersUserIdLikesTracksRoute,
  getUsersUserIdPlaylistsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTracksRoute,
  getUsersUserIdWebProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFollowingsFollowingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLikesTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWebProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
