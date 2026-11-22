import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesMessageIdRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesRoute,
  postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesNewRoute,
  putAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rfiMessagesHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesNewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdMessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
