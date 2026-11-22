import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute,
  getAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute,
  getAccountsAccountIdFlagshipAppsAppIdFlagsRoute,
  patchAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute,
  postAccountsAccountIdFlagshipAppsAppIdFlagsRoute,
  putAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagsHandler = app
  .openapi(getAccountsAccountIdFlagshipAppsAppIdFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdFlagshipAppsAppIdFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdFlagshipAppsAppIdFlagsFlagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
