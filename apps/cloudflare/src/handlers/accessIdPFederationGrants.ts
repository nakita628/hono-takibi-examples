import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessIdpFederationGrantsGrantIdRoute,
  getAccountsAccountIdAccessIdpFederationGrantsGrantIdRoute,
  getAccountsAccountIdAccessIdpFederationGrantsRoute,
  postAccountsAccountIdAccessIdpFederationGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessIdPFederationGrantsHandler = app
  .openapi(getAccountsAccountIdAccessIdpFederationGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessIdpFederationGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessIdpFederationGrantsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessIdpFederationGrantsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
