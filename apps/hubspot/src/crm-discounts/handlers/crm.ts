import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609DiscountsDiscountIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRoute,
  getCrmObjects202609DiscountsDiscountIdRoute,
  getCrmObjects202609DiscountsRoute,
  patchCrmObjects202609DiscountsDiscountIdRoute,
  postCrmObjects202609DiscountsBatchArchiveRoute,
  postCrmObjects202609DiscountsBatchCreateRoute,
  postCrmObjects202609DiscountsBatchReadRoute,
  postCrmObjects202609DiscountsBatchUpdateRoute,
  postCrmObjects202609DiscountsBatchUpsertRoute,
  postCrmObjects202609DiscountsGdprDeleteRoute,
  postCrmObjects202609DiscountsMergeRoute,
  postCrmObjects202609DiscountsRoute,
  postCrmObjects202609DiscountsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609DiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609DiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609DiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609DiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRoute, (c) => {
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
