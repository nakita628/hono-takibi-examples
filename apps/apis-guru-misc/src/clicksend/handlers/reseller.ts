import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResellerAccountsClientUserIdRoute,
  getResellerAccountsRoute,
  getResellerRoute,
  getResellerSubdomainRoute,
  postResellerAccountsPublicRoute,
  postResellerAccountsRoute,
  putResellerAccountsClientUserIdRoute,
  putResellerRoute,
  putResellerTransferCreditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resellerHandler = app
  .openapi(getResellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResellerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResellerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResellerAccountsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResellerAccountsClientUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResellerAccountsClientUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResellerTransferCreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResellerSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
