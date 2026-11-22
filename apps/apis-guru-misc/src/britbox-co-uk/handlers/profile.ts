import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountProfileBookmarksItemIdRoute,
  deleteAccountProfileWatchedRoute,
  getAccountProfileBookmarksItemIdRoute,
  getAccountProfileBookmarksListRoute,
  getAccountProfileBookmarksRoute,
  getAccountProfileContinueWatchingListRoute,
  getAccountProfileItemsItemIdNextRoute,
  getAccountProfileRatingsItemIdRoute,
  getAccountProfileRatingsListRoute,
  getAccountProfileRatingsRoute,
  getAccountProfileRoute,
  getAccountProfileWatchedItemIdRoute,
  getAccountProfileWatchedListRoute,
  getAccountProfileWatchedRoute,
  putAccountProfileBookmarksItemIdRoute,
  putAccountProfileRatingsItemIdRoute,
  putAccountProfileWatchedItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getAccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileBookmarksItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileContinueWatchingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileItemsItemIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileRatingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileRatingsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountProfileWatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountProfileWatchedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountProfileWatchedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
