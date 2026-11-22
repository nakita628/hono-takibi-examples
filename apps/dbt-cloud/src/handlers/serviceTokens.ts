import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdServiceTokensIdIndexRoute,
  getApiV3AccountsAccountIdServiceTokensIdIndexRoute,
  getApiV3AccountsAccountIdServiceTokensIndexRoute,
  getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRoute,
  postApiV3AccountsAccountIdServiceTokensIndexRoute,
  putApiV3AccountsAccountIdServiceTokensIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceTokensHandler = app
  .openapi(getApiV3AccountsAccountIdServiceTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdServiceTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdServiceTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
