import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserEpisodesEpisodeIdRoute,
  deleteUserFollowsNetworksNetworkIdRoute,
  deleteUserFollowsPeoplePersonIdRoute,
  deleteUserFollowsShowsShowIdRoute,
  deleteUserFollowsWebchannelsWebchannelIdRoute,
  deleteUserTagsTagIdRoute,
  deleteUserTagsTagIdShowsShowIdRoute,
  deleteUserVotesEpisodesEpisodeIdRoute,
  deleteUserVotesShowsShowIdRoute,
  getAuthValidateRoute,
  getScrobbleShowsShowIdRoute,
  getUserEpisodesEpisodeIdRoute,
  getUserEpisodesRoute,
  getUserFollowsNetworksNetworkIdRoute,
  getUserFollowsNetworksRoute,
  getUserFollowsPeoplePersonIdRoute,
  getUserFollowsPeopleRoute,
  getUserFollowsShowsRoute,
  getUserFollowsShowsShowIdRoute,
  getUserFollowsWebchannelsRoute,
  getUserFollowsWebchannelsWebchannelIdRoute,
  getUserTagsRoute,
  getUserTagsTagIdShowsRoute,
  getUserVotesEpisodesEpisodeIdRoute,
  getUserVotesEpisodesRoute,
  getUserVotesShowsRoute,
  getUserVotesShowsShowIdRoute,
  patchUserTagsTagIdRoute,
  postAuthPollRoute,
  postAuthStartRoute,
  postScrobbleEpisodesRoute,
  postScrobbleShowsRoute,
  postUserTagsRoute,
  putScrobbleEpisodesEpisodeIdRoute,
  putUserEpisodesEpisodeIdRoute,
  putUserFollowsNetworksNetworkIdRoute,
  putUserFollowsPeoplePersonIdRoute,
  putUserFollowsShowsShowIdRoute,
  putUserFollowsWebchannelsWebchannelIdRoute,
  putUserTagsTagIdShowsShowIdRoute,
  putUserVotesEpisodesEpisodeIdRoute,
  putUserVotesShowsShowIdRoute,
} from './routes'
import {
  deleteUserEpisodesEpisodeIdRouteHandler,
  deleteUserFollowsNetworksNetworkIdRouteHandler,
  deleteUserFollowsPeoplePersonIdRouteHandler,
  deleteUserFollowsShowsShowIdRouteHandler,
  deleteUserFollowsWebchannelsWebchannelIdRouteHandler,
  deleteUserTagsTagIdRouteHandler,
  deleteUserTagsTagIdShowsShowIdRouteHandler,
  deleteUserVotesEpisodesEpisodeIdRouteHandler,
  deleteUserVotesShowsShowIdRouteHandler,
  getAuthValidateRouteHandler,
  getScrobbleShowsShowIdRouteHandler,
  getUserEpisodesEpisodeIdRouteHandler,
  getUserEpisodesRouteHandler,
  getUserFollowsNetworksNetworkIdRouteHandler,
  getUserFollowsNetworksRouteHandler,
  getUserFollowsPeoplePersonIdRouteHandler,
  getUserFollowsPeopleRouteHandler,
  getUserFollowsShowsRouteHandler,
  getUserFollowsShowsShowIdRouteHandler,
  getUserFollowsWebchannelsRouteHandler,
  getUserFollowsWebchannelsWebchannelIdRouteHandler,
  getUserTagsRouteHandler,
  getUserTagsTagIdShowsRouteHandler,
  getUserVotesEpisodesEpisodeIdRouteHandler,
  getUserVotesEpisodesRouteHandler,
  getUserVotesShowsRouteHandler,
  getUserVotesShowsShowIdRouteHandler,
  patchUserTagsTagIdRouteHandler,
  postAuthPollRouteHandler,
  postAuthStartRouteHandler,
  postScrobbleEpisodesRouteHandler,
  postScrobbleShowsRouteHandler,
  postUserTagsRouteHandler,
  putScrobbleEpisodesEpisodeIdRouteHandler,
  putUserEpisodesEpisodeIdRouteHandler,
  putUserFollowsNetworksNetworkIdRouteHandler,
  putUserFollowsPeoplePersonIdRouteHandler,
  putUserFollowsShowsShowIdRouteHandler,
  putUserFollowsWebchannelsWebchannelIdRouteHandler,
  putUserTagsTagIdShowsShowIdRouteHandler,
  putUserVotesEpisodesEpisodeIdRouteHandler,
  putUserVotesShowsShowIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAuthPollRoute, postAuthPollRouteHandler)
  .openapi(postAuthStartRoute, postAuthStartRouteHandler)
  .openapi(getAuthValidateRoute, getAuthValidateRouteHandler)
  .openapi(postScrobbleEpisodesRoute, postScrobbleEpisodesRouteHandler)
  .openapi(putScrobbleEpisodesEpisodeIdRoute, putScrobbleEpisodesEpisodeIdRouteHandler)
  .openapi(postScrobbleShowsRoute, postScrobbleShowsRouteHandler)
  .openapi(getScrobbleShowsShowIdRoute, getScrobbleShowsShowIdRouteHandler)
  .openapi(getUserEpisodesRoute, getUserEpisodesRouteHandler)
  .openapi(deleteUserEpisodesEpisodeIdRoute, deleteUserEpisodesEpisodeIdRouteHandler)
  .openapi(getUserEpisodesEpisodeIdRoute, getUserEpisodesEpisodeIdRouteHandler)
  .openapi(putUserEpisodesEpisodeIdRoute, putUserEpisodesEpisodeIdRouteHandler)
  .openapi(getUserFollowsNetworksRoute, getUserFollowsNetworksRouteHandler)
  .openapi(deleteUserFollowsNetworksNetworkIdRoute, deleteUserFollowsNetworksNetworkIdRouteHandler)
  .openapi(getUserFollowsNetworksNetworkIdRoute, getUserFollowsNetworksNetworkIdRouteHandler)
  .openapi(putUserFollowsNetworksNetworkIdRoute, putUserFollowsNetworksNetworkIdRouteHandler)
  .openapi(getUserFollowsPeopleRoute, getUserFollowsPeopleRouteHandler)
  .openapi(deleteUserFollowsPeoplePersonIdRoute, deleteUserFollowsPeoplePersonIdRouteHandler)
  .openapi(getUserFollowsPeoplePersonIdRoute, getUserFollowsPeoplePersonIdRouteHandler)
  .openapi(putUserFollowsPeoplePersonIdRoute, putUserFollowsPeoplePersonIdRouteHandler)
  .openapi(getUserFollowsShowsRoute, getUserFollowsShowsRouteHandler)
  .openapi(deleteUserFollowsShowsShowIdRoute, deleteUserFollowsShowsShowIdRouteHandler)
  .openapi(getUserFollowsShowsShowIdRoute, getUserFollowsShowsShowIdRouteHandler)
  .openapi(putUserFollowsShowsShowIdRoute, putUserFollowsShowsShowIdRouteHandler)
  .openapi(getUserFollowsWebchannelsRoute, getUserFollowsWebchannelsRouteHandler)
  .openapi(
    deleteUserFollowsWebchannelsWebchannelIdRoute,
    deleteUserFollowsWebchannelsWebchannelIdRouteHandler,
  )
  .openapi(
    getUserFollowsWebchannelsWebchannelIdRoute,
    getUserFollowsWebchannelsWebchannelIdRouteHandler,
  )
  .openapi(
    putUserFollowsWebchannelsWebchannelIdRoute,
    putUserFollowsWebchannelsWebchannelIdRouteHandler,
  )
  .openapi(getUserTagsRoute, getUserTagsRouteHandler)
  .openapi(postUserTagsRoute, postUserTagsRouteHandler)
  .openapi(deleteUserTagsTagIdRoute, deleteUserTagsTagIdRouteHandler)
  .openapi(patchUserTagsTagIdRoute, patchUserTagsTagIdRouteHandler)
  .openapi(getUserTagsTagIdShowsRoute, getUserTagsTagIdShowsRouteHandler)
  .openapi(deleteUserTagsTagIdShowsShowIdRoute, deleteUserTagsTagIdShowsShowIdRouteHandler)
  .openapi(putUserTagsTagIdShowsShowIdRoute, putUserTagsTagIdShowsShowIdRouteHandler)
  .openapi(getUserVotesEpisodesRoute, getUserVotesEpisodesRouteHandler)
  .openapi(deleteUserVotesEpisodesEpisodeIdRoute, deleteUserVotesEpisodesEpisodeIdRouteHandler)
  .openapi(getUserVotesEpisodesEpisodeIdRoute, getUserVotesEpisodesEpisodeIdRouteHandler)
  .openapi(putUserVotesEpisodesEpisodeIdRoute, putUserVotesEpisodesEpisodeIdRouteHandler)
  .openapi(getUserVotesShowsRoute, getUserVotesShowsRouteHandler)
  .openapi(deleteUserVotesShowsShowIdRoute, deleteUserVotesShowsShowIdRouteHandler)
  .openapi(getUserVotesShowsShowIdRoute, getUserVotesShowsShowIdRouteHandler)
  .openapi(putUserVotesShowsShowIdRoute, putUserVotesShowsShowIdRouteHandler)

export default app
