import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretsSecretRolesIdIndexRoute,
  deleteSecretsSecretsIdIndexRoute,
  getSecretsGenerateRsaKeyPairIndexRoute,
  getSecretsSecretRolesIdIndexRoute,
  getSecretsSecretRolesIndexRoute,
  getSecretsSecretsIdIndexRoute,
  getSecretsSecretsIndexRoute,
  patchSecretsSecretRolesIdIndexRoute,
  patchSecretsSecretsIdIndexRoute,
  postSecretsGetSessionKeyIndexRoute,
  postSecretsSecretRolesIndexRoute,
  postSecretsSecretsIndexRoute,
  putSecretsSecretRolesIdIndexRoute,
  putSecretsSecretsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsGenerateRsaKeyPairIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsGetSessionKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsSecretRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsSecretRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretsSecretRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsSecretRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecretsSecretRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretsSecretRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsSecretsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsSecretsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretsSecretsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsSecretsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecretsSecretsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretsSecretsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
