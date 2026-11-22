import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1WatchedWordsAccountsAccountNameListsListIdRoute,
  deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRoute,
  deleteApiV1WatchedWordsServerListsListIdRoute,
  deleteApiV1WatchedWordsServerSubscriptionsIdRoute,
  getApiV1WatchedWordsAccountsAccountNameListsRoute,
  getApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute,
  getApiV1WatchedWordsServerListsRoute,
  getApiV1WatchedWordsServerSubscriptionsRoute,
  postApiV1WatchedWordsAccountsAccountNameListsRoute,
  postApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute,
  postApiV1WatchedWordsServerListsRoute,
  postApiV1WatchedWordsServerSubscriptionsRoute,
  putApiV1WatchedWordsAccountsAccountNameListsListIdRoute,
  putApiV1WatchedWordsServerListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchedWordsHandler = app
  .openapi(getApiV1WatchedWordsAccountsAccountNameListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsAccountsAccountNameListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WatchedWordsAccountsAccountNameListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsAccountsAccountNameListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsServerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsServerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1WatchedWordsServerListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsServerListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsAccountsAccountNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsAccountsAccountNameSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WatchedWordsServerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WatchedWordsServerSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WatchedWordsServerSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
