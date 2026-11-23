import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CustomSoundsGetOneRoute,
  getApiV1CustomSoundsListRoute,
  getApiV1CustomUserStatusListRoute,
  getApiV1EmojiCustomAllRoute,
  getApiV1EmojiCustomListRoute,
  postApiV1AssetsSetAssetRoute,
  postApiV1AssetsUnsetAssetRoute,
  postApiV1CustomSoundsCreateRoute,
  postApiV1CustomSoundsDeleteRoute,
  postApiV1CustomSoundsUpdateRoute,
  postApiV1CustomUserStatusCreateRoute,
  postApiV1CustomUserStatusDeleteRoute,
  postApiV1CustomUserStatusUpdateRoute,
  postApiV1EmojiCustomCreateRoute,
  postApiV1EmojiCustomDeleteRoute,
  postApiV1EmojiCustomUpdateRoute,
} from './routes'
import {
  getApiV1CustomSoundsGetOneRouteHandler,
  getApiV1CustomSoundsListRouteHandler,
  getApiV1CustomUserStatusListRouteHandler,
  getApiV1EmojiCustomAllRouteHandler,
  getApiV1EmojiCustomListRouteHandler,
  postApiV1AssetsSetAssetRouteHandler,
  postApiV1AssetsUnsetAssetRouteHandler,
  postApiV1CustomSoundsCreateRouteHandler,
  postApiV1CustomSoundsDeleteRouteHandler,
  postApiV1CustomSoundsUpdateRouteHandler,
  postApiV1CustomUserStatusCreateRouteHandler,
  postApiV1CustomUserStatusDeleteRouteHandler,
  postApiV1CustomUserStatusUpdateRouteHandler,
  postApiV1EmojiCustomCreateRouteHandler,
  postApiV1EmojiCustomDeleteRouteHandler,
  postApiV1EmojiCustomUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1EmojiCustomAllRoute, getApiV1EmojiCustomAllRouteHandler)
  .openapi(postApiV1EmojiCustomCreateRoute, postApiV1EmojiCustomCreateRouteHandler)
  .openapi(postApiV1EmojiCustomDeleteRoute, postApiV1EmojiCustomDeleteRouteHandler)
  .openapi(getApiV1EmojiCustomListRoute, getApiV1EmojiCustomListRouteHandler)
  .openapi(postApiV1EmojiCustomUpdateRoute, postApiV1EmojiCustomUpdateRouteHandler)
  .openapi(getApiV1CustomSoundsListRoute, getApiV1CustomSoundsListRouteHandler)
  .openapi(postApiV1CustomSoundsCreateRoute, postApiV1CustomSoundsCreateRouteHandler)
  .openapi(postApiV1CustomSoundsUpdateRoute, postApiV1CustomSoundsUpdateRouteHandler)
  .openapi(getApiV1CustomUserStatusListRoute, getApiV1CustomUserStatusListRouteHandler)
  .openapi(postApiV1CustomUserStatusCreateRoute, postApiV1CustomUserStatusCreateRouteHandler)
  .openapi(postApiV1CustomUserStatusUpdateRoute, postApiV1CustomUserStatusUpdateRouteHandler)
  .openapi(postApiV1CustomUserStatusDeleteRoute, postApiV1CustomUserStatusDeleteRouteHandler)
  .openapi(postApiV1AssetsSetAssetRoute, postApiV1AssetsSetAssetRouteHandler)
  .openapi(postApiV1AssetsUnsetAssetRoute, postApiV1AssetsUnsetAssetRouteHandler)
  .openapi(postApiV1CustomSoundsDeleteRoute, postApiV1CustomSoundsDeleteRouteHandler)
  .openapi(getApiV1CustomSoundsGetOneRoute, getApiV1CustomSoundsGetOneRouteHandler)

export default app
