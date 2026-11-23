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
  postUserTagsRoute,
  putUserEpisodesEpisodeIdRoute,
  putUserFollowsNetworksNetworkIdRoute,
  putUserFollowsPeoplePersonIdRoute,
  putUserFollowsShowsShowIdRoute,
  putUserFollowsWebchannelsWebchannelIdRoute,
  putUserTagsTagIdShowsShowIdRoute,
  putUserVotesEpisodesEpisodeIdRoute,
  putUserVotesShowsShowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsWebchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsWebchannelsWebchannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTagsTagIdShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserTagsTagIdShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserTagsTagIdShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserVotesShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
