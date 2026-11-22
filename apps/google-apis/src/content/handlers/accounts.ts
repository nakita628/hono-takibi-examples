import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLabelsLabelIdRoute,
  deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute,
  deleteMerchantIdAccountsAccountIdRoute,
  getAccountsAccountIdLabelsRoute,
  getAccountsAccountIdReturncarrierRoute,
  getAccountsAuthinfoRoute,
  getMerchantIdAccountsAccountIdListlinksRoute,
  getMerchantIdAccountsAccountIdRoute,
  getMerchantIdAccountsRoute,
  patchAccountsAccountIdLabelsLabelIdRoute,
  patchAccountsAccountIdReturncarrierCarrierAccountIdRoute,
  postAccountsAccountIdCredentialsRoute,
  postAccountsAccountIdLabelsRoute,
  postAccountsAccountIdReturncarrierRoute,
  postAccountsBatchRoute,
  postMerchantIdAccountsAccountIdClaimwebsiteRoute,
  postMerchantIdAccountsAccountIdLinkRoute,
  postMerchantIdAccountsAccountIdRequestphoneverificationRoute,
  postMerchantIdAccountsAccountIdUpdatelabelsRoute,
  postMerchantIdAccountsAccountIdVerifyphonenumberRoute,
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
  .openapi(postAccountsAccountIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReturncarrierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdReturncarrierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdReturncarrierCarrierAccountIdRoute, (c) => {
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
  .openapi(getMerchantIdAccountsAccountIdListlinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdRequestphoneverificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdUpdatelabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdVerifyphonenumberRoute, (c) => {
    throw new Error('Not implemented')
  })
