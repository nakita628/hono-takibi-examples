import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  getCrmObjects202609CommercePaymentsRoute,
  patchCrmObjects202609CommercePaymentsCommercePaymentIdRoute,
  postCrmObjects202609CommercePaymentsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609CommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CommercePaymentsCommercePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCrmObjects202609CommercePaymentsCommercePaymentIdAssociationsToObjectTypeRoute,
    (c) => {},
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
