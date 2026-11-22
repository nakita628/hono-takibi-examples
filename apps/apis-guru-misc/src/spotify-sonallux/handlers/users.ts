import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeFollowingRoute,
  deletePlaylistsPlaylistIdFollowersRoute,
  getMeFollowingContainsRoute,
  getMeFollowingRoute,
  getMeRoute,
  getMeTopArtistsRoute,
  getMeTopTracksRoute,
  getPlaylistsPlaylistIdFollowersContainsRoute,
  getUsersUserIdRoute,
  putMeFollowingRoute,
  putPlaylistsPlaylistIdFollowersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdFollowersContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
