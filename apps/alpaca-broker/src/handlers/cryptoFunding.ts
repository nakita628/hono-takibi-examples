import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute,
  getV1AccountsAccountIdWalletsRoute,
  getV1AccountsAccountIdWalletsTransfersRoute,
  getV1AccountsAccountIdWalletsTransfersTransferIdRoute,
  getV1AccountsAccountIdWalletsWhitelistsRoute,
  getV1WalletsFeesEstimateRoute,
  getV1WalletsTravelRuleVaspsRoute,
  patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
  postV1AccountsAccountIdWalletsTransfersRoute,
  postV1AccountsAccountIdWalletsWhitelistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoFundingHandler = app
  .openapi(getV1AccountsAccountIdWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1WalletsFeesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WalletsTravelRuleVaspsRoute, (c) => {
    throw new Error('Not implemented')
  })
