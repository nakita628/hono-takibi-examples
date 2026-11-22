import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerBlocklistAccountsAccountNameRoute,
  getApiV1BlocklistStatusRoute,
  getApiV1ServerBlocklistAccountsRoute,
  postApiV1ServerBlocklistAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountBlocksHandler = app
  .openapi(getApiV1BlocklistStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistAccountsAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
