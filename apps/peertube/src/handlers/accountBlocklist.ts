import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersMeBlocklistAccountsAccountNameRoute,
  deleteApiV1UsersMeBlocklistServersHostRoute,
  getApiV1BlocklistStatusRoute,
  getApiV1UsersMeBlocklistAccountsRoute,
  getApiV1UsersMeBlocklistServersRoute,
  postApiV1UsersMeBlocklistAccountsRoute,
  postApiV1UsersMeBlocklistServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountBlocklistHandler = app
  .openapi(getApiV1BlocklistStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeBlocklistAccountsAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeBlocklistServersHostRoute, (c) => {
    throw new Error('Not implemented')
  })
