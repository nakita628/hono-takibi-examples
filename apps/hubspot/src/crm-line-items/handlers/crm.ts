import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LineItemsLineItemIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LineItemsLineItemIdRoute,
  getCrmObjects202609LineItemsRoute,
  patchCrmObjects202609LineItemsLineItemIdRoute,
  postCrmObjects202609LineItemsBatchArchiveRoute,
  postCrmObjects202609LineItemsBatchCreateRoute,
  postCrmObjects202609LineItemsBatchReadRoute,
  postCrmObjects202609LineItemsBatchUpdateRoute,
  postCrmObjects202609LineItemsBatchUpsertRoute,
  postCrmObjects202609LineItemsGdprDeleteRoute,
  postCrmObjects202609LineItemsMergeRoute,
  postCrmObjects202609LineItemsRoute,
  postCrmObjects202609LineItemsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609LineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609LineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609LineItemsLineItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRoute, (c) => {
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
