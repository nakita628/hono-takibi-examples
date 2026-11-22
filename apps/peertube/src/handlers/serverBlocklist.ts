import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerBlocklistAccountsAccountNameRoute,
  deleteApiV1ServerBlocklistServersHostRoute,
  deleteApiV1ServerBlocklistSubscriptionsIdRoute,
  getApiV1ServerBlocklistAccountsRoute,
  getApiV1ServerBlocklistPublicLogRoute,
  getApiV1ServerBlocklistServersRoute,
  getApiV1ServerBlocklistSubscriptionsRoute,
  postApiV1ServerBlocklistAccountsRoute,
  postApiV1ServerBlocklistServersRoute,
  postApiV1ServerBlocklistSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverBlocklistHandler = app
  .openapi(getApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistAccountsAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistServersHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistPublicLogRoute, (c) => {
    throw new Error('Not implemented')
  })
