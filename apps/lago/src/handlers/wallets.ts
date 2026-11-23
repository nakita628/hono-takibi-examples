import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWalletsLagoIdMetadataKeyRoute,
  deleteWalletsLagoIdMetadataRoute,
  deleteWalletsLagoIdRoute,
  getWalletsLagoIdRoute,
  getWalletsLagoIdWalletTransactionsRoute,
  getWalletsRoute,
  patchWalletsLagoIdMetadataRoute,
  postWalletsLagoIdMetadataRoute,
  postWalletsRoute,
  putWalletsLagoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletsHandler = app
  .openapi(postWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWalletsLagoIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletsLagoIdWalletTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
