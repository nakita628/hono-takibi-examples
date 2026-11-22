import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2AdminAnalyticsCustomTagsRoute,
  getV2AdminAnalyticsRoute,
  getV2AdminDeveloperKeysRoute,
  postV2AdminDeveloperKeysRoute,
  putV2AdminDeveloperKeysDeactivateRoute,
  putV2AdminDeveloperKeysLabelRoute,
  putV2AdminDeveloperKeysLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminApiHandler = app
  .openapi(getV2AdminAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdminAnalyticsCustomTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AdminDeveloperKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AdminDeveloperKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2AdminDeveloperKeysLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
