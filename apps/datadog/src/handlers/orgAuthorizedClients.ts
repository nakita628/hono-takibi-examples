import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute,
  deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClientsUserAuthorizedClientIdRoute,
  deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserUserIdRoute,
  getApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute,
  getApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClientsRoute,
  getApiV2OrgAuthorizedClientsRoute,
  patchApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgAuthorizedClientsHandler = app
  .openapi(getApiV2OrgAuthorizedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgAuthorizedClientsOrgAuthorizedClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2OrgAuthorizedClientsOrgAuthorizedClientIdUserAuthorizedClientsUserAuthorizedClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
