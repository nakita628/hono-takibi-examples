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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1EmojiCustomAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmojiCustomCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmojiCustomDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmojiCustomListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmojiCustomUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomSoundsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomUserStatusListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AssetsSetAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AssetsUnsetAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomSoundsGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
