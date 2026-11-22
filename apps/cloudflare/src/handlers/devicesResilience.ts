import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDevicesResilienceDisconnectRoute,
  postAccountsAccountIdDevicesResilienceDisconnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesResilienceHandler = app
  .openapi(getAccountsAccountIdDevicesResilienceDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDevicesResilienceDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
