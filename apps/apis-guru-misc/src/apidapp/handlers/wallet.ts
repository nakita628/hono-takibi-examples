import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletAccountIdRoute,
  getWalletAccountRoute,
  getWalletRoute,
  optionsWalletAccountIdPayRoute,
  optionsWalletAccountIdRoute,
  optionsWalletAccountRoute,
  optionsWalletRoute,
  postWalletAccountIdContractRoute,
  postWalletAccountIdErc20Route,
  postWalletAccountIdPayRoute,
  postWalletAccountRoute,
  postWalletRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletHandler = app
  .openapi(getWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWalletAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWalletAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletAccountIdContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletAccountIdErc20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsWalletAccountIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletAccountIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
