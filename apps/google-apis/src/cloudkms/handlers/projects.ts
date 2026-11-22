import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameLocationsRoute,
  getV1NamePublicKeyRoute,
  getV1NameRoute,
  getV1NameVerifyConnectivityRoute,
  getV1ParentCryptoKeysRoute,
  getV1ParentCryptoKeyVersionsRoute,
  getV1ParentEkmConnectionsRoute,
  getV1ParentImportJobsRoute,
  getV1ParentKeyRingsRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1LocationGenerateRandomBytesRoute,
  postV1NameAsymmetricDecryptRoute,
  postV1NameAsymmetricSignRoute,
  postV1NameDecryptRoute,
  postV1NameDestroyRoute,
  postV1NameEncryptRoute,
  postV1NameMacSignRoute,
  postV1NameMacVerifyRoute,
  postV1NameRestoreRoute,
  postV1NameUpdatePrimaryVersionRoute,
  postV1ParentCryptoKeysRoute,
  postV1ParentCryptoKeyVersionsImportRoute,
  postV1ParentCryptoKeyVersionsRoute,
  postV1ParentEkmConnectionsRoute,
  postV1ParentImportJobsRoute,
  postV1ParentKeyRingsRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1LocationGenerateRandomBytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NamePublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAsymmetricDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAsymmetricSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDestroyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameMacSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameMacVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUpdatePrimaryVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameVerifyConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCryptoKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCryptoKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCryptoKeyVersionsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCryptoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCryptoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEkmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEkmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentKeyRingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentKeyRingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
