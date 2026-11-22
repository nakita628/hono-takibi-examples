import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdMnmConfigRoute,
  getAccountsAccountIdMnmConfigFullRoute,
  getAccountsAccountIdMnmConfigRoute,
  patchAccountsAccountIdMnmConfigRoute,
  postAccountsAccountIdMnmConfigRoute,
  putAccountsAccountIdMnmConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const magicNetworkMonitoringConfigurationHandler = app
  .openapi(deleteAccountsAccountIdMnmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMnmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdMnmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMnmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdMnmConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdMnmConfigFullRoute, (c) => {
    throw new Error('Not implemented')
  })
