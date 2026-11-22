import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBestPodcastsRoute,
  getCuratedPodcastsIdRoute,
  getCuratedPodcastsRoute,
  getEpisodesIdRecommendationsRoute,
  getEpisodesIdRoute,
  getGenresRoute,
  getJustListenRoute,
  getLanguagesRoute,
  getPodcastsIdRecommendationsRoute,
  getPodcastsIdRoute,
  getRegionsRoute,
  postEpisodesRoute,
  postPodcastsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryAPIHandler = app
  .openapi(getBestPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCuratedPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCuratedPodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJustListenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPodcastsIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
