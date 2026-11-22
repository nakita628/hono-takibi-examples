import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDevicesIpProfilesProfileIdRoute,
  getAccountsAccountIdDevicesIpProfilesProfileIdRoute,
  getAccountsAccountIdDevicesIpProfilesRoute,
  patchAccountsAccountIdDevicesIpProfilesProfileIdRoute,
  postAccountsAccountIdDevicesIpProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipProfilesHandler = app
  .openapi(getAccountsAccountIdDevicesIpProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesIpProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDevicesIpProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDevicesIpProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdDevicesIpProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
