import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
  getApplicationsApplicationIdFederatedIdentityCredentialsRoute,
  patchApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
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
    deleteApplicationsApplicationIdFederatedIdentityCredentialsFederatedIdentityCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
