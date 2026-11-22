import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1EmojiCustomAllRoute,
  getApiV1EmojiCustomListRoute,
  postApiV1EmojiCustomCreateRoute,
  postApiV1EmojiCustomDeleteRoute,
  postApiV1EmojiCustomUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customEmojiHandler = app
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
