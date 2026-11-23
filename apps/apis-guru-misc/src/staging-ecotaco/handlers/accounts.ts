import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsPaymentMethodsRoute,
  getAccountsRoute,
  postAccountsPasswordRoute,
  postAccountsRoute,
  postAccountsSettingsRoute,
  postAccountsSignInRoute,
  putAccountsRoute,
  putAccountsUpdatePasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsSignInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsUpdatePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
