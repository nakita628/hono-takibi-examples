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
  getV2InstagramHashtagsCleanerRoute,
} from './routes'
import {
  getV1EmojiAutoEmojifyRouteHandler,
  getV1EmojiSuggestionsRouteHandler,
  getV1ImagesAnimateRouteHandler,
  getV1ImagesLogoRouteHandler,
  getV1ImagesQuoteRouteHandler,
  getV1LinkCtaRouteHandler,
  getV1LinkShortLinkRouteHandler,
  getV1SearchTrendingRouteHandler,
  getV1StatsAutoHashtagRouteHandler,
  getV1StatsHashtagSuggestionsRouteHandler,
  getV1StatsHistoryHashtagRouteHandler,
  getV1StatsMultipleHashtagsRouteHandler,
  getV2InstagramHashtagsCleanerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1EmojiAutoEmojifyRoute, getV1EmojiAutoEmojifyRouteHandler)
  .openapi(getV1EmojiSuggestionsRoute, getV1EmojiSuggestionsRouteHandler)
  .openapi(getV1ImagesAnimateRoute, getV1ImagesAnimateRouteHandler)
  .openapi(getV1ImagesLogoRoute, getV1ImagesLogoRouteHandler)
  .openapi(getV1ImagesQuoteRoute, getV1ImagesQuoteRouteHandler)
  .openapi(getV1LinkCtaRoute, getV1LinkCtaRouteHandler)
  .openapi(getV1LinkShortLinkRoute, getV1LinkShortLinkRouteHandler)
  .openapi(getV1SearchTrendingRoute, getV1SearchTrendingRouteHandler)
  .openapi(getV1StatsAutoHashtagRoute, getV1StatsAutoHashtagRouteHandler)
  .openapi(getV1StatsHashtagSuggestionsRoute, getV1StatsHashtagSuggestionsRouteHandler)
  .openapi(getV1StatsHistoryHashtagRoute, getV1StatsHistoryHashtagRouteHandler)
  .openapi(getV1StatsMultipleHashtagsRoute, getV1StatsMultipleHashtagsRouteHandler)
  .openapi(getV2InstagramHashtagsCleanerRoute, getV2InstagramHashtagsCleanerRouteHandler)

export default app
