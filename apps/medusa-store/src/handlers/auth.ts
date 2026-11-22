import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthSessionRoute,
  getAuthCustomerProvidersRoute,
  postAuthCustomerAuthProviderCallbackRoute,
  postAuthCustomerAuthProviderRegisterRoute,
  postAuthCustomerAuthProviderResetPasswordRoute,
  postAuthCustomerAuthProviderRoute,
  postAuthCustomerAuthProviderUpdateRoute,
  postAuthCustomerEmailpassVerificationConfirmRoute,
  postAuthSessionRoute,
  postAuthTokenRefreshRoute,
  postAuthVerificationConfirmRoute,
  postAuthVerificationRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthCustomerEmailpassVerificationConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthCustomerProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCustomerAuthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCustomerAuthProviderCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCustomerAuthProviderRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCustomerAuthProviderResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthCustomerAuthProviderUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerificationConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerificationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
