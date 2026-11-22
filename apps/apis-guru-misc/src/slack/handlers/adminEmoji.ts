import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminEmojiListRoute,
  postAdminEmojiAddAliasRoute,
  postAdminEmojiAddRoute,
  postAdminEmojiRemoveRoute,
  postAdminEmojiRenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminEmojiHandler = app
  .openapi(postAdminEmojiAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiAddAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEmojiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
