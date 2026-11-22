import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodePeopleRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeStatsRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRoute,
  getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodePeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })
