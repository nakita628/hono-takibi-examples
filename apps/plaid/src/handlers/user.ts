import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUserCreateRoute,
  postUserFinancialDataRefreshRoute,
  postUserGetRoute,
  postUserIdentityRemoveRoute,
  postUserItemsAssociateRoute,
  postUserItemsGetRoute,
  postUserItemsRemoveRoute,
  postUserProductsTerminateRoute,
  postUserRemoveRoute,
  postUserThirdPartyTokenCreateRoute,
  postUserThirdPartyTokenRemoveRoute,
  postUserTransactionsRefreshRoute,
  postUserTransferLimitsGetRoute,
  postUserUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserTransactionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserFinancialDataRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserIdentityRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserProductsTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTransferLimitsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserThirdPartyTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserThirdPartyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
