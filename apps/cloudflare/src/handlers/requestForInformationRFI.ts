import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute,
  deleteAccountsAccountIdCloudforceOneRequestsRequestIdMessageMessageIdRoute,
  deleteAccountsAccountIdCloudforceOneRequestsRequestIdRoute,
  getAccountsAccountIdCloudforceOneRequestsConstantsRoute,
  getAccountsAccountIdCloudforceOneRequestsQuotaRoute,
  getAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute,
  getAccountsAccountIdCloudforceOneRequestsRequestIdRoute,
  getAccountsAccountIdCloudforceOneRequestsTypesRoute,
  postAccountsAccountIdCloudforceOneRequestsNewRoute,
  postAccountsAccountIdCloudforceOneRequestsRequestIdAssetNewRoute,
  postAccountsAccountIdCloudforceOneRequestsRequestIdAssetRoute,
  postAccountsAccountIdCloudforceOneRequestsRequestIdMessageNewRoute,
  postAccountsAccountIdCloudforceOneRequestsRequestIdMessageRoute,
  postAccountsAccountIdCloudforceOneRequestsRoute,
  putAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute,
  putAccountsAccountIdCloudforceOneRequestsRequestIdMessageMessageIdRoute,
  putAccountsAccountIdCloudforceOneRequestsRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestForInformationRFIHandler = app
  .openapi(postAccountsAccountIdCloudforceOneRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsRequestIdAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsRequestIdAssetNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneRequestsRequestIdAssetAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsRequestIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsRequestIdMessageNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneRequestsRequestIdMessageMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneRequestsRequestIdMessageMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
