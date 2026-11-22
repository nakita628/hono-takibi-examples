import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletPassesPassIdInstallUrlContactIdRoute,
  postWalletPassesInstallationIdRedeemRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletHandler = app
  .openapi(getWalletPassesPassIdInstallUrlContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletPassesInstallationIdRedeemRoute, (c) => {
    throw new Error('Not implemented')
  })
