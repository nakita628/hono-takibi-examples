import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersOrderIdAssociationsToObjectTypeRoute,
  getCrmObjects202609OrdersOrderIdRoute,
  getCrmObjects202609OrdersRoute,
  patchCrmObjects202609OrdersOrderIdRoute,
  postCrmObjects202609OrdersRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609OrdersRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
