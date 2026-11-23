import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  deleteCrmProperties202609ObjectTypePropertyNameRoute,
  getCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  getCrmProperties202609ObjectTypeGroupsRoute,
  getCrmProperties202609ObjectTypePropertyNameRoute,
  getCrmProperties202609ObjectTypeRoute,
  patchCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  patchCrmProperties202609ObjectTypePropertyNameRoute,
  postCrmProperties202609ObjectTypeBatchArchiveRoute,
  postCrmProperties202609ObjectTypeBatchCreateRoute,
  postCrmProperties202609ObjectTypeBatchReadRoute,
  postCrmProperties202609ObjectTypeGroupsRoute,
  postCrmProperties202609ObjectTypeRoute,
} from './routes'
import {
  deleteCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  deleteCrmProperties202609ObjectTypePropertyNameRouteHandler,
  getCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  getCrmProperties202609ObjectTypeGroupsRouteHandler,
  getCrmProperties202609ObjectTypePropertyNameRouteHandler,
  getCrmProperties202609ObjectTypeRouteHandler,
  patchCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  patchCrmProperties202609ObjectTypePropertyNameRouteHandler,
  postCrmProperties202609ObjectTypeBatchArchiveRouteHandler,
  postCrmProperties202609ObjectTypeBatchCreateRouteHandler,
  postCrmProperties202609ObjectTypeBatchReadRouteHandler,
  postCrmProperties202609ObjectTypeGroupsRouteHandler,
  postCrmProperties202609ObjectTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmProperties202609ObjectTypeRoute, getCrmProperties202609ObjectTypeRouteHandler)
  .openapi(postCrmProperties202609ObjectTypeRoute, postCrmProperties202609ObjectTypeRouteHandler)
  .openapi(
    postCrmProperties202609ObjectTypeBatchArchiveRoute,
    postCrmProperties202609ObjectTypeBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmProperties202609ObjectTypeBatchCreateRoute,
    postCrmProperties202609ObjectTypeBatchCreateRouteHandler,
  )
  .openapi(
    postCrmProperties202609ObjectTypeBatchReadRoute,
    postCrmProperties202609ObjectTypeBatchReadRouteHandler,
  )
  .openapi(
    getCrmProperties202609ObjectTypeGroupsRoute,
    getCrmProperties202609ObjectTypeGroupsRouteHandler,
  )
  .openapi(
    postCrmProperties202609ObjectTypeGroupsRoute,
    postCrmProperties202609ObjectTypeGroupsRouteHandler,
  )
  .openapi(
    getCrmProperties202609ObjectTypeGroupsGroupNameRoute,
    getCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  )
  .openapi(
    deleteCrmProperties202609ObjectTypeGroupsGroupNameRoute,
    deleteCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  )
  .openapi(
    patchCrmProperties202609ObjectTypeGroupsGroupNameRoute,
    patchCrmProperties202609ObjectTypeGroupsGroupNameRouteHandler,
  )
  .openapi(
    getCrmProperties202609ObjectTypePropertyNameRoute,
    getCrmProperties202609ObjectTypePropertyNameRouteHandler,
  )
  .openapi(
    deleteCrmProperties202609ObjectTypePropertyNameRoute,
    deleteCrmProperties202609ObjectTypePropertyNameRouteHandler,
  )
  .openapi(
    patchCrmProperties202609ObjectTypePropertyNameRoute,
    patchCrmProperties202609ObjectTypePropertyNameRouteHandler,
  )

export default app
