import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EmojiAutoEmojifyRoute,
  getV1EmojiSuggestionsRoute,
  getV1ImagesAnimateRoute,
  getV1ImagesLogoRoute,
  getV1ImagesQuoteRoute,
  getV1LinkCtaRoute,
  getV1LinkShortLinkRoute,
  getV1SearchTrendingRoute,
  getV1StatsAutoHashtagRoute,
  getV1StatsHashtagSuggestionsRoute,
  getV1StatsHistoryHashtagRoute,
  getV1StatsMultipleHashtagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1EmojiAutoEmojifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmojiSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesAnimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkCtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LinkShortLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SearchTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsAutoHashtagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsHashtagSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsHistoryHashtagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsMultipleHashtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
