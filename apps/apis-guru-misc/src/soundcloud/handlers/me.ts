import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeFollowingsUserIdRoute,
  getMeActivitiesAllOwnRoute,
  getMeActivitiesRoute,
  getMeActivitiesTracksRoute,
  getMeConnectionsConnectionIdRoute,
  getMeConnectionsRoute,
  getMeFavoritesIdsRoute,
  getMeFollowersFollowerIdRoute,
  getMeFollowersRoute,
  getMeFollowingsRoute,
  getMeFollowingsTracksRoute,
  getMeFollowingsUserIdRoute,
  getMeLikesTracksRoute,
  getMePlaylistsPlaylistIdRoute,
  getMePlaylistsRoute,
  getMeRoute,
  getMeTracksRoute,
  getMeTracksTrackIdRoute,
  putMeFollowingsUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesAllOwnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFavoritesIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowersFollowerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingsTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeFollowingsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeFollowingsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLikesTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
