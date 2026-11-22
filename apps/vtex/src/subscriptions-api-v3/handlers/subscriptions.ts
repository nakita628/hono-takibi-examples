import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRnsPubSubscriptionsIdItemsItemIdRoute,
  getApiRnsPubSubscriptionsIdRoute,
  getApiRnsPubSubscriptionsRoute,
  getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute,
  patchApiRnsPubSubscriptionsIdItemsItemIdRoute,
  patchApiRnsPubSubscriptionsIdRoute,
  postApiRnsPubSubscriptionsIdItemsRoute,
  postApiRnsPubSubscriptionsIdSimulateRoute,
  postApiRnsPubSubscriptionsRoute,
  postApiRnsPubSubscriptionsSimulateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getApiRnsPubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRnsPubSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRnsPubSubscriptionsIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRnsPubSubscriptionsIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
