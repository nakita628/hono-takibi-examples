import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRoute,
  postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRoute,
  putAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rfiHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
