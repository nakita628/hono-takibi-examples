import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdAccountsAccountIdRoute,
  getAccountsAuthinfoRoute,
  getMerchantIdAccountsAccountIdRoute,
  getMerchantIdAccountsRoute,
  postAccountsBatchRoute,
  postMerchantIdAccountsAccountIdClaimwebsiteRoute,
  postMerchantIdAccountsAccountIdLinkRoute,
  postMerchantIdAccountsRoute,
  putMerchantIdAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsAuthinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdClaimwebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
