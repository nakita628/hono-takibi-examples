import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  deleteApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsRoute,
  patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  patchApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute,
  postApplicationsApplicationIdFederatedIdentityCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsFederatedIdentityCredentialHandler = app
  .openapi(getApplicationsApplicationIdFederatedIdentityCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdFederatedIdentityCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdFederatedIdentityCredentialsNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdFederatedIdentityCredentialsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
