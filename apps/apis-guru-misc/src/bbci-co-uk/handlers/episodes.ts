import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEpisodesPidNextRoute,
  getEpisodesPidPostrollsRoute,
  getEpisodesPidPrerollsRoute,
  getEpisodesPidRecommendationsRoute,
  getEpisodesPidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
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
