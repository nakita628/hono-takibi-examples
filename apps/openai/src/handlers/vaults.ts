import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultsVaultIdCredentialsCredentialIdRoute,
  deleteVaultsVaultIdRoute,
  getVaultsRoute,
  getVaultsVaultIdCredentialsCredentialIdRoute,
  getVaultsVaultIdCredentialsRoute,
  getVaultsVaultIdRoute,
  postVaultsRoute,
  postVaultsVaultIdCredentialsCredentialIdRoute,
  postVaultsVaultIdCredentialsRoute,
  postVaultsVaultIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vaultsHandler = app
  .openapi(getVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsVaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultsVaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsVaultIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsVaultIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultsVaultIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
