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
} from './routes'
import {
  getV1NameLocationsRouteHandler,
  getV1NamePublicKeyRouteHandler,
  getV1NameRouteHandler,
  getV1NameVerifyConnectivityRouteHandler,
  getV1ParentCryptoKeysRouteHandler,
  getV1ParentCryptoKeyVersionsRouteHandler,
  getV1ParentEkmConnectionsRouteHandler,
  getV1ParentImportJobsRouteHandler,
  getV1ParentKeyRingsRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1LocationGenerateRandomBytesRouteHandler,
  postV1NameAsymmetricDecryptRouteHandler,
  postV1NameAsymmetricSignRouteHandler,
  postV1NameDecryptRouteHandler,
  postV1NameDestroyRouteHandler,
  postV1NameEncryptRouteHandler,
  postV1NameMacSignRouteHandler,
  postV1NameMacVerifyRouteHandler,
  postV1NameRestoreRouteHandler,
  postV1NameUpdatePrimaryVersionRouteHandler,
  postV1ParentCryptoKeysRouteHandler,
  postV1ParentCryptoKeyVersionsImportRouteHandler,
  postV1ParentCryptoKeyVersionsRouteHandler,
  postV1ParentEkmConnectionsRouteHandler,
  postV1ParentImportJobsRouteHandler,
  postV1ParentKeyRingsRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1LocationGenerateRandomBytesRoute, postV1LocationGenerateRandomBytesRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NamePublicKeyRoute, getV1NamePublicKeyRouteHandler)
  .openapi(postV1NameAsymmetricDecryptRoute, postV1NameAsymmetricDecryptRouteHandler)
  .openapi(postV1NameAsymmetricSignRoute, postV1NameAsymmetricSignRouteHandler)
  .openapi(postV1NameDecryptRoute, postV1NameDecryptRouteHandler)
  .openapi(postV1NameDestroyRoute, postV1NameDestroyRouteHandler)
  .openapi(postV1NameEncryptRoute, postV1NameEncryptRouteHandler)
  .openapi(postV1NameMacSignRoute, postV1NameMacSignRouteHandler)
  .openapi(postV1NameMacVerifyRoute, postV1NameMacVerifyRouteHandler)
  .openapi(postV1NameRestoreRoute, postV1NameRestoreRouteHandler)
  .openapi(postV1NameUpdatePrimaryVersionRoute, postV1NameUpdatePrimaryVersionRouteHandler)
  .openapi(getV1NameVerifyConnectivityRoute, getV1NameVerifyConnectivityRouteHandler)
  .openapi(getV1ParentCryptoKeyVersionsRoute, getV1ParentCryptoKeyVersionsRouteHandler)
  .openapi(postV1ParentCryptoKeyVersionsRoute, postV1ParentCryptoKeyVersionsRouteHandler)
  .openapi(
    postV1ParentCryptoKeyVersionsImportRoute,
    postV1ParentCryptoKeyVersionsImportRouteHandler,
  )
  .openapi(getV1ParentCryptoKeysRoute, getV1ParentCryptoKeysRouteHandler)
  .openapi(postV1ParentCryptoKeysRoute, postV1ParentCryptoKeysRouteHandler)
  .openapi(getV1ParentEkmConnectionsRoute, getV1ParentEkmConnectionsRouteHandler)
  .openapi(postV1ParentEkmConnectionsRoute, postV1ParentEkmConnectionsRouteHandler)
  .openapi(getV1ParentImportJobsRoute, getV1ParentImportJobsRouteHandler)
  .openapi(postV1ParentImportJobsRoute, postV1ParentImportJobsRouteHandler)
  .openapi(getV1ParentKeyRingsRoute, getV1ParentKeyRingsRouteHandler)
  .openapi(postV1ParentKeyRingsRoute, postV1ParentKeyRingsRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
