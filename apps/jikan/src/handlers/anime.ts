import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnimeIdCharactersRoute,
  getAnimeIdEpisodesEpisodeRoute,
  getAnimeIdEpisodesRoute,
  getAnimeIdExternalRoute,
  getAnimeIdForumRoute,
  getAnimeIdFullRoute,
  getAnimeIdMoreinfoRoute,
  getAnimeIdNewsRoute,
  getAnimeIdPicturesRoute,
  getAnimeIdRecommendationsRoute,
  getAnimeIdRelationsRoute,
  getAnimeIdReviewsRoute,
  getAnimeIdRoute,
  getAnimeIdStaffRoute,
  getAnimeIdStatisticsRoute,
  getAnimeIdStreamingRoute,
  getAnimeIdThemesRoute,
  getAnimeIdUserupdatesRoute,
  getAnimeIdVideosEpisodesRoute,
  getAnimeIdVideosRoute,
  getAnimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const animeHandler = app
  .openapi(getAnimeIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdStaffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdEpisodesEpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdForumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdVideosEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdMoreinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdUserupdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdRelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeIdStreamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
