import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionManagedCredentialsCredentialIdRoute,
  getApiVersionManagedCredentialsRoute,
  postApiVersionManagedCredentialsCredentialIdRevokeRoute,
  postApiVersionManagedCredentialsCredentialIdUpdateRoute,
  postApiVersionManagedCredentialsRoute,
  putApiVersionManagedCredentialsCredentialIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedCredentialsHandler = app
  .openapi(postApiVersionManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedCredentialsCredentialIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionManagedCredentialsCredentialIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
