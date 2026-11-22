import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdPlayedItemsItemIdRoute,
  deleteUsersUserIdPlayingItemsItemIdRoute,
  postSessionsPlayingPingRoute,
  postSessionsPlayingProgressRoute,
  postSessionsPlayingRoute,
  postSessionsPlayingStoppedRoute,
  postUsersUserIdPlayedItemsItemIdRoute,
  postUsersUserIdPlayingItemsItemIdProgressRoute,
  postUsersUserIdPlayingItemsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playstateHandler = app
  .openapi(postSessionsPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsPlayingStoppedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayedItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlayingItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayingItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlayingItemsItemIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
