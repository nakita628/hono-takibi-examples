import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResellerAccountsClientUserIdRoute,
  getResellerAccountsRoute,
  postResellerAccountsPublicRoute,
  postResellerAccountsRoute,
  putResellerAccountsClientUserIdRoute,
  putResellerTransferCreditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resellerAccountsHandler = app
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
