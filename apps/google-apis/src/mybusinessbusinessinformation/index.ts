import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AttributesRoute,
  getV1CategoriesBatchGetRoute,
  getV1CategoriesRoute,
  getV1ChainsSearchRoute,
  getV1NameGetGoogleUpdatedRoute,
  getV1NameRoute,
  getV1ParentLocationsRoute,
  patchV1NameRoute,
  postV1GoogleLocationsSearchRoute,
  postV1NameAssociateRoute,
  postV1NameClearLocationAssociationRoute,
  postV1ParentLocationsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1AttributesRouteHandler,
  getV1CategoriesBatchGetRouteHandler,
  getV1CategoriesRouteHandler,
  getV1ChainsSearchRouteHandler,
  getV1NameGetGoogleUpdatedRouteHandler,
  getV1NameRouteHandler,
  getV1ParentLocationsRouteHandler,
  patchV1NameRouteHandler,
  postV1GoogleLocationsSearchRouteHandler,
  postV1NameAssociateRouteHandler,
  postV1NameClearLocationAssociationRouteHandler,
  postV1ParentLocationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AttributesRoute, getV1AttributesRouteHandler)
  .openapi(getV1CategoriesRoute, getV1CategoriesRouteHandler)
  .openapi(getV1CategoriesBatchGetRoute, getV1CategoriesBatchGetRouteHandler)
  .openapi(getV1ChainsSearchRoute, getV1ChainsSearchRouteHandler)
  .openapi(postV1GoogleLocationsSearchRoute, postV1GoogleLocationsSearchRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameAssociateRoute, postV1NameAssociateRouteHandler)
  .openapi(postV1NameClearLocationAssociationRoute, postV1NameClearLocationAssociationRouteHandler)
  .openapi(getV1NameGetGoogleUpdatedRoute, getV1NameGetGoogleUpdatedRouteHandler)
  .openapi(getV1ParentLocationsRoute, getV1ParentLocationsRouteHandler)
  .openapi(postV1ParentLocationsRoute, postV1ParentLocationsRouteHandler)

export default app
