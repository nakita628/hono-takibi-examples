import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegistrycredentialsRegistryCredentialIdRoute,
  getRegistrycredentialsRegistryCredentialIdRoute,
  getRegistrycredentialsRoute,
  patchRegistrycredentialsRegistryCredentialIdRoute,
  postRegistrycredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registryCredentialsHandler = app
  .openapi(getRegistrycredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistrycredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrycredentialsRegistryCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRegistrycredentialsRegistryCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegistrycredentialsRegistryCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
