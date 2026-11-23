import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentContactCentersRoute,
  getV1alpha1ParentQueryContactCenterQuotaRoute,
  patchV1alpha1NameRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1ParentContactCentersRoute,
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1NameLocationsRouteHandler,
  getV1alpha1NameOperationsRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentContactCentersRouteHandler,
  getV1alpha1ParentQueryContactCenterQuotaRouteHandler,
  patchV1alpha1NameRouteHandler,
  postV1alpha1NameCancelRouteHandler,
  postV1alpha1ParentContactCentersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameLocationsRoute, getV1alpha1NameLocationsRouteHandler)
  .openapi(getV1alpha1NameOperationsRoute, getV1alpha1NameOperationsRouteHandler)
  .openapi(postV1alpha1NameCancelRoute, postV1alpha1NameCancelRouteHandler)
  .openapi(getV1alpha1ParentContactCentersRoute, getV1alpha1ParentContactCentersRouteHandler)
  .openapi(postV1alpha1ParentContactCentersRoute, postV1alpha1ParentContactCentersRouteHandler)
  .openapi(
    getV1alpha1ParentQueryContactCenterQuotaRoute,
    getV1alpha1ParentQueryContactCenterQuotaRouteHandler,
  )

export default app
