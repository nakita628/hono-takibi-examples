import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneBinaryHashRoute,
  postAccountsAccountIdCloudforceOneBinaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const binDBHandler = app
  .openapi(postAccountsAccountIdCloudforceOneBinaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneBinaryHashRoute, (c) => {
    throw new Error('Not implemented')
  })
