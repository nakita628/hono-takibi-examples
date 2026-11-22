import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  deleteApiV2PodcastsPodcastKeyRoute,
  getApiV2PodcastsCategoriesRoute,
  getApiV2PodcastsCountriesRoute,
  getApiV2PodcastsLanguagesRoute,
  getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  getApiV2PodcastsPodcastKeyEpisodesRoute,
  getApiV2PodcastsPodcastKeyRoute,
  getApiV2StationsCountriesRoute,
  getApiV2StationsGenresRoute,
  getApiV2StationsLanguagesRoute,
  getApiV2StationsListRoute,
  postApiV2PodcastsCreateRoute,
  postApiV2PodcastsPodcastKeyEpisodesCreateRoute,
  postApiV2PodcastsSearchRoute,
  postApiV2StationsSearchRoute,
  putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  putApiV2PodcastsPodcastKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiv2Handler = app
  .openapi(getApiV2PodcastsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PodcastsCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PodcastsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PodcastsLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PodcastsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PodcastsPodcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PodcastsPodcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PodcastsPodcastKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PodcastsPodcastKeyEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PodcastsPodcastKeyEpisodesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StationsCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StationsGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StationsLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
