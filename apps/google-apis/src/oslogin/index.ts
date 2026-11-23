import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLoginProfileRoute,
  getV1betaNameRoute,
  patchV1betaNameRoute,
  postV1betaParentImportSshPublicKeyRoute,
  postV1betaParentSshPublicKeysRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameLoginProfileRouteHandler,
  getV1betaNameRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaParentImportSshPublicKeyRouteHandler,
  postV1betaParentSshPublicKeysRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(getV1betaNameLoginProfileRoute, getV1betaNameLoginProfileRouteHandler)
  .openapi(postV1betaParentSshPublicKeysRoute, postV1betaParentSshPublicKeysRouteHandler)
  .openapi(postV1betaParentImportSshPublicKeyRoute, postV1betaParentImportSshPublicKeyRouteHandler)

export default app
