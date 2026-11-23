import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLikesPlaylistsPlaylistIdRoute,
  deleteLikesTracksTrackIdRoute,
  deleteMeFollowingsUserIdRoute,
  deletePlaylistsPlaylistIdRoute,
  deleteRepostsPlaylistsPlaylistIdRoute,
  deleteRepostsTracksTrackIdRoute,
  deleteTracksTrackIdRoute,
  getConnectRoute,
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
  getPlaylistsPlaylistIdRepostersRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  getPlaylistsRoute,
  getResolveRoute,
  getTracksRoute,
  getTracksTrackIdCommentsRoute,
  getTracksTrackIdFavoritersRoute,
  getTracksTrackIdRelatedRoute,
  getTracksTrackIdRepostersRoute,
  getTracksTrackIdRoute,
  getTracksTrackIdStreamsRoute,
  getUsersRoute,
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
  postLikesPlaylistsPlaylistIdRoute,
  postLikesTracksTrackIdRoute,
  postOauth2TokenRoute,
  postPlaylistsRoute,
  postRepostsPlaylistsPlaylistIdRoute,
  postRepostsTracksTrackIdRoute,
  postTracksRoute,
  postTracksTrackIdCommentsRoute,
  putMeFollowingsUserIdRoute,
  putPlaylistsPlaylistIdRoute,
  putTracksTrackIdRoute,
} from './routes'
import {
  deleteLikesPlaylistsPlaylistIdRouteHandler,
  deleteLikesTracksTrackIdRouteHandler,
  deleteMeFollowingsUserIdRouteHandler,
  deletePlaylistsPlaylistIdRouteHandler,
  deleteRepostsPlaylistsPlaylistIdRouteHandler,
  deleteRepostsTracksTrackIdRouteHandler,
  deleteTracksTrackIdRouteHandler,
  getConnectRouteHandler,
  getMeActivitiesAllOwnRouteHandler,
  getMeActivitiesRouteHandler,
  getMeActivitiesTracksRouteHandler,
  getMeConnectionsConnectionIdRouteHandler,
  getMeConnectionsRouteHandler,
  getMeFavoritesIdsRouteHandler,
  getMeFollowersFollowerIdRouteHandler,
  getMeFollowersRouteHandler,
  getMeFollowingsRouteHandler,
  getMeFollowingsTracksRouteHandler,
  getMeFollowingsUserIdRouteHandler,
  getMeLikesTracksRouteHandler,
  getMePlaylistsPlaylistIdRouteHandler,
  getMePlaylistsRouteHandler,
  getMeRouteHandler,
  getMeTracksRouteHandler,
  getMeTracksTrackIdRouteHandler,
  getPlaylistsPlaylistIdRepostersRouteHandler,
  getPlaylistsPlaylistIdRouteHandler,
  getPlaylistsPlaylistIdTracksRouteHandler,
  getPlaylistsRouteHandler,
  getResolveRouteHandler,
  getTracksRouteHandler,
  getTracksTrackIdCommentsRouteHandler,
  getTracksTrackIdFavoritersRouteHandler,
  getTracksTrackIdRelatedRouteHandler,
  getTracksTrackIdRepostersRouteHandler,
  getTracksTrackIdRouteHandler,
  getTracksTrackIdStreamsRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdCommentsRouteHandler,
  getUsersUserIdFavoritesRouteHandler,
  getUsersUserIdFollowersRouteHandler,
  getUsersUserIdFollowingsFollowingIdRouteHandler,
  getUsersUserIdFollowingsRouteHandler,
  getUsersUserIdLikesTracksRouteHandler,
  getUsersUserIdPlaylistsRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdTracksRouteHandler,
  getUsersUserIdWebProfilesRouteHandler,
  postLikesPlaylistsPlaylistIdRouteHandler,
  postLikesTracksTrackIdRouteHandler,
  postOauth2TokenRouteHandler,
  postPlaylistsRouteHandler,
  postRepostsPlaylistsPlaylistIdRouteHandler,
  postRepostsTracksTrackIdRouteHandler,
  postTracksRouteHandler,
  postTracksTrackIdCommentsRouteHandler,
  putMeFollowingsUserIdRouteHandler,
  putPlaylistsPlaylistIdRouteHandler,
  putTracksTrackIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConnectRoute, getConnectRouteHandler)
  .openapi(deleteLikesPlaylistsPlaylistIdRoute, deleteLikesPlaylistsPlaylistIdRouteHandler)
  .openapi(postLikesPlaylistsPlaylistIdRoute, postLikesPlaylistsPlaylistIdRouteHandler)
  .openapi(deleteLikesTracksTrackIdRoute, deleteLikesTracksTrackIdRouteHandler)
  .openapi(postLikesTracksTrackIdRoute, postLikesTracksTrackIdRouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)
  .openapi(getMeActivitiesRoute, getMeActivitiesRouteHandler)
  .openapi(getMeActivitiesAllOwnRoute, getMeActivitiesAllOwnRouteHandler)
  .openapi(getMeActivitiesTracksRoute, getMeActivitiesTracksRouteHandler)
  .openapi(getMeConnectionsRoute, getMeConnectionsRouteHandler)
  .openapi(getMeConnectionsConnectionIdRoute, getMeConnectionsConnectionIdRouteHandler)
  .openapi(getMeFavoritesIdsRoute, getMeFavoritesIdsRouteHandler)
  .openapi(getMeFollowersRoute, getMeFollowersRouteHandler)
  .openapi(getMeFollowersFollowerIdRoute, getMeFollowersFollowerIdRouteHandler)
  .openapi(getMeFollowingsRoute, getMeFollowingsRouteHandler)
  .openapi(getMeFollowingsTracksRoute, getMeFollowingsTracksRouteHandler)
  .openapi(deleteMeFollowingsUserIdRoute, deleteMeFollowingsUserIdRouteHandler)
  .openapi(getMeFollowingsUserIdRoute, getMeFollowingsUserIdRouteHandler)
  .openapi(putMeFollowingsUserIdRoute, putMeFollowingsUserIdRouteHandler)
  .openapi(getMeLikesTracksRoute, getMeLikesTracksRouteHandler)
  .openapi(getMePlaylistsRoute, getMePlaylistsRouteHandler)
  .openapi(getMePlaylistsPlaylistIdRoute, getMePlaylistsPlaylistIdRouteHandler)
  .openapi(getMeTracksRoute, getMeTracksRouteHandler)
  .openapi(getMeTracksTrackIdRoute, getMeTracksTrackIdRouteHandler)
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(getPlaylistsRoute, getPlaylistsRouteHandler)
  .openapi(postPlaylistsRoute, postPlaylistsRouteHandler)
  .openapi(deletePlaylistsPlaylistIdRoute, deletePlaylistsPlaylistIdRouteHandler)
  .openapi(getPlaylistsPlaylistIdRoute, getPlaylistsPlaylistIdRouteHandler)
  .openapi(putPlaylistsPlaylistIdRoute, putPlaylistsPlaylistIdRouteHandler)
  .openapi(getPlaylistsPlaylistIdRepostersRoute, getPlaylistsPlaylistIdRepostersRouteHandler)
  .openapi(getPlaylistsPlaylistIdTracksRoute, getPlaylistsPlaylistIdTracksRouteHandler)
  .openapi(deleteRepostsPlaylistsPlaylistIdRoute, deleteRepostsPlaylistsPlaylistIdRouteHandler)
  .openapi(postRepostsPlaylistsPlaylistIdRoute, postRepostsPlaylistsPlaylistIdRouteHandler)
  .openapi(deleteRepostsTracksTrackIdRoute, deleteRepostsTracksTrackIdRouteHandler)
  .openapi(postRepostsTracksTrackIdRoute, postRepostsTracksTrackIdRouteHandler)
  .openapi(getResolveRoute, getResolveRouteHandler)
  .openapi(getTracksRoute, getTracksRouteHandler)
  .openapi(postTracksRoute, postTracksRouteHandler)
  .openapi(deleteTracksTrackIdRoute, deleteTracksTrackIdRouteHandler)
  .openapi(getTracksTrackIdRoute, getTracksTrackIdRouteHandler)
  .openapi(putTracksTrackIdRoute, putTracksTrackIdRouteHandler)
  .openapi(getTracksTrackIdCommentsRoute, getTracksTrackIdCommentsRouteHandler)
  .openapi(postTracksTrackIdCommentsRoute, postTracksTrackIdCommentsRouteHandler)
  .openapi(getTracksTrackIdFavoritersRoute, getTracksTrackIdFavoritersRouteHandler)
  .openapi(getTracksTrackIdRelatedRoute, getTracksTrackIdRelatedRouteHandler)
  .openapi(getTracksTrackIdRepostersRoute, getTracksTrackIdRepostersRouteHandler)
  .openapi(getTracksTrackIdStreamsRoute, getTracksTrackIdStreamsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(getUsersUserIdCommentsRoute, getUsersUserIdCommentsRouteHandler)
  .openapi(getUsersUserIdFavoritesRoute, getUsersUserIdFavoritesRouteHandler)
  .openapi(getUsersUserIdFollowersRoute, getUsersUserIdFollowersRouteHandler)
  .openapi(getUsersUserIdFollowingsRoute, getUsersUserIdFollowingsRouteHandler)
  .openapi(
    getUsersUserIdFollowingsFollowingIdRoute,
    getUsersUserIdFollowingsFollowingIdRouteHandler,
  )
  .openapi(getUsersUserIdLikesTracksRoute, getUsersUserIdLikesTracksRouteHandler)
  .openapi(getUsersUserIdPlaylistsRoute, getUsersUserIdPlaylistsRouteHandler)
  .openapi(getUsersUserIdTracksRoute, getUsersUserIdTracksRouteHandler)
  .openapi(getUsersUserIdWebProfilesRoute, getUsersUserIdWebProfilesRouteHandler)

export default app
