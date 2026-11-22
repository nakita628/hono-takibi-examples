import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDlsRegionsRegionIdRoute,
  getAccountsAccountIdDlsRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionsHandler = app
  .openapi(getAccountsAccountIdDlsRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlsRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
