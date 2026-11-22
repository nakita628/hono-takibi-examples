import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatPinsRoute,
  getChatBadgesGlobalRoute,
  getChatBadgesRoute,
  getChatChattersRoute,
  getChatColorRoute,
  getChatEmotesGlobalRoute,
  getChatEmotesRoute,
  getChatEmotesSetRoute,
  getChatEmotesUserRoute,
  getChatPinsRoute,
  getChatSettingsRoute,
  getSharedChatSessionRoute,
  patchChatPinsRoute,
  patchChatSettingsRoute,
  postChatAnnouncementsRoute,
  postChatMessagesRoute,
  postChatShoutoutsRoute,
  putChatColorRoute,
  putChatPinsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(getChatChattersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatEmotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatEmotesGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatEmotesSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatBadgesGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedChatSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatEmotesUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatShoutoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChatPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatColorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChatColorRoute, (c) => {
    throw new Error('Not implemented')
  })
