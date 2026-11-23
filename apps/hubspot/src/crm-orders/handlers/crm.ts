import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRoute,
  getCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersRoute,
  patchCrmObjects202609OrdersOrderIdRoute,
  postCrmObjects202609OrdersBatchArchiveRoute,
  postCrmObjects202609OrdersBatchCreateRoute,
  postCrmObjects202609OrdersBatchReadRoute,
  postCrmObjects202609OrdersBatchUpdateRoute,
  postCrmObjects202609OrdersBatchUpsertRoute,
  postCrmObjects202609OrdersGdprDeleteRoute,
  postCrmObjects202609OrdersMergeRoute,
  postCrmObjects202609OrdersRoute,
  postCrmObjects202609OrdersSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
