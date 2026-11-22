import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LineItemsLineItemIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LineItemsLineItemIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LineItemsLineItemIdRoute,
  getCrmObjects202609LineItemsRoute,
  patchCrmObjects202609LineItemsLineItemIdRoute,
  postCrmObjects202609LineItemsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609LineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LineItemsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
