import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrganizationsNameServiceAccountsServiceAccountIdRoute,
  deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute,
  getApiOrganizationsNameServiceAccountsRoute,
  getApiOrganizationsNameServiceAccountsServiceAccountIdRoute,
  getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute,
  patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute,
  postApiOrganizationsNameServiceAccountsRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRoute,
  postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceAccountsHandler = app
  .openapi(getApiOrganizationsNameServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameServiceAccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
