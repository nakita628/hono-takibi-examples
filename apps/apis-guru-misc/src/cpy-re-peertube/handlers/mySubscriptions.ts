import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  getApiV1UsersMeSubscriptionsExistRoute,
  getApiV1UsersMeSubscriptionsRoute,
  getApiV1UsersMeSubscriptionsSubscriptionHandleRoute,
  getApiV1UsersMeSubscriptionsVideosRoute,
  postApiV1UsersMeSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mySubscriptionsHandler = app
  .openapi(getApiV1UsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeSubscriptionsSubscriptionHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
