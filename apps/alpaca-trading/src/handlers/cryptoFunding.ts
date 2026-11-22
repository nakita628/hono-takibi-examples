import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WalletsWhitelistsWhitelistedAddressIdRoute,
  getV2WalletsFeesEstimateRoute,
  getV2WalletsRoute,
  getV2WalletsTransfersRoute,
  getV2WalletsTransfersTransferIdRoute,
  getV2WalletsTravelRuleVaspsRoute,
  getV2WalletsWhitelistsRoute,
  patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute,
  postV2WalletsWhitelistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoFundingHandler = app
  .openapi(getV2WalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsFeesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsTravelRuleVaspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WalletsWhitelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WalletsWhitelistsWhitelistedAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
