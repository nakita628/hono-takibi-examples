import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609DiscountsDiscountIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609DiscountsDiscountIdAssociationsToObjectTypeRoute,
  getCrmObjects202609DiscountsDiscountIdRoute,
  getCrmObjects202609DiscountsRoute,
  patchCrmObjects202609DiscountsDiscountIdRoute,
  postCrmObjects202609DiscountsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609DiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609DiscountsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
