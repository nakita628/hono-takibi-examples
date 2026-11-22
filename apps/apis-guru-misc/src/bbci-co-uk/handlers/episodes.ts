import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesCategoryEpisodesRoute,
  getClipsPidRoute,
  getEpisodesPidNextRoute,
  getEpisodesPidPostrollsRoute,
  getEpisodesPidPrerollsRoute,
  getEpisodesPidRecommendationsRoute,
  getEpisodesPidRoute,
  getGroupsPidEpisodesRoute,
  getGroupsPopularEpisodesRoute,
  getProgrammesPidEpisodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
  .openapi(getCategoriesCategoryEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClipsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesPidNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesPidPostrollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesPidPrerollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesPidRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsPopularEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsPidEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProgrammesPidEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
