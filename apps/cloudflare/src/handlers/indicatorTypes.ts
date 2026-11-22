import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneEventsIndicatorTypes2Route,
  getAccountsAccountIdCloudforceOneEventsIndicatorTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicatorTypesHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsIndicatorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsIndicatorTypes2Route, (c) => {
    throw new Error('Not implemented')
  })
